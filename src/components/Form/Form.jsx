import { Label, Button, Input, StyledForm } from "styles/Form.styled";

import { useState } from "react";

import { useCreateContactsMutation } from "redux/contacts/contactsApi";
import { useGetAllContactsQuery } from "redux/contacts/contactsApi";

function Form() {
  const [createContact] = useCreateContactsMutation();
  const { data: contacts } = useGetAllContactsQuery();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const isInContacts = contacts?.some((contact) => contact.name === name);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isInContacts
      ? alert(`${name} is already in contacts`)
      : createContact({ name, number });

    setName("");
    setNumber("");
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <Label>
          Имя
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Телефон
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </div>
  );
}

export default Form;
