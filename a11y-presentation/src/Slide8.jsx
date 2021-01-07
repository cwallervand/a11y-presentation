import styled from 'styled-components';

import { Slide } from './components/Slide';
import { SlideNavigator } from './components/SlideNavigator';
import { ShowMore } from './components/ShowMore';


const Slide8 = () => (
  <Slide title="Advanced user experiences">
    <article>
      <h2>With great UX comes great responsibility!</h2>
      <p>
        We create great user experiences for our customers, but not all our customers always the same great and intuitive experience.
        Some times it is easy to forget that the advanced user interactions we create need to be intuitive for everyone.
        This can be difficult to achieve, especially for those more advanced operations. Lets look at how we can solve some typical scenarios.
      </p>
      <section>
        <h3>Show more content with a button</h3>
        <ShowMore  />
        <p>
          Now a question might arrise: Should the newly rendered content be read by the screen reader automatically ?
          There is no one true answer to this but a rule of thumb is that if the content is of importance to the user, then the screen reader should read the content autmotically.
          In this case I would argue that since the user has pressed a button that indicates that more content will be displayed there is no need to announce that content automatically.
          But let's check out how this might works anyway.
        </p>
        <ShowMore ariaLive="polite" />
        <p>
          When the dynamic content is read can be set using "polite" or "assertive". Assertive reads the content right away.
        </p>
      </section>
    </article>
    <SlideNavigator previousIndex={7} nextIndex={9} />
  </Slide>

);

export default Slide8;