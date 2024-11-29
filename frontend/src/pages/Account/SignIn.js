// @ts-nocheck
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { json, Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // ============= use navigate =============
  const navigate = useNavigate();
  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [haserror, sethaserror] = useState(false);
  const [erorrr, seterorrr] = useState("");

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // ============= Event Handler End here ===============
  const handleSignUp = (eo) => {
    eo.preventDefault();
    let userdata={
      email:email,
      password:password
    }

    fetch("http://localhost:5000/form/search",{
      method:'POST',
      headers:{
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(userdata)
     })
    .then(response => response.json())
      .then(data  => 
        console.log(data)
    )
      
      .catch(error => console.error(error));

  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        sethaserror(true);
        seterorrr(errorMessage);
        console.log(errorMessage);
      });

    // ============== Getting the value ==============
  };
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-full lgl:w-1/2 h-full">
        <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center flex-col" 
          
        >
          <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
              Sign in
            </h1>
            <div className="flex flex-col gap-3">
              {/* Email */}
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Email
                </p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="email"
                  placeholder="moaaz@email.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Password
                </p>
                <input
                  onChange={handlePassword}
                  value={password}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="password"
                  placeholder="enter password"
                  required
                />
              </div>

              <button
                onClick={handleSignUp}
                className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
              >
                Sign In
              </button>
              <p className="text-sm text-center font-titleFont font-medium">
                Don't have an Account?{" "}
                <Link to="/signup">
                  <span className="hover:text-blue-600 duration-300">
                    Sign up
                  </span>
                </Link>
              </p>
              {haserror&& (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic ml-12 mt-20 ">!</span>
                      {erorrr}
                    </p>
                  )}
            </div>
            
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default SignIn;
