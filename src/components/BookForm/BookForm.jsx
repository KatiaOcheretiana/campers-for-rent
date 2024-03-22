import { Form, Formik } from 'formik';
import { UserFormSchema } from './FormSchema';
import {
  Comment,
  ContactUserParam,
  InfoText,
  InputField,
  Title,
  UserFormWrapper,
  WarningMessage,
} from './BookForm.styled';

export const BookForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
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
            console.log(values);
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
                    style={{ color: ' rgba(239, 237, 232, 0.6)' }}
                    name="email"
                    type="text"
                    autoComplete="off"
                    placeholder="Email"
                  />
                  {errors.email && touched.email && (
                    <WarningMessage>{errors.email}</WarningMessage>
                  )}
                </label>
                <label>
                  <InputField
                    style={{ color: ' rgba(239, 237, 232, 0.6)' }}
                    name="bookingDate"
                    type="text"
                    autoComplete="off"
                    placeholder="Booking date"
                  />
                  {errors.email && touched.email && (
                    <WarningMessage>{errors.email}</WarningMessage>
                  )}
                </label>
                <Comment name="comment" placeholder="Comment"></Comment>
              </ContactUserParam>

              <button type="submit">Save</button>
            </Form>
          )}
        </Formik>
      </UserFormWrapper>
    </>
  );
};
