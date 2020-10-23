import React, { Component } from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";



class AppRouter extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Router>
        )
    }
}
 export default AppRouter;