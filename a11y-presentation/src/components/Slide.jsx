import styled from 'styled-components';
import React from 'react';

import { Navigation } from './Navigation';

const SlideWrapper = styled.div`
  padding: 24px;

  h1 {
    text-align: center;
  }
`;

const SkipLink = styled.div`
  a {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;

    &:focus,
    &:active {
      position: static;
      width: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      clip: auto
    }
  }

`;

const MainContent = styled.section``;

const SlideComponent = ({ title, skipLinks = true, bogusNavigation = false, children }) => (
  <SlideWrapper>
    { skipLinks && <SkipLink>
      <a href="#content">Go to main content</a>
    </SkipLink>}
    <Navigation bogusNavigation={bogusNavigation}/>
    <h1>{title}</h1>
    <MainContent id="content">
      {children}
    </MainContent>
  </SlideWrapper>
);


export const Slide = SlideComponent;