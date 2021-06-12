import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import style from "./Form.module.css";
import { Button, TextField } from "@material-ui/core";
import Modal from "../Modal/Modal";
import { periods } from "../../utils/data";
import { useHistory } from "react-router-dom";

export default function Form() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
  }));

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
  };

  function getStyles(name, periodName, theme) {
    return {
      fontWeight:
        periodName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const classes = useStyles();
  const theme = useTheme();
  const [periodName, setPeriodName] = useState("");
  const [regId, setRegId] = useState("");
  const [err, setErr] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    checkConditionals();
  };

  const navigateToResult = () => {
    history.push({
      pathname: "/result",
      state: {
        regId: regId,
        periodName: periodName,
        urlPosition: periods.indexOf(periodName),
      },
    });
  };

  const checkConditionals = () => {
    let errText = "";
    let isVisible = false;

    if (!navigator.onLine) {
      errText = "Check internet connection";
      isVisible = true;
    } else if (periodName.length === 0) {
      errText = "Select period from list";
      isVisible = true;
    } else if (regId.length === 0) {
      errText = "Enter Id";
      isVisible = true;
    } else if (regId.length <= 7 || regId.length > 9) {
      errText = "Invalid Id";
      isVisible = true;
    } else {
      setPeriodName("");
      setRegId("");
      navigateToResult();
    }
    setErr(errText);
    setModalVisibility(isVisible);
  };

  return (
    <>
      <div className={style.form}>
        <form className={style.form_container}>
          <FormControl
            className={clsx(
              classes.formControl,
              classes.noLabel,
              style.form_style
            )}
          >
            <Select
              displayEmpty
              value={periodName}
              onChange={(e) => setPeriodName(e.target.value)}
              input={<Input />}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>Select Duration</em>
              </MenuItem>
              {periods.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, periodName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            className={style.form_style}
            placeholder="Registration ID"
            value={regId}
            onSubmit={handleSubmit}
            onChange={(e) => setRegId(e.target.value)}
          />

          <Button
            style={{
              background: "rgb(245, 96, 153)",
              marginTop: "10px",
            }}
            className={style.form_style}
            type="submit"
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
      {modalVisibility ? (
        <Modal value={err} click={() => setModalVisibility(false)} />
      ) : null}
    </>
  );
}
