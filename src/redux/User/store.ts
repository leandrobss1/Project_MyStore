import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
