exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
      query {
        allMdx {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `);
  
    if (result.errors) {
      reporter.panic('failed to create posts', result.errors);
    }
  
    const posts = result.data.allMdx.nodes;
  
    posts.forEach(post => {
      actions.createPage({
        path: post.frontmatter.slug,
        component: require.resolve('./src/components/PostPreview.js'),
        context: {
          slug: post.frontmatter.slug,
        },
      });
    });
  };
  
  // 404
  exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions

    if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
      const oldPage = { ...page }
      const langCode = page.path.split(`/`)[1]
      page.matchPath = `/${langCode}/*`
      deletePage(oldPage)
      createPage(page)
    }
  }