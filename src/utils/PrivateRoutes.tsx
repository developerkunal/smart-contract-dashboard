import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'
import { useWeb3React } from "@web3-react/core";

const useAuth=()=>{
  const { active } = useWeb3React();
  return active;
}

const  PrivateRoutes=(props:any) =>{

  const auth=useAuth()

  return auth?<Outlet/>: <Navigate to="/login"/>
}

export default PrivateRoutes;