import React, { PropTypes } from 'react';
import uniqueId from 'lodash.uniqueid';
import {NearbyDeviceListStyle} from '../styles/NearbyDeviceListStyle.js';
import Device from './Device.js';

const NearbyDeviceList = ({nearbyDevices, onDeviceClick}) => {
  const originalDevice = nearbyDevices[0] || 'none';
  let others = nearbyDevices.slice(1,nearbyDevices.length);
  return (
    <div style={NearbyDeviceListStyle}>
      <h>Nearby Devices to {(originalDevice === 'none') ? 'none' : originalDevice.name} </h>
			<ul>
				{others.map(device =>
					<Device
						key={device._id + uniqueId()}
						name={device.name}
						selected={device.selected}
						onClick={() => onDeviceClick(device._id)}
						/>
				)}
			</ul>
		</div>
  );
};

export default NearbyDeviceList;
