import Map from '../../components/Map/map'
import CheckToken from '../../components/checkToken/checkToken'
export default () =>{
    return  CheckToken(<div className=' w-100 m-3 border rounded map-container-hight-80'>
        <Map/>
    </div>)
}