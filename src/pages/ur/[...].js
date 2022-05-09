import Profile from '../../components/profile/profile'
import CheckToken from '../../components/checkToken/checkToken'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import user_data_sample from './sample-data/user_data_sample'
export default () =>{
    const user = user_data_sample
    useEffect (() =>{
        //fetch data 
    },[])
    return CheckToken(<Profile  user={user}/>)
}
