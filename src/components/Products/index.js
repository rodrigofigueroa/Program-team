import React from 'react';
import { useState, useEffect } from "react";
import './Productos.sass';

const columnas = [
    // Campos
    "id",
    "articulo", // opcional
    "descrip", // requerido
    "tipo", // requerido
    "linea", // requerido
    "marca", // requerido
    "precio1", // opcional
    "existencia", // opcional
    "costo_u", // opcional
    "costo", // opcional
    "unidades_med", // requerido
    "por_recib", // opcional
    "por_surt", // opcional
    "impuesto", // opcional
    "minimo", // opcional
    "maximo", // opcional
    "observ", // requerido
    "costo_std", // opcional
    "kit", // opcional
    "serie", // opcional
    "lote", // opcional
    "invent", // opcional
    "imagen", // requerido
    "paraventa", // opcional
    "usuario", // requerido
    "usuhora", // requerido
    "usufecha", // requerido
    "exportado", // opcional
    "granel", // opcional
    "peso", // opcional
    "bloqueado", // opcional
    "u1", // opcional
    "ubicacion", // requerido
    "etiquetas", // opcional
    "oferta", // opcional
    "costopeps", // opcional
    "costoueps", // opcional
    "autor", // requerido
    "tema", // requerido
    "editorial", // requerido
    "fabricante", // requerido
    "preciousd", // opcional
    "costousd", // opcional
    "claveprodserv", // opcional
    "claveunidad", // opcional
    "hash", // requerido
]

const FakeDataProducts = {
    "total":5,
    "pages":1,
    "explain":[
       {
          "page":0,
          "limit":500,
          "skip":0
       }
    ],
    "results":[
       {
          "_id":"abc005",
          "createAt":"2020-03-27T08:21:13.388Z",
          "nombre":"Coca Cola (mod)",
          "descripcion":"Sin descripción",
          "precio":13.5
       },
       {
          "_id":2,
          "createAt":"2020-03-28T19:45:09.659Z",
          "articulo":"peluche",
          "descrip":null,
          "tipo":null,
          "linea":null,
          "marca":null,
          "precio1":200,
          "existencia":5,
          "costo_u":200,
          "costo":200,
          "unidades_med":null,
          "por_recib":2,
          "por_surt":1,
          "impuesto":"15%",
          "minimo":150,
          "maximo":250,
          "observ":null,
          "costo_std":200,
          "kit":true,
          "serie":true,
          "lote":true,
          "invent":true,
          "imagen":null,
          "paraventa":true,
          "usuario":null,
          "usuhora":null,
          "usufecha":"1970-01-01T00:00:00.000Z",
          "exportado":true,
          "granel":true,
          "peso":500,
          "bloqueado":true,
          "u1":1,
          "ubicacion":null,
          "etiquetas":1,
          "oferta":true,
          "costopeps":1,
          "costoueps":1,
          "autor":null,
          "tema":null,
          "editorial":null,
          "fabricante":null,
          "preciousd":20,
          "costousd":20,
          "claveprodserv":1,
          "claveunidad":1,
          "hash":null
       },
       {
          "_id":1,
          "createAt":"2020-03-28T23:09:15.659Z",
          "articulo":"peluche",
          "descrip":null,
          "tipo":null,
          "linea":null,
          "marca":null,
          "precio1":200,
          "existencia":5,
          "costo_u":200,
          "costo":200,
          "unidades_med":null,
          "por_recib":2,
          "por_surt":1,
          "impuesto":"15%",
          "minimo":150,
          "maximo":250,
          "observ":null,
          "costo_std":200,
          "kit":true,
          "serie":true,
          "lote":true,
          "invent":true,
          "imagen":null,
          "paraventa":true,
          "usuario":null,
          "usuhora":null,
          "usufecha":"1970-01-01T00:00:00.000Z",
          "exportado":true,
          "granel":true,
          "peso":500,
          "bloqueado":true,
          "u1":1,
          "ubicacion":null,
          "etiquetas":1,
          "oferta":true,
          "costopeps":1,
          "costoueps":1,
          "autor":null,
          "tema":null,
          "editorial":null,
          "fabricante":null,
          "preciousd":20,
          "costousd":20,
          "claveprodserv":1,
          "claveunidad":1,
          "hash":null
       },
       {
          "_id":3,
          "createAt":"2020-03-28T23:56:34.513Z",
          "articulo":"test",
          "descrip":null,
          "tipo":null,
          "linea":null,
          "marca":null,
          "precio1":200,
          "existencia":5,
          "costo_u":200,
          "costo":200,
          "unidades_med":null,
          "por_recib":2,
          "por_surt":1,
          "impuesto":"15%",
          "minimo":150,
          "maximo":250,
          "observ":null,
          "costo_std":200,
          "kit":true,
          "serie":true,
          "lote":true,
          "invent":true,
          "imagen":null,
          "paraventa":true,
          "usuario":null,
          "usuhora":null,
          "usufecha":"1970-01-01T00:00:00.000Z",
          "exportado":true,
          "granel":true,
          "peso":500,
          "bloqueado":true,
          "u1":1,
          "ubicacion":null,
          "etiquetas":1,
          "oferta":true,
          "costopeps":1,
          "costoueps":1,
          "autor":null,
          "tema":null,
          "editorial":null,
          "fabricante":null,
          "preciousd":20,
          "costousd":20,
          "claveprodserv":"1",
          "claveunidad":"1",
          "hash":null
       },
       {
          "_id":4,
          "createAt":"2020-03-29T00:19:01.528Z",
          "articulo":"test",
          "descrip":null,
          "tipo":null,
          "linea":null,
          "marca":null,
          "precio1":200,
          "existencia":5,
          "costo_u":200,
          "costo":200,
          "unidades_med":null,
          "por_recib":2,
          "por_surt":1,
          "impuesto":"15%",
          "minimo":150,
          "maximo":250,
          "observ":null,
          "costo_std":200,
          "kit":true,
          "serie":true,
          "lote":true,
          "invent":true,
          "imagen":null,
          "paraventa":true,
          "usuario":null,
          "usuhora":null,
          "usufecha":"1970-01-01T00:00:00.000Z",
          "exportado":true,
          "granel":true,
          "peso":500,
          "bloqueado":true,
          "u1":1,
          "ubicacion":null,
          "etiquetas":1,
          "oferta":true,
          "costopeps":1,
          "costoueps":1,
          "autor":null,
          "tema":null,
          "editorial":null,
          "fabricante":null,
          "preciousd":20,
          "costousd":20,
          "claveprodserv":"1",
          "claveunidad":"1",
          "hash":null
       }
    ]
 }

 const OnHandleChange = (e) => {
    console.log(e.target)
 }
 const Inputs = (props) => {     
     return(
        columnas.map((item,index) => {
            return(
                <div className="checkBox-products" key={index}>
                    <label htmlFor={item}>{item}</label>
                    <input type={"checkbox"} name={item} id={item} onChange={OnHandleChange}></input>
                </div>
            )
        })
     )
 }

