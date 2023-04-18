import React, {useState, useEffect} from 'react';
import {  useParams } from "react-router-dom";
import UserFundraiserCarousel from '../components/UserDashboardPageComponents/UserFundraiserCarousel';
import { CgProfile } from 'react-icons/cg'
import editButtonImage from '../imgs/icons8-edit-48.png'

const UserDashboardPage = () => {
    const [user, setUser] = useState([]);
    const [userFundraisers, setUserFundraisers] = useState([]);
    const {userId} = useParams();
    const userUrl = `https://localhost:7000/api/user/${userId}`;
    const userFundraisersUrl = `https://localhost:7000/api/user/${userId}/fundraiser`

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
        .then(data => {
        setUser(data);
        }
    );

    }, [])

    // Get the fundraisers
    useEffect(() => {
        fetch(userFundraisersUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            })
            //head
            .then(response => response.json())
            .then(data => {
            setUserFundraisers(data);
            console.log(userFundraisers)
            }
        );
    
    }, [])

    return (
        <div className=' pt-12'>
            <div className='px-16'>
                <div className='text-5xl'>Welcome back, {user.firstName}</div>
                    <div className='text-3xl pt-10'>Your Information</div>
                    <div className='pl-4 pt-8'>
                        <table>
                        <tbody>
                        <tr>
                            <td>
                                <CgProfile  size={40} />
                            </td>
                            <td className='pl-4 flex flex-col flex-wrap'>
                                <div className='flex text-lg'>{user.firstName + " " + user.lastName}</div>
                                <div className='flex text-lg pt-2'>{user.email}</div>
                            </td>
                            <td>
                                <button className='pl-8'>
                                    <img src={editButtonImage} className='w-8'></img>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                <div className='text-3xl pt-10'>Your Fundraisers</div>
            </div>
            
            <div className='' data-testid="carousel-test-id">
                
                <UserFundraiserCarousel data={userFundraisers}/>
            </div>
        </div>
        
    )
}

export default UserDashboardPage
