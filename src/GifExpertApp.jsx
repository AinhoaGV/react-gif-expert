import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        //categories.push(newCategory); // NO! Evitar utilizar push porque hace mutaciones
        setCategories( [newCategory, ...categories] );//Utilizar el operador spread y con desestructuración
        //setCategories( cat => [...categories, 'Valorant'] );//Otro método con desestructuración
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) }
            />
            { categories.map( category => (
                <GifGrid key={ category }
                category={ category } />
                ))
            }
                
        </>
    )
}