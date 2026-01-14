import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1; /* Card quadradinho estilo Airbnb */
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ActionOverlay = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.2s;

  ${ImageContainer}:hover & {
    opacity: 1;
  }

  button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    &.edit { color: #222; }
    &.delete { color: #FF385C; }
    
    &:hover { transform: scale(1.1); }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 4px 0;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #222;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Location = styled.p`
  font-size: 0.9rem;
  color: #717171;
  display: flex;
  align-items: center;
  gap: 6px;
  svg {
    color: #ff385c;
  }
`;

export const DateText = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: #717171;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  svg {
    color: #484848;
  }
`;