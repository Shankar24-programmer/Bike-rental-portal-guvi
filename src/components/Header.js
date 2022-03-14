import React from 'react'
import '../components/Header.css';
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div>
            <header className="jumbotron jumbotron-fluid">
                <div className="container-fluid text-center">
                    <h5 className="display-3">Bike Rentals in Chennai</h5>
                    <p className="lead pb-2">As all the good things come at a cost, this city is suffering from the congestion of pollution and day-to-day traffic.</p>
                    <p><Link to='/home'><a href="#" className="btn btn-primary btn-lg" role="button">Book Now</a></Link></p>
                    
                </div>
            </header>
        </div>
    )
}
