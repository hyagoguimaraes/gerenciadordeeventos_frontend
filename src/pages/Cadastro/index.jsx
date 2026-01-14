import { useState } from "react";
import authService from './../../services/authService';
import { Container, Form, ErrorMessage, SuccessMessage, ShowPasswordButton } from "./style";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, UserPlus } from "lucide-react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

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
  const [msg, setMsg] = useState({ type: "", text: "" });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMsg({ type: "", text: "" });

    if (form.senha !== form.confirmarSenha) {
      setMsg({ type: "error", text: "As senhas não coincidem!" });
      return;
    }

    setLoading(true);
    try {
      await authService.register({
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      });

      setMsg({ type: "success", text: "Administrador cadastrado com sucesso!" });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMsg({ type: "error", text: "Erro ao cadastrar. E-mail já cadastrado no sistema!" });
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

        <h1>Criar Conta</h1>
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

        <div style={{ position: 'relative' }}>
          <Input
            type={showSenha ? "text" : "password"}
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
            required
          />
          <ShowPasswordButton type="button" onClick={() => setShowSenha(!showSenha)}>
            {showSenha ? <EyeOff size={20} /> : <Eye size={20} />}
          </ShowPasswordButton>
        </div>

        <Input
          type="password"
          name="confirmarSenha"
          placeholder="Confirmar Senha"
          value={form.confirmarSenha}
          onChange={handleChange}
          required
        />

        {msg.type === "error" && <ErrorMessage>{msg.text}</ErrorMessage>}
        {msg.type === "success" && <SuccessMessage>{msg.text}</SuccessMessage>}

        <Button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : (
            <>
              <UserPlus size={18} style={{ marginRight: "8px" }} />
              Cadastrar Administrador
            </>
          )}
        </Button>
      </Form>
    </Container>
  )
}