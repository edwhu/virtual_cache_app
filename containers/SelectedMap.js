import { connect } from 'react-redux';
import { setSelected } from '../actions';
import GMap from '../components/GMap.js';

const convertDevicesToMarkers = devices => {
	return devices.map(d => {
		//console.log('converting', {name:d.name, _id:d._id, loc:d.loc});
		return {name:d.name, _id:d._id, loc:d.loc}
	});
}

const mapStateToProps = state => {
	return {
		markers: convertDevicesToMarkers(state.devices)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onMarkerClick: (hoverKey, childProps) => {
			dispatch(setSelected(childProps.name));
		}
	};
};

const SelectedMap = connect(
	mapStateToProps,
	mapDispatchToProps
)(GMap);

export default SelectedMap;
