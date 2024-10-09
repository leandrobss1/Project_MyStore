import { combineReducers } from 'redux';
import { userReducer } from './reducer';

export const rootReducer = combineReducers({
	userReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
