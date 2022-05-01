import React from "react";
import axios from "axios";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
const Otp = () =>{
    const phoneNumber= useSelector(state=> state.authorization.phoneNumber)
    const [Otp,setOtp]=useState('')
    const [api,setApi]=useState({message:'',status:'',data:''})
    const post_data =async (data,url)=>{
         const response = await axios({
             url:url,
             method:'post',
             data:JSON.stringify(data),
         })
         return JSON.parse(response)
    }
    const otp_btn = (e) =>{
        setOtp(Otp)
        console.log(e)
        post_data(e,'https://')
        .then(res=>{
             console.log(res)
            setApi({message:res.data.message,status:res.data.status,data:res.data.data})
        })
         .catch( (e)=>{
             console.log(e)
             setApi({message:e.message,status:e.status,data:''})    
         })
    }
        return (
            <Form id='otp-form'>
          
                <Form.Group className="d-flex flex-column">
                    <Form.Label className="text-muted">Code has beed sent to {phoneNumber}</Form.Label>
                    <div className="d-flex justify-content-center container">
                    <OtpInput
                        className="otp-input "
                        value={Otp}
                        onChange={e=>{setOtp(e)}}
                        numInputs={6}
                        separator={<span className="text-light-25">-</span>}
                    />
                    </div>
                    <Form.Label className="text-primary">resend</Form.Label>
                    <Form.Label className="text-primary">change number</Form.Label>
                  
                </Form.Group>
               
            </Form>
         
        );
    }
export default Otp