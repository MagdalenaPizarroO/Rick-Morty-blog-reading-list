import React, { useState, useEffect } from "react"; //appContext es un componente de React
import getState from "./flux.js"; // función que retorna un objeto

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null); // estamos creando un componente llamado Context; se crea con un contexto nulo
// Context es una forma que tenemos para distribuir información a muchos componentes


// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {  	//injectContext necesita un componente, lo recibe en layout (layout)
	const StoreWrapper = props => {		//estudiar lo de props de nuevo .-. lo olvidé
		//this will be passed as the contenxt value
		const [state, setState] = useState(		//el estado "state" tiene un valor en particular: todo lo que contenga getState (línea 2)
			getState({	//estamos llamando al objeto getState
				getStore: () => state.store, 	// devuelve los datos del objeto "store" (primer parámetro getState)
				getActions: () => state.actions,	// devuelve los datos del objeto "actions" (segundo parámetro getState)
				setStore: updatedStore =>			//a veces, store va a recibir motificaciones; permite modificar el objeto "store"
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/
		}, []);		//recordar [] => el componente se carga una vez, al renderizar//cuando se carga layout, se ejecuta este useEffect

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext; 			
