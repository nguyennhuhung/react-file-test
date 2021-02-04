import React from 'react';
import '../App.css'
import buyHeadPhone from './buyHeadPhone';

const Product = (props) => {
    return (
        <div className='container'>
           <div className="headphone">
            <img src={props.img} alt=''/>
            <div className="text-container">
                <p>{props.title}</p>
                <p>{props.price}</p>
            </div>
            {props.type === 'muaban' ? <button onClick={buyHeadPhone(props.id)}>Mua Hàng</button> : ''}
            </div>
        </div>
    )
}

export default Product;