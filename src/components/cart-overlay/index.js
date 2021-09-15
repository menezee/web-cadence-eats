import { useContext } from 'react';
import { useStyletron } from 'baseui';
import { Button, KIND, SHAPE } from 'baseui/button';

import { CartContext } from '../../contexts/cart';

function UseStyletronExample() {
  const { meals } = useContext(CartContext);
  const [css, theme] = useStyletron();
  
  const stickyFooter = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.sizing.scale400,
    position: 'sticky',
    bottom: 0,
    zIndex: 9,
  });
  
  if (meals.length === 0) return <div/>;
  
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
        overrides={{ BaseButton: { style: { width: '100%', justifyContent: 'space-between', backgroundColor: 'rgb(26, 26, 26)' } } }}
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