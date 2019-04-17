import React from 'React';
import CarListItem from 'Components/CarListItem';
import { mount } from 'enzyme';

describe('CarListItem', () => {
	let props, expectedCar;

	beforeEach(() => {
		props = {
			setPlayer: sinon.stub(),
			car: chance.car(),
			player: {
				bankBalance: chance.natural()
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

	describe('bank balance is greater than  car price', () => {
		it('should call setPlayer on click', () => {
			const overrides = {
				car: chance.car({ price: 99 }),
				player: {
					bankBalance: 100
				}
			};

			const car = render(overrides);

			car.simulate('click');

			expect(props.setPlayer).calledWith({
				car: overrides.car,
				bankBalance: overrides.player.bankBalance - overrides.car.price
			});			
		});
	});
	describe('bank balance is equal to car price', () => {
		it('should call setPlayer on click, and leave a bank balance of 0', () => {
			const overrides = {
				car: chance.car({ price: 100 }),
				player: {
					bankBalance: 100
				}
			};

			const car = render(overrides);

			car.simulate('click');

			expect(props.setPlayer).calledWith({
				car: overrides.car,
				bankBalance: overrides.player.bankBalance - overrides.car.price
			});			
		});
	});

	describe('bank balance is less than the cost of a car', () => {
		it('should not call setPlayer on click', () => {
			const overrides = {
				car: chance.car({ price: 101 }),
				player: {
					bankBalance: 100
				}
			};

			const car = render(overrides);

			car.simulate('click');

			expect(props.setPlayer).not.called;
		});
	});

	const carPropsAtIndex = (car, index) => {
		return car
			.find('.car')
			.childAt(index)
			.text();
	};

	function render(overrides) {
		return mount(<CarListItem {...props} {...overrides} />);
	}
});
