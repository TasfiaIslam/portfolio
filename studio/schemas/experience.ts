// schemas are basically objects
export default {
  // The identifier for this document type used in the api's
  name: "experience",

  // This is the display name for the type
  title: "Experiences",

  // Schema type of Document
  type: "document",

  fields: [
    {
      name: "designation",
      title: "Designation",
      type: "string",
      description: "post/designation of the job",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      description: "name of the company",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
      description: "company address",
    },
    {
      name: "start_date",
      title: "Joined At",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
      description: "job starting date",
    },
    {
      name: "end_date",
      title: "Ended At",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
      description: "job ending date",
    },
    {
      name: "responsibilities",
      title: "Job Responsibilities",
      type: "array",
      description: "",
      of: [{ type: "text" }],
    },
    {
      name: "techStack",
      title: "Technology Stack",
      type: "array",
      description: "languages and frameworks used while working there",
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
