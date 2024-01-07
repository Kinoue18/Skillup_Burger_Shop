import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";


const addToCartHandler = () => {
    // insert code to cart handler
};

const Menu = () => (
 <MenuCard
    itemNum={1}
    burgerSrc={burger1}
    price={200}
    title="Cheese Burger"
    handler={addToCartHandler}
    delay={0.3}

    itemNum={2}
    burgerSrc={burger2}
    price={210}
    title="Veg Cheese Burger"
    handler={addToCartHandler}
    delay={0.3}

    itemNum={3}
    burgerSrc={burger3}
    price={195}
    title="Burger with fries"
    handler={addToCartHandler}
    delay={0.3}
/>
);

export default Menu;
