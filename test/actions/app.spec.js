import expect from 'expect';
import * as actions from '../../actions';
describe('app actions', () => {
	it('setSelected should create SET_SELECTED action', () => {
		expect(actions.setSelected('123')).toEqual({
			type: 'SET_SELECTED',
			selectedDevice: '123'
		});
	});
});
