import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

export default () => {
	return <Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/portfolio" component={Portfolio}/>
		<Route path="/home" component={Home}/>
	</Route>;
};
 