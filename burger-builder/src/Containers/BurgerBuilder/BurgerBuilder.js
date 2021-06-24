import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../services/redux-store/actions/burger-builder";

import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/BuildControls/BuilldControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "./../../Components/OrderSummary/OrderSummary";
import Spinner from "../../Components/UI/Spinner/Spinner";

function BurgerBuilder(props) {
  const [orderNow, setOrderNow] = useState(false);
  const [orderProcess, setOrderProcess] = useState(false);
  console.log();
  useEffect(() => {
    props.resetBurger();
  }, []);

  const purschaseHandler = () => {
    if (props.isAuth) {
      setOrderNow(true);
    } else {
      props.history.push("/signup");
      props.setOrderProgress();
    }
  };

  const closeModalHandler = () => {
    setOrderNow(false);
  };

  const purchaseContinued = () => {
    props.history.push("/checkout");
  };

  return (
    <Fragment>
      <Burger ingredients={props.ingredients} />
      <BuildControls
        add={props.addIngrHandler}
        remove={props.removeIngrHandler}
        ingredientsCount={props.ingredients}
        totalPrice={props.totalPrice}
        purchase={purschaseHandler}
        isAuth={props.isAuth}
      />
      <Modal
        showing={orderNow}
        closeModal={closeModalHandler}
        orderProcess={orderProcess}
      >
        {orderProcess ? (
          <Spinner />
        ) : (
          <OrderSummary
            ingredients={props.ingredients}
            price={props.totalPrice.toFixed(2)}
            cancelOrder={closeModalHandler}
            purchaseContinued={purchaseContinued}
          />
        )}
      </Modal>
    </Fragment>
  );
}

function mapPropsFromStore(store) {
  return {
    ingredients: store.orderInfoRed.ingredients,
    totalPrice: store.orderInfoRed.totalPrice,
    isAuth: store.authRed.auth,
  };
}

function mapActions(dispatch) {
  return {
    addIngrHandler: (ingr) =>
      dispatch({
        type: actions.SET_INGREDIENTS,
        ingrType: ingr,
      }),

    removeIngrHandler: (ingr) =>
      dispatch({
        type: actions.REMOVE_INGREDIENTS,
        ingrType: ingr,
      }),

    resetBurger: () => dispatch(actions.RESET_BURGER()),
    setOrderProgress: () => dispatch(actions.SIGNUP_ORDER_PROGRESS()),
  };
}

export default connect(mapPropsFromStore, mapActions)(BurgerBuilder);
