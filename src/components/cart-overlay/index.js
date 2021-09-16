import { useContext } from 'react';
import { useStyletron } from 'baseui';
import { Button, KIND, SHAPE } from 'baseui/button';
import { useHistory, useLocation } from 'react-router-dom';

import { CartContext } from '../../contexts/cart';

function UseStyletronExample() {
  const { meals } = useContext(CartContext);
  const [css, theme] = useStyletron();
  const history = useHistory();
  const location = useLocation();
  
  if (
    location.pathname === '/review' ||
    location.pathname === '/confirmation' ||
    location.pathname === '/estimating-arrival' ||
    location.pathname === '/courier-on-their-way' ||
    location.pathname === '/order-arrived' ||
    meals.length === 0
  ) return null;
  
  const stickyFooter = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.sizing.scale400,
    position: 'sticky',
    bottom: 0,
    zIndex: 9,
  });
  
  const Counter = ({ amount }) => (
    <div
      style={{
        borderRadius: '32px',
        minWidth: '32px',
        height: '32px',
        background: 'rgba(255, 255, 255, 0.2)',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {amount}
    </div>
  );
  
  return (
    <footer className={stickyFooter}>
      <Button
        kind={KIND.primary}
        shape={SHAPE.pill}
        endEnhancer={() => <Counter amount={meals.length}/>}
        overrides={{
          BaseButton: {
            style: {
              width: '100%',
              justifyContent: 'space-between',
              backgroundColor: 'rgb(26, 26, 26)',
            },
          },
        }}
        onClick={() => { history.push('/review'); }}
      >
        <div className={css({ width: '100%', paddingLeft: '3rem' })}>
          <span className={css({ fontSize: theme.sizing.scale550 })}>Ver o pedido </span>
          <br/>
          {meals[0].restaurant}
        </div>
      </Button>
    </footer>
  );
}

export default UseStyletronExample;