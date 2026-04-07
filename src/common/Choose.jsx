import React from 'react'

function Choose() {
  return (
    <div>
         <section className="section-spacing inverse-bg">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="img-block wow fadeIn">
            <img src="../img/why-choose/1.jpg" alt="Why choose us" />
            <div className="play-button">
              <a href="#" data-toggle="modal" data-target="#video-modal"><i className="fa fa-play" /></a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="text-block wow fadeIn">
            <h2>Why Choose us?</h2>
            <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
            <ul>
              <li>Created from natural herbs</li>
              <li>100% safe for your skin</li>
              <li>Unique from other spa treatments</li>
              <li>Created by medical professionals of spa lab</li>
              <li>Special gifts &amp; offers for you</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Choose