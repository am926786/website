"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ClientWrapperProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f5f5f5;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  background: #0070f3;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Main = styled.main`
  flex: 1;
  text-align: center;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  color: #fff;
`;

const Button = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  background: #fff;
  color: #0070f3;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #e6f0ff;
  }
`;

const Footer = styled.footer`
  background: #0070f3;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Welcome to Our Modern Website</Title>
      </Header>
      <Main>
        {children}
        <Button href="#">Get Started</Button>
      </Main>
      <Footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </Footer>
    </Wrapper>
  );
};

export default ClientWrapper;