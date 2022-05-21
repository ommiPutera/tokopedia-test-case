export const queryAnimeList = `
  query ($id: Int, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id) {
        id
        bannerImage
        episodes
        title {
          english
        }
      }
    }
  }
`;

export const queryAnimeDetail = `
  query ($id: Int) {
    Media (id: $id) {
      id
      bannerImage
      episodes
      genres
      description
      title {
        english
      }
    }
  }
`