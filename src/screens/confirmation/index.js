import { useContext } from 'react';
import { H5 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'baseui/spinner';
import Check from 'baseui/icon/check';

import EatsService from '../../clients/eats-service';
import usePolling from '../../hooks/usePolling';
import { CartContext } from '../../contexts/cart';
import { Block } from 'baseui/block';
import { Button, KIND, SIZE, SHAPE } from 'baseui/button';

const FIVE_SECONDS = 5000;

function Confirmation() {
  const { meals, workflowId } = useContext(CartContext);
  const [css, theme] = useStyletron();
  const history = useHistory();
  const paymentConfirmation = usePolling(
    async () => (await EatsService.getStatus(workflowId))['PaymentApproved'],
    FIVE_SECONDS,
  );

  if (paymentConfirmation === true) history.push('/estimating-arrival');
  
  const stickyButton = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.sizing.scale400,
    position: 'sticky',
    bottom: 0,
    zIndex: 9,
  });
  
  return (
    <Block
      height="88vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <div>
        {/* HEADER */}
        <div className={css({ display: 'flex', justifyContent: 'space-around', alignItems: 'center' })}>
          <H5>Confirmando pagamento</H5>
          <Spinner size={30}/>
        </div>
        
        {/* ORDER */}
        <div className={css({ marginLeft: theme.sizing.scale400 })}>
          <Check color="green" overrides={{ Svg: { style: { marginRight: theme.sizing.scale400 } } }}/>
          <span>Your order</span>
        </div>
        
        {/* ITEMS */}
        <div className={css({ marginLeft: theme.sizing.scale1000 })}>
          {
            meals
              .map((m, idx) => (
                <div key={m.name} className={css({ display: 'flex', alignItems: 'center' })}>
                  <div
                    className={css({
                      marginRight: theme.sizing.scale400,
                      padding: '3px 9px',
                      backgroundColor: '#eee3e3',
                      marginTop: '5px',
                    })}>
                    {idx + 1}
                  </div>
                  <span>{m.name}</span>
                </div>
              ))
          }
        </div>
      </div>
      
      {/* UNDO BUTTON */}
      <div className={stickyButton}>
        <Button
          kind={KIND.primary}
          size={SIZE.large}
          shape={SHAPE.pill}
          overrides={{
            BaseButton: {
              style: {
                width: '100%',
                backgroundColor: 'rgb(26, 26, 26)',
              },
            },
          }}
        >
          Desfazer
        </Button>
      </div>
    </Block>
  );
}

export default Confirmation;
