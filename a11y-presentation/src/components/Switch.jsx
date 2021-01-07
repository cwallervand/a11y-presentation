import styled from 'styled-components';
import { useState } from 'react';

const ToggleButton = styled.button`
  background-color: ${props => props.isOn ? '#90EE90' : '#DDD'};
  border: 2px solid #BBB;
  border-radius: 15px;
  padding: 0;
  width: 4em;
  height: 2em;
`;

const OptionMarker = styled.span`
  background-color: #FFF;
  width: 50%;
  position: relative;
  height: 100%;
  display: block;
  border-radius: 15px;
  margin-left: ${props => props.isOn ? '50%' : '0'}
`


export const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <label htmlFor="notificationToggle">Notify me when i run out of money</label>
      <ToggleButton
        role="switch"
        aria-checked={isOn}
        onClick={() => setIsOn(!isOn)}
        id="notificationToggle"
        isOn={isOn}
      >
        <OptionMarker isOn={isOn}></OptionMarker>
      </ToggleButton>
    </>
  );
}