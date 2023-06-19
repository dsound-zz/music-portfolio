import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"

const config = defineConfig({
  title: "music-portfolio",
  projectId: "y890hrro",
  dataset: "production",
  apiVersion: "2023-06-19",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config
