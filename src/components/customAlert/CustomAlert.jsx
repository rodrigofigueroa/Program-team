import React from "react";
import "./customAlert.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE_SWAL } from "../../store/actions/actions.vars";
export const CustomAlert = (props) => {
  const {
    open = true,
    bodyText = "Body",
    title = "Title",
    onAccept = () => null,
  } = props;
  const dispatch = useDispatch();
  const handleAccept = (setState, acceptActtion) => {
    acceptActtion();
    setState({ type: CLOSE_SWAL });
  };
  useEffect(() => {
    if (open) {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
    } else {
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <div
      style={{ display: open ? "flex" : "none" }}
      className={open ? "overlay" : ""}
    >
      <div className="alert__box">
        <div className="alert__title">{title}</div>
        <div className="alert__body">{bodyText}</div>
        <div className="alert__footer">
          <button
            onClick={() => dispatch({ type: CLOSE_SWAL })}
            className="btn btn-secondary ml-1"
          >
            Cancelar
          </button>
          <button
            onClick={() => handleAccept(dispatch, onAccept)}
            className="btn btn-success ml-1"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
