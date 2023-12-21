import { Formik } from 'formik';
import { Form, Field, FormName, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { nanoid } from 'nanoid';
import { getContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleAddContact = ({ name, number }) => {
    const contactVerification = contacts.findIndex(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    console.log(contactVerification);
    if (contactVerification >= 0) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    dispatch(
      addContact({
        id: nanoid(),
        name: name,
        number: number,
      })
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    handleAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormName>
          Name
          <Field type="text" name="name" required />
        </FormName>

        <FormName>
          Number
          <Field type="tel" name="number" required />
        </FormName>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
