import React, { useState } from 'react'
import UseFetch from './UseFetch';
import Button from './Button';

const ProtoDemo = () => {
  // deconstructs the data, loading, and error from the UseFetch function
  // data is the data from the fetch
  // this sets the data given from the fetch to the data variable
  // same with loading and error
  const [requestOptions, setRequestOptions] = useState({});
    const { data, loading, error } = UseFetch('https://localhost:7000/api/fundraisers');
    const handleClick = () => {
        setRequestOptions({ method: "GET"}); 
    };
  return (
    <div>
        {/* {requestOptions}
        {data}
        {loading}
        {error} */}
        <Button title="GET Data" click={handleClick}/>
    </div>
  )
}

export default ProtoDemo;