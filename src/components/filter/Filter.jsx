import React from "react";
import { useDispatch } from "react-redux";
import { UPDATE_VISIBLE_COLUMNS } from "../../store/actions/actions.vars";

export const Filter = props => {
  const { attrs, catalogue } = props;
  const dispatch = useDispatch();
  return (
    <div
      className="card p-2"
      style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
    >
      <p className="">Filtro de: {catalogue}</p>

      {Object.keys(attrs).map((item, index) => {
        return (
          <div
            key={`keyItemList${index}`}
            className="custom-control custom-checkbox mr-sm-2"
          >
            <input
              name={item}
              id={item}
              className="custom-control-input"
              type="checkbox"
              checked={attrs[item]}
              onChange={() => {
                dispatch({
                  type: UPDATE_VISIBLE_COLUMNS,
                  payload: { state: (attrs[item] = !attrs[item]) }
                });
              }}
            />
            <label htmlFor={item} className="custom-control-label">
              {item}
            </label>
          </div>
        );
      })}
    </div>
  );
};
