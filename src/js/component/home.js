import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { render } from "react-dom";

//create your first component

export function Home() {
	const [state, setState] = useState({
		red: "",
		yellow: "",
		green: ""
	});

	const stylesBorder = {
		border: "3px solid yellow",
		height: "60px",
		width: "60px"
	};

	return (
		<div>
			<div className="text-center" id="topHandle"></div>

			<div className="text-center" id="mainDiv">
				<div
					className="rounded-circle bg-danger"
					style={
						state.red
							? stylesBorder
							: { height: "60px", width: "60px" }
					}
					onClick={() =>
						setState({ red: "clicked", yellow: "", green: "" })
					}></div>
				<div
					className="rounded-circle bg-warning"
					style={
						state.yellow
							? stylesBorder
							: { height: "60px", width: "60px" }
					}
					onClick={() =>
						setState({ red: "", yellow: "clicked", green: "" })
					}></div>
				<div
					className="rounded-circle bg-success"
					style={
						state.green
							? stylesBorder
							: { height: "60px", width: "60px" }
					}
					onClick={() =>
						setState({ red: "", yellow: "", green: "clicked" })
					}></div>
			</div>
		</div>
	);
}
