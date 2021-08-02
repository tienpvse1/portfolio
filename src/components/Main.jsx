import React, { useEffect } from "react";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
function Main({ revealer }) {
  const avatar = require("../assets/me.jpg").default;
  const avatar2 = require("../assets/me2.jpg").default;
  useEffect(() => {
    revealer.reveal(".home__title", {});
    revealer.reveal(".button", { delay: 200 });
    revealer.reveal(".home__image", { delay: 400 });
    revealer.reveal(".home__social-icon", { inteval: 200 });
  }, []);
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi, <br /> I'm <span className="home__title-color">Tien</span>
          <br />
          Web developer
        </h1>
        <a href="#" className="button">
          Contact
        </a>
      </div>
      <div className="home__social">
        <a href="https://github.com/tienpvse1" className="home__social-icon">
          <AiFillGithub />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100010674040775" className="home__social-icon">
          <AiFillFacebook />
        </a>
        <a href="" className="home__social-icon">
          <AiFillInstagram />
        </a>
      </div>
      <div className="home__image">
        <img src={avatar} alt="" style={{ borderRadius: 15 }} />
      </div>
    </section>
  );
}

export default Main;
