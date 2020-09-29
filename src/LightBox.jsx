import React,{useState} from 'react';


const LightBox=({displayImage,light,dispImage,imagesLength,closeLightBox})=>{

return(
    <section className='lightBox'>
        <i className='fa fa-remove' onClick={closeLightBox}></i>
       <img src={dispImage.imageUrl} alt={dispImage.imageUrl} />
       <div className='carousel fa fa-arrow-left' onClick={()=>{

        let decrment=light-1;
        if(decrment<0)
        {
            decrment=imagesLength-1;
        }
        displayImage(decrment);


       }}></div>
       <div className='carousel fa fa-arrow-right' onClick={()=>{
            let increment=light+1;
            if(increment>imagesLength-1)
            {
                increment=0;
            }
            displayImage(increment);

       }}></div>
    </section>
);
}

export default LightBox;