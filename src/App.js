import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { RestaurantList } from './screens';
import { Header } from './components';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <RestaurantList/>
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
