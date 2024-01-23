'use client'

import dynamic from 'next/dynamic';
import { createClient } from 'next-sanity';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2024-01-22',
  useCdn: false,
});

// Dynamically import Leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function Map({ xPoints, yPoints, titles, bodies, links, colors, cities, allCities, isLoaded }) {
  const [customIcon, setCustomIcon] = useState(null);

  var cityXPostions = [];
  var cityYPostions = [];

  // For each city, find the index of its first occurence in allCities, and use that index to find the x and y to push to the cityXPostions and cityYPostions arrays
  for (var i = 0; i < cities.length; i++) {
    var cityIndex = allCities.indexOf(cities[i]);
    cityXPostions.push(xPoints[cityIndex]);
    cityYPostions.push(yPoints[cityIndex]);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      const icon = new L.Icon({
        iconUrl: '/media/CustomAssets/blueMarker.png',
        iconRetinaUrl: '/media/CustomAssets/blueMarker.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'path-to-shadow-image.png',
        shadowSize: [41, 41]
      });
      setCustomIcon(icon);
    }
  }, []);

  return (
    <>
      {typeof window !== 'undefined' && customIcon && (
        <MapContainer center={[38, -97]} zoom={4} attributionControl={false} zoomControl={true} scrollWheelZoom={false} doubleClickZoom={true} dragging={true} style={{ height: "100%", width: "100%", zIndex: 0, borderRadius: '25px' }}>
          <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://api.mapbox.com/styles/v1/jackdavey/cl9jdntyr000416obzw4mbmkn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFja2RhdmV5IiwiYSI6ImNsOWpkbGJlaTNyeDM0MW12OG1yN3kzYXoifQ.uNZ4gl7axbkqaq0zm97DVw"
      />
          {cities.map((city, index) => (
            <Marker
              key={index}
              position={[cityXPostions[index], cityYPostions[index]]}
              icon={customIcon}
            >
              <Popup >
                <div style={{maxHeight: '15rem', overflow: 'scroll'}} >
                {allCities.map((c, index2) => {
                  // {alert(c)}
                  if (c === city && c !== 'undefined') {
                    return (
                      <div key={index2} >
                  <h3 style={{marginBottom: '0.2rem'}}>{titles[index2]}</h3>
                  <p style={{marginTop: 0, marginBottom: 0}}>{bodies[index2]}</p>
                  <a href={links[index2]}>Learn More</a>
                </div>)
                  }
                }
                )}
                </div>
              </Popup>
              </Marker>
          ))}
        </MapContainer>
      )}
    </>
  );
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

