import { createSlice } from '@reduxjs/toolkit'

export const mapSlice = createSlice({
  name: 'mapRef',
  initialState: {
    refrence: null,
    locations: [ {
      name:'masjed-meyssam',
      latlng:[],
      users:[],
      status:'active',
    }],
  },
  reducers: {
    setRefrence: (state, action) => {
      state.refrence = action.payload
    },
    setLocation: (state, action) => {
      state.refrence += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRefrence } = mapSlice.actions

export default mapSlice.reducer