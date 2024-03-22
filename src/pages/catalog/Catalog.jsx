import { CampersList } from '../../components/CatalogList/CampersList';
import { Filters } from '../../components/Filters/Filters';
import { Location } from '../../components/Location/Location';
import { Container } from '../../styles/GlobalStyles';
import { PageCatalogWrapper } from './Catalog.styled';

const Catalog = () => {
  return (
    <Container>
      <PageCatalogWrapper>
        <div>
          <Location />
          <Filters />
        </div>

        <CampersList />
      </PageCatalogWrapper>
    </Container>
  );
};

export default Catalog;
