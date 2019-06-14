import React from 'react';
import '../sass/components/StyledButton.scss';

export default function StyledButton(props) {

    return (
        <button className={'styled-button'} {...props} />
    );
}
