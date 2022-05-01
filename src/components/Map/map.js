
import React , { useState } from 'react';
import Leafet_Map from '../Leafet_Map/index';
const DEFAULT_CENTER = [35.715298, 51.404343] //tehran
import { useSelector } from "react-redux";
import Select from 'react-select';
export default function Map() {
  const locations = useSelector((state) => state.map.locations)
  console.log(locations.users)
  const options =  locations.map(marker=>{
    return marker.users.map(item =>{
      return {...item,value:item.name,label:item.name}
    })
  })
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className=' w-100 h-100 ' >
      <Leafet_Map  center={DEFAULT_CENTER} zoom={12} id='map' className='w-100 h-100'>
        {({ TileLayer, Marker, Popup ,FeatureGroup}) => (
          <>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/mohammad19253/cl17jz568001g14qg5ywlzdrr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9oYW1tYWQxOTI1MyIsImEiOiJjbDE3aTk5d3AwM3NoM2pyemppdXNtajJqIn0.FyBjrxqlRHKAH0LFNP2rWw"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
              <FeatureGroup>
                  {
              locations.map(marker=>{
                if( marker.latlng !== null){
                  return <Marker position={[marker.latlng.lat,marker.latlng.lng]}>
                            <Popup>
                                  <div>
                                    <strong> {marker.name}</strong>
                                    <div> {marker.description}</div>
                                    <hr/>
                                    <div className='my-2 d-flex w-100 justify-content-between '>
                                          <div>members:</div>
                                          <div>{marker.users.length}</div>
                                    </div>
                                    <div>
                                      <Select
                                          placeholder='search user'
                                          onChange={setSelectedOption}
                                          options={options}
                                        />
                                    </div>
                                  </div>
                              </Popup>
                        </Marker>
                }
            
              })
            }
              </FeatureGroup>
          </>
        )}
      </Leafet_Map>
    </div>
    

  )
}
