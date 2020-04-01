import React from "react";
import "./attrTable.scss";
import { useDispatch } from "react-redux";
import { UPDATE_VISIBLE_COLUMNS } from "../../store/actions/actions.vars";

export const AttrTable = props => {
  const { attrs } = props;
  const dispatch = useDispatch();
  return (
    <div className="atributosClientes">
      <p className="instruction">
        Seleccione que atributos apareceran en la tabla
      </p>

      {Object.keys(attrs).map((item, index) => {
        return (
          <div key={`keyItemList${index}`} className="atributosClientes__items">
            <input
              type="checkbox"
              checked={attrs[item]}
              onChange={() => {
                dispatch({
                  type: UPDATE_VISIBLE_COLUMNS,
                  payload: { state: (attrs[item] = !attrs[item]) }
                });
              }}
            />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};
