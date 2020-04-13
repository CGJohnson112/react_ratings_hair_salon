import React, { Component } from 'react'


function serviceMe() {
    alert('how rich can you get, you never know until youve met, this young boy richic rich is his name.')
}


export class Offers extends Component {

    state = {
        loading: true,
        offers: []
    };

    async componentDidMount(){
        const url = "http://substyleprod.com/projects/APIS/offers.json";
        const response = await fetch(url);
        const data = await response.json();
        
        this.setState({offers: data, loading: false})
    }
    
    render() {
        if (this.state.loading) {
            return <div className="textBox">...loading services...please wait....</div>
        }

        if(!this.state.offers.length) {
            return <div className="textBox">No services available at the moment</div>
        }
     
        return (
        

       
        <div className="textBox">
            <a name="offers"></a>
                <h6>MOST POPULAR SERVICES</h6>

                <> 
                {this.state.offers.map(offer => (

                <ul className="list-group list-group-flush" key={offer.id}>
                    <li className="list-group-item" >
                        <h5>{offer.service}</h5>
                        <br/>
                            <i>{offer.cost_time}</i>
                        <br/>
                            <p>{offer.description}</p>
                            <button className="btn btn-primary" onClick={serviceMe}>Click Hiere</button>
                    </li>


                </ul>
                ))}
        </>
                
               
            </div>
            
        )
    }
}

export default Offers
