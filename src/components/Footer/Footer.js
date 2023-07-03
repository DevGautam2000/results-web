import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        Results Fetched From{" "}
        <a
          href="https://ecm.smtech.in/ecm/login.aspx?api_page=result"
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
