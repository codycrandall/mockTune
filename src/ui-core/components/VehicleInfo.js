import React from 'react';
import PropTypes from 'prop-types';

export default function VehicleInfo(props) {
    VehicleInfo.propTypes = {
        car: PropTypes.object,
    };
    const { car } = props;

    return (
        <div className={'model-info'}>
            {car.year} {car.make} {car.model} {car.trim}
        </div>
    );

}
