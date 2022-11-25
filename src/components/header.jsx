import React, { useState, useRef } from 'react'

function Header() {

  const [toggle, setToggle] = useState(false);
  const header = useRef(null);


  function toggleDropdown() {
    setToggle(!toggle)


      if (!toggle) {
        header.current.classList.add('dropdown-header')
      } else {
        header.current.classList.remove('dropdown-header')
      }

  }

  return (
    <header ref={header} >
      <nav>
        <a href='#'>Lorem ipsum</a>
        <a href='#'>Lorem ipsum</a>
        <a href='#'>Lorem ipsum</a>
      </nav>

      <span onClick={toggleDropdown}>&#9776;</span>
      <nav id='nav' className={!toggle ? 'dropdown-close' : 'dropdown-open'}>
        <a href='#'>Lorem ipsum</a>
        <a href='#'>Lorem ipsum</a>
        <a href='#'>Lorem ipsum</a>
      </nav>
    </header>

  )
}

export default Header