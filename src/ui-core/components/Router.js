import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import MainMenu from './MainMenu';
import ChooseCarMenu from './ChooseCarMenu';
import RaceMenu from './RaceMenu';
import ChangeName from './ChangeName';
import '../sass/components/Router.scss';

const Router = (props) => (
    <main>
        <Switch>
            <Route exact={true} path='/' render={() => <MainMenu player={props.player} />} />
            <Route path='/ChooseCarMenu' render={() => <ChooseCarMenu player={props.player} setPlayer={props.setPlayer} />} />
            <Route path='/ChangeNameMenu' render={() => <ChangeName player={props.player} setPlayer={props.setPlayer} />} />
            <Route path='/RaceMenu' render={() => <RaceMenu player={props.player} setPlayer={props.setPlayer} />} />
        </Switch>
    </main>
)

export default Router;
