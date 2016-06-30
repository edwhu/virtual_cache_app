import React, {PropTypes, Component} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {MapMarkerStyle} from '../styles/MapMarkerStyle.js';

export default class MapMarker extends Component {
	shouldComponentUpdate = shallowCompare;
	constructor(props) {
		super(props);
 	};
	render() {
		return (
			<div style={MapMarkerStyle}>
			</div>
		);
	};
};
