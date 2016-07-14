import { connect } from 'react-redux';
import { setSelected, fetchNearbyDevices } from '../actions';
import DeviceList from '../components/DeviceList.js';
import fart from 'fart';
const setSelectedDevices = (devices, selected) => {
	return devices.map(device => {
		if(device._id == selected)
			return Object.assign({},device,{selected:true});
		return Object.assign({}, device, {selected:false});
	});
};

const mapStateToProps = state => {
	//console.log('state', state.devices);
	return {
		devices:setSelectedDevices(state.devices, state.selectedDevice)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onDeviceClick: (name, location) => {
			fart();
			dispatch(setSelected(name));
			dispatch(fetchNearbyDevices(location))
		}
	};
};

const SelectedDeviceList = connect(
	mapStateToProps,
	mapDispatchToProps
)(DeviceList);

export default SelectedDeviceList;
