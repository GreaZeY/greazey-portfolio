import React from 'react';

import { Section, SectionText, SectionTitle,Name } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding >
    <LeftSection className="nameSection">
      
      <SectionTitle>Hello, I am</SectionTitle>
      <Name  data-text="Nikhil&nbsp;Kumar" className="name">Nikhil&nbsp;Kumar</Name>
      <SectionText>
        Front-end Developer | Back-end Developer
      </SectionText>
      <Button onClick={()=>window.location='#projects'}>See my Projects</Button>

    </LeftSection>
  </Section>
);

export default Hero;