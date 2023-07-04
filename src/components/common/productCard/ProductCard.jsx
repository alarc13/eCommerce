import "../../pages/ItemList/ItemListContainer.css";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <section className="products">
      <div className="cards">
        <Link to={`/itemDetail/${elemento.id}`}>
          <div className="card-img">
            <img className="images" src={elemento.img} alt="" />
          </div>
        </Link>

        <div className="description-card">
          <h4>{elemento.title}</h4>
          <h4>{elemento.price}€</h4>
        </div>
      </div>
      <div className="add-cart">
        <MdOutlineAddShoppingCart size="26" />
      </div>
    </section>
  );
};

export default ProductCard;
