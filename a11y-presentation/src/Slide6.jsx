import styled from 'styled-components';

import { Slide } from './components/Slide';
import { SlideNavigator } from './components/SlideNavigator';

const InputLine = styled.div`
  margin-bottom: 16px;
`;

const BadInputGroup = styled.div``;

const Slide4 = () => (
  <Slide title="Form basics">
    <article>
      <h2>How to not do forms</h2>
      <div className="form">
        <BadInputGroup>
          <div>Address</div>
          <InputLine>
            <span>Address:</span>
            <input type="text"></input>
            <div>Some description for address</div>
          </InputLine>
          <InputLine>
            <span>Postal code:</span>
            <input type="text"></input>
          </InputLine>
          <InputLine>
            <span>City:</span>
            <input type="text"></input>
          </InputLine>
        </BadInputGroup>
        <button>Submit</button>
      </div>
    </article>
    <article>
      <h2>How to do forms</h2>
      <form>
        <fieldset name="Address">
          <legend>
            Address
          </legend>
          <InputLine>
            <label htmlFor="address">Address:</label>
            <input id="address" type="text" />
          </InputLine>
          <InputLine>
            <label htmlFor="postal-code">Postal code:</label>
            <input id="postal-code" type="text" />
          </InputLine>
          <InputLine>
            <label htmlFor="city">City:</label>
            <input id="city" type="text" />
          </InputLine>
        </fieldset>
        <fieldset name="mcuOptions">
          <legend>
            Do you like the MCU movies?
          </legend>
          <InputLine>
            <label htmlFor="mcuOption1">Yes</label>
            <input id="mcuOption1" type="radio" name="mcuOption" />
          </InputLine>
          <InputLine>
            <label htmlFor="mcuOption2">No</label>
            <input id="mcuOption2" type="radio" name="mcuOption" />
          </InputLine>
          <InputLine>
            <label htmlFor="mcuOption3">Some are OK i guess</label>
            <input id="mcuOption3" type="radio" name="mcuOption" />
          </InputLine>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </article>
    <SlideNavigator previousIndex={5} nextIndex={7} />
  </Slide>

);

export default Slide4;