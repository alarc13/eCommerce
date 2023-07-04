import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { PropagateLoader } from "react-spinners";
import "../../common/loader/Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <PropagateLoader color="black" size={10} />
    </div>
  );
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let consulta;

    if (categoryName) {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    } else {
      consulta = itemsCollection;
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [categoryName]);

  return <>{loading ? <Loader /> : <ItemList items={items} />}</>;
};

export default ItemListContainer;
