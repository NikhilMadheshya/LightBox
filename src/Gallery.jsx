import React, { useEffect, useState } from 'react';
import Card from './Card';
import Input from './Input';
import LightBox from './LightBox';
import './Gallery.css';

const Gallery=()=>{
const [images,setImages]=useState([]);// use to hold images after fetched
const [loading,setLoading]=useState(true); // use to show loading screen until not fetched
const [searchKey,setSearchKey]=useState('vegetables'); // use for the search key
const [light,setLight]=useState(0); // use for the index
const [dispImage,setDispImage]=useState({imageUrl:''}); // use for to display image with the index value that is light
const [showLight,setShowLight]=useState(false);


// We need this hook if we want to use life cycle feature  
useEffect(()=>{
    const API_KEY='18502932-6c0b76e41e5af9e2b090ba269';
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchKey}`)
    .then(response=>response.json()).then(data=>{
    const {hits}=data;
    setImages(hits);
    setLoading(false);
    }).catch(exception=>console.log(exception));
    
},[images]);

// to display Image on the light box
const displayImage=(index)=>{
    
const image=images[index];
setDispImage({
    imageUrl:image.webformatURL,
});    
setLight(index); 
setShowLight(true);
}

// to close Lightbox
const closeLightBox=()=>setShowLight(false);




return(
    <>
    <Input setSearchKey={setSearchKey} prevSearch={searchKey} /> 
    <section className='imageContainer'>
    {loading===true?
    <div className="loading">
     <span></span><span></span><span></span><span></span>
    </div>:images.map((image,key)=>(
    <Card key={key}  setLight={setLight}  index={key} displayImage={displayImage}  imageUrl={image.webformatURL} download={image.pageURL} views={image.views} likes={image.likes} tags={image.tags} user={image.user} />
    ))}
    </section>
    {showLight===true?<LightBox displayImage={displayImage} light={light} dispImage={dispImage} imagesLength={images.length}  closeLightBox={closeLightBox} />:''
    }
    </>
);

}

export default Gallery;