import {createBrowserRouter}	from "react-router-dom"	
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";

const router = createBrowserRouter( [
	{
		path: '/',
		element: <Login />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/signup',
		element: <Signup/>
	},
	{
		path: '/login',
		element: <Users/>
	},
	{
		path: '*',
		element: <NotFound/>
	},

])

export default router;