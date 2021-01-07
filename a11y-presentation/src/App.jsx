import { Router } from "@reach/router"

import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import Slide6 from './Slide6';
import Slide7 from './Slide7';
import Slide8 from './Slide8';

function App() {
  return (
    <div className="App">
      <Router>
        <Slide1 path="slide1" />
        <Slide2 path="slide2" />
        <Slide3 path="slide3" />
        <Slide4 path="slide4" />
        <Slide5 path="slide5" />
        <Slide6 path="slide6" />
        <Slide7 path="slide7" />
        <Slide8 path="slide8" />
      </Router>
    </div>
  );
}

export default App;
