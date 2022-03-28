import { useNavigate } from "react-router-dom";
import "./NavBar.css"

export function NavBar() {
  const navigate = useNavigate();

  return (

   <ul >
      <li className="navBar"
        onClick={() => {
          navigate("/home");
        }}
      >
        Home Page
      </li>
      <li className="navBar"
        onClick={() => {
          navigate("/info");
        }}
      >
        Info
      </li>
      <li className="navBar"
        onClick={() => {
          navigate("/contacts");
        }}
      >
        Contacts
      </li>
    </ul>
  );
}