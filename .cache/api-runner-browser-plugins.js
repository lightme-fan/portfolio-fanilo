module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-personal-portfolio","short_name":"mohan's portfolio","start_url":"/","background_color":"#616CAA","theme_color":"#616CAA","display":"minimal-ui","icon":"src/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"b4e5d6c336e1f95ea04e4071fcc08fae"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/home/student/Coding/portfolio/portfolio-fanilo/node_modules/gatsby-remark-images","id":"28c42f28-53d0-5cae-aad5-aee248175898","name":"gatsby-remark-images","version":"3.11.1","pluginOptions":{"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/home/student/Coding/portfolio/portfolio-fanilo/node_modules/gatsby-remark-autolink-headers","id":"c2a85404-f97d-5ac0-848d-e491d7dfdbe3","name":"gatsby-remark-autolink-headers","version":"2.11.0","pluginOptions":{"plugins":[],"offsetY":0,"className":"anchor"},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onInitialClientRender","shouldUpdateScroll"],"ssrAPIs":["onRenderBody"]}],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-external-links","options":{"target":"_blank","rel":"nofollow noopener noreferrer"}},{"resolve":"gatsby-remark-images","options":{"maxWidth":830,"quality":90,"withWebp":true,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-autolink-headers","options":{"maintainCase":false}}],"extensions":[".mdx"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/home/student/Coding/portfolio/portfolio-fanilo"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[],"offsetY":0,"className":"anchor"},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Minimal Blog - Gatsby Theme","short_name":"MinimalBlog","description":"Minimal Blog with a focus on typography. Gatsby Starter powered by MDX.","background_color":"#FFF","theme_color":"#616CAA","display":"standalone","icon":"src/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"b4e5d6c336e1f95ea04e4071fcc08fae"},
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
