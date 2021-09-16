import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { H3 } from 'baseui/typography';
import { ProgressBar } from 'baseui/progress-bar';
import { useContext, useEffect, useState } from 'react';
import { CourierOnWay, Courier } from '../../images';
import { CartContext } from '../../contexts/cart';

function CourierOnTheirWay() {
  const { orderDataDetails } = useContext(CartContext);
  const [css, theme] = useStyletron();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (progress < 90) {
      setTimeout(() => {
        setProgress(progress + 10);
      }, 1000);
    }
  }, [progress]);
  
  const getDatePlusETA = () => {
    const now = Date.now() + orderDataDetails.ETA * 1000;
    return new Date(now).toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit' });
  };
  
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
        <div className={css({ borderBottom: '1px solid #eee3e3', paddingBottom: theme.sizing.scale400, paddingLeft: theme.sizing.scale550 })}>
          <H3>
            {getDatePlusETA()}
          </H3>
          <ProgressBar value={progress} successValue={100}/>
        </div>
        
        <div className={css({ width: '100%', display: 'flex', justifyContent: 'center' })}>
          <img src={CourierOnWay} alt='courier on their way' className={css({ maxHeight: '250px', width: '80%' })} />
        </div>
      </div>
  
      {/* FOOTER */}
      <div className={`${stickyButton} ${css({ borderTop: '1px solid #eee3e3', display: 'flex', flexDirection: 'column' })}`}>
        <div className={css({ borderTop: '2px solid black', width: '20%', padding: `${theme.sizing.scale500} 0` })} />
        <img src={Courier} alt='courier' className={css({ maxHeight: '60px' })} />
        <span>{orderDataDetails.CourierName} está buscando seu pedido.</span>
      </div>
    </Block>
  );
}

export default CourierOnTheirWay;
