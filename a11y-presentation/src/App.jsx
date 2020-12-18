import { Router } from "@reach/router"

import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';

function App() {
  return (
    <div className="App">
      <Router>
        <Slide1 path="slide1" />
        <Slide2 path="slide2" />
        <Slide3 path="slide3" />
        <Slide4 path="slide4" />
      </Router>
    </div>
  );
}

export default App;
