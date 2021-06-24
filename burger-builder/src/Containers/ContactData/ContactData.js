import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import "./ContactData.css";

import * as actions from "../../services/redux-store/actions/contact-data";

import FormInput from "../../Components/FormInput/FormInput";
import Modal from "../../Components/UI/Modal/Modal";
import Backdrop from "../../Components/UI/BackDrop/BackDrop";
import Spinner from "../../Components/UI/Spinner/Spinner";

function ContactData(props) {
  const selectRef = useRef();

  useEffect(() => {
    console.log(selectRef.current.value);
    props.setInitialDelOpt(selectRef.current.value, props.totalPrice);
  }, []);

  //place order
  const placeOrderHandler = (event) => {
    event.preventDefault();

    const canProceed = Object.values(props.formData).reduce(
      (counter, value) => {
        return counter && value.valid;
      },
      true
    );

    if (canProceed) {
      const order = {
        ...props.formData,
        userId: props.userId,
        orderInfo: {
          ...props.orderInfo,
        },
        date: {
          day: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
        completed: false,
      };

      props.makeOrder(order, props.history, props.token);
    }
  };

  let orderStatus = null;
  if (props.success) {
    orderStatus = (
      <Modal
        showing={props.modal}
        closeModal={() => {
          props.modalSet(null, false);
        }}
      >
        <h2 className="OrderSuccess">We Have Successfuly placed your order</h2>
      </Modal>
    );
  } else if (props.success === false) {
    orderStatus = (
      <Modal
        showing={props.modal}
        closeModal={() => {
          props.modalSet(null, false);
        }}
      >
        <h2 className="OrderFail">Something went wrong try again</h2>
      </Modal>
    );
  }

  let spinner = null;
  if (props.loading) {
    spinner = (
      <>
        <Backdrop showing={props.loading} />
        <Spinner />
      </>
    );
  }

  const canProceed = Object.values(props.formData).reduce((counter, value) => {
    return counter && value.valid;
  }, true);
  return (
    <>
      <div className="ContactDataDiv">
        <form
          onSubmit={placeOrderHandler}
          className="ContactData"
          name="contactDataForm"
        >
          <fieldset>
            <legend>Enter you Contact Info</legend>
            <FormInput
              onchange={props.setName}
              req={true}
              type="text"
              name="name"
              pholder="name..."
              value={props.formData.name.value}
              valid={!!props.formData.name.valid}
            />
            <FormInput
              onchange={props.setEmail}
              req={true}
              type="email"
              name="email"
              pholder="email..."
              value={props.formData.email.value}
              valid={!!props.formData.email.valid}
            />
          </fieldset>
          <fieldset>
            <legend>Enter your Address Info</legend>
            <div className="form-house-info">
              <FormInput
                className="street-input"
                onchange={props.setStreet}
                req={true}
                type="text"
                name="address-street"
                pholder="Street..."
                value={props.formData.street.value}
                valid={!!props.formData.street.valid}
              />
              <FormInput
                className="num-input"
                onchange={props.setNum}
                req={true}
                type="text"
                name="address-num"
                pholder="Num..."
                value={props.formData.num.value}
                valid={!!props.formData.num.valid}
              />
            </div>
            <FormInput
              onchange={props.setPostalCode}
              type="text"
              req={true}
              name="address-postal-code"
              pholder="Postal Code..."
              value={props.formData.postalCode.value}
              valid={!!props.formData.postalCode.valid}
            />
          </fieldset>
          <fieldset>
            <legend>Delivery Preference</legend>
            <select
              required
              name="deliveryOption"
              onChange={props.setDelOpt.bind(null, props.totalPrice)}
              defaultValue="slower=0.6"
              ref={selectRef}
            >
              <option value="fastest=3.45">Fastest: $3.45</option>
              <option value="slower=0.6">Slower: $0.6</option>
            </select>
          </fieldset>
          <h3>Final Price: ${props.formData.finalTotal.value.toFixed(2)}</h3>
          <button disabled={!canProceed} className="OrderButton" type="submit">
            PLACE ORDER
          </button>
        </form>
      </div>
      {spinner}
      {orderStatus}
    </>
  );
}

const mapPropsFromStore = (store) => {
  return {
    formData: store.contactDataRed.formData,
    totalPrice: store.orderInfoRed.totalPrice,
    success: store.contactDataRed.success,
    loading: store.contactDataRed.orderLoading,
    modal: store.contactDataRed.modal,
    userId: store.authRed.user.userID,
    token: store.authRed.user.token,
  };
};

const mapActions = (dispatch) => {
  return {
    setName: (event) =>
      dispatch({ type: actions.GET_CONTACT_NAME, name: event.target.value }),
    setEmail: (event) =>
      dispatch({ type: actions.GET_CONTACT_EMAIL, email: event.target.value }),
    setStreet: (event) =>
      dispatch({
        type: actions.GET_CONTACT_STREET,
        street: event.target.value,
      }),
    setNum: (event) =>
      dispatch({ type: actions.GET_CONTACT_NUM, num: event.target.value }),
    setPostalCode: (event) =>
      dispatch({
        type: actions.GET_CONTACT_POSTAL,
        postalCode: event.target.value,
      }),
    setInitialDelOpt: (value, finalPrice) =>
      dispatch({
        type: actions.GET_CONTACT_DELIVERY_OPT,
        value: value,
        finalTotal: finalPrice,
        valid: true,
      }),
    setDelOpt: (finalPrice, event) =>
      dispatch({
        type: actions.GET_CONTACT_DELIVERY_OPT,
        value: event.target.value,
        finalTotal: finalPrice,
        valid: true,
      }),
    makeOrder: (order, history, token) =>
      dispatch(actions.MAKE_ORDER(order, history, token)),
    modalSet: (bool, modal) => dispatch(actions.ORDER_ONGOING(null, false)),
  };
};

export default connect(mapPropsFromStore, mapActions)(ContactData);
