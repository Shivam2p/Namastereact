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
      <div className="res-card" style={{
        backgroundColor: "#f0f0f0",
      }}>
        <img className="res-logo" src={ Cdn_url +cloudinaryImageId }
          alt="Biryani"
          />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo} </h4>
        <h4>{slaString} </h4>
        
       
      </div>
    )
  }

export default RestaurantCard