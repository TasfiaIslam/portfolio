export default {
  name: "hero",
  title: "Hero",
  type: "document",
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "sub_header",
      title: "Sub Header",
      type: "string",
      description: "This will be shown before the heading",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      description: "This will be shown underneath the heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "Description about myself",
      type: "string",
    },
    {
      name: "profile_links",
      title: "Profile Links",
      description: "profile links",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "profile_links",
            },
          ],
        },
      ],
    },
  ],
};
