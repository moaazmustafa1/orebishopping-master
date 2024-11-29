// @ts-nocheck
import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";

import Sale from "../../components/home/Sale/Sale";


import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase/config";


const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  
  return (

    <div className="w-full mx-auto">
      {user && <>
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        
      </div>
      </>
}
    </div>
    
  );
};

export default Home;
