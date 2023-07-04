import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartContextProvider from "./components/context/CartContext";
import { menuRoutes } from "./routes/menuRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
