import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { RestaurantList, RestaurantMenu } from './screens';
import { Header } from './components';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Switch>
          <Route exact path="/">
            <RestaurantList/>
          </Route>
          <Route exact path="/restaurant/:name">
            <RestaurantMenu/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
