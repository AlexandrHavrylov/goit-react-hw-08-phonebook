import Form from "components/Form/Form";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
import { Title } from "styles/App.styled";

function ContactsPage() {
  return (
    <>
      <Title>Phonebook</Title>
      <Form />
      <Filter />
      <Contacts />
    </>
  );
}

export default ContactsPage;
