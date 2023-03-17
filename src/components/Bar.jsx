import React, { useState, useEffect } from 'react';
import Products from '../components/Products';
import OrderSummary from '../components/OrderSummary';
import { fetchProducts } from '../components/apiCart';

const Bar = () => {
    const [items, setItems] = React.useState(null);

    React.useEffect(() => {
        fetchProducts(setItems)
      }, []);

    if (!items) return null;

    return (
        <div className='m-52 ml-96'>
                <h1 role="heading" aria-level="1" className="text-3xl font-bold mb-10 ">Shopping Cart</h1>
                <table className="border-collapse w-full ">
                    <thead data-testid="Table Header">
                        <tr className="font-thin text-neutral-700 text-center ">
                            <th className="w-1/4 font-medium"></th>
                            <th data-testid="NameHeader" value="95" className="font-medium">Name</th>
                            <th data-testid="PriceHeader" className="font-medium">Price</th>
                            <th data-testid="QuantityHeader" className="font-medium">Quantity</th>
                            <th data-testid="TotalPriceHeader" className="font-medium">Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <br></br>
                    <Products products={items} />
                </table>
                <br></br>
                <br></br>
                
                <div class="w-full flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">                  
                    <h5 role="heading" aria-level="5" class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Order Summary</h5>
                    <OrderSummary Allproducts={items} LengthItems={items.length} />
                </div>
        </div>
    );
};
export default Bar;