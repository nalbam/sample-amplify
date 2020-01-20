/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame(
  $input: CreateGameInput!
  $condition: ModelGameConditionInput
) {
  createGame(input: $input, condition: $condition) {
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
export const updateGame = `mutation UpdateGame(
  $input: UpdateGameInput!
  $condition: ModelGameConditionInput
) {
  updateGame(input: $input, condition: $condition) {
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
export const deleteGame = `mutation DeleteGame(
  $input: DeleteGameInput!
  $condition: ModelGameConditionInput
) {
  deleteGame(input: $input, condition: $condition) {
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
export const createLaptime = `mutation CreateLaptime(
  $input: CreateLaptimeInput!
  $condition: ModelLaptimeConditionInput
) {
  createLaptime(input: $input, condition: $condition) {
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
export const updateLaptime = `mutation UpdateLaptime(
  $input: UpdateLaptimeInput!
  $condition: ModelLaptimeConditionInput
) {
  updateLaptime(input: $input, condition: $condition) {
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
export const deleteLaptime = `mutation DeleteLaptime(
  $input: DeleteLaptimeInput!
  $condition: ModelLaptimeConditionInput
) {
  deleteLaptime(input: $input, condition: $condition) {
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
