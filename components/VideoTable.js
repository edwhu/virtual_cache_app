import React, { PropTypes } from 'react';

const VideoTable = ({style, video}) => {
	if(video.location == null) {
		video.location = [];
	}
	return (
	<tr>
		<td style={style}>{video.name}</td>
		<td style={style}>{video.duration}</td>
		<td style={style}>{video.length}</td>
		<td style={style}>{video.dataQuality}</td>
		<td style={style}>{video.wifiQuality}</td>
		<td style={style}>{video.battery}</td>
		{<td style={style}>{video.location.join()}</td>}
	</tr>
	);
};

export default VideoTable;
