import React from 'react'
import { Cdn_url } from '../utils/constant';


const RestaurantCard=(props)=>{
 
    const { resdata } = props;
    
    const{ cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      } = resdata;

      const {slaString}=resdata.sla;
   
      return (
      <div className="res-card m-4 p-4 w-[260px] rounded-xl bg-gray-300 hover:bg-gray-400 transiton" >
        <img className="res-logo rounded-xl" src={ Cdn_url +cloudinaryImageId }
          alt="Biryani"
          />
        <h3 className='font-bold py-5 text-xl'>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo} </h4>
        <h4>{slaString} </h4>
        
       
      </div>
    )
  }

export default RestaurantCard