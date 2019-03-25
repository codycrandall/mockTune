import React from 'react';
import { mount } from 'enzyme';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import MenuExpanded from 'Components/start-new-game/MenuExpanded';
import TextInput from 'Components/TextInput';
import { assertFontAwesomeIcon } from '../../../utilities/test-utilities';

describe('<MenuExpanded />', () => {
	let menuExpanded, textInput, event, props;

	beforeEach(() => {
		event = { stopPropagation: sinon.stub() };
		props = {
			setNameContext: sinon.stub()
		};
		menuExpanded = mount(<MenuExpanded {...props} />);
		textInput = menuExpanded.find(TextInput);
	});

	afterEach(() => {
		menuExpanded.unmount();
	});

	it('should render an open chevron', () => {
		assertFontAwesomeIcon(menuExpanded, faChevronUp);
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

			it('should call setNameContext if the name is not blank', () => {
				const expectedText = chance.word();
				const textEvent = { target: { value: expectedText } };

				textInput.simulate('change', textEvent);
				menuExpanded.find('button').simulate('click', event);

				expect(props.setNameContext).calledOnce;
				expect(props.setNameContext).calledWith(expectedText);
			});

			it('should not call setNameContext if the name is blank', () => {
				const expectedText = '    ';
				const textEvent = { target: { value: expectedText } };

				textInput.simulate('change', textEvent);
				menuExpanded.find('button').simulate('click', event);

				expect(props.setNameContext).not.called;
			});
		});
	});
});
