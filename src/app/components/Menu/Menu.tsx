'use client';
import React, { Component } from 'react'


export default class Menu extends Component {
  render() {
    return (
      <div>
        <div className="l-screen">

        
        <nav className="l-screen  menu navbar navbar-expand-sm navbar-light bg-light">
        <div className="collapse navbar-collapse d-flex" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-center w-100">
            <li className="nav-item active">
              <a className="nav-link link-opacity-10-hover" href="/">HOME</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle link-opacity-25-hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MY WORKS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item link-opacity-10-hover" href="#">PORTRAIT</a></li>
                  <li><a className="dropdown-item link-opacity-25-hover" href="#">WEDDING</a></li>
                  <li><a className="dropdown-item link-opacity-25-hover" href="#">GRADUATION</a></li>
                  <li><a className="dropdown-item link-opacity-25-hover" href="#">PRODUCT / ADs</a></li>

                  <li><a className="dropdown-item link-opacity-25-hover" href="#">STILL LIFE</a></li>

                  
                </ul>
              </li>
            <li className="nav-item">
              <a className="nav-link link-opacity-25-hover" href="/pages/about">ABOUT ME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-opacity-25-hover" href="/pages/contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>


<div className="s-screen">
       <nav className="s-screen navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">VIRA HEVKO Photography</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
               
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
</div> 
      </div>
    )
  }
}