(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    "16l3": function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function() {
          return f;
        });
      var n = a("q1tI"),
        r = a.n(n),
        o = a("9eSz"),
        c = a.n(o),
        i = a("Zttt"),
        l = a("vOnD"),
        p = a("BzA6"),
        d = a("r5+W"),
        m = a("K9FK"),
        s = l.c.a.withConfig({
          displayName: "projects__Button",
          componentId: "sc-15f582o-0"
        })([
          "padding:5px 20px;background:transparent;border:2px solid #616caa;border-radius:5px;margin-right:15px;color:#616caa;font-weight:bold;text-decoration:none;text-transform:uppercase;&:hover{background:#616caa;color:#fff;}"
        ]),
        u = l.c.span.withConfig({
          displayName: "projects__Item",
          componentId: "sc-15f582o-1"
        })(["margin-right:5px;color:#616caa;font-style:italic;"]);
      function f(e) {
        var t = e.data;
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement(
            m.a,
            null,
            r.a.createElement(
              "div",
              { className: "grid-container" },
              t &&
                t.allProjectsYaml.edges.map(function(e) {
                  var t = e.node;
                  return r.a.createElement(
                    "div",
                    { className: "grid-item" },
                    r.a.createElement(c.a, {
                      fluid: t.cover.childImageSharp.fluid
                    }),
                    r.a.createElement(
                      p.a,
                      { size: "24px", height: "33px", weight: "400" },
                      t.title
                    ),
                    "📅 ",
                    t.date,
                    r.a.createElement(
                      d.a,
                      { size: "18px", height: "25px" },
                      t.description,
                      r.a.createElement(
                        "p",
                        null,
                        "️️Built with",
                        " ",
                        t.tags.map(function(e) {
                          return r.a.createElement(u, null, e);
                        })
                      )
                    ),
                    t.demo
                      ? r.a.createElement(s, { href: t.demo }, "Demo")
                      : null,
                    t.repo
                      ? r.a.createElement(s, { href: t.repo }, "Source")
                      : null
                  );
                })
            )
          )
        );
      }
    }
  }
]);
//# sourceMappingURL=component---src-pages-projects-js-13f8060dfbcef39d745c.js.map
