import { useState } from "react";
import authService from './../../services/authService';
import { Container, Form, ShowPasswordButton, LogoContainer, PasswordWrapper, PasswordRequirementList, RequirementItem } from "./style";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, UserPlus, Sparkles, X, Check } from "lucide-react";
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
  const requirements = [
    { label: "Mínimo 6 caracteres", met: form.senha.length >= 6 },
    { label: "Uma letra maiúscula", met: /[A-Z]/.test(form.senha) },
    { label: "Uma letra minúscula", met: /[a-z]/.test(form.senha) },
    { label: "Um caractere especial (@#$%)", met: /[!@#$%^&*]/.test(form.senha) },
    { label: "Um número", met: /[0-9]/.test(form.senha) },
  ];

  const isPasswordValid = requirements.every(req => req.met);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (form.senha !== form.confirmarSenha) {
      toast.error("As senhas não coincidem!");
      return;
    }

    if (!isPasswordValid) {
      toast.error("A senha não atende a todos os requisitos de segurança.");
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
      toast.error(error.response?.data?.message || "Erro ao cadastrar.");
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

        <p>Crie sua conta</p>

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

        <PasswordRequirementList>
            {requirements.map((req, index) => (
              <RequirementItem key={index} $met={req.met}>
                {req.met ? <Check size={14} /> : <X size={14} />}
                {req.label}
              </RequirementItem>
            ))}
          </PasswordRequirementList>

        <Button type="submit" disabled={loading || isPasswordValid}>
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