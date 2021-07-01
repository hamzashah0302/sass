import React from 'react'
import {Nav} from 'react-bootstrap'
import tv from '../../assets/img/tv.svg'
import copy from '../../assets/img/copy.svg'
import power1 from '../../assets/img/power1.png'
import power2 from '../../assets/img/power2.png'
import power3 from '../../assets/img/power3.png'
import power4 from '../../assets/img/power4.png'
const Intro = () => {
    return (
        <div className="intro">
            <div className="upper">
                <h1><span className="span">Invest today.</span> Live tomorrow.</h1>
                <p>Prostarter is a community-centric and transparent DeFi cross-chain platform offering project fundraisings, token sales, and much more for the Crypto community.</p>
                <Nav.Link className="btntv" href="#"> 
                <img className="wh2" src={tv} alt=""/>LIVE Whitelisting
                </Nav.Link>
            </div>
            
            <div className="lower">
                <p>CONTRACT ADDRESS</p>
                <div className="copy">
                <a  rel="noreferrer" href="#">0x234...….b8932</a><img src={copy} alt=""/>
                </div>

            </div>
            {/* <div className="labels"> */}
                <span class="p">Powered By.</span>
            
                <div className="powered-by ">
                    <img  src={power1} alt="img" />
                    <img  src={power2} alt="img"/>
                    <img  src={power3} alt="img"/>
                    <img  src={power4} alt="img"/>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Intro
