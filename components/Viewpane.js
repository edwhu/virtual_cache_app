import React, { PropTypes } from 'react';
import VideoTable from './VideoTable'
import {ViewpaneStyle, TableStyle, TableDataStyle} from '../styles/ViewpaneStyle.js'
const Viewpane = ({selectedDevice}) => {
	let cacheArray = selectedDevice.cache.map(video => {
		return <VideoTable key={video.name + selectedDevice._id} style={TableDataStyle} video={video} />
	});

	return (
		<div style = {ViewpaneStyle}>
			<table style={TableStyle}>
				<tbody>
					<tr>
						<th>Name</th>
						<th>location</th>
						<th>d2d</th>
						<th>date</th>
					</tr>
					<tr>
						<td style={TableDataStyle}>{selectedDevice.name}</td>
						<td style={TableDataStyle}>{selectedDevice.loc.join(' ')}</td>
						<td style={TableDataStyle}>{selectedDevice.d2d}</td>
						<td style={TableDataStyle}>{selectedDevice.time}</td>
					</tr>
				</tbody>
			</table>
			<table style={TableStyle}>
				<tbody>
					<tr>
						<th>Video</th>
						<th>Length</th>
					</tr>
					{cacheArray}
				</tbody>
			</table>
		</div>
	);
};

export default Viewpane;
