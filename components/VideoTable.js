import React, { PropTypes } from 'react'

const VideoTable = ({style, video}) => {
	return (
	<tr>
		<td style={style}>{video.name}</td>
		<td style={style}>{video.duration}</td>
		<td style={style}>{video.length}</td>
		<td style={style}>{video.dataQuality}</td>
		<td style={style}>{video.wifiQuality}</td>
		<td style={style}>{video.battery}</td>
	</tr>
	);
}

export default VideoTable;
