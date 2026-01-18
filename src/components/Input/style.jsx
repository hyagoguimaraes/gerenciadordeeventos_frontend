import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const Field = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;

  &:hover {
    border-color: #ff385c;
    background: #fff0f2;
    
    svg { 
      color: #ff385c; 
    }
      
    label { 
      color: #ff385c; 
    }
  }

  &:focus {
    border-color: #ff385c;
  }
`