const queryBlogBySlug = `query BlogBySlug ($slug: String) {
    blog(
      filter: {slug: {eq: $slug}}
    ) {
      date
      title
      image {
        url
        width
        height
        blurUpThumb
      }
      content {
        value
        blocks {
          id
          __typename
          image {
            url
            width
            height
            blurUpThumb
          }
        }
      }
    }
}`

export default queryBlogBySlug