import React from 'react';
import { FooterText, FooterImage, FooterLink } from './styles';

export default function Footer() {
  return (
    <FooterText>
      made with
      <FooterImage src="/love.svg" />
      by 
      <FooterLink href="https://github.com/rafamiziara">rm30</FooterLink>
    </FooterText>
  )
}
