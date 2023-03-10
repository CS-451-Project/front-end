import React, { useState } from 'react'
import PasswordChecklist from "react-password-checklist"
import UseFetch from '../components/UseFetch';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const SignupWindow = () => {

    const [employee, setEmployee] = useState({
        name:'',
        age:0,
        address:'',
        mobileNumber:'',
        username:'',
        password:'',
    });

    const [confirmPassword, setConfirmPassword] = useState('');
    const [setPasswordError] = useState('');
    const [ageError, setAgeError] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // const [requestOptions, setRequestOptions] = useState({});
    // const { data, loading, error } = UseFetch("https://localhost:7160/api/employees", requestOptions);
    
    // UseFetch("https://localhost:7160/api/employees", requestOptions);


    const handleSubmit = (e) => {
        // Prevents page from refreshing.
        e.preventDefault();
        const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        // Tests validation based on regex above.
        if (!passwordValidation.test(employee.password)) {
        setPasswordError(
            'Password must contain at least 8 characters, including 1 letter, 1 number, and 1 special character (@$!%*#?&).'
        );
        return;
        }
        if (employee.age < 21) {
        setAgeError(
            'Must be older than 21'
        );
        return;
        }
        
        // setRequestOptions({ method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(employee) });
        
        // Perform authentication here.
    };

    
  return (
    <div>

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
                                name="name"
                                value={employee.name}
                                placeholder='Enter name'
                                onChange={(event) => 
                                        setEmployee({
                                            // This is the spread operator. It copies the values of the object into a new object.
                                            // so we can change the properties of the object without changing the original object.
                                        ...employee,
                                        [event.target.name]: (event.target.value),
                                        })
                                    }
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* age */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="number"
                                pattern="[0-9]*"
                                name="age"
                                value={employee.age}
                                placeholder='Enter age'
                                onChange={(event) => 
                                        setEmployee({
                                            // This is the spread operator. It copies the values of the object into a new object.
                                            // so we can change the properties of the object without changing the original object.
                                        ...employee,
                                        [event.target.name]: (event.target.value),
                                        })
                                    }
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* address */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="text"
                                name="address"
                                value={employee.address}
                                placeholder='Enter address'
                                onChange={(event) => 
                                        setEmployee({
                                            // This is the spread operator. It copies the values of the object into a new object.
                                            // so we can change the properties of the object without changing the original object.
                                            ...employee,
                                        [event.target.name]: (event.target.value)
                                        })
                                    }
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* mobile number */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="text"
                                name="mobileNumber"
                                value={employee.mobileNumber}
                                placeholder='Enter mobile number'
                                onChange={(event) => 
                                        setEmployee({
                                            // This is the spread operator. It copies the values of the object into a new object.
                                            // so we can change the properties of the object without changing the original object.
                                            ...employee,
                                        [event.target.name]: (event.target.value)
                                        })
                                    }
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* Username */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="text"
                                name="username"
                                value={employee.username}
                                placeholder='Enter Username'
                                onChange={(event) => 
                                    setEmployee({
                                        // This is the spread operator. It copies the values of the object into a new object.
                                        // so we can change the properties of the object without changing the original object.
                                        ...employee,
                                    [event.target.name]: (event.target.value)
                                    })
                                }
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* password */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={employee.password}
                                placeholder='Enter Password'
                                onChange={(event) => 
                                    setEmployee({
                                        // This is the spread operator. It copies the values of the object into a new object.
                                        // so we can change the properties of the object without changing the original object.
                                        ...employee,
                                    [event.target.name]: (event.target.value)
                                    })
                                }
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
                                name="confirmPassword"
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
                            <PasswordChecklist
                                rules={["minLength","specialChar","number","match"]}
                                minLength={8}
                                value={employee.password}
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

