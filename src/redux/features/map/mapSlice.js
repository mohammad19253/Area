import { createSlice } from '@reduxjs/toolkit'
import park from './sample-data/park.jpg'
import profile_picture from './sample-data/profile-picture.jpg'
export const mapSlice = createSlice({
  name: 'mapRef',
  initialState: {
    refrence: null,
    locations: [ {
      name:'location name',
      images: [ park,park,park,park ],
      latlng: {lat:35.715298,lng: 51.404343} ,
      description:'location description',
      phone_number:'phone number',
      events: [{
        status:'active',
        expirationDate:'expiration date',
        initalData:'inital data',
        host:'host name',
        title:'title text',

      }],
      members:[
        {
          id:14587,
          name:'ali',
          profile_picture:profile_picture,
          communicatorsNubmers:100,
          eventsNumbers:120,
          postsNumbers:0,
          status:'online'
        }
      ],
    }],
   
  },
  reducers: {
    setRefrence: (state, action) => {
      state.refrence = action.payload
    },
    setLocation: (state, action) => {
      state.locations = [...state.locations,action.payload] 
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRefrence,setLocation } = mapSlice.actions

export default mapSlice.reducer