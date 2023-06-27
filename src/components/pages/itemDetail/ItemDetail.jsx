import { ItemCount } from "../../common/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ productSelected, addToCart, cantidad }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data);
  };
  return (
    <section className="container-detail">
      <div className="item-img">
        <img className="images" src={productSelected.img} alt="" />
      </div>
      <div className="item-info">
        <h2 className="item-title"> {productSelected.title}</h2>
        <h3 className="item-price">{productSelected.price}</h3>
        <p>
          Impuesto incluido. Los gastos de envío se calculan en la pantalla de
          pago.
        </p>
        <div className="item-size">
          <p>
            <b>Tamaño</b>
          </p>
          <ul>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </div>
        <div className="btns-idetail">
          {productSelected.stock > 0 ? (
            <ItemCount
              stock={productSelected.stock}
              initial={cantidad}
              onAdd={onAdd}
            />
          ) : (
            <h3>No hay stock</h3>
          )}
          <button
            className="btn-buy"
            disabled={productSelected.stock < 1 ? true : false}
          >
            Comprar
          </button>
        </div>
        <p className="description-detail">{productSelected.description}</p>
        <p className="description-detail">{productSelected.stuff}</p>
      </div>
    </section>
  );
};
export default ItemDetail;
// HACIENDO EL DETATELLE DE PRODUCTO (SIN TERMINAR) clase 7
