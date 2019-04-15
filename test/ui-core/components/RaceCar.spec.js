import React from 'React';
import { mount } from 'enzyme';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import sinon from 'sinon';

import RaceCar from 'Components/RaceCar';
import { expectWrapperHasIcon } from '../../utilities/test-utilities';

describe('RaceCar', () => {
	let expectedCar, expectedName, props;

	beforeEach(() => {
		expectedCar = chance.car();
		expectedName = chance.name();

		props = {
			competitor: expectedName,
			car: expectedCar,
			raceInProgress: false,
			setRaceInProgress: sinon.stub(),
			finishLineCoordinates: chance.natural(),
			setWinner: sinon.stub()
		};
	});

	it('should render a racecar icon', () => {
		const raceCar = render(props);

		expectWrapperHasIcon(raceCar, faCarSide);
	});

	it('should not set amountMoved if raceStarted is false', () => {
		const raceCar = render(props);

		expect(raceCar.prop('style').left).eql('0px');

	});

	it('should stop the race when amount moved is greater than or equal to finish line coordinates', () => {
		const overrides = {
			raceInProgress: true,
			finishLineCoordinates: 100,
			car: chance.car({ horsepower: 10, 'curb-weight': 1 })
		};
		const clock = sinon.useFakeTimers();
		const raceCar = render(props, overrides);

		clock.tick(10);
		raceCar.update();

		// expect(raceCar.prop('style').left).eql('100px');
		expect(props.setWinner).calledOnce;
		expect(props.setWinner).calledWith(expectedName);

		expect(props.setRaceInProgress).calledOnce;
		expect(props.setRaceInProgress).calledWith(false);
	});

	it('should not stop the race when amount moved is less than the finish line coordinates', () => {
		const overrides = {
			raceInProgress: true,
			finishLineCoordinates: 101,
			car: chance.car({ horsepower: 10, 'curb-weight': 1 })
		};
		const clock = sinon.useFakeTimers();
		render(props, overrides);

		clock.tick(10);

		expect(props.setWinner).not.called;
		expect(props.setRaceInProgress).not.called;
	});

	function render(props, overrides = {}) {
		return mount(<RaceCar {...props} {...overrides} />).childAt(0);
	}
});
