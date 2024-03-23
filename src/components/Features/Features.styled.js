import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const InfoBoxField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
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

export const Title = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  position: relative;
  margin-bottom: 48px;
  margin-top: 44px;

  &::after {
    position: absolute;
    content: '';
    background-color: rgba(16, 24, 40, 0.2);
    height: 1px;
    width: 100%;
    bottom: -24px;
    left: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableLine = styled.tr`
  display: flex;
  justify-content: space-between;
`;

export const TableItem = styled.td`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  padding: 0;

  &:first-letter {
    text-transform: uppercase;
  }

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;
