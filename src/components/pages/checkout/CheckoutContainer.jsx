import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  let order = {
    buyer: data,
    items: [],
    total: 0,
  };
  return (
    <div>
      {" "}
      <h1>ckeckout</h1>
    </div>
  );
};

export default CheckoutContainer;
