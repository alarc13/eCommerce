import { SkewLoader } from "react-spinners";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <SkewLoader color="#000000" size={90} />
    </div>
  );
};
export default Loader;
