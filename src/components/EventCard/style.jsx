import { styled } from 'styled-components';

export const Card = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h3`
  font-sie: 18px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;