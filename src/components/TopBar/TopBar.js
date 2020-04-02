import React, { Component } from "react";
import { FiWifiOff, FiWifi } from "react-icons/fi";
import { FaHandPointUp, FaCircle } from "react-icons/fa";
import { MdSettings, MdMouse, MdTouchApp, MdGamepad } from "react-icons/md";
import { Row, Container } from "reactstrap";
import {VIEW_SETTINGS, VIEW_CONNECT, VIEW_GESTURE, VIEW_CLICK, VIEW_MOUSE} from "../Define/Define";
import {BrowserRouter, Link, withRouter} from "react-router-dom";
import styled from 'styled-components';

const topBarStyle = {
	top: "1vh",
	//width: "100%",
	height: "2.5rem",
	position: "relative",
	textAlign: "center",
	//display: "flex",
	//alignItems: "center",
};

const settingBtnStyle = {
	position: "absolute",
	left: "5%",
	transform: "translate(-5%, 0%)",
};
const connectBtnStyle = {
	position: "absolute",
	left: "28%",
	transform: "translate(-28%, 0%)",
	color: "#007bff",
	hover: {
		color: "#0056B3"
	}
};
const touchPadBtnStyle = {
	position: "absolute",
	left: "50%",
	transform: "translate(-50%, 0%)",
};
const keyPadBtnStyle = {
	position: "absolute",
	left: "72%",
	transform: "translate(-72%, 0%)",
};

const mousePadBtnStyle = {
	position: "absolute",
	left: "95%",
	transform: "translate(-95%, 0%)",
};

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

const iconStyle = "2.5rem";

const TobBar = (props) => {

	const { onChangeMode, connFunc, connected, mode }  = props;

	let connMsg, color;
	if(connected) {
		connMsg = "Connected";
		color = "PaleGreen";
	} else {
		connMsg = "Disconnected";
		color = "Gray";
	}

	return (
		<Container>
			<Row className="justify-content-center" style={topBarStyle} >
				<Link to="/setting">
					<MdSettings	style={settingBtnStyle}	size={iconStyle}/>
				</Link>
				{connected
					? <FiWifiOff
						color={"#007bff"}
						onMouseOver={(e) => e.target.style.color = '#0056B3'}
						onMouseLeave={(e) => e.target.style.color = '#007bff'}
						onClick={() => connFunc.onDisconnect()}
						style={connectBtnStyle}
						size={iconStyle}/>
					: <FiWifi
							onClick={() => connFunc.onConnect()}
							style={connectBtnStyle}
							size={iconStyle} />
				}
				<Link to="/do/gesture">
					<MdTouchApp style={touchPadBtnStyle}  size={iconStyle} />
				</Link>
				<Link to="/do/click">
					<MdGamepad style={keyPadBtnStyle}  size={iconStyle} />
				</Link>
				<Link to="/do/mouse">
					<MdMouse style={mousePadBtnStyle}  size={iconStyle} />
				</Link>

				{/*
				<MdSettings onClick={() => onChangeMode(VIEW_SETTINGS)} style={settingBtnStyle} size={iconStyle}/>
				{connected
					? <FiWifiOff onClick={() => connFunc.onDisconnect()} style={connectBtnStyle} size={iconStyle}/>
					: <FiWifi onClick={() => connFunc.onConnect()} style={connectBtnStyle} size={iconStyle}/>
				}
				<MdTouchApp onClick={() => onChangeMode(VIEW_GESTURE)} style={touchPadBtnStyle}  size={iconStyle} />
				<MdGamepad onClick={() => onChangeMode(VIEW_CLICK)} style={keyPadBtnStyle}  size={iconStyle} />
				<MdMouse onClick={() => onChangeMode(VIEW_MOUSE)} style={mousePadBtnStyle}  size={iconStyle} />
				*/}


			</Row>
			{/*
			{mode !== VIEW_SETTINGS && true &&
				<div style={connectCircleStyle}>
					<FaCircle color={color}/>
					<div>&nbsp;&nbsp;</div>
					<div>{connMsg}</div>
				</div>
			}
			*/}
		</Container>
	);
};

export default TobBar;
