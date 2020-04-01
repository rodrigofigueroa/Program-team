import React from "react";
import "./dataTable.scss";
import { useEffect } from "react";

export const DataTable = props => {
  const { attrs, data } = props;
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="tableData">
      <table>
        <thead>
          <tr>
            {Object.keys(attrs).map((item, index) => {
              if (item) {
                if (attrs[item])
                  return (
                    <th key={`dataTable${index}`} className="headerItem">
                      {item}
                    </th>
                  );
              }
              return null;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                {Object.values(item).map((value, index) => {
                  return <td>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
