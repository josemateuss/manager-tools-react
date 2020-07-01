import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper light-green darken-4">
        <a href="/" className="brand-logo">Sistema Gerenciador de Ferramentas</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Sass</a></li>
          <li><a href="/">Components</a></li>
          <li><a href="/">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  )
};

export default Header;
