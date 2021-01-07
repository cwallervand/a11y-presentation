import { useState } from 'react';

export const ShowMore = ({ ariaLive }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button aria-expanded={isExpanded} aria-controls="showMore" onClick={() => {setIsExpanded(!isExpanded)}}>
        Show more
      </button>
      { /* The element that contains the dynamic content sohuld be rendered at all times, else aria live feature wont work */ }
      <div id="showMore" aria-live={ariaLive ? ariaLive : null}>
        { isExpanded && <span>Here is some additional content</span> }
      </div>
    </div>
  )
};

