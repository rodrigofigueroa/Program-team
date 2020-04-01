import React, {useReducer} from 'react';
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

const AllFiels = {
    // Campos
    "id": '',
    "articulo": '', // opcional
    "descrip": '', // requerido
    "tipo": '', // requerido
    "linea": '', // requerido
    "marca": '', // requerido
    "precio1": '', // opcional
    "existencia": '', // opcional
    "costo_u": '', // opcional
    "costo": '', // opcional
    "unidades_med": '', // requerido
    "por_recib": '', // opcional
    "por_surt": '', // opcional
    "impuesto": '', // opcional
    "minimo": '', // opcional
    "maximo": '', // opcional
    "observ": '', // requerido
    "costo_std": '', // opcional
    "kit": '', // opcional
    "serie": '', // opcional
    "lote": '', // opcional
    "invent": '', // opcional
    "imagen": '', // requerido
    "paraventa": '', // opcional
    "usuario": '', // requerido
    "usuhora": '', // requerido
    "usufecha": '', // requerido
    "exportado": '', // opcional
    "granel": '', // opcional
    "peso": '', // opcional
    "bloqueado": '', // opcional
    "u1": '', // opcional
    "ubicacion": '', // requerido
    "etiquetas": '', // opcional
    "oferta": '', // opcional
    "costopeps": '', // opcional
    "costoueps": '', // opcional
    "autor": '', // requerido
    "tema": '', // requerido
    "editorial": '', // requerido
    "fabricante": '', // requerido
    "preciousd": '', // opcional
    "costousd": '', // opcional
    "claveprodserv": '', // opcional
    "claveunidad": '', // opcional
    "hash": '', // requerido
}

    const Inputs = (props) => {     
        
        return(
            columnas.map((item,index) => {                
                return(
                    <div className="checkBox-products" key={index}>
                    <label htmlFor={item}>{item}</label>
                    <input type={"checkbox"}  name={item} id={item}></input>
                </div>
            )
        })
     )
 }




const InputsActualiza = () => {
    //api/productos/[productoId]/update 
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

const InputsConsulta = () => {
    //api/productos/[productoId]/
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

const InputsElimina = () => {
    //api/productos/[productoId]/delete
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
const reducer = (state,{field,value}) => {
    return{
        ...state,
        [field] : value
       }
   }
const Productos = () => {
     const [tablaDatos,setTabla] = useState();
     const [Product, setAddProduct] = useState(false);
     const [ProductConsulta, SetConsulta] = useState(false);
     const [ProductActualiza, setActualizaProduct] = useState(false);
     const [ProductoEliminado, SetEliminaProducto] = useState(false);
     useEffect(() => {
        //fetch
        // setTabla(FakeDataProducts)
        
        const getAllData = async () => {

            const response = await fetch('api/productos/',
                    {
                        method: "POST",
                        mode: 'cors',
                        headers: {                       
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                    if (!response.ok) {
                        const text = await response.text();
                        console.log(`Error:`, text);
                        console.log(response);
                        return;
                    }
                    const json = await response.json();
                    setTabla(json);
                    return json
        }
        const dataALL= getAllData();
     },[])     
     //
     const [state, dispatch] = useReducer(reducer, AllFiels);
     
     const InputsCrear = () => {

         const {
                    id,
                    articulo,
                    descrip,
                    tipo,
                    linea,
                    marca,
                    precio1,
                    existencia,
                    costo_u,
                    costo,
                    unidades_med,
                    por_recib,
                    por_surt,
                    impuesto,
                    minimo,
                    maximo,
                    observ,
                    costo_std,
                    kit,
                    serie,
                    lote,
                    invent,
                    imagen,
                    paraventa,
                    usuario,
                    usuhora,
                    usufecha,
                    exportado,
                    granel,
                    peso,
                    bloqueado,
                    u1,
                    ubicacion,
                    etiquetas,
                    oferta,
                    costopeps,
                    costoueps,
                    autor,
                    tema,
                    editorial,
                    fabricante,
                    preciousd,
                    costousd,
                    claveprodserv,
                    claveunidad,
                    hash
                
         } = state; 

         console.log(state)

         return(
            //  columnas.map((item,index) => {
            //     return(
            //         <div key={index} className="form-group">
            //             <label htmlFor="">{item}</label>
            //             <input type={item} className="form-control" id={item} onChange={VariableFunction} name={item}></input>
            //         </div>
            //     )
            // })
            <section className="flex">
                <div className="form-group">
                    <label htmlFor="">id</label>
                    <input type="text" className="form-control" id="id" name="id" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={id} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">articulo</label>
                    <input type="text" className="form-control" id="articulo" name="articulo" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={articulo}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">descrip</label>
                    <input type="text" className="form-control" id="descrip" name="descrip" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={descrip}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">tipo</label>
                    <input type="text" className="form-control" id="tipo" name="tipo" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={tipo}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">linea</label>
                    <input type="text" className="form-control" id="linea" name="linea" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={linea}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">marca</label>
                    <input type="text" className="form-control" id="marca" name="marca" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={marca}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">precio1</label>
                    <input type="number" className="form-control" id="precio1" name="precio1" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={precio1}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">existencia</label>
                    <input type="number" className="form-control" id="existencia" name="existencia" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={existencia}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">costo_u</label>
                    <input type="number" className="form-control" id="costo_u" name="costo_u" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={costo_u}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">costo</label>
                    <input type="number" className="form-control" id="costo" name="costo" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={costo}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">unidades_med</label>
                    <input type="text" className="form-control" id="unidades_med" name="unidades_med" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={unidades_med}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">por_recib</label>
                    <input type="number" className="form-control" id="por_recib" name="por_recib" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={por_recib}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">por_surt</label>
                    <input type="number" className="form-control" id="por_surt" name="por_surt" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={por_surt}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">impuesto</label>
                    <input type="text" className="form-control" id="impuesto" name="impuesto" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={impuesto}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">minimo</label>
                    <input type="number" className="form-control" id="minimo" name="minimo" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={minimo}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">maximo</label>
                    <input type="number" className="form-control" id="maximo" name="maximo" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={maximo}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">observ</label>
                    <input type="text" className="form-control" id="observ" name="observ" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={observ}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">costo_std</label>
                    <input type="number" className="form-control" id="costo_std" name="costo_std" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={costo_std}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">kit</label>
                    <input type="text" className="form-control" id="kit" name="kit" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} valukite={kit}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">serie</label>
                    <input type="text" className="form-control" id="serie" name="serie" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={serie}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">lote</label>
                    <input type="text" className="form-control" id="lote" name="lote" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={lote}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">invent</label>
                    <input type="text" className="form-control" id="invent" name="invent" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={invent}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">imagen</label>
                    <input type="text" className="form-control" id="imagen" name="imagen" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={imagen}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">paraventa</label>
                    <input type="text" className="form-control" id="paraventa" name="paraventa" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={paraventa}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">usuario</label>
                    <input type="text" className="form-control" id="usuario" name="usuario" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={usuario}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">usuhora</label>
                    <input type="text" className="form-control" id="usuhora" name="usuhora" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={usuhora}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">usufecha</label>
                    <input type="date" className="form-control" id="usufecha" name="usufecha" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={usufecha}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">exportado</label>
                    <input type="text" className="form-control" id="exportado" name="exportado" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={exportado}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">granel</label>
                    <input type="text" className="form-control" id="granel" name="granel" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={granel}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">peso</label>
                    <input type="number" className="form-control" id="peso" name="peso" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={peso}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">bloqueado</label>
                    <input type="text" className="form-control" id="bloqueado" name="bloqueado" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={bloqueado}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">u1</label>
                    <input type="text" className="form-control" id="u1" name="u1" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={u1}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">ubicacion</label>
                    <input type="text" className="form-control" id="ubicacion" name="ubicacion" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={ubicacion}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">etiquetas</label>
                    <input type="number" className="form-control" id="etiquetas" name="etiquetas" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={etiquetas}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">oferta</label>
                    <input type="text" className="form-control" id="oferta" name="oferta" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={oferta}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">costopeps</label>
                    <input type="number" className="form-control" id="costopeps" name="costopeps" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={costopeps}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">costoueps</label>
                    <input type="number" className="form-control" id="costoueps" name="costoueps" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={costoueps}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">autor</label>
                    <input type="text" className="form-control" id="autor" name="autor" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={autor}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">tema</label>
                    <input type="text" className="form-control" id="tema" name="tema" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={tema}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">editorial</label>
                    <input type="text" className="form-control" id="editorial" name="editorial" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={editorial}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">fabricante</label>
                    <input type="text" className="form-control" id="fabricante" name="fabricante" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={fabricante}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">preciousd</label>
                    <input type="number" className="form-control" id="preciousd" name="preciousd" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={preciousd}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">costousd</label>
                    <input type="number" className="form-control" id="costousd" name="costousd" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={costousd}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">claveprodserv</label>
                    <input type="text" className="form-control" id="claveprodserv" name="claveprodserv" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={claveprodserv}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">claveunidad</label>
                    <input type="text" className="form-control" id="claveunidad" name="claveunidad" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} value={claveunidad}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">hash</label>
                    <input type="text" className="form-control" id="hash" name="hash" onChange={e => dispatch({ field: e.target.name, value: e.target.value })} valuhashe={hash}></input>
                </div>
            </section>
        )
    }
 
    const OnHandleNewProduct = e => {
        e.preventDefault();
        //api/productos/new
        const GetSuccsess = async () => {
            debugger
            const url = `/api/productos/new/`;
            // debugger
                const response = await fetch(url,{
                    method: "POST",
                    mode: 'cors',
                    headers: {                        
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },                      
                    body: JSON.stringify({state})
                })
                if (!response.ok) {
                    const text = await response.text();
                    console.log(`Error:`, text);
                    console.log(response);
                    return;
                }
                const json = await response.json();
                setTabla(json);
                return json
        }
        const respGet = GetSuccsess()
        console.log(respGet)
    }
    const OnConsultadeProduct = e => {
        e.preventDefault()
        console.log(state)
    }
    const OnActualizarProductos = e => {
        e.preventDefault()
        console.log(state)
    }
    const OnEliminarProducto = e => {
        e.preventDefault()
        console.log(state)
    }
     //
     const InputsCre = InputsCrear();
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
                                        Product === true && ProductConsulta === false
                                        && ProductActualiza === false && ProductoEliminado === false 
                                        
                                        ? 
                                            <div className="nuevo-registro">
                                                <i className="fas fa-times-circle text-danger" onClick={() => {setAddProduct(false)}}></i>
                                                <h2>Ingresa un nuevo Producto</h2>
                                                <form onSubmit={OnHandleNewProduct}>
                                                    {InputsCre}
                                                    <div className="form-group button-change">
                                                        <button className="btn btn-primary">Crear</button>
                                                    </div>
                                                </form>
                                            </div>
                                        :

                                        null
                                        
                                    }
                                    {
                                        ProductConsulta 
                                        
                                        ? 
                                            <div className="nuevo-registro">
                                                <i className="fas fa-times-circle text-danger" onClick={() => {SetConsulta(false)}}></i>
                                                <h2>Consulta de Producto</h2>
                                                <form onSubmit={OnConsultadeProduct}>
                                                    {InputsCre}
                                                    <div className="form-group button-change">
                                                        <button className="btn btn-primary">Consulta</button>
                                                    </div>
                                                </form>
                                            </div>
                                        :

                                        null
                                    }
                                    {
                                        ProductActualiza 
                                        
                                        ? 
                                            <div className="nuevo-registro">
                                                <i className="fas fa-times-circle text-danger" onClick={() => {setActualizaProduct(false)}}></i>
                                                <h2>Actualiza Productos</h2>
                                                <form onSubmit={OnActualizarProductos}>
                                                    {InputsCrear()}
                                                    <div className="form-group button-change">
                                                        <button className="btn btn-primary">Actualiza</button>
                                                    </div>
                                                </form>
                                            </div>
                                        :

                                        null
                                    }
                                    {
                                        ProductoEliminado 
                                        
                                        ? 
                                            <div className="nuevo-registro">
                                                <i className="fas fa-times-circle text-danger" onClick={() => {SetEliminaProducto(false)}}></i>
                                                <h2>Elimina Producto</h2>
                                                <form onSubmit={OnEliminarProducto}>
                                                    {InputsCrear()}
                                                    <div className="form-group button-change">
                                                        <button className="btn btn-primary">Elimina</button>
                                                    </div>
                                                </form>
                                            </div>
                                        :

                                        null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-12 flex eventos">
                              <button className="btn btn-secondary" onClick={() => SetConsulta(true)}>Consulta Id producto</button>      
                              <button className="btn btn-info" onClick={() => setActualizaProduct(true)}>Actualiza un producto</button>      
                              <button className="btn btn-danger" onClick={() => SetEliminaProducto(true)}>Elimina un producto</button>      
                        </div>
                 </div>
             </div>
         </section>
     )
}
export default Productos;