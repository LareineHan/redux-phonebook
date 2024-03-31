import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faUserLargeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

const ContactItem = ({ item }) => {
	const dispatch = useDispatch();
	const removeContact = () => {
		dispatch({
			type: 'REMOVE_CONTACT',
			payload: { name: item.name, phoneNumber: item.phoneNumber },
		});
		console.log('remove contact');
	};

	return (
		<div className='contact-container'>
			<Row className='each-contact-box'>
				<Col lg={3} className='profile'>
					<FontAwesomeIcon icon={faPerson} size='2x' />
				</Col>
				<Col lg={6} className='each-contact'>
					<div> {item.name}</div>
					<div>{item.phoneNumber}</div>
				</Col>
				<Col lg={3} className='rm-profile'>
					<FontAwesomeIcon icon={faUserLargeSlash} onClick={removeContact} />
				</Col>
			</Row>
		</div>
	);
};

export default ContactItem;
