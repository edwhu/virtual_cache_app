import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:3000/db';

export const setSelected = (selectedDevice) => {
	return {
		type:'SET_SELECTED',
		selectedDevice
	};
};

export const requestDevices = () => {
	return {
		type:'REQUEST_DEVICES'
	};
};

export const receiveDevices = (json) => {
	return {
		type:'RECEIVE_DEVICES',
		devices:json
	};
};

export const fetchDevices = () => {
	return function(dispatch) {
		dispatch(requestDevices());
		return fetch(API_URL, {method:'GET'})
			.then(res => res.json())
			.then(json => {
				console.log('fetched', json);
				dispatch(receiveDevices(json[0]));
			});
	};
};
