import React from 'react'

function Makeappontment() {
  return (
    <div>
  <section className="section-spacing">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="appoinment-text wow fadeIn">
            <h2>Make an Appointment?</h2>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos, In massa urna pellentesque habitant morbi tristique senectus.</p>
            <p>Call us : 002-6666-8888 or fill out our online booking &amp; equiry form and we’ll contact you.</p>
            <a href="#" data-toggle="modal" data-target="#appointment" className="btn btn-primary">Make Appointment</a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="appoinment-img text-md-right text-center wow fadeIn">
            <img className="tilt-img" src="../img/appointment/1.png" alt />
          </div>
        </div>
      </div>			
    </div>
  </section>
</div>

  )
}

export default Makeappontment