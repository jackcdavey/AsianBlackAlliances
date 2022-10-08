
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from 'react-simple-maps';

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
                <Marker coordinates={[50, 0]}
                    // onMouseEnter={() => {
                    // setTooltipContent(`${geo.properties.name}`);
                    //     // alert('HELLO WORLD');
                // }}
                >
                    <circle r={3} fill="#FF5533" />
                </Marker>
                {/* </div> */}
            </ZoomableGroup>
        </ComposableMap>
    );
}