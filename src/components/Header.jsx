import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const links = [
    { text: "Home", url:"#home" },
    { text: "About", url:"#about" },
    { text: "Skill", url: "#skill" },
    { text: "Education", url:"#work"  },
    { text: "Contact", url:"#contact" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const openNav = () => {
    const nav = document.querySelector(".nav__menu");
    nav.classList.toggle("show");
  };

  const onLinkClicked = (index) =>{
      setSelectedIndex(index);
      openNav();
  }

  return (
    <header className="l-header">
      <nav className="nav body-grid">
        <div>
          <a href="#" className="nav__logo">
            Tien's portfolio
          </a>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {links.map((link, index) =>
              selectedIndex === index ? (
                <li className="nav__item" key={index}>
                  <a href={link.url} className="nav__link active">
                    {link.text}
                  </a>
                </li>
              ) : (
                <li
                  className="nav__item"
                  key={index}
                  onClick={() => onLinkClicked(index)}
                >
                  <a href="#" className="nav__link">
                    {link.text}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={openNav}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
