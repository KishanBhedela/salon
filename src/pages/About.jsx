import React from 'react'
import Heder from '../common/Heder'
import Footer from '../common/Footer'
import Banner from '../common/Banner'
import Makeappontment from '../common/Makeappontment'

function About() {
  return (
    <>
    <Heder />
   <Aboutcontext />
    <Footer />
    </>
  )
}

function Aboutcontext() {
    return (<>
<Banner title="About Us" />
<Hisstory />
<Acsaptesh/>
<Makeappontment />
</>)
}

function Hisstory() {
    return (<>
    <section className="section-spacing">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <div className="img-block wow fadeIn">
          <img src="img/team/our-story.jpg" alt />
          <div className="play-button">
            <a href="#" data-toggle="modal" data-target="#video-modal"><i className="fa fa-play" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="text-block wow fadeIn">
          <h2>Our history</h2>
          <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum justo vitae convallis varius. Nulla tristique risus ut justo pulvinar mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum justo vitae convallis varius. Nulla tristique risus ut justo pulvinar mattis.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>)
}

function Acsaptesh() {
    return (<>
    
    <section className="section-spacing">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <div className="img-block wow fadeIn">
          <img src="img/team/our-story.jpg" alt />
          <div className="play-button">
            <a href="#" data-toggle="modal" data-target="#video-modal"><i className="fa fa-play" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="text-block wow fadeIn">
          <h2>Our history</h2>
          <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum justo vitae convallis varius. Nulla tristique risus ut justo pulvinar mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum justo vitae convallis varius. Nulla tristique risus ut justo pulvinar mattis.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
)}
export default About