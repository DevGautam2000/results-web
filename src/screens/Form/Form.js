import React from "react";
import style from "./Form.module.css";
import ResultForm from "../../components/Form/Form";
import Motion from "../../js/Motion";
import Bar from "../../components/Bar/Bar";
import Footer from "../../components/Footer/Footer";

const Form = () => {
  return (
    <>
      <div className={style.form}>
        <Bar title="Form" arrowIsVisible={true} pathName="Home" />
        <Motion Component={<ResultForm />} />
      </div>

      <Motion Component={<Footer />} />
    </>
  );
};

export default Form;
