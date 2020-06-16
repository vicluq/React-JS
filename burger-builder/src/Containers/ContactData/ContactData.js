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
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    deliveryOption: "Slower=0.6",
    aditionals: [],
    finalTotal: 0,

    loading: false,
    success: null,
    modal: false,
  };

  componentDidMount() {
    const tax = Number(this.selectRef.current.value.split("=")[1]);
    this.setState({
      finalTotal: this.props.orderInfo.total + tax,
      deliveryOption: this.selectRef.current.value,
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  getNameHandler = (event) => {
    const name = event.target.value;
    this.setState((oldState) => ({ ...oldState, name: name }));
  };
  getEmailHandler = (event) => {
    const email = event.target.value;
    this.setState((oldState) => ({ ...oldState, email: email }));
  };
  getStreetHandler = (event) => {
    const street = event.target.value;
    this.setState((oldState) => ({
      ...oldState,
      address: { ...oldState.address, street: street },
    }));
  };
  getPostalHandler = (event) => {
    const postal = event.target.value;
    this.setState((oldState) => ({
      ...oldState,
      address: { ...oldState.address, postalCode: postal },
    }));
  };

  getDeliveryOptHandler = (event) => {
    const del_opt = event.target.value;
    const tax = Number(del_opt.split("=")[1]);
    this.setState((oldState) => ({
      ...oldState,
      deliveryOption: del_opt,
      finalTotal: this.props.orderInfo.total + tax,
    }));
  };

  //place order
  placeOrderHandler = (event) => {
    event.preventDefault();
    this.setState((oldState) => ({ ...oldState, loading: true }));

    const order = {
      costumerInfo: {
        name: this.state.name,
        email: this.state.email,
        address: { ...this.state.address },
      },
      orderInfo: { ...this.props.orderInfo, total: this.state.finalTotal },
      deliveryOption: this.state.deliveryOption,
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
                value={this.state.name}
              />
              <FormInput
                onchange={this.getEmailHandler}
                req={true}
                type="email"
                name="email"
                pholder="email..."
                value={this.state.email}
              />
            </fieldset>
            <fieldset>
              <legend>Enter your Address Info</legend>
              <FormInput
                onchange={this.getStreetHandler}
                req={true}
                type="text"
                name="address-street"
                pholder="Street..."
                value={this.state.address.street}
              />
              <FormInput
                onchange={this.getPostalHandler}
                type="text"
                req={true}
                name="address-postal-code"
                pholder="Postal Code..."
                value={this.state.address.postalCode}
                borderColor={
                  this.state.address.postalCode.length !== 8
                    ? "red"
                    : "lightgreen"
                }
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
            <h3>Final Price: ${this.state.finalTotal.toFixed(2)}</h3>
            <button
              disabled={this.state.success}
              className="OrderButton"
              type="submit"
            >
              PLACE ORDER
            </button>
          </form>
        </div>
        {this.state.loading ? (
          <>
            <Backdrop showing={this.state.loading} />
            <Spinner />
          </>
        ) : null}
        {orderStatus}
      </>
    );
  }
}

export default ContactData;
