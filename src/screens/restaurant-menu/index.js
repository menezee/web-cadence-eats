import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Block } from 'baseui/block';

import mockedListOfRestaurants from '../restaurant-list/mocked-restaurants-list';
import { Meal } from '../../components';

function RestaurantMenu() {
  const { name } = useParams();
  const filterRestaurant = () => mockedListOfRestaurants.find(({ name: n }) => n === name);
  const [restaurant] = useState(filterRestaurant);
  
  return (
    <Block height="100vw">
      <div style={{ position: 'relative', width: '100%', height: '228px' }}>
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <img
            src={restaurant.image} alt={restaurant.name}
            style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'brightness(50%)' }}
          />
        </div>
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <FlexGrid
            flexDirection="column"
            padding="scale500"
            height="100%"
            overrides={{ Block: { style: { boxSizing: 'border-box' } } }}
          >
            <FlexGridItem height='50%' />
            <FlexGridItem height='50%' >
              <h1 style={{ color: 'white' }}>
                {restaurant.name}
              </h1>
            </FlexGridItem>
          </FlexGrid>
        </div>
      </div>
      <FlexGrid
        flexDirection="column"
        padding="scale500"
        flexGridRowGap="scale400"
      >
        {
          restaurant
            .meals
            .map(meal => (
              <FlexGridItem key={meal.name}>
                <Meal image={meal.image} name={meal.name} />
              </FlexGridItem>
            ))
        }
      </FlexGrid>
    </Block>
  );
}

export default RestaurantMenu;
