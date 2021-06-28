import React from 'react';
import './Card.css';

function Card(props) {
    const item = props.input.split('');
    return (
        <div className='container'>
            {item.map((item)=>(
                <div className='card'>
                    {item}
                </div> 
            ))}
        </div>
    )
}

export default Card
