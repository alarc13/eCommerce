import "./Checkout.css";
import { TextField } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="container-check">
      <span className="title-check">
        <h1 className="h1-check">Tramitar pedido</h1>
        <p className="detail-send">Escribe los detalles de envío</p>
      </span>
      <form className="form-check" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <TextField
              className="textfield"
              label="Name"
              variant="outlined"
              name="name"
              onChange={handleChange}
              helperText={errors.name}
              error={errors.name ? true : false}
            />
            <TextField
              className="textfield"
              label="Adress"
              variant="outlined"
              name="adress"
              onChange={handleChange}
              helperText={errors.adress}
              error={errors.adress ? true : false}
            />
          </div>
          <div className="form-column">
            <TextField
              className="textfield"
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
            />
            <TextField
              className="textfield"
              label="Phone"
              variant="outlined"
              name="phone"
              onChange={handleChange}
              helperText={errors.phone}
              error={errors.phone ? true : false}
            />
          </div>
        </div>
        <button className="btnBuy-check" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
