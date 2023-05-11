import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={style.NavBar}>
     
     <div className={style.NavLinks}>

      <NavLink to="/home">
        <button>HOME</button>
      </NavLink>

      <NavLink to="/favorites">
        <button>FAVORITES</button>
      </NavLink>

      <NavLink to="/about">
        <button>ABOUT</button>
      </NavLink>
      </div>

      <SearchBar onSearch={onSearch} />

    </div>
  );
};

export default NavBar;
