import React from 'react'
import logo from './logo.png'
function Header() {
  return (
    <header className='header'>
      <div><img src={logo} alt="" /></div>
      {/* <div className="underline"></div> */}
    </header>
  )
}

export default Header