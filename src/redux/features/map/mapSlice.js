import { createSlice } from '@reduxjs/toolkit'

export const mapSlice = createSlice({
  name: 'mapRef',
  initialState: {
    refrence: null,
    locations: [ {
      name:'test',
      latlng: {lat:35.715298,lng: 51.404343} ,
      description:'inja kojast chibe chiye',
      users:[
        {
          id:14587,
          name:'ali',
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