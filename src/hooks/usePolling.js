import { useEffect, useState } from 'react';

function usePolling(fn, interval, adapter) {
  const [response, setResponse] = useState(null);
  
  useEffect(() => {
    (async () => {
      const intervalId = setInterval(async () => {
        const res = await fn();
        if (res !== undefined) {
          
          if (adapter !== undefined) {
            setResponse(adapter(res));
          } else {
            setResponse(res);
          }
          clearInterval(intervalId);
        }
      }, interval);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return response;
}

export default usePolling;
