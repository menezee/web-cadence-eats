import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Confirmation,
  CourierOnTheirWay,
  EstimatingArrival,
  OrderArrived,
  RestaurantList,
  RestaurantMenu,
  ReviewOrder,
} from './screens';
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
          <Route exact path="/review">
            <ReviewOrder/>
          </Route>
          <Route exact path="/confirmation">
            <Confirmation/>
          </Route>
          <Route exact path="/estimating-arrival">
            <EstimatingArrival/>
          </Route>
          <Route exact path="/courier-on-their-way">
            <CourierOnTheirWay/>
          </Route>
          <Route exact path="/order-arrived">
            <OrderArrived/>
          </Route>
        </Switch>
      </main>
      <CartOverlay/>
    </Router>
  );
}

export default App;
