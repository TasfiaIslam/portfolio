export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "topSkills",
      title: "Top Skills",
      type: "array",
      description: "top used languages and frameworks",
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
        name: "others",
        title: "Others",
        type: "array",
        description: "familiar with",
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
