import navbar from "./Navbar.module.css";
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Badge } from "@mui/material";

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();
  return (
    <>
      <header>
        <span size="44">
          <BiSearch size="24" />
        </span>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dfvc2ttor/image/upload/v1688516018/e-commerce/logo_ffsu5j.png"
            alt="logo"
          />
        </Link>

        <Link to="/carrito">
          <Badge badgeContent={totalItems} showZero color="default">
            <BsCart size="24px" />
          </Badge>
        </Link>
      </header>
      <ul className={navbar.nav}>
        <span className={navbar.filtros}>
          <li>
            <a href="#"> Filtros:</a>
          </li>
          <li>
            <a href="#">
              Tipo de producto<span className={navbar.flecha}>&#9660;</span>
            </a>
            <ul>
              <Link to="/category/camisetas">Camisetas</Link>
              <Link to="/category/sudaderas">Sudaderas</Link>
              <Link to="/category/accesorios">Accesorios</Link>
            </ul>
          </li>
          <li>
            <a href="#">
              Precio<span className={navbar.flecha}>&#9660;</span>
            </a>
            <ul>
              <Link to="">Precio más alto</Link>
              <Link to="">Precio más bajo</Link>
            </ul>
          </li>
          <span className={navbar.deleteFilters}>
            <Link to="/">Todos los artículos</Link>
          </span>
        </span>

        <span className={navbar.ordenar}>
          <li>
            <a href="#">Ordenar por:</a>
          </li>
          <li>
            <a href="#">
              Características<span className={navbar.flecha}>&#9660;</span>
            </a>
            <ul>
              <Link to="">Precio más alto</Link>
            </ul>
          </li>
        </span>
      </ul>
    </>
  );
};
export default Navbar;
