import { CampersItem } from '../CampersItem/CampersItem';
import { Button, List, Wrapper } from './CampersList.styled';
import { useState } from 'react';

export const CampersList = ({ campers, pathForModal }) => {
  const [loadedCount, setLoadedCount] = useState(4);
  const perPage = 4;

  const currentCampers = campers.slice(0, loadedCount);

  const loadMore = () => {
    setLoadedCount(loadedCount + perPage);
  };

  return (
    <Wrapper>
      <List>
        {currentCampers.map((camper) => (
          <CampersItem
            key={camper._id}
            camper={camper}
            pathForModal={pathForModal}
          />
        ))}
      </List>
      {loadedCount < campers.length && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </Wrapper>
  );
};
