import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        Results Fetched From{" "}
        <a
          href="https://erp.smu.edu.in/SMITRESULTAPP/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#5454ec" }}
        >
          erp.smu.edu
        </a>
      </div>
      <div>NOTE: Developer is not responsible for accuracy of marks</div>
      <div>{new Date().getFullYear()} &copy; Gautam Chandra Saha</div>
    </footer>
  );
};

export default Footer;
