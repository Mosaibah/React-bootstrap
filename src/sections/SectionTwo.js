import React, { Component } from 'react'

export default class SectionTwo extends Component {
    render() {
        return (
            <section className="page-section bg-primary text-white mb-0 mt-5" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-50 "><p className="lead">
                        I started my road in Web Development before one year, In this year I learned PHP, Javascript, Laravel, HTML, CSS Bootstrap, TailwindCSS, Linux(ubuntu, CentOS), Manage server in Digitalocean, Git & GitHub, and now I started learn React with Mr. Fahad Al-Subaie.
                        </p></div>
            
                </div>
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://twitter.com/FahadAlsubaie01/status/1418929698927742979?s=20">
                        <i className="fab fa-fw fa-twitter me-2"></i>
                        Join Wit Us!
                    </a>
                </div>
            </div>
        </section>
        )
    }
}
