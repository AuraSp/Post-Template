import React, { useState, useRef } from 'react'

function Header() {

  const [toggle, setToggle] = useState(false);
  const header = useRef(null);
  const icon = useRef(null);

  // TOGGLE DROPDOWN CLASSES
  function toggleDropdown() {
    setToggle(!toggle)


    if (!toggle) {
      header.current.classList.add('dropdown-header');
      icon.current.innerHTML = 'X';

    } else {
      header.current.classList.remove('dropdown-header');
      icon.current.innerHTML = '&#9776;';
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
      <span onClick={toggleDropdown} ref={icon}>&#9776;</span>
      <nav id='nav' className={!toggle ? 'dropdown-close' : 'dropdown-open'}>
        <a href='/'>Lorem ipsum</a>
        <a href='/'>Lorem ipsum</a>
        <a href='/'>Lorem ipsum</a>
      </nav>

    </header>

  )
}

export default Header