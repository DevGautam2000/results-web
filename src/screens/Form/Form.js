import React, { useEffect, useState } from "react";
import style from "./Form.module.css";
import ResultForm from "../../components/Form/Form";
import Motion from "../../js/Motion";
import Bar from "../../components/Bar/Bar";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";

const Form = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) {
      setModalIsVisible(true);
    }
  }, []);

  return (
    <>
      <div className={style.form}>
        <Bar title="Form" arrowIsVisible={true} pathName="Home" />
        <Motion Component={<ResultForm />} />
      </div>

      <Motion Component={<Footer />} />
      {modalIsVisible ? (
        <Modal
          value="Check your internet connection"
          click={() => setModalIsVisible(false)}
        />
      ) : null}
    </>
  );
};

export default Form;
