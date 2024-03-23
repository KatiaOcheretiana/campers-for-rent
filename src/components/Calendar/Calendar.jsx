import { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  CalendarIcon,
  CalendarStyles,
  DateInput,
  HeaderBox,
  HeaderData,
  Label,
  MonthYearText,
  OptionSelector,
  SvgHeader,
} from './Calendar.styled';
import { WarningMessage } from '../BookForm/BookForm.styled';
import { format } from 'date-fns';
import { getMonth } from 'date-fns';
import { getYear } from 'date-fns';

import sprite from '../../assets/sprite.svg';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
  return (
    <HeaderBox>
      <SvgHeader onClick={decreaseMonth}>
        <use href={sprite + '#icon-previous'} />
      </SvgHeader>

      <MonthYearText>
        {months[getMonth(date)]} {getYear(date)}
      </MonthYearText>

      <SvgHeader onClick={increaseMonth}>
        <use href={sprite + '#icon-next'} />
      </SvgHeader>
    </HeaderBox>
  );
};

export default CustomHeader;

export const Calendar = ({
  name,
  errors,
  touched,
  choosenDate,
  onChange,
  setChoosenDate,
}) => {
  const [selectedDate, setSelectedDate] = useState(false);

  const handleDateChange = (date) => {
    setChoosenDate(date);
    setSelectedDate(true);
  };

  const formattedDate = choosenDate ? format(choosenDate, 'dd/MM/yyyy') : '';

  return (
    <>
      <DatePicker
        selected={choosenDate}
        onChange={handleDateChange}
        customInput={
          <Label>
            <DateInput
              name={name}
              value={formattedDate || ''}
              placeholder={!selectedDate ? 'Booking date' : ''}
              onFocus={() => setSelectedDate(false)}
              onChange={onChange}
            />
            {errors[name] && touched[name] && (
              <WarningMessage>{errors[name]}</WarningMessage>
            )}
            <CalendarIcon>
              <use href={sprite + '#icon-calendar-btn'} />
            </CalendarIcon>
          </Label>
        }
        renderCustomHeader={(props) => (
          <CustomHeader {...props} value={formattedDate || new Date()} />
        )}
        calendarStartDay={1}
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
        dateFormat="dd/MM/yyyy"
      />
      <CalendarStyles />
    </>
  );
};
