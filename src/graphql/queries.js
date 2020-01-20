/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    league
    title
    logo
    laptimes {
      items {
        id
        email
        racerName
        lapTime
      }
      nextToken
    }
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      league
      title
      logo
      laptimes {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getLaptime = `query GetLaptime($id: ID!) {
  getLaptime(id: $id) {
    id
    email
    racerName
    lapTime
    game {
      league
      title
      logo
      laptimes {
        nextToken
      }
    }
  }
}
`;
export const listLaptimes = `query ListLaptimes(
  $filter: ModelLaptimeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLaptimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      racerName
      lapTime
      game {
        league
        title
        logo
      }
    }
    nextToken
  }
}
`;
