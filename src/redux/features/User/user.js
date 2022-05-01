import { createSlice } from '@reduxjs/toolkit'
import banner from './sample-data/banner.jpg'
import post1 from './sample-data/post1.jpg'
import profile_picture from './sample-data/profile-picture.jpg'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    
      id:14587,
      communicators:[],
      events:[],
      posts:[ {
        id: 0 ,
        image:post1,
        like:[],
        date:'',
        description:'salam dostan in ye nft iye bekharid hahaha',
        comments: [ {
            key:'',
            comment:'',
            reply:'',
          },
        ],
      },],
      dm:[
        {
          id:'',
        }
      ],
    status:'online',
    firstName:'mohammad19253',
    lastName:'mirzaei',
    userName:'mohammad19253',
    phoneNumber:'09396380293',
    bio:'something is here',
    website:'mohammadmirzaei.ir',
    profile_picture:profile_picture,
    banner_image : banner,
  },
  reducers: {
    setFirstname: (state, action) => {
        state.userName = action.payload
      },
    setLastname: (state, action) => {
    state.userName = action.payload
    },
    setUsername: (state, action) => {
    state.userName = action.payload
    },
    setUserPicture: (state, action) => {
      state.userName = action.payload
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload
    },
  
  },
})

// Action creators are generated for each case reducer function
export const {  setFirstname,setLastname,setUsername, setUserPicture , setPhoneNumber } = UserSlice.actions

export default UserSlice.reducer