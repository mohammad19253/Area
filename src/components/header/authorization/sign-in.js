import React from "react";
import { Formik } from "formik";
import * as yup from 'yup'
import axios from "axios";
import { useState } from "react";
import { Form,Row } from "react-bootstrap";
import Link from "next/link";
import { useDispatch } from "react-redux";
const Sign_In = () =>{
    const distpach = useDispatch()
    const [api,setApi]=useState({message:'',status:'',data:''})
    const post_data =async (data,url)=>{
         const response = await axios({
             url:url,
             method:'post',
             data:JSON.stringify(data),
         })
         return JSON.parse(response)
    }
    const sign_in_btn = (e) =>{
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
    const schema_sign_in = yup.object().shape({
        Username: yup.string().required(),
        password: yup.string().required(),
      });
    return <>
        <Formik
                                        validationSchema={schema_sign_in}
                                        onSubmit={  (e)=>{
                                            console.log(e)
                                            sign_in_btn(e)
                                         
                                        }}
                                        initialValues={{
                                            Username : '',
                                            password: '',
                                        }}
                                    >
                                        {({
                                        handleSubmit,
                                        handleChange,
                                        handleBlur,
                                        values,
                                        touched,
                                        isValid,
                                        errors,
                                    }) => (
                                        <Form noValidate onSubmit={handleSubmit} id='sign-in-form'>
                                                <Row className='mb-3'>
                                                    <Form.Group  controlId="validationFormik01" >
                                                    <Form.Label> Username  </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="Username"
                                                        value={values.Username}
                                                        placeholder='Username'
                                                        onChange={handleChange}
                                                        isValid={touched.Username && !errors.Username}
                                                        isInvalid={!!errors.Username}
                                                    />
                                                    <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">{errors.Username}</Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>
                                                <Row className='mb-3'>
                                                    <Form.Group  controlId="validationFormik01" >
                                                    <Form.Label> Password  </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="password"
                                                        value={values.password}
                                                        placeholder='password'
                                                        onChange={handleChange}
                                                        isValid={touched.password && !errors.password}
                                                        isInvalid={!!errors.password}
                                                    />
                                                     
                                                        <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                                        <Link href={'/'} style={{textDecoration :'none'}}>forgot password?</Link>
                                                    </Form.Group>
                                                </Row>
                                        </Form>
                                    )}
                                    </Formik>
    </>
}
export default Sign_In