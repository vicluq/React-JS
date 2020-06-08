import React, { Component, Fragment } from "react";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/BuildControls/BuilldControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "./../../Components/OrderSummary/OrderSummary";
import storeOrder from "../../services/store-order";
import Spinner from "../../Components/UI/Spinner/Spinner";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    prices: {}, //prices fetched from backend
    totalPrice: 3.25, //sum the rest
    orderNow: false,
    orderSuccess: null,
    orderProcess: false,
    error: false,
  };

  componentDidMount = () => {
    storeOrder
      .get("/ingredientsPrices.json")
      .then(({ data }) => {
        this.setState((oldState) => ({ ...oldState, prices: data }));
      })
      .catch((err) => {
        this.setState((oldState) => ({ ...oldState, error: true }));
      });
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
    this.setState({ orderProcess: true });
    const order_summary = {
      costumer: {},
      ingredients: this.state.ingredients,
      total: this.state.totalPrice,
    };
    storeOrder
      .post("/orders.json", order_summary)
      .then((res) => {
        console.log(res);
        this.setState({ orderProcess: false, orderNow: false });
      })
      .catch((err) => {
        this.setState({ orderProcess: false, orderNow: false });
      });
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
          orderProcess={this.state.orderProcess}
        >
          {this.state.orderProcess ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={this.state.ingredients}
              price={this.state.totalPrice.toFixed(2)}
              cancelOrder={this.closeModalHandler}
              purchaseContinued={this.purchaseContinued}
            />
          )}
        </Modal>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
