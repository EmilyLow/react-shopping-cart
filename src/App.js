import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';



// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
//When exactly do you add .js do the end of a file name when importing. Never?
import ProductContext from "./contexts/ProductContext";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		// I forget why the value is in double {{}}, once to mark it as assigned value and a second time to make an object?
		<ProductContext.Provider value = {{products, addItem}}>
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products products={products} addItem={addItem} />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
