import React from 'react'
import sun from '../images/icon-sun.svg'
import moon from '../images/icon-moon.svg'
function Header({mode,handleModeChange}) {

  
  return (
    <div className="header__container">
            <h1>TODO</h1>
            <img src={mode ? moon : sun} alt='change mode icon' onClick={handleModeChange}/>
          </div>
  )
}

export default Header