import { Link } from "react-router-dom";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <Link to="/">
          <span>
            <img
              src="https://res.cloudinary.com/dfvc2ttor/image/upload/v1688516114/e-commerce/logo-withe_hs3s02.png"
              alt="logo"
            />
          </span>
        </Link>
        <ul className="terms">
          <li>Política de privacidad</li>
          <li> Cambios y devoluciones</li>
          <li> Políticas de envío </li>
          <li> Aviso legal</li>
          <li>Términos del servicio</li>
        </ul>
        <div className="rrss">
          <BsInstagram size="20" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
