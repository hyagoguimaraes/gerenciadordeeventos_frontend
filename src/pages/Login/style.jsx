import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  widht: 100%;
  max-width: 400px;
  background: #fff;
  padding: 3rem 2.5rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  h1 {
    text-align: center;
    margin-bottom: 0.2rem;
    color: #1a1a2e;
    font-size: 2rem;
  }

  p {
    text-align: center;
    color: #676781;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  span {
    color: #e63946;
    font-size: 0.9rem;
    background: #ffeef0;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
  }
    
  .register-link {
    margin-top: 1rem;
    background: none;
    border: none;
    color: #676781;
    cursor: pointer;
    font-size: 0.9rem

    strong {
      color: #6c63ff;
    }

    &:hover strong {
      text-decoration: underline;
    }
  }
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #a2a2c2;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #6c63ff;
  }
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #676781;
    font-size: 0.85rem;
    cursor: pointer;
  }

  input[type="checkbox"] {
    accent-color: #6c63ff;
    cursor: pointer;
  }
`;