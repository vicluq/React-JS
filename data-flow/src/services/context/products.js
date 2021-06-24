import React, { Component } from "react";

export const products = React.createContext([]);

export class ProductProvider extends Component {
  state = {
    prods: [
      {
        name: "iPhone 11 Max",
        desc: "Top de linha da Apple com câmera tripla e Bionic 12",
        id: 1443,
        isFav: false,
      },
      {
        name: "MacBook Pro",
        desc: "Grande desempenho de hardware com 16Gb de RAM",
        id: 1453,
        isFav: false,
      },
      {
        name: "Playstation 4 Slim",
        desc: "Versão compacta do famoso console",
        id: 1654,
        isFav: false,
      },
    ],
  };

  setFavoriteHandler = (id) => {
    const newProductArr = [...this.state.prods];
    const elemIndex = newProductArr.findIndex((prod) => prod.id === id);

    newProductArr[elemIndex].isFav = !newProductArr[elemIndex].isFav;
    this.setState({ prods: newProductArr });
  };

  render() {
    return (
      <products.Provider
        value={{
          products: this.state.prods,
          setters: {
            setFavorite: this.setFavoriteHandler,
          },
        }}
      >
        {this.props.children}
      </products.Provider>
    );
  }
}
