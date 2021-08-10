import React, { Component } from 'react'

export default class SectionThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };
    
    }
    
    handleInputChange = (event) => {
        const {value, name} =  event.target;

        this.setState({
            [name]: value
        });
    }
        
    render() {
        return (
            <section className="page-section mt-5" id="contact">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        {/* <form id="contactForm" data-sb-form-api-token="API_TOKEN"> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" name='name' type="text" placeholder="Enter your name..." data-sb-validations="required"
                                value={this.state.name}
                                onChange={this.handleInputChange} />
                                {console.log('Name: ' + this.state.name)}
                                <label for="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" name="email" placeholder="name@example.com" data-sb-validations="required,email"
                                onChange={this.handleInputChange} />
                                {console.log('Email: ' + this.state.email)}
                                <label for="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" name='phone' placeholder="(123) 456-7890" data-sb-validations="required" 
                                onChange={this.handleInputChange} />
                                {console.log('Phone: ' + this.state.phone)}
                                <label for="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" name='message' type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"
                                onChange={this.handleInputChange} >
                                </textarea>{console.log('Message: ' + this.state.message)}
                                <label for="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
