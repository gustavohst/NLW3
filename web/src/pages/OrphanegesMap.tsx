import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/MapMarker.svg';

import '../styles/pages/orphaneges-map.css'

function OrphanegesMap() {
   return (
      <div id="page-map">
         <aside>
            <header>
               <img src={mapMarkerImg} alt="" />
               <h2>Escolha um orfanato no mapa</h2>
               <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
               <strong>Recife</strong>
               <span>Pernambuco</span>
            </footer>
         </aside>

         <Map 
            center={[-8.0274979,-34.9751382]}
            zoom={12}
            style={{width: '100%', height: '100%'}}
         >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
         </Map>   

         <Link className="create-orphanage" to="">
            <FiPlus size={32} color="#fff"></FiPlus>
         </Link>

      </div>
   );
}

export default OrphanegesMap;