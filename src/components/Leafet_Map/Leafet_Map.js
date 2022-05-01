import { useEffect,useRef } from 'react';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.css';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';


import { useDispatch,useSelector } from 'react-redux'
import { setRefrence } from '../../redux/features/map/mapSlice';
const { MapContainer, MapConsumer } = ReactLeaflet;
const Leafet_Map = ({ children, className, ...rest }) => {
  const mapRef= useRef()
  const initalMapRef = useSelector((state) => state.map.refrence)
  const dispatch = useDispatch()
  useEffect(()=>{ 
    console.log(initalMapRef,mapRef)
    dispatch(setRefrence(mapRef.current))
  },[initalMapRef])
  let mapClassName = styles.map;

  if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName}     whenCreated={ mapInstance => {mapRef.current = mapInstance } } {...rest} >
      <MapConsumer>
        {(map) => children(ReactLeaflet, map)}
        
      </MapConsumer>
    </MapContainer>
  )
}

export default Leafet_Map;