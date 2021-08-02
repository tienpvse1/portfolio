import React, { useEffect } from "react";

function Work({revealer}) {

  const fpt = require("../assets/fpt.jpg").default;
  const lotus = require("../assets/lotus.jpg").default;
  const library = require("../assets/library.jpg").default;

  useEffect(()=>{
    revealer.reveal('.work__img',{interval:200});
  },[])
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Education</h2>
      <div className="education__text">
        I applied for FU, due to my kin told me to, then I start to realize I
        really have passion with Software Engineerin'
      </div>
      <div className="work__container bd-grid">
        <div className="work__img">
          <img src={fpt} alt="" />
        </div>
        <div className="work__img">
          <img src={lotus} alt="" />
        </div>
        <div className="work__img">
          <img src={library} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Work;
