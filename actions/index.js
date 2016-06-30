import fetch from 'isomorphic-fetch';

const API_URL = 'http://www.edward-hu.com/db';

export const setSelected = (name) => {
	return {
		type:'SET_SELECTED',
		selectedDevice:name
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
				dispatch(receiveDevices(json[0]));
			});
	};
};
