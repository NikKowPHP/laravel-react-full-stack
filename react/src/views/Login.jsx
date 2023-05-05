import React from 'react'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';
import { useState } from 'react';

export default function Login() {

	const emailRef = useRef();
	const passwordRef = useRef();
	const [errors, setErrors] = useState(null);
	const {setUser, setToken} = useStateContext();

	const onSubmit = (ev) => {
		ev.preventDefault()
		setErrors(null)
		const payload = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		}
		axiosClient.post('/login', payload)
		.then(({data}) => {
			setToken(data.token)
			setUser(data.user)
		}) 
		.catch(err => {
			const response = err.response;
			if(response && response.status === 422) {
				console.log(response.data.errors);
				setErrors(response.data.errors);
			}
		})
	}
	return (
		<div className='login-signup-form animated fadeInDown'>
			<div className="form">
				<form action="" onSubmit={onSubmit}>
					<h1 className="title">
						Login into your account
					</h1>
					{errors && <div className='alert'>
						{Object.keys(errors).map(key => (<p key={key}>{errors[key][0]}</p>))}
						</div>}
					<input ref={emailRef} placeholder='Email' type="email" />
					<input ref={passwordRef} placeholder='Password' type="password" />
					<button className="btn btn-block">Login</button>
					<p className="message">
						Not Registered? <Link to="/signup" >Create an account</Link>
					</p>
				</form>
			</div>
		</div>
	)
}
