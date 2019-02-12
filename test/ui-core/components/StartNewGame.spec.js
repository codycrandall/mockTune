import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import StartNewGame from '../../../src/ui-core/components/StartNewGame';
import TextInput from '../../../src/ui-core/components/TextInput';

describe('<StartNewGame />', () => {
	let startNewGame;

	beforeEach(() => {
		startNewGame = mount(<StartNewGame />);
	});

	afterEach(() => {
		startNewGame.unmount();
	});

	it('should render the button text', () => {
		expect(startNewGame.text()).eql('Start New Game');
	});

	it('should initially render a closed chevron', () => {
		assertFontAwesomeIcon(faChevronDown);
	});

	it('should display an open chevron after being clicked', () => {
		startNewGame.find('.start-new-game').prop('onClick')();

		startNewGame.update();

		assertFontAwesomeIcon(faChevronUp);
	});
	describe('name input', () => {
		it('should display after being clicked', () => {
			startNewGame.find('.start-new-game').prop('onClick')();
			startNewGame.update();

			expect(startNewGame.find(TextInput).type()).eql(TextInput);
		});
	});

	function assertFontAwesomeIcon(icon) {
		const fontAwesome = startNewGame.find(FontAwesomeIcon);

		expect(fontAwesome.prop('icon')).eql(icon);
	}
});
