import { MapPin, Calendar, Edit3, Trash2 } from 'lucide-react';
import { Card, ImageContainer, Info, Title, Location, DateText, ActionOverlay } from './style';

export function EventCard({ evento, onEdit, onDelete }) {
  return (
    <Card>
      <ImageContainer>
        <img src={evento.imagem || 'https://via.placeholder.com/400x300?text=Sem+Imagem'} alt={evento.nome} />
        <ActionOverlay>
          <button onClick={onEdit} className="edit"><Edit3 size={18} /></button>
          <button onClick={onDelete} className="delete"><Trash2 size={18} /></button>
        </ActionOverlay>
      </ImageContainer>

      <Info>
        <Title>{evento.nome}</Title>
        <Location>
          <MapPin size={14} />
          {evento.cidade}, {evento.uf}
        </Location>
        <DateText>
          <Calendar size={14} />
          {new Date(evento.data).toLocaleDateString('pt-BR')}
        </DateText>
      </Info>
    </Card>
  )
}