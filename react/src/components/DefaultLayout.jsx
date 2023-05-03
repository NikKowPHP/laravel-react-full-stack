import React from 'react'
import { Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider.jsx'
import { Navigate } from 'react-router-dom';

export default function DefaultLayout() {
	const {user, token } = useStateContext();
	if(!token) {
		return <Navigate to= "/login" />
	}
	return (
		<div>
			default
			<Outlet />
		</div>
	)
}
