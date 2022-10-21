import React from 'react'

function card({student}) {
    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={"0.1s"}>
            <div className="team-item bg-light">
                <div className="overflow-hidden box">
                    <img className="img-fluid blocker" src={student.profile[0].thumbnails.large.url} alt={"Photo de profil de "+ student.nom +" "+student.prenom}/>
                </div>
                <div className="position-relative d-flex justify-content-center" style={{marginTop: "-23px"}}>
                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                        <a className="btn btn-sm-square btn-primary mx-1" target="_blank" href={student.linkedin}><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-sm-square btn-primary mx-1" target="_blank" href={student.facebook}><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-sm-square btn-primary mx-1" target="_blank" href={"https://"+student.site+""}><i className="fa fa-globe"></i></a>
                    </div>
                </div>
                <div className="text-center p-4">
                    <h5 className="mb-0">{student.nom +" "+student.prenom}</h5>
                    <small>{student.cohorte}</small>
                </div>
            </div>
        </div>
    )
}

export default card
