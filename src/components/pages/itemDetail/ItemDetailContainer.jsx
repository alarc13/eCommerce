import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../ProductsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Loader from "../../common/loader/Loader";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();
  const cantidad = getTotalQuantityById(id);
  console.log("la cantidad es: ", cantidad);

  useEffect(() => {
    setLoading(true);

    let productFind = products.find((product) => product.id === +id);
    const getProduct = new Promise((res) => {
      res(productFind);
    });
    getProduct
      .then((res) => {
        setProductSelected(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ItemDetail
          cantidad={cantidad}
          productSelected={productSelected}
          addToCart={addToCart}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
