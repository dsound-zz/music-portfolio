import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {
  const projects = await getProjects()
  return (
    <div>
      {projects.map(({ _id, name }) => (
        <div key={_id}>{name}</div>
      ))}
    </div>
  )
}
