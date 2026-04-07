
import React from 'react'
import cookie from 'js-cookie'

function Logout() {

  cookie.remove("token");
  alert("Logout successfully");
  window.location.href = "/Login";
}

export default Logout;