import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';


import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    // Marker
} from 'react-simple-maps';

const Map = () => {
  return (
    <MapContainer center={[40.8054, -74.0241]} zoom={14} attributionControl={false} zoomControl={false} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
      {/* <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://www.openstreetmap.org/#map=5/37.003/-95.186"
  /> */}
      <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 600,
                // Center over the US
                center: [-96, 29]
            }}
        >
      <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            // fill={'#00' + Math.floor(Math.random() * 200 + 56).toString(16) + '50'}
                            <Geography key={geo.rsmKey} stroke="#FFF" strokeWidth={1} geography={geo} fill="#BBB" />
                        ))
                    }
                </Geographies>
      <Marker 
      position={[40.8054,-74.0241]}
      draggable={true}
      animate={true}
      >
        <Popup>
          Hey ! you found me
        </Popup>
        </Marker>
        </ComposableMap>
    </MapContainer>
  )
}

export default Map
