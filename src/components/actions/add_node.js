import React, { useEffect, useState } from "react";
import Ripples from 'react-ripples'
import { Button , Modal , Form , Row   } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {setLocation} from '../../redux/features/map/mapSlice'
import { Formik } from "formik";
import * as yup from 'yup';
 
const Leaflet_Add_Node = () =>{
    const distpach = useDispatch()
    // states
    const schema = yup.object().shape({
        name: yup.string().required(),
      });
    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false);
    const handleCloseModal = () => setShow(false);
    const handleShow = () => setShow(true);
    const norify = () =>  toast('choose a point on map...', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    const map = useSelector((state) => state.map.refrence)
    const [latlng,setLatLng] = useState ('')
    // methodes
    function add_marker(e){
        setLatLng(e.latlng)
        document.getElementById('map').style.cursor = 'auto'
        setChecked(false)
        handleShow()
        map.off('click');
    }

    const saveForm = (e) =>{
        distpach(setLocation({latlng:latlng,name:e.name,description:e.description,user:[]}))
        handleCloseModal()
    }
    
    return (
      <>
        <Ripples>
            <button
                className={checked ? " buttun buttun-success": " buttun buttun-light"}
                checked={checked}
                onClick={(e) =>{
                    setChecked(!e.currentTarget.checked)
                    if(!e.currentTarget.checked){
                        norify()
                        document.getElementById('map').style.cursor = 'pointer'
                        map.on('click',add_marker);
                      
                    }else{
                        map.off('click');
                        document.getElementById('map').style.cursor = 'auto'
                    }
                
                }}
            >
            + add new location
            </button>
        </Ripples>
        <Modal show={show} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>new area  </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Formik
                validationSchema={schema}
                onSubmit={  (e)=>{
                    console.log(e)
                    saveForm(e)
                }}
                initialValues={{
                    name: '',
                    description: '',
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
                        <Form noValidate onSubmit={handleSubmit} id='add_new_location_form'>
                                <Row className='mb-3'>
                                    <Form.Group  controlId="validationFormik01"  className="col-7">
                                    <Form.Label> name*  </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        placeholder='name'
                                        onChange={handleChange}
                                        isValid={touched.name && !errors.name}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 '>
                                    <Form.Group controlId="formFileSm" >
                                        <Form.Label>area icon   </Form.Label>
                                        <Form.Control type="file" size="sm" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 ">
                                    <Form.Group controlId="validationFormik01">
                                    <Form.Label> description</Form.Label>
                                    <Form.Control
                                        style={{height:'100px',verticalAlign:'baesline'}}
                                        className="align-top"
                                        type="textarea"
                                        name="description"
                                        placeholder="description"
                                        value={values.description}
                                        onChange={handleChange}
                                        isValid={touched.descriptopn && !errors.description}
                                        isInvalid={!!errors.description}
                                    />
                                    <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                        </Form>
                    )}
            </Formik>
                            
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                cancel
            </Button>
            <Button variant="primary" form="add_new_location_form" type="submit" >
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
            
      </>
    )
}
export default Leaflet_Add_Node