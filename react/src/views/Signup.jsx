import React from 'react'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';
export default function Signup() {
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmationRef= useRef();
	const {setUser, setToken} = useStateContext();

	const onSubmit = (ev) => {
		ev.preventDefault();
		const payload = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
			password_confirmation: passwordConfirmationRef.current.value
		}

		axiosClient.post('/signup', payload)
		.then(({data}) => {
			setToken(data.token)
			setUser(data.user)
		}) 
		.catch(err => {
			const response = err.response;
			if(response && response.status === 422) {
				console.log(response.data.errors);
			}
		})
	}
	return (
		<div className='login-signup-form animated fadeInDown'>
			<div className="form">
				<form action="" onSubmit={onSubmit}>
					<h1 className="title">
						Signup for free	
					</h1>
					<input ref={nameRef} placeholder='text'  type="Full name" />
					<input ref={emailRef} placeholder='Email' type="email" />
					<input ref={passwordRef} placeholder='Password' type="password" />
					<input ref={passwordConfirmationRef} placeholder='Password confirmation' type="password" />
					<button className="btn btn-block">Sign up</button>
					<p className="message">
						Already registered? <Link to="/login" >Sign in</Link>
					</p>
				</form>
			</div>
		</div>
	)
}
