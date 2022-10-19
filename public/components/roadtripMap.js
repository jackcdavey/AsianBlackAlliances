
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from 'react-simple-maps';

import { useState } from 'react';

import { COLORS } from '../styling/colors.js';

import { Tooltip } from './tooltip.js';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';



export default function RoadtripMap({ setTooltipContent }) {
    const [currentTooltip, setCurrentTooltip] = useState('');
    const pointRadius = 10;

    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 700,
                // Center over the US
                center: [-100, 40]
            }}
        >
            {/* <ZoomableGroup center={[-455, 33]} zoom={5}> */}
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            // fill={'#00' + Math.floor(Math.random() * 200 + 56).toString(16) + '50'}
                            <Geography key={geo.rsmKey} onMouseEnter={setCurrentTooltip(geo.rsmKey)} stroke="#FFF" strokeWidth={0.5} geography={geo} fill="#DDD" />
                        ))
                    }
                </Geographies>
                

                {/* USA, Wash DC */}
                {/* <Tooltip tooltipText="Washington, DC"> */}
                <Marker coordinates={[-78, 40]}>'
                        <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                    </Marker>
                {/* </Tooltip> */}
                {/* San Francisco */}
                <Marker coordinates={[-122.4194, 37.7749]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>
                {/* New York */}
                <Marker coordinates={[-74.0060, 40.7128]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>
                {/* Chicago Il */}
                <Marker coordinates={[-87.6298, 41.8781]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>
                {/* Austin TX */}
                <Marker coordinates={[-97.7431, 30.2672]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>

                {/* Boston MA */}
                <Marker coordinates={[-71.0589, 42.3601]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>
                {/* Pasadena CA */}
                <Marker coordinates={[-118.1445, 34.1478]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>
                {/* Los Angeles */}
                <Marker coordinates={[-118.2437, 34.0522]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>
                {/* Oakland */}
                <Marker coordinates={[-122.2711, 37.8044]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>

                {/* Richmond Virginia */}
                <Marker coordinates={[-77.4603, 37.5407]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>
                {/* Birmingham alabama */}
                <Marker coordinates={[-86.8025, 33.5207]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>
                {/* Montgomery alabama */}
                <Marker coordinates={[-86.2791, 32.3615]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>
                {/* Nashville Tn */}
                <Marker coordinates={[-86.7816, 36.1627]}>
                    <circle r={pointRadius} stroke='#aaa' strokeWidth={0.5} fill={COLORS.secondary} />
                </Marker>


            
            {/* </ZoomableGroup> */}
        </ComposableMap>
    );
}