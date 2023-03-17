import React from 'react'
import { ShoppingCartIcon,PlusSmallIcon,MinusSmallIcon } from '@heroicons/react/24/outline'
import { fetchData } from '../../utils/api'
import { Link } from 'react-router-dom'
import NewsContainer from "../../components/NewsContainer"
function Item() {
  // DATA FROM API
  const [data, setData] = React.useState(null)
  const [count,setCount] =React.useState(1)
  React.useEffect(() => {
    fetchData(setData)
  }, [])
   
  return (
    <div className="flex flex-col  mt-10 px-[10%] items-center w-full  ">
      <div className="mb-10 flex w-full  text-left">
        {'Home > category 1 > category2 > product namme'}
      </div>
        <Link to="/category" className="bg-limegreen text-black py-2 px-4 rounded">
          Go to category
        </Link>
      <div className="flex flex-row space-x-32 w-full  h-full ">
        <div>
          <img src="https://picsum.photos/700/300 " alt="" />
        </div>
        <div className="flex flex-col justify-between  ">
          <div>
            <h1>Product </h1>
            <span>price</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row space-x-5 items-center mb-5">
              <h1>Quantity</h1>
              <div className="flex flex-row border-gray-600 items-center justify-center">
                <button
                  disabled={count == 0}
                  onClick={() => {
                    if(count>0) setCount((prev) => prev - 1)
                  }}
                  className={`border-2 px-3  border-gray-600 hover:bgmain cursor-pointer ${
                    count == 0 &&
                    'cursor-not-allowed bg-slate-600 hover:bg-slate-600'
                  }`}
                >
                  -
                </button>
                <h1 className="border-y-2 px-3 h-full border-gray-600 ">
                  {count}
                </h1>
                <button
                  onClick={() => {
                    setCount((prev) => prev + 1)
                  }}
                  className="border-2 px-3  border-gray-600 hover:bgmain cursor-pointer"
                >
                  +
                </button>
                {/* <button className="hover:bg-gray-500 px-1 border-[1px] border-gray-500">
                  <PlusSmallIcon class="h-full w-6" />
                </button>
                <button
                  className=" px-1 border-[1px] border-gray-500"  >
                  1
                </button>
                <button className="hover:bg-gray-500 px-1 border-[1px] border-gray-500">
                  <MinusSmallIcon class="h-full w-6" />
                </button> */}
              </div>
              <p>pieces available</p>
            </div>
            <div className="flex flex-row space-x-5">
              <button className="flex flex-row border-2 border-gray-500 p-2 rounded-md hover:bgmain">
                <ShoppingCartIcon class="h-6 w-6" />
                <h1>Add to cart</h1>
              </button>
              <button className="border-2 border-gray-500 p-2 rounded-md hover:bgmain">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
                
      <div className="text-left flex flex-row     w-full mt-10">
        <div className=" w-4/6">
          <h1>Product details</h1>
          <p>
            <NewsContainer datas={data} />
          </p>
        </div>
        <div className=" w-1/6"></div>
        <div className=" w-1/6 space-y-12">
          <h1>You may like</h1>
          <img src="https://picsum.photos/150/150 " alt="" />
          <img src="https://picsum.photos/150/150 " alt="" />
        </div>
      </div>
    </div>
  )
}

export default Item