import React, { Component } from 'react'

import {FaStar} from 'react-icons/fa'
import '../ratings.css'

export class Ratings extends Component {

    state = {
        loading: true,
        ratings: []
    };

    async componentDidMount(){
        const url = "http://substyleprod.com/projects/APIS/ratings.json";
        const response = await fetch(url);
        const data = await response.json();
        
        this.setState({ratings: data, loading: false})
        
        let rateSum = 0;
        let numRatings = 0;
        const len = data.length;
        let rater = null;
        for (let i = 0; i < len; i++) {
            rater = data[i];
            rateSum = data[i].rating + rateSum;
            numRatings = numRatings + 1;     
        }

        
    
        
        const avgRate = rateSum / len;
        let avgRateRounded =  Math.round(avgRate);
        document.getElementById('avgNum').innerHTML = avgRateRounded;

        //get the number of ratings per each category, then fix the decimal to a percentage, then slice the decimal to transfor to 
        //a whole number. Should add up to 100%
        let rating5 = data.filter(data => data.rating === 5).length / data.length;
        rating5 = rating5.toFixed(2).slice(2);
        let rating4 = data.filter(data => data.rating === 4).length / data.length;;
        rating4 = rating4.toFixed(2).slice(2);
        let rating3 = data.filter(data => data.rating === 3).length / data.length;;
        rating3 = rating3.toFixed(2).slice(2);
        let rating2 = data.filter(data => data.rating === 2).length / data.length;;
        rating2 = rating2.toFixed(2).slice(2);
        let rating1 = data.filter(data => data.rating === 1).length / data.length;;
        rating1 = rating1.toFixed(2).slice(2);

        console.log(rating5);
        console.log(rating4);
        console.log(rating3);
        console.log(rating2);
        console.log(rating1);
        document.getElementById("demo").style.width = rating5 + "%";
        document.getElementById("demo2").style.width = rating4 + "%";
        document.getElementById("demo3").style.width = rating3 + "%";
        document.getElementById("demo4").style.width = rating2 + "%";
        document.getElementById("demo5").style.width = rating1 + "%";
        
        //console.log(rateSum)
        //console.log(avgRateRounded)


        //star rating average counter given from loop above
        if (avgRateRounded === 1) {
            document.getElementById("ping").className = "bar_1";
        } else if (avgRateRounded === 2) {
            document.getElementById("ping").className = "bar_2";
        } else if (avgRateRounded === 3) {
            document.getElementById("ping").className = "bar_3";
        } else if (avgRateRounded === 4) {
            document.getElementById("ping").className = "bar_4";
        }  else if (avgRateRounded === 5) {
           document.getElementById("ping").className = "bar_5";
        }  
        
    }
 
    render() {
        if (this.state.loading) {
            return <div className="textBox">...loading reviews...please wait....</div>
        }

        if(!this.state.ratings.length) {
            return <div className="textBox">No one's commenting! Be the first!</div>
        }
        
        return (
            
            <div className="textBox">
            
            <a name="ratings"></a>
            <hr/>
                <h3>Ratings</h3>
                    
                <span className="heading">User Rating</span>
                
                <h5><span id="ping" className="bar_1"></span></h5>
                <p><span id="avgNum"></span> star average based on {this.state.ratings.length}  reviews.</p>
               
                <div className="row">
                
                        <div className="progress">
                            <span>5 star </span><div id="demo" className="bar" style={{width:"100%"}}>&nbsp;</div> 
                            &nbsp;
                        </div>    

                        <div className="progress">
                        <span>4 star </span><div id="demo2"  className="bar" style={{width:"14%"}}>&nbsp;</div> 
                            &nbsp;
                        </div>    
                        <div className="progress">
                        <span>3 star </span><div id="demo3" className="bar" style={{width:"14%"}}>&nbsp;</div> 
                            &nbsp;
                        </div>    
                        <div className="progress">
                        <span>2 star </span><div id="demo4" className="bar" style={{width:"14%"}}>&nbsp;</div> 
                            &nbsp;
                        </div>    
                        <div className="progress">
                        <span>1 star </span><div id="demo5" className="bar" style={{width:"43%"}}>&nbsp;</div> 
                            &nbsp;
                        </div>     

                        
        


                
               </div>
            <hr/>
            
                

            <>
            {this.state.ratings.map(rating => (
            <div className="textBox" key={rating.id}>
            
            <h5><span className={`bar_${rating.rating}`}></span></h5>
            
            
            <h6>{rating.header}</h6>
            <p>{rating.comment}</p>
            <p>{rating.name} - {rating.date}</p>
            <hr />
            </div>

            ))}
            </>
            </div>
        )
    }
}

export default Ratings
