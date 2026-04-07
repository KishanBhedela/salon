import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheckToken from '../utility/CheckToken';
import Logout from '../utility/Logout';

function Heder() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const t = CheckToken();
    setToken(t);
  }, []);


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          
          {/* ✅ Image fix */}
          <Link className="navbar-brand" to="/">
            <img src="/img/logo.png" alt="Logo" />
          </Link>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#main-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="main-nav">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About">About Us</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Services">Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Category">Gallery</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact Us</Link>
              </li>

              {/* ✅ Conditional Rendering */}
              {
                token ? (
                  <>
                    <li className="nav-item btn-appointment">
                      <Link className="nav-link" to="#" onClick={Logout}>
                        Logout
                      </Link>
                    </li>

                    <li className="nav-item btn-appointment">
                      <Link className="nav-link" to="/Profile">
                        Profile
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Signup">Signup</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/Login">Login</Link>
                    </li>
                  </>
                )
              }

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Heder; // Updated export