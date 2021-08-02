import React, { useEffect } from "react";

function About({revealer}) {
  const avatar = require("../assets/me2.jpg").default;
  useEffect(()=>{
      revealer.reveal('.about__img',{});
      revealer.reveal('.about__subtitle',{delay: 200});
      revealer.reveal('.about__text',{delay: 400});
  },[])
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={avatar} alt="" />
        </div>
        <div>
          <h2 className="about__subtitle">I'm Phan Van Tien</h2>
          <p className="about__text">
            An FU student who love learning new software technology <br />
            Quote: "You must do working to have something to eat."
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
