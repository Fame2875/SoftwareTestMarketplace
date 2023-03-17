import React  from 'react'

function CategoryCardHome({ categoryName, srcimage, linkto }) {

  return (
    <>
      <div className="flex flex-col w-full h-52 hover:scale-110 transition-all cursor-pointer">
        <img
          alt="Product-Image"
          src={srcimage}
          className="rounded-3xl  min-w-full min-h-full object-cover"
        ></img>
        <span className="text-base font-bold text-center ">{categoryName}</span>
      </div>
    </>
  )
}

export default CategoryCardHome
