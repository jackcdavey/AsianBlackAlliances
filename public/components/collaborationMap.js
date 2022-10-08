
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from 'react-simple-maps';

import { COLORS } from '../styling/colors.js';

const geoUrl = '/features.json';


export default function CollaborationMap({ setTooltipContent }) {
    return (
        <ComposableMap projection="geoMercator" width={800} height={400}>
            <ZoomableGroup center={[0, 0]} zoom={1}>
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
                <Marker coordinates={[100, 35]}
                
                    // onMouseEnter={() => {
                    // setTooltipContent(`${geo.properties.name}`);
                    //     // alert('HELLO WORLD');
                // }}
                >
                    <circle r={9} fill={COLORS.secondary} />
                </Marker>

                {/* Japan */}
                <Marker coordinates={[140, 35]}>
                    <circle r={9} fill={COLORS.secondary} />
                </Marker>

                {/* USA, Wash DC */}
                <Marker coordinates={[-78, 40]}>
                    <circle r={9} fill={COLORS.secondary} />
                </Marker>

                {/* Philippines  */}
                <Marker coordinates={[120, 13]}>
                    <circle r={9} fill={COLORS.secondary} />
                </Marker>

                {/* Vietnam */}
                <Marker coordinates={[105, 16]}>
                    <circle r={9} fill={COLORS.secondary} />
                </Marker>

                {/* Indonesia, Bandung */}
                <Marker coordinates={[107, -6]}>
                    <circle r={9} fill={COLORS.secondary} />
                </Marker>



                {/* </div> */}
            </ZoomableGroup>
        </ComposableMap>
    );
}