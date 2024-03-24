import { Form, Formik } from 'formik';
import { UserFormSchema } from './FormSchema';
import {
  Button,
  Comment,
  ContactUserParam,
  InfoText,
  InputField,
  Title,
  UserFormWrapper,
  WarningMessage,
} from './BookForm.styled';
import { Calendar } from '../Calendar/Calendar';
import { useState } from 'react';

export const BookForm = () => {
  const [choosenDate, setChoosenDate] = useState('');

  const initialValues = {
    name: '',
    email: '',
    bookingDate: choosenDate,
    comment: '',
  };

  return (
    <>
      <UserFormWrapper>
        <Title>Book your campervan now</Title>
        <InfoText>Stay connected! We are always ready to help you.</InfoText>
        <Formik
          initialValues={initialValues}
          validationSchema={UserFormSchema}
          onSubmit={(values) => {
            window.location.reload();
          }}
          enableReinitialize={true}
        >
          {({ errors, touched }) => (
            <Form>
              <ContactUserParam>
                <label>
                  <InputField
                    name="name"
                    type="text"
                    autoComplete="off"
                    placeholder="Name"
                  />
                  {errors.name && touched.name && (
                    <WarningMessage>{errors.name}</WarningMessage>
                  )}
                </label>
                <label>
                  <InputField
                    name="email"
                    type="text"
                    autoComplete="off"
                    placeholder="Email"
                  />
                  {errors.email && touched.email && (
                    <WarningMessage>{errors.email}</WarningMessage>
                  )}
                </label>
                <Calendar
                  name="bookingDate"
                  errors={errors}
                  touched={touched}
                  setChoosenDate={setChoosenDate}
                  choosenDate={initialValues.bookingDate}
                  onChange={(date) => setChoosenDate(date)}
                />
                <Comment name="comment" placeholder="Comment"></Comment>
              </ContactUserParam>

              <Button type="submit">Send</Button>
            </Form>
          )}
        </Formik>
      </UserFormWrapper>
    </>
  );
};
