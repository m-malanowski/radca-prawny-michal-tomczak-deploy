const path = require("path")
// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const resultForTeams = await graphql(`
    {
      teams: allStrapiTeams {
        nodes {
          slug
        }
      }    
    }
  `)
  const resultForBlog = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  resultForTeams.data.teams.nodes.forEach(team => {
    createPage({
      path: `/zespol/${team.slug}`,
      component: path.resolve(`src/templates/team-member-template.js`),
      context: {
        slug: team.slug,
      },
    })
  })

  resultForBlog.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blog-prawniczy/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
}
