import React, { Component } from "react";

import Header from "parts/header";
import landingPage from "json/landingPage.json";
import Hero from "parts/hero";
import MostPicked from "parts/mostPicked"

export default class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }
    render(){
        return(
            <>
                <Header {...this.props}> </Header>
                <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
                <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
            </>
        )
    }
}