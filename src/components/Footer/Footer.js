import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        Results Fetched From{" "}
        <Link
          style={{ color: "#5454ec" }}
          onClick={() => window.open("https://result.smtech.in/")}
        >
          result.smtech.in
        </Link>
      </div>
      <div>NOTE: Developer is not responsible for accuracy of marks</div>
      <div>2021 &copy; Gautam Chandra Saha</div>
    </footer>
  );
};

export default Footer;
