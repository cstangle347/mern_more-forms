import React, { useState } from 'react';

// this sets the state for the user form
const UserForm = (props) => {
	const [ firstName, setFirstname ] = useState('');
	const [ firstNameError, setFirstNameError ] = useState('');
	const [ lastName, setLastname ] = useState('');
	const [ lastNameError, setLastNameError ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ emailError, setEmailError ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordError, setPasswordError ] = useState('');
	const [ confirmPassword, setConfirmpassword ] = useState('');

	// this handles the validation for first name
	const handleFirstName = (e) => {
		setFirstname(e.target.value);

		if (e.target.value.length < 2) {
			setFirstNameError('First Name should be 2 characters');
		} else {
			setFirstNameError('');
		}
	};

	// this handles the validation for Last Name
	const handleLastName = (e) => {
		setLastname(e.target.value);

		if (e.target.value.length < 2) {
			setLastNameError('Last Name should be 2 characters or longer');
		} else {
			setLastNameError('');
		}
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);

		if (e.target.value.length < 2) {
			setEmailError('Email must have 2 characteres or longer');
		} else {
			setEmailError('');
		}
	};

	const hanldePassword = (e) => {
		setPassword(e.target.value);

		if (e.target.value.length < 8) {
			setPasswordError('Password must be at least 8 characteres');
		} else {
			setPasswordError('');
		}
	};

	const handleConfirmpassword = (e) => {
		setConfirmpassword(e.target.value);

		if (e.target.value !== password) {
			setPasswordError('Password must match');
		} else {
			setPasswordError('');
		}
	};

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div class="form-group">
				<label htmlFor="firstName">First Name: </label>
				<input onChange={handleFirstName} type="text" name="firstName" class="form-control" />
				{firstNameError ? <p style={{ color: 'red' }}>{firstNameError}</p> : ''}
			</div>

			<div class="form-group">
				<label htmlFor="lastName">Last Name: </label>
				<input onChange={handleLastName} type="text" name="lastName" class="form-control" />
				{lastNameError ? <p style={{ color: 'red' }}>{lastNameError}</p> : ''}
			</div>

			<div class="form-group">
				<label for="email">Email Address: </label>
				<input onChange={handleEmail} type="text" name="email" class="form-control" />
				{emailError ? <p style={{ color: 'red' }}>{emailError}</p> : ''}
			</div>

			<div class="form-group">
				<label for="password">Password: </label>
				<input onChange={hanldePassword} type="password" name="password" class="form-control" />
				{passwordError ? <p style={{ color: 'red' }}>{passwordError}</p> : ''}
			</div>

			<div class="form-group">
				<label for="confirmPassword">Confirm Password: </label>
				<input onChange={handleConfirmpassword} type="password" name="confirmPassword" class="form-control" />
			</div>
		</form>
	);
};

export default UserForm;
