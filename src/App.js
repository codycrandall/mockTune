
import React, { useState } from 'react';

import './ui-core/sass/App.scss';
import './ui-core/sass/style-baseline.scss';
import MainMenu from './ui-core/components/start-new-game/MainMenu';

export default function App() {
    const [player, setPlayer] = useState({ bankBalance: 2000 });

    return (
        <React.StrictMode>
            <div className={'wrapper'}>
                <MainMenu player={player} setPlayer={setPlayer} />
            </div>
        </React.StrictMode>
    );
}