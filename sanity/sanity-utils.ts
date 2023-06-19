import { Project } from "@/types/Project"
import { createClient, groq } from "next-sanity"

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "y890hrro",
    dataset: "production",
    apiVersion: "2023-06-19",
  })

  return await client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
   }`
  )
}
