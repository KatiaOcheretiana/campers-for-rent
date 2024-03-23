import * as Yup from 'yup';

export const UserFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  bookingDate: Yup.string().required('Please choose date'),
});
