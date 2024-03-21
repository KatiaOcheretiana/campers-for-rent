import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const WrapperBox = styled.div`
  width: 360px;
`;

export const Label = styled.label`
  position: relative;
  font-weight: 500;
  color: ${globalColor.lightText};
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 100%;
  background-color: ${globalColor.inputs};
  border: none;
  line-height: 1.25;

  margin-top: 8px;
`;

export const LocationIcon = styled.svg`
  position: absolute;
  width: 18px;
  height: 20px;
  top: 86%;
  left: 18px;
  transform: translateY(-50%);

  fill: transparent;
  stroke: ${globalColor.darkText};
`;
