import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  widht: 100%;
  max-width: 380px;
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    color: #2c5364;
    font-size: 1.8rem;
  }

  span {
    color: #e63946;
    font-size: 0.9rem;
    text-align: center;
  }

  button[type="submit"] {
    margin-top: 0.5rem;
  }

  button[type="button"] {
    margin-top: 0.5rem;
    background: none;
    border: none;
    color: #2c5364;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  } 
`;