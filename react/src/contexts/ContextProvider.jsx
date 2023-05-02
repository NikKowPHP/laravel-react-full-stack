import { createContext, useState } from "react";

const StateContext = createContext({
	currentUser: null,
	token: null
});

export const ContextProvider = ({children}) => {
	const [user, setUser] = useState({});
	const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
	const setToken = (token) => {
		_setToken(token)
		if(token) {
			localStorage.setIntem('ACCESS_TOKEN', token);
		} else {
			localStorage.removeItem('ACCESS_TOKEN');
		}

	}
	return (
		<StateContext.Provider value={{

		}}>

		</StateContext.Provider>
	)
}