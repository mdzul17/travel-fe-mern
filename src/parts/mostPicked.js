import React from 'react'
import Button from 'elements/Button'
import Fade from 'react-reveal/Fade'

export default function mostPicked(props) {
  return (
    <Fade bottom>
      <section className='container' ref={props.refMostPicked}>
          <h4 className='mb-3'>Most Picked</h4>
          <div className='container-grid'>
              {
                  props.data.map((item, index) => {
                      return (
                          <div key={`mostpicked-${index}`}
                              className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
                          >
                            <Fade bottom delay={500 * index}>
                              <div className='card card-featured'>
                                  <div className='tag'>
                                      ${item.price}
                                      <span className='font-weight-light'> per {item.unit}</span>
                                  </div>
                                  <figure className='img-wrapper'>
                                      <img src={item.imageUrl}
                                          alt={item.name} className='img-cover'/>
                                  </figure>
                                  <div className='meta-wrapper'>
                                      <Button className="stretched-link d-block text-white" type="link" href={`/properties/${item._id}`}></Button>
                                      <span>
                                      {item.city}, {item.country}
                                      </span>  
                                  </div>
                                </div>
                            </Fade>
                          </div>
                      )
                  })
              }
          </div>
    </section>
    </Fade>
  )
}
