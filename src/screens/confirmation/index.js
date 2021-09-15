import { useState, useEffect } from 'react';
import { Display3 } from 'baseui/typography';
import { useStyletron } from 'baseui';

import PaymentService from '../../clients/payment';

const FIVE_SECONDS = 5000;

function Confirmation() {
  const [css, theme] = useStyletron();
  const [paymentConfirmation, setPaymentConfirmation] = useState(false);
  
  useEffect(() => {
    (async () => {
      const interval = setInterval(async () => {
        const { status } = await PaymentService.submitPayment();
        if (status === 'SUCCESS') {
          setPaymentConfirmation(true);
          clearInterval(interval);
        }
      }, FIVE_SECONDS);
    })();
  }, []);
  
  return (
    <div className={css({ padding: theme.sizing.scale400 })}>
      {
        paymentConfirmation ? (
          <Display3>
            Payment confirmed!
          </Display3>
        ) : (
          <Display3>
            Waiting for confirmation
          </Display3>
        )
      }
    </div>
  );
}

export default Confirmation;
