import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import TextInput from '../TextInput';

export default function MenuExpanded() {
	return (
		<div>
			<FontAwesomeIcon
				icon={faChevronUp}
				size={'xs'}
				className={`chevron`}
			/>
			<TextInput placeholder={'Player Name'} />
		</div>
	);
}
