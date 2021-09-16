import { Display3 } from 'baseui/typography';
import { useStyletron } from 'baseui';

import EatsService from '../../clients/eats-service';
import usePolling from '../../hooks/usePolling';

const FIVE_SECONDS = 5000;

function Confirmation() {
  const [css, theme] = useStyletron();
  // const [paymentConfirmation, setPaymentConfirmation] = useState(false);
  const paymentConfirmation = usePolling(
    async () => (await EatsService.submitPayment(42))['PaymentApproved'],
    FIVE_SECONDS,
  );
  
  return (
    <div className={css({ padding: theme.sizing.scale400 })}>
      {
        paymentConfirmation === true ? (
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
