import React, { Component, Fragment } from "react";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/BuildControls/BuilldControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "./../../Components/OrderSummary/OrderSummary";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    prices: {
      salad: 0.65,
      bacon: 1.15,
      cheese: 1.25,
      meat: 2.35,
    }, //add the prices
    totalPrice: 3.25, //sum the rest
    orderNow: false,
  };

  addIngrHandler = (type) => {
    const newAddAmount = this.state.ingredients[type] + 1;
    this.setState((oldState) => ({
      ...oldState,
      ingredients: {
        ...oldState.ingredients,
        [type]: newAddAmount,
      },
      totalPrice: oldState.totalPrice + this.state.prices[type],
    }));
  };

  removeIngrHandler = (type) => {
    const newAmount =
      this.state.ingredients[type] === 0 ? 0 : this.state.ingredients[type] - 1;

    this.setState((oldState) => ({
      ...oldState,
      ingredients: {
        ...oldState.ingredients,
        [type]: newAmount,
      },
      totalPrice: oldState.totalPrice - this.state.prices[type],
    }));
  };

  purschaseHandler = () => {
    this.setState((oldState) => ({ ...oldState, orderNow: true }));
  };

  closeModalHandler = () => {
    this.setState((oldState) => ({ ...oldState, orderNow: false }));
  };

  purchaseContinued = () => {
    alert("purchased!");
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngrHandler}
          remove={this.removeIngrHandler}
          ingredientsCount={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          purchase={this.purschaseHandler}
        />
        <Modal
          showing={this.state.orderNow}
          closeModal={this.closeModalHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice.toFixed(2)}
            cancelOrder={this.closeModalHandler}
            purchaseContinued={this.purchaseContinued}
          />
        </Modal>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
