import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestauratMenu = (resId)=>{
    // fetch the data

    const [resInfo, setResInfo]= useState(null); // holds a restaurants details

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data= await fetch(MENU_API + resId);

        const jsonData= await data.json();

        setResInfo(jsonData.data);

    }

    return resInfo;
}


export default useRestauratMenu;
