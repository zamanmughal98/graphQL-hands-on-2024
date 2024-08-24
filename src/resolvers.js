import { getNextID } from './utils.js';

const resolversBuilder = ({ gamesList, authorsList, reviewsList }) => {
  return {
    // queries to fetch all / conditional data
    Query: {
      fetchAllGames() {
        return gamesList.filter((game) => !game.isDeleted);
      },
      fetchAllAuthors() {
        return authorsList.filter((author) => !author.isDeleted);
      },
      fetchAllReviews(_, { filters }) {
        let allreviews = reviewsList.filter((review) => !review.isDeleted);

        if (filters?.ratingGreaterThan !== undefined) {
          allreviews = allreviews.filter(
            (review) => review.rating > filters.ratingGreaterThan,
          );
        }

        if (filters?.contentContains) {
          allreviews = allreviews.filter((review) =>
            review.content.includes(filters.contentContains),
          );
        }

        return allreviews;
      },

      getGameById(_, args) {
        return gamesList.find((game) => game.id === args.id);
      },

      getAuthorById(_, args) {
        return authorsList.find((aurthor) => aurthor.id === args.id);
      },

      getReviewById(_, args) {
        return reviewsList.find((review) => review.id === args.id);
      },
    },

    //mutations
    Mutation: {
      createNewGame(_, args) {
        const newGameId = getNextID(gamesList);

        let newGame = { id: newGameId, isDeleted: false, ...args.newGame };
        gamesList.push(newGame);

        return game;
      },

      updateTheGame(_, args) {
        gamesList = gamesList.map((game) => {
          if (game.id === args.id) return { ...game, ...args.updateGame };

          return game;
        });

        return gamesList.find((game) => game.id === args.id);
      },

      deleteGame(_, args) {
        gamesList = gamesList.map((game) => {
          if (game.id === args.id) game.isDeleted = true;

          return game;
        });

        return gamesList.filter((game) => game.id !== args.id);
      },
    },

    // queries to fetch related data

    Game: {
      reviews(parent) {
        return reviewsList.filter((review) => review.game_id === parent.id);
      },
    },

    Author: {
      reviews(parent) {
        return reviewsList.filter((review) => review.author_id === parent.id);
      },
    },

    Review: {
      author(parent) {
        return authorsList.find((author) => author.id === parent.author_id);
      },
      game(parent) {
        return gamesList.find((game) => game.id === parent.game_id);
      },
    },
  };
};

export default resolversBuilder;
