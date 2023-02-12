import React from 'react'
import UseFetch from './UseFetch';

const ProtoDemo = () => {
    const { data, loading, error } = UseFetch('https://localhost:3000/api/fundraisers');
  console.log(data)
  return (
    <div>
        {data}
    </div>
  )
}

export default ProtoDemo;