import { PropagateLoader } from "react-spinners";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <PropagateLoader color="black" size={10} />
    </div>
  );
};
export default Loader;
