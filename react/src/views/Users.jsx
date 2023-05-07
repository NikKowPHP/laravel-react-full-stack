import React from 'react'
import axiosClient from '../axios-client';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Users() {

	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(()=> {
		getUsers();
	}, [])

	const getUsers = () => {
		setLoading(true)
		axiosClient.get('/users')
		.then(({data}) => {
			setLoading(false)
			console.log(data);
			setUsers(data.data)
		})
		.catch(() => {
			setLoading(false)
		})
	}
	return (
		<div>
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
				<h1>Users</h1>
				<Link to="/users/new" className='btn-add'>Add new</Link>
			</div>

			<div className="card animated fadeInDown">
				<table>
					<thead>
						<tr>
							<td>ID</td>
							<td>Name</td>
							<td>Email</td>
							<td>Create Date</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						{users.map(u => (
							<tr key={u.id}>
								<td>{u.id}</td>
								<td>{u.name}</td>
								<td>{u.email}</td>
								<td>{u.created_at}</td>
								<td>
									<Link className='btn-edit' to={'/users/'+ u.id}>Edit</Link>
									
									<button  className='btn-delete'>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

		</div>
	)
}
