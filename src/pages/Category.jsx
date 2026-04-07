import React from 'react'
import { useState, useEffect } from 'react'
import Heder from '../common/Heder'
import Footer from '../common/Footer'
import Banner from '../common/Banner'
import Makeappointment from '../common/Makeappointment'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <>
      <Heder />
      <CategoryContext />
      <Footer />

    </>
  )
}
function CategoryContext() {
  return (
    <>
      <Banner title="our gallry" />
      <CategoryList />
      <Makeappointment />

    </>)
}

function CategoryList() {
  let [Category, setCategory] = useState([])
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(false)

  let getCategory = async () => {
    try {
      setLoading(true)

    let res = await axios.get("https://salon-backend-jwt.onrender.com/categories")

    setCategory(res.data?.data || [])

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
                    <Link to={`/catagrybycategry/${category._id}`} className="venobox" data-gall="gallery">
                      <img src={category.category_image} alt={category.category_name} />
                      <div className="gallery-caption text-center">
                        <i className="fa fa-heart-o" />
                        <p>{category.category_name}</p>
                        <h3>{category.category}</h3>
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

export default Category