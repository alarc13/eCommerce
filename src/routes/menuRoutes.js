import ItemListContainer from "../components/pages/ItemList/ItemListContainer";
import CartPage from "../components/pages/cart/CartPage";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartPage,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
