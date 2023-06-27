import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <h1 className="logo-footer">Logo</h1>
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
