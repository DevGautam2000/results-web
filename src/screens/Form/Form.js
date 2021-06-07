import React from "react";
import style from "./Form.module.css";
import ResultForm from "../../components/Form/Form";
import Motion from "../../js/Motion";
import Footer from "../../components/Footer/Footer";
import Bar from "../../components/Bar/Bar";

const Form = () => {
  return (
    <div className={style.form}>
      <Bar title="Form" arrowIsVisible={true} path="/" pathName="Home" />
      <Motion Component={<ResultForm />} />
      <Motion Component={<Footer />} />
    </div>
  );
};

export default Form;
