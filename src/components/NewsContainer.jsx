import React from "react";
import NewsItem from "./NewsItem";
function NewsContainer(props) {
  const { datas } = props

  if (!datas) return <div>loading...</div>

  const listItems = datas.map((item, index) => (
    <NewsItem
      key={index}
      name={item.name}
      description={item.description}
      price={item.price}
      amount={item.amount}
    />
  ))

  return <div> {listItems}</div>;
}

export default NewsContainer;
