import React, { useEffect, useState } from "react";
import Ripples from 'react-ripples'
import { ToggleButton ,Button  } from "react-bootstrap";
import { Popup } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import * as L from "leaflet";
const Leaflet_Add_Node = () =>{
    const [checked, setChecked] = useState(false);
    const map = useSelector((state) => state.map.refrence)
    function add_marker(e){
        const newMarker = new L.marker(e.latlng).addTo(map);
        newMarker.bindPopup(popup).openPopup();
        document.getElementById('map').style.cursor = 'auto'
        setChecked(false)
        map.off('click');
    }

    
    return (
      <>
        <Ripples>
        <button
            className={checked ? " buttun buttun-success": " buttun buttun-light"}
            checked={checked}
            onClick={(e) =>{
                console.log(e.currentTarget.checked)
                setChecked(!e.currentTarget.checked)
                if(!e.currentTarget.checked){
                    map.on('click',add_marker);
                    document.getElementById('map').style.cursor = 'pointer'
                }else{
                    map.off('click');
                    document.getElementById('map').style.cursor = 'auto'
                }
              
            }}
        >
           + add new location
        </button>
          </Ripples>
      
      </>
    )
}
export default Leaflet_Add_Node