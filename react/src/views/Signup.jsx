import React from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
	const onSubmit = (ev) => {
		ev.preventDefault();
	}
	return (
		<div className='login-signup-form animated fadeInDown'>
			<div className="form">
				<form action="" onSubmit={onSubmit}>
					<h1 className="title">
						Signup for free	
					</h1>
					<input placeholder='text' type="Full name" />
					<input placeholder='Email' type="email" />
					<input placeholder='Password' type="password" />
					<input placeholder='Password confirmation' type="password" />
					<button className="btn btn-block">Sign up</button>
					<p className="message">
						Already registered? <Link to="/login" >Sign in</Link>
					</p>
				</form>
			</div>
		</div>
	)
}
