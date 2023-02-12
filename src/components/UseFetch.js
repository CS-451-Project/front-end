import React, { useState, useEffect } from "react";

const UseFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(url, options);
    //     const json = await response.json();
    //     setData(json);
    //     console.log(data)
    //     setLoading(false);
    //   } catch (error) {
    //     setError(error);
    //     setLoading(false);
    //   }
    // };
    
    // fetchData();

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setData(json);
          console.log(data)
      })
      .catch(error => {
        setError(error);
          setLoading(false);
      });

  }, [url, options]);

  return { data, loading, error };
};

export default UseFetch;