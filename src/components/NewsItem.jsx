import React from "react";

function NewsItem(props) {

  const { name, price, description, amount } = props

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white">
      <p className="text-gray-900 text-xl leading-tight font-medium mb-2">
        {name}- {price} - {amount} -{description}
      </p>
    </div>
  )
}

export default NewsItem;
