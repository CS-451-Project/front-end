import React, { useState } from 'react'
import PasswordChecklist from "react-password-checklist"

const LoginWindow = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        // Tests validation based on regex above.
        if (!passwordValidation.test(password)) {
        setPasswordError(
            'Password must contain at least 8 characters, including 1 letter, 1 number, and 1 special character (@$!%*#?&).'
        );
        return;
        }
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        // Perform authentication here.
    };

  return (
    <div >
        <div className='border bg-gray-100 p-4 '>
            <div className='flex justify-center pb-4'>
                <h1 className='font-bold text-2xl'>
                    Login
                </h1>
            </div>
            <div className=''>

                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label className='flex flex-col py-4'>
                            <input 
                                type="text"
                                id="username"
                                value={username}
                                placeholder='Username'
                                onChange={(event) => setUsername(event.target.value)}
                                className='border min-w-36 p-2'
                                />
                    </label>
                    <label className='flex flex-col py-4'>
                            <input 
                                type="password"
                                id="password"
                                value={password}
                                placeholder='Password'
                                onChange={(event) => setPassword(event.target.value)}
                                className='bordermin-w-36 p-2'
                            />
                    </label >
                    <div className='flex justify-center'>
                        <input type="submit" value="Log In" className='p-4 border bg-green-400 hover:bg-green-600 duration-200' />
                    </div>
                    
                </form>

            </div>
            
        </div>
    </div>
  )
}

export default LoginWindow