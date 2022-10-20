import React from 'react'

function card() {
    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={"0.1s"}>
            <div className="team-item bg-light">
                <div className="overflow-hidden box">
                    <img className="img-fluid blocker" src="img/team-1.jpg" alt=""/>
                </div>
                <div className="position-relative d-flex justify-content-center" style={{marginTop: "-23px"}}>
                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                        <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-sm-square btn-primary mx-1" target="_blank" href="https://carochebourobou.000webhostapp.com/"><i className="fa fa-globe"></i></a>
                    </div>
                </div>
                <div className="text-center p-4">
                    <h5 className="mb-0">BOUROBOU NZE</h5>
                    <small>Réferent digitals</small>
                </div>
            </div>
        </div>
    )
}

export default card
