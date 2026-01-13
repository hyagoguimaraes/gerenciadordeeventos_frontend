import styled from "styled-components";


export const Container = styled.div`
  padding: 32px;
  min-height: 100vh;
  background-color: #f5f6fa;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
  color: #2f3640;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;