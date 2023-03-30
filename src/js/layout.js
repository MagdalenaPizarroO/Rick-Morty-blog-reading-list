import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop"; //irrelevante por ahora

//componentes:
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Characters } from "./views/characters";
import { CharacterInfo } from "./views/characterInfo";
import { Locations } from "./views/locations";
import { Saludar } from "./views/saludar"; // ejemplo saludar
import { Gatitos } from "./views/gatitos";

import Patito from "./views/patito"; //ejemplo patito
import injectContext from "./store/appContext"; //lo veremos el jueves

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			{/* BrowserRouter: todo lo que envuelve forma parte de las rutas de una aplicación
			y cada componente definido dentro estará en todas las rutas */}
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					{/* en el componente Routes tengo todas las rutas de mi aplicación */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						
						<Route path="/characters" element={<Characters />} />
						<Route path="/character/:id" element={<CharacterInfo />} />
						<Route path="/locations" element={<Locations />} />
						<Route path='/patito' element={<Patito/>} />
						{/* ruta con parámetros en función del identificador... ;  */}
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/gatitos" element={<Gatitos/>} />
						<Route path="/saludar/:nombre" element={<Saludar/>} />
						{/* la ruta '*' pintará un not found: la ruta no existe (error 404) */}
						<Route path="*" element={<h1>Not found!</h1>} /> 
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
