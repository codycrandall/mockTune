import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import '../../sass/components/start-new-game/MenuExpanded.scss';
import TextInput from '../TextInput';

export default class MenuExpanded extends Component {
	render() {
		return (
			<div>
				<TextInput placeholder={'Player Name'} />
				<FontAwesomeIcon
					icon={faChevronUp}
					size={'xs'}
					className={`chevron`}
				/>
				<button
					onClick={event => {
						event.stopPropagation();
					}}
				>
					GO
				</button>
			</div>
		);
	}
}
