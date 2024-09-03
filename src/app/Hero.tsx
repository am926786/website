// src/components/Hero.tsx
"use client";
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  background: #0070f3;
  color: #fff;
  padding: 80px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

const HeroSubtitle = styled.h2`
  font-size: 2rem;
  margin: 10px 0;
`;

const HeroButton = styled.a`
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

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroTitle>Experience the Future of Tech</HeroTitle>
        <HeroSubtitle>Innovative Solutions for Modern Challenges</HeroSubtitle>
        <HeroButton href="#">Learn More</HeroButton>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;
