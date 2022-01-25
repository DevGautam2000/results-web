import React from "react";
import style from "./Modal.module.css";
import { Button } from "@material-ui/core";
const Modal = ({ value, click }) => {
  return (
    <div className={style.modal}>
      <div className={style.container}>
        <span className={style.cross} onClick={click}>
          X
        </span>
        <span className={style.message}>{value}</span>
        <Button
          style={{
            background: "rgb(245, 96, 153)",
            color: "white",
          }}
          variant="contained"
          className={style.ok}
          onClick={click}
        >
          Ok
        </Button>
      </div>
    </div>
  );
};

export default Modal;
