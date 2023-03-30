import React from "react";
import homeimg from "../../img/homeimg.jpeg";
import charactersinfo from "../../img/charactersinfo.webp";
import locationsinfo from "../../img/locationsinfo.jpeg";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => (
	<div className="container text-center mt-5" >
		<h1>The Blog for Rick and Morty Fans</h1>
		<p>
			<img src={homeimg} style={{ width: "700px" }} />
		</p>
		<div className="row">
			<Link className="col" to="/characters">
				<img src={charactersinfo} style={{ width: "300px" , height: "200px"}} />
				<p>Click here to view characters info</p>
			</Link>
			<Link className="col" to="/locations">
			<img src={locationsinfo} style={{ width: "300px" , height: "200px"}} />
			<p>Click here to view locations info</p>
			</Link>
		</div>
	</div>
);
