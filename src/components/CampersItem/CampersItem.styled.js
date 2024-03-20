import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const Item = styled.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`;

export const Name = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;

  width: 339px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;

export const IconLike = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${globalColor.darkText};
  stroke-width: 2.3px;
`;

export const PriceLikeField = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
`;

export const NamePriceLine = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 16px;
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
  margin-bottom: 24px;
`;

export const Description = styled.p`
  color: ${globalColor.lightText};
  width: 525px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
`;

export const InfoBoxField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 526px;
  margin-bottom: 24px;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: ${globalColor.blockFeatures};

  & p {
    font-weight: 500;
    line-height: 1.25;
  }

  & svg {
    width: 20px;
    height: 20px;
    fill: #101828;
    stroke-width: 1.5px;
  }
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  background-color: ${globalColor.btn};
  border-radius: 200px;
  padding: 16px 40px;
  border: none;

  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &:hover {
    background-color: ${globalColor.btnHover};
  }
`;
