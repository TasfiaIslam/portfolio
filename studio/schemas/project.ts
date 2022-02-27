// schemas are basically objects
export default {
  // The identifier for this document type used in the api's
  name: "project",

  // This is the display name for the type
  title: "Projects",

  // Schema type of Document
  type: "document",

  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      description: "title of the project",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "project slug",
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      description: "image of the project",
    },
    {
      name: "short_description",
      title: "Project Description",
      type: "text",
      description: "short description of the project",
    },
    {
      name: "git_link",
      title: "Github Link",
      type: "url",
      description: "github link of the project",
    },
    {
      name: "web_link",
      title: "Project Live Link",
      type: "url",
      description: "live link of the project",
    },
    {
      name: "techStack",
      title: "Technology Stack",
      type: "array",
      description: "languages and frameworks",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "technology",
            },
          ],
        },
      ],
    },
    {
      name: "createDate",
      title: "Created At",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
      description: "project creation date",
    },
  ],
};
