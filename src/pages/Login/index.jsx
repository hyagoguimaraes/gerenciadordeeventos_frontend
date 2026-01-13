import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container, Form } from "./style";
import { useNavigate } from 'react-router-dom';
import { Input } from './../../components/Input/index';
import { Button } from './../../components/Button/index';

export function Login() {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login({ email, senha });
    } catch (error) {
      setError("Credenciais inválidas!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(user) {
      navigate("/eventos");
    }
  }, [user, navigate])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
        />

        {error && <span>{error}</span>}

        <Button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>

        <button type="button" onClick={() => navigate("/register")}>
          Criar conta
        </button>
      </Form>
    </Container>
  );
}