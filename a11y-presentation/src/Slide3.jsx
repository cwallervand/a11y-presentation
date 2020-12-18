import { Slide } from './components/Slide';
import { SlideNavigator } from './components/SlideNavigator';


const Slide3 = () => (
  <Slide title="Navigation continued" skipLinks={false} bogusNavigation>
    <p>
      <b>This is not cool! Lets fix it!</b>
    </p>
    <SlideNavigator previousIndex={2} nextIndex={4} />
  </Slide>

);

export default Slide3;