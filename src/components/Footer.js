import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="textBox">
                <h6>SHARE PROFILE</h6>
                <div>
                    <i className="fa fa-facebook fontAwesomes"></i>
                    <i className="fa fa-twitter fontAwesomes"></i>
                    <i className="fa fa-envelope fontAwesomes"></i>
                </div>
                <h6>SuburbanStyle Media, LLC &copy; 2020. All rights reserved</h6>
                <h6>Original site: <a href="https://www.styleseat.com/m/v/michellelittlefield2?fbclid=IwAR1Kbd0ZvIUcMpVs8TT2f3WLa0zsaNRccF4lbMWT8ICPHPiLwp-qYr1kjq4">here</a> </h6>

            </div>
        )
    }
}

export default Footer
