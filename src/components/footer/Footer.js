import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Bye Bye From Bargav 👋")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Thank you for visiting  {" "}
          <a
            href="https://github.com/BargavanR"
            target="_blank"
            rel="noreferrer"
          >
          Bargavanroboticsengineer
          </a>
        </p>
      </div>
    </Fade>
  );
}
