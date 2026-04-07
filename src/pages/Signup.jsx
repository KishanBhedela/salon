import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
  return (
    <>
      <Signupcontext />
    </>
  )
}
function Signupcontext() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    mobile_no: "",
    city: "",
    password: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://salon-backend-jwt.onrender.com/signup", user);

      if (res.data.success) {
        alert(res.data.message);
        navigate("/");
      }

      setUser({
        full_name: "",
        email: "",
        mobile_no: "",
        city: "",
        password: ""
      });

    } catch (error) {
      setUser({
        full_name: "",
        email: "",
        mobile_no: "",
        city: "",
        password: ""
      });
      alert(error?.response?.data?.message || "Something went wrong");

    } finally {
      setLoading(false);
    }
  };

  return (<>

      <section className="section-spacing">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2><span>Sign Up</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-8 offset-lg-2">
              <form id="contactForm" onSubmit={handleSubmit} className="contact-form wow fadeIn" data-toggle="validator" method="post">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input placeholder="Full Name" id="full_name" value={user.full_name} onChange={handleInput} className="form-control" name="full_name" type="text" required data-error="Please enter your full name" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                </div>
                <div className="form-group">
                  <input placeholder="enter email" id="email" value={user.email} onChange={handleInput} className="form-control" name="email" type="email" required data-error="Please enter your valid email address" />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <input placeholder="enter phone number" id="mobile_no" value={user.mobile_no} onChange={handleInput} className="form-control" name="mobile_no" type="text" required data-error="Please enter your valid phone number" />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <input placeholder="enter city" id="city" value={user.city} onChange={handleInput} className="form-control" name="city" type="text" required data-error="Please enter your valid city" />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <input placeholder="enter password" id="password" value={user.password} onChange={handleInput} className="form-control" name="password" type="password" required data-error="Please enter your valid password" />
                  <div className="help-block with-errors" />
                </div>

                <div className="text-center">
                  <input value={loading ? "cratedting account..." : "singup"} name="submit" className="btn btn-primary" type="submit" />
                  <div id="msgSubmit" className="hidden" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>)

  }

  export default Signup