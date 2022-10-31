import React from 'react'
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="action git navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a target="_blank" href='https://ecole241.org/' className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img src="./img/logo.png" alt="" className="logo"/>        
        </a>
        <a target='_blank' href="https://ecole241.org/contact/" style={{backgroundColor:"#ff3333"}} className="navbar-toggler btn btn-primary py-4 px-md-2" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            Nous contacter
        </a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link">Nos pépites</Link>
                <Link to="port-gentil" className="nav-item nav-link">Port-Gentil</Link>
                <Link to="libreville" className="nav-item nav-link">Libreville</Link>
            </div>
            <a target="_blank" href="https://ecole241.org/contact/" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Nous contacter<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
  )
}

export default navbar
