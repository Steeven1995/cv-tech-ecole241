import React from 'react'
import Card from '../components/card'

function All({students}) {

    return (
    <>
        <div className="container-xxl pb-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-5" style={{fontSize: "2.1rem",}}>Nos pépites du numériques</h1>
                    <h6 className="mb-4 section-title bg-white text-center text-primary px-3">Référents digital</h6>
                </div>
                <div className="row g-4">
                    {students.map((student, index)=>{
                         return student.cohorte==="Référent Digital" && <Card student={student} key={index}/>
                    })}
                </div>
            </div>
                
        </div>
        <div className="container-xxl py-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="mb-4 section-title bg-white text-center text-primary px-3">Développeur web & Web mobile</h6>
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

export default All
