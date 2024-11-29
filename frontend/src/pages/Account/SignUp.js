import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
   // ============= use navigate =============
  const navigate = useNavigate();
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [checked, setChecked] = useState(false);
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setErrCountry("");
  };

  // ============= Event Handler End here ===============
  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleSignUp = () => {
    
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a Valid email");
        }
      }
      if (!phone) {
        setErrPhone("Enter your phone number");
      }
      if (!password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 6) {
          setErrPassword("Passwords must be at least 6 characters");
        }
      }
    
      if (!city) {
        setErrCity("Enter your city name");
      }
      if (!country) {
        setErrCountry("Enter the country you are residing");
      }

      // ============== Getting the value ==============
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
      
        city &&
        country

      ) {
        setSuccessMsg(
          `Hello dear ${clientName}, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
        );
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
       
        setCity("");
        setCountry("");

      }
    }
  };
  return (

    ////////////////////////////
    <div className="w-full lgl:w-[500px] h-full  flex items-center justify-center">

      <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
        <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
          <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
            Create your account
          </h1>
          <div className="flex flex-col gap-3">
            {/* client name */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Full Name
              </p>
              <input
                onChange={handleName}
                value={clientName}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="eg. John Doe"
              />
              {errClientName && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errClientName}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Work Email
              </p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="email"
                placeholder="john@workemail.com"
              />
              {errEmail && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errEmail}
                </p>
              )}
            </div>
            {/* Phone Number */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Phone Number
              </p>
              <input
                onChange={handlePhone}
                value={phone}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="008801234567891"
              />
              {errPhone && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errPhone}
                </p>
              )}
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
                placeholder="Create password"
              />
              {errPassword && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errPassword}
                </p>
              )}
            </div>
            {/* Address */}
           
            {/* City */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                City
              </p>
              <input
                onChange={handleCity}
                value={city}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="Your city"
              />
              {errCity && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errCity}
                </p>
              )}
            </div>
            {/* Country */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Country
              </p>
              <input
                onChange={handleCountry}
                value={country}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="Your country"
              />
              {errCountry && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errCountry}
                </p>
              )}
            </div>


            {/* Checkbox */}
            <div className="flex items-start mdl:items-center gap-2">
              <input
                onChange={() => setChecked(!checked)}
                className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                type="checkbox"
              />
              <p className="text-sm text-primeColor">
                I agree terms of the OREBI{" "}
                <span className="text-blue-500">Terms of Service </span>and{" "}
                <span className="text-blue-500">Privacy Policy</span>.
              </p>
            </div>
            <button
              onClick={(eo) => {
                eo.preventDefault();
                let userdata={
                  clientName:clientName,
                  phone:phone,
                  email:email,
                  password:password,
                  city:city,
                  country:country,
                  checked:checked
                }
            
                fetch("http://localhost:5000/form/signup",{
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
            
              
                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    navigate("/");
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    // ..
                  });

              }
              }
              className={`${checked
                ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
            >
              Create Account
            </button>
            <p className="text-sm text-center font-titleFont font-medium">
              have an Account?{" "}
              <Link to="/signin">
                <span className="hover:text-blue-600 duration-300">
                  Sign in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>

  );
};

export default SignUp;
