import React from 'react'

function hero() {
  return (
    <div className="container-fluid p-0 mb-5">
        <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="./img/carousel-1.jpg" alt=""/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h1 className="display-3 text-white animated slideInDown">Devenez la meilleurs version de vous-même</h1>
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Fabrique de Port-Gentil</h5>
                                <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default hero