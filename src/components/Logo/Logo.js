import React from 'react'
import './Logo.css'

export default ({ width, height, color = 'primary', text }) => (
  <div className='logo'>
    <svg width={width} height={height} viewBox='0 0 200 275'>
      <path className={color} d='M99.8580876,224.056024 L0,274.528973 L99.8580876,0 L199.716175,274.528973 L99.8580876,224.056024 Z' />
      <polygon id='Rectangle-4-Copy' fillOpacity='0.1' fill='#000000' transform='translate(49.929044, 137.264487) scale(-1, 1) translate(-49.929044, -137.264487) ' points='0 0 99.8580876 274.528973 0 224.056024' />
    </svg>
    {text && (
      <span style={{ fontSize: `${height/1.3}px` }}>UpSub</span>
    )}
  </div>
)
