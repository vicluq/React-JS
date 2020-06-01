import React from "react";
import "./Burger.css";
import Ingredient from "./BurgerIngredient./BurgerIngredient";

const burger = (props) => {
  let AddedIngredients = Object.keys(props.ingredients)
    .map((ingr) => {
      return [...Array(props.ingredients[ingr])].map((x, index) => (
        <Ingredient key={index + ingr} type={ingr} />
      ));
    })
    .flat();

  if (AddedIngredients.length === 0) {
    AddedIngredients = (
      <p className="no-ingr-message">Start Adding Your Ingredients...</p>
    );
  }

  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {AddedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default burger;
