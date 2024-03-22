import sprite from '../../assets/sprite.svg';
import { Input, Label, LocationIcon, WrapperBox } from './Location.styled';
import { changeLocation } from '../../redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../redux/filter/selectors';

export const Location = () => {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);

  return (
    <WrapperBox>
      <Label htmlFor="location">
        Location
        <Input
          type="text"
          id="location"
          value={location}
          placeholder="City, country"
          onChange={(e) => dispatch(changeLocation(e.target.value))}
        />
        <LocationIcon>
          <use href={sprite + '#icon-location'} />
        </LocationIcon>
      </Label>
    </WrapperBox>
  );
};
