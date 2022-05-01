import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const CheckToken = (components) =>{
     const token = useSelector(state=>state.authorization.token)
    const router = useRouter()
    const norify = () =>  toast('sign-in/sign-up', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    useEffect (()=>{  
         if (token === null) {
             norify()
             router.push('/')
         } 

     },[])
    if (token !== null)  return <>{components}</>
    if (token === null) return ''
}
export default CheckToken;