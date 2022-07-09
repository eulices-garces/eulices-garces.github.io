import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, There <br />
        I'm Eulices Garces <br />
        Welcome to my Porfolio
      </SectionTitle>
      <SectionText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsum quis, assumenda ea corporis harum tempora.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;