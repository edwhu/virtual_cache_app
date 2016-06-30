import { combineReducers } from 'redux'

function devices(state = [], action) {
	switch (action.type) {
		case 'RECEIVE_DEVICES':
			return action.devices;
		default:
			return state;
	}
}

function selectedDevice(state = '', action) {
	switch (action.type) {
		case 'SET_SELECTED':
			return action.selectedDevice;
		default:
			return state;
	}
};

const reducer = combineReducers({
	devices,
	selectedDevice
});

export default reducer;
