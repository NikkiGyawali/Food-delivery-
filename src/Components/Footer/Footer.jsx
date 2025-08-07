import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img className='footer-logo' src={assets.logoo} alt="" /> */}
                      <p>Every meal from KhanaExpress carries a little love from our kitchen to your table.
                     With fresh ingredients, heartfelt recipes, and a commitment to quality,
                     we deliver more than just food — we deliver comfort, warmth, and a homely touch in every bite.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
            </div>

            <div className="footer-content-center">

                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            <div className="footer-content-right">
                 {/* <img className='footer-logo' src={assets.logoo} alt="" /> */}
                <h2>Get in touch</h2>
                <ul>
                    <li>9867023368</li>
                    <li>ourkhanaexpress@gmail.com</li>
                </ul>

            </div>

        </div>
      
        <hr />
        <p className="footer-copyright"> Copyright &copy;2025 KhanaExpress. All Rights Reserved.</p>
    </div>
  )
}

export default Footer