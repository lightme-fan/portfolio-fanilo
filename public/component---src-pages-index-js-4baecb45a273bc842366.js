(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    RXBc: function(e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "default", function() {
          return E;
        });
      var n = t("q1tI"),
        r = t.n(n),
        c = t("K9FK"),
        i = t("Zttt"),
        o = t("Wbzz"),
        l = t("9eSz"),
        m = t.n(l),
        s = t("vOnD"),
        p = Object(s.c)(m.a).withConfig({
          displayName: "personImage__ResponsiveImage",
          componentId: "sc-y9ubks-0"
        })([
          "width:100%;border-radius:50%;max-width:210px;box-shadow:50px 23px 0px -1px #616caa;-webkit-box-shadow:50px 23px 0px -1px #616caa;-moz-box-shadow:50px 23px 0px -1px #616caa;"
        ]),
        u = s.c.figure.withConfig({
          displayName: "personImage__Wrapper",
          componentId: "sc-y9ubks-1"
        })([
          "display:flex;justify-content:center;align-items:center;position:relative;"
        ]),
        d = function(e) {
          return r.a.createElement(u, null, e.children);
        },
        f = function() {
          var e = Object(o.useStaticQuery)("2630470712");
          return r.a.createElement(
            d,
            null,
            r.a.createElement(p, {
              fluid: e.placeholderImage.childImageSharp.fluid
            })
          );
        },
        x = t("ma3e"),
        g = s.c.div.withConfig({
          displayName: "SocialIcons__IconGroup",
          componentId: "sc-t3gqwy-0"
        })([
          "padding-top:10px;padding-bottom:10px;margin-top:24px;a{color:#616caa;font-size:30px;margin-right:20px;}svg{transition:0.2s;&:hover{transform:scale(1.2);}}"
        ]);
      function h() {
        var e = Object(o.useStaticQuery)("2543298781");
        return r.a.createElement(
          g,
          null,
          e.site.siteMetadata.socialLinks.map(function(e, a) {
            var t = e.name,
              n = e.url;
            return r.a.createElement(
              "a",
              { href: n, key: a },
              r.a.createElement(w, { name: t })
            );
          })
        );
      }
      var w = function(e) {
          switch (e.name) {
            case "Github":
              return r.a.createElement(x.b, null);
          }
        },
        b = t("BzA6"),
        v = t("r5+W");
      function E(e) {
        var a = e.data,
          t = a.markdownRemark.rawMarkdownBody,
          n = a.markdownRemark.frontmatter.heading;
        return r.a.createElement(
          i.a,
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
                r.a.createElement(b.a, null, n),
                r.a.createElement(v.a, null, t),
                r.a.createElement(h, null)
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
//# sourceMappingURL=component---src-pages-index-js-4baecb45a273bc842366.js.map
