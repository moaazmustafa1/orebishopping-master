import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../../firebase/config";
import axios from "axios"
const Contact = () => {
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const [clientName, setclientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // ========== Error Messages Start here ============

  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setclientName(e.target.value);
  
    setpost ({...post, [e. target.name]: e. target.value})
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
   
    setpost ({...post, [e. target.name]: e. target.value})
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
  
    setpost ({...post, [e. target.name]: e. target.value})
  };

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handlePost = async (e) => {
    e.preventDefault();
    let userdata={
      clientName:clientName,
      email:email,
      messages:messages
      
    }

    fetch("http://localhost:5000/form/contact",{
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

    console.log("click");
   
    if (clientName && email && EmailValidation(email) && messages) {
      setSuccessMsg(
        `Thank you dear ${clientName}, Your messages has been received successfully. Futher details will sent to you by your email at ${email}.`
      );
    }
    console.log("wait..............................");
    await addDoc(collection(db, user.uid), {
      name:clientName,
      email:email,
      message:messages
    });
    console.log("done....................");
  };
const [post, setpost] = useState({
  name:"",
  email:"",
  message:""

});
  
    
  
  

// const handleSubmit = (e) => {
//   e.preventDefault()
// axios.post ('http://localhost:5000/products', {post})
// .then(response => console. log(response))
// .catch(err => console.log(err))
// }



  return (
   
    <div className="max-w-container mx-auto px-4">
      {user&&<>
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        
        <form className="pb-20" onSubmit={(e) => {
          e.preventDefault()
          console.log("click");
        }
        }>
          <h1 className="font-titleFont font-semibold text-3xl">
            Fill up a Form
          </h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Name
              </p>
              <input
                onChange={handleName}
                value={clientName}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Enter your name here"
                required
                autoFocus
                name="name"
                
                
              />
              
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Email
              </p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="email"
                placeholder="Enter your name here"
                required
                name="email"
              />
             
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Messages
              </p>
              <textarea
                onChange={handleMessages}
                value={messages}
                cols="30"
                rows="3"
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                type="text"
                placeholder="Enter your name here"
                required
                name="message"
              ></textarea>
             
            </div>
            <button
              onClick={ handlePost}
              className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              Post
            </button>
          </div>
        </form>
            
        )}
        </>}
    </div>
   
    
  );


};
export default Contact;
