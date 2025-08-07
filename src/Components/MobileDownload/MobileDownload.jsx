import React from 'react'
import './MobileDownload.css'
import { assets } from '../../assets/assets'

const MobileDownload = () => {
  return (
    <div className='mobile-download' id='mobile-download'>
        <p>For Better Experience Download<br /> KhanaExpress app</p>
    <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>

    </div>
  )
}

export default MobileDownload