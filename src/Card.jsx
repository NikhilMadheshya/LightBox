import React from 'react';

const Card=({index,displayImage,imageUrl,views,likes,download,tags,user,setLight})=>{
return(
    <div className='card'>
     <img src={imageUrl} alt={imageUrl} onClick={()=>{ displayImage(index); }} />
     <h1>{user}</h1>

     <div className='ratings'>
      <div className='views'>
       <span className='fa fa-eye'></span>
       <span>{views}</span>
      </div>
      <div className='likes'>
       <span className='fa fa-heart'></span>
       <span>{likes}</span>
      </div>
     </div>
     <a id='download' href={download} >download</a>
    </div>
)
}

export default Card;