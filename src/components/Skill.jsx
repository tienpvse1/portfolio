import React, { useEffect } from "react";
import { DiAngularSimple, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
function Skill({ revealer }) {
  const coding = require("../assets/coding.jpg").default;
  useEffect(() => {
    revealer.reveal(".skills__subtitle", {});
    revealer.reveal(".skills__text", { delay: 200 });
    revealer.reveal(".skills__data", { interval: 200 });
    revealer.reveal(".skills__img", { delay: 400 });
  }, []);
  return (
    <section className="skills section" id="skill">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">
            Frontend: Experienced with TypeScript, JavaScript and their
            frameworks: Angular, ReactJS, i can create responsive websites and
            deploy them <br />
            Backend: I have experienced with Spring boot, NodeJS. I can design
            mysql, mssql, mongoDB database, build and maintain web server and
            use ORM like Hibernate, Sequelize
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <DiReact className="skills__icon" />
              <span className="skills__name">ReactJS</span>
            </div>

            <div>
              <span className="skills__percentage">75%</span>
            </div>

            <div className="skills__bar skills__react"></div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <DiAngularSimple className="skills__icon" />
              <span className="skills__name">Angular</span>
            </div>

            <div>
              <span className="skills__percentage">80%</span>
            </div>

            <div className="skills__bar skills__angular"></div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <FaNodeJs className="skills__icon" />
              <span className="skills__name">NodeJS</span>
            </div>

            <div>
              <span className="skills__percentage">65%</span>
            </div>

            <div className="skills__bar skills__node"></div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <SiSpring className="skills__icon" />
              <span className="skills__name">Spring stack</span>
            </div>

            <div>
              <span className="skills__percentage">75%</span>
            </div>

            <div className="skills__bar skills__spring"></div>
          </div>
        </div>
        <div>
          <img src={coding} alt="" className="skills__image" />
        </div>
      </div>
    </section>
  );
}

export default Skill;
