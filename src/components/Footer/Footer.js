import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        Results Fetched From{" "}
        <a
          href="https://result.smtech.in/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#5454ec" }}
        >
          result.smtech.in
        </a>
      </div>
      <div>NOTE: Developer is not responsible for accuracy of marks</div>
      <div>{new Date().getFullYear()} &copy; Gautam Chandra Saha</div>
    </footer>
  );
};

export default Footer;
