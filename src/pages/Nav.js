import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/img/logo.png'


const NavBar = () => {
    return (
        <div >
            <Navbar className="navBar"  expand="lg">
                <Navbar.Brand href="#"><img src= {logo} alt="logo" width="70%"></img></Navbar.Brand>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className ="left nav navbar-nav">
                        <li className="li nav-item">
                            <Nav.Link   href="#">IDO</Nav.Link>
                        </li>
                        <li class="nav-item line">|</li>
                        <li className="li nav-item">
                            <Nav.Link  href="#">NFT Launchpad</Nav.Link>
                        </li>
                        <li class="nav-item line">|</li>
                        <li className="li nav-item"><Nav.Link class="" href="/nft-market">NFT Marketplace</Nav.Link></li>
                    </ul>
                

                    <ul className ="right nav ml-auto navbar-nav ">
                        <li className="nav-item">
                            <Nav.Link className="btn"  href="#">Dashboard</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link className="btn"  href="#">Connect Wallet</Nav.Link>
                        </li>
                    </ul>
                </div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" >  
                    <span class="navbar-toggler-icon"></span>
                </button>
            </Navbar>
            
            
        </div>
    );
};

export default NavBar;
