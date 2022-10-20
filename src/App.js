import React from 'react';
import { Router, Route } from '@urban-bot/core';
import { Echo } from './Echo/Echo';
import { FirstMessage } from './FirstMessage/FirstMessage';
import { WantToHardWork } from './WantToHardWork/WantToHardWork';
import { DialogTest } from './Dialog/Dialog';
// import { FlatDialogExample } from './Dialog/Test';

export function App() {
    return (
        <Router>
            <Route path="/">
                {/* <FlatDialogExample /> */}
                <DialogTest/>
            </Route>
            <Route path="/echo">
                <Echo />
            </Route>
            <Route path="/want-to-hard-work">
                <WantToHardWork />
            </Route>
            <Route path="/dialog">
                <FirstMessage />
            </Route>
        </Router>
    );
}