import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
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

export default function Map({ xPoints, yPoints, titles, bodies, links }) {
  const pointRadius = 10;
  return (<>
    {/* {xPoints.map((xPoint, index) => {
      return <p>{xPoint}</p>
        })}
     */}
    
    {/* for each entry in xArr, print "Hi" */}
    <MapContainer center={[38, -90]} zoom={4} attributionControl={false} zoomControl={false} scrollWheelZoom={false} doubleClickZoom={false} dragging={false} style={{ height: "100%", width: "100%" }}>
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
      {/* <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            // fill={'#00' + Math.floor(Math.random() * 200 + 56).toString(16) + '50'}
                            <Geography key={geo.rsmKey} stroke="#FFF" strokeWidth={1} geography={geo} fill="#BBB" />
                        ))
                    }
        </Geographies> */}
        
        {/* {roadtripStop?.map((stop) => (
          <Marker key={stop._id} position={[stop.yPos, stop.xPos]}>
            <Popup>
              <div>
                <h2>{stop.title}</h2>
                <p>{stop.body}</p>
              </div>
            </Popup>
          </Marker>
        ))} */}

        



        {/* JACK */}

          {/* You will need to pass all roadtrip items in as array, then map */}



        {xPoints.map((xPoint, index) => {
          return(
      <Marker 
      position={[xPoint,yPoints[index]]}
      draggable={true}
      animate={true}
      >
        <Popup>
                {titles[index]}
                {bodies[index]}
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

