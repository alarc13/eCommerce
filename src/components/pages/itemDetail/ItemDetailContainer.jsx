import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Loader from "../../common/loader/Loader";
import { db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart, getTotalQuantityById } = useContext(CartContext);
  const { id } = useParams();
  const cantidad = getTotalQuantityById(id);

  useEffect(() => {
    let detail = true;
    setLoading(true);

    const docRef = doc(db, "products", id);
    getDoc(docRef)
      .then((docSnap) => {
        if (detail && docSnap.exists()) {
          setProductSelected({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        if (detail) setLoading(false);
      });

    return () => {
      detail = false;
    };
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
