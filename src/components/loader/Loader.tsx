import { FaSpinner } from "react-icons/fa";

import * as L from "./Style";

const Loader = () => {
  return (
    <>
      <L.Loader>
        <FaSpinner />
      </L.Loader>
    </>
  );
};

export default Loader;
