import React from 'react';

import { Section, SectionText, SectionTitle,Name } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection className="nameSection">
      
      <SectionTitle>Hello, I am</SectionTitle>
      <div className='name-div'>
      <Name  data-text="Nikhil&nbsp;Kumar&nbsp;" className="name">Nikhil&nbsp;Kumar&nbsp;</Name>
      </div>
      <SectionText>
        Front-end Developer | Back-end Developer
      </SectionText>
      <Button onClick={()=>window.location='#projects'}>See my Projects</Button>

    </LeftSection>
  </Section>
);

export default Hero;