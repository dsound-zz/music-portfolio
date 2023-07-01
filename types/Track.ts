import { PortableTextBlock } from "sanity"

export type Track = {
  _id: string
  _createdAt: string
  name: string
  slug: string
  image: string
  url: string
  content: PortableTextBlock[]
}
