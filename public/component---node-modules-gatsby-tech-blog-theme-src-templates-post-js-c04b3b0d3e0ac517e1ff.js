(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "9Q+W": function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r("q1tI"),
        o = r.n(n),
        a = r("17x9"),
        i = r.n(a),
        l = r("Wbzz"),
        c = r("vOnD"),
        p = r("N1om"),
        s = r.n(p),
        u = r("A2+M"),
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
              l.Link,
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
              l.Link,
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
        b = c.c.div.withConfig({
          displayName: "post__PostContent",
          componentId: "omrt2x-2"
        })(["margin-top:4rem;"]),
        g = function(e) {
          var t = e.pageContext,
            r = t.slug,
            n = t.prev,
            a = t.next,
            i = t.home,
            c = e.data.mdx,
            p = c.frontmatter;
          return o.a.createElement(
            m.c,
            { customSEO: !0 },
            o.a.createElement(
              m.h,
              null,
              o.a.createElement(m.e, { postPath: r, postNode: c, article: !0 }),
              o.a.createElement(d, { home: i }),
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
                        l.Link,
                        { to: i + "/categories/" + s()(e) },
                        e
                      )
                    );
                  })
                ),
                o.a.createElement(
                  b,
                  null,
                  o.a.createElement(u.MDXRenderer, null, c.body)
                ),
                o.a.createElement(m.d, { prev: n, next: a })
              )
            )
          );
        };
      t.default = g;
      g.defaultProps = { pageContext: i.a.shape({ next: null, prev: null }) };
    },
    "A2+M": function(e, t, r) {
      var n = r("X8hv");
      e.exports = { MDXRenderer: n };
    },
    Bnag: function(e, t) {
      (e.exports = function() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    EbDI: function(e, t) {
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
    Ijbi: function(e, t, r) {
      var n = r("WkPL");
      (e.exports = function(e) {
        if (Array.isArray(e)) return n(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    RIqP: function(e, t, r) {
      var n = r("Ijbi"),
        o = r("EbDI"),
        a = r("ZhPi"),
        i = r("Bnag");
      (e.exports = function(e) {
        return n(e) || o(e) || a(e) || i();
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    WkPL: function(e, t) {
      (e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    X8hv: function(e, t, r) {
      var n = r("sXyB"),
        o = r("RIqP"),
        a = r("lSNA"),
        i = r("8OQS"),
        l = ["scope", "children"];
      function c(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function(t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var s = r("q1tI"),
        u = r("7ljp").mdx,
        m = r("BfwJ").useMDXScope;
      e.exports = function(e) {
        var t = e.scope,
          r = e.children,
          a = i(e, l),
          c = m(t),
          f = s.useMemo(
            function() {
              if (!r) return null;
              var e = p({ React: s, mdx: u }, c),
                t = Object.keys(e),
                a = t.map(function(t) {
                  return e[t];
                });
              return n(Function, ["_fn"].concat(o(t), ["" + r])).apply(
                void 0,
                [{}].concat(o(a))
              );
            },
            [r, t]
          );
        return s.createElement(f, p({}, a));
      };
    },
    ZhPi: function(e, t, r) {
      var n = r("WkPL");
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
    b48C: function(e, t) {
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
    sXyB: function(e, t, r) {
      var n = r("SksO"),
        o = r("b48C");
      function a(t, r, i) {
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
    }
  }
]);
//# sourceMappingURL=component---node-modules-gatsby-tech-blog-theme-src-templates-post-js-c04b3b0d3e0ac517e1ff.js.map
