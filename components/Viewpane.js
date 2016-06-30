import React, { PropTypes } from 'react';
const Viewpane = ({selectedDevice}) => {
	console.log('viewpane', selectedDevice);
	return (
		<div>
		<table>
			<tbody>
			<tr>
				<th>Name</th>
				<th>location</th>
				<th>d2d</th>
				<th>time</th>
			</tr>
			<tr>
				<td>{selectedDevice.name}</td>
				<td>{selectedDevice.loc.join(' ')}</td>
				<td>{selectedDevice.d2d}</td>
				<td>{selectedDevice.time}</td>
			</tr>
		</tbody>
	</table>
</div>
);
};

export default Viewpane;
