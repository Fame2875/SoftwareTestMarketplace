import React from "react";
import OrderSum from "../components/OrderSummary_page";

export default function OrderSummary(Prop) {
    const { Allproducts } = Prop;
    if (!Allproducts) return <div>loading...</div>;

    const listItems = Allproducts.map((item, index) => <OrderSum
        key={index}
        Price={item.Price}
        Quantity={item.Quantity}
    />);
    return <div>{listItems}</div>;
}