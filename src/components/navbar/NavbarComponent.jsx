import React from 'react';

export const NavbarComponent = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="../">
          <img src="https://dansup.github.io/bulma-templates/images/bulma.png" alt="Logo" />
        </a>
        <span className="navbar-burger burger" data-target="navbarMenu">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <a href="/" className="navbar-item is-active">
            Home
          </a>
          <a href="/" className="navbar-item">
            Examples
          </a>
          <a href="/" className="navbar-item">
            Features
          </a>
          <a href="/" className="navbar-item">
            Team
          </a>
          <a href="/" className="navbar-item">
            Archives
          </a>
          <a href="/" className="navbar-item">
            Help
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="/" className="navbar-link">
              Account
            </a>
            <div className="navbar-dropdown">
              <a href="/" className="navbar-item">
                Dashboard
              </a>
              <a href="/" className="navbar-item">
                Profile
              </a>
              <a href="/" className="navbar-item">
                Settings
              </a>
              <hr className="navbar-divider" />
              <div className="navbar-item">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
