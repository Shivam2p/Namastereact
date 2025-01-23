import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';



const Body=()=>{
  const[listOfRestaurants, setlistOfRestaurants]=useState([]);
  const[searchText,setsearchText]=useState('');
  const[filteredRestaurant,setfilteredRestaurant]=useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async()=>{
    const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2313245&lng=78.1694957&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const jsona= await data.json();
    
    
    setlistOfRestaurants(  jsona?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(  jsona?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus=useOnlineStatus();

  if(onlineStatus===false){ return (<div>
    <h1>internet not connected</h1>
  </div>) }

      // console.log(listOfRestaurants);
    return listOfRestaurants?.length===0?(<Shimmer/>):(
      <div className="body">
        <div className="filter flex">
          <div className='search m-4 p-4'>
            <input type='text' className='border border-solid border-black' value={searchText} 
             onChange={(e)=>{
              setsearchText(e.target.value);
             }} ></input>
            <button className='px-4 py-1 bg-blue-300 m-4 rounded-lg hover:bg-blue-600 transition' onClick={()=>{
               const filteredresturant= listOfRestaurants.filter((res)=>{
                // console.log(res.info)
                 return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            });
                  setfilteredRestaurant(filteredresturant);
            }}>Search</button>
    
          </div>
          <div className='m-4 p-4 flex items-center ml-240'>
        <button className=' px-4 py-2 bg-blue-300 rounded-lg hover:bg-blue-600 transition' onClick={()=>{
           const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setfilteredRestaurant(filteredList);
        
        }}>Top Rated</button></div>
        </div>
        <div className="flex flex-wrap">
  {
  
  filteredRestaurant?.map((restu,index)=>
   
         {
          // console.log(restu)
         return <Link to={'/resturant/'+restu.info.id} key={restu.info.id}  >    <RestaurantCard  resdata={restu.info}/></Link>
        
         }
    )}
  
  
  
        </div>
      </div>
    )
  }

export default Body