import React from 'react';
import { AiFillGithub, AiFillCodepenSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    
      <LinkList>
      
      <LinkColumn>
      
      <LinkTitle>Email </LinkTitle>
      <LinkItem href="mailto:kumar.nikhil551999@gmail.com">contact@greazey.ml</LinkItem>
      </LinkColumn>
      
      </LinkList>
      <SocialIconsContainer>
      <CompanyContainer><Slogan>-Anyone can write code that a computer can understand, <br/>Good programmers write code that humans can understand.</Slogan> </CompanyContainer>
  
    
      <SocialIcons style={{color:"grey"}} href="https://github.com/GreaZey" target="_blank">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons style={{color:"grey"}} href="https://www.linkedin.com/in/nikhil-kumar-b773bb135/ " target="_blank">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons style={{color:"grey"}} href="https://codepen.io/greazey" target="_blank">
          <AiFillCodepenSquare size="3rem" />
        </SocialIcons>
    </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
