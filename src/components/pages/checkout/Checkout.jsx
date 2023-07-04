import "./Checkout.css";

import { Button, TextField } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          label="Adress"
          variant="outlined"
          name="adress"
          onChange={handleChange}
          helperText={errors.adress}
          error={errors.adress ? true : false}
        />
        <TextField
          label="Phone"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          helperText={errors.phone}
          error={errors.phone ? true : false}
        />
        <Button variant="outlined" type="submit">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
