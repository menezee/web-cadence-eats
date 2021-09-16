import { useContext } from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Block } from 'baseui/block';
import { Button, KIND, SIZE } from 'baseui/button';
import { useStyletron } from 'baseui';
import { useHistory } from 'react-router-dom';

import { CartContext } from '../../contexts/cart';
import { Meal } from '../../components';
import EatsService from '../../clients/eats-service';

function ReviewOrder() {
  const [css, theme] = useStyletron();
  const { meals, setWorkflowId } = useContext(CartContext);
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
  
  const submitOrder = async () => {
    const workflowId = await EatsService.createOrder(42);
    setWorkflowId(workflowId);
    history.push('/confirmation');
  };
  
  return (
    <Block
      height="88vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <FlexGrid
        flexDirection="column"
        padding="scale500"
        flexGridRowGap="scale400"
      >
        {
          meals
            .map(meal => (
              <FlexGridItem key={meal.name}>
                <Meal image={meal.image} name={meal.name} restaurant={meal.restaurant} addable={false}/>
              </FlexGridItem>
            ))
        }
      </FlexGrid>
      <div className={stickyButton}>
        <Button
          kind={KIND.primary}
          size={SIZE.large}
          overrides={{
            BaseButton: {
              style: {
                width: '100%',
                backgroundColor: 'rgb(26, 26, 26)',
              },
            },
          }}
          onClick={submitOrder}
        >
          Finalizar a compra
        </Button>
      </div>
    </Block>
  );
}

export default ReviewOrder;
