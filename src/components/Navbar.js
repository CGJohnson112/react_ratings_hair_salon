import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top">
                        
                        <Link to="/projects/hair_salon/" className="navbar-brand"  >Kim's Salon</Link>

                      
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto mr-1">
                            <li className="nav-item">
                                <a className="nav-link" href="#about" to="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#offers">Book Offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#schedule">Schedule</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#ratings">Ratings</a>
                            </li>
                            
                            </ul>
                        </div>
                    </nav>
                
            </div>
        )
    }
}

export default Navbar
