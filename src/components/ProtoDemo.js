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
        {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  )
}

export default ProtoDemo;