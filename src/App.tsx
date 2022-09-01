import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputComponent from "./components/InputComponent";

function App() {
	return (
		<div className="App">
			<InputComponent type="email">Hello</InputComponent>
		</div>
	);
}

export default App;
