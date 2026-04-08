import React, { useState, useEffect } from 'react'
import Footer from '../common/Footer'
import Heder from '../common/Heder'
import Banner from '../common/Banner'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import api from '../utility/Apitoken'

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
      <Banner title="Service Details" />
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
  let [booking, setbooking] = useState({
  service_id: id,
  booking_date: "",
  notes: ""
})

  let navigate = useNavigate();

  async function FetchServicesdetail() {
    try {
      setLoading(true)

      let res = await axios.get(`https://salon-backend-jwt.onrender.com/services/${id}`)

      console.log(res.data.data)

      setServicesdetail(res.data?.data || {})

    } catch (e) {
      console.log(e.response?.data)
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  function handelinputchage(e) {
    setbooking((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  console.log(booking);

  async function handelsubmit(e) {
    e.preventDefault();
    try {

      let bookingresponse = await api.post("/user/bookservice", booking)

      console.log(booking);
      if (bookingresponse.data.success) {
        setbooking({
          service_id: id,
          booking_date: "",
          notes: ""
        })

        try {
          let orderresponse = await api.post("/user/getorderid", { booking_id: bookingresponse.data.booking })

          console.log(orderresponse.data.data);

          if (orderresponse.data.success) {
            const [amount, booking_id, currency, order_id] = orderresponse.data.data;

            const options = {
              key: "rzp_test_VQhEfe2NCXbbwI",
              amount : amount,
              currency: currency,
              name: "salon polatform",
              description: "test transtion",
              order_id: order_id,

              handler: async (paymentResponse) => {
                console.log("payment response", paymentResponse)
                try {
                  let varifyresponse = await api.post("/user/verifypayment", {
                    razorpay_order_id: paymentResponse.razorpay_order_id,
                    razorpay_payment_id: paymentResponse.razorpay_payment_id,
                    razorpay_signature: paymentResponse.razorpay_signature,
                    booking_id: booking_id
                  })

                  console.log(varifyresponse)

                  if (varifyresponse.data.success) {
                    alert(varifyresponse.data.message);
                    navigate("/services")
                  }
                } catch (e) {
                  console.log(e)
                }

              },
              prefill: {
                name: "xyz",
                email: "xyz123@gmail.com",
                contact: "234567893456"
              },
              theme: {
                color: "#3399cc"
              }

            }
            const paymentobject = new window.Razorpay(options);
            paymentobject.open();

          }

        } catch (e) {
          console.log(e);



        }

      }

    } catch (e) {
      console.log(e);
      

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
              <div className="service-item shadow p-3 rounded">

                <div className="thumb mb-3">
                  <img
                    src={servicesdetail.service_image || "https://via.placeholder.com/300"}
                    alt="service"
                    className="img-fluid rounded"
                  />
                </div>

                <div className="service-info text-center">
                  <h3>{servicesdetail.service_name}</h3>
                  <p>{servicesdetail.service_description}</p>

                  {/* 🔥 BOOK BUTTON */}
                  <button className="btn btn-primary mt-3 w-100">
                    Book Service
                  </button>

                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-md-8">
              <div className="service-details shadow p-4 rounded">

                <h3 className="mb-3">
                  ⏱ Duration: {servicesdetail.duration_mins} mins <br />
                  💰 Price: ₹{servicesdetail.price}
                </h3>

                <hr />

                <h4 className="mb-3">Details</h4>

                <ul className="list-group">
                  <li className="list-group-item">
                    Duration: {servicesdetail.duration_mins} mins
                  </li>
                  <li className="list-group-item">
                    Category: {servicesdetail.category?.category_name}
                  </li>
                  <li className="list-group-item">
                    Subcategory: {servicesdetail.subcategory?.subcategory_name}
                  </li>
                  <li className="list-group-item">
                    Description: {servicesdetail.service_description}
                  </li>
                </ul>



                {/* 🔥 EXTRA BUTTON (RIGHT SIDE) */}
                <div className="mt-4">
                  <button className="btn btn-success">
                    Book This Service Now
                  </button>
                </div>

              </div>
            </div>

            

          </div>
          <form
  onSubmit={handelsubmit}
  className="booking-form shadow-lg rounded-4 p-4 p-md-5 animate__animated animate__fadeInUp"
>

  <h3 className="text-center mb-4 fw-bold gradient-text">
    Book Your Service 💇‍♀️
  </h3>

  {/* DATE */}
  <div className="form-group mb-4">
    <label className="form-label">Booking Date</label>
    <input
      type="date"
      className="form-control custom-input"
      name="booking_date"
      value={booking.booking_date}
      onChange={handelinputchage}
      required
    />
  </div>

  {/* NOTES */}
  <div className="form-group mb-4">
    <label className="form-label">Notes</label>
    <textarea
      className="form-control custom-input"
      placeholder="Write your message..."
      rows="4"
      name="notes"
      value={booking.notes}
      onChange={handelinputchage}
      required
    ></textarea>
  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="btn btn-gradient w-100 py-3 fw-bold"
    disabled={loading}
  >
    {loading ? "Processing..." : "Book & Pay 🚀"}
  </button>

</form>
        </div>
      </section>
    </div>
  )
}

export default Servicesdetail