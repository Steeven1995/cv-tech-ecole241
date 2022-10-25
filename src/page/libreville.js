import React from 'react'
import Card from '../components/card'

function Libreville({students}) {


    return (
    <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-5">Nos apprenants</h1>
                    <h6 className="mb-3 section-title bg-white text-center text-primary px-3">Référents digitals</h6>
                </div>
                <div className="row g-4">
                    {students.map((student, index)=>{
                         return student.cohorte==="Référent Digital" && <Card student={student} key={index}/>
                    })}
                </div>
            </div>
                
        </div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-5">Nos apprenants</h1>
                    <h6 className="mb-3 section-title bg-white text-center text-primary px-3">Développeur web & Web mobile</h6>
                </div>
                <div className="row g-4">
                    {students.map((student, index)=>{
                      return student.cohorte==="Dévéloppeur web et web mobile" && <Card student={student} key={index}/>
                    })}
                </div>
            </div>
                
        </div>
    </>
    )
}


export default Libreville
