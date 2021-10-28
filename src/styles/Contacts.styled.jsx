import styled from "@emotion/styled";

export const ContactsList = styled.ul`
  margin: 0;
  padding: 24px;
  list-style: none;
`;

export const Contact = styled.li`
  position: relative;
  padding: 10px;
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 24px;
  font-weight: 500;
  border: 1px gray solid;
  border-radius: 10px;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: rgb(25 26 27 / 20%) 1px 1px 1px 1px;
  }
`;

export const ContactInfo = styled.span`
  margin-right: 56px;

  svg {
    position: absolute;
    top: 15px;
    left: 5px;
    color: #010174;
  }
`;

export const DeleteBtn = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;

  text-align: center;
  border: none;

  svg {
    margin: 0;
    padding: 0;
    width: 25px;
    height: 25px;

    &:hover {
      color: #e24529;
      transform: scale(1.1);
    }
  }
`;
