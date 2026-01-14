import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #eee;
  padding-bottom: 24px;
`;

export const TitleContainer = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #222;
    letter-spacing: -0.5px;
  }

  p {
    color: #717171;
    font-size: 1rem;
    margin-top: 4px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #222;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transform: background 0.2s;

  &:hover {
    background-color: #000;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;

  .input-group {
    display: flex;
    gap: 12px;
    width: 100%;

    > div, > input {
      flex: 1;
    }
  }

  div {
    width: 100%;
  }
`;