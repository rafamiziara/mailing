import React from 'react';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <p className="made-by">
        made with
        <img className="love" src="/love.svg" />
        by 
        <a className="link" href="https://github.com/rafamiziara">rm30</a>
      </p>
    </Container>
  )
}
