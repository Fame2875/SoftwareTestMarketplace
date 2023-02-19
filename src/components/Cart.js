// import '../components/CartOutput.css';
function Cart() {
    return (
        <>
            <div className='m-52 ml-96'>
                <h1 className="text-3xl font-bold mb-10 ">Shopping Cart</h1>

                <table className="border-collapse w-full ">
                    <thead>
                        <tr className="font-thin text-neutral-700 text-center ">
                            <th className="w-1/4 font-medium"></th>
                            <th className="font-medium">Name</th>
                            <th className="font-medium">Price</th>
                            <th className="font-medium">Quantity</th>
                            <th className="font-medium">Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <br></br>
                    <tbody>
                        <tr className='text-center'>
                            <td><img src="https://cf.shopee.co.th/file/ed717f1a6930d2aa5b23e481a93ad6e0" alt="Girl in a jacket" width="200" height="150" style={{ borderRadius: "30px" }}></img></td>
                            <td>เสื้อ</td>
                            <td>200</td>
                            <td>
                                <div>
                                    <button class=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        +
                                    </button>
                                    <a class=" bg-white text-gray-800 font-semibold py-2 px-4 rounded ">
                                        3
                                    </a>
                                    <button class=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        -
                                    </button>
                                </div>
                            </td>
                            <td>600</td>
                            <td >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
                                    <path stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <br></br>
                <br></br>
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Order Summary</h5>
                    <div class="mb-2 font-medium text-gray-900 dark:text-white">
                        <a class=" bg-white  text-gray-800 font-semibold py-2 px-4  rounded ">
                            Quantity
                        </a>
                        <a class=" bg-white  text-gray-800 font-semibold py-2 px-4  rounded ">
                            3
                        </a>
                    </div>
                    <div class="mb-2 font-medium text-gray-900 dark:text-white">
                        <a class=" bg-white  text-gray-800 font-semibold py-2 px-4  rounded ">
                            Subtotal
                        </a>
                        <a class=" bg-white  text-gray-800 font-semibold py-2 px-4  rounded ">
                            600
                        </a>
                    </div>
                    <div className='text-3xl font-bold absolute bottom-28 right-64'>
                        <a class=" bg-white  text-gray-800 font-semibold py-2 px-4  rounded ">
                            Total
                        </a>
                        <a class=" bg-white mr-4 text-rose-600 font-semibold py-2 px-4 rounded ">
                            600
                        </a>
                        <a href="#" class=" text-rose-600 text-right w-full sm:w-auto border border-rose-600 hover:bg-rose-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <div class=" font-sans text-sm font-semibold">Buy</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cart;
