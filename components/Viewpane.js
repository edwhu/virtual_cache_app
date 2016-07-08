import React, { PropTypes } from 'react';
import VideoTable from './VideoTable'
import {ViewpaneStyle, TableStyle, TableDataStyle} from '../styles/ViewpaneStyle.js'
const Viewpane = ({selectedDevice}) => {
	let cacheArray = selectedDevice.cache.map(video => {
		//console.log('video',video._id);
		return <VideoTable key={video._id} style={TableDataStyle} video={video} />
	});

	return (
		<div style = {ViewpaneStyle}>
			<table style={TableStyle}>
				<tbody>
					<tr>
						<th style={TableDataStyle}>Name</th>
						<th style={TableDataStyle}>location</th>
						<th style={TableDataStyle}>d2d</th>
						<th style={TableDataStyle}>date</th>
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
						<th style={TableDataStyle}>Video</th>
						<th style={TableDataStyle}>Duration</th>
						<th style={TableDataStyle}>Length</th>
					</tr>
					{cacheArray}
				</tbody>
			</table>
		</div>
	);
};

export default Viewpane;
