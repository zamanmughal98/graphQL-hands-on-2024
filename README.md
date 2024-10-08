# graphQL-hands-on-2024

This repository contains a GraphQL API that allows users to manage a game review database. The API is built using Apollo Server, and it supports querying games, authors, and reviews, as well as performing CRUD operations on the games data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Schema](#schema)
  - [Types](#types)
  - [Inputs](#inputs)
  - [Queries](#queries)
  - [Mutations](#mutations)
- [Resolvers](#resolvers)
- [Utils](#utils)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/zamanmughal98/graphQL-hands-on-2024.git
   ```

2. Navigate to the project directory:

   ```bash
   cd graphQL-hands-on-2024

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Start the server:

   ```bash
   npm run start

   ```

The server will run on http://localhost:8000 by default.

## Usage

Once the server is running, you can access the GraphQL Playground at http://localhost:8000/ to test the API.

## Sample Queries

Fetch all games:

```graphql
query {
  fetchAllGames {
    id
    title
    platform
  }
}
```

Fetch all authors:

```graphql
query {
  fetchAllAuthors {
    id
    name
    verified
  }
}
```

Fetch all reviews with filters:

```graphql
query {
  fetchAllReviews(
    filters: { ratingGreaterThan: 7, contentContains: "amazing" }
  ) {
    id
    rating
    content
  }
}
```

## Sample Mutations

Create a new game:

```graphql
mutation {
  createNewGame(newGame: { title: "New Game", platform: ["PC"] }) {
    id
    title
    platform
  }
}
```

Update an existing game:

```graphql
mutation {
  updateTheGame(id: "1", updateGame: { title: "Updated Game Title" }) {
    id
    title
    platform
  }
}
```

Delete a game:

```graphql
mutation {
  deleteGame(id: "1") {
    id
    title
  }
}
```

## Schema

### Types

- Game: Represents a game with an ID, title, platforms, and related reviews.
- Author: Represents an author with an ID, name, verification status, and related reviews.
- Review: Represents a review with an ID, rating, content, author ID, game ID, and related data.

### Inputs

- ReviewsInputFilters: Filters for querying reviews, including rating and content filters.
- CreateNewGameInput: Input for creating a new game, including title and platform(s).
- updateGameInput: Input for updating an existing game, with optional fields for title and platforms.

### Queries

- fetchAllGames: Fetches all non-deleted games.
- fetchAllAuthors: Fetches all non-deleted authors.
- fetchAllReviews(filters: ReviewsInputFilters): Fetches all non-deleted reviews with optional filters.
- getGameById(id: ID!): Fetches a game by ID.
- getAuthorById(id: ID!): Fetches an author by ID.
- getReviewById(id: ID!): Fetches a review by ID.

### Mutations

- createNewGame(newGame: CreateNewGameInput!): Creates a new game.
- updateTheGame(id: ID!, updateGame: updateGameInput!): Updates an existing game by ID.
- deleteGame(id: ID!): Marks a game as deleted by setting its isDeleted flag to true.

### Resolvers

- Game: Resolves related reviews for a game.
- Author: Resolves related reviews for an author.
- Review: Resolves related author and game data for a review.

The resolvers are defined in the resolvers.js file and implement the logic for both queries and mutations.

### Utils

- getNextID: Utility function to generate the next available ID for new entries in the database. It finds the maximum ID in the database and increments it by 1.
- ReviewFilterSchema: Defines the input schema for filtering reviews.
- CreateNewGameSchema: Defines the input schema for creating a new game.
- updateGameSchema: Defines the input schema for updating an existing game.
