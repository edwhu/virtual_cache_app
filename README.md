#State
For the VC app, we want to store:
- List of Devices
- Device selected filter
##State Tree
{
	deviceList:[{name, time, loc, }],
	deviceSelected: "<deviceId>"
}
#Presentational Components
*`Map` is the map of markers.
..*`markers: Array` is an array of devices with {deviceID, lng, lat}
..*`onMarkerClick(id: Number)` is a callback to invoke when marker is clicked. Uses onChildClick(key,childProps) to get marker props.
*`Marker` will mark a device on the map.
*`DeviceList` is the list of devices in the DB.
..*
*`Device` is a single device.
..*
*`ViewPane` is used to look at a selected device.
..*
