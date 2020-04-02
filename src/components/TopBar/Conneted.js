import React from 'react';
import { FaCircle } from "react-icons/fa";

const connectCircleStyle = {
	position: "absolute",
	display: "flex",
	flexDirection: "row",
	//margin: "auto 0",
	alignItems: "center",
	top: "8%",
	left: "50%",
	transform: "translate(-50%, 0%)",
};

const Conneted = (props) => {
	const { connected }  = props;
	let connMsg, color;

	if(connected) {
		connMsg = "Connected";
		color = "PaleGreen";
	} else {
		connMsg = "Disconnected";
		color = "Gray";
	}
	return (
		<div style={connectCircleStyle}>
			<FaCircle color={color}/>
			<div>&nbsp;&nbsp;</div>
			<div>{connMsg}</div>
		</div>
	);
};

export default Conneted;
