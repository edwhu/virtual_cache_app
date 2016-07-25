import fetch from 'isomorphic-fetch';

// const API_URL = 'http://www.edward-hu.com/db';
const API_URL = require('../env.js').API_URL;

export const setSelected = name => {
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

export const receiveDevices = json => {
	return {
		type:'RECEIVE_DEVICES',
		devices:json
	};
};

export const fetchDevices = () => {
	return function(dispatch) {
		dispatch(requestDevices());
		return fetch(API_URL + '/db', {method:'GET'})
		.then(res => res.json())
		.then(json => {
			dispatch(receiveDevices(json[0]));
		});
	};
};

export const requestNearbyDevices = () => {
	return {
		type:'REQUEST_NEARBY_DEVICES'
	};
};

export const receiveNearbyDevices = nearbyDevices => {
	return {
		type:'RECEIVE_NEARBY_DEVICES',
		nearbyDevices: nearbyDevices
	};
};

export const fetchNearbyDevices = (center, radius = 100) => {
	return function(dispatch) {
		dispatch(requestNearbyDevices());
		return fetch(API_URL + '/locsearch',
		{
			method:'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				center,
				radius
			})
		})
		.then(res => res.json())
		.then( json => {
			dispatch(receiveNearbyDevices(json));
		});
	};
};
