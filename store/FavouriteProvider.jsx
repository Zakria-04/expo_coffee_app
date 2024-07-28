import { useState } from "react";
import FavouriteContext from "./FavouriteContext";

const FavouriteProvider = (props) => {
  const [favourite, setFavourite] = useState([]);
  const providerValue = {
    favourite,
    setFavourite,
  };
  return (
    <FavouriteContext.Provider value={providerValue}>
      {props.children}
    </FavouriteContext.Provider>
  );
};
export default FavouriteProvider
