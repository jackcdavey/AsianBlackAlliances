
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from 'react-simple-maps';

import { useState } from 'react';

import { COLORS } from '../styling/colors.js';

const geoUrl = '/features.json';


export default function CollaborationMap({ setTooltipContent }) {
    const [markerA, setMarkerA] = useState(9);
    const [markerB, setMarkerB] = useState(9);
    const [markerC, setMarkerC] = useState(9);
    const [markerD, setMarkerD] = useState(9);
    const [markerE, setMarkerE] = useState(9);
    const [markerF, setMarkerF] = useState(9);
    const [markerG, setMarkerG] = useState(9);


    return (
        <ComposableMap projection="geoMercator" width={900} height={300}>
            {/* <ZoomableGroup center={[0, 0]} zoom={1}> */}
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            // fill={'#00' + Math.floor(Math.random() * 200 + 56).toString(16) + '50'}
                            <Geography key={geo.rsmKey} geography={geo} fill={'lightgray'} stroke={'gray'}
                            onMouseEnter={() => {
                                setTooltipContent(`${geo.properties.name}`);
                        // alert('HELLO WORLD');
                            }}
                                onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                            />
                        ))
                    }
                </Geographies>
                {/*  */}
                {/* China */}
                <Marker coordinates={[100, 35]}>
                    <circle r={markerA} fill={COLORS.secondary}
                        onMouseEnter={() => {
                            setMarkerA(30);
                        }
                        }

                        onMouseLeave={() => {
                            setMarkerA(9);
                        }
                        }
                        />
                </Marker>

                {/* Papua New Guinea */}
                <Marker coordinates={[145, -6]}>
                <circle r={markerB} fill={COLORS.secondary}
                    onMouseEnter={() => {
                        setMarkerB(30);
                    }
                    }

                    onMouseLeave={() => {
                        setMarkerB(9);
                    }
                    }
                />
                </Marker>


                {/* Japan */}
                <Marker coordinates={[140, 35]}>
                <circle r={markerC} fill={COLORS.secondary}
                    onMouseEnter={() => {
                        setMarkerC(30);
                    }
                    }
                    
                    onMouseLeave={() => {
                        setMarkerC(9);
                    }
                    }
                />
                </Marker>

                {/* USA, Wash DC */}
                <Marker coordinates={[-78, 40]}>
                <circle r={markerD} fill={COLORS.secondary}
                onMouseEnter={() => {
                        setMarkerD(30);
                    }
                    }
                    
                    onMouseLeave={() => {
                        setMarkerD(9);
                    }
                    }/>
                </Marker>

                {/* Philippines  */}
                <Marker coordinates={[120, 13]}>
                <circle r={markerE} fill={COLORS.secondary}
                onMouseEnter={() => {
                        setMarkerE(30);
                    }
                    }
                    
                    onMouseLeave={() => {
                        setMarkerE(9);
                    }
                    }/>
                </Marker>

                {/* Vietnam */}
                <Marker coordinates={[105, 16]}>
                <circle r={markerF} fill={COLORS.secondary}
                    onMouseEnter={() => {
                        setMarkerF(30);
                    }
                    }
                    
                    onMouseLeave={() => {
                        setMarkerF(9);
                    }
                    }
                />
                </Marker>

                {/* Indonesia, Bandung */}
                <Marker coordinates={[107, -6]}>
                <circle r={markerG} fill={COLORS.secondary}
                onMouseEnter={() => {
                        setMarkerG(30);
                    }
                    }
                    
                    onMouseLeave={() => {
                        setMarkerG(9);
                    }
                    }/>
                </Marker>



                {/* </div> */}
            {/* </ZoomableGroup> */}
        </ComposableMap>
    );
}