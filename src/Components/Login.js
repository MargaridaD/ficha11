import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Login(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "email", password: "password" });


  return (
    <>
      <h1>Login</h1>
      

        <input
          type="text"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />

        <input
          type="text"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      
      
      
      
      
      <button
        onClick={() => {
          navigate("/home");
          props.doLogin((user.email===""||user.password==="")?false:true);
        }}
      >
        LOG IN
      </button>
    </>
  );
}