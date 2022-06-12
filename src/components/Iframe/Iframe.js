import React from "react";
import style from "./iframe.module.css";
function Iframe() {
  return (
    <>
      <div className={style.iframe_wrapper}>
        <iframe
          src="https://gpa.rishavanand.com/estimator.html"
          className={style.iframe}
          title="gpa.rishavanand.com/estimator.html"
        ></iframe>
      </div>
      <div className={style.credit_wrapper}>
        credits{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/rishavanand/gpa-buddy"
          style={{ color: "#3F6AE6", textDecoration: "none" }}
        >
          @rishavanand
        </a>
      </div>
    </>
  );
}

export default Iframe;
