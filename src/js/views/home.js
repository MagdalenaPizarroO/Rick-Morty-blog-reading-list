import React from "react";
import homeimg from "../../img/homeimg.jpeg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>The Blog for Rick and Morty Fans</h1>
		<p>
			<img src={homeimg} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
