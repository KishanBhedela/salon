import React, { useState, useEffect } from 'react'
import Footer from '../common/Footer'
import Heder from '../common/Heder'
import Banner from '../common/Banner'
import axios from "axios"
import { useParams } from "react-router-dom"

function Servicesdetail() {
  return (
    <>
      <Heder />
      <Servicesdetailcontext />
      <Footer />
    </>
  )
}

function Servicesdetailcontext() {
  return (
    <>
      <Banner pageTitle="Service Details" />
      <Servicesdetaillist />
    </>
  )
}

function Servicesdetaillist() {

  // ✅ Correct ID
  let { id } = useParams()

  let [servicesdetail, setServicesdetail] = useState({})
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(null)

  async function FetchServicesdetail() {
    try {
      setLoading(true)

      let res = await axios.get(`https://salon-backend-jwt.onrender.com/services/${id}`)

      console.log("DATA:", res.data)

      setServicesdetail(res.data?.data || {})

    } catch (e) {
      console.log("ERROR:", e.response?.data)
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) FetchServicesdetail()
  }, [id])

  // ✅ Loading
  if (loading) return <h1>Loading...</h1>

  // ✅ Error
  if (error) return <h1>Something went wrong 🚨</h1>

  return (
    <div>
      <section className="section-spacing">
        <div className="container">
          <div className="row">

            {/* LEFT */}
            <div className="col-md-4">
              <div className="service-item">
                <div className="thumb">
                  <img
                    src={servicesdetail.service_image || "https://via.placeholder.com/300"}
                    alt="service"
                  />
                </div>

                <div className="service-info text-center">
                  <h3>{servicesdetail.service_name}</h3>
                  <p>{servicesdetail.service_description}</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-md-8">
              <div className="service-details">

                <h3>
                  Duration: {servicesdetail.duration_mins} mins <br />
                  Price: {servicesdetail.price}
                </h3>

                <h3>Details</h3>

                <ul>
                  <li>{servicesdetail.duration_mins}</li>
                  <li>{servicesdetail.category?.category_name}</li>
                  <li>{servicesdetail.subcategory?.subcategory_name}</li>
                  <li>{servicesdetail.service_description}</li>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Servicesdetail