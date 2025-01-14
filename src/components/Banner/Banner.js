import React, { useEffect, useState } from 'react'


import { API_KEY ,imageUrl } from '../../constants/constants'
import axios from '../../axios'

import "./Banner.css"
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/day?language=en-US&api_key=${API_KEY}`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
 
    
    
  },[])
  return (

    <div style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path:""})` }}
         className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>my play list</button>

            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>

        </div>
        <div className="fade_bottom">

        </div>
    
        

      
    </div>
  )
}

export default Banner
