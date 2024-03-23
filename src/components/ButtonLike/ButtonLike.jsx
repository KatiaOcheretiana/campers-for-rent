import { useState, useEffect } from 'react';
import { ButtonLikeWrapper, IconLike, IconLikeUse } from './ButtonLike.styled';
import sprite from '../../assets/sprite.svg';
import {
  addFavorite,
  deleteFavorite,
  storageKey,
} from '../../redux/favorites/favoritesSlice'; // Import deleteFavorite action
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesCampers } from '../../redux/favorites/selectors';

export const ButtonLike = ({ item }) => {
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();
  const likedCamps = useSelector(selectFavoritesCampers);

  useEffect(() => {
    setIsLike(likedCamps.includes(item._id));
  }, [item._id, likedCamps]);

  const handleLike = () => {
    const updatedLikedItems = isLike
      ? likedCamps.filter((camp) => camp !== item._id)
      : [...new Set([...likedCamps, item._id])];
    localStorage.setItem(storageKey, JSON.stringify(updatedLikedItems));

    if (isLike) {
      dispatch(deleteFavorite(item._id));
    } else {
      dispatch(addFavorite(item._id));
    }
    setIsLike(!isLike);
  };

  return (
    <ButtonLikeWrapper onClick={handleLike}>
      <IconLike>
        <IconLikeUse
          href={sprite + '#icon-like'}
          style={{
            fill: isLike ? '#E44848' : 'transparent',
            stroke: isLike ? '#E44848' : '#101828',
          }}
        />
      </IconLike>
    </ButtonLikeWrapper>
  );
};
