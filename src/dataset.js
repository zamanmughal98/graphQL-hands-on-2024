let gamesList = [
  {
    id: '1',
    title: 'Zelda, Tears of the Kingdom',
    platform: ['Switch'],
    isDeleted: false,
  },
  {
    id: '2',
    title: 'Final Fantasy 7 Remake',
    platform: ['PS5', 'Xbox'],
    isDeleted: false,
  },
  {
    id: '3',
    title: 'Elden Ring',
    platform: ['PS5', 'Xbox', 'PC'],
    isDeleted: false,
  },
  { id: '4', title: 'Mario Kart', platform: ['Switch'], isDeleted: false },
  {
    id: '5',
    title: 'Pokemon Scarlet',
    platform: ['PS5', 'Xbox', 'PC'],
    isDeleted: false,
  },
];

let authorsList = [
  { id: '1', name: 'Zaman', verified: true, isDeleted: false },
  { id: '2', name: 'Yaseen', verified: false, isDeleted: false },
  { id: '3', name: 'paro', verified: true, isDeleted: false },
];

let reviewsList = [
  {
    id: '1',
    rating: 9,
    content: 'Great experience!',
    author_id: '1',
    game_id: '2',
    isDeleted: false,
  },
  {
    id: '2',
    rating: 10,
    content: 'Absolutely amazing!',
    author_id: '2',
    game_id: '1',
    isDeleted: false,
  },
  {
    id: '3',
    rating: 7,
    content: 'Good, but could be better.',
    author_id: '3',
    game_id: '3',
    isDeleted: false,
  },
  {
    id: '4',
    rating: 5,
    content: 'Average experience.',
    author_id: '2',
    game_id: '4',
    isDeleted: false,
  },
  {
    id: '5',
    rating: 8,
    content: 'Pretty good!',
    author_id: '2',
    game_id: '5',
    isDeleted: false,
  },
  {
    id: '6',
    rating: 7,
    content: 'Good, but could be better.',
    author_id: '1',
    game_id: '2',
    isDeleted: false,
  },
  {
    id: '7',
    rating: 10,
    content: 'Absolutely amazing!',
    author_id: '3',
    game_id: '1',
    isDeleted: false,
  },
];

export default { gamesList, authorsList, reviewsList };
