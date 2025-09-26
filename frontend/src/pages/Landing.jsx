import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'

export default function LandingPage(){
    return (
        <div className="LandingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>Apna Video Call</h2>
                </div>
                <div className="navlist">
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role="button">
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainConteiner">
                <div>
                    <h1><span style={{color: "#ff9839"}}>Connect</span> with your Loved Ones</h1>
                    <p>Cover a distance by Video Call</p>
                    <div role="button">
                        <Link to={"/auth"}>Get Started</Link>
            
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt=""></img>
                </div>
            </div>

        </div>
       
    )
}

