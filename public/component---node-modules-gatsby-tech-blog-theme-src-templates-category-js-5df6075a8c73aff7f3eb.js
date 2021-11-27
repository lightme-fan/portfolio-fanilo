(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    P6jI: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        o = a("TJpk"),
        l = a.n(o),
        i = a("Wbzz"),
        m = a("vOnD"),
        c = a("GWfH"),
        d = a("yvk5"),
        g = a.n(d),
        p = m.c.div.withConfig({
          displayName: "category__Content",
          componentId: "x3pr6x-0"
        })(
          [
            "grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",
            ";z-index:9000;margin-top:-3rem;@media (max-width:",
            "){padding:3rem 3rem;}@media (max-width:",
            "){padding:2rem 1.5rem;}"
          ],
          function(e) {
            return e.theme.colors.bg;
          },
          function(e) {
            return e.theme.breakpoints.tablet;
          },
          function(e) {
            return e.theme.breakpoints.phone;
          }
        );
      t.default = function(e) {
        var t = e.pageContext,
          a = t.category,
          n = t.home,
          o = t.categoryPath,
          m = e.data.allMdx,
          d = m.nodes,
          s = m.totalCount,
          u = s + " post" + (1 === s ? "" : "s") + ' tagged with "' + a + '"';
        return r.a.createElement(
          c.c,
          null,
          r.a.createElement(
            c.h,
            null,
            r.a.createElement(l.a, {
              title: "Category: " + a + " | " + g.a.siteTitle
            }),
            r.a.createElement(
              c.b,
              null,
              r.a.createElement(
                i.Link,
                { to: n },
                r.a.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "#FFF"
                  },
                  r.a.createElement("path", {
                    d: "M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
                  }),
                  r.a.createElement("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  })
                )
              )
            ),
            r.a.createElement(
              p,
              null,
              r.a.createElement(c.f, null, "Category – ", a),
              r.a.createElement(
                c.g,
                { sectionTitle: !0 },
                u,
                " (See ",
                r.a.createElement(i.Link, { to: o }, "all categories"),
                ")"
              ),
              d.map(function(e) {
                return r.a.createElement(c.a, {
                  title: e.frontmatter.title,
                  date: e.frontmatter.date,
                  excerpt: e.excerpt,
                  timeToRead: e.timeToRead,
                  slug: e.fields.slug,
                  categories: e.frontmatter.categories,
                  path: n,
                  key: e.fields.slug
                });
              })
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---node-modules-gatsby-tech-blog-theme-src-templates-category-js-5df6075a8c73aff7f3eb.js.map
