import React, { useState } from 'react';

function Itemcard({ productname, productdetail, producttype }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    // Handle click event here
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md h-100 transition-all duration-300 ease-in-out transform hover:shadow-lg cursor-pointer"
        style={{
          boxShadow: isHovered ? '0px 0px 10px 5px gray' : 'none',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img className="object-cover w-full h-48" src="mockimgs/PTO.png" alt="" />
        <div className="p-6">
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">{productname}</h2>
            </div>
            <div>
              <span className="text-gray-400">{producttype}</span>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-500">{productdetail}</p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center gap-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Itemcard;