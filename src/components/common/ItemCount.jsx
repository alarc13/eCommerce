import { useCount } from "../hooks/useCount";
import Swal from "sweetalert2";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  const handleAddToCart = () => {
    onAdd(count);
    Swal.fire(
      "Product Added",
      "The product has been added to the cart.",
      "success"
    );
  }; //prueba
  return (
    <>
      <div className="count--container">
        <div className="item-counter">
          <p className="description-detail">Cantidad:</p>
          <div>
            <button className="btn-counter" onClick={decrement}>
              -
            </button>
            <span className="count">{count}</span>
            <button className="btn-counter" onClick={increment}>
              +
            </button>
          </div>
        </div>
        <button className="btn-detail" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
