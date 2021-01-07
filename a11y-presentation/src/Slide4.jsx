import { Slide } from './components/Slide';
import { SlideNavigator } from './components/SlideNavigator';


const Slide4 = () => (
  <Slide title="Navigation continued">
    <p>
      <b>That is way better!</b>
    </p>
    <SlideNavigator previousIndex={3} nextIndex={5} />
  </Slide>

);

export default Slide4;