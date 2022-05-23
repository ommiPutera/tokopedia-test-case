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
        coverImage {
          large
          medium
        }
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
      coverImage {
        large
        medium
      }
      episodes
      duration
      genres
      seasonYear
      description
      studios {
        nodes {
          name
        }
      }
      title {
        english
      }
    }
  }
`