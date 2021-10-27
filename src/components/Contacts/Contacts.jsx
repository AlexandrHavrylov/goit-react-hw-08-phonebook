import React from "react";
import { ContactInfo } from "styles/Contacts.styled";
import { Contact } from "styles/Contacts.styled";
import { DeleteBtn } from "styles/Contacts.styled";
import { ImAddressBook } from "react-icons/im";
import { ContactsList } from "styles/Contacts.styled";
import { useGetAllContactsQuery } from "redux/contacts/contactsApi";
import { useDeleteContactMutation } from "redux/contacts/contactsApi";
import { useSelector } from "react-redux";
import { Spinner } from "components/Spinner/Spinner";

const Contacts = () => {
  const { data, isError, isFetching } = useGetAllContactsQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  console.log(data);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const getFilterContacts = (allContacts, filter) => {
    const normalizedFilterValue = filter.toLowerCase().trim();

    const filtredContacts = allContacts?.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
    return filtredContacts;
  };

  const contacts = useSelector((state) =>
    getFilterContacts(data, state.filter)
  );

  return (
    <div>
      <h2>Contacts</h2>
      {isFetching && <Spinner />}
      {isError && <p>Ошибка</p>}
      {contacts && (
        <ContactsList>
          {contacts.map(({ id, name, number }) => (
            <Contact key={id}>
              <ContactInfo>
                <ImAddressBook /> {name}: {number}
              </ContactInfo>
              <DeleteBtn
                disabled={isLoading}
                onClick={() => deleteContact(id)}
                type="button"
              >
                Delete
              </DeleteBtn>
            </Contact>
          ))}
        </ContactsList>
      )}
    </div>
  );
};

export default Contacts;
