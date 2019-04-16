import React from 'React';
import CarListItem from 'Components/CarListItem';
import { mount } from 'enzyme';

describe('CarListItem', () => {
	let car, setPlayer, expectedCar;

	beforeEach(() => {
		expectedCar = chance.car();
		setPlayer = sinon.stub();
		car = mount(<CarListItem car={expectedCar} setPlayer={setPlayer} />);
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

	it('should call setPlayer when a car is clicked', () => {
		car.simulate('click');
		expect(setPlayer).calledWith(expectedCar);
	}); 

	const carAtIndex = (index) => {
		return car
			.find('.car')
			.childAt(index)
			.text();
	}
});
