import React, { useEffect, useRef } from "react";
import Map from '../Map/map'
import { useSelector } from "react-redux";
const Dashboard = () =>{
    const user = useSelector (state=>state.user)
    const flex_containter_ref= useRef();
    useEffect (()=>{  
         flex_containter_ref.current.scrollTo({left:flex_containter_ref.current.clientWidth/3})  
    },[flex_containter_ref])
    return (
            <section className="d-flex">
                <div className="w-100 m-3">
                    <div className="w-100 m-1 d-flex"> 
                        <div className="profile w-50 border rounded m-1 p-3">
                            <h1 className="fs-3">Welcome {user.userName}</h1>
                            <p className="fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className='border rounded m-1 w-100 map-container-hight-40'> <Map  /></div>
                    </div>
                    <div className="w-100">
                    <div className="w-100 m-1 pb-2 d-flex flex-nowrap flex-containter" ref={flex_containter_ref}> 
                        <div className="card  border rounded m-1 p-3">
                            <h1 className="fs-3">Category</h1>
                            <p className="fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="card  border rounded m-1 p-3">
                            <h1 className="fs-3">Find old freind</h1>
                            <p className="fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="card  border rounded m-1 p-3">
                            <h1 className="fs-3">Join meeting</h1>
                            <p className="fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="card  border rounded m-1 p-3">
                            <h1 className="fs-3">Start gathering</h1>
                            <p className="fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="card  border rounded m-1 p-3">
                            <h1 className="fs-3">Write easys</h1>
                            <p className="fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                     
                    </div>

                    </div>
              
                </div>
            </section>
    )
}

export default Dashboard