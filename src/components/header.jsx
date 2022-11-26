import React, { useState, useRef } from 'react'

function Header() {

  const [toggle, setToggle] = useState(false);
  const header = useRef(null);

  // TOGGLE DROPDOWN CLASSES
  function toggleDropdown() {
    setToggle(!toggle)


    if (!toggle) {
      header.current.classList.add('dropdown-header')
    } else {
      header.current.classList.remove('dropdown-header')
    }

  }

  return (
    <header className='header' ref={header} >

      {/* L-D & M-D NAVBAR */}
      <nav>
        <a href='/'>Lorem ipsum</a>
        <a href='/'>Lorem ipsum</a>
        <a href='/'>Lorem ipsum</a>
      </nav>

      {/* S-D NAVBAR */}
      <span onClick={toggleDropdown}>&#9776;&#9747;</span>
      <nav id='nav' className={!toggle ? 'dropdown-close' : 'dropdown-open'}>
        <a href='/'>Lorem ipsum</a>
        <a href='/'>Lorem ipsum</a>
        <a href='/'>Lorem ipsum</a>
      </nav>

    </header>

  )
}

export default Header