import React from 'react'



function Banner(prop) {
  return (
    <>
 <section className="inner-page-banner" style={{backgroundImage: 'url(img/banner/about-banner.jpg)'}}>
  <div className="page-banner-caption">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>{prop.title}</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">{prop.title}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Banner