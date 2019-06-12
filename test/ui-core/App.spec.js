import React from 'react';
import { mount } from 'enzyme';

import { BrowserRouter as MemoryRouter, Switch } from 'react-router-dom';

import App from 'Src/App';
import Router from 'Components/Router';
describe('<App/>', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<MemoryRouter><App /></MemoryRouter>);
	});

	after(() => {
		wrapper.unmount();
	});

	it('should render a Router and pass the player hook', () => {
		const router = wrapper.find(Router);
		expect(router).lengthOf(1);
		expect(router.prop('player')).to.be.a('Object');
		expect(router.prop('setPlayer')).to.be.a('Function');
	});
});