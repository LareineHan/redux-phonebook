import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
const ContactForm = () => {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const dispatch = useDispatch();

	const addContact = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD_CONTACT', payload: { name, phoneNumber } });
		e.target.reset();
	};
	useEffect(() => {
		console.log('hi');
	}, []);
	return (
		<div className='add-form'>
			<Form onSubmit={addContact}>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Label>🤺 name</Form.Label>
					<Form.Control
						type='text'
						placeholder='enter name'
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formContact'>
					<Form.Label>☎️ phone number</Form.Label>
					<Form.Control
						type='number'
						placeholder='enter phone number'
						onChange={(e) => {
							setPhoneNumber(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicCheckbox'></Form.Group>
				<Button variant='warning' type='submit'>
					Add to BlackList
				</Button>
			</Form>
		</div>
	);
};

export default ContactForm;
