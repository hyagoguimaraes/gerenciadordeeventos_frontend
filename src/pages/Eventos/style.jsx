import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Button = styled.button`
  margin-bottom: 20px;
  padding: 10px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`