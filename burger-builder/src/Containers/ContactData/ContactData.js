import React, { Component } from "react";
import "./ContactData.css";

import FormInput from "../../Components/FormInput/FormInput";
import storeOrder from "../../services/store-order";
import Modal from "../../Components/UI/Modal/Modal";
import Backdrop from "../../Components/UI/BackDrop/BackDrop";
import Spinner from "../../Components/UI/Spinner/Spinner";

class ContactData extends Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
  }

  state = {
    formData: {
      name: {
        valid: false,
        value: "",
      },
      email: {
        valid: false,
        value: "",
      },
      street: {
        valid: false,
        value: "",
      },
      postalCode: {
        valid: false,
        value: "",
      },
      num: {
        valid: false,
        value: "",
      },
      deliveryOption: { value: "Slower=0.6", valid: true },
      finalTotal: { value: 0, valid: true },
    },
    loading: false,
    success: null,
    modal: false,
  };

  componentDidMount() {
    const tax = Number(this.selectRef.current.value.split("=")[1]);
    this.setState((oldState) => ({
      formData: {
        ...oldState.formData,
        finalTotal: { value: this.props.orderInfo.total + tax, valid: true },
        deliveryOption: { value: this.selectRef.current.value, valid: true },
      },
    }));
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  getNameHandler = (event) => {
    const name = event.target.value;
    const isValid = name.trim().length >= 2 ? true : false;
    this.setState((oldState) => ({
      ...oldState,
      formData: { ...oldState.formData, name: { value: name, valid: isValid } },
    }));
  };
  getEmailHandler = (event) => {
    const email = event.target.value;
    const isValid =
      email.includes("@") && email.includes(".com") ? true : false;
    this.setState((oldState) => ({
      ...oldState,
      formData: {
        ...oldState.formData,
        email: { value: email, valid: isValid },
      },
    }));
  };
  getStreetHandler = (event) => {
    const street = event.target.value;
    const isValid = street.trim().length > 3 ? true : false;
    this.setState((oldState) => ({
      ...oldState,
      formData: {
        ...oldState.formData,
        street: { value: street, valid: isValid },
      },
    }));
  };
  getNumHandler = (event) => {
    const num = event.target.value;
    const isValid = num.length > 0 ? true : false;
    this.setState((oldState) => ({
      ...oldState,
      formData: { ...oldState.formData, num: { value: num, valid: isValid } },
    }));
  };
  getPostalHandler = (event) => {
    const postal = event.target.value;
    const isValid = postal.trim().length !== 8 ? false : true;
    this.setState((oldState) => ({
      ...oldState,
      formData: {
        ...oldState.formData,
        postalCode: { value: postal, valid: isValid },
      },
    }));
  };

  getDeliveryOptHandler = (event) => {
    const del_opt = event.target.value;
    const tax = Number(del_opt.split("=")[1]);
    this.setState((oldState) => ({
      ...oldState,
      formData: {
        ...oldState.formData,
        finalTotal: { value: this.props.orderInfo.total + tax, valid: true },
        deliveryOption: { value: del_opt, valid: true },
      },
    }));
  };

  //place order
  placeOrderHandler = (event) => {
    event.preventDefault();

    const canProceed = Object.values(this.state.formData).reduce(
      (counter, value) => {
        return counter && value.valid;
      },
      true
    );

    if (canProceed) {
      this.setState((oldState) => ({
        ...oldState,
        loading: true,
      }));

      const order = {
        costumerInfo: {
          name: this.state.formData.name.value,
          email: this.state.formData.email.value,
          address: {
            street: this.state.formData.street.value,
            postalCode: this.state.formData.postalCode.value,
            num: this.state.formData.num.value,
          },
        },
        orderInfo: {
          ...this.props.orderInfo,
          total: this.state.formData.finalTotal.value,
        },
        deliveryOption: this.state.formData.deliveryOption.value,
        date: {
          day: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
      };

      storeOrder //Axios instance
        .post("/orders.json", order)
        .then((res) => {
          this.setState((oldState) => ({
            ...oldState,
            loading: false,
            success: true,
            modal: true,
          }));
          this.timer = setTimeout(() => {
            this.props.history.push("/");
          }, 4000);
        })
        .catch((err) => {
          this.setState((oldState) => ({
            ...oldState,
            loading: false,
            success: false,
            modal: true,
          }));
          this.timer = setTimeout(() => {
            this.props.history.push("/");
          }, 4000);
        });
    }
  };

  render() {
    let orderStatus = null;
    if (this.state.success) {
      orderStatus = (
        <Modal
          showing={this.state.modal}
          closeModal={() => {
            this.setState({ modal: false });
          }}
        >
          <h2 className="OrderSuccess">
            We Have Successfuly placed your order
          </h2>
        </Modal>
      );
    } else if (this.state.success === false) {
      orderStatus = (
        <Modal
          showing={this.state.modal}
          closeModal={() => {
            this.setState({ modal: false });
          }}
        >
          <h2 className="OrderFail">Something went wrong try again</h2>
        </Modal>
      );
    }

    let spinner = null;
    if (this.state.loading) {
      spinner = (
        <>
          <Backdrop showing={this.state.loading} />
          <Spinner />
        </>
      );
    }

    const canProceed = Object.values(this.state.formData).reduce(
      (counter, value) => {
        return counter && value.valid;
      },
      true
    );

    return (
      <>
        <div className="ContactDataDiv">
          <form
            onSubmit={this.placeOrderHandler}
            className="ContactData"
            name="contactDataForm"
          >
            <fieldset>
              <legend>Enter you Contact Info</legend>
              <FormInput
                onchange={this.getNameHandler}
                req={true}
                type="text"
                name="name"
                pholder="name..."
                value={this.state.formData.name.value}
                valid={!!this.state.formData.name.valid}
              />
              <FormInput
                onchange={this.getEmailHandler}
                req={true}
                type="email"
                name="email"
                pholder="email..."
                value={this.state.formData.email.value}
                valid={!!this.state.formData.email.valid}
              />
            </fieldset>
            <fieldset>
              <legend>Enter your Address Info</legend>
              <div className="form-house-info">
                <FormInput
                  className="street-input"
                  onchange={this.getStreetHandler}
                  req={true}
                  type="text"
                  name="address-street"
                  pholder="Street..."
                  value={this.state.formData.street.value}
                  valid={!!this.state.formData.street.valid}
                />
                <FormInput
                  className="num-input"
                  onchange={this.getNumHandler}
                  req={true}
                  type="text"
                  name="address-num"
                  pholder="Num..."
                  value={this.state.formData.num.value}
                  valid={!!this.state.formData.num.valid}
                />
              </div>
              <FormInput
                onchange={this.getPostalHandler}
                type="text"
                req={true}
                name="address-postal-code"
                pholder="Postal Code..."
                value={this.state.formData.postalCode.value}
                valid={!!this.state.formData.postalCode.valid}
              />
            </fieldset>
            <fieldset>
              <legend>Delivery Preference</legend>
              <select
                required
                name="deliveryOption"
                onChange={this.getDeliveryOptHandler}
                defaultValue="slower=0.6"
                ref={this.selectRef}
              >
                <option value="fastest=3.45">Fastest: $3.45</option>
                <option value="slower=0.6">Slower: $0.6</option>
              </select>
            </fieldset>
            <h3>
              Final Price: ${this.state.formData.finalTotal.value.toFixed(2)}
            </h3>
            <button
              disabled={!canProceed}
              className="OrderButton"
              type="submit"
            >
              PLACE ORDER
            </button>
          </form>
        </div>
        {spinner}
        {orderStatus}
      </>
    );
  }
}

export default ContactData;
