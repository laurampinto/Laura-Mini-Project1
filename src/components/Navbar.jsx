import { Link } from "react-router-dom";
import logoImage from "../assets/Logo-Hostess.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logoImage} alt="Logo" style={{width:"120px", height:"auto"}} />
      </Link>
      <Link to="/more-info">More Info</Link>
      <Link to="/about">About</Link>
      
    </div>
  );
};
