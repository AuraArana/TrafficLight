import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { render } from "react-dom";

//create your first component

export function Home() {
	const [state, setState] = useState({});

	console.log(this.state);
	const redExtraClass = "";
	if (this.state.selectedLight == "red") redExtraClass = "selected";
	const yellowExtraClass = "";
	if (this.state.selectedLight == "yellow") yellowExtraClass = "selected";
	const greenExtraClass = "";
	if (this.state.selectedLight == "green") greenExtraClass = "selected";

	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"red light" + redExtraClass}
					onClick={() =>
						this.setState({ selectedLight: "red" })
					}></div>
				<div
					className={"yellow light" + yellowExtraClass}
					onClick={() =>
						this.setState({ selectedLight: "yellow" })
					}></div>
				<div
					className={"green light" + greenExtraClass}
					onClick={() =>
						this.setState({ selectedLight: "green" })
					}></div>
			</div>
		</div>
	);
}
