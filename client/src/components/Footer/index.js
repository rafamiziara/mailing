import React from 'react';
import { FooterText, FooterImage, FooterLink, FooterItem } from './styles';

export default function Footer() {
  return (
    <FooterText>
      <FooterItem>
        made with
        <FooterImage src="/love.svg" />
        by 
        <FooterLink href="https://github.com/rafamiziara">rm30</FooterLink>
      </FooterItem>
      <FooterItem>
        Icons made by 
        <FooterLink href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</FooterLink>
        from
        <FooterLink href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</FooterLink>
      </FooterItem>
    </FooterText>
  )
}
