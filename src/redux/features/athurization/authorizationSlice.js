import { createSlice } from '@reduxjs/toolkit'

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    step:'sign-up',
    phoneNumber:'09396380293',
    status:'sign-in',
    token:'ssssssssssssssss',
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    },
  
  },
})

// Action creators are generated for each case reducer function
export const {  setToken, setStep , setPhoneNumber , setStatus } = authorizationSlice.actions

export default authorizationSlice.reducer