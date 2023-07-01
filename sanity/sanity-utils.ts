import { Project } from "@/types/Project"
import { Page } from "@/types/Page"
import { Track } from "@/types/Track"
import { createClient, groq } from "next-sanity"
import { clientConfig } from "./config/client-config"

export async function getProjects(): Promise<Project[]> {
  return await createClient(clientConfig).fetch(
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

export async function getProject(slug: string): Promise<Project> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
   }`,
    { slug }
  )
}

export async function getPages(): Promise<Page[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
   }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
   }`,
    { slug }
  )
}

export async function getTracks(): Promise<Track[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "track"]{
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

export async function getTrack(slug: string): Promise<Track> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "track" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
   }`,
    { slug }
  )
}
