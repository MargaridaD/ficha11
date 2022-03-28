import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { HomePage } from "./Components/HomePage";
import { Contacts } from "./Components/Contacts";
import { Info } from "./Components/Info";
import { useState } from "react";
import { Login } from "./Components/Login";
import { Navigate } from "react-router-dom";

import "./App.css";

function App() {
  const [user, setUser] = useState();


  return (
    <div className="App">
      <BrowserRouter>
        {user && <NavBar></NavBar>}
        <Routes>
          <Route
            path="/home"
            element={
              <VerificaUser user={user}>
                <HomePage></HomePage>
              </VerificaUser>
            }
          />
                    <Route
            path="/info"
            element={
              <VerificaUser user={user}>
                <Info></Info>
              </VerificaUser>
            }
          />
                    <Route
            path="/contacts"
            element={
              <VerificaUser user={user}>
                <Contacts></Contacts>
              </VerificaUser>
            }
          />
          <Route path="/*" element={<Login doLogin={setUser}></Login>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Forma + correta em vez de passar o utilizador para cada componente
function VerificaUser({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

export default App;
