import React from "react";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Phan Tien</p>
      <div className="footer__social">
        <a href="#" className="footer__icon"><AiFillFacebook /></a>
        <a href="#" className="footer__icon"><FaFacebookMessenger /></a>
        <a href="#" className="footer__icon"><AiFillGithub /></a>
      </div>
      <p>&#169; 2021 copyright all right reserved</p>
    </footer>
  );
}

export default Footer;
