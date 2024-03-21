import { useSelector } from "react-redux";
// import { selectCampers } from "../../redux/catalog/selectors";
import { CampersItem } from "../CampersItem/CampersItem";
import { List } from "./CampersList.styled";
import { selectVisibleCampers } from "../../redux/filter/selectors";

export const CampersList = () => {
  // const campersInfo = useSelector(selectCampers);

  const campersByFilter = useSelector(selectVisibleCampers);

  console.log(campersByFilter);
  return (
    <List>
      {campersByFilter.map((camper) => (
        <CampersItem key={camper._id} camper={camper} />
      ))}
    </List>
  );
};
