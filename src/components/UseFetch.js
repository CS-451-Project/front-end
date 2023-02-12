import React, { useState, useEffect } from "react";

const UseFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        console.log(data)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    
    fetchData();

    // fetch(url)
    //   //head
    //   .then(response => response.json())
    //   //body (function)
    //   .then(data => {
    //     console.log(data);
    //     setData(data);
    //   });

    }, [url])

  return { data };
};

export default UseFetch;