(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    m0Kw: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        r = n.n(a),
        o = n("TJpk"),
        i = n.n(o),
        l = n("Wbzz"),
        m = n("vOnD"),
        c = n("N1om"),
        d = n.n(c),
        u = n("GWfH"),
        p = n("yvk5"),
        s = n.n(p),
        g = m.c.div.withConfig({
          displayName: "CategoryList__Content",
          componentId: "sc-18eu368-0"
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
        ),
        h = m.c.h3.withConfig({
          displayName: "CategoryList__Title",
          componentId: "sc-18eu368-1"
        })([
          "position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"
        ]),
        w = function(e) {
          var t = e.data.allMdx.group,
            n = e.path,
            a = e.home;
          return r.a.createElement(
            u.c,
            null,
            r.a.createElement(
              u.h,
              null,
              r.a.createElement(i.a, {
                title: "Categories | " + s.a.siteTitle
              }),
              r.a.createElement(
                u.b,
                null,
                r.a.createElement(
                  l.Link,
                  { to: a },
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
                g,
                null,
                console.log(n, "skjgh"),
                r.a.createElement(u.f, null, "Categories"),
                t.map(function(e) {
                  return r.a.createElement(
                    h,
                    { key: e.fieldValue },
                    r.a.createElement(
                      l.Link,
                      { to: n + "/" + d()(e.fieldValue) },
                      e.fieldValue
                    ),
                    " ",
                    "(",
                    e.totalCount,
                    ")"
                  );
                })
              )
            )
          );
        };
      t.default = w;
    }
  }
]);
//# sourceMappingURL=component---node-modules-gatsby-tech-blog-theme-src-templates-categories-query-js-0482858412b24767ada3.js.map
