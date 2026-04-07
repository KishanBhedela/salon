import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import cookie from 'js-cookie'

function Login() {
  return (
    <>
      <Logincontext />
    </>
  )
}
function Logincontext() {
  const { login } = useAuth();
  let [user, setUser] = useState({
    email: "",
    password: ""
  });

   let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let handleInput = (e) => {
    let { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let res = await axios.post("https://salon-backend-jwt.onrender.com/login", user);
   console.log(res.data);
   
      if (res.data.success) {
        
        setUser({
          email: "",
          password: ""
        });

        console.log(res.data);
        setLoading(false);
        cookie.set("token", res.data.token)
        alert(res.data.message);
        navigate("/");
       
      }

      

    } catch (e) {
      setLoading(false);
      alert(e.response.data.message || "Something went wrong");
      navigate("/Login");
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
                <h2><span>Login</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-8 offset-lg-2">
              <form id="contactForm" onSubmit={handleSubmit} className="contact-form wow fadeIn" data-toggle="validator" method="post">
                <div className="form-group">
                  <input placeholder="enter email" id="email" value={user.email} onChange={handleInput} className="form-control" name="email" type="email" required data-error="Please enter your valid email address" />
                  <div className="help-block with-errors" />
                </div>
                
                <div className="form-group">
                  <input placeholder="enter password" id="password" value={user.password} onChange={handleInput} className="form-control" name="password" type="password" required data-error="Please enter your valid password" />
                  <div className="help-block with-errors" />
                </div>

                <div className="text-center">
                  <input value={loading ? "Logging in..." : "Login"} name="submit" className="btn btn-primary" type="submit" />
                  <div id="msgSubmit" className="hidden" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>)

  }

  export default Login