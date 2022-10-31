import React from 'react'
import './hero.css'
import Hero  from "../mosaique.png";


function hero() {      
  return (
    <> 
        <div className="container-fluid p-0 mb-5 plan">
            <div style={{width: "auto", height: '100vh'}} className="midd owl-carousel-item position-relative">
                <img style={{width: "100%", height: '100%'}} className="img-fluid" src={Hero} alt=""/>
                
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center txt" style={{background: '#f9f9f9c9', position: 'absolute'}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h1 style={{fontSize: '2.7rem'}} className="display-3 text-white animated slideInDown"><span style={{color: '#FF3333'}}>Découvrez nos professionnels ...</span> </h1>
                                <h5 style={{color: '#181d38'}} className="mb-3 animated slideInDown">
                                    70 nouvelles pépites de la promo Dclic de nos fabriques de Libreville et de Port-Gentil qui rejoignent la liste de nos professionnels.
                                </h5>
                                <h5 style={{color: '#181d38', width: '85%'}} className="mb-3 animated slideInDown">
                                    Aujourd'hui, ayant des compétences affinées dans le numérique; nos Référents digital et Développeurs web sont prêts à mettre leurs savoir-faire à votre service.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default hero
