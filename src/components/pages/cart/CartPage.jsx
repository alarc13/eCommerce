import { useContext } from "react";
import "./CartPage.css";
import { CartContext } from "../../context/CartContext";
import { AiOutlineDelete } from "react-icons/ai";

const CartPage = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);

  return (
    <div>
      <div>
        <div className="title-carrito">
          <h1>Tu carrito</h1>
          <button className="clearCart" onClick={clearCart}>
            Limpiar carrito
          </button>
        </div>
        <span className="products-title">
          <ul className="product-title">
            <li>Producto</li>
          </ul>
          <ul className="total-title">
            <li>Cantidad</li>
            <li>Total</li>
          </ul>
        </span>
      </div>
      <div className="products-cart">
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <ul className="product-detail">
                <span className="title-detail">
                  <img className="img-cart" src={product.img} alt="" />
                  <span>
                    <h4>{product.title}</h4>
                    <h4>{product.price}</h4>
                  </span>
                </span>
                <div className="quantity-price">
                  <span className="quantity-cart">
                    <h4>{product.quantity}</h4>
                    <AiOutlineDelete
                      size="18"
                      cursor="pointer"
                      onClick={() => removeById(product.id)}
                    ></AiOutlineDelete>
                  </span>
                  <h4 className="price-cart">{product.price}</h4>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
