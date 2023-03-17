import React from 'react'

function ItemCardHome({ titleName, srcimage, linkto }) {
  return (
    <>
      <div className="flex flex-col h-[400px] w-[300px] hover:scale-105 transition-all cursor-pointer bgmain text-white ">
        <img
          alt="Product-Image"
          src={srcimage}
          className=" w-62 h-72 object-cover"
        ></img>
          <span className="text-2xl font-bold text-center ">{titleName}</span>
        <div className='flex flex-row justify-between p-2'>
          <h1 className='text-xl '>100 บาท</h1>
          <h1 className='text-xl'>ขายแล้ว 1000ชิ้น</h1>
        </div>
      </div>
    </>
  )
}

export default ItemCardHome
