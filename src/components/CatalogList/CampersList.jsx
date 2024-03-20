import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/catalog/selectors";
import { CampersItem } from "../CampersItem/CampersItem";
import { List } from "./CampersList.styled";

export const CampersList = () => {
  const campersInfo = useSelector(selectCampers);

  console.log(campersInfo);
  return (
    <List>
      {campersInfo.map((camper) => (
        <CampersItem key={camper._id} camper={camper} />
      ))}
    </List>
  );
};
