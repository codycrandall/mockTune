import React from 'react';
import CarListItem from 'Components/CarListItem';
import { mount } from 'enzyme';

describe('CarListItem', () => {
	let props, expectedCar;

	beforeEach(() => {
		props = {
			setPlayer: sinon.stub(),
			car: chance.car({ price: 100 }),
			player: {
				name: chance.name(),
				bankBalance: 100
			}
		};
		expectedCar = props.car;
	});

	it('should render with props', () => {
		const car = render();
		expect(carPropsAtIndex(car, 0)).eql(
			`${expectedCar.year} ${expectedCar.make} ${expectedCar.model} ${
				expectedCar.trim
			}`
		);
		expect(carPropsAtIndex(car, 1)).eql(
			`horsepower: ${expectedCar.horsepower}`
		);
		expect(carPropsAtIndex(car, 2)).eql(
			`curb weight: ${expectedCar['curb-weight']}`
		);
		expect(carPropsAtIndex(car, 3)).eql(`cost: ${expectedCar.price}`);
	});

	describe('bank balance is greater than car price', () => {
		it('should call setPlayer on click', () => {
			const overrides = {
				car: chance.car({ price: 99 })
			};

			const car = render(overrides);

			car.simulate('click');

			expect(props.setPlayer).calledWith({
				car: overrides.car,
				bankBalance: props.player.bankBalance - overrides.car.price,
				name: props.player.name
			});			
		});
	});

	describe('bank balance is equal to car price', () => {
		it('should update player car, bankBalance, but keep the name the same', () => {
			const car = render();

			car.simulate('click');

			expect(props.setPlayer).calledWith({
				name: props.player.name,
				car: props.car,
				bankBalance: props.player.bankBalance - props.car.price
			});			
		});
	});

	describe('bank balance is less than the cost of a car', () => {
		it('should not call setPlayer on click', () => {
			const overrides = {
				car: chance.car({ price: 101 })
			};

			const car = render(overrides);

			car.simulate('click');

			expect(props.setPlayer).not.called;
		});

		it('should add "disabled" to the className', () => {
			const overrides = {
				car: chance.car({ price: 101 })
			};

			const car = render(overrides).find('.car.disabled');
			expect(car).lengthOf(1);
		});
	});

	const carPropsAtIndex = (car, index) => {
		return car
			.find('.car')
			.childAt(index)
			.text();
	};

	function render(overrides = {}) {
		return mount(<CarListItem {...props} {...overrides} />);
	}
});
