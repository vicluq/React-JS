import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import useStore from "../../services/hooks/use-store";
import CSSTransition from "react-transition-group/CSSTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";

import "./Favorites.css";

function Favorited(props) {
  //   const ctx = useContext(products);
  const products = useSelector((store) => store.shop.prods);

  const [{ shop }, dispatch] = useStore();

  return (
    <div className="Favorited-List">
      <div>
        <h2>Favorited Products</h2>
      </div>
      <TransitionGroup component="ul" className="Favorites">
        {products
          .filter((prod) => prod.isFav)
          .map((prod) => (
            <CSSTransition
              timeout={{ enter: 300, exit: 500 }}
              mountOnEnter
              unmountOnExit
              classNames="listItem"
            >
              <li key={prod.id}>
                <h3>{prod.name}</h3>
                <p>{prod.desc}</p>
              </li>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
}

export default Favorited;
