import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTraveler from 'assets/images/icons/icon-traveler.svg'
import IconTreasure from 'assets/images/icons/icon-treasure.svg'
import Fade from 'react-reveal/Fade'

import Button from 'elements/Button'
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }
  return (
    <Fade bottom>
      <section className='container pt-4'>
          <div className='row align-items-center justify-content-between'>
              <div className='col-auto pe-5' style={{width: 530}}>
                  <h1 className='fw-bold line-height-1 mb-3'>
                      Forget Busy Work, <br />
                      Start Next Vacation
                  </h1>
                  <p className='mb-4 fw-light gray-500 w-75' style={{lineHeight: "170%"}}>
                    We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
                  </p>
                  <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                    Show Me Now
                  </Button>

                  <div className='row' style={{marginTop: 80}}>
                      <div className='col-auto' style={{marginRight: 30}}>
                          <img src={IconTraveler} alt={`${props.data.travelers} Travelers`} width="36" height="36"></img>
                          <h6 className='mt-3'>
                            {formatNumber(props.data.travelers)}{" "} <span className='gray-500 fw-light'> Travelers</span>
                          </h6>
                      </div>
                      <div className='col-auto' style={{marginRight: 30}}>
                          <img src={IconTreasure} alt={`${props.data.treasures} Treasures`} width="36" height="36"></img>
                          <h6 className='mt-3'>
                            {formatNumber(props.data.treasures)}{" "} <span className='gray-500 fw-light'> Treasures</span>
                          </h6>
                      </div>
                      <div className='col-auto'>
                          <img src={IconCities} alt={`${props.data.cities} Travelers`} width="36" height="36"></img>
                          <h6 className='mt-3'>
                            {formatNumber(props.data.cities)}{" "} <span className='gray-500 fw-light'> Cities</span>
                          </h6>
                      </div>
                  </div>
              </div>

              <div className='col-6 ps-5 '>
                  <div style={{width: 520, height: 410}}>
                      <img src={ImageHero} className='img-fluid position-absolute' alt="Room with couches" style={{zIndex: 1, width:510, height: 400}}/>
                      <img src={ImageHero_} className='img-fluid position-absolute' alt="Room with couches frame" style={{margin: '20px 0 0 20px', width:510, height: 400}}/>
                  </div>
              </div>
          </div>
      </section>
      </Fade>
  )
}
