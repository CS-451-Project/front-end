import React, { useState } from "react";

const LoginWindow = () => {
  // use state to store the username, password and passwordError and set the initial value to an empty string
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function to handle the submit button
  const handleSubmit = (e) => {
    // prevent the default action of the submit button
    // this is to prevent the page from refreshing when the submit button is clicked
    e.preventDefault();
    // regex to validate the password
    const passwordValidation =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // Tests validation based on regex above.
    if (!passwordValidation.test(password)) {
      return;
    }
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    // Perform authentication here.
  };

  return (
    <div>
      <div className="border bg-gray-100 p-4 ">
        <div className="flex justify-center pb-4">
          <h1 className="font-bold text-2xl">Login</h1>
        </div>
        <div className="">
          {/* // form to handle the username and password */}
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* // username input */}
            {/* //the label tag is used to label the input field */}
            <label className="flex flex-col py-4">
              {/* // the input tag is used to create an input field */}
              <input
                // the type attribute is used to specify the type of input field
                type="text"
                // id is used to identify the input field
                id="username"
                // value is used to set the initial value of the input field
                value={username}
                // placeholder is used to set the placeholder text of the input field
                placeholder="Username"
                // onChange is used to handle the change event of the input field
                // onchange is a arrow function that takes in an event as a parameter
                // event.target.value is used to get the value of the input field
                onChange={(event) => setUsername(event.target.value)}
                className="border min-w-36 p-2"
              />
            </label>
            <label className="flex flex-col py-4">
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                className="bordermin-w-36 p-2"
              />
            </label>
            <div className="flex justify-center">
              {/* // the submit button */}
              <input
                // the type attribute is used to specify the type of input field
                type="submit"
                // the value attribute is used to set the value of the input field
                value="Log In"
                className="p-4 border bg-green-400 hover:bg-green-600 duration-200"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginWindow;
