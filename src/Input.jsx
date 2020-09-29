import React, { useRef } from 'react';

const Input=({setSearchKey,prevSearch})=>{
const input=useRef();
const inputSearch=(e)=>e.key==='Enter'&&input.current.value?setSearchKey(input.current.value):setSearchKey(prevSearch);

return(
    <header>
        <div className='search'>
            <input ref={input} type='text' placeholder='Search Image' onKeyDown={inputSearch} />
            <button className='fa fa-search' onClick={()=>setSearchKey(input.current.value)}></button>
        </div>
    </header>
);   
}


export default Input;