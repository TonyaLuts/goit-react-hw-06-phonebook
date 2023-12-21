import { GlobalStyle } from '../GlobalStyle';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterContact } from '../Filter/Filter';
import { Container } from './App.styled.js';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>

        <h2>Contacts</h2>
        <FilterContact />
        {contacts.length > 0 && <ContactList></ContactList>}
      </Container>
      <GlobalStyle />
    </>
  );
};
