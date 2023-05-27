import React from 'react'

function Navbar() {
  return (
      <header className="header active" data-header>
    <div className="container">

      <a href="#" className="logo">
        <img src="/public/logo.svg" width="110" height="53" alt="unigine home" />
      </a>

      <nav className="navbar" data-navbar>
        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#home" className="navbar-link" data-nav-link>home</a>
          </li>

          <li className="navbar-item">
            <a href="#tournament" className="navbar-link" data-nav-link>tournament</a>
          </li>

          <li className="navbar-item">
            <a href="#news" className="navbar-link" data-nav-link>news</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link>contact</a>
          </li>

        </ul>
      </nav>

      <a href="#" className="btn" data-btn>join our team</a>

      <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </button>

    </div>
  </header>
  )
}

export default Navbar