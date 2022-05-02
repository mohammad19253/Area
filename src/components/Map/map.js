
import React , { useState } from 'react';
import Leafet_Map from '../Leafet_Map/index';
const DEFAULT_CENTER = [35.715298, 51.404343] //tehran
import { useSelector } from "react-redux";
import Select from 'react-select';
export default function Map() {
  const locations = useSelector((state) => state.map.locations)
  const [selectedOption, setSelectedOption] = useState(null);
  const locationsOptions = (marker) => {
    return marker.members.map(user =>{
      return {
        value:user.name,
        label:
              <>
              <img  src={user.profile_picture.src} className='profile-img-1x'/>
              {user.name}
              </>
        }
    })
  }

  return (
    <div className=' w-100 h-100 ' >
      <Leafet_Map  center={DEFAULT_CENTER} zoom={12} id='map' className='w-100 h-100'>
        {({ TileLayer, Marker, Popup ,FeatureGroup, Tooltip}) => (
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
                                  <div className='d-flex p-2 '>
                                    <div className='mx-1 location-details-popup'>
                                        <strong> {marker.name}</strong>
                                        <div> {marker.description}</div>
                                        <hr/>
                                        <div className='my-2 d-flex w-100 justify-content-between '>
                                              <strong className='text-primary'>members:</strong>
                                              <div>{marker.members.length}</div>
                                        </div>
                                        <div>
                                          <Select
                                              placeholder='search user'
                                              onChange={setSelectedOption}
                                              options={locationsOptions(marker)}
                                            />
                                        </div>
                                        <hr/>
                                        <div className='my-2 d-flex w-100 justify-content-between '>
                                          <strong className='text-success'>active events:</strong>
                                          <div>{marker.events.filter( item=> item.status =='active').length}</div>
                                        </div>
                                    </div>
                                    <div className='mx-1 locations-images  '>
                                        {
                                          marker.images.map( i=>{
                                            return <img className='m-1 border rounded' src={i.src} />
                                          })
                                        }
                                    </div>
                                  </div>
                              </Popup>
                              <Tooltip>
                                {marker.name}
                              </Tooltip>
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
