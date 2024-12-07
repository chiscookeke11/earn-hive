import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import  "./footerStyle.css"

const Footer = () => {
  return (
    <footer>
        <div className="top-list">

            <ul>
                <li>shop</li>
                <li>Affiliates</li>
                <li>Leaderboards</li>
                <li>Support</li>
            </ul>



            <ul>
                <li>About</li>
                <li>Privacy Policy</li>
                <li>Term & Service</li>
                <li>Bug Bounty</li>
            </ul>
        </div>


        <div className="bottom-list">

            <small>Copyright © 2024 CoinGain. All Rights Reserved.</small>



            <ul>
                <li><a href="#"> <FaYoutube/></a> </li>
                <li><a href="#"><FaInstagram/></a> </li>
                <li><a href="#"><FaTwitter/></a> </li>
                <li><a href="#"><FaFacebook/></a> </li>
            </ul>
        </div>



    </footer>
  )
}

export default Footer