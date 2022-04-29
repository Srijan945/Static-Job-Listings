import React from "react";

function RoleRequirements({items}){

    return (
        <ul>
            {items.map(function(item,index){
                return <li className='company__item' key={index}>{item}</li>;
            })}
        </ul>
    );
}

export default RoleRequirements;