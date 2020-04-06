/****************************************************/
// Filename: Filter.jsx
// Created: Eduardo Monter Alonso | Ivan Figueroa | Andrés Arturo Olan
// Change history:
// 04.04.2020 / Eduardo Monter Alonso | Ivan Figeroa | Andrés Arturo Olan
/****************************************************/
/* Tabla para mostrar la información del catálogo */
/****************************************************/
// EOF:
/****************************************************/
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "../modal/Modal";
import Form from "../form/Form";
import { useSelector } from "react-redux";
import Tabs from "../tabs/Tabs";

export const Table = (props) => {
  const edit = useSelector((state) => state.data.edit);
  const {
    attrs,
    api,
    showEyeButton = true,
    subCatalogues = [],
    showTrashButton = true,
    inputAttrs = [],
  } = props;
  const [inputFields, setInputFields] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  //useEffect para escuchar el ciclo de vida
  useEffect(() => {
    loadTableFormApi(api, props.catalogo);
  }, [props.catalogo, api]);

  //useEffect para escuchar el ciclo de vida
  useEffect(() => {
    if (props.search === "") {
      loadTableFormApi(api, props.catalogo);
    }
    let auxArr = [];
    dataTable.map((dataSet) => {
      if (String(dataSet[props.searchAttr]) === String(props.search)) {
        auxArr.push(dataSet);
      }
      setDataTable(auxArr);
      return auxArr;
    });
  }, [props.search, props.catalogo, api, props.searchAttr]);

  //useEffect para escuchar el ciclo de vida
  useEffect(() => {
    const length = inputAttrs.length;

    let fields = [];

    if (length > 0 && length <= 10) {
      fields = [{ size: "col-md-12", inputs: inputAttrs }];
    } else if (length > 10 && length <= 20) {
      fields = [
        { size: "col-md-6 col-sm-12", inputs: inputAttrs.slice(0, 10) },
        { size: "col-md-6 col-sm-12", inputs: inputAttrs.slice(10, 20) },
      ];
    } else if (length > 20 && length <= 30) {
      fields = [
        { size: "col-md-4 col-sm-12", inputs: inputAttrs.slice(0, 10) },
        { size: "col-md-4 col-sm-12", inputs: inputAttrs.slice(10, 20) },
        { size: "col-md-4 col-sm-12", inputs: inputAttrs.slice(20, 30) },
      ];
    } else if (length > 30 && length <= 40) {
      fields = [
        { size: "col-md-3 col-sm-12", inputs: inputAttrs.slice(0, 10) },
        { size: "col-md-3 col-sm-12", inputs: inputAttrs.slice(10, 20) },
        { size: "col-md-3 col-sm-12", inputs: inputAttrs.slice(20, 30) },
        { size: "col-md-3 col-sm-12", inputs: inputAttrs.slice(30, 40) },
      ];
    } else if (length > 40 && length <= 50) {
      fields = [
        { size: "col-md-3 col-sm-12", inputs: inputAttrs.slice(0, 13) },
        { size: "col-md-3 col-sm-12", inputs: inputAttrs.slice(13, 26) },
        { size: "col-md-3 col-sm-12", inputs: inputAttrs.slice(26, 39) },
        { size: "col-md-3 col-sm-12", inputs: inputAttrs.slice(39, 50) },
      ];
    }
    setInputFields(fields);
  }, []);

  /****************************************************/
  /*variable api:string,
  /*variable catalogo:Object,
  /****************************************************/
  /*funcion loadTableFormApi(api, catalogo)*/
  /****************************************************/
  /*dispara la carga de información a la table desde una consulta a la API
  /****************************************************/
  const loadTableFormApi = (api, catalogo) => {
    try {
      const response = fetch(`${api}api/${catalogo}`, {
        method: "GET",
        mode: "cors",
        //body: JSON.stringify(data)
      });
      response
        .then(async (res) => await res.json())
        .then((resp) => setDataTable(resp.results));
    } catch (error) {
      console.error(error);
    }
  };
  /****************************************************/
  /*variable views:string,
  /****************************************************/
  /*funcion deleteItem(id)*/
  /****************************************************/
  /*Dispara la eliminación de un objeto en la API, y su eliminación en el DOM
  /****************************************************/
  const deleteItem = (id) => {
    let newData = [];
    dataTable.map((datos) => newData.push(datos));
    (async () => {
      try {
        const response = await fetch(
          `${api}api/${props.catalogo}/` + id + "/remove",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
          }
        );
        await response.json();
        alert("Datos eliminados correctamente");
        dataTable.map((item, index) => {
          if (String(item._id) === String(id)) {
            delete newData[index];
          }
          return newData;
        });
        setDataTable(newData);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <>
      <div className="row py-2" id={props.id}>
        {/* dataTable.length es la cantidad de filas cargadas*/}
        <p className="col-sm-12 col-md-6">Total: {dataTable.length}</p>
        <div className="col-sm-12 col-md-6 ">
          <span className="float-right">
            <Modal
              // sedDataTAble es el dispatch para actualizar el contenido de la tabla
              setDataTable={setDataTable}
              // dataTable es el estado para el contenido de la tabla
              dataTable={dataTable}
              // props.id contiene el id heredado del componente padre
              idModal={props.id}
              colorBtn="mx-1 btn btn-success"
              btnLabel={
                <span>
                  <i className="fas fa-plus"></i>{" "}
                  {/* props.catalogo contiene el titulo del catalogo */}
                  {String(props.catalogo).toUpperCase()}
                </span>
              }
              // edit contiene el estado redux de las columnas
              datas={edit}
              // api contiene la url de la api
              api={api}
              // props.catalogo contiene el catalogo al que debe consultar la información
              catalogo={props.catalogo}
            >
              {/* props.id contiene el id heredado del padre */}
              {/* inputFields contiene un objeto con las columnas y tipos de datos para generar los inputs */}
              <Form id={props.id} fields={inputFields} datas={edit} />
            </Modal>
          </span>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover border" style={{ width: "100%" }}>
          <thead>
            <tr>
              {/* mapeo de las columnas de la tabla */}
              {Object.keys(attrs).map((item, index) => {
                if (item) {
                  if (attrs[item])
                    return <th key={`dataTable${index}`}>{item}</th>;
                }

                return null;
              })}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* mapeo del contenido de la tabla */}
            {dataTable.map((client, i) => {
              return (
                <tr key={`datos${i}`}>
                  {Object.keys(attrs).map((attr, index) => {
                    return (
                      // client contiene la información de la fila
                      attrs[attr] && (
                        <td key={`data${index}`}>{client[attr]}</td>
                      )
                    );
                  })}
                  <td>
                    {showTrashButton && (
                      <span
                        className="text-danger m-1"
                        //dispara la función deleteItem
                        onClick={() => deleteItem(client._id)}
                      >
                        <i className="fas fa-trash-alt" />
                      </span>
                    )}

                    <Modal
                      // propaga el id del padre
                      idModal={props.id + i}
                      // propaga la información de la tabla
                      dataTable={dataTable}
                      // propaga el despachador de la información de la tabla
                      setDataTable={setDataTable}
                      btnLabel={<i className="fas fa-edit text-info"></i>}
                      // propaga las cabezeras del cliente
                      datas={client}
                      // propaga la url de la api
                      api={api}
                      // propa
                      catalogo={props.catalogo}
                    >
                      <Form
                        id={props.id + i}
                        fields={inputFields}
                        datas={client}
                      />
                    </Modal>
                    {/* showEyeButton define si debe mostrarse el boton de detalles */}
                    {showEyeButton && (
                      <Modal
                        showActionButton={false}
                        //propaga el id del padre
                        idModal={"eye" + props.id}
                        btnLabel={<i className="fas fa-eye text-secondary"></i>}
                        catalogo={"subcatalogos " + props.catalogo}
                        datas={client}
                      >
                        <Tabs
                          // propaga el id del padre
                          idTabs={props.id + i}
                          // propaga los subcatalogos a las tabs
                          viewsProps={subCatalogues}
                        />
                      </Modal>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
