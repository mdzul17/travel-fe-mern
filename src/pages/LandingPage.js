import React, { Component } from "react";

import Header from "parts/header";
import landingPage from "json/landingPage.json";
import Hero from "parts/hero";
import MostPicked from "parts/mostPicked"
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        window.title = "Staycation | Home";
        window.scrollTo(0,0);
    }
    render(){
        return(
            <>
                <Header {...this.props}> </Header>
                <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
                <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
                <Categories data={landingPage.categories}/>
                <Testimony data={landingPage.testimonial}/>
                <Footer />
            </>
        )
    }
}