import chai from 'chai';
import React from 'react';
import App from '../src/ui-core/components/App';
import { shallow } from 'enzyme';
import { start } from 'repl';

let expect = chai.expect;
describe('<App/>', () => {
	it('contain a start new game button', () => {
		const wrapper = shallow(<App />);
		const startNewGame = wrapper.find(".start-new-game");
		expect(startNewGame.prop('onClick')).to.be.a('function');
	});
});
