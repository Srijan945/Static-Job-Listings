import React from 'react';
import './css/Filter.css';
function Filter({items,setItems}){

    function handleClick(){
        setItems([]);
    }
    function handleRemove(item){
        setItems(prevItems => {
            return prevItems.filter(function(ele){
                return ele!==item;
            });
        });
    }
    return (
        <div className='filterBox'>
            <div className='filterBox__tablets'>
                
                {items.map(function(item,index){
                    
                    return (
                        <div key={index} className="tablet">
                            <span className='tablet__name'>{item}</span>
                            <span className='tablet__remove' onClick={() => handleRemove(item)}>
                                <img className='remove__img' src='images/icon-remove.svg' alt='remove'/>
                            </span>
                        </div>
                    );  
                })}
                
            </div>
            <div className='filterBox__clear' onClick={handleClick}>
                <p>Clear</p>
            </div>
        </div>
    );
}

export default Filter;