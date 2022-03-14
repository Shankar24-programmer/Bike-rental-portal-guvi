import React from 'react'
import '../index.css'

export default function Navbar() {

    
    return (

        
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" >Bike Rental Portal</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">


                        <li className="nav-item">
                                <a className="nav-link">Welcome Back Muthu !</a>
                        </li>

                        <li className="nav-item">
                                <a href="/cart" className="nav-link">My Cart</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="/">Log-out</a>
                        </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
