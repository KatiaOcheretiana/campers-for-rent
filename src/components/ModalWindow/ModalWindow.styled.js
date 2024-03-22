import styled from 'styled-components';
import { globalColor } from '../../styles/root';
import { NavLink } from 'react-router-dom';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  /* background-color: #10100f; */
`;

export const ModalWindow = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: #10100f;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Name = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;

export const CloseModalBtn = styled.svg`
  width: 32px;
  height: 32px;
  stroke: ${globalColor.darkText};
`;

export const RatingIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const RatingReviews = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const LocationIcon = styled.svg`
  width: 14px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: ${globalColor.darkText};
`;

export const LocationText = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RationLocationLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const Description = styled.p`
  margin-top: 24px;
  color: ${globalColor.lightText};
`;

export const StyledLink = styled(NavLink)`
  color: ${globalColor.darkText};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: relative;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &.active {
    &::after {
      position: absolute;
      content: '';
      background-color: ${globalColor.btn};
      height: 5px;
      width: 100%;
      bottom: -26px;
    }
  }
`;

export const AdditionalNavigation = styled.div`
  margin-top: 44px;
  margin-bottom: 68px;
  display: flex;
  flex-direction: row;
  gap: 36px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background-color: rgba(16, 24, 40, 0.2);
    height: 1px;
    width: 100%;
    bottom: -24px;
  }
`;
