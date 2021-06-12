import React, { useEffect, useState } from "react";
import style from "./Form.module.css";
import ResultForm from "../../components/Form/Form";
import Motion from "../../js/Motion";
import Bar from "../../components/Bar/Bar";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const history = useHistory();

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
          click={() => {
            setModalIsVisible(false);
            history.goBack();
          }}
        />
      ) : null}
    </>
  );
};

export default Form;
