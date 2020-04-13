import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Call from './Call'
import Message from './Message'

function messageMe(){
    alert('caaaattt')
}

function callMe(){
    alert('doooooogggg')
}

export class Schedule extends Component {
    

    render() {

        return (
            <div className="textBox">
            <a name="schedule"></a>
            
            <h6>Kim Sarkeesian</h6>
            <p>11708 West 95th St Suite 555</p>
            <p>OP KS 66214</p>
            <p>888-888-8888</p>
            <Link to ="/message" className="btn btn-outline-primary btn_1" >MESSAGE</Link>
            <Link to= "/call" className="btn btn-outline-warning btn_1" >CALL</Link>

            <hr/>


                <h6>Business Hours</h6>
                    <ul>
                        <li>Sunday: Closed</li>
                        <li>Monday: Closed</li>
                        <li>Tuesday: 1:00PM - 8:00 PM</li>
                        <li>Wednesday: 1:00PM - 8:00 PM</li>
                        <li>Thursday: 1:00PM - 8:00 PM</li>
                        <li>Friday: 1:00PM - 8:00 PM</li>
                        <li>Saturday: 1:00PM - 8:00 PM</li>
                    </ul>
                    <hr/>

              
                <h6>Kim Sarkeesian's cancelation policy</h6>
                
                <p>You will not be charged if you cancel at least 24 hours before your appointment starts. Otherwise, you will be charged 25% of service price for late cancellations and 50% for no shows.</p>
                <hr/>
            </div>
        )
    }
}

export default Schedule
