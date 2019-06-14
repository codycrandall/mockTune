import React from 'react';
import { mount } from 'enzyme';
import { Link, MemoryRouter } from 'react-router-dom';


import ChangeName from 'Components/ChangeName';
import TextInput from 'Components/TextInput';
import { enterText } from '../../utilities/test-utilities';


describe('<changeName />', () => {
	let changeName, setName, textInput, props;

	beforeEach(() => {
		changeName = render();
		textInput = changeName.find(TextInput);
		setName = changeName.find('.change-name-menu').childAt(1);
	});

	after(() => {
		changeName.unmount();
	});

	it('should render a text input with the placeholder "Player Name" if there is no player name', () => {
		const overrides = {
			setPlayer: sinon.stub(),
			player: {}
		};

		changeName = render(overrides);
		textInput = changeName.find(TextInput);

		expect(textInput.prop('placeholder')).eql('Player Name');
	});

	it('should render a text input with the player name as placeholder if it exists', () => {
		expect(textInput.prop('placeholder')).eql(props.player.name);
	});

	describe('"Save" button', () => {
		it('should render', () => {
			expect(setName.text()).eql('Save');
		});

		describe('when clicked', () => {
			it('should call setPlayer without overriding existing bank balance', () => {
				const expectedText = chance.word();

				enterText(textInput, expectedText);
				setName.simulate('click');

				expect(props.setPlayer).calledOnce;
				expect(props.setPlayer).calledWith({ bankBalance: props.player.bankBalance, name: expectedText });

			});

			it('should have a link to navigate back to the main menu', () => {
				const closeWithoutSaving = changeName.find('.change-name-menu').childAt(2).find('Link');
				expect(closeWithoutSaving.prop('to')).eql('/');
				expect(closeWithoutSaving.text()).eql('Close without saving');
			});
		});
	});

	function render(overrides = {}) {
		props = {
			setPlayer: sinon.stub(),
			player: { bankBalance: chance.natural(), name: chance.name() }
		};
		return mount(<MemoryRouter><ChangeName {...props} {...overrides} /></MemoryRouter>);
	}
});
