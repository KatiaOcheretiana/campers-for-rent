import { useDispatch } from "react-redux";
import { default as Catalog } from "./pages/catalog/Catalog";
import { getCampers } from "./redux/catalog/operations";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  });

  return (
    <>
      <Catalog />
    </>
  );
}

export default App;
