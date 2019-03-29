import { useState, useEffect } from 'react';

export default function useNewTimedIncrementor( incrementor = 1, interval = 10) {
	const [incrementedValue, setIncrementedValue] = useState(0);

	useEffect(() => {
		
		var timerID = setInterval(() => tick(), interval);
		return function cleanup() {
			clearInterval(timerID);
		};
	});

	function tick() {
		setIncrementedValue(incrementedValue + incrementor);
	}

	return incrementedValue;
}