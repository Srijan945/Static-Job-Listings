import React from "react";
import './css/RoleRequirements.css';
function RoleRequirements({items,setItems}){

    function handleClick(item){
       
        setItems(function(prevItems){

            const result = prevItems.find(function(prevItem){
                return prevItem===item;
            });
            if(result === undefined)
            return [...prevItems,item];

            return prevItems;
        });
    }
    return (
        <ul>
            {items.map(function(item,index){
                return <li onClick={() => handleClick(item)} className='company__item' key={index}>{item}</li>;
            })}
        </ul>
    );
}

export default RoleRequirements;