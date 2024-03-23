import styled, { createGlobalStyle } from 'styled-components';
import { globalColor } from '../../styles/root';

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  margin: 0 12px;
`;

export const SvgHeader = styled.svg`
  width: 9px;
  height: 16px;
  cursor: pointer;
`;

export const HeaderData = styled.p`
  color: ${globalColor.colorWhite};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const MonthYearText = styled.p`
  color: ${globalColor.darkText};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
`;

export const OptionSelector = styled.option`
  background-color: ${globalColor.colorOrange};
  height: 2px;
`;

export const DateInput = styled.input`
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 56px;
  background-color: ${globalColor.inputs};
  border: none;

  ::placeholder {
    color: #aaa; /* Placeholder color */
  }
`;

export const CalendarStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: absolute;
  }
  
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 12px;
    padding: 16px;
    width: 325px;
    background-color: #fff;
    transform: translate(-60%, -5%);
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 10px;
    text-transform: uppercase;
  }

  .react-datepicker__current-month {
    color: ${globalColor.darkText};
    font-weight: 600;
    font-size: 16px;
    line-height: 1.20;
    text-align: center;
  }

  .react-datepicker__day-name {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.20;
    text-align: center;
    color: ${globalColor.darkText};
  }

  span.react-datepicker__navigation-icon {
    margin-top: 24px;
    display: none;
  }

  .react-datepicker__aria-live {
    display: none;
  }


  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${globalColor.darkText};
  }

  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 41px;
    height: 32px;
    flex-shrink: 0;
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.20;
    text-align: center;
  }

  .react-datepicker__day--selected {
    background-color: ${globalColor.inputs};
    color:${globalColor.btn};
    font-weight: 700;
    border-radius: 50%;
  }

  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: ${globalColor.inputs};
    color:${globalColor.btn};
  }

  .react-datepicker__day:hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: ${globalColor.inputs};
    color:${globalColor.btn};
    font-weight: 700;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: ${globalColor.inputs};
    color:${globalColor.btn};
    font-weight: 700;
  }

  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 50%;
  }

  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }

  .react-datepicker__triangle {
    display: none;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const CalendarIcon = styled.svg`
  position: absolute;
  height: 20px;
  width: 20px;
  fill: transparent;
  stroke: ${globalColor.darkText};
  top: 0;
  right: 18px;
  cursor: pointer;

  transition: background-color 0.5s ease;

  &:hover {
    stroke: ${globalColor.btn};
  }
`;
