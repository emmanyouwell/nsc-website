import React from 'react'

//HashLink
import { HashLink } from 'react-router-hash-link'

//Custom Css
import "./Footer.css"
const Footer = () => {
  const handleClick = event => {
    if (event.target.classList.contains('fa-bounce')) {

      event.target.classList.remove('fa-bounce');
    }
    else {

      event.target.classList.add('fa-bounce');
    }


  }
  return (
    <footer className="py-6 bg-primary" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <h2>Technologies used</h2>
            <ul className="list-inline social social-dark social-sm">
              <li className="list-inline-item">
                <HashLink smooth to="#footer"><i className="fa-brands fa-react fa-xl" onClick={handleClick}></i></HashLink>
              </li>
              <li className="list-inline-item">
                <HashLink smooth to="#footer" ><i className="fa-brands fa-html5 fa-lg" onClick={handleClick} ></i></HashLink>
              </li>
              <li className="list-inline-item">
                <HashLink smooth to="#footer" ><i className="fa-brands fa-css3-alt fa-lg" onClick={handleClick}></i></HashLink>
              </li>
              <li className="list-inline-item">
                <HashLink smooth to="#footer" ><i className="fa-brands fa-js fa-lg" onClick={handleClick} ></i></HashLink>
              </li>
              <li className="list-inline-item">
                <HashLink smooth to="#footer" ><i className="fa-brands fa-bootstrap fa-lg" onClick={handleClick}></i></HashLink>
              </li>
              
            </ul>
            <p className="text-muted small text-uppercase mt-4">
              Follow me on social media
            </p>
            <ul className="list-inline social social-dark social-sm">
              <li className="list-inline-item">
                <a href="https://web.facebook.com/learntocodeph22"><i className="fa-brands fa-facebook"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/learntocodeph"><i className="fa-brands fa-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.youtube.com/@learntocodeph"><i className="fa-brands fa-youtube"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/Emmanuel-Mingala/nsc.git"><i className="fa-brands fa-github"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-muted text-center small-xl">
            Created by Emmanuel Mingala
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer