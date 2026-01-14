import { useState, useContext, useEffect } from "react";
import { Container, Form, RememberMeContainer, ShowPasswordButton } from "./style";
import { useNavigate } from 'react-router-dom';
import { Input } from './../../components/Input/index';
import { Button } from './../../components/Button/index';
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";

export function Login() {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login({ email, senha });
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
    } catch (error) {
      setError("Credenciais inválidas!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/eventos");
    }
  }, [user, navigate])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Acesse sua conta para gerenciar eventos</p>

        <Input
          type="email"
          placeholder="E-mail do Aministrador"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <div style={{ position: 'relative' }}>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Sua Senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
          />
          <ShowPasswordButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </ShowPasswordButton>
        </div>

        <RememberMeContainer>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />
            Gravar e-mail
          </label>
        </RememberMeContainer>

        {error && <span>{error}</span>}

        <Button type="submit" disabled={loading}>
          {loading ? "Autenticando..." : "Entrar"}
        </Button>

        <button className="register-link" type="button" onClick={() => navigate("/register")}>
          Não tem uma conta? <strong>Cadastrar-se</strong>
        </button>
      </Form>
    </Container>
  );
}