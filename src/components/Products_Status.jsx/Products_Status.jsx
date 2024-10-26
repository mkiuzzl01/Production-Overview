import React from 'react';
import useProducts from '../../lib/useProducts';

const Products_Status = () => {
    const {orders} = useProducts();
    console.log(orders);

    return (
        <div>
            this is Products status page
        </div>
    );
}

export default Products_Status;
