import React, { useState, useEffect } from 'react'
import UseFetch from '../components/UseFetch';
import ProtoDemo from '../components/ProtoDemo.js';

const HomePage = () => {
    const [obj, setObj] = useState({
        "Acending": true,
    });
    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);

    // const [requestOptions, setRequestOptions] = useState({ method: "POST ", headers: {"Content-Type": "application/json"}, body: JSON.stringify({})});

    // const { data, loading, error } = UseFetch("https://localhost:7000/api/fundraiser", requestOptions);
    // const data = [
    //     { id: 1, title: "John" },
    //     { id: 2, title: "Jane" },
    //     { id: 3, title: "Bob" }
    // ];
    useEffect(() => {
        fetch(`https://localhost:7000/api/fundraiser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
        })
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setData(data);
        setTags(data.tags);
        }
    );

    }, [])

    // check if data is null or undefined before calling map()
    // const listItems = data ? data.map((item) => (
    //     <li key={item.fundraiserId}>{item.title}</li>
    // )) : null;
    // console.log(data)

    return (
        <div className='flex justify-center pt-4'>
            {/* <ProtoDemo /> */}
            {data.map((fundraiser)=>{   
                return (
                    <div>
                        <h1>{fundraiser.goalTargetAmount}</h1>
                    </div>
                );
            })} 
            {/* {listItems} */}
        </div>
    )
}

export default HomePage;