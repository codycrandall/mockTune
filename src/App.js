import React, { useState } from 'react';

import './ui-core/sass/App.scss';
import './ui-core/sass/style-baseline.scss';
import Router from './ui-core/components/Router';

export default function App() {
    const [player, setPlayer] = useState({ bankBalance: 2000 });

    return (
        <React.StrictMode>
            <div className={'wrapper'}>
                <Router player={player} setPlayer={setPlayer} />
            </div>
        </React.StrictMode>
    );
}
