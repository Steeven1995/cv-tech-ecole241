import React from 'react'

function hero() {
  return (
    <> 
        <div className="container-fluid p-0 mb-5">
            <div style={{width: "auto", height: '100vh'}} className="owl-carousel-item position-relative">
                <img style={{width: "100%", height: '100%'}} className="img-fluid" src="./img/carousel-1.jpg" alt=""/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                    <div className="container">
                        {/* <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h1 style={{fontSize: '2.7rem'}} className="display-3 text-white animated slideInDown">40 pépites de la Promo 3 de <br/> Lbv et 30 pépites de la Promo 1 de Port-Gentil,</h1>
                                <h5 style={{color: 'white'}} className="text-uppercase mb-3 animated slideInDown">arrivée à l'état brut, aujourd’hui devenus des Référents Digital et Développeurs web raffinés,</h5>
                                <p className="fs-5 text-white mb-4 pb-2">vous souhaitent la bienvenue sur leur plateforme.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default hero