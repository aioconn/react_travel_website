import React from 'react'
import '../../App.css'

const Products = () => {
    return(
        <div style={{
            backgroundImage: "url(/images/img-2.jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='products'>PRODUCTS</h1>
        </div>
    );
};

export default Products