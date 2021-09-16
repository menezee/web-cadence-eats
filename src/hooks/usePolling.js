import { useEffect, useState } from 'react';

function usePolling(fn, interval) {
  const [response, setResponse] = useState(null);
  
  useEffect(() => {
    (async () => {
      const intervalId = setInterval(async () => {
        const res = await fn();
        if (res !== undefined) {
          setResponse(res);
          clearInterval(intervalId);
        }
      }, interval);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return response;
}

export default usePolling;
