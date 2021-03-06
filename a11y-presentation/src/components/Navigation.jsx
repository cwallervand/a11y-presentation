import { Link } from "@reach/router"
import styled from 'styled-components';

const NavigationElements = styled.ul`
  display: flex;
  justify-content: center;

  list-style: none;

  li {
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Navigation = () => (
  <nav>
    <NavigationElements>
      <li><Link to="/slide1">Accessability in practice</Link></li>
      <li><Link to="/slide2">Navigation</Link></li>
      <li><Link to="/slide3">Navigation part 2</Link></li>
      <li><Link to="/slide4">Navigation part 3</Link></li>
      <li><Link to="/slide5">Semantics</Link></li>
      <li><Link to="/slide6">Forms</Link></li>
      <li><Link to="/slide7">Buttons</Link></li>
      <li><Link to="/slide8">Advanced user experiences</Link></li>
    </NavigationElements>
  </nav>
);
