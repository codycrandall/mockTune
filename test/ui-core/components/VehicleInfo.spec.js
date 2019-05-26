import React from 'react';
import { mount } from 'enzyme';
import VehicleInfo from 'Components/VehicleInfo';

describe('VehicleInfo', () => {
    let props, vehicleInfo;

    beforeEach(() => {
        props = {
            car: chance.car()
        }
        vehicleInfo = mount(<VehicleInfo {...props} />)

    });

    it('should render with props', () => {
        expect(vehicleInfo.find('.model-info').text()).eql(
            `${props.car.year} ${props.car.make} ${props.car.model} ${props.car.trim}`
        );
    });
});
