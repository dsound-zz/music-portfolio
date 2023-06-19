import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

const config = defineConfig({
  title: "music-portfolio",
  projectId: "y890hrro",
  dataset: "production",
  apiVersion: "2023-06-19",
  basePath: "/admin",
  plugins: [deskTool()],
})

export default config
