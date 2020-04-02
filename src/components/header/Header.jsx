import React from "react";

export default props => {
  const { catalogo, setSearchAttr, attrs, setSearch } = props;
  return (
    <div className="card p-2 my-2 bg-info">
      <div className="row">
        <div className="col-3">
          <h2 className="text-white">{catalogo}</h2>
        </div>
        <div className="col-3">
          <select
            onChangeCapture={e => {
              console.log(e.target.value);
              setSearchAttr(e.target.value);
            }}
            id="searchSelect"
            name="searchSelect"
            autoComplete="off"
            type="select"
            className="form-control"
            aria-describedby="emailHelp"
          >
            {Object.keys(attrs).map((option, index) => {
              return <option key={`option${index}`}>{option}</option>;
            })}
          </select>
        </div>
        <div className="col-6">
          <input
            onKeyPress={e => {
              if (e.key === "Enter") {
                setSearch(e.target.value);
              }
            }}
            id="searchInput"
            name="searchInput"
            defaultValue=""
            autoComplete="off"
            type="search"
            placeholder="buscar"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </div>
  );
};
