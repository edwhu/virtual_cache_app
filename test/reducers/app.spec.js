import expect from 'expect';
import reducer from '../../reducers/index.js';

describe('app reducer', () => {
	it('should handle initial state', () => {
		expect(
			reducer(undefined,{})
		).toEqual({selectedDevice:'', devices:[]});
	});

	it('should handle selected device', () => {
		expect(
			reducer(undefined, {
				type:'SET_SELECTED',
				selectedDevice:'123'
			})
		).toEqual({
			selectedDevice:'123',
			devices:[]
		});
	});
});
