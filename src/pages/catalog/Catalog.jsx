import { useSelector } from 'react-redux';
import { CampersList } from '../../components/CatalogList/CampersList';
import { Filters } from '../../components/Filters/Filters';
import { Location } from '../../components/Location/Location';
import { Container } from '../../styles/GlobalStyles';
import { PageCatalogWrapper } from './Catalog.styled';
import { selectVisibleCampers } from '../../redux/filter/selectors';
import { selectIsError, selectIsLoading } from '../../redux/catalog/selectors';
import { Loader } from '../../components/Loader/Loader';

const Catalog = () => {
  const campersByFilter = useSelector(selectVisibleCampers);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <PageCatalogWrapper>
        <div>
          <Location />
          <Filters />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <CampersList campers={campersByFilter} pathForModal="catalog" />
        )}
      </PageCatalogWrapper>
    </Container>
  );
};

export default Catalog;
