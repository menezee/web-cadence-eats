import { useContext } from 'react';
import {
  Card,
  StyledBody,
  StyledAction,
  StyledThumbnail,
} from 'baseui/card';
import { StyledLink } from 'baseui/link';
import { useStyletron } from 'baseui';

import { CartContext } from '../../contexts/cart';

function Meal({ image, name, restaurant, addable = true }) {
  const { addMeal } = useContext(CartContext);
  const [, theme] = useStyletron();
  
  const addToCart = () => {
    addMeal({ name, image, restaurant });
  };
  
  return (
    <Card
      title={name}
    >
      <StyledThumbnail
        src={image}
      />
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel
      </StyledBody>
      {
        addable && (
          <StyledAction>
            <StyledLink onClick={addToCart} style={{ color: theme.colors.accent, cursor: 'pointer' }}>
              Adicionar ao carrinho!
            </StyledLink>
          </StyledAction>
        )
      }
    </Card>
  );
}

export default Meal;
