import { useState } from "react";
import authService from './../../services/authService';
import { Container, Form, Button, Title } from "./style";

export function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if(form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      await authService.register({
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      });

      alert("Administrador cadastrado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar administrador");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        
        <input name="nome" placeholder="Nome" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="Senha" placeholder="Senha" onChange={handleChange} />
        <input
          type="password"
          name="ConfirmarSenha"
          placeholder="Confirmar Senha"
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  )
}