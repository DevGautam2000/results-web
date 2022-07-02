import React, { useEffect, useState } from "react";
import Bar from "../../components/Bar/Bar";
import Modal from "../../components/Modal/Modal";
import style from "./Analyzer.module.css";
import Chart from "../../components/Chart/Chart";
import calcGpa from "../../utils/GPACalc";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContextSelector } from "../../context";

const Analyzer = () => {
  const gotoHome = () => {
    setModalIsVisible(false);
    history.goBack();
    history.goBack();
    history.goBack();
  };

  // const { getFromLocalStorage, setLocalStorage } = useContextSelector();
  const { collection, lateCollection } = useSelector(
    (state) => state.collections
  );

  // const { collection, lateCollection } =
  //   collections.collection === {} ? getFromLocalStorage() : collections;
  const { period, lateperiod } = useSelector((state) => state.periods);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const [modalFunction, setModalFunction] = useState(0);
  const gpaPoint = calcGpa(collection);
  const lateGpaPoint = calcGpa(lateCollection);
  const history = useHistory();

  const disappear = () => {
    setModalIsVisible(false);
  };
  // useEffect(() => {
  //   if (Object.keys(collection).length > 0)
  //     setLocalStorage(collection, lateCollection);
  // }, []);

  useEffect(() => {
    let visible, value;
    let isUnmount = false;

    if (Object.keys(collection).length <= 0) {
      history.replace("/form");
      return () => (isUnmount = true);
    }

    if (lateGpaPoint === undefined) {
      value = "Oh! looks like you have completed only one semester.";
      visible = true;
    } else if (gpaPoint === lateGpaPoint) {
      value = "You seem to be consistent enough.";
      visible = true;
    } else if (gpaPoint > lateGpaPoint) {
      value = "Hurray! Your performance is better from last semester.";
      visible = true;
    } else {
      value = "Oh O! You performed better last semester.";
      visible = true;
    }

    if (!isUnmount) {
      setModalValue(value);
      setModalIsVisible(visible);
      setModalFunction(1);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1450 && !isUnmount) {
        setModalValue("This screen is restricted for mobile view");
        setModalIsVisible(true);
        setModalFunction(0);
      }
    });

    return () => (isUnmount = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let labelsList = [],
    late_labelsList = [],
    intList = [],
    subList = [],
    extList = [],
    late_intList = [],
    late_subList = [],
    late_extList = [];

  const extractData = (iterable, int, ext, sub, label) => {
    Object.keys(iterable).map((subCode) => {
      if (subCode !== "name") {
        label.push(`${subCode}--${iterable[subCode]["sub"]}`);
        int.push(iterable[subCode]["int"]);
        ext.push(iterable[subCode]["ext"]);
        sub.push(iterable[subCode]["sub"]);
      }

      return null;
    });
  };

  extractData(collection, intList, extList, subList, labelsList);
  if (lateCollection)
    extractData(
      lateCollection,
      late_intList,
      late_extList,
      late_subList,
      late_labelsList
    );

  const setChartData = (labelsList, intList, extList) => {
    return {
      labels: labelsList,

      datasets: [
        {
          label: "Internal",
          data: intList,
          backgroundColor: [
            "rgba(54, 162, 235,0.8)",
            "rgba(245, 205, 86,0.8)",
            "rgba(255, 205, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(255, 205, 86,0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(258, 105, 86,0.8)",
            "rgba(255, 205, 86,0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(258, 105, 86,0.8)",
          ],
        },
        {
          label: "External",
          data: extList,
          backgroundColor: [
            "rgba(255, 205, 86, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 159, 64, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 159, 64, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(201, 203, 207, 0.8)",
          ],
        },
      ],
    };
  };
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          title: function (tooltipItem) {
            return tooltipItem[0]?.label.toString().split("--")[1];
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (label, _) {
            return this.getLabelForValue(label).toString().split("--")[0];
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = setChartData(labelsList, intList, extList);
  const late_data = setChartData(late_labelsList, late_intList, late_extList);

  let late_chart = null;

  if (late_labelsList.length > 0) {
    late_chart = (
      <Chart
        periodName={lateperiod}
        data={late_data}
        collection={lateCollection}
        options={options}
      />
    );
  }

  return (
    <div className={style.analyzer}>
      <Bar
        title="Analyzer"
        arrowIsVisible={true}
        pathName="Result"
        homePath={true}
      />

      {modalIsVisible ? (
        <Modal
          value={modalValue}
          click={modalFunction === 1 ? disappear : gotoHome}
        />
      ) : null}

      {modalFunction === 1 ? (
        <div className={style.chart_container}>
          <Chart
            periodName={period}
            data={data}
            collection={collection}
            options={options}
          />
          {late_chart}
        </div>
      ) : null}
    </div>
  );
};

export default Analyzer;
