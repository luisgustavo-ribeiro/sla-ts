import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => {
	return (
		<BrowserRouter>
			{/* Navbar */}
			<main>
				<Switch>
					<Route path='/' exact component={Home} />
				</Switch>
			</main>
			{/* Footer */}
		</BrowserRouter>
	);
};

export default Routes;
