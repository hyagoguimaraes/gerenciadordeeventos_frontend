import { styled } from 'styled-components';

export const Aside = styled.aside`
  width: 250px;
  height: 100vh;
  background-color: #1a1a2e;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
  color: #fff;
  
  span {
    color: #6c63ff;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  color: #a2a2c2;
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px:
  flex: 1;

  a{
    display: flex;
    align-items: center;
    gap: 12px;
    color: #a2a2c2;
    text-decoration: none;
    padding: 12px;
    border-radius: 8px;
    transition: all 0.3s;

    &:hover {
      background: rgba(108, 99, 255, 0.1);
      color: #fff;
    }

    &:active {
      background: #6c63ff;
      color: #fff;
    }
  }
`;

export const LogoutButton = styled.button`
  display: flex; 
  align-items: center;
  gap: 12px;
  background: transparent;
  border: 1px solid #ff4d4d;
  color: #ff4d4d;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: auto;

  &:hover {
    background: #ff4d4d;
    color: #fff;
  }
`