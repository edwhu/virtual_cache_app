import React, { PropTypes } from 'react';
import Device from './Device.js';

const DeviceList = ({ devices, onDeviceClick}) => (
	<ul>
		{devices.map(device =>
				<Device
					key={device.name}
					name={device.name}
					selected={device.selected}
					onClick={() => onDeviceClick(device.id)}
				/>
			)}
	</ul>
);

DeviceList.propTypes = {
	devices: PropTypes.arrayOf(PropTypes.shape({
	name: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onDeviceClick: PropTypes.func.isRequired
};

export default DeviceList;
