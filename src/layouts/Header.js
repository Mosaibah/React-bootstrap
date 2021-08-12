import React, { Component } from 'react'

import axios from 'axios'

export default class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    
    getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts', {params: {_limit:5}})
            .then(res => this.setState({posts: res.data}))
    }

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


                <button className="btn btn-xl btn-outline-light mt-4" onClick={this.getPosts}>
                    Load something
                </button>

                <p>
                    {this.state.posts.map(posts => 
                    <h2 key={posts.id} className="mt-5">
                        Title: {posts.title}
                    </h2>
                    )}
                </p>

            </div>
        </header>
        )
    }
}
