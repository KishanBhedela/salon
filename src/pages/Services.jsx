import React, { useState, useEffect } from 'react'
import Heder from '../common/Heder'
import Footer from '../common/Footer'
import Banner from '../common/Banner'
import Choose from '../common/Choose'
import Makeappointment from '../common/Makeappointment'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Services() {
  return (
    <>
      <Heder />
      <ServicesContext />
      <Footer />
    </>
  )
}

function ServicesContext() {
  return (
    <>
      <Banner title="Our Services" />
      <ServicesList />
      <Choose />
      <Makeappointment />
    </>
  )
}

function ServicesList() {
   let [services, setServices] = useState([])
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(false)

  let getServices = async () => {
    try {
      setLoading(true)

      let res = await axios.get("https://salon-backend-jwt.onrender.com/services")

      setServices(res.data?.data || [])

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
            services.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="service-item">

                  <Link to={`/Servicesdetail/${service._id}`}>
                    <div className="thumb">
                      <img
                        src={service.service_image}
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
                    read more
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

export default Services