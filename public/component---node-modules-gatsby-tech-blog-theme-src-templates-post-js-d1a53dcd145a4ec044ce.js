(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "0jh0": function(e, t) {
      (e.exports = function(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    "2klF": function(e, t) {
      (e.exports = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function() {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    "9Q+W": function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r("q1tI"),
        o = r.n(n),
        a = r("17x9"),
        l = r.n(a),
        i = r("Wbzz"),
        c = r("vOnD"),
        p = r("N1om"),
        u = r.n(p),
        s = r("A2+M"),
        m = r("GWfH"),
        f = c.c.div.withConfig({
          displayName: "PostHeader__Flex",
          componentId: "sc-1pa0ptw-0"
        })(["display:flex;justify-content:space-between;"]);
      function d(e) {
        var t = e.home;
        return o.a.createElement(
          m.b,
          null,
          o.a.createElement(
            f,
            null,
            o.a.createElement(
              i.Link,
              { to: t },
              o.a.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "#FFF"
                },
                o.a.createElement("path", {
                  d: "M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
                }),
                o.a.createElement("path", { fill: "none", d: "M0 0h24v24H0z" })
              )
            ),
            o.a.createElement(
              i.Link,
              { to: t + "/search" },
              o.a.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "#FFF"
                },
                o.a.createElement("path", {
                  d:
                    "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                }),
                o.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
              )
            )
          )
        );
      }
      var x = c.c.article.withConfig({
          displayName: "post__Content",
          componentId: "omrt2x-0"
        })(
          [
            "grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);max-width:1000px;border-radius:1rem;padding:2rem 4.5rem;background-color:",
            ";z-index:9000;margin-top:-3rem;@media (max-width:",
            "){padding:3rem 3rem;}@media (max-width:",
            "){padding:2rem 1.5rem;}p{font-size:1.1rem;letter-spacing:-0.003em;line-height:1.58;--baseline-multiplier:0.179;--x-height-multiplier:0.35;@media (max-width:",
            "){font-size:1rem;}}.prism-code{padding:0.75rem;border-radius:5px;margin-bottom:1rem;font-size:16px;}"
          ],
          function(e) {
            return e.theme.colors.bg;
          },
          function(e) {
            return e.theme.breakpoints.tablet;
          },
          function(e) {
            return e.theme.breakpoints.phone;
          },
          function(e) {
            return e.theme.breakpoints.phone;
          }
        ),
        h = c.c.h1.withConfig({
          displayName: "post__Title",
          componentId: "omrt2x-1"
        })(["margin-bottom:1rem;"]),
        g = c.c.div.withConfig({
          displayName: "post__PostContent",
          componentId: "omrt2x-2"
        })(["margin-top:4rem;"]),
        b = function(e) {
          var t = e.pageContext,
            r = t.slug,
            n = t.prev,
            a = t.next,
            l = t.home,
            c = e.data.mdx,
            p = c.frontmatter;
          return o.a.createElement(
            m.c,
            { customSEO: !0 },
            o.a.createElement(
              m.h,
              null,
              o.a.createElement(m.e, { postPath: r, postNode: c, article: !0 }),
              o.a.createElement(d, { home: l }),
              o.a.createElement(
                x,
                null,
                o.a.createElement(h, null, p.title),
                o.a.createElement(
                  m.g,
                  null,
                  p.date,
                  " — ",
                  c.timeToRead,
                  " Min Read — In",
                  " ",
                  p.categories.map(function(e, t) {
                    return o.a.createElement(
                      o.a.Fragment,
                      { key: e },
                      !!t && ", ",
                      o.a.createElement(
                        i.Link,
                        { to: l + "/categories/" + u()(e) },
                        e
                      )
                    );
                  })
                ),
                o.a.createElement(
                  g,
                  null,
                  o.a.createElement(s.MDXRenderer, null, c.body)
                ),
                o.a.createElement(m.d, { prev: n, next: a })
              )
            )
          );
        };
      t.default = b;
      b.defaultProps = { pageContext: l.a.shape({ next: null, prev: null }) };
    },
    "A2+M": function(e, t, r) {
      var n = r("X8hv");
      e.exports = { MDXRenderer: n };
    },
    Ck4i: function(e, t, r) {
      var n = r("Q83E"),
        o = r("2klF");
      function a(t, r, l) {
        return (
          o()
            ? ((e.exports = a = Reflect.construct),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = a = function(e, t, r) {
                var o = [null];
                o.push.apply(o, t);
                var a = new (Function.bind.apply(e, o))();
                return r && n(a, r.prototype), a;
              }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0)),
          a.apply(null, arguments)
        );
      }
      (e.exports = a),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    R7tm: function(e, t, r) {
      var n = r("qHws"),
        o = r("gC2u"),
        a = r("dQcQ"),
        l = r("m7BV");
      (e.exports = function(e) {
        return n(e) || o(e) || a(e) || l();
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    X8hv: function(e, t, r) {
      var n = r("Ck4i"),
        o = r("R7tm"),
        a = r("0jh0"),
        l = r("uDP2");
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(r, !0).forEach(function(t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(r).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var p = r("q1tI"),
        u = r("E/Ix"),
        s = u.useMDXComponents,
        m = u.mdx,
        f = r("BfwJ").useMDXScope;
      e.exports = function(e) {
        var t = e.scope,
          r = e.components,
          a = e.children,
          i = l(e, ["scope", "components", "children"]),
          u = s(r),
          d = f(t),
          x = p.useMemo(
            function() {
              if (!a) return null;
              var e = c({ React: p, mdx: m }, d),
                t = Object.keys(e),
                r = t.map(function(t) {
                  return e[t];
                });
              return n(Function, ["_fn"].concat(o(t), ["" + a])).apply(
                void 0,
                [{}].concat(o(r))
              );
            },
            [a, t]
          );
        return p.createElement(x, c({ components: u }, i));
      };
    },
    dQcQ: function(e, t, r) {
      var n = r("hMe3");
      (e.exports = function(e, t) {
        if (e) {
          if ("string" == typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
          );
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    gC2u: function(e, t) {
      (e.exports = function(e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    hMe3: function(e, t) {
      (e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    m7BV: function(e, t) {
      (e.exports = function() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    qHws: function(e, t, r) {
      var n = r("hMe3");
      (e.exports = function(e) {
        if (Array.isArray(e)) return n(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    }
  }
]);
//# sourceMappingURL=component---node-modules-gatsby-tech-blog-theme-src-templates-post-js-d1a53dcd145a4ec044ce.js.map
