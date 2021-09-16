import { useContext, useEffect, useState } from 'react';
import { Block } from 'baseui/block';
import { H5 } from 'baseui/typography';
import { ProgressBar } from 'baseui/progress-bar';
import { useStyletron } from 'baseui';

import { ConfirmationBurger } from '../../images';
import { useHistory } from 'react-router-dom';
import usePolling from '../../hooks/usePolling';
import EatsService from '../../clients/eats-service';
import { CartContext } from '../../contexts/cart';

const FIVE_SECONDS = 5000;

function EstimatingArrival() {
  const { workflowId, setOrderDataDetails } = useContext(CartContext);
  const [css, theme] = useStyletron();
  const [progress, setProgress] = useState(0);
  
  const history = useHistory();
  const orderData = usePolling(
    async () => (await EatsService.getStatus(workflowId)),
    FIVE_SECONDS,
    ({ ETA, CourierName }) => ({ ETA, CourierName }),
    ({ ETA, CourierName }) => ETA !== undefined && CourierName !== undefined,
  );
  
  if (orderData !== null) {
    setOrderDataDetails(orderData);
    setTimeout(() => {
      history.push('/courier-on-their-way');
    }, 2000)
  }
  
  useEffect(() => {
    if (progress < 90) {
      setTimeout(() => {
        setProgress(progress + 10);
      }, 1000);
    }
  }, [progress]);
  
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
      <div className={css({ padding: theme.sizing.scale500 })}>
        <div className={css({ borderBottom: '1px solid #eee3e3', paddingBottom: theme.sizing.scale400 })}>
          <H5>
            Estimando tempo de chegada...
          </H5>
          <ProgressBar value={progress} successValue={100}/>
        </div>
        <H5>
          Pedido recebido...
        </H5>
        <img src={ConfirmationBurger} alt='confirmation burger' className={css({ maxHeight: '250px', width: '100%' })} />
      </div>
      
      {/* FOOTER */}
      <div className={`${stickyButton} ${css({ borderTop: '1px solid #eee3e3', display: 'flex', flexDirection: 'column' })}`}>
        <div className={css({ borderTop: '2px solid black', width: '20%', padding: `${theme.sizing.scale500} 0` })} />
        <span>Detalhes da entrega</span>
      </div>
    </Block>
  );
}

export default EstimatingArrival;
