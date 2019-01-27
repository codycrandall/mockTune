import React, { Component } from "react";
import "../sass/components/app.scss";
let counter = 1;
class App extends Component {
	render() {
		return <span className={"start-new-game"} onClick={addToCounter()}>{counter}</span>;
	}

}
function addToCounter() {
	counter++;
}

export default App;
