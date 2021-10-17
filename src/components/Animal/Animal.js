import React, { Component } from 'react'
import './Animal.css';

import img0 from "./images/0.png";
import img1 from "./images/1.png";
import img2 from "./images/2.png";


class Animal extends Component {
    static defaultProps = {
        images: [img0, img1, img2]
    }

    render() {
        return (
            <div className = "Animal">
                <img src = {this.props.images[0]} alt = ""/>
                <a href="https://www.vecteezy.com/free-vector/cute-animal">Cute Animal Vectors by Vecteezy</a>
            </div>
        )
    }
}

export default Animal
