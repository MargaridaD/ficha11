
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Info(props) {
  const navigate = useNavigate();
  const params = useParams();

  const [vegetal, setVegetal] = useState();
 
  useEffect(() => {

    setVegetal (props.vegetais.find((e)=>e.id == params.id));
  }, []);



  return (
      <>
      <div>
      <div>
      <h1>Olá</h1>
      {vegetal !=={} ?
      <>
      <p>Nome: <b>{vegetal.nome}</b></p></>:""}
      
      <button onClick={() => {navigate(-1)}}>Regressar</button>
      </div>
      </div>
      </>
  );
}