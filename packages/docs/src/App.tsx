import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '@some-react-components/common';
import { Button } from '@some-react-components/ui';

export default function App(): React.ReactElement {
  return (
    <UserContext.Provider value={{}}>
      <div>
        <h1>Hello world</h1>
        <Switch>
          <Route path="/button">
            <Button />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}
