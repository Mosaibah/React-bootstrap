import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class SectionTwo extends Component {
    render() {
        return (
            <section className="page-section bg-primary text-white mb-0">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">
                    !صدتك
                </h2>
                <h2 className="page-section-heading text-center text-uppercase text-white mt-4">
                    وين رايح يالحبيب
                </h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="text-center mt-4">
                    <Link to="/" className="btn btn-xl btn-outline-light">ارجع بس</Link>
                </div>
            </div>
        </section>
        )
    }
}
