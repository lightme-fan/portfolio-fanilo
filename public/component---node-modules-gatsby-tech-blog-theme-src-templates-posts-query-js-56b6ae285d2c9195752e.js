(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    SjOT: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      }),
        n.d(t, "b", function() {
          return i;
        });
      var r = n("vOnD"),
        a = r.c.div.withConfig({
          displayName: "StyledComponents__Hero",
          componentId: "sc-1iyqw5w-0"
        })(
          [
            "grid-column:2;padding:",
            ";text-shadow:0 12px 30px rgba(0,0,0,0.15);color:",
            ";@media (max-width:",
            "){padding:2rem 1rem 4rem 1rem;}p{font-size:1.68rem;margin-top:-1rem;@media (max-width:",
            "){font-size:1.45rem;}@media (max-width:",
            "){font-size:1.25rem;}}"
          ],
          function(e) {
            return e.padding || "3rem 2rem 6rem 2rem";
          },
          function(e) {
            return e.theme.colors.grey.dark;
          },
          function(e) {
            return e.theme.breakpoints.phone;
          },
          function(e) {
            return e.theme.breakpoints.tablet;
          },
          function(e) {
            return e.theme.breakpoints.phone;
          }
        ),
        i = r.c.div.withConfig({
          displayName: "StyledComponents__PostListContent",
          componentId: "sc-1iyqw5w-1"
        })(
          [
            "grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:3rem 6rem;@media (max-width:",
            "){padding:3rem 2rem;}@media (max-width:",
            "){padding:2rem 1.5rem;}overflow:hidden;"
          ],
          function(e) {
            return e.theme.breakpoints.tablet;
          },
          function(e) {
            return e.theme.breakpoints.phone;
          }
        );
    },
    "l/Os": function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("q1tI"),
        a = n.n(r),
        i = n("GWfH"),
        o = n("SjOT"),
        m = function(e) {
          var t = e.data,
            n = t.allMdx.nodes,
            r = t.site.siteMetadata.author;
          return a.a.createElement(
            i.c,
            null,
            a.a.createElement(
              i.h,
              null,
              a.a.createElement(
                o.a,
                null,
                a.a.createElement("h1", null, "Blog"),
                a.a.createElement("p", null, "Writings by ", r)
              ),
              a.a.createElement(
                o.b,
                null,
                a.a.createElement(i.f, null, "Latest stories"),
                n.map(function(e) {
                  return a.a.createElement(i.a, {
                    title: e.frontmatter.title,
                    date: e.frontmatter.date,
                    excerpt: e.excerpt,
                    timeToRead: e.timeToRead,
                    slug: e.fields.slug,
                    categories: e.frontmatter.categories,
                    path: e.fields.path,
                    key: e.fields.slug
                  });
                })
              )
            )
          );
        };
      t.default = m;
    }
  }
]);
//# sourceMappingURL=component---node-modules-gatsby-tech-blog-theme-src-templates-posts-query-js-56b6ae285d2c9195752e.js.map
