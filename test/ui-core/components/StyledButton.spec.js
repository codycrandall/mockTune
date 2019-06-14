import React from 'react';
import { mount } from 'enzyme';

import StyledButton from 'Components/StyledButton';


describe('<StyledButton />', () => {
    let styledButton, props;

    beforeEach(() => {
        styledButton = render();
    });

    after(() => {
        styledButton.unmount();
    });

    it('should render with props', () => {
        styledButton = render();

        expect(styledButton.prop('text')).eql(props.text);
    });

    function render(overrides = {}) {
        props = {
            text: chance.string()
        };
        return mount(<StyledButton {...props} {...overrides} />);
    }
});
