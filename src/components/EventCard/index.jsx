import { Actions, Card, Description, Title } from './style';

export function EventCard({ title, description, onEdit, onDelete }) {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <Actions>
        <Button onClick={onEdit}>Editar</Button>
        <Button onClick={onDelete}>Excluir</Button>
      </Actions>
    </Card>
  )
}