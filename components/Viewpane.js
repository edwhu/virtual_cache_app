import React, { PropTypes } from 'react';
import VideoTable from './VideoTable'
import {ViewpaneStyle, TableStyle, TableDataStyle} from '../styles/ViewpaneStyle.js'
const Viewpane = ({selectedDevice}) => {
	let cacheArray = selectedDevice.cache.map(video => {
		//console.log('video',video._id);
		return <VideoTable key={video._id} style={TableDataStyle} video={video}  />
	});
	return (
		<div style = {ViewpaneStyle}>
			<table style={Object.assign({},TableStyle,{width:'40%'})}>
				<tbody>
					<tr>
						<th style={TableDataStyle}>Name</th>
						<th style={TableDataStyle}>location</th>
						<th style={TableDataStyle}>date</th>
					</tr>
					<tr>
						<td style={TableDataStyle}>{selectedDevice.name}</td>
						<td style={TableDataStyle}>{selectedDevice.loc.coordinates}</td>
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
						<th style={TableDataStyle}>Data</th>
						<th style={TableDataStyle}>Wifi</th>
						<th style={TableDataStyle}>Battery</th>
						<th style={TableDataSTyle}>Location</th>
					</tr>
					{cacheArray}
				</tbody>
			</table>
		</div>
	);
};

export default Viewpane;
