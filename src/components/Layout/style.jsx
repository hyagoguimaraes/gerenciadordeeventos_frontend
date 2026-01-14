import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  flex: 1;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  padding: 40px;
  background: #fff;
`;