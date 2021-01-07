import styled, { css } from 'styled-components';

import { Slide } from './components/Slide';
import { SlideNavigator } from './components/SlideNavigator';

const ButtonStyle = css`
  padding: 12px;
  font-weight: bold;
  color: #FFF;
  background-color: #228B22;
  font-size: 16px;
`

const DivButton = styled.div`
  display: inline-block;
  ${ButtonStyle}
`;

const StyledButton = styled.button`
  border: 0;
  ${ButtonStyle}
`;

const Slide7 = () => (
  <Slide title="Buttons and things that think they are buttons">
    <article>
      <p>
        Often we see clickable things (that are not links) that (to some degree) act as a button, but is in fact not a button. For Pete's sake why ? I dont know, use buttons!
        Below you see a set of clickable button-like things. They will behave and be interpreted differently. Lets take a look.
      </p>
      <section>
        <h2>Div with class button</h2>
        <DivButton className="button" onClick={() => {
          window.alert('Div  with class button clicked')
        }}>
          Click me!
        </DivButton>
        <dl>
          <dt>Attributes of this "button":</dt>
          <dd>It is in fact not a button</dd>
          <dd>Not tabable since it is not recognized as a interactive element by the browser</dd>
          <dd>Since it is not tabable it cannot be activated by the keyboard</dd>
          <dd>Does not have any hover state or different cursor</dd>
          <dd>Recognized as something clickable, but that might be because of the "onClick" attribute. Dont trust it, it is fake news!</dd>
        </dl>
      </section>
      <section>
        <h2>Div with role button</h2>
        <DivButton role="button" onClick={() => {
          window.alert('Div  with role button clicked')
        }}>
          Click me!
        </DivButton>
        <dl>
          <dt>Attributes of this "button":</dt>
          <dd>It is in fact not a button</dd>
          <dd>Recognized as a button by the screen reader because of the role "button"</dd>
          <dd>Not tabable since it is not in the tab order</dd>
          <dd>Since it is not tabable it cannot be activated by the keyboard</dd>
          <dd>Does not have any hover state or different cursor</dd>
        </dl>
      </section>
      <section>
        <h2>Div with role button and tab index</h2>
        <DivButton role="button" tabIndex="0" onClick={() => {
          window.alert('Div  with role button and tab index clicked')
        }}>
          Click me!
        </DivButton>
        <dl>
          <dt>Attributes of this "button":</dt>
          <dd>It is in fact not a button</dd>
          <dd>Recognized as a button by the screen reader because of the role "button"</dd>
          <dd>Tabable because of tab index is set</dd>
          <dd>Might not be activated with the keyboard since it is not an actual button. You need to implement key press features yourself.</dd>
          <dd>Does not have any hover state or different cursor</dd>
        </dl>
      </section>
      <section>
        <h2>An actual button</h2>
        <StyledButton  onClick={() => {
          window.alert('Button clicked')
        }}>
          Click me!
        </StyledButton>
        <dl>
          <dt>Attributes of the button element:</dt>
          <dd>Tabable</dd>
          <dd>Usable with a keyboard</dd>
          <dd>Has the arrow cursor by default</dd>
        </dl>
      </section>
    </article>
    <SlideNavigator previousIndex={6} nextIndex={8} />
  </Slide>

);

export default Slide7;