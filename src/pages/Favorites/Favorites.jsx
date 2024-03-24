import { useSelector } from 'react-redux';
import { selectFavoritesCampers } from '../../redux/favorites/selectors';
import { selectVisibleCampers } from '../../redux/filter/selectors';
import { CampersList } from '../../components/CatalogList/CampersList';
import { Container } from '../../styles/GlobalStyles';
import { selectIsLoading } from '../../redux/catalog/selectors';
import { Loader } from '../../components/Loader/Loader';
import camper from '../../assets/image/camper.jpg';
import { Pictire, Title } from './Favorites.styled';

const Favorites = () => {
  const likedCampers = useSelector(selectFavoritesCampers);
  const campersByFilter = useSelector(selectVisibleCampers);
  const isLoading = useSelector(selectIsLoading);

  const favoriteCampers = campersByFilter.filter((camp) =>
    likedCampers.includes(camp._id)
  );

  return (
    <Container>
      {favoriteCampers.length === 0 && (
        <>
          <Title>
            It seems that your favorite list is currently empty. To add campers
            to your favorites, please visit the catalog where you can find a
            list of campers. From there, you can select the campers you like and
            add them to your favorites by clicking on the like button. Once
            you've added campers to your favorites, you'll be able to view them
            here.
          </Title>
          <Pictire src={camper} alt="camper" />
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <CampersList campers={favoriteCampers} pathForModal="favorites" />
      )}
    </Container>
  );
};

export default Favorites;
