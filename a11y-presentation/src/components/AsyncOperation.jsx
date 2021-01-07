import { useState } from 'react';
import styled from 'styled-components';

const ErrorMessageWrapper = styled.div`
  margin-top: 16px;
`
const ErrorMessage = styled.div`
  padding: 12px;
  background-color: #ff8a75;
  border: 2px solid #ff6347;
`;

export const AsyncOperation = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <button onClick={() => {
        setIsLoading(true);
        window.setTimeout(() => {
          setIsError(true);
          setIsLoading(false);
        }, 3000);
      }}>
        {isLoading ? <span>betaler...</span> : <span>Pay all my bills</span>}
      </button>
      {
        /* This could also be solved with aria-live. With aria-live you have more control ove rwhen a live region should be announced by the screen reader */
      }
      <ErrorMessageWrapper role="alert">
        {
          isError && (
            <ErrorMessage >
              You aint got no dough!
            </ErrorMessage>
          )
        }
      </ErrorMessageWrapper>
    </div>
  )
};