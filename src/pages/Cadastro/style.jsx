import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 420px;
  background: #fff;
  padding: 2.5rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  position: relative;

  .back-button {
    background: none;
    border: none;
    color: #6c63ff;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    margin-bottom: 1rem;
    width: fit-content;

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    color: #1a1a2e;
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  p {
    color: #676781;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
    display: flex;
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
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #6c63ff;
  }
`;

export const ErrorMessage = styled.span`
  color: #e63946;
  font-size: 0.85rem;
  background: #ffeef0;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`;

export const SuccessMessage = styled.span`
  color: #2b9348;
  font-size: 0.85rem;
  background: #e8f5e9;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`;