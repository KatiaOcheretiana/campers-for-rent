import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { globalColor } from '../../styles/root';

export const StyledLink = styled(NavLink)`
  color: ${globalColor.darkText};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: relative;

  &.active {
    &::after {
      position: absolute;
      content: '';
      background-color: ${globalColor.btn};
      height: 5px;
      width: 100%;
      bottom: -5px;
    }
  }
`;

export const List = styled.ul`
  padding: 20px 0;
  list-style: none;
  justify-content: end;
  display: flex;
  gap: 50px;
  font-size: 20px;
  font-weight: 700;
`;

export const HeaderField = styled.header`
  margin-bottom: 100px;
  min-width: 1440px;
  background-color: ${globalColor.inputs};

  box-shadow: -3px 17px 22px -6px rgba(217, 210, 210, 0.55);
  -webkit-box-shadow: -3px 17px 22px -6px rgba(217, 210, 210, 0.55);
  -moz-box-shadow: -3px 17px 22px -6px rgba(217, 210, 210, 0.55);
`;

export const SvgIconCampers = styled.svg`
  width: 40px;
  height: 28px;
`;
