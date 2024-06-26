import React, { Component } from 'react';
import Header from "parts/header";
import PageDetailTitle from 'parts/PageDetailTitle';
import ItemDetails from "../json/itemDetails";
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';
import Fade from 'react-reveal/Fade';

export default class DetailsPage extends Component  {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0,0);
  }

  render() {
    const breadcrumb = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "House Details", pageHref: "" },
    ];

    return (
        <>
            <Header {...this.props}></Header>
            <PageDetailTitle
                breadcrumb={breadcrumb}
                data={ItemDetails}
            ></PageDetailTitle>
            <FeaturedImage data={ItemDetails.imageUrls}/>
            <section className='container'>
              <div className='row'>
                <div className='col-7 pr-5'>
                  <Fade>
                    <PageDetailDescription data={ItemDetails}/>
                  </Fade>
                </div>
                <div className='col-5'>
                  <Fade>
                    <BookingForm itemDetails={ItemDetails}/>
                  </Fade>
                </div>
              </div>
            </section>

            <Categories data={ItemDetails.categories}/>
            <Testimony data={ItemDetails.testimonial}/>
            <Footer/>
        </>
    );
  }
}
