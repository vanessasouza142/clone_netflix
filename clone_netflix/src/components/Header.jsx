import React from "react";
import "./Header.css";

const Header = ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.webp" alt="Usuário" />
        </a>
      </div>
    </header>
  );
}

export default Header;