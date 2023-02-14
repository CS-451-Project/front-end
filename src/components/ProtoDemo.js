import React from "react";
import UseFetch from "./UseFetch";

const ProtoDemo = () => {
  // deconstructs the data, loading, and error from the UseFetch function
  // data is the data from the fetch
  // this sets the data given from the fetch to the data variable
  // same with loading and error
  const { data } = UseFetch("https://localhost:7000/api/fundraisers");
  console.log(data);
  return <div>{data}</div>;
};

export default ProtoDemo;
