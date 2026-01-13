import { useEffect, useState } from "react";
import eventService from './../../services/eventService';
import { EventCard } from './../../components/EventCard/index';
import { Button, Container, List, Title } from "./style";
import { Sidebar } from "../../components/Sidebar";

export function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    carregarEventos();
  }, []);

  async function carregarEventos() {
    const response = await eventService.listar();
    setEventos(response.data);
  }

  async function handleDelete(id) {
    await eventService.deletar(id);
    setEventos(eventos.filter(e => e.id !== id));
  }

  return (
    <Container>
      <Sidebar />
      <Title>Gerenciar Eventos</Title>

      <Button>Novo Evento</Button>

      <List>
        {eventos.map(evento => (
          <EventCard
            key={evento.id}
            evento={evento}
            onDelete={() => handleDelete(evento.id)}
            editable
          />
        ))}
      </List>
    </Container>
  )
}