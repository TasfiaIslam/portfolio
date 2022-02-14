export default {
  name: "profile_links",
  title: "Profile Links",
  type: "document",
  fields: [
    {
      name: "profile_name",
      title: "Profile Name",
      type: "string",
      description: "social profile name (eg. github)",
    },
    {
      name: "profile_url",
      title: "Url",
      type: "url",
      description: "social profile link/url",
    },
    {
      name: "profile_icon",
      title: "Profile Icon",
      type: "image",
      description: "social profile icon",
    },
  ],
};
