import { Card, StyledBody } from 'baseui/card';

function RestaurantCard({ image, name, description }) {
  const cardOverrides = {
    overrides: {
      HeaderImage: {
        style: ({ $theme }) => ({
          maxHeight: '165px',
          width: '100%',
          objectFit: 'unset',
        }),
      },
    },
  };
  
  return (
    <Card
      headerImage={image}
      title={name}
      {...cardOverrides}
    >
      <StyledBody>
        {description}
      </StyledBody>
    </Card>
  );
}

export default RestaurantCard;
