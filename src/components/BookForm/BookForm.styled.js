import { Field } from 'formik';
import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const UserFormWrapper = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 8px;
`;

export const InfoText = styled.p`
  color: ${globalColor.lightText};
  margin-bottom: 24px;
`;

export const InputField = styled(Field)`
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 56px;
  background-color: ${globalColor.inputs};
  color: ${globalColor.darkText};
  border: none;
`;

export const WarningMessage = styled.div`
  width: 160px;
  font-size: 10px;
  line-height: 1.2;
  color: ${globalColor.btn};
`;

export const ContactUserParam = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const Comment = styled.textarea`
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 114px;
  background-color: ${globalColor.inputs};
  border: none;
  resize: none;
`;

export const Button = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  /* width: 160px; */
  height: 56px;
  border: none;
  background-color: ${globalColor.btn};
  color: #fff;

  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${globalColor.btnHover};
  }
`;
