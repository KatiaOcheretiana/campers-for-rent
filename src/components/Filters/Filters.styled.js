import styled from "styled-components";
import { globalColor } from "../../styles/root";
import { Field } from "formik";

export const FilterTitle = styled.h3`
  font-weight: 500;
  color: ${globalColor.lightText};
  margin-bottom: 15px;
  margin-top: 30px;
`;

export const GroupTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 48px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.1);
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 360px;
`;

export const Label = styled.label`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 12px;
  width: 112px;
  height: 95px;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${globalColor.btnHover};
  }
`;

export const SvgIcon = styled.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;

  fill: transparent;
  stroke: ${globalColor.darkText};
`;

export const Span = styled.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`;

export const SvgIconCampers = styled.svg`
  width: 40px;
  height: 28px;
  margin-bottom: 8px;
`;

export const Input = styled(Field)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:checked + ${Span} ${SvgIcon} {
    stroke: ${globalColor.btn};
  }

  &:checked + ${Span} ${SvgIconCampers} {
    stroke: ${globalColor.btn};
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
  border: none;
  padding: 16px 60px;
  height: 56px;

  margin-top: 64px;

  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &:hover {
    background-color: ${globalColor.btnHover};
  }
`;
