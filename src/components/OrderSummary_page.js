import React from "react";

var AllPrice = 0;
var AllQuantity = 0;
var count = 0;

function OrderSummary_page(Prop) {
    const { Price, Quantity } = Prop;

    AllPrice += ((Price * Quantity) / 2);
    AllQuantity += (Quantity / 2);
    count += (1 / 2)

    if (count == 5) {
        return (
            <>
                <div class="mb-2 font-medium text-gray-900 dark:text-white">
                    <a data-testid="Ordersummary Quantity" class=" bg-white  text-gray-800 font-semibold py-2 px-4  rounded ">
                        Quantity
                    </a>
                    <a class=" bg-white  text-gray-800 font-semibold py-2 px-4  rounded ">
                        {AllQuantity}
                        {/* 55 */}
                    </a>
                </div>
                <div data-testid="Ordersummary Subtotal" class="mb-2 font-medium text-gray-900 dark:text-white">
                    <a class=" bg-white  text-gray-800 font-semibold py-2 px-4  rounded ">
                        Subtotal
                    </a>
                    <a class=" bg-white  text-gray-800 font-semibold py-2 px-4  rounded ">
                        {AllPrice}
                        {/* 6745 */}
                    </a>
                </div>
                <div className=' text-3xl font-bold al items-end justify-end flex '>
                    <a class=" bg-white text-gray-800 font-semibold py-2 px-4  rounded ">
                        Total
                    </a>
                    <a data-testid="Ordersummary Total" class=" bg-white mr-4 text-rose-600 font-semibold py-2 px-4 rounded ">
                        {AllPrice}
                        {/* 6745 */}
                    </a>
                    <a href="#" class=" text-rose-600 text-right w-[100px]  border border-rose-600 hover:bg-rose-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <div class=" font-sans text-sm font-semibold">Buy</div>
                    </a>
                </div>
            </>
        );
    }
} export default OrderSummary_page;