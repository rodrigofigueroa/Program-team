import React, { useState } from "react";

export default props => {
  const { viewsProps } = props;
  const [views, setViews] = useState(viewsProps);

  const changeTab = (v, i, setState) => {
    let aux = v.map(item => item);
    aux.map(item => (item.selected = false));

    aux[i].selected = true;
    setState(aux);
  };
  return (
    <div>
      <ul className="nav nav-justified nav-tabs" id="myTab" role="tablist">
        {views.map((view, index) => {
          return (
            <li
              key={`ul${index}`}
              onClick={() => changeTab(views, index, setViews)}
              className="nav-item"
            >
              <a
                className={`nav-link ${view.selected ? "active" : ""}`}
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                {view.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="tab-content" id="myTabContent">
        {views.map((view, index) => {
          return (
            <div
              key={"tabContent" + index}
              className={`tab-pane ${view.selected ? "active" : ""}`}
              id={"tabContent" + index}
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              {view.component}
            </div>
          );
        })}
      </div>
    </div>
  );
};
