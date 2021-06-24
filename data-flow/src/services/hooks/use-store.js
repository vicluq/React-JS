import { useSelector, useDispatch } from "react-redux";
// could import actions too

function useStore() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  return [store, dispatch];
}

export default useStore;
