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

	it('should render the button with text', () => {
		expect(startNewGame.text()).eql('Start New Game');
	});

	it('should initially render a closed chevron', () => {
		assertFontAwesomeIcon(faChevronDown);
	});

	it('should display an open chevron after being clicked', () => {
		clickStartNewGame();

		assertFontAwesomeIcon(faChevronUp);
	});
	describe('name input', () => {
		it('should not display before start new game is clicked', () => {
			expect(startNewGame.find(TextInput)).lengthOf(0);

		});

		it('should display with a placeholder after start new game is clicked', () => {
			clickStartNewGame();
			
			const textInput = startNewGame.find(TextInput);

			expect(textInput.type()).eql(TextInput)
			expect(textInput.prop('placeholder')).eql('Player Name');
		});
	});

	function assertFontAwesomeIcon(icon) {
		const fontAwesome = startNewGame.find(FontAwesomeIcon);

		expect(fontAwesome.prop('icon')).eql(icon);
	}

	function clickStartNewGame() {
		startNewGame.find('.start-new-game').prop('onClick')();
		startNewGame.update();
	};
});
