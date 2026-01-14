import { styled } from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #ebebeb;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  color: #FF385C; 
  cursor: pointer;
  
  span {
    color: #484848;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 24px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #717171;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 10px 16px;
    border-radius: 25px;
    transition: all 0.2s;

    &:hover {
      background: #f7f7f7;
      color: #222;
    }

    &.active {
      color: #FF385C;
      background: rgba(255, 56, 92, 0.05);
    }
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .user-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 21px;
    background: #fff;
    color: #484848;
    font-size: 0.9rem;
    
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #717171;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #FF385C;
  }
`;