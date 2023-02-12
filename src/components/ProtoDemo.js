import React from 'react'
import UseFetch from './UseFetch';

const ProtoDemo = () => {
    const { data } = UseFetch('');
  
  return (
    <div>
        {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  )
}

export default ProtoDemo;