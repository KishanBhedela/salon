import React from 'react'
import { useState, useEffect } from 'react'
import Heder from '../common/Heder'
import Footer from '../common/Footer'
import Banner from '../common/Banner'
import Makeappointment from '../common/Makeappointment'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Categorybycategory() {
  return (
     <>
      <Heder />
      <CategorybycategoryContext />
      <Footer />

    </>
  )
}

function CategorybycategoryContext() {
  return (
    <>
      <Banner title="our gallry" />
      <CategorybycategoryList />
      <Makeappointment />

    </>)
}

function CategorybycategoryList() {
  let [Categorybycategory, setCategorybycategory] = useState([])
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(false)

  let id = useLocation().pathname.split("/")[2]

  let getCategorybycategory = async () => {
    try {
      setLoading(true)

      let res = await axios.get(`https://salon-backend-jwt.onrender.com/subcategories?category_id=${id}`)

      

      // SAFE CHECK ✅
      setCategorybycategory(res.data?.data || [])

    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategorybycategory()
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
            ) : Categorybycategory.length > 0 ? (
              Categorybycategory.map((category) => (
                <div className="col-sm-6 col-md-4">
                  <div className="gallery-item wow fadeIn">
                    <Link to={`/servicesbysubcategry/${category._id}`} className="venobox" data-gall="gallery">
                      <img src={category.subcategory_image} alt={category.subCategorybycategory_name} />
                      <div className="gallery-caption text-center">
                        <i className="fa fa-heart-o" />
                        <p>{category.subcategory_name}</p>
                        <h3>{category.subcategory_description}</h3>
                      </div>
                    </Link>
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


export default Categorybycategory