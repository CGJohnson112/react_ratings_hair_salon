import React, { Component } from 'react'

export class Message extends Component {
    render() {
        return (
            <div className="textBox2">
                <h1>Message</h1>
                <label for="usr">Name:</label>
                <input type="text" class="form-control" id="usr"></input>

                <label for="comment">Comment:</label>
                <textarea class="form-control" rows="5" id="comment"></textarea>
                <br/>

                <button className="btn btn-primary">Email Kim Sarkeesian</button>
             
                
            
            </div>
        )
    }
}

export default Message
