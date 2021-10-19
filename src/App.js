import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import { AppProvider } from "./providers/AppProvider";

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Switch>
					<Route path="/new-product">
						<NewProduct />
					</Route>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/">
						<Home fullWidth />
					</Route>
				</Switch>
			</BrowserRouter>
		</AppProvider>
	);
}

export default App;
