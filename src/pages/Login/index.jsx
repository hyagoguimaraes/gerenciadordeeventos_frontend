import { useState, useContext, useEffect } from "react";
import { Container, Form, RememberMeContainer, ShowPasswordButton, LogoContainer, PasswordWrapper, ErrorMessage } from "./style";
import { useNavigate } from 'react-router-dom';
import { Input } from './../../components/Input/index';
import { Button } from './../../components/Button/index';
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

export function Login() {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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

    try {
      await login({ email, senha });
      toast.success(`Bem-vindo de volta!`);
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
    } catch (error) {
      toast.error("Credenciais inválidas! Verifique seu e-mail e senha.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <LogoContainer>
          <Sparkles size={40} strokeWidth={2.5} />
          <h1>VibeCheck</h1>
        </LogoContainer>
        <p>Acesse sua conta para gerenciar eventos</p>

        <Input
          type="email"
          placeholder="E-mail do Aministrador"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <PasswordWrapper>
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
            data-tooltip={showPassword ? "Esconder senha" : "Ver senha"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </ShowPasswordButton>
        </PasswordWrapper>

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