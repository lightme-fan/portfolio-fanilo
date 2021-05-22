module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/home/student/Coding/projects/portfolio-fanilo/node_modules/gatsby-remark-images","id":"580fd6f0-a0f4-5cb7-ac28-2bea65acb525","name":"gatsby-remark-images","version":"3.1.20","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":["onRenderBody"]},{"resolve":"/home/student/Coding/projects/portfolio-fanilo/node_modules/gatsby-remark-autolink-headers","id":"84411983-3572-54e6-8782-dedc5abaf1a7","name":"gatsby-remark-autolink-headers","version":"2.1.9","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onInitialClientRender","shouldUpdateScroll"],"ssrAPIs":["onRenderBody"]}],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-external-links","options":{"target":"_blank","rel":"nofollow noopener noreferrer"}},{"resolve":"gatsby-remark-images","options":{"maxWidth":830,"quality":90,"withWebp":true,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-autolink-headers","options":{"maintainCase":false}}]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-tech-blog-theme/node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-tech-blog-theme/gatsby-browser.js'),
      options: {"plugins":[],"basePath":"/blog","contentPath":"content/blog"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
