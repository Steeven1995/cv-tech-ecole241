import React from 'react'

function footer() {
  return (
    <div style={{position: "absolute", marginBottom: 0, width: "100%", zIndex: -1}}>
        <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{marginTop: "90px;"}}>
            <div className="row pt-5">
                <div className="col-lg-7 col-md-12">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: "5px;"}}>Contacts</h5>
                            <p><i className="fa fa-map-marker-alt mr-2" style={{marginRight: "1rem"}}></i>Villa Cap Lopez, derrière le lycée, Port-gentil, Gabon</p>
                            <p><i className="fa fa-phone-alt mr-2" style={{marginRight: "1rem"}}></i>+241 (0)77 32 32 11</p>
                            <p><i className="fa fa-envelope mr-2" style={{marginRight: "1rem"}}></i>contact@ecole241.org</p>
                            <div className="d-flex justify-content-start mt-4">
                                <a className="btn btn-outline-light btn-square mr-2" href="#" style={{marginRight: "1rem"}}><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-square mr-2" href="#" style={{marginRight: "1rem"}}><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-square mr-2" href="#" style={{marginRight: "1rem"}}><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light btn-square" href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 mb-5">
                    <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: "5px;"}}>Newsletter</h5>
                    <p>Abonnez vous a notre newsletter.</p>
                    <div className="w-100">
                        <div className="input-group">
                            {/* <input type="text" className="form-control border-light" style={{padding: "30px;"}} placeholder="Entrez votr adresse email"> */}
                            <div className="input-group-append">
                                <button className="btn btn-primary px-4">S'abonner</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer
