import React from 'react';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Home from './components/Home'
import Message from './components/Message'
import Call from './components/Call'

import Footer from './components/Footer'
import { HashRouter, BrowserRouter, Route, Switch, Link } from 'react-router-dom'


function App() {
  return (
    
    <div>
    <BrowserRouter>
        <Navbar />
        
        <div className="container">
        <Switch> 
            <Route path='/message' component={Message} />
            <Route path='/call' component={Call} />
            <Route exact path='/projects/hair_salon/' component={Home} />
        </Switch>
           
        </div>
        
        </BrowserRouter>
        <Footer />  
    </div>
  );
}

export default App;
