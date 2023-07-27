import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';

export const config = defineConfig({
    projectId: "kdtje5p1",
    dataset: "production",
    title: "portfolio_v3",
    apiVersion: "2023-07-26",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
});
