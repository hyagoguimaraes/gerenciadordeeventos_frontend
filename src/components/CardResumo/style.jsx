import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.05);
    border-color: #ff385c50;

    .icon-box {
      background: #ff385c;
      color: #fff;
      transform: rotate(-5deg) scale(1.1);
    }
  }
`;

export const IconBox = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: #fff0f2;
  color: #ff385c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  
  h4 {
    color: #717171;
    font-size: 0.85rem;
    font-weight> 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  strong {
    color: #222;
    font-size: 1.6rem;
    font-weight: 800;
  }
`;