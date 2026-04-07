import React from 'react'
import Heder from '../common/Heder'
import Footer from '../common/Footer'
import Banner from '../common/Banner'
import Makeappointment from '../common/Makeappointment'

import { useState } from 'react'
import api from '../utility/Apitoken'



function Contact() {
  return (
    <>
      <Heder />
      <Contactcontext />
      <Footer />
    </>
  )
}

function Contactcontext() {
  return (
    <>
      <Banner title="Contact Us" />
      <ContactForm />
      <Makeappointment />
    </>
  )


  function ContactForm() {
    let [inqury, setInquiry] = useState({
      inquiry_subject: "",
      inquiry_message: ""
    });

    let [error, setError] = useState("");
    let [loding, setLoding] = useState(false);

    const handleChange = (e) => {
      setInquiry((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };

    const Onsubmit = async (e) => {
      e.preventDefault();
      setLoding(true);

      try {
        let res = await api.post(
          "/user/addGeneralInquiry",
          inqury
        );

        if (res.data.success) {
          alert(res.data.message);
          setInquiry({
            inquiry_subject: "",
            inquiry_message: ""
          });
        }
      } catch (e) {
        setError(e);
        alert(e?.response?.data?.message || "Something went wrong");
      } finally {
        setLoding(false);
      }
    };

    return (
      <section className="section-spacing">
        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <div className="contact-info text-center">
                <i className="fa fa-phone-square" />
                <h3>Make a Call</h3>
                <p>
                  <a href="tel:+61383766284">+61 3 8376 6284</a>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-info text-center">
                <i className="fa fa-envelope-open-o" />
                <h3>Send a Mail</h3>
                <p>
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-info text-center">
                <i className="fa fa-map-marker" />
                <h3>Find Us</h3>
                <p>Melbourne, Australia</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Have Any Question?</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form
                onSubmit={Onsubmit}
                className="p-4 shadow-lg rounded-4 bg-white animate__animated animate__fadeInUp"
                style={{ maxWidth: "500px", margin: "auto" }}
              >

                <h3 className="text-center mb-4 fw-bold text-primary">
                  Contact Us 💬
                </h3>

                {/* Subject */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Subject"
                    name="inquiry_subject"
                    value={inqury.inquiry_subject}
                    onChange={handleChange}
                    required
                  />
                  <label>Subject</label>
                </div>

                {/* Message */}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control custom-input"
                    placeholder="Message"
                    style={{ height: "120px" }}
                    name="inquiry_message"
                    value={inqury.inquiry_message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label>Message</label>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="btn btn-gradient w-100 py-2 fw-bold"
                  disabled={loding}
                >
                  {loding ? "Sending..." : "Send Message 🚀"}
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>
    )
  }
}
export default Contact