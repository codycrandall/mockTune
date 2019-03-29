import React from 'React';
import CarListItem from 'Components/CarListItem';
import { mount } from 'enzyme';

describe('CarListItem', () => {
	let car, setCar, expectedCar;

	beforeEach(() => {
		expectedCar = chance.car();
		setCar = sinon.stub();
		car = mount(<CarListItem car={expectedCar} setCar={setCar} />);
	});

	it('should render with props', () => {
		expect(
			carAtIndex(0)
		).eql(
			`${expectedCar.year} ${expectedCar.make} ${expectedCar.model} ${
				expectedCar.trim
			}`
		);
		expect(carAtIndex(1)).eql(`horsepower: ${expectedCar.horsepower}`);
		expect(
			carAtIndex(2)
		).eql(`curb weight: ${expectedCar['curb-weight']}`);
		expect(carAtIndex(3)).eql(`cost: ${expectedCar.price}`);
	});

	it('should call setCar when a car is clicked', () => {
		car.simulate('click');
		expect(setCar).calledWith(expectedCar);
	}); 

	const carAtIndex = (index) => {
		return car
			.find('.car')
			.childAt(index)
			.text();
	}
});
