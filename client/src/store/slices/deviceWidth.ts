import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
	deviceWidth: number;
}

const initialState: IInitialState = {
	deviceWidth: 1920,
};

const deviceWidth = createSlice({
	name: 'deviceWidth',
	initialState,
	reducers: {
		setDeviceWidth: (state, { payload }: PayloadAction<number>) => {
			state.deviceWidth = payload;
		},
	},
});

export default deviceWidth.reducer;
export const { setDeviceWidth } = deviceWidth.actions;