const InputsCrear = () => {
    
    return(
        columnas.map((item,index) => {
            return(
                <div key={index} className="form-group">
                    <label htmlFor="">{item}</label>
                    <input type={item} className="form-control" id={item}></input>
                </div>
            )
        })
    )
}
 
const Productos = () => {
     const [tablaDatos,setTabla] = useState();
     const [Product, setAddProduct] = useState(false);
     useEffect(() => {
        //fetch
        setTabla(FakeDataProducts)
     },[])
     console.log(Product)
     return(
         <section>
             <div className="container">
                 <div className="row">
                        <div className="col-12 flex titulos">
                            <h2>Módulo de PRODUCTOS</h2>                                                                
                            <h2>Total 0</h2>                                                                
                            <button className="btn-primary btn" onClick={() => {setAddProduct(true)}}>Agregar producto <span>+</span></button>                                
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="sec-two col-12">
                                    <div className="table-responsive">

                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    {
                                                        columnas.map((item,index) => {
                                                            return(
                                                            <th scope="col" key={'tb'+item+index}>{item}</th>
                                                            )
                                                        })
                                                    }
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    {
                                                        tablaDatos ? tablaDatos.results.map((item,index) => {
                                                            return(
                                                                <tr key={index}>
                                                                    <td>{item._id}</td>
                                                                    {/* <td>{item.createAt}</td> */}
                                                                    <td>{item.articulo}</td>
                                                                    <td>{item.descrip}</td>
                                                                    <td>{item.tipo}</td>
                                                                    <td>{item.linea}</td>
                                                                    <td>{item.marca}</td>
                                                                    <td>{item.precio1}</td>
                                                                    <td>{item.existencia}</td>
                                                                    <td>{item.costo_u}</td>
                                                                    <td>{item.costo}</td>
                                                                    <td>{item.unidades_med}</td>
                                                                    <td>{item.por_recib}</td>
                                                                    <td>{item.por_surt}</td>
                                                                    <td>{item.impuesto}</td>
                                                                    <td>{item.minimo}</td>
                                                                    <td>{item.maximo}</td>
                                                                    <td>{item.observ}</td>
                                                                    <td>{item.costo_std}</td>
                                                                    <td>{item.kit}</td>
                                                                    <td>{item.serie}</td>
                                                                    <td>{item.lote}</td>
                                                                    <td>{item.invent}</td>
                                                                    <td>{item.imagen}</td>
                                                                    <td>{item.paraventa}</td>
                                                                    <td>{item.usuario}</td>
                                                                    <td>{item.usuhora}</td>
                                                                    <td>{item.usufecha}</td>
                                                                    <td>{item.exportado}</td>
                                                                    <td>{item.granel}</td>
                                                                    <td>{item.peso}</td>
                                                                    <td>{item.bloqueado}</td>
                                                                    <td>{item.u1}</td>
                                                                    <td>{item.ubicacion}</td>
                                                                    <td>{item.etiquetas}</td>
                                                                    <td>{item.oferta}</td>
                                                                    <td>{item.costopeps}</td>
                                                                    <td>{item.costoueps}</td>
                                                                    <td>{item.autor}</td>
                                                                    <td>{item.tema}</td>
                                                                    <td>{item.editorial}</td>
                                                                    <td>{item.fabricante}</td>
                                                                    <td>{item.preciousd}</td>
                                                                    <td>{item.costousd}</td>
                                                                    <td>{item.claveprodserv}</td>
                                                                    <td>{item.claveunidad}</td>
                                                                    <td>{item.hash}</td>
                                                                </tr>
                                                            )
                                                        }) : <tr><th>en espera</th></tr>
                                                    }
                                                </tbody>
                                            </table>
                                    </div>
                                    {
                                        Product 
                                        
                                        ? 
                                            <div className="nuevo-registro">
                                                <i className="fas fa-times-circle text-danger" onClick={() => {setAddProduct(false)}}></i>
                                                <h2>Ingresa un nuevo Producto</h2>
                                                <form className="flex">
                                                    {InputsCrear()}
                                                    <div className="form-group">
                                                        <button className="btn btn-primary">Crear</button>
                                                    </div>
                                                </form>
                                            </div>
                                        :

                                        null
                                    }

                                </div>
                            </div>
                        </div>
                 </div>
             </div>
         </section>
     )
}
export default Productos;