import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
        <div className="social-links">
            <a href="https://github.com/KumrGaurav" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="Github" />
            </a>
            <a href="https://www.instagram.com/gau_rav_singh_/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/kgauravmca/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
            </a>
        </div>

        
        <a href="/" className="logo-f">
            <img src={Logo} alt="Logo" />
        </a>

        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer
