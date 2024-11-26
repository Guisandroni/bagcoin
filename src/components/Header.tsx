import React from 'react';
import styled from 'styled-components';
import { Bell, Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserName = styled.div`
  h2 {
    font-size: 0.875rem;
    color: #666;
  }
  h1 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/login'>
      <Menu size={24} />
      </Link>
      
      <UserInfo>
        <Avatar  src="https://github.com/Guisandroni.png" alt="User" />
        <UserName>
          <h2>Olá</h2>
          <h1>Gui</h1>
        </UserName>
      </UserInfo>
      <Bell size={24} />
    </HeaderContainer>
  );
};

export default Header;