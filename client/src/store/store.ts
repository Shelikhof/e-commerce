import { configureStore } from '@reduxjs/toolkit';
import deviceWidth from './slices/deviceWidth';

const store = configureStore({
	reducer: {
		deviceWidth: deviceWidth,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
