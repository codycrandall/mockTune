import React from 'React';
import Car from 'Components/Car';
import { mount } from 'enzyme';

describe('Car', () => {
	let car, setCar, expectedCar;

	beforeEach(() => {
		expectedCar = chance.car();
		setCar = sinon.stub();
		car = mount(<Car car={expectedCar} setCar={setCar} />);
	});

	it('should render with props', () => {

		expect(
			car
				.find('.car')
				.childAt(0)
				.text()
		).eql(`${expectedCar.year} ${expectedCar.make} ${expectedCar.model} ${expectedCar.trim}`);
		expect(
			car
				.find('.car')
				.childAt(1)
				.text()
		).eql(`horsepower: ${expectedCar.horsepower}`);
		expect(
			car
				.find('.car')
				.childAt(2)
				.text()
		).eql(`curb weight: ${expectedCar['curb-weight']}`);
		expect(
			car
				.find('.car')
				.childAt(3)
				.text()
		).eql(`cost: ${expectedCar.price}`);
	});

	it('should call setCar when a car is clicked', () => {
		car.simulate('click');
		expect(setCar).calledWith(expectedCar);
	});
});
