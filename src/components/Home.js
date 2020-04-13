import React, { Component } from 'react'
import Carousel from './Carousel'
import About from './About'
import Offers from './Offers'
import Ratings from './Ratings'
import Schedule from './Schedule'




export class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <About />
                <Offers />
                <Ratings />
                <Schedule />
                
            </div>
        )
    }
}

export default Home
