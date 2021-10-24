import { Label, Button, Input, StyledForm } from "styles/Form.styled";
import { useState } from "react";
import { useLoginUserMutation } from "redux/auth/authApi";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoginUser] = useLoginUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
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
    LoginUser({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
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

export default LoginPage;