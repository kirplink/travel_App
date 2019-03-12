import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ExplorePage from "./components/ExplorePage/ExplorePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

//redux componnets for user authentication
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Router>
			<Provider store={store}>
				<div>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/explore" component={ExplorePage} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
				</div>
			</Provider>
		</Router>
	);
}

//When you hit the button you load the login or sign up component on the page
//Fix the front-end 



export default App;
