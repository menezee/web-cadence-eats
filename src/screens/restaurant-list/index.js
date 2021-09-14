import { Search } from 'baseui/icon';
import { Input } from 'baseui/input';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { ListItem } from 'baseui/list';
import { useStyletron } from 'baseui';
import { Link } from 'react-router-dom';

import { RestaurantCard } from '../../components';

import mockedListOfRestaurants from './mocked-restaurants-list';

function RestaurantList() {
  const [css] = useStyletron();
  
  const roundBorder = {
    overrides: { Root: { style: ({ $theme }) => ({ borderRadius: $theme.borders.radius500 }) } },
  };
  const listItemPadding = {
    overrides: {
      Root: { style: ({ $theme }) => ({ paddingBottom: $theme.sizing.scale400 }) },
      Content: { style: { justifyContent: "center" } },
    },
  };
  
  return (
    <FlexGrid flexDirection="column" padding="scale500">
      <FlexGridItem>
        <Input
          startEnhancer={<Search size={20}/>}
          placeholder="Está com fome de quê?"
          {...roundBorder}
        />
      </FlexGridItem>
      <FlexGridItem>
        <ul className={css({ padding: 0 })}>
          {
            mockedListOfRestaurants
              .map((restaurant) => (
                <Link to={`/restaurant/${restaurant.name}`}>
                  <ListItem
                    {...listItemPadding}
                    key={restaurant.name}
                  >
                    <RestaurantCard
                      name={restaurant.name}
                      description={restaurant.description}
                      image={restaurant.image}
                    />
                  </ListItem>
                </Link>
              ))
          }
        </ul>
      </FlexGridItem>
    </FlexGrid>
  );
}

export default RestaurantList;
