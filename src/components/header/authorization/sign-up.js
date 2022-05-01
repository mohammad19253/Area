import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from 'yup'
import axios from "axios";
import { Form,Row } from "react-bootstrap";
import Link from "next/link";
import { setStep ,setPhoneNumber } from "../../../redux/features/athurization/authorizationSlice";
  import { useSelector , useDispatch } from "react-redux";
const Sign_Up = () =>{
    const selecet_form=useSelector(state=> state.authorization.step)
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
   const sign_up_btn = (e) =>{
       post_data(e,'https://')
       .then(res=>{
            console.log(res)
           setApi({message:res.data.message,status:res.data.status,data:res.data.data})
           distpach(setPhoneNumber(e.phoneNumber))
           distpach(setStep('otp'))
       })
        .catch( (e)=>{
            console.log(e)
            distpach(setStep('otp'))
            setApi({message:e.message,status:e.status,data:''})    
        })
   }
    const schema_sign_up = yup.object().shape({
        Username: yup.string().required(),
        password: yup.string().min(4).required(),
        confirmPassword: yup.string().required(),
        email: yup.string().email().required(),
        phoneNumber: yup.number().required('phone number is a required field'),
        checkbox:yup.bool().required(),
      });
    
    return <>
            <Formik
                                validate={values => {
                                    var errors={}
                                    if(values.password !== values.confirmPassword) errors.confirmPassword ='password  doesn\'t match'
                                    if(!values.checkbox) errors.checkbox ='you HAVE TO ACCEPT My roles'
                                    return errors;
                                  }}
                                validationSchema={schema_sign_up}
                                onSubmit={  (e)=>{
                                    console.log(e)
                                    sign_up_btn(e)
                                }}
                                initialValues={{
                                    Username: '',
                                    password: '',
                                    confirmPassword: '',
                                    email: '',
                                    phoneNumber:'',
                                    checkbox:false,
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
                                <Form noValidate onSubmit={handleSubmit} id='sign-up-form'>
                                      
                                        <Row className='mb-3'>
                                            <Form.Group  controlId="validationFormik01"  className="w-100">
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
                                            <Form.Control
                                                type="text"
                                                name="email"
                                                value={values.email}
                                                placeholder='email@gmail.com'
                                                onChange={handleChange}
                                                isValid={touched.email && !errors.email}
                                                isInvalid={!!errors.email}
                                            />
                                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className='mb-3'>
                                            <Form.Group  controlId="validationFormik01"  className="w-50">
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
                                            </Form.Group>
                                            <Form.Group  controlId="validationFormik01"  className="w-50">
                                            <Form.Control
                                                type="text"
                                                name="confirmPassword"
                                                value={values.confirmPassword}
                                                placeholder='confirmPassword'
                                                onChange={handleChange}
                                                isValid={touched.confirmPassword && !errors.confirmPassword}
                                                isInvalid={!!errors.confirmPassword}
                                            />
                                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className='mb-3'>
                                            <Form.Group  controlId="validationFormik01" >
                                            <Form.Control
                                                type="text"
                                                name="phoneNumber"
                                                value={values.phoneNumber}
                                                placeholder='phone-number'
                                                onChange={handleChange}
                                                isValid={touched.phoneNumber && !errors.phoneNumber}
                                                isInvalid={!!errors.phoneNumber}
                                            />
                                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className='mb-3'>
                                            <Form.Group  controlId="validationFormik01" >
                                            <Form.Check 
                                                type="checkbox"
                                                name="checkbox"
                                                label={<div>terms of ... <Link href={'/#more'}>more</Link></div>}
                                                value={values.checkbox}
                                                placeholder='checkbox'
                                                onChange={handleChange}
                                                isValid={touched.checkbox && !errors.checkbox}
                                                isInvalid={!!errors.checkbox}
                                            />
                                           
                                            </Form.Group>
                                        </Row>
                                      
                                      
                                    
                                </Form>
                            )}
                            </Formik>
    </>
}
export default Sign_Up