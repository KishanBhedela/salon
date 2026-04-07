import React, { useEffect } from 'react'

import Footer from '../common/Footer'
import Heder from '../common/Heder'
import Choose from '../common/Choose'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Home() {
    return (
        <div><div>
            <Heder />
            <Homecontext />
            <Footer />
        </div>
        </div>
    )
}

function Homecontext() {
    return (<>
        {/* end nav */}
        <Banner />
        {/* end banner */}
        <Service />

        {/* end services */}
        <Choose />
        {/* end why choose */}
        <WhyChoose />

        {/* end pricing */}

        <Gallery />
        {/* end gallery */}
        <Appointment />
        {/* end appointment */}
        <Teammember />
        {/* end team member */}
        <Funfacter />
        {/* end fun facts */}
        <Testimonil />
        {/* end team testimonials */}
    </>)
}

function Banner() {
    return (
        <>
            <section className="carousel slide" id="banner" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundImage: 'url(img/banner/slide-1.jpg)' }}>
                        <div className="banner-caption">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="hero-text">
                                            <h6 className="animated fadeInDown">Consetetur Adipiscing</h6>
                                            <h1 className="animated fadeInUp">Soft &amp; Pure Spa Salon</h1>
                                            <p className="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                                            <a href="contact-us.html" className="btn btn-primary animated fadeInUp">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url(img/banner/slide-2.jpg)' }}>
                        <div className="banner-caption">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="hero-text">
                                            <h6 className="animated fadeInLeft">Consetetur Adipiscing</h6>
                                            <h1 className="animated fadeInLeft">Soft &amp; Pure Spa Salon</h1>
                                            <p className="animated fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                                            <a href="contact-us.html" className="btn btn-primary animated fadeInLeft">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url(img/banner/slide-3.jpg)' }}>
                        <div className="banner-caption">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="hero-text">
                                            <h6 className="animated fadeInRight">Consetetur Adipiscing</h6>
                                            <h1 className="animated fadeInRight">Soft &amp; Pure Spa Salon</h1>
                                            <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                                            <a href="contact-us.html" className="btn btn-primary animated fadeInRight">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ol className="carousel-indicators">
                        <li data-target="#banner" data-slide-to={0} className="active" />
                        <li data-target="#banner" data-slide-to={1} />
                        <li data-target="#banner" data-slide-to={2} />
                    </ol>
                </div>
            </section>
        </>
    )

}

function Service() {
  let [services, setServices] = useState([])
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(false)

  let getServices = async () => {
    try {
      setLoading(true)

      let res = await axios.get("https://salon-backend-jwt.onrender.com/services")

      setServices(res.data?.data?.slice(0, 6) || [])

    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getServices()
  }, [])

  if (error) return <h1>Something went wrong 🚨</h1>

  return (
    <section className="section-spacing">
      <div className="container">

        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Our Services</h2>
          </div>
        </div>

        <div className="row">
          {loading ? (
            <h1>Loading...</h1>
          ) : services.length > 0 ? (
            services.map((service) => (
              <div className="col-md-4" key={service._id}>
                <div className="service-item">

                  <Link to={`/Servicesdetail/${service._id}`}>
                    <div className="thumb">
                      <img
                        src={service.service_image || "https://via.placeholder.com/300"}
                        alt={service.service_name || "service"}
                      />
                    </div>

                    <div className="service-info text-center">
                      <h3>{service.service_name}</h3>
                      <p>{service.service_description}</p>
                    </div>
                  </Link>

                  <Link 
                    to={`/Servicesdetail/${service._id}`} 
                    className="btn btn-default"
                  >
                    Read More
                  </Link>

                </div>
              </div>
            ))
          ) : (
            <h1>No services found</h1>
          )}
        </div>

      </div>
    </section>
  )
}

function WhyChoose() {
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Cheapest pricing plan</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pricing-table wow fadeIn">
                                <div className="thumb">
                                    <img src="img/pricing/1.jpg" alt="Basic pricing plan" />
                                </div>
                                <div className="pricing-info text-center">
                                    <h3>Basic</h3>
                                    <ul>
                                        <li>Nail Cutting</li>
                                        <li>Hair Coloring</li>
                                        <li>Spa Therapy</li>
                                        <li>Body massage</li>
                                        <li>Manicure</li>
                                    </ul>
                                    <h2><sub>$</sub>29.00</h2>
                                    <a href="contact-us.html" className="btn btn-default">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table wow fadeIn">
                                <div className="thumb">
                                    <img src="img/pricing/2.jpg" alt="" />
                                </div>
                                <div className="pricing-info text-center">
                                    <h3>Medium</h3>
                                    <ul>
                                        <li>Nail Cutting</li>
                                        <li>Hair Coloring</li>
                                        <li>Spa Therapy</li>
                                        <li>Body massage</li>
                                        <li>Manicure</li>
                                    </ul>
                                    <h2><sub>$</sub>39.00</h2>
                                    <a href="contact-us.html" className="btn btn-default">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table wow fadeIn">
                                <div className="thumb">
                                    <img src="img/pricing/3.jpg" alt="" />
                                </div>
                                <div className="pricing-info text-center">
                                    <h3>Ultimate</h3>
                                    <ul>
                                        <li>Nail Cutting</li>
                                        <li>Hair Coloring</li>
                                        <li>Spa Therapy</li>
                                        <li>Body massage</li>
                                        <li>Manicure</li>
                                    </ul>
                                    <h2><sub>$</sub>49.00</h2>
                                    <a href="contact-us.html" className="btn btn-default">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

function Gallery() {
    let [Category, setCategory] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(false)

    let getCategory = async () => {
        try {
            setLoading(true)

            let res = await axios.get("https://salon-backend-jwt.onrender.com/categories")

            // ✅ DIRECT ACCESS
            setCategory(res.data?.data.slice(0, 6))

        } catch (err) {
            console.log(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
    getCategory()
}, [])




if (error) return <h1>Something went wrong 🚨</h1>
return (
    <>
        <section className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2><span>Our gallery</span></h2>
                            <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {loading ? (
                        <h1>Loading...</h1>
                    ) : Category.length > 0 ? (
                        Category.map((category) => (
                            <div className="col-sm-6 col-md-4">
                                <div className="gallery-item wow fadeIn">
                                    <a href="img/gallery/1.jpg" className="venobox" data-gall="gallery">
                                        <img src={category.category_image} alt={category.category_name} />
                                        <div className="gallery-caption text-center">
                                            <i className="fa fa-heart-o" />
                                            <p>{category.category_name}</p>
                                            <h3>{category.category}</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>No categories found</h1>
                    )}
                </div>
            </div>
        </section>

    </>
)
}

function Appointment() {

    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="appoinment-text wow fadeIn">
                                <h2>Make an Appointment?</h2>
                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos, In massa urna pellentesque habitant morbi tristique senectus.</p>
                                <p>Call us : 002-6666-8888 or fill out our online booking &amp; equiry form and we’ll contact you.</p>
                                <a href="#" data-toggle="modal" data-target="#appointment" className="btn btn-primary">Make Appointment</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="appoinment-img text-md-right text-center wow fadeIn">
                                <img className="tilt-img" src="img/appointment/1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}


function Teammember() {
    return (<>
        <section className="section-spacing inverse-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2><span>Meet Our Experts</span></h2>
                            <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="team wow fadeIn">
                            <div className="thumb">
                                <img src="img/team/1.jpg" alt="" />
                            </div>
                            <div className="team-info text-center">
                                <h3>Tasfia</h3>
                                <h6>Hair Expert</h6>
                            </div>
                            <div className="team-overlay text-center">
                                <h3>Tasfia</h3>
                                <h6>Hair Expert</h6>
                                <ul className="social-icons">
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="team wow fadeIn">
                            <div className="thumb">
                                <img src="img/team/2.jpg" alt="" />
                            </div>
                            <div className="team-info text-center">
                                <h3>Salina Gomej</h3>
                                <h6>Message Expert</h6>
                            </div>
                            <div className="team-overlay text-center">
                                <h3>Salina Gomej</h3>
                                <h6>Message Expert</h6>
                                <ul className="social-icons">
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="team wow fadeIn">
                            <div className="thumb">
                                <img src="img/team/3.jpg" alt="" />
                            </div>
                            <div className="team-info text-center">
                                <h3>Julia Shorez</h3>
                                <h6>Skin Therapist</h6>
                            </div>
                            <div className="team-overlay text-center">
                                <h3>Julia Shorez</h3>
                                <h6>Skin Therapist</h6>
                                <ul className="social-icons">
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="team wow fadeIn">
                            <div className="thumb">
                                <img src="img/team/4.jpg" alt="" />
                            </div>
                            <div className="team-info text-center">
                                <h3>Sharmin Akter</h3>
                                <h6>Therapy Expert</h6>
                            </div>
                            <div className="team-overlay text-center">
                                <h3>Sharmin Akter</h3>
                                <h6>Therapy Expert</h6>
                                <ul className="social-icons">
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <a href="team.html" className="btn btn-primary">View Our Experts</a>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

function Funfacter() {
    return (<>
        <section className="section-spacing">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="fun-fact-img wow fadeIn">
                            <img className="tilt-img" src="img/fun-facts/1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                <div className="features-info">
                                    <span className="counter">800</span>
                                    <h3>Clients</h3>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                <div className="features-info">
                                    <span className="counter">50</span>
                                    <h3>Therapists</h3>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                <div className="features-info">
                                    <span className="counter">35</span>
                                    <h3>Procedures</h3>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                <div className="features-info">
                                    <span className="counter">890</span>
                                    <h3>Treatments</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

function Testimonil() {
    return (<>
        <section className="section-spacing inverse-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2><span>Happy Clients</span></h2>
                            <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-list">
                        <div className="author-comment">
                            <div className="quote">
                                <i className="fa fa-quote-left" />
                            </div>
                            <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                        </div>
                        <div className="author-info">
                            <div className="author_thumb">
                                <img src="img/testimonials/1.png" alt="" />
                            </div>
                            <div className="author-meta">
                                <span className="author-name">David Warner</span>
                                <span className="designation"><em>Envato Customer</em></span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-list">
                        <div className="author-comment">
                            <div className="quote">
                                <i className="fa fa-quote-left" />
                            </div>
                            <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                        </div>
                        <div className="author-info">
                            <div className="author_thumb">
                                <img src="img/testimonials/2.png" alt="" />
                            </div>
                            <div className="author-meta">
                                <span className="author-name">Alex Smith</span>
                                <span className="designation"><em>Envato Customer</em></span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-list">
                        <div className="author-comment">
                            <div className="quote">
                                <i className="fa fa-quote-left" />
                            </div>
                            <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                        </div>
                        <div className="author-info">
                            <div className="author_thumb">
                                <img src="img/testimonials/3.png" alt="" />
                            </div>
                            <div className="author-meta">
                                <span className="author-name">David Warner</span>
                                <span className="designation"><em>Envato Customer</em></span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-list">
                        <div className="author-comment">
                            <div className="quote">
                                <i className="fa fa-quote-left" />
                            </div>
                            <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                        </div>
                        <div className="author-info">
                            <div className="author_thumb">
                                <img src="img/testimonials/1.png" alt="" />
                            </div>
                            <div className="author-meta">
                                <span className="author-name">Alex Smith</span>
                                <span className="designation"><em>Envato Customer</em></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Home
