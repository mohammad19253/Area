import Profile from '../../components/profile/profile'
import CheckToken from '../../components/checkToken/checkToken'
import { useSelector } from 'react-redux'
export default () =>{
    const user = useSelector(state=>state.user)

    return CheckToken(<Profile  user={user}/>)
}
