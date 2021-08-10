import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded">Home</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link to="/portfolio" className="nav-link py-3 px-0 px-lg-3 rounded">portfolio</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link to="/about" className="nav-link py-3 px-0 px-lg-3 rounded">about</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link to="/contact" className="nav-link py-3 px-0 px-lg-3 rounded">contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}
