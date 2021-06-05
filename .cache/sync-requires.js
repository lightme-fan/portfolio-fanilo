const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/student/Coding/projects/portfolio-fanilo/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-tech-blog-theme-src-components-search-js": hot(preferDefault(require("/home/student/Coding/projects/portfolio-fanilo/node_modules/gatsby-tech-blog-theme/src/components/Search.js"))),
  "component---node-modules-gatsby-tech-blog-theme-src-templates-categories-query-js": hot(preferDefault(require("/home/student/Coding/projects/portfolio-fanilo/node_modules/gatsby-tech-blog-theme/src/templates/categories-query.js"))),
  "component---node-modules-gatsby-tech-blog-theme-src-templates-category-js": hot(preferDefault(require("/home/student/Coding/projects/portfolio-fanilo/node_modules/gatsby-tech-blog-theme/src/templates/category.js"))),
  "component---node-modules-gatsby-tech-blog-theme-src-templates-post-js": hot(preferDefault(require("/home/student/Coding/projects/portfolio-fanilo/node_modules/gatsby-tech-blog-theme/src/templates/post.js"))),
  "component---node-modules-gatsby-tech-blog-theme-src-templates-posts-query-js": hot(preferDefault(require("/home/student/Coding/projects/portfolio-fanilo/node_modules/gatsby-tech-blog-theme/src/templates/posts-query.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/student/Coding/projects/portfolio-fanilo/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/student/Coding/projects/portfolio-fanilo/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/student/Coding/projects/portfolio-fanilo/src/pages/projects.js")))
}

