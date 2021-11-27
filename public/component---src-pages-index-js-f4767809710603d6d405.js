(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    RXBc: function(e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "default", function() {
          return v;
        });
      var n = t("q1tI"),
        r = t.n(n),
        c = t("K9FK"),
        l = t("Zttt"),
        i = t("Wbzz"),
        o = t("9eSz"),
        m = t.n(o),
        s = t("vOnD"),
        u = Object(s.c)(m.a).withConfig({
          displayName: "personImage__ResponsiveImage",
          componentId: "sc-y9ubks-0"
        })([
          "width:100%;border-radius:50%;max-width:210px;box-shadow:50px 23px 0px -1px #616caa;-webkit-box-shadow:50px 23px 0px -1px #616caa;-moz-box-shadow:50px 23px 0px -1px #616caa;"
        ]),
        p = s.c.figure.withConfig({
          displayName: "personImage__Wrapper",
          componentId: "sc-y9ubks-1"
        })([
          "display:flex;justify-content:center;align-items:center;position:relative;"
        ]),
        d = function(e) {
          return r.a.createElement(p, null, e.children);
        },
        f = function() {
          var e = Object(i.useStaticQuery)("2630470712");
          return r.a.createElement(
            d,
            null,
            r.a.createElement(u, {
              fluid: e.placeholderImage.childImageSharp.fluid
            })
          );
        },
        g = t("ma3e"),
        w = s.c.div.withConfig({
          displayName: "SocialIcons__IconGroup",
          componentId: "sc-t3gqwy-0"
        })([
          "padding-top:10px;padding-bottom:10px;margin-top:24px;a{color:#616caa;font-size:30px;margin-right:20px;}svg{transition:0.2s;&:hover{transform:scale(1.2);}}"
        ]);
      function x() {
        var e = Object(i.useStaticQuery)("2543298781");
        return r.a.createElement(
          w,
          null,
          e.site.siteMetadata.socialLinks.map(function(e, a) {
            var t = e.name,
              n = e.url;
            return r.a.createElement(
              "a",
              { href: n, key: a },
              r.a.createElement(h, { name: t })
            );
          })
        );
      }
      var h = function(e) {
          switch (e.name) {
            case "Facebook":
              return r.a.createElement(g.b, null);
            case "Github":
              return r.a.createElement(g.c, null);
            case "Twitter":
              return r.a.createElement(g.f, null);
            case "Instagram":
              return r.a.createElement(g.d, null);
            case "LinkedIn":
              return r.a.createElement(g.e, null);
          }
        },
        E = t("BzA6"),
        b = t("r5+W");
      function v(e) {
        var a = e.data,
          t = a.markdownRemark.rawMarkdownBody,
          n = a.markdownRemark.frontmatter.heading;
        return r.a.createElement(
          l.a,
          null,
          r.a.createElement(
            c.a,
            {
              columns: "2fr 1fr",
              center: "true",
              height: "74vh",
              swap: "true"
            },
            r.a.createElement(
              "div",
              { className: "grid-container" },
              r.a.createElement(
                "div",
                { className: "grid-item" },
                r.a.createElement(E.a, null, n),
                r.a.createElement(b.a, null, t),
                r.a.createElement(x, null)
              ),
              r.a.createElement(
                "div",
                { className: "grid-item" },
                r.a.createElement(f, null)
              )
            )
          )
        );
      }
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-f4767809710603d6d405.js.map
