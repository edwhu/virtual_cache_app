import { connect } from 'react-redux';
import { setSelected, fetchNearbyDevices } from '../actions';
import NearbyDeviceList from '../components/NearbyDeviceList.js';

const setNearbyDevices = (nearbyDevices, selected) => {
  return nearbyDevices.map( device => {
    if(device._id == selected)
      return Object.assign({}, device, {selected:true});
    return Object.assign({}, device, {selected:false});
  });
}

const mapStateToProps = state => {
  return {
    nearbyDevices:setNearbyDevices(state.nearbyDevices, state.selectedDevice)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeviceClick: name => {
      dispatch(setSelected(name));
    }
  }
}

const SelectedNearbyDeviceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NearbyDeviceList);

export default SelectedNearbyDeviceList;
