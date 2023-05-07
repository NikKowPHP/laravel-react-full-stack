import React, { useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom'
import axiosClient from '../axios-client';

export default function UserForm() {
	const {id} = useParams();
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState({
		id: null,
		name: '',
		email: '',
		password: '',
		password_confirmation: ''
	})
	if(id) {
			useEffect(()=> {
				setLoading(true)
				axiosClient.get(`/users/${id}`)
				.then(({data}) => {
					setLoading(false)
					setUser(data)
				})
				.catch(() => {
					setLoading(false)
				})
			}, [])
	}

	const onSubmit = (ev) => {
		ev.preventDefault();
		
	}
	return (
		<>
		{user.id && <h1>Update User: {user.name}</h1>}
		{!user.id && <h1>New User</h1> }
		<div className="card animated fadeInDown">
			{loading && (
				<div className="text-center">Loading...</div>
			)}
			{!loading &&
			<form onSubmit={onSubmit}>
				<input type="text" value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} placeholder='Name' />
				<input type="email" value={user.email} onChange={ev=> setUser({...user, email:ev.target.value})} placeholder='Email' />
				<input type="text" onChange={ev => setUser({...user, password: ev.target.value})}  placeholder='Password' />
				<input type="text" onChange={ev=> setUser({...user, password_confirmation: ev.target.value})} placeholder='Password confirmation' />
				<button className='btn'>Save</button>
				
				</form>}
		</div>
		</>
	)
}
