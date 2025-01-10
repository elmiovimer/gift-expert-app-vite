import { useEffect, useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch' ]);
    
    
    const validarStringEnArray = (array, valor) => {
        return array.some(item => item.toLowerCase() === valor.toLowerCase());
    }

    const onAddCategory = (newCategory) =>{
        
        // otra manera simple de validar los strings // if (categories.includes(newCategory)) return;
        if(validarStringEnArray(categories, newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    

    return (
        <>
            <h1 className="modern-title">GifExpertApp</h1>

            <AddCategory 
                onNewCategory = {(event) => onAddCategory(event)}

            />

            {
                categories.map( category => ( 
                    <GifGrid 
                        key = {category} 
                        category = {category}
                        
                        />
                ))
            }
        </>
    )
}
