import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function GuestLayout() {
	const {token} = useStateContext()
	if(token) {
		 return <Navigate to="/" />
	}
	return (
		<div>

			{/* outlet return children body */}
			<Outlet />
		
		</div>
	)
}
