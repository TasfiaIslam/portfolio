export default {
  name: "about",
  title: "About Me",
  type: "document",
  fields: [
    {
      name: "about_me",
      title: "About Me",
      type: "string",
      description: "brief description about me",
    },
    {
      name: "my_skills",
      title: "My Recent Skills",
      type: "array",
      description: "technologies I have worked with recently",
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
  ],
};
