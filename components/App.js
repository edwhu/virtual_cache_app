import React from 'react';
import SelectedDeviceList from '../containers/SelectedDeviceList.js';
import SelectedViewpane from '../containers/SelectedViewpane.js';
import SelectedMap from '../containers/SelectedMap.js';
const App = () => (
  <div>
    <SelectedDeviceList />
		<SelectedViewpane />
		<SelectedMap />
  </div>
);

export default App;
