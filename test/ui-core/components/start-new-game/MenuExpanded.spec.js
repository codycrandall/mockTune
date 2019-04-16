import React from 'react';
import { mount } from 'enzyme';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import MenuExpanded from 'Components/start-new-game/MenuExpanded';
import TextInput from 'Components/TextInput';
import { expectWrapperHasIcon } from '../../../utilities/test-utilities';
import {enterText} from '../../../utilities/test-utilities';

describe('<MenuExpanded />', () => {
	let menuExpanded, textInput, event, props;

	beforeEach(() => {
		event = { stopPropagation: sinon.stub() };
		props = {
			setPlayer: sinon.stub()
		};
		menuExpanded = mount(<MenuExpanded {...props} />);
		textInput = menuExpanded.find(TextInput);
	});

	after(() => {
		menuExpanded.unmount();
	});

	it('should render an open chevron', () => {
		expectWrapperHasIcon(menuExpanded, faChevronUp);
	});

	it('should render a text input with the text "Player Name"', () => {
		expect(textInput.prop('placeholder')).eql('Player Name');
	});

	describe('"GO" button', () => {
		it('should render', () => {
			const goButton = menuExpanded.find('button');
			expect(goButton.text()).eql('GO');
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
				expect(props.setPlayer).calledWith({name: expectedText});
			});

			it('should not call setPlayer if the name is blank', () => {
				const expectedText = '    ';
				
				enterText(textInput, expectedText);
				menuExpanded.find('button').simulate('click', event);

				expect(props.setPlayer).not.called;
			});
		});
	});
});
