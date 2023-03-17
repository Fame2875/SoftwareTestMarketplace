import React from "react";
import NewItem from "../components/Cart";

export default function ProductContainer_forCart(Prop) {
    const { products } = Prop;

    if (!products) return <div>loading...</div>;

    const listItems = products.map((item, index) => <NewItem
        key={index}
        URLimg={item.URLimg}
        name={item.name}
        Price={item.Price}
        Quantity={item.Quantity}
    />);

    return <tbody>{listItems}</tbody>;
}