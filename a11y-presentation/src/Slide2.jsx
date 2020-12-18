import { Slide } from './components/Slide';
import { SlideNavigator } from './components/SlideNavigator';


const Slide2 = () => (
  <Slide title="Navigation" skipLinks={false}>
    <p>
      Navigation around is probably what we do most on the internet so it should be easy for everyone.
      So, what does that mean? In my opinion that means:
    </p>
    <ul>
      <li>Site should have a logical structure</li>
      <li>Interactive elements should have intuitive text, both for screen readers and eyes</li>
      <li>All interactive elements should be accessible with a keyboard</li>
    </ul>
    <SlideNavigator previousIndex={1} nextIndex={3} />
  </Slide>
);

export default Slide2;