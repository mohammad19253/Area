import React, { useEffect, useState } from "react";
import { Navbar,Nav,Container,NavDropdown } from "react-bootstrap";
import Sign_In_Sign_Up from "./authorization/modal";
import { useSelector } from "react-redux";
const Header = () =>{
    const user = useSelector(state=>state.user)
    const userStatus = useSelector(state=>state.authorization.status)
    const [formModal,setFormModal]=useState(false)
    const  handleCloseModal = () =>{    formModal ? setFormModal(false) : setFormModal(true)  }
    return (
        <div className="header-container">
            <Navbar collapseOnSelect  className="bg-light  text-light p-0">
                <Container>
                <Navbar.Brand href="#home">Challenge</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#Account">Account</Nav.Link>
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2"> Something</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">about</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    {userStatus === 'unknown' ?
                        <Nav>
                            <Nav.Link href="/#authorization" className=" rounded text-center " onClick={handleCloseModal}>Sign in / Sign up </Nav.Link>
                            <Sign_In_Sign_Up show={formModal} set_modal={(e)=>setFormModal(e)}/>
                        </Nav>
                        :   
                        userStatus === 'sign-in' ? 
                        <Nav>
                            <Nav.Link href="/dashboard" className="text-center d-flex" >
                                <div className="d-flex align-items-center fs-6 mx-2 " >{user.userName}</div>
                                <img src={user.profile_picture.src} className="profile-img-1x"/>
                            </Nav.Link>
                        </Nav>
                        :
                        ''
                    }
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header