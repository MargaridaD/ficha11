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
  let vegetais = [
    {
      "id": 1,
      "name": "Green Pepper",
      "url": "https://target.scene7.com/is/image/Target/GUEST_484810f6-4c45-476a-83c3-d91bc2ec005a",
      "price": 0.99,
      "description": "The bell pepper (also known as sweet pepper, pepper, or capsicum /ˈkæpsɪkəm/)[1] is the fruit of plants in the Grossum cultivar group of the species Capsicum annuum.[2][3] Cultivars of the plant produce fruits in different colors, including red, yellow, orange, green, white, and purple. Bell peppers are sometimes grouped with less pungent chili varieties as \"sweet peppers\". While they are fruits—botanically classified as berries—they are commonly used as a vegetable ingredient or side dish. The fruits of the Capsicum genus are categorized as chili peppers."
    },
    {
      "id": 2,
      "name": "Red Pepper",
      "url": "https://media.istockphoto.com/photos/sweet-pepper-paprika-isolated-on-white-background-clipping-path-full-picture-id1130564105?k=20&m=1130564105&s=612x612&w=0&h=uqbNpncgI8ERymnkDTdH3u9d9d2-9mUFkE4qKtpvnz0=",
      "price": 0.89,
      "description": "The bell pepper (also known as sweet pepper, pepper, or capsicum /ˈkæpsɪkəm/)[1] is the fruit of plants in the Grossum cultivar group of the species Capsicum annuum.[2][3] Cultivars of the plant produce fruits in different colors, including red, yellow, orange, green, white, and purple. Bell peppers are sometimes grouped with less pungent chili varieties as \"sweet peppers\". While they are fruits—botanically classified as berries—they are commonly used as a vegetable ingredient or side dish. The fruits of the Capsicum genus are categorized as chili peppers."
    },
    {
      "id": 3,
      "name": "Carrot",
      "url": "https://befreshcorp.net/wp-content/uploads/2017/06/product-packshot-Carrot.jpg",
      "price": 1.55,
      "description": "The carrot (Daucus carota subsp. sativus) is a root vegetable, typically orange in color, though purple, black, red, white, and yellow cultivars exist,[2][3][4] all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds. The most commonly eaten part of the plant is the taproot, although the stems and leaves are also eaten. The domestic carrot has been selectively bred for its greatly enlarged, more palatable, less woody-textured taproot."
    }
  ];

  return (
    <div className="App">
      <BrowserRouter>
        {user && <NavBar></NavBar>}
        <Routes>
          <Route
            path="/home"
            element={
              <VerificaUser user={user}>
                <HomePage vegetais={vegetais}></HomePage>
              </VerificaUser>
            }
          />
                    <Route
            path="/info/:id"
            element={
              <VerificaUser user={user}>
                <Info vegetais={vegetais}></Info>
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
