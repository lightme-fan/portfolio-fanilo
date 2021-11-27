(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "9eSz": function(e, t, a) {
      "use strict";
      var r = a("TqRt");
      (t.__esModule = !0), (t.default = void 0);
      var n,
        i = r(a("PJYZ")),
        o = r(a("VbXa")),
        l = r(a("8OQS")),
        s = r(a("pVnL")),
        d = r(a("q1tI")),
        c = r(a("17x9")),
        u = function(e) {
          var t = (0, s.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            n = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            n && (t.loading = "eager"),
            t.fluid && (t.fluid = E([].concat(t.fluid))),
            t.fixed && (t.fixed = E([].concat(t.fixed))),
            t
          );
        },
        f = function(e) {
          var t = e.media;
          return !!t && b && !!window.matchMedia(t).matches;
        },
        m = function(e) {
          var t = e.fluid,
            a = e.fixed,
            r = p(t || a || []);
          return r && r.src;
        },
        p = function(e) {
          if (
            b &&
            (function(e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function(e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(f);
            if (-1 !== t) return e[t];
            var a = e.findIndex(function(e) {
              return void 0 === e.media;
            });
            if (-1 !== a) return e[a];
          }
          return e[0];
        },
        g = Object.create({}),
        h = function(e) {
          var t = u(e),
            a = m(t);
          return g[a] || !1;
        },
        y =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        b = "undefined" != typeof window,
        v = b && window.IntersectionObserver,
        x = new WeakMap();
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            n = e.media,
            i = e.sizes;
          return d.default.createElement(
            d.default.Fragment,
            { key: t },
            r &&
              d.default.createElement("source", {
                type: "image/webp",
                media: n,
                srcSet: r,
                sizes: i
              }),
            a &&
              d.default.createElement("source", {
                media: n,
                srcSet: a,
                sizes: i
              })
          );
        });
      }
      function E(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function C(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.base64;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function O(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          n = e.media,
          i = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (n ? 'media="' + n + '" ' : "") +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (i ? 'sizes="' + i + '" ' : "") +
          "/>"
        );
      }
      var I = function(e, t) {
          var a =
            (void 0 === n &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (n = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (x.has(e.target)) {
                      var t = x.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (n.unobserve(e.target), x.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            n);
          return (
            a && (a.observe(e), x.set(e, t)),
            function() {
              a.unobserve(e), x.delete(e);
            }
          );
        },
        z = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            n = e.title ? 'title="' + e.title + '" ' : "",
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
                return (e.srcSetWebp ? O(e, !0) : "") + O(e);
              })
              .join("") +
            "<img " +
            d +
            o +
            l +
            a +
            r +
            t +
            i +
            n +
            s +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        L = d.default.forwardRef(function(e, t) {
          var a = e.src,
            r = e.imageVariants,
            n = e.generateSources,
            i = e.spreadProps,
            o = e.ariaHidden,
            l = d.default.createElement(
              N,
              (0, s.default)({ ref: t, src: a }, i, { ariaHidden: o })
            );
          return r.length > 1
            ? d.default.createElement("picture", null, n(r), l)
            : l;
        }),
        N = d.default.forwardRef(function(e, t) {
          var a = e.sizes,
            r = e.srcSet,
            n = e.src,
            i = e.style,
            o = e.onLoad,
            c = e.onError,
            u = e.loading,
            f = e.draggable,
            m = e.ariaHidden,
            p = (0, l.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
              "ariaHidden"
            ]);
          return d.default.createElement(
            "img",
            (0, s.default)(
              { "aria-hidden": m, sizes: a, srcSet: r, src: n },
              p,
              {
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
              }
            )
          );
        });
      N.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onLoad: c.default.func
      };
      var R = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = b && h(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !y && v && !a.isCritical && !a.seenBefore);
          var r = a.isCritical || (b && (y || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn,
              isHydrated: !1
            }),
            (a.imageRef = d.default.createRef()),
            (a.placeholderRef = t.placeholderRef || d.default.createRef()),
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
              (this.setState({ isHydrated: b }),
              this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: h(this.props) }),
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
              (this.cleanUpListeners = I(e, function() {
                var e = h(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(
                        !t.imageRef.current || !t.imageRef.current.currentSrc
                      )
                    });
                  });
              }));
          }),
          (a.handleImageLoaded = function() {
            var e, t, a;
            (e = this.props),
              (t = u(e)),
              (a = m(t)) && (g[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              n = e.style,
              i = void 0 === n ? {} : n,
              o = e.imgStyle,
              l = void 0 === o ? {} : o,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              m = e.placeholderClassName,
              g = e.fluid,
              h = e.fixed,
              y = e.backgroundColor,
              b = e.durationFadeIn,
              v = e.Tag,
              x = e.itemProp,
              E = e.loading,
              O = e.draggable,
              I = g || h;
            if (!I) return null;
            var R = !1 === this.state.fadeIn || this.state.imgLoaded,
              k = !0 === this.state.fadeIn && !this.state.imgCached,
              M = (0, s.default)(
                {
                  opacity: R ? 1 : 0,
                  transition: k ? "opacity " + b + "ms" : "none"
                },
                l
              ),
              V = "boolean" == typeof y ? "lightgray" : y,
              j = { transitionDelay: b + "ms" },
              P = (0, s.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                k && j,
                l,
                f
              ),
              H = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: P,
                className: m,
                itemProp: x
              },
              T = this.state.isHydrated ? p(I) : I[0];
            if (g)
              return d.default.createElement(
                v,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, s.default)(
                    {
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: T.maxWidth ? T.maxWidth + "px" : null,
                      maxHeight: T.maxHeight ? T.maxHeight + "px" : null
                    },
                    i
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(T.srcSet)
                },
                d.default.createElement(v, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / T.aspectRatio + "%"
                  }
                }),
                V &&
                  d.default.createElement(v, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, s.default)(
                      {
                        backgroundColor: V,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      k && j
                    )
                  }),
                T.base64 &&
                  d.default.createElement(L, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: T.base64,
                    spreadProps: H,
                    imageVariants: I,
                    generateSources: C
                  }),
                T.tracedSVG &&
                  d.default.createElement(L, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: T.tracedSVG,
                    spreadProps: H,
                    imageVariants: I,
                    generateSources: S
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    w(I),
                    d.default.createElement(N, {
                      alt: a,
                      title: t,
                      sizes: T.sizes,
                      src: T.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: T.srcSet,
                      style: M,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: x,
                      loading: E,
                      draggable: O
                    })
                  ),
                this.addNoScript &&
                  d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: z(
                        (0, s.default)({ alt: a, title: t, loading: E }, T, {
                          imageVariants: I
                        })
                      )
                    }
                  })
              );
            if (h) {
              var W = (0, s.default)(
                {
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-block",
                  width: T.width,
                  height: T.height
                },
                i
              );
              return (
                "inherit" === i.display && delete W.display,
                d.default.createElement(
                  v,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: W,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(T.srcSet)
                  },
                  V &&
                    d.default.createElement(v, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, s.default)(
                        {
                          backgroundColor: V,
                          width: T.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: T.height
                        },
                        k && j
                      )
                    }),
                  T.base64 &&
                    d.default.createElement(L, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: T.base64,
                      spreadProps: H,
                      imageVariants: I,
                      generateSources: C
                    }),
                  T.tracedSVG &&
                    d.default.createElement(L, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: T.tracedSVG,
                      spreadProps: H,
                      imageVariants: I,
                      generateSources: S
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      w(I),
                      d.default.createElement(N, {
                        alt: a,
                        title: t,
                        width: T.width,
                        height: T.height,
                        sizes: T.sizes,
                        src: T.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: T.srcSet,
                        style: M,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: x,
                        loading: E,
                        draggable: O
                      })
                    ),
                  this.addNoScript &&
                    d.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: z(
                          (0, s.default)({ alt: a, title: t, loading: E }, T, {
                            imageVariants: I
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
      R.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var k = c.default.shape({
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
        M = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
          maxWidth: c.default.number,
          maxHeight: c.default.number
        });
      function V(e) {
        return function(t, a, r) {
          var n;
          if (!t.fixed && !t.fluid)
            throw new Error(
              "The prop `fluid` or `fixed` is marked as required in `" +
                r +
                "`, but their values are both `undefined`."
            );
          c.default.checkPropTypes((((n = {})[a] = e), n), t, "prop", r);
        };
      }
      R.propTypes = {
        resolutions: k,
        sizes: M,
        fixed: V(c.default.oneOfType([k, c.default.arrayOf(k)])),
        fluid: V(c.default.oneOfType([M, c.default.arrayOf(M)])),
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
      var j = R;
      t.default = j;
    },
    BzA6: function(e, t, a) {
      "use strict";
      var r = a("vOnD").c.h1.withConfig({
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
      t.a = r;
    },
    K9FK: function(e, t, a) {
      "use strict";
      var r = a("vOnD").c.div.withConfig({
        displayName: "PageGrid",
        componentId: "sc-1e01k9x-0"
      })(
        [
          ".grid-container{display:grid;grid-template-columns:",
          ";grid-gap:30px;align-items:",
          ";height:",
          ";}.grid-item{margin-bottom:20px;.project-image{max-height:272px;}}.grid-item:nth-of-type(2){margin-bottom:116px;.project-image{max-height:242px;}@media (min-width:700px){margin-bottom:45px;}}@media (max-width:500px){.grid-container{grid-template-columns:repeat(1,1fr);height:100%;}",
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
      t.a = r;
    },
    Lnxd: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return s;
      });
      var r = a("q1tI"),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0
        },
        i = r.createContext && r.createContext(n),
        o = function() {
          return (o =
            Object.assign ||
            function(e) {
              for (var t, a = 1, r = arguments.length; a < r; a++)
                for (var n in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        l = function(e, t) {
          var a = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (a[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
              t.indexOf(r[n]) < 0 && (a[r[n]] = e[r[n]]);
          }
          return a;
        };
      function s(e) {
        return function(t) {
          return r.createElement(
            d,
            o({ attr: o({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function(t, a) {
                  return r.createElement(
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
            n = e.size || t.size || "1em";
          t.className && (a = t.className),
            e.className && (a = (a ? a + " " : "") + e.className);
          var i = e.attr,
            s = e.title,
            d = l(e, ["attr", "title"]);
          return r.createElement(
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
                height: n,
                width: n,
                xmlns: "http://www.w3.org/2000/svg"
              }
            ),
            s && r.createElement("title", null, s),
            e.children
          );
        };
        return void 0 !== i
          ? r.createElement(i.Consumer, null, function(e) {
              return t(e);
            })
          : t(n);
      }
    },
    Zttt: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return v;
      });
      var r = a("q1tI"),
        n = a.n(r),
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
          return n.a.createElement("div", { role: "button", onClick: t }, a);
        };
      function u(e) {
        var t = Object(r.useState)(!1),
          a = t[0],
          i = t[1],
          o = e.menu,
          u = e.largeMenuClassName,
          f = e.smallMenuClassName,
          m = e.changeMenuOn,
          p = e.menuOpenButton,
          g = e.menuCloseButton,
          h = e.smallMenuBrand;
        return n.a.createElement(
          "div",
          null,
          n.a.createElement(s, { className: u, size: m }, o),
          n.a.createElement(
            l,
            { className: f, size: m },
            a
              ? n.a.createElement(
                  d,
                  null,
                  h,
                  n.a.createElement(c, {
                    onClick: function() {
                      return i(!1);
                    },
                    icon: g
                  })
                )
              : n.a.createElement(
                  d,
                  null,
                  h,
                  n.a.createElement(c, {
                    onClick: function() {
                      return i(!0);
                    },
                    icon: p
                  })
                ),
            a ? n.a.createElement("div", null, o) : null
          )
        );
      }
      u.defaultProps = { largeMenuClassName: "", smallMenuClassName: "" };
      var f = u,
        m = a("Wbzz"),
        p = function(e) {
          var t = e.to,
            a = e.children;
          return n.a.createElement(
            m.Link,
            { activeStyle: { fontWeight: 700 }, to: t },
            a
          );
        },
        g = o.c.div.withConfig({
          displayName: "Menu",
          componentId: "sc-zarx15-0"
        })([
          "ul{padding:0;margin-bottom:0;}.logo{float:left;color:#000;a{color:#000;font-weight:700;font-family:'Montserrat',sans-serif;border-bottom:2px dashed #616caa;}}li{display:inline;list-style-type:none;margin-right:30px;letter-spacing:0.05em;}a{text-decoration:none;text-transform:uppercase;font-size:24px;font-weight:600;color:#616caa;&:hover{border-bottom:2px solid #616caa;}}@media (max-width:500px){padding:10px 0;li{padding:10px 0;display:block;margin-left:0;}.logo{float:none;display:none;}}"
        ]);
      function h() {
        return n.a.createElement(f, {
          menuOpenButton: n.a.createElement(i.a, {
            size: 30,
            color: "#616CAA"
          }),
          menuCloseButton: n.a.createElement(i.c, {
            size: 30,
            color: "#616CAA"
          }),
          changeMenuOn: "500px",
          largeMenuClassName: "large-menu",
          smallMenuClassName: "small-menu",
          menu: n.a.createElement(
            g,
            null,
            n.a.createElement(
              "ul",
              null,
              n.a.createElement(
                "li",
                { className: "logo" },
                n.a.createElement(p, { to: "/" }, "Fanilo")
              ),
              n.a.createElement(
                "li",
                null,
                n.a.createElement(p, { to: "/projects" }, "See my works")
              )
            )
          ),
          smallMenuBrand: n.a.createElement(
            m.Link,
            {
              to: "/",
              style: {
                color: "#000",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif"
              }
            },
            n.a.createElement("h2", null, "FANILO")
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
      );
      function b() {
        return n.a.createElement(
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
          n.a.createElement("a", { href: "#fanilo" }, "Fanilo")
        );
      }
      function v(e) {
        var t = e.children;
        return n.a.createElement(
          y,
          null,
          n.a.createElement(h, null),
          n.a.createElement("main", { style: { marginTop: "50px" } }, t),
          n.a.createElement(b, null)
        );
      }
    },
    "r5+W": function(e, t, a) {
      "use strict";
      var r = a("vOnD").c.div.withConfig({
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
      t.a = r;
    }
  }
]);
//# sourceMappingURL=c169b6902947a77fec05096cb4da441bfcc3d6f1-0a5ac32c738fefaccb18.js.map
