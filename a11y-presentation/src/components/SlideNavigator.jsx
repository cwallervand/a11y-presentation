import styled from 'styled-components';
import { Link } from "@reach/router"


const SlideNavigatorWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SlideNavigator = ({
  previousIndex,
  nextIndex,
}) => (
  <SlideNavigatorWrapper>
    { previousIndex && <Link to={`/slide${previousIndex}`} aria-label="Go to previous slide">Go back</Link>}
    { nextIndex && <Link to={`/slide${nextIndex}`} aria-label="Go to next slide">Continue</Link>}
  </SlideNavigatorWrapper>
);