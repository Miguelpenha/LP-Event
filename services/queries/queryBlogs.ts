const queryBlogs = `query Blogs {
  allBlogs(orderBy: date_ASC) {
    id
    slug
    title
    image {
      url
      width
      height
      blurUpThumb
    }
  }
}`

export default queryBlogs