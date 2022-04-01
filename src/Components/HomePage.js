import { useNavigate } from "react-router-dom";
import React from "react";
import "./HomePage.css";

export function HomePage(props) {
  const navigate = useNavigate();
  
  function GridElement(props) {
    

    return <div className="grid-item">
      <p>{props.elemento.name}</p>
      <p>{props.elemento.id}</p>
      </div>;
  }
  return (
    <>
    <h1 className ="header">Home Page</h1>
    <div className="grid-container-inside">
      {props.vegetais.map((e, index) => (
        <GridElement key={index} elemento ={e}></GridElement>
      ))}
    </div>
    <button onClick={() => { navigate("/info/"+1) }}> Informação </button>
    </>
  );
}
 //let id = props.vegetais.id;
//<button onClick={() => { navigate("/info/"+id) }}> Informação </button>