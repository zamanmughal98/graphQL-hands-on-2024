export const ReviewFilterSchema = `{
  ratingGreaterThan: Int
  contentContains: String
}
`;

export const CreateNewGameSchema = `{
  title: String!
  platform: [String!]!
}
`;

export const updateGameSchema = `{
  title: String
  platform: [String!]
}
`;

export const getNextID = (Database) => {
  if (Database.length === 0) return '1';

  const maxId = Database.reduce((max, db_item) => {
    const gameId = parseInt(db_item.id, 10);
    return gameId > max ? gameId : max;
  }, 0);

  return (maxId + 1).toString();
};
