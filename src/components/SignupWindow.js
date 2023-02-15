import React, { useState} from 'react'
import PasswordChecklist from "react-password-checklist"
import UseFetch from '../components/UseFetch';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const SignupWindow = () => {
    // these are the states that hold the data from the form
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const [passwordError, setPasswordError] = useState('');
    const [ageError, setAgeError] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    let employeeObj = {name, age, address, mobileNumber, username, password, confirmPassword};

    const handleSubmit = (e) => {
        e.preventDefault();
        // const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        // Tests validation based on regex above.
        // if (!passwordValidation.test(password)) {
        // setPasswordError(
        //     'Password must contain at least 8 characters, including 1 letter, 1 number, and 1 special character (@$!%*#?&).'
        // );
        // return;
        // }
        if (age < 21) {
        setAgeError(
            'Must be older than 21'
        );
        return;
        }
        
        console.log(employeeObj);
        // Perform authentication here.
    };

    const registerEmployee = {
        method: "POST",
        // crossorigin: true,    
        // mode: 'no-cors',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(employeeObj)
    };

    const { data, loading, error } = UseFetch("https://localhost:7160/api/employees", registerEmployee);

  return (
    <div>
        {data}
        {loading}
        {error}
        <div className='relative'>
            <div className='border bg-gray-100 p-4 '>
                <div className='flex justify-center pb-4'>
                    <h1 className='font-bold text-2xl'>
                        Sign Up
                    </h1>
                </div>
                <div className='flex flex-col'>

                    <form onSubmit={handleSubmit}>
                        {/* name */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="text"
                                id="name"
                                value={name}
                                placeholder='Enter name'
                                onChange={(event) => setName(event.target.value)}
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* age */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="number"
                                id="age"
                                value={age}
                                placeholder='Enter age'
                                onChange={(event) => setAge(event.target.value)}
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* address */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="text"
                                id="address"
                                value={address}
                                placeholder='Enter address'
                                onChange={(event) => setAddress(event.target.value)}
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* mobile number */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="text"
                                id="mobileNumber"
                                value={mobileNumber}
                                placeholder='Enter mobile number'
                                onChange={(event) => setMobileNumber(event.target.value)}
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* Username */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="text"
                                id="username"
                                value={username}
                                placeholder='Enter Username'
                                onChange={(event) => setUsername(event.target.value)}
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* password */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                placeholder='Enter Password'
                                onChange={(event) => setPassword(event.target.value)}
                                className='bordermin-w-36 p-2'
                                required 
                            />
                            <div className='absolute pt-3 right-5'>
                                {showPassword ? <AiOutlineEye onClick={() => setShowPassword(!showPassword)}/> 
                                : <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)}/>} 
                            </div>
                        </label >
                        {/* confirm password */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                placeholder='Confirm Password'
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                className='bordermin-w-36 p-2'
                                required 
                            />
                            <div className='absolute pt-3 right-5'>
                                {showConfirmPassword ? <AiOutlineEye onClick={() => setShowConfirmPassword(!showConfirmPassword)}/> 
                                : <AiOutlineEyeInvisible onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>} 
                            </div>
                        </label >
                        <div className='pb-4'>
                            {/* // Password checklist component that checks if password is valid */}
                            <PasswordChecklist
                                rules={["minLength","specialChar","number","match"]}
                                minLength={8}
                                value={password}
                                valueAgain={confirmPassword}
                                onChange={(isValid) => {}}
                            />
                        </div>
                        <div className='flex justify-center'>
                            <input type="submit" value="Sign Up" className='p-4 border bg-green-400 hover:bg-green-600 duration-200' />
                        </div>
                        <div>
                            <p className='text-red-500'>{ageError}</p>
                        </div>
                    </form>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SignupWindow;

