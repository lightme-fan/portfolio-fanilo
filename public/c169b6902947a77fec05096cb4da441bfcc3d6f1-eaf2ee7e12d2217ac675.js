(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "9eSz": function(e, t, a) {
      "use strict";
      var n = a("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var r,
        i = n(a("v06X")),
        o = n(a("XEEL")),
        l = n(a("uDP2")),
        s = n(a("j8BX")),
        d = n(a("q1tI")),
        c = n(a("17x9")),
        u = function(e) {
          var t = (0, s.default)({}, e),
            a = t.resolutions,
            n = t.sizes,
            r = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            n && ((t.fluid = n), delete t.sizes),
            r && (t.loading = "eager"),
            t.fluid && (t.fluid = w([].concat(t.fluid))),
            t.fixed && (t.fixed = w([].concat(t.fixed))),
            t
          );
        },
        f = function(e) {
          var t = e.fluid,
            a = e.fixed;
          return ((t && t[0]) || (a && a[0])).src;
        },
        g = Object.create({}),
        m = function(e) {
          var t = u(e),
            a = f(t);
          return g[a] || !1;
        },
        p =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        h = "undefined" != typeof window,
        y = h && window.IntersectionObserver,
        b = new WeakMap();
      function v(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            n = e.srcSetWebp,
            r = e.media,
            i = e.sizes;
          return d.default.createElement(
            d.default.Fragment,
            { key: t },
            n &&
              d.default.createElement("source", {
                type: "image/webp",
                media: r,
                srcSet: n,
                sizes: i
              }),
            d.default.createElement("source", { media: r, srcSet: a, sizes: i })
          );
        });
      }
      function w(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            n = e.tracedSVG;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: n
          });
        });
      }
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            n = e.base64;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: n
          });
        });
      }
      function x(e, t) {
        var a = e.srcSet,
          n = e.srcSetWebp,
          r = e.media,
          i = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (r ? 'media="' + r + '" ' : "") +
          'srcset="' +
          (t ? n : a) +
          '" ' +
          (i ? 'sizes="' + i + '" ' : "") +
          "/>"
        );
      }
      var C = function(e, t) {
          var a =
            (void 0 === r &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (r = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (b.has(e.target)) {
                      var t = b.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(e.target), b.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            r);
          return (
            a && (a.observe(e), b.set(e, t)),
            function() {
              a.unobserve(e), b.delete(e);
            }
          );
        },
        O = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            n = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            r = e.title ? 'title="' + e.title + '" ' : "",
            i = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            o = e.width ? 'width="' + e.width + '" ' : "",
            l = e.height ? 'height="' + e.height + '" ' : "",
            s = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            d = e.loading ? 'loading="' + e.loading + '" ' : "",
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? x(e, !0) : "") + x(e);
              })
              .join("") +
            "<img " +
            d +
            o +
            l +
            a +
            n +
            t +
            i +
            r +
            s +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        z = function(e) {
          var t = e.src,
            a = e.imageVariants,
            n = e.generateSources,
            r = e.spreadProps,
            i = d.default.createElement(I, (0, s.default)({ src: t }, r));
          return a.length > 1
            ? d.default.createElement("picture", null, n(a), i)
            : i;
        },
        I = d.default.forwardRef(function(e, t) {
          var a = e.sizes,
            n = e.srcSet,
            r = e.src,
            i = e.style,
            o = e.onLoad,
            c = e.onError,
            u = e.loading,
            f = e.draggable,
            g = (0, l.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable"
            ]);
          return d.default.createElement(
            "img",
            (0, s.default)({ sizes: a, srcSet: n, src: r }, g, {
              onLoad: o,
              onError: c,
              ref: t,
              loading: u,
              draggable: f,
              style: (0, s.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                },
                i
              )
            })
          );
        });
      I.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onLoad: c.default.func
      };
      var L = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = h && m(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !p && y && !a.isCritical && !a.seenBefore);
          var n = a.isCritical || (h && (p || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: n,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn
            }),
            (a.imageRef = d.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, i.default)(a))),
            (a.handleRef = a.handleRef.bind((0, i.default)(a))),
            a
          );
        }
        (0, o.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: m(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function(e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = C(e, function() {
                var e = m(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    return t.setState({
                      imgLoaded: e,
                      imgCached: !!t.imageRef.current.currentSrc
                    });
                  });
              }));
          }),
          (a.handleImageLoaded = function() {
            var e, t, a;
            (e = this.props),
              (t = u(e)),
              (a = f(t)),
              (g[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              n = e.className,
              r = e.style,
              i = void 0 === r ? {} : r,
              o = e.imgStyle,
              l = void 0 === o ? {} : o,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              g = e.placeholderClassName,
              m = e.fluid,
              p = e.fixed,
              h = e.backgroundColor,
              y = e.durationFadeIn,
              b = e.Tag,
              w = e.itemProp,
              x = e.loading,
              C = e.draggable,
              L = !1 === this.state.fadeIn || this.state.imgLoaded,
              N = !0 === this.state.fadeIn && !this.state.imgCached,
              k = (0, s.default)(
                {
                  opacity: L ? 1 : 0,
                  transition: N ? "opacity " + y + "ms" : "none"
                },
                l
              ),
              M = "boolean" == typeof h ? "lightgray" : h,
              R = { transitionDelay: y + "ms" },
              V = (0, s.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                N && R,
                {},
                l,
                {},
                f
              ),
              j = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: V,
                className: g
              };
            if (m) {
              var P = m,
                T = P[0];
              return d.default.createElement(
                b,
                {
                  className: (n || "") + " gatsby-image-wrapper",
                  style: (0, s.default)(
                    { position: "relative", overflow: "hidden" },
                    i
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(T.srcSet)
                },
                d.default.createElement(b, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / T.aspectRatio + "%"
                  }
                }),
                M &&
                  d.default.createElement(b, {
                    title: t,
                    style: (0, s.default)(
                      {
                        backgroundColor: M,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      N && R
                    )
                  }),
                T.base64 &&
                  d.default.createElement(z, {
                    src: T.base64,
                    spreadProps: j,
                    imageVariants: P,
                    generateSources: S
                  }),
                T.tracedSVG &&
                  d.default.createElement(z, {
                    src: T.tracedSVG,
                    spreadProps: j,
                    imageVariants: P,
                    generateSources: E
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    v(P),
                    d.default.createElement(I, {
                      alt: a,
                      title: t,
                      sizes: T.sizes,
                      src: T.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: T.srcSet,
                      style: k,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: w,
                      loading: x,
                      draggable: C
                    })
                  ),
                this.addNoScript &&
                  d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: O(
                        (0, s.default)({ alt: a, title: t, loading: x }, T, {
                          imageVariants: P
                        })
                      )
                    }
                  })
              );
            }
            if (p) {
              var F = p,
                q = F[0],
                B = (0, s.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: q.width,
                    height: q.height
                  },
                  i
                );
              return (
                "inherit" === i.display && delete B.display,
                d.default.createElement(
                  b,
                  {
                    className: (n || "") + " gatsby-image-wrapper",
                    style: B,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(q.srcSet)
                  },
                  M &&
                    d.default.createElement(b, {
                      title: t,
                      style: (0, s.default)(
                        {
                          backgroundColor: M,
                          width: q.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: q.height
                        },
                        N && R
                      )
                    }),
                  q.base64 &&
                    d.default.createElement(z, {
                      src: q.base64,
                      spreadProps: j,
                      imageVariants: F,
                      generateSources: S
                    }),
                  q.tracedSVG &&
                    d.default.createElement(z, {
                      src: q.tracedSVG,
                      spreadProps: j,
                      imageVariants: F,
                      generateSources: E
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      v(F),
                      d.default.createElement(I, {
                        alt: a,
                        title: t,
                        width: q.width,
                        height: q.height,
                        sizes: q.sizes,
                        src: q.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: q.srcSet,
                        style: k,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: w,
                        loading: x,
                        draggable: C
                      })
                    ),
                  this.addNoScript &&
                    d.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: O(
                          (0, s.default)({ alt: a, title: t, loading: x }, q, {
                            imageVariants: F
                          })
                        )
                      }
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(d.default.Component);
      L.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var N = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string
        }),
        k = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string
        });
      L.propTypes = {
        resolutions: N,
        sizes: k,
        fixed: c.default.oneOfType([N, c.default.arrayOf(N)]),
        fluid: c.default.oneOfType([k, c.default.arrayOf(k)]),
        fadeIn: c.default.bool,
        durationFadeIn: c.default.number,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([
          c.default.string,
          c.default.bool
        ]),
        onLoad: c.default.func,
        onError: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
        loading: c.default.oneOf(["auto", "lazy", "eager"]),
        draggable: c.default.bool
      };
      var M = L;
      t.default = M;
    },
    BzA6: function(e, t, a) {
      "use strict";
      var n = a("vOnD").c.h1.withConfig({
        displayName: "Heading",
        componentId: "sc-1jn8day-0"
      })(
        [
          "font-weight:",
          ";line-height:",
          ";font-size:",
          ";letter-spacing:0.05em;"
        ],
        function(e) {
          return e.weight || "600";
        },
        function(e) {
          return e.height || "49px";
        },
        function(e) {
          return e.size || "36px";
        }
      );
      t.a = n;
    },
    K9FK: function(e, t, a) {
      "use strict";
      var n = a("vOnD").c.div.withConfig({
        displayName: "PageGrid",
        componentId: "sc-1e01k9x-0"
      })(
        [
          ".grid-container{display:grid;grid-template-columns:",
          ";grid-gap:30px;align-items:",
          ";height:",
          ";}.grid-item{margin-bottom:20px;}@media (max-width:500px){.grid-container{grid-template-columns:repeat(1,1fr);height:100%;}",
          "}"
        ],
        function(e) {
          return e.columns || "repeat(3, 1fr)";
        },
        function(e) {
          return e.center && "center";
        },
        function(e) {
          return e.height;
        },
        function(e) {
          return (
            e.swap &&
            "\n        .grid-item:nth-of-type(1) {\n      order: 2;\n    }\n\n    .grid-item:nth-of-type(2) {\n      order: 1;\n    }\n  "
          );
        }
      );
      t.a = n;
    },
    Lnxd: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return s;
      });
      var n = a("q1tI"),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0
        },
        i = n.createContext && n.createContext(r),
        o = function() {
          return (o =
            Object.assign ||
            function(e) {
              for (var t, a = 1, n = arguments.length; a < n; a++)
                for (var r in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        l = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (a[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 && (a[n[r]] = e[n[r]]);
          }
          return a;
        };
      function s(e) {
        return function(t) {
          return n.createElement(
            d,
            o({ attr: o({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function(t, a) {
                  return n.createElement(
                    t.tag,
                    o({ key: a }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function d(e) {
        var t = function(t) {
          var a,
            r = e.size || t.size || "1em";
          t.className && (a = t.className),
            e.className && (a = (a ? a + " " : "") + e.className);
          var i = e.attr,
            s = e.title,
            d = l(e, ["attr", "title"]);
          return n.createElement(
            "svg",
            o(
              {
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0"
              },
              t.attr,
              i,
              d,
              {
                className: a,
                style: o({ color: e.color || t.color }, t.style, e.style),
                height: r,
                width: r,
                xmlns: "http://www.w3.org/2000/svg"
              }
            ),
            s && n.createElement("title", null, s),
            e.children
          );
        };
        return void 0 !== i
          ? n.createElement(i.Consumer, null, function(e) {
              return t(e);
            })
          : t(r);
      }
    },
    Zttt: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return v;
      });
      var n = a("q1tI"),
        r = a.n(n),
        i = a("ma3e"),
        o = a("vOnD"),
        l = o.c.div.withConfig({
          displayName: "Core__SmallMenu",
          componentId: "sc-2m5hgx-0"
        })(
          [
            "display:none;text-align:center;@media (max-width:",
            "){display:block;}"
          ],
          function(e) {
            return e.size;
          }
        ),
        s = o.c.div.withConfig({
          displayName: "Core__LargeMenu",
          componentId: "sc-2m5hgx-1"
        })(
          [
            "display:block;text-align:right;@media (max-width:",
            "){display:none;}"
          ],
          function(e) {
            return e.size;
          }
        ),
        d = o.c.div.withConfig({
          displayName: "Core__FlexBox",
          componentId: "sc-2m5hgx-2"
        })(["display:flex;justify-content:space-between;align-items:center;"]),
        c = function(e) {
          var t = e.onClick,
            a = e.icon;
          return r.a.createElement("div", { role: "button", onClick: t }, a);
        };
      function u(e) {
        var t = Object(n.useState)(!1),
          a = t[0],
          i = t[1],
          o = e.menu,
          u = e.largeMenuClassName,
          f = e.smallMenuClassName,
          g = e.changeMenuOn,
          m = e.menuOpenButton,
          p = e.menuCloseButton,
          h = e.smallMenuBrand;
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(s, { className: u, size: g }, o),
          r.a.createElement(
            l,
            { className: f, size: g },
            a
              ? r.a.createElement(
                  d,
                  null,
                  h,
                  r.a.createElement(c, {
                    onClick: function() {
                      return i(!1);
                    },
                    icon: p
                  })
                )
              : r.a.createElement(
                  d,
                  null,
                  h,
                  r.a.createElement(c, {
                    onClick: function() {
                      return i(!0);
                    },
                    icon: m
                  })
                ),
            a ? r.a.createElement("div", null, o) : null
          )
        );
      }
      u.defaultProps = { largeMenuClassName: "", smallMenuClassName: "" };
      var f = u,
        g = a("Wbzz"),
        m = function(e) {
          var t = e.to,
            a = e.children;
          return r.a.createElement(
            g.Link,
            { activeStyle: { fontWeight: 700 }, to: t },
            a
          );
        },
        p = o.c.div.withConfig({
          displayName: "Menu",
          componentId: "zarx15-0"
        })([
          'ul{padding:0;}.logo{float:left;color:#000;a{color:#000;font-weight:700;font-family:"Montserrat",sans-serif;border-bottom:2px dashed #616caa;}}li{display:inline;list-style-type:none;margin-right:30px;letter-spacing:0.05em;}a{text-decoration:none;text-transform:uppercase;font-size:24px;font-weight:600;color:#616caa;&:hover{border-bottom:2px solid #616caa;}}@media (max-width:500px){padding:10px 0;li{padding:10px 0;display:block;margin-left:0;}.logo{float:none;display:none;}}'
        ]);
      function h() {
        return r.a.createElement(f, {
          menuOpenButton: r.a.createElement(i.a, {
            size: 30,
            color: "#616CAA"
          }),
          menuCloseButton: r.a.createElement(i.g, {
            size: 30,
            color: "#616CAA"
          }),
          changeMenuOn: "500px",
          largeMenuClassName: "large-menu",
          smallMenuClassName: "small-menu",
          menu: r.a.createElement(
            p,
            null,
            r.a.createElement(
              "ul",
              null,
              r.a.createElement(
                "li",
                { className: "logo" },
                r.a.createElement(m, { to: "/" }, "Fanilo")
              ),
              r.a.createElement(
                "li",
                null,
                r.a.createElement(m, { to: "/projects" }, "See my work")
              )
            )
          ),
          smallMenuBrand: r.a.createElement(
            g.Link,
            {
              to: "/",
              style: {
                color: "#000",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif"
              }
            },
            r.a.createElement("h2", null, "FANILO")
          )
        });
      }
      var y = o.c.div.withConfig({
          displayName: "Container",
          componentId: "sc-1cgfixu-0"
        })(
          [
            "padding-left:",
            ";padding-right:",
            ";margin-right:",
            ";margin-left:",
            ";@media screen and (min-width:768px){width:750px;}@media screen and (min-width:992px){width:970px;}@media screen and (min-width:1200px){width:1170px;}"
          ],
          function(e) {
            return e.padding || "15px";
          },
          function(e) {
            return e.padding || "15px";
          },
          function(e) {
            return e.margin || "auto";
          },
          function(e) {
            return e.margin || "auto";
          }
        ),
        b = a("rSlr");
      function v(e) {
        var t = e.children;
        return r.a.createElement(
          y,
          null,
          r.a.createElement(h, null),
          r.a.createElement("main", { style: { marginTop: "50px" } }, t),
          r.a.createElement(b.a, null)
        );
      }
    },
    "r5+W": function(e, t, a) {
      "use strict";
      var n = a("vOnD").c.p.withConfig({
        displayName: "Description",
        componentId: "sc-1qevbls-0"
      })(
        [
          "letter-spacing:0.05em;line-height:",
          ";font-size:",
          ";color:#4b4b4b;"
        ],
        function(e) {
          return e.height || "33px";
        },
        function(e) {
          return e.size || "24px";
        }
      );
      t.a = n;
    },
    rSlr: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return i;
      });
      var n = a("q1tI"),
        r = a.n(n);
      function i() {
        return r.a.createElement(
          "footer",
          {
            style: {
              backgroundColor: "#F1F3F4",
              padding: "15px",
              textAlign: "center",
              marginTop: "20px"
            }
          },
          "© Created and Presented with 💙 by ",
          r.a.createElement("a", { href: "#fanilo" }, "Fanilo")
        );
      }
    }
  }
]);
//# sourceMappingURL=c169b6902947a77fec05096cb4da441bfcc3d6f1-eaf2ee7e12d2217ac675.js.map
