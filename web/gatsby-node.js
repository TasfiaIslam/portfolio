/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            id
            slug {
              current
            }
            title
            short_description
            techStack {
              technology
            }
            image {
              asset {
                gatsbyImageData
              }
            }
            web_link
            git_link
          }
        }
      }
    }
  `);

  const projectTemplate = path.resolve(`src/templates/project/index.tsx`);

  result.data.allSanityProject.edges.forEach(({ node }) => {
    const projectPath = `project/${node.slug.current}`;
    actions.createPage({
      path: projectPath,
      component: projectTemplate,
      context: {
        id: node.id,
      },
    });
  });
  createPage({
    path: '/using-dsg',
    component: require.resolve('./src/templates/using-dsg.js'),
    context: {},
    defer: true,
  });
};
