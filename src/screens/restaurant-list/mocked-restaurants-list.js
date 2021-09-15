import {
  Barbeque,
  Picanha,
  Ribs,
  Salsichao,
  Sushi,
  Uramaki,
  Hossomaki,
  Temaki,
  Burger,
  Burger1,
  Burger2,
  Burger3,
} from '../../images';

const listOfRestaurants = [
  {
    name: "BBQ Place 🍖",
    description: "Lorem ipsum dolor sit amet, consec adipiscing elit ante, ac congue turpis",
    image: Barbeque,
    meals: [
      { name: "Picanha", image: Picanha },
      { name: "Ribs", image: Ribs },
      { name: "Salsichao", image: Salsichao },
    ],
  },
  {
    name: "Fancy Sushi 🍣",
    description: "Lorem ipsum dolor sit amet, consec adipiscing elit ante, ac congue turpis",
    image: Sushi,
    meals: [
      { name: "Uramaki", image: Uramaki },
      { name: "Hossomaki", image: Hossomaki },
      { name: "Temaki", image: Temaki },
    ],
  },
  {
    name: "Phony MC Don4lds 🍔",
    description: "Lorem ipsum dolor sit amet, consec adipiscing elit ante, ac congue turpis",
    image: Burger,
    meals: [
      { name: "Burguinho", image: Burger1 },
      { name: "Burger", image: Burger2 },
      { name: "Burgão", image: Burger3 },
    ],
  },
];

export default listOfRestaurants;
