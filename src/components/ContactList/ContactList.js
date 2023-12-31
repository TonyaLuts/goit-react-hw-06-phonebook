import { useDispatch, useSelector } from 'react-redux';
import { ContactCard } from '../ContactCard/ContactCard';
import { ListCards } from './ContactList.styled';
import { deleteContact } from '../../redux/contactSlice';
import { getContacts, getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDeleteContact = idx => {
    dispatch(deleteContact(contacts.filter(contact => contact.id !== idx)));
  };

  const getVisibleContacts = () => {
    const newArrayContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return newArrayContacts;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ListCards>
      {visibleContacts.map(contact => (
        <ContactCard
          key={contact.id}
          card={contact}
          onDelete={handleDeleteContact}
        ></ContactCard>
      ))}
    </ListCards>
  );
};
