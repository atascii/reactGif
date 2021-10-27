import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {   

    const [categories, setCategories] = useState(['One Punch']);

    console.log('array categories: ', categories)

    return(
        <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories = {setCategories} />
        <hr/>        
        
        <ul>
            {
               categories.map( (cate, index) => {              
               
                
               return <GifGrid key = {index} category = {cate}/>
            })
            }
        </ul>
        </>        
    );
}

export default GifExpertApp;