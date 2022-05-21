const url = "https://graphql.anilist.co"

export const animeApi = {
  get: (query, variables) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    })
  },
}