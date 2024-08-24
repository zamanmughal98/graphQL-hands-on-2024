import {
  ReviewFilterSchema,
  CreateNewGameSchema,
  updateGameSchema,
} from './utils.js';

const schema = `#graphql

  type Game {
    id: ID!
    title: String!
    isDeleted: Boolean !
    platform: [String!]!
    reviews: [Review!]  #for related data
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    isDeleted: Boolean !
    reviews: [Review!] #for related data
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
    author_id: ID!
    game_id: ID!
    isDeleted: Boolean !
    game: Game! #for related data
    author: Author! #for related data
  }

# inputs types for the additional arguments (to avois too many arguments)
  input ReviewsInputFilters ${ReviewFilterSchema}
  input CreateNewGameInput ${CreateNewGameSchema}
  input updateGameInput ${updateGameSchema}

  type Query {
    fetchAllGames: [Game]
    fetchAllAuthors: [Author]
    fetchAllReviews(filters:ReviewsInputFilters): [Review]

    getGameById(id: ID!): Game
    getAuthorById(id: ID!): Author
    getReviewById(id: ID!): Review
  }

  type Mutation {
    createNewGame(newGame: CreateNewGameInput!): Game
    updateTheGame(id: ID!, updateGame: updateGameInput!) : Game
    deleteGame(id: ID!): [Game]
  }
  
`;

export default schema;
