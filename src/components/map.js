
import Leafet_Map from '../components/Leafet_Map/index';
const DEFAULT_CENTER = [35.715298, 51.404343] //tehran
import { useSelector } from "react-redux";
export default function Map() {
  const locations = useSelector((state) => state.map.locations)
  return (
        <Leafet_Map  center={DEFAULT_CENTER} zoom={12} id='map'>
    {({ TileLayer, Marker, Popup }) => (
      <>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mohammad19253/cl17jz568001g14qg5ywlzdrr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9oYW1tYWQxOTI1MyIsImEiOiJjbDE3aTk5d3AwM3NoM2pyemppdXNtajJqIn0.FyBjrxqlRHKAH0LFNP2rWw"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          locations.map(marker=>{
            <Marker position={marker.latlng}>
                <Popup>
                    {marker.name}
                </Popup>
          </Marker>
          })
        }
      </>
    )}
  </Leafet_Map>

  )
}
