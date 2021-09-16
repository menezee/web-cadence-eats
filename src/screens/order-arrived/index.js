import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { H3 } from 'baseui/typography';
import { ProgressBar } from 'baseui/progress-bar';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import { Button, KIND, SIZE, SHAPE } from 'baseui/button';
import EatsService from '../../clients/eats-service';
import { useHistory } from 'react-router-dom';

function OrderArrived() {
  const { workflowId, setMeals } = useContext(CartContext);
  const [css, theme] = useStyletron();
  const history = useHistory();
  
  const stickyButton = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.sizing.scale400,
    position: 'sticky',
    bottom: 0,
    zIndex: 9,
  });
  
  const confirmOrderArrived = async () => {
    await EatsService.orderReceived(workflowId);
    setMeals([]);
    history.push('/');
  };
  
  return (
    <Block
      height="88vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <div className={css({ padding: theme.sizing.scale500 })}>
        <div className={css({ borderBottom: '1px solid #eee3e3', paddingBottom: theme.sizing.scale400, paddingLeft: theme.sizing.scale550 })}>
          <H3>
            Pedido entregue...
          </H3>
          <ProgressBar value={100} successValue={100}/>
        </div>
        
        <div className={css({ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: theme.sizing.scale550 })}>
          <H3>
            Você recebeu seu pedido?
          </H3>
          <div className={css({ width: '100%', display: 'flex', justifyContent: 'space-between' })}>
            <Button
              kind={KIND.primary}
              size={SIZE.large}
              shape={SHAPE.pill}
              overrides={{
                BaseButton: {
                  style: {
                    width: '45%',
                    backgroundColor: 'rgb(26, 26, 26)',
                  },
                },
              }}
              onClick={confirmOrderArrived}
            >
              Sim
            </Button>
            <Button
              kind={KIND.primary}
              size={SIZE.large}
              shape={SHAPE.pill}
              overrides={{
                BaseButton: {
                  style: {
                    width: '45%',
                    backgroundColor: 'rgb(26, 26, 26)',
                  },
                },
              }}
            >
              Não
            </Button>
          </div>
        </div>
      </div>
      
      {/* FOOTER */}
      <div className={`${stickyButton} ${css({ borderTop: '1px solid #eee3e3', display: 'flex', flexDirection: 'column' })}`}>
        <div className={css({ borderTop: '2px solid black', width: '20%', padding: `${theme.sizing.scale500} 0` })} />
        <span>Pedir ajuda</span>
      </div>
    </Block>
  );
}

export default OrderArrived;
