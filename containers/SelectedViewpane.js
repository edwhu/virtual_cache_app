import { connect } from 'react-redux';
import Viewpane from '../components/Viewpane.js';
const findSelectedDevice = state => {
	const result = state.devices.filter( d => d._id == state.selectedDevice);
	if(result.length === 1)
		return result[0];
	return {name:'Click a device on the right', loc:['none'], d2d:0, date:0, cache:[]};
};

const mapStateToProps = state => {
	return {
		selectedDevice: findSelectedDevice(state)
	};
};

const SelectedViewpane = connect(mapStateToProps)(Viewpane);

export default SelectedViewpane;
