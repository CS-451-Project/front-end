import React, { useState } from 'react'
import UseFetch from './UseFetch';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// import PasswordChecklist from "react-password-checklist"

const LoginWindow = () => {

    const navigate = useNavigate();

    // use state to store the username, password and passwordError and set the initial value to an empty string
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // function to handle the submit button
    const handleSubmit = (e) => {
        // prevent the default action of the submit button
        // this is to prevent the page from refreshing when the submit button is clicked
        e.preventDefault();
        
        let user = {Email, Password};

        fetch(`https://localhost:7000/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
            })
            // head
            .then(response => {
                if (response.ok) {
                // handle successful response
                    return response.text();
                } 
                else {
                // handle error response
                    throw new Error('Username or password is incorrect or user does not exist');
                }
            })
            // body (function)
            .then(data => {
                localStorage.setItem('userId', data);
                navigate(`/`);
                // window.location.reload();
                toast.success('Logged In', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            ).catch(error => {
                console.error('Error:', error);
                setError(error.message);
            });

        // navigate(`/`);

    };

  return (
    <div>
        <div className='border bg-gray-100 p-4 '>
            <div className='flex justify-center pb-4'>
                <h1 className='font-bold text-2xl'>
                    Login
                </h1>
            </div>
            <div>
                {error && <p className='text-red-500'>{error}</p>}
            </div>
            <div className=''>
                {/* // form to handle the username and password */}
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    {/* // username input */}
                    {/* //the label tag is used to label the input field */}
                    <label className='flex flex-col py-4'>
                            {/* // the input tag is used to create an input field */}
                            <input 
                            // the type attribute is used to specify the type of input field
                                type="email"
                                // id is used to identify the input field
                                id="email"
                                // value is used to set the initial value of the input field
                                value={Email}
                                // placeholder is used to set the placeholder text of the input field
                                placeholder='Username'
                                // onChange is used to handle the change event of the input field
                                // onchange is a arrow function that takes in an event as a parameter
                                // event.target.value is used to get the value of the input field
                                onChange={(event) => setEmail(event.target.value)}
                                className='border min-w-36 p-2'
                                required
                                />
                    </label>
                    <label className='flex flex-col py-4'>
                            <input 
                                type="password"
                                id="password"
                                value={Password}
                                placeholder='Password'
                                onChange={(event) => setPassword(event.target.value)}
                                className='bordermin-w-36 p-2'
                                required
                            />
                    </label >
                    <div className='flex justify-center'>
                        {/* // the submit button */}
                        <input 
                            // the type attribute is used to specify the type of input field
                            type="submit" 
                            // the value attribute is used to set the value of the input field
                            value="Log In" 
                            className='p-4 border bg-green-400 hover:bg-green-600 duration-200' 
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginWindow