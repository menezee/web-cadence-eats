import { useContext } from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Block } from 'baseui/block';
import { Button, KIND, SIZE } from 'baseui/button';
import { useStyletron } from 'baseui';

import { CartContext } from '../../contexts/cart';
import { Meal } from '../../components';

function ReviewOrder() {
  const [css, theme] = useStyletron();
  const { meals } = useContext(CartContext);
  
  // const stickyButton = {
  //   overrides: {
  //     Block: {
  //       style: ({ $theme }) => ({
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         padding: $theme.sizing.scale400,
  //         position: 'sticky',
  //         bottom: 0,
  //         zIndex: 9,
  //       }),
  //     },
  //   },
  // };
  
  const stickyButton = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.sizing.scale400,
    position: 'sticky',
    bottom: 0,
    zIndex: 9,
  })
  
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
        >
          Finalizar a compra
        </Button>
      </div>
    </Block>
  );
}

export default ReviewOrder;
