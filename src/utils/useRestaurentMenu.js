import React, { useEffect ,useState} from 'react'
import { menuApi } from './constant';

const useRestaurentMenu=(resid)=>{
    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{fetchMenu()},[]);
    
  const fetchMenu = async () => {
    try {
      const data = await fetch(`${menuApi}${resid}&catalog_qa=undefined&submitAction=ENTER#`);
      const json = await data.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

    return resInfo;


}

export default useRestaurentMenu;