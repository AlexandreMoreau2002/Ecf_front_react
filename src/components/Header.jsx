import React from 'react'

function Header() {
  return (
    <>
      <nav className='navHeader'>
        <p>Logo Placeholder</p>
        <button>Sign Up</button>
      </nav>
      <header>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <form action="#" method="post" >
          <input type="email" name="email" placeholder="Email address" />
          <button type="submit">Submit</button>
        </form>
      </header>
    </>
  )
}

export default Header
