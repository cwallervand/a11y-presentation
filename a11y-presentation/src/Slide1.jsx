import React from 'react';

import { Slide } from './components/Slide';
import { SlideNavigator } from './components/SlideNavigator';

const Slide1 = () => (
  <Slide title="Accessability in practice" skipLinks={false}>
    <p>
      Welcome to this introduction to accessability in practice for developers.
      This session will cover some basics and some more advanced techniques for those fancy user experiences.
      At the end of this session you will hopefully have learned something new (or just refreshed your memory)
    </p>
    <p>
      Lets get into it!
    </p>
    <SlideNavigator nextIndex={2} />
  </Slide>
);

export default Slide1;