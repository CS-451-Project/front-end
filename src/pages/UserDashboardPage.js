import React, {useState, useEffect} from 'react';
import {  useParams } from "react-router-dom";
import { CgProfile } from 'react-icons/cg'


const UserDashboardPage = () => {
    const [user, setUser] = useState([]);
    const {userId} = useParams();
    const userUrl = `https://localhost:7000/api/user/${userId}`;

    // Get the user
    useEffect(() => {
        fetch(userUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setUser(data);
        }
    );

    }, [])

    return (
        <div>
            {/* USERID:---
            {userId} */}
            <div className='pl-4'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <CgProfile  size={40} />
                            </td>
                            <td className='pl-4 flex flex-col flex-wrap'>
                                <div className='flex font-bold'>{user.firstName + " " + user.lastName}</div>
                                <div className='flex'>{user.email}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default UserDashboardPage
