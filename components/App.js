import React from 'react';
import SelectedDeviceList from '../containers/SelectedDeviceList.js';
import SelectedViewpane from '../containers/SelectedViewpane.js';
import SelectedMap from '../containers/SelectedMap.js';
const App = () => (
	<div>
		<SelectedMap />
		<SelectedViewpane />
		<SelectedDeviceList />
	</div>
);

export default App;
