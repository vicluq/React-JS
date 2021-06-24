const SHOP_STORE = {
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

function addToFav(id, prods) {
  const newProds = [...prods];
  const index = newProds.findIndex((prod) => prod.id === id);
  newProds[index].isFav = !newProds[index].isFav;
  return newProds;
}

function reducer(store = SHOP_STORE, action) {
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...store,
        prods: addToFav(action.id, store.prods),
      };
    default:
      return store;
  }
}

export default reducer;
