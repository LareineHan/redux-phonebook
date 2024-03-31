let initialState = { contactList: [], searchKeyword: {} };

function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'ADD_CONTACT':
			return {
				...state,
				contactList: [
					...state.contactList,
					{
						name: payload.name,
						phoneNumber: payload.phoneNumber,
					},
				],
			};
		case 'REMOVE_CONTACT':
			return {
				...state,
				contactList: state.contactList.filter(
					(item) =>
						item.name !== payload.name ||
						item.phoneNumber !== payload.phoneNumber
				),
			};

		case 'SEARCH':
			console.log('SEARCH payload', payload);
			console.log('New Search Keyword:', payload.searchKeyword);
			return {
				...state,
				searchKeyword: payload.searchKeyword,
			};

		default:
			return {
				...state,
			};
	}
}

export default reducer;
