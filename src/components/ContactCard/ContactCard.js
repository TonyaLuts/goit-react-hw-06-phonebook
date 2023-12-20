import { useDispatch } from 'react-redux';
import { Card, BtnDel, ContactInfo } from './ContactCard.styled';
import { deleteContact } from '../../redux/contactSlice';

export const ContactCard = ({ card: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <Card>
        <ContactInfo>{name}:</ContactInfo>
        <ContactInfo>{number}</ContactInfo>
        <BtnDel onClick={() => dispatch(deleteContact(id))}>Delete</BtnDel>
      </Card>
    </li>
  );
};
