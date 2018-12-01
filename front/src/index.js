import React from "react";
import ReactDOM from "react-dom";
import Posts from './posts';
import StyledApp from "./styled";
import store from './root-reducer';
import { Provider } from 'react-redux'

const App = () => (
	<Provider store={store}>
		<Posts />
	</Provider>

);

ReactDOM.render(<App />, document.getElementById("app"));
