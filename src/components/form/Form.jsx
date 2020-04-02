import React, { useState } from "react";
import { useEffect } from "react";

export default props => {
  const { fields = [], datos = {}, id } = props;
  const [dataForm, setDataForm] = useState(datos);

  useEffect(() => {
    setDataForm(datos);
  }, [datos]);
  return (
    <form id={props.id} autoComplete="off">
      <div className="row">
        {fields.map((column, index) => {
          return (
            <div key={`columna${index}`} className={column.size}>
              {column.inputs.map((input, i) => {
                if (input.type === "checkbox")
                  return (
                    <div
                      key={`checkbox${i}`}
                      // className="custom-control custom-checkbox mr-sm-2"
                    >
                      <input
                        name={input.name}
                        id={input.name}
                        // className="custom-control-input"
                        type="checkbox"
                        defaultChecked={dataForm[input.name] || false}
                      />
                      <label
                        // className="custom-control-label"
                        htmlFor={input.name}
                      >
                        {input.name}
                      </label>
                    </div>
                  );

                return input.name == "id" || input.name == "_id" ? null : (
                  <div className="form-group" key={`input${i}`}>
                    <label htmlFor={input.name}>{input.name}</label>
                    <input
                      id={id + input.name}
                      name={input.name}
                      defaultValue={dataForm[input.name] || ""}
                      autoComplete="off"
                      type={input.type}
                      placeholder={input.placeholder}
                      className="form-control"
                      aria-describedby="emailHelp"
                      required={input.required}
                    />
                  </div>
                );
                {
                  /* return <input type={input.type} />; */
                }
              })}
            </div>
          );
        })}
      </div>
    </form>
  );
};
