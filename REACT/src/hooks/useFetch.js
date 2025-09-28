import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [loading, setLoading ] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(URL, {method:"GET"});

      if (!response.ok){
        throw new Error ("Rilevato un errore");
      }

      setData(await response.json());

    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=> {
    fetchData();
  }, [URL])

  return {
    data,
    loading,
    error,
    update:fetchData
  }
}

export default useFetch;