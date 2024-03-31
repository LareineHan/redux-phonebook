import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
	let filteredList = [];
	const dispatch = useDispatch();
	const contactList = useSelector((state) => state.contactList);
	const searchKeyword = useSelector((state) => state.searchKeyword);

	const showAll = () => {
		dispatch({ type: 'SEARCH', payload: { searchKeyword: '' } });
	};
	// 이 말은 state에 있는 contactList를 가져온다는 뜻이다.
	// useSelector는 state를 가져올 수 있다.
	// state는 store에 있는 state를 의미한다.
	filteredList = contactList.filter((item) =>
		item.name.includes(searchKeyword)
	);
	console.log('Search Keyword:', searchKeyword, 'from Contact List');
	console.log('Filtered List:', filteredList, 'from Contact List');

	return (
		<Container>
			<SearchBox />
			<Row className='contact-list'>
				{searchKeyword.length > 0
					? filteredList.map((item) => (
							<>
								<div className='d-grid gap-5 '>
									<ContactItem key={item.name} item={item} />
								</div>
							</>
					  ))
					: contactList.map((item) => (
							<ContactItem key={item.name} item={item} />
					  ))}
			</Row>
			<Row>
				{searchKeyword.length > 0 ? (
					<Button
						variant='danger'
						mb={3}
						style={{ margin: '10px', width: '100px' }}
						onClick={showAll}>
						Show All
					</Button>
				) : (
					''
				)}
			</Row>
		</Container>
	);
};

export default ContactList;
