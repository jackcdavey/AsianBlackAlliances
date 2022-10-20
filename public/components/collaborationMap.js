
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
    const [markerA, setMarkerA] = useState(9);
    const [markerB, setMarkerB] = useState(9);


    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setMarkerA, setMarkerB);


    return (
        <ComposableMap
            projection="geoMercator"
            width={900}
            height={300}
            projectionConfig={{
                // Center between the US and China
                center: [0, 40],
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
                                data-tip="TEST"
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
                                        fill: "#F53",
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
                <Marker coordinates={[100, 35]}>
                    <circle id="asiaCircle" ref={wrapperRef} r={markerA} fill={COLORS.secondary}
                        onMouseEnter={() => {
                            alert('Yes, hello!');
                        }
                        }
                        // When the mouse is clicked elsewhere, the circle will return to its original size
                    onMouseLeave={() => {
                        setMarkerA(9);
                    }}

                        
                        
                        />
                </Marker>

                

                {/* North America */}
                <Marker coordinates={[-100, 40]}>
                <circle id="nAmericaCircle" r={markerB} fill={COLORS.secondary}
                onMouseEnter={() => {
                            setMarkerB(30);
                        }
                    }
                    
                    onMouseLeave={() => {
                        setMarkerB(9);
                    }
                    } />
                        {/* <text textAnchor="middle" fill="#F53" id="NATabs">
                    North America 
                    </text> */}
            </Marker>
                {/* </div> */}
            {/* </ZoomableGroup> */}
        </ComposableMap>
    );
}