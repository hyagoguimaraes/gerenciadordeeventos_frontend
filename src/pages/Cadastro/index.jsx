import { useState } from "react";
import authService from './../../services/authService';
import { Container, Form, ShowPasswordButton, LogoContainer, PasswordWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, UserPlus, Sparkles } from "lucide-react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import toast from "react-hot-toast";

export function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });
  const [showSenha, setShowSenha] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (form.senha !== form.confirmarSenha) {
      toast.error("As senhas não coincidem!");
      return;
    }

    setLoading(true);
    try {
      await authService.register({
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      });

      toast.success("Conta criada com sucesso!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error("Erro ao cadastrar. Cadastro já existe!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <button type="button" className="back-button" onClick={() => navigate("/login")}>
          <ArrowLeft size={18} /> Voltar
        </button>

        <LogoContainer>
          <Sparkles size={32} strokeWidth={2.5} />
          <h1>VibeCheck</h1>
        </LogoContainer>

        <p>Cadastre um novo administrador para o sistema</p>

        <Input
          name="nome"
          placeholder="Nome Completo"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <Input
          name="email"
          placeholder="E-mail de Acesso"
          value={form.email}
          onChange={handleChange}
          required
        />

        <PasswordWrapper>
          <Input
            type={showSenha ? "text" : "password"}
            name="senha"
            placeholder="Senha (A senha deve conter no mínimo 6 digitos)"
            value={form.senha}
            onChange={handleChange}
            required
            minLength={6}
          />
          <ShowPasswordButton
            type="button"
            onClick={() => setShowSenha(!showSenha)}
            data-tooltip={showSenha ? "Esconder senha" : "Ver senha"}
          >
            {showSenha ? <EyeOff size={20} /> : <Eye size={20} />}
          </ShowPasswordButton>
        </PasswordWrapper>

        <Input
          type="password"
          name="confirmarSenha"
          placeholder="Confirmar Senha"
          value={form.confirmarSenha}
          onChange={handleChange}
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : (
            <>
              <UserPlus size={18} style={{ marginRight: "8px" }} />
              Criar conta
            </>
          )}
        </Button>
      </Form>
    </Container>
  )
}