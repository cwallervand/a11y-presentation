import styled from 'styled-components';

import { Slide } from './components/Slide';
import { SlideNavigator } from './components/SlideNavigator';

const Image = styled.img`
  margin-bottom: 8px;
  width: 100%;
`;

const Figure = styled.figure`
  display: block;
  width: 80%;
  margin: 32px auto;
  max-width: 800px;

  figcaption {
    font-style: italic;
  }
`;

const Slide5 = () => (
  <Slide title="Semantics">
      <article>
        <h2>Use the correct HTML elements</h2>
        <p>
          All those p's, nav's, mains's and article's actually have a purpose; they bring structure and information about the content of a page.
          Using the correct HTML elements is important for screen readers to be able to make meaning out of the page, but it will also help for search engine optimization.
        </p>
        <Figure>
          <Image src="/semantics1.PNG" alt="Example of how the use of basic HTML elements can help search engine optimization and search results" />
          <figcaption>Example of how the use of basic HTML elements can help search engine optimization and search results</figcaption>
        </Figure>
        <p>
          As a bonus, using the correct HTML can also help in making your content look nice in a search result!
        </p>
        <Figure>
          <Image src="/semantics2.PNG" alt="Example of how the use of basic HTML elements can help search engine optimization and search results" />
          <figcaption>Example of how the use of meta information can make your content look nice in search results</figcaption>
        </Figure>
        <p>
          For more information about advanced semantics, take a look at <a href="https://schema.org/docs/gs.html">Schema.org</a>
        </p>
      </article>
    <SlideNavigator previousIndex={4} nextIndex={6} />
  </Slide>

);

export default Slide5;