import { Label, Button, Input, StyledForm } from "styles/Form.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { regUser } from "redux/auth/authOperation";

function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(regUser({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
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
          Почта
          <Input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Пароль
          <Input
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Зарегистрировать</Button>
      </StyledForm>
    </div>
  );
}

export default RegisterPage;
