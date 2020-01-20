/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreateLaptime = `subscription OnCreateLaptime {
  onCreateLaptime {
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
export const onUpdateLaptime = `subscription OnUpdateLaptime {
  onUpdateLaptime {
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
export const onDeleteLaptime = `subscription OnDeleteLaptime {
  onDeleteLaptime {
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
