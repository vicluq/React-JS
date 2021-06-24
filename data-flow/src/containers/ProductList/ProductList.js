import React, { Component } from "react";
import { connect } from "react-redux";
import Transition from "react-transition-group/Transition";
import "./ProductList.css";
// import { products } from "../../services/context/products";

import Modal from "../../components/Modal/Modal";

class ProductList extends Component {
  //   static contextType = products;
  state = {
    searchInput: "",
    displayModal: false,
    displayElem: false,
  };

  onInputChangeHandler = (e) => {
    const inputValue = e.target.value;
    this.setState((old) => ({ ...old, searchInput: inputValue }));
  };

  onFormSubmitHandler = (display, e) => {
    e.preventDefault();
    if (this.state.searchInput.trim()) {
      this.setState((old) => ({ ...old, displayModal: display }));
      if (!display) {
        this.setState((old) => ({ ...old, searchInput: "" }));
      }
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="Product-List">
        <div>
          <h2>All Products</h2>
          <form onSubmit={this.onFormSubmitHandler.bind(this, true)}>
            <input
              type="text"
              name="prodId"
              id="prodId"
              placeholder="search by id..."
              value={this.state.searchInput}
              onChange={this.onInputChangeHandler}
            />
            <button type="submit">Look up!</button>
          </form>
        </div>
        <ul>
          {this.props.products.map((prod) => (
            <li key={prod.id}>
              <h3>{prod.name}</h3>
              <p>{prod.desc}</p>
              <button onClick={this.props.addToFavorite.bind(null, prod.id)}>
                {prod.isFav ? "Remove Favorite" : "Add Favorite"}
              </button>
            </li>
          ))}
        </ul>
        <Transition
          in={this.state.displayModal}
          timeout={{ enter: 300, exit: 1000 }}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {(state) => (
            <Modal
              showing={this.state.displayModal}
              close={this.onFormSubmitHandler.bind(this, false)}
              style={{
                transform:
                  state === "entering" || state === "exiting"
                    ? "scale(0)"
                    : "scale(1)",
                opacity: state === "entering" || state === "exiting" ? 0 : 1,
                transition: `all ${state === "entering" ? 0.3 : 1}s ease-out`,
              }}
            >
              <div>
                {this.props.products
                  .filter((prod) => this.state.searchInput === `${prod.id}`)
                  .map((prod) => (
                    <article key={prod.id}>
                      <h3>{prod.name}</h3>
                      <p>{prod.desc}</p>
                      <button
                        onClick={this.props.addToFavorite.bind(null, prod.id)}
                      >
                        {prod.isFav ? "Remove Favorite" : "Add Favorite"}
                      </button>
                    </article>
                  ))}
              </div>
            </Modal>
          )}
        </Transition>
      </div>
    );
  }
}

const mapPropsFromStore = (store) => {
  return {
    products: store.shop.prods,
  };
};

const mapActions = (dispatch) => {
  return {
    addToFavorite: (id) => dispatch({ type: "ADD_TO_FAV", id: id }),
  };
};

export default connect(mapPropsFromStore, mapActions)(ProductList);
