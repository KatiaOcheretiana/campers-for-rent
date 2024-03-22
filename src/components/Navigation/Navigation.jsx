import { Container } from '../../styles/GlobalStyles';
import {
  HeaderField,
  List,
  StyledLink,
  SvgIconCampers,
} from './Navigation.styled';
import sprite from '../../assets/sprite.svg';

export const Navigation = () => {
  return (
    <HeaderField>
      <Container>
        <nav>
          <List>
            <li>
              <StyledLink to="/">
                <SvgIconCampers>
                  <use href={sprite + '#icon-alcove'} />
                </SvgIconCampers>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/catalog">Catalog</StyledLink>
            </li>
            <li>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </li>
          </List>
        </nav>
      </Container>
    </HeaderField>
  );
};
