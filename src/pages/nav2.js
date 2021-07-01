import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/img/logo.png'
const Nav2 = () => {
    return (
        <div className="bg-dark container-fluid">
            <Navbar  className="nav2 navbar-fixed-top" bg="dark" expand="lg">
                <Navbar.Brand href="#"><img src= {logo} alt="logo" width="60%"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" ><span  className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse className=" bg-dark" id="basic-navbar-nav">
                    <Nav className="mr-auto left">
                    <Nav.Link href="#home">IDO</Nav.Link>
                    <Nav.Item className="dash">|</Nav.Item>
                    <Nav.Link href="#link">NFT Launchpad</Nav.Link>
                    <Nav.Item className="dash">|</Nav.Item>
                    <Nav.Link href="#link">NFT Marketplace</Nav.Link>
                    </Nav>
                    <Nav className="right">
                    <Nav.Link className="item" href="#home">Dashboard  </Nav.Link>
                    <Nav.Link className="item" href="#link">Connect Wallet</Nav.Link>
                    </Nav>
    
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Nav2
