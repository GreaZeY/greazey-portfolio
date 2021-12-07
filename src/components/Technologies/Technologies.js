import React from 'react';
import { DiReact, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies while learning the web development.</SectionText>
  <List>
  <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
      - React.Js<br/>
      - HTML/CSS
      </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiNodejsSmall size="3rem"/>
      <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
      - Node.Js<br/>
      - Express.Js
      </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiMongodb size="3rem"/>
      <ListContainer>
      <ListTitle>Database</ListTitle>
      <ListParagraph>
      - Mongoose
      </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  
  </Section>
);

export default Technologies;
