import React from 'react';
import { Col, Row } from 'react-bootstrap';
const ContactItem = ({ item }) => {
	return (
		<div className='contact-container'>
			<Row className='each-contact-box'>
				<Col lg={2} className='profile'>
					<img
						className='avatar'
						width={55}
						alt='user avatar'
						src='https://cdn0.iconfinder.com/data/icons/shopping-197/48/bl_872_profile_avatar_anonymous_customer_user_head_human-1024.png'
					/>
				</Col>
				<Col lg={9} className='each-contact'>
					<div> {item.name}</div>
					<div>{item.phoneNumber}</div>
				</Col>
			</Row>
		</div>
	);
};

export default ContactItem;
