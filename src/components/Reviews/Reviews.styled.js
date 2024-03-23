import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 60px;
  column-gap: 16px;
  row-gap: 4px;
  width: 172px;
  justify-content: center;
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  margin-bottom: 24px;
`;

export const ReviewImage = styled.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background-color: ${globalColor.blockFeatures};
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: ${globalColor.btn};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
`;

export const RatingList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const RatingIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const Comment = styled.p`
  color: ${globalColor.lightText};
`;
