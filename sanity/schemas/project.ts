import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      description:
        "Contents of this field appear on the HomePage under the title.",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description:
        "Contents of this field appear on the Project page on the top.",
      type: "string",
    }),
    defineField({
      name: "projectWebsite",
      title: "Project Website URL",
      description: "URL of the finished project.",
      type: "url",
    }),
    defineField({
      name: "projectImage",
      title: "Project image",
      description: "Project image that appears on the Home Page.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "featuredImage",
      title: "Featured image",
      description:
        "Featured image that appears on the Project page on the top.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "roles",
      title: "Roles",
      type: "array",
      of: [{ type: "reference", to: { type: "role" } }],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
