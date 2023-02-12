import React from 'react'
import UseFetch from './UseFetch';

const ProtoDemo = () => {
    const { data, loading, error } = UseFetch(
    "https://api.example.com/data",
    {
      method: "GET",
    }
  );
  return (
    <div>
        
    </div>
  )
}

export default ProtoDemo;