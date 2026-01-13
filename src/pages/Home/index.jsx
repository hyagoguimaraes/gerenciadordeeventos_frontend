import { useEffect, useState } from "react";
import eventService from '../../services/eventService';
import { EventCard } from "../../components/EventCard";
import { Container, Grid, Title } from "./style";

export function Home() {
  const [events, setEvents] = useState([]);

  async function carregarEventos() {
    const response = await eventService.listar();
    setEvents(response.data);
  }

  async function handleDelete(id) {
    await eventService.deletar(id);
    carregarEventos();
  }

  useEffect(() => {
    carregarEventos();
  }, []);

  return (
    <Container>
      <Title>Eventos</Title>

      <Grid>
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onDelete={() => handleDelete(event.id)}
            onEdit={() => console.log("Editar", event.id)}
          />
        ))}
      </Grid>
    </Container>
  )
}