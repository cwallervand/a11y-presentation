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

const MainContent = styled.main``;

const SlideComponent = ({ title, skipLinks = true, children }) => {
  document.title = title;
  return (
    <SlideWrapper>
      <header>
        {skipLinks && <SkipLink>
          <a href="#content">Go to main content</a>
        </SkipLink>}
        <Navigation />
        <h1>{title}</h1>
      </header>

      <MainContent id="content">
        {children}
      </MainContent>
    </SlideWrapper>
  );
}


export const Slide = SlideComponent;