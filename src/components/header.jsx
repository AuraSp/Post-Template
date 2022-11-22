import React from 'react'

function Header() {

  function toggleDropdown() {

  }

  return (
    <header>
      <nav>
        <a href='#'>Lorem Ipsum</a>
        <a href='#'>Lorem Ipsum</a>
        <a href='#'>Lorem Ipsum</a>
      </nav>

      <span onClick={toggleDropdown()}>&#9776;</span>
      <nav id='nav' className='dropdown'>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </nav>
    </header>
  )
}

export default Header