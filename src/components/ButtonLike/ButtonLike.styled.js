import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const ButtonLikeWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 28px;
  border: none;
  background: none;
  padding: 0;
`;

export const IconLike = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke-width: 2.3px;
  transform: translateY(-50%);
  top: 50%;
  left: 11%;
`;

export const IconLikeUse = styled.use`
  width: 24px;
  height: 24px;
`;
