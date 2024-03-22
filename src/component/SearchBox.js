import React from 'react';
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
	const [searchKeyword, setSearchKeyword] = useState('');
	const dispatch = useDispatch();
	const handleSearch = () => {
		dispatch({ type: 'SEARCH', payload: { searchKeyword } });
		setSearchKeyword('');
	};

	return (
		<div className='search-box'>
			{' '}
			<Row>
				<Col lg={9}>
					<Form.Control
						type='text'
						placeholder='🔍  type name to search...!'
						value={searchKeyword}
						onChange={(e) => {
							setSearchKeyword(e.target.value);
						}}
					/>
				</Col>
				<Col lg={3}>
					<Button variant='warning' onClick={handleSearch}>
						Search
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default SearchBox;
