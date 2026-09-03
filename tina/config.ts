import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "66fe849b-a677-46b0-8470-13f99f36de35",
  token: "7f69730c1372379609a7efa5c1b4d0da9a99df88",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads", 
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home",
        path: "content/home",
        format: "json", 
        fields: [
          { type: "string", name: "title", label: "Hero Title", required: true },
          { type: "string", name: "content", label: "Hero Content", ui: { component: "textarea" } },
          {
            type: "object",
            name: "slider",
            label: "Hero Images",
            list: true,
            fields: [
              { type: "image", name: "src", label: "Image" },
              { type: "string", name: "alt", label: "Alt Text" },
            ],
          },
        ],
        ui: { router: () => "/" },
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Body" },
        ],
      },
    ],
  },
});