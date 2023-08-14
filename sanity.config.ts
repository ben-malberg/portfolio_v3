import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';

export const config = defineConfig({
    projectId: "kdtje5p1",
    dataset: "production",
    title: "portfolio_v3",
    apiVersion: "2023-08-14",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
});
