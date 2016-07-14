import React from 'react';
import SelectedDeviceList from '../containers/SelectedDeviceList.js';
import SelectedViewpane from '../containers/SelectedViewpane.js';
import SelectedMap from '../containers/SelectedMap.js';
import SelectedNearbyDeviceList from '../containers/SelectedNearbyDeviceList.js';
const App = () => (
	<div>
		<SelectedMap />
		<SelectedViewpane />
		<SelectedNearbyDeviceList />
		<SelectedDeviceList />
	</div>
);

export default App;
