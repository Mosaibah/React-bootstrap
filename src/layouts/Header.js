import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." />
                <h1 className="masthead-heading mb-0">Abdulrahman Mosaibah</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Full Stack Web Developer</p>
            </div>
        </header>
        )
    }
}
