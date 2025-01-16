import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockdata';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';



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

      // console.log(listOfRestaurants);
    return listOfRestaurants?.length===0?(<Shimmer/>):(
      <div className="body">
        <div className="filter">
          <div className='search'>
            <input type='text' className='searchbox' value={searchText} 
             onChange={(e)=>{
              setsearchText(e.target.value);
             }} ></input>
            <button onClick={()=>{
               const filteredresturant= listOfRestaurants.filter((res)=>{
                // console.log(res.info)
                 return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            });
                  setfilteredRestaurant(filteredresturant);
            }}>Search</button>
    
          </div>
        <button className='filter-btn' onClick={()=>{
           const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setfilteredRestaurant(filteredList);
        
        }}>Top Rated</button>
        </div>
        <div className="res-container">
  {
  
  filteredRestaurant?.map((restu,index)=>
   
         {
          // console.log(restu)
          return <RestaurantCard key={restu.info.id} resdata={restu.info}/>}
    )}
  
  
  
        </div>
      </div>
    )
  }

export default Body