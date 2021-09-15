import {
  Card,
  StyledBody,
  StyledAction,
  StyledThumbnail,
} from 'baseui/card';
import { StyledLink } from 'baseui/link';
import { useStyletron } from 'baseui';

function Meal({ image, name }) {
  const [, theme] = useStyletron();
  
  return (
    <Card
      title={name}
    >
      <StyledThumbnail
        src={image} // 300x300
      />
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel
      </StyledBody>
      <StyledAction>
        <StyledLink onClick={() => { alert('clicked') }} style={{ color: theme.colors.accent }}>
          Adicionar ao carrinho!
        </StyledLink>
      </StyledAction>
    </Card>
  );
}

export default Meal;
