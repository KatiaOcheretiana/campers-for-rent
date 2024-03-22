import { useSelector } from 'react-redux';
import { CampersItem } from '../CampersItem/CampersItem';
import { Button, List, Wrapper } from './CampersList.styled';
import { selectVisibleCampers } from '../../redux/filter/selectors';
import { useState, useEffect } from 'react';

export const CampersList = () => {
  const campersByFilter = useSelector(selectVisibleCampers);

  const [loadedCount, setLoadedCount] = useState(4);
  const perPage = 4;

  const currentCampers = campersByFilter.slice(0, loadedCount);

  const loadMore = () => {
    setLoadedCount(loadedCount + perPage);
  };

  return (
    <Wrapper>
      <List>
        {currentCampers.map((camper) => (
          <CampersItem key={camper._id} camper={camper} />
        ))}
      </List>
      {loadedCount < campersByFilter.length && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </Wrapper>
  );
};
