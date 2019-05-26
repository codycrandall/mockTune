import React from 'react';
import { mount } from 'enzyme';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import MenuExpanded from 'Components/start-new-game/MenuExpanded';
import TextInput from 'Components/TextInput';
import { expectWrapperHasIcon } from '../../../utilities/test-utilities';
import { enterText } from '../../../utilities/test-utilities';

describe('<MenuExpanded />', () => {
	let menuExpanded, textInput, event, props;

	beforeEach(() => {
		event = { stopPropagation: sinon.stub() };
		menuExpanded = render();
		textInput = menuExpanded.find(TextInput);
	});

	after(() => {
		menuExpanded.unmount();
	});

	it('should render an open chevron', () => {
		expectWrapperHasIcon(menuExpanded, faChevronUp);
	});

	it('should render a text input with the placeholder "Player Name" if there is no player name', () => {
		const overrides = {
			setPlayer: sinon.stub(),
			player: {}
		};

		menuExpanded = render(overrides);
		textInput = menuExpanded.find(TextInput);

		expect(textInput.prop('placeholder')).eql('Player Name');
	});

	it('should render a text input with the player name as placeholder if it exists', () => {
		expect(textInput.prop('placeholder')).eql(props.player.name);
	});

	describe('"GO" button', () => {
		it('should render', () => {
			const goButton = menuExpanded.find('button');
			expect(goButton.text()).eql('Set Name');
		});

		describe('when clicked', () => {
			it('should not close MenuExpanded', () => {
				menuExpanded.find('button').simulate('click', event);
				expect(event.stopPropagation).calledOnce;
			});

			it('should call setPlayer if the name is not blank', () => {
				const expectedText = chance.word();

				enterText(textInput, expectedText);
				menuExpanded.find('button').simulate('click', event);

				expect(props.setPlayer).calledOnce;
			});

			it('should not override existing bankBalance in player object', () => {
				const expectedText = chance.word();

				enterText(textInput, expectedText);
				menuExpanded.find('button').simulate('click', event);
				expect(props.setPlayer).calledWith({ bankBalance: props.player.bankBalance, name: expectedText });
			})

			it('should not call setPlayer if the name is blank', () => {
				const expectedText = '    ';

				enterText(textInput, expectedText);
				menuExpanded.find('button').simulate('click', event);

				expect(props.setPlayer).not.called;
			});
		});
	});

	function render(overrides = {}) {
		props = {
			setPlayer: sinon.stub(),
			player: { bankBalance: chance.natural(), name: chance.name() }
		};
		return mount(<MenuExpanded {...props} {...overrides} />);
	}
});
