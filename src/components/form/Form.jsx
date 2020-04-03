import React, { useState } from "react";
import { useEffect } from "react";

export default props => {
  const { fields = [], datas = {}, id } = props;
  const [dataForm, setDataForm] = useState(datas);
  useEffect(() => {
    setDataForm(datas);
  }, [datas]);

  return (
    <form id={props.id} autoComplete="off">
      <div className="row">
        {fields.map((column, index) => {
          return (
            <div key={`columna${index}`} className={column.size}>
              {column.inputs.map((input, i) => {
                if (input.type === "checkbox")
                  return (
                    <div key={`checkbox${i}`}>
                      <input
                        name={input.name}
                        id={id + input.name}
                        type="checkbox"
                        defaultChecked={dataForm[input.name] || false}
                      />
                      <label htmlFor={input.name}>{input.name}</label>
                    </div>
                  );
                let regex = input.regex;
                if (typeof regex !== "undefined") {
                  regex = regex.replace("\\b", "");
                  regex = regex.replace("/", "");
                  regex = regex.replace("$/", "");
                  regex = regex.replace("(/^)", "");
                }
                return input.name === "id" || input.name === "_id" ? null : (
                  <div className="form-group" key={`input${i}`}>
                    <label htmlFor={input.name}>{input.name}</label>
                    <input
                      id={id + input.name}
                      pattern={regex ? String(regex) : "*"}
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
              })}
            </div>
          );
        })}
      </div>
    </form>
  );
};
