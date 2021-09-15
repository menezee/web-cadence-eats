import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { RestaurantList, RestaurantMenu } from './screens';
import { Header, CartOverlay } from './components';

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
      <CartOverlay />
    </Router>
  );
}

export default App;
