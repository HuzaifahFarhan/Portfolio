import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Muhammad Huzaifah</h4>
            <p>
              <i class="fa-sharp fa-regular fa-copyright"></i>
              {year} Muhammad Huzaifah All rights reserved
            </p>
            <p className="d-flex">
              <div>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  "&:hover": { textDecoration: "underline"},
                }}
                to="http://github.com/huzaifahfarhan" target="_blank"
              >
                
              <i class="fa-brands fa-github"></i>
              </NavLink>
              </div>
              <div>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  "&:hover": { textDecoration: "underline"},
                }}
                to="https://www.linkedin.com/in/muhammad-huzaifah602/" target="_blank"
              >
              <i class="fa-brands fa-linkedin mx-3"></i>
              </NavLink>
              </div>

            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Feel free to contact with me by Email or WhatsApp</p>
            <div>
              <a style={{
                  textDecoration: "none",
                  color:"white",
                  "&:hover": { textDecoration: "underline" },
                }} href="mailto:huzaifah602@gmail.com"><i class="fa-solid fa-envelope me-3 mb-3"></i>huzaifah602@gmail.com </a>
            </div>
            <div>
              <NavLink
                style={{
                  textDecoration: "none",
                  color:"white",
                  "&:hover": { textDecoration: "underline" },
                }}
                to="https://api.whatsapp.com/send/?phone=%2B923232907074&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <i class="fa-brands fa-whatsapp me-3 mb-3"></i> +92 323 2907074
              </NavLink>
            </div>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <div>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  "&:hover": { textDecoration: "underline"},
                }}
                to="/resume"
              >
                Resume
              </NavLink>
            </div>
            {/* <button
              onClick={() => {
                navigate(<Resume />);
              }}
            >
              Resume
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
