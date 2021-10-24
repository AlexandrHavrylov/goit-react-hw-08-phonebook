import { Input, Label } from "styles/Form.styled";
import React from "react";
import { Section } from "styles/App.styled";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "redux/contacts/contacts-actions";

const Filter = () => {
  const value = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <Section>
      <Label>
        Find contatcs by Name
        <Input
          type="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </Label>
    </Section>
  );
};

export default Filter;
