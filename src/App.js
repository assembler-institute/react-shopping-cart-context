import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAppContext } from "./context/App/AppContext";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

function App() {
  const {
    stateKey,
    handleDataFetch,
    handleLoadingState,
    getLocalStorageItems,
    setLocalStorageItems,
  } = useAppContext();

  useEffect(() => {
    handleLoadingState(true);
    handleDataFetch();
    handleLoadingState(false);

    stateKey.forEach((item) => getLocalStorageItems(item.key));
  }, []);

  stateKey.forEach((item) => {
    useEffect(() => {
      if (item.state.length > 0) {
        setLocalStorageItems(item.key, item.state);
      }
    }, [item.state]);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-product">
          <NewProduct />
        </Route>
        <Route path="/" exact>
          <Home fullWidth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
