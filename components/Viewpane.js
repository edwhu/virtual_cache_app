import React, { PropTypes } from 'react';
import VideoTable from './VideoTable';
import uniqueId from 'lodash.uniqueid';
import {ViewpaneStyle, TableStyle, TableDataStyle} from '../styles/ViewpaneStyle.js';
const Viewpane = ({selectedDevice}) => {
	let cacheArray = selectedDevice.cache.map(video => {
		//console.log('video',video._id);
		return <VideoTable key={uniqueId()} style={TableDataStyle} video={video}  />;
	});
	if(selectedDevice.loc.coordinates == null) {
		selectedDevice.loc.coordinates = [];
	}
	return (
		<div style = {ViewpaneStyle}>
			<table style={Object.assign({},TableStyle,{width:'30%'})}>
				<tbody>
					<tr>
						<th style={TableDataStyle}>Name</th>
						<th style={TableDataStyle}>Date</th>
						<th style={TableDataStyle}>Location</th>
					</tr>
					<tr>
						<td style={TableDataStyle}>{selectedDevice.name}</td>
						<td style={TableDataStyle}>{selectedDevice.time}</td>
						<td style={TableDataStyle}>{selectedDevice.loc.coordinates.join()}</td>
					</tr>
				</tbody>
			</table>
			<table style={Object.assign({},TableStyle,{width:'70%'})}>
				<tbody>
					<tr>
						<th style={TableDataStyle}>Video</th>
						<th style={TableDataStyle}>Duration</th>
						<th style={TableDataStyle}>Length</th>
						<th style={TableDataStyle}>Data</th>
						<th style={TableDataStyle}>Wifi</th>
						<th style={TableDataStyle}>Battery</th>
						{<th style={TableDataStyle}>Location</th>}
					</tr>
					{cacheArray}
				</tbody>
			</table>
		</div>
	);
};

export default Viewpane;
