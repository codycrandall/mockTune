import React from 'React';
import CarList from 'Components/CarList';
import {mount} from 'enzyme';

describe('CarList', () => {
	it('should render with props', () => {
		const car = 
			{
				make: chance.string(),
				model: chance.string(),
				year: chance.natural(),
				trim: chance.string(),
				horsepower: chance.floating({ min: 1 }),
				'curb-weight': chance.floating({ min: 1 }),
				price: chance.dollar(),
				reliablility: chance.normal()
			};
		const carList = mount(<CarList car={car} />);
		
		expect(carList.find('.car').childAt(0).text()).eql(`${car.year} ${car.make} ${car.model} ${car.trim}`);
		expect(carList.find('.car').childAt(1).text()).eql(`horsepower: ${car.horsepower}`);
		expect(carList.find('.car').childAt(2).text()).eql(`curb weight: ${car['curb-weight']}`);
		expect(carList.find('.car').childAt(3).text()).eql(`cost: ${car.price}`);
	});
});
