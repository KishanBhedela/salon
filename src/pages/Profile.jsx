import React from 'react'
import Heder from '../common/Heder'
import Footer from '../common/Footer'
import Banner from '../common/Banner'
import Makeappointment from '../common/Makeappointment'
import { useState, useEffect } from 'react'
import api from '../utility/Apitoken'
import "./style.css"

function Profile() {
    return (
        <>
            <Heder />
            <Profilecontext />
            <Footer />
        </>
    )
}

function Profilecontext() {
    return (
        <>
            <Banner title="Profile" />
            <ProfileDetails />
            <Makeappointment />
        </>
    )
}

function ProfileDetails() {
    let [user, setUser] = useState({})
    let [Loading, setLoading] = useState(true)
    let [error, setError] = useState("")



    async function Fetchprofiledetail() {

        try {
            let res = await api.get("/user/profile");
            console.log(res.data);

            if (res.data) {
                setUser(res.data.data);
            }
        } catch (e) {

            setError(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        Fetchprofiledetail()
    }, [])

    if (error) return <div className="text-center text-danger">{error}</div>

    return (
        <>

            <section className="section-spacing">
                <div className="container">
                    {
                        Loading ? <>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="skeleton" style={{ height: "30px", width: "200px", margin: "auto" }}></div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-8 offset-md-2">

                                    <div className="skeleton skeleton-input"></div>
                                    <div className="skeleton skeleton-input"></div>
                                    <div className="skeleton skeleton-input"></div>
                                    <div className="skeleton skeleton-input"></div>

                                    <div className="text-center mb-3">
                                        <div className="skeleton skeleton-img"></div>
                                    </div>

                                    <div className="text-center">
                                        <div className="skeleton" style={{ height: "40px", width: "150px", margin: "auto" }}></div>
                                    </div>

                                </div>
                            </div>
                        </>
                            : <>

                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h2>User Profile</h2>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-8 offset-md-2">

                                        <form >

                                            {/* FULL NAME */}
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="full_name"
                                                    className="form-control"
                                                    value={user?.full_name || ""}

                                                    placeholder="Full Name"
                                                />
                                            </div>

                                            {/* EMAIL */}
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    value={user?.email || ""}
                                                    disabled
                                                />
                                            </div>

                                            {/* MOBILE */}
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="mobile_no"
                                                    className="form-control"
                                                    value={user?.mobile_no || ""}

                                                    placeholder="Mobile Number"
                                                />
                                            </div>

                                            {/* CITY */}
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    className="form-control"
                                                    value={user?.city || ""}

                                                    placeholder="City"
                                                />
                                            </div>

                                            {/* IMAGE UPLOAD */}
                                            <div className="form-group">
                                                <input
                                                    type="file"
                                                    className="form-control"

                                                />
                                            </div>

                                            {/* IMAGE PREVIEW */}
                                            <div className="text-center mb-3">
                                                <img
                                                    src={
                                                        user?.profile_image ||
                                                        "https://www.w3schools.com/w3images/avatar6.png"
                                                    }
                                                    alt="profile"
                                                    style={{
                                                        height: "150px",
                                                        width: "150px",
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                            </div>

                                            {/* SUBMIT */}
                                            <div className="text-center">
                                                <button className="btn btn-primary">
                                                    Update Profile
                                                </button>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </>
                    }



                </div>
            </section>



        </>
    )
}

export default Profile