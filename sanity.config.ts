import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export const config = defineConfig({
    projectId: "kdtje5p1",
    dataset: "production",
    title: "portfolio_v3",
    apiVersion: "2023-07-26",
    basePath: "/admin",
    plugins: [deskTool()],
});
