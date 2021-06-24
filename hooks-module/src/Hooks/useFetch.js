import { useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const sendRequest = (url, method, body, headers, query) => {
    setLoading(true);
    const fullUrl = query ? url + query : url;
    fetch(fullUrl, { method: method, body: body, headers: headers })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  const clearAll = () => {
    setData(null);
    setError(false);
  };

  return {
    data: data,
    isLoading: isLoading,
    isError: isError,
    clearAll: clearAll,
    send: sendRequest,
  };
}

export default useFetch;
