import React, { useState } from "react";
import Sign_In from './sign-in'
import Otp from './otp'
import Sign_Up from './sign-up'
import { Modal,Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStep } from '../../../redux/features/athurization/authorizationSlice';
const Sign_In_Sign_Up = ({set_modal,show}) =>{
    
    const selecet_form=useSelector(state=> state.authorization.step)
    const distpach = useDispatch()
    const  handleCloseModal = () =>{    show ? set_modal(false) : set_modal(true) }
    const switchAthu= (value) =>{
        switch (value){
            case 'otp' : return <Otp />
            case  'sign-in' : return <Sign_In />
            case  'sign-up' : return <Sign_Up />
            default : return <Sign_In />
        }
    }
    return <>
       <Modal show={show} onHide={handleCloseModal} size='sm'>
                        <Modal.Header closeButton>
                        <Modal.Title className='w-100' >
                            <div className='d-flex cursor-pointer'>
                                <div    className={selecet_form === 'sign-up' || selecet_form === 'otp' ? ' p-2 text-light-25 d-flex align-items-center fs-7' : 'trnasition p-2 fs-4'} onClick={()=>{distpach(setStep('sign-in'))}}> Sign in </div>
                             
                                <div    className={selecet_form === 'sign-in'   ? ' p-2 text-light-25 d-flex align-items-center fs-7' : 'trnasition p-2 fs-4'} onClick={()=>{distpach(setStep('sign-up'))}}> Sign up </div>
                            </div>
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                {switchAthu(selecet_form)}        
                        </Modal.Body>
                        <Modal.Footer>
                        <Button className="w-100" variant="primary" form={ selecet_form === 'sign-up' ? 'sign-up-form' : selecet_form === 'sign-in' ? 'sign-in-form' : 'otp-form'} type="submit" >
                           { selecet_form === 'sign-up' ? 'sign-up' :  selecet_form === 'sign-in' ?  'sign-in' : 'confirm'}
                        </Button>
                        </Modal.Footer>
                    </Modal>
    </>
}
export default Sign_In_Sign_Up