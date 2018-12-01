import mapActionToReducer from 'redux-action-reducer-mapper';
import {
	POSTS_FETCH_SUCCEESS, 
} from './sagas';

export default mapActionToReducer({
	'default': {},
	[POSTS_FETCH_SUCCEESS]: (state,action) => ({
		...state, 
		items: action.payload.items, 
	})

})
