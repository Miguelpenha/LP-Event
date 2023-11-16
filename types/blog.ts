import { StructuredTextDocument } from 'react-datocms/structured-text'

interface IBlog {
  id: string
  slug: string
  date: string
  title: string
  content: StructuredTextDocument
  image: {
    url: string
    width: number
    height: number
    blurUpThumb: string
  }
}

export default IBlog