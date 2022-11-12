
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from 'react-simple-maps';

import { useState } from 'react';

import React, { useRef, useEffect, memo } from "react";

import { COLORS } from '../styling/colors.js';

const geoUrl = '/features.json';

function useOutsideAlerter(ref, setMarkerA, setMarkerB) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event, setMarkerA, setMarkerB) {
      if (ref.current && !ref.current.contains(event.target)) {
        //   alert("You clicked outside of me!");
        //   Reset market sizes, hide tooltips
        //   setMarkerA(9);
        //   setMarkerB(9);
          
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}




export default function CollaborationMap({ setTooltipContent }) {
    const [markerA, setMarkerA] = useState(90);
    const [markerB, setMarkerB] = useState(90);
    const [colorA, setColorA] = useState(COLORS.secondary);
    const [colorB, setColorB] = useState(COLORS.secondary);
    const [currentSelection, setCurrentSelection] = useState('');


    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setMarkerA, setMarkerB);

    function resetMarkers() {
        if (currentSelection == 'asia') {
            setMarkerB(90);
            setColorB(COLORS.secondary);
        }
        if (currentSelection == 'northamerica') {
            setMarkerA(90);
            setColorA(COLORS.secondary);
        }
    }


    return (
        <ComposableMap
            projection="geoMercator"
            width={900}
            height={200}
            style={{ borderRadius: '25px', overflow: 'hidden', borderColor: COLORS.primaryLight, borderWidth: '3px', borderStyle: 'solid' }}
            projectionConfig={{
                // Center between the US and China
                center: [0, 30],
                scale: 180

            }}
        >
            {/* <ZoomableGroup center={[0, 0]} zoom={1}> */}
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            // fill={'#00' + Math.floor(Math.random() * 200 + 56).toString(16) + '50'}
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                // data-tip="TEST"
                                fill={'lightgray'}
                                stroke={'gray'}
                                onMouseEnter={() => {
                                    setTooltipContent("TEST");
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                }}
                                style={{
                                    default: {
                                        fill: "#D6D6DA",
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "#999999",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#E42",
                                        outline: "none"
                                    }
                  }}
                            />
                        ))
                    }
                </Geographies>
                {/*  */}
                {/* China */}
            <Marker coordinates={[100, 30]}
            onClick={() => {
                            setCurrentSelection('asia');
                            resetMarkers();
                        }}
                        >
                <a href="#asia">
                    <circle id="asiaCircle" ref={wrapperRef} r={markerA} fill={colorA} opacity={0.5} 
                        
                        onMouseEnter={() => {
                            setMarkerA(100);   
                            setColorA(COLORS.primary);

                        }
                        }
                        // When the mouse is clicked elsewhere, the circle will return to its original size
                        onMouseLeave={() => {
                        if(currentSelection != 'asia') {
                        setMarkerA(90);
                            setColorA(COLORS.secondary);
                        }

                    }}
                    />
                </a>
                </Marker>

                

                {/* North America */}
            <Marker coordinates={[-100, 30]}>
              <a href="#northAmerica">
                    <circle id="nAmericaCircle" r={markerB} fill={colorB} opacity={0.5}
                        onClick={() => {
                            setCurrentSelection('northAmerica');
                            resetMarkers();
                        }}
                onMouseEnter={() => {
                    setMarkerB(100);   
                    setColorB(COLORS.primary);
                        }
                    }
                    
                        onMouseLeave={() => {
                            if (currentSelection != 'northAmerica') {
                                setMarkerB(90);
                                setColorB(COLORS.secondary);
                            }

                    }
                    } />
                </a>
                        {/* <text textAnchor="middle" fill="#F53" id="NATabs">
                    North America 
                    </text> */}
            </Marker>
                {/* </div> */}
            {/* </ZoomableGroup> */}
        </ComposableMap>
    );
}