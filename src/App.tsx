import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputComponent from "./components/InputComponent";

function App() {
	const [value, setValue] = useState("");
	console.log(value);
	return (
		<div className="App">
			<InputComponent type="email" value={value} handler={setValue}>
				Hello
			</InputComponent>
		</div>
	);
}

export default App;
