import { useEffect, useState } from 'react';
import request from '../utils/request';

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await request(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
