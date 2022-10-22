import { MapContainer, TileLayer,Marker,Popup, L } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

import { COLORS } from '../styling/colors.js';

import { createClient } from 'next-sanity'



const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';


import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    // Marker
} from 'react-simple-maps';

const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2022-10-03',
  useCdn: false,
});

// var blueMarker = L.icon({
//   iconUrl: '../public/media/CustomAssets/blueMarker.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// });

export default function Map({ xPoints, yPoints, titles, bodies, links, colors }) {
  const pointRadius = 10;
  return (<>
    {/* {xPoints.map((xPoint, index) => {
      return <p>{xPoint}</p>
        })}
     */}
    
    {/* for each entry in xArr, print "Hi" */}
    <MapContainer center={[38, -90]} zoom={4} attributionControl={false} zoomControl={false} scrollWheelZoom={false} doubleClickZoom={false} dragging={true} style={{ height: "100%", width: "100%" }}>
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://api.mapbox.com/styles/v1/jackdavey/cl9jdntyr000416obzw4mbmkn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFja2RhdmV5IiwiYSI6ImNsOWpkbGJlaTNyeDM0MW12OG1yN3kzYXoifQ.uNZ4gl7axbkqaq0zm97DVw"
      />
      
      
      <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 600,
                // Center over the US
                center: [-96, 29]
            }}
        >
        {xPoints.map((xPoint, index) => {
          return(
      <Marker 
      position={[xPoint,yPoints[index]]}
      draggable={true}
              animate={true}
              iconUrl={'../public/media/CustomAssets/blueMarker.png'}
              iconRetinaUrl={'../public/media/CustomAssets/blueMarker.png'}

      >
        <Popup>
                <h2>{titles[index]}</h2>
                <p>{bodies[index]}</p>
                <a href={links[index]}>{links[index]}</a>
        </Popup>
            </Marker>
          )
        })}
        
        
        </ComposableMap>
    </MapContainer>
    </>
  )
}




export async function getStaticProps() {
  const roadtripStop = await client.fetch(`*[_type == "roadtripStop"]  | order(order asc)`)
  const myths = await client.fetch(`*[_type == "myth"]  | order(order asc)`)

  return {
    props: {
      roadtripStop,
      myths
    },
   revalidate: 10,

  };
}

