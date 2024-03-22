import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  margin-bottom: 100px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Button = styled.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 32px;
  height: 56px;
  background-color: transparent;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  transition: border-color 0.5s ease;

  &:hover {
    border-color: ${globalColor.btn};
  }
`;
