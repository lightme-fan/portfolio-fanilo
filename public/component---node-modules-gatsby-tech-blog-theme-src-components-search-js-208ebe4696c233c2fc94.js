/*! For license information please see component---node-modules-gatsby-tech-blog-theme-src-components-search-js-208ebe4696c233c2fc94.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "4KlN": function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n("q1tI"),
        o = n.n(i),
        r = n("Wbzz"),
        s = n("dI71"),
        a = n("ZhwA"),
        u = n("GWfH"),
        l = n("SjOT"),
        c = (function(e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).getOrCreateIndex = function() {
                return n.index ? n.index : a.Index.load(n.props.searchIndex);
              }),
              (n.search = function(e) {
                var t = e.target.value;
                (n.index = n.getOrCreateIndex()),
                  n.setState({
                    query: t,
                    results: n.index.search(t, {}).map(function(e) {
                      var t = e.ref;
                      return n.index.documentStore.getDoc(t);
                    })
                  });
              }),
              (n.state = { query: "", results: [] }),
              n
            );
          }
          return (
            Object(s.a)(t, e),
            (t.prototype.render = function() {
              return o.a.createElement(
                u.c,
                null,
                o.a.createElement(
                  u.h,
                  null,
                  o.a.createElement(
                    l.a,
                    null,
                    o.a.createElement("input", {
                      type: "text",
                      value: this.state.query,
                      onChange: this.search,
                      placeholder: "search"
                    }),
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "Search By",
                    " ",
                    o.a.createElement(
                      "a",
                      {
                        href:
                          "https://www.gatsbyjs.org/packages/@gatsby-contrib/gatsby-plugin-elasticlunr-search"
                      },
                      "Elastic Lunr"
                    )
                  ),
                  o.a.createElement(
                    l.b,
                    null,
                    o.a.createElement(u.f, null, "Results"),
                    this.state.results.map(function(e) {
                      return o.a.createElement(u.a, {
                        title: e.title,
                        date: e.date,
                        excerpt: e.excerpt,
                        timeToRead: e.timeToRead,
                        slug: e.slug,
                        categories: e.categories,
                        path: e.path,
                        key: e.slug
                      });
                    })
                  )
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = function() {
        var e = Object(r.useStaticQuery)("2744294623");
        return o.a.createElement(c, { searchIndex: e.siteSearchIndex.index });
      };
    },
    SjOT: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      }),
        n.d(t, "b", function() {
          return r;
        });
      var i = n("vOnD"),
        o = i.c.div.withConfig({
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
        r = i.c.div.withConfig({
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
    ZhwA: function(e, t, n) {
      var i, o;
      n("K/os"),
        (function() {
          var r,
            s,
            a,
            u,
            l,
            c,
            d,
            h,
            f,
            p,
            m,
            v,
            g,
            y,
            x,
            w,
            S,
            b,
            I,
            E,
            D,
            F,
            _,
            k,
            C,
            z = function e(t) {
              var n = new e.Index();
              return (
                n.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer),
                t && t.call(n, n),
                n
              );
            };
          (z.version = "0.9.5"),
            (lunr = z),
            ((z.utils = {}).warn =
              ((r = this),
              function(e) {
                r.console && console.warn && console.warn(e);
              })),
            (z.utils.toString = function(e) {
              return null == e ? "" : e.toString();
            }),
            ((z.EventEmitter = function() {
              this.events = {};
            }).prototype.addListener = function() {
              var e = Array.prototype.slice.call(arguments),
                t = e.pop(),
                n = e;
              if ("function" != typeof t)
                throw new TypeError("last argument must be a function");
              n.forEach(function(e) {
                this.hasHandler(e) || (this.events[e] = []),
                  this.events[e].push(t);
              }, this);
            }),
            (z.EventEmitter.prototype.removeListener = function(e, t) {
              if (this.hasHandler(e)) {
                var n = this.events[e].indexOf(t);
                -1 !== n &&
                  (this.events[e].splice(n, 1),
                  0 == this.events[e].length && delete this.events[e]);
              }
            }),
            (z.EventEmitter.prototype.emit = function(e) {
              if (this.hasHandler(e)) {
                var t = Array.prototype.slice.call(arguments, 1);
                this.events[e].forEach(function(e) {
                  e.apply(void 0, t);
                }, this);
              }
            }),
            (z.EventEmitter.prototype.hasHandler = function(e) {
              return e in this.events;
            }),
            ((z.tokenizer = function(e) {
              if (!arguments.length || null == e) return [];
              if (Array.isArray(e)) {
                var t = e.filter(function(e) {
                  return null != e;
                });
                t = t.map(function(e) {
                  return z.utils.toString(e).toLowerCase();
                });
                var n = [];
                return (
                  t.forEach(function(e) {
                    var t = e.split(z.tokenizer.seperator);
                    n = n.concat(t);
                  }, this),
                  n
                );
              }
              return e
                .toString()
                .trim()
                .toLowerCase()
                .split(z.tokenizer.seperator);
            }).defaultSeperator = /[\s\-]+/),
            (z.tokenizer.seperator = z.tokenizer.defaultSeperator),
            (z.tokenizer.setSeperator = function(e) {
              null != e && "object" == typeof e && (z.tokenizer.seperator = e);
            }),
            (z.tokenizer.resetSeperator = function() {
              z.tokenizer.seperator = z.tokenizer.defaultSeperator;
            }),
            (z.tokenizer.getSeperator = function() {
              return z.tokenizer.seperator;
            }),
            ((z.Pipeline = function() {
              this._queue = [];
            }).registeredFunctions = {}),
            (z.Pipeline.registerFunction = function(e, t) {
              t in z.Pipeline.registeredFunctions &&
                z.utils.warn("Overwriting existing registered function: " + t),
                (e.label = t),
                (z.Pipeline.registeredFunctions[t] = e);
            }),
            (z.Pipeline.getRegisteredFunction = function(e) {
              return e in z.Pipeline.registeredFunctions != !0
                ? null
                : z.Pipeline.registeredFunctions[e];
            }),
            (z.Pipeline.warnIfFunctionNotRegistered = function(e) {
              (e.label && e.label in this.registeredFunctions) ||
                z.utils.warn(
                  "Function is not registered with pipeline. This may cause problems when serialising the index.\n",
                  e
                );
            }),
            (z.Pipeline.load = function(e) {
              var t = new z.Pipeline();
              return (
                e.forEach(function(e) {
                  var n = z.Pipeline.getRegisteredFunction(e);
                  if (!n)
                    throw new Error("Cannot load un-registered function: " + e);
                  t.add(n);
                }),
                t
              );
            }),
            (z.Pipeline.prototype.add = function() {
              var e = Array.prototype.slice.call(arguments);
              e.forEach(function(e) {
                z.Pipeline.warnIfFunctionNotRegistered(e), this._queue.push(e);
              }, this);
            }),
            (z.Pipeline.prototype.after = function(e, t) {
              z.Pipeline.warnIfFunctionNotRegistered(t);
              var n = this._queue.indexOf(e);
              if (-1 === n) throw new Error("Cannot find existingFn");
              this._queue.splice(n + 1, 0, t);
            }),
            (z.Pipeline.prototype.before = function(e, t) {
              z.Pipeline.warnIfFunctionNotRegistered(t);
              var n = this._queue.indexOf(e);
              if (-1 === n) throw new Error("Cannot find existingFn");
              this._queue.splice(n, 0, t);
            }),
            (z.Pipeline.prototype.remove = function(e) {
              var t = this._queue.indexOf(e);
              -1 !== t && this._queue.splice(t, 1);
            }),
            (z.Pipeline.prototype.run = function(e) {
              for (
                var t = [], n = e.length, i = this._queue.length, o = 0;
                o < n;
                o++
              ) {
                for (
                  var r = e[o], s = 0;
                  s < i && null != (r = this._queue[s](r, o, e));
                  s++
                );
                null != r && t.push(r);
              }
              return t;
            }),
            (z.Pipeline.prototype.reset = function() {
              this._queue = [];
            }),
            (z.Pipeline.prototype.get = function() {
              return this._queue;
            }),
            (z.Pipeline.prototype.toJSON = function() {
              return this._queue.map(function(e) {
                return z.Pipeline.warnIfFunctionNotRegistered(e), e.label;
              });
            }),
            ((z.Index = function() {
              (this._fields = []),
                (this._ref = "id"),
                (this.pipeline = new z.Pipeline()),
                (this.documentStore = new z.DocumentStore()),
                (this.index = {}),
                (this.eventEmitter = new z.EventEmitter()),
                (this._idfCache = {}),
                this.on(
                  "add",
                  "remove",
                  "update",
                  function() {
                    this._idfCache = {};
                  }.bind(this)
                );
            }).prototype.on = function() {
              var e = Array.prototype.slice.call(arguments);
              return this.eventEmitter.addListener.apply(this.eventEmitter, e);
            }),
            (z.Index.prototype.off = function(e, t) {
              return this.eventEmitter.removeListener(e, t);
            }),
            (z.Index.load = function(e) {
              e.version !== z.version &&
                z.utils.warn(
                  "version mismatch: current " +
                    z.version +
                    " importing " +
                    e.version
                );
              var t = new this();
              for (var n in ((t._fields = e.fields),
              (t._ref = e.ref),
              (t.documentStore = z.DocumentStore.load(e.documentStore)),
              (t.pipeline = z.Pipeline.load(e.pipeline)),
              (t.index = {}),
              e.index))
                t.index[n] = z.InvertedIndex.load(e.index[n]);
              return t;
            }),
            (z.Index.prototype.addField = function(e) {
              return (
                this._fields.push(e),
                (this.index[e] = new z.InvertedIndex()),
                this
              );
            }),
            (z.Index.prototype.setRef = function(e) {
              return (this._ref = e), this;
            }),
            (z.Index.prototype.saveDocument = function(e) {
              return (this.documentStore = new z.DocumentStore(e)), this;
            }),
            (z.Index.prototype.addDoc = function(e, t) {
              if (e) {
                t = void 0 === t || t;
                var n = e[this._ref];
                this.documentStore.addDoc(n, e),
                  this._fields.forEach(function(t) {
                    var i = this.pipeline.run(z.tokenizer(e[t]));
                    this.documentStore.addFieldLength(n, t, i.length);
                    var o = {};
                    for (var r in (i.forEach(function(e) {
                      e in o ? (o[e] += 1) : (o[e] = 1);
                    }, this),
                    o)) {
                      var s = o[r];
                      (s = Math.sqrt(s)),
                        this.index[t].addToken(r, { ref: n, tf: s });
                    }
                  }, this),
                  t && this.eventEmitter.emit("add", e, this);
              }
            }),
            (z.Index.prototype.removeDocByRef = function(e, t) {
              if (
                e &&
                !1 !== this.documentStore.isDocStored() &&
                this.documentStore.hasDoc(e)
              ) {
                var n = this.documentStore.getDoc(e);
                this.removeDoc(n, !1);
              }
            }),
            (z.Index.prototype.removeDoc = function(e, t) {
              if (e) {
                t = void 0 === t || t;
                var n = e[this._ref];
                this.documentStore.hasDoc(n) &&
                  (this.documentStore.removeDoc(n),
                  this._fields.forEach(function(t) {
                    this.pipeline.run(z.tokenizer(e[t])).forEach(function(e) {
                      this.index[t].removeToken(e, n);
                    }, this);
                  }, this),
                  t && this.eventEmitter.emit("remove", e, this));
              }
            }),
            (z.Index.prototype.updateDoc = function(e, t) {
              t = void 0 === t || t;
              this.removeDocByRef(e[this._ref], !1),
                this.addDoc(e, !1),
                t && this.eventEmitter.emit("update", e, this);
            }),
            (z.Index.prototype.idf = function(e, t) {
              var n = "@" + t + "/" + e;
              if (Object.prototype.hasOwnProperty.call(this._idfCache, n))
                return this._idfCache[n];
              var i = this.index[t].getDocFreq(e),
                o = 1 + Math.log(this.documentStore.length / (i + 1));
              return (this._idfCache[n] = o), o;
            }),
            (z.Index.prototype.getFields = function() {
              return this._fields.slice();
            }),
            (z.Index.prototype.search = function(e, t) {
              if (!e) return [];
              var n = null;
              null != t && (n = JSON.stringify(t));
              var i = new z.Configuration(n, this.getFields()).get(),
                o = this.pipeline.run(z.tokenizer(e)),
                r = {};
              for (var s in i) {
                var a = this.fieldSearch(o, s, i),
                  u = i[s].boost;
                for (var l in a) a[l] = a[l] * u;
                for (var l in a) l in r ? (r[l] += a[l]) : (r[l] = a[l]);
              }
              var c = [];
              for (var l in r) c.push({ ref: l, score: r[l] });
              return (
                c.sort(function(e, t) {
                  return t.score - e.score;
                }),
                c
              );
            }),
            (z.Index.prototype.fieldSearch = function(e, t, n) {
              var i = n[t].bool,
                o = n[t].expand,
                r = n[t].boost,
                s = null,
                a = {};
              if (0 !== r)
                return (
                  e.forEach(function(e) {
                    var n = [e];
                    1 == o && (n = this.index[t].expandToken(e));
                    var r = {};
                    n.forEach(function(n) {
                      var o = this.index[t].getDocs(n),
                        u = this.idf(n, t);
                      if (s && "AND" == i) {
                        var l = {};
                        for (var c in s) c in o && (l[c] = o[c]);
                        o = l;
                      }
                      for (var c in (n == e && this.fieldSearchStats(a, n, o),
                      o)) {
                        var d = this.index[t].getTermFrequency(n, c),
                          h = this.documentStore.getFieldLength(c, t),
                          f = 1;
                        0 != h && (f = 1 / Math.sqrt(h));
                        var p = 1;
                        n != e &&
                          (p = 0.15 * (1 - (n.length - e.length) / n.length));
                        var m = d * u * f * p;
                        c in r ? (r[c] += m) : (r[c] = m);
                      }
                    }, this),
                      (s = this.mergeScores(s, r, i));
                  }, this),
                  (s = this.coordNorm(s, a, e.length))
                );
            }),
            (z.Index.prototype.mergeScores = function(e, t, n) {
              if (!e) return t;
              if ("AND" == n) {
                var i = {};
                for (var o in t) o in e && (i[o] = e[o] + t[o]);
                return i;
              }
              for (var o in t) o in e ? (e[o] += t[o]) : (e[o] = t[o]);
              return e;
            }),
            (z.Index.prototype.fieldSearchStats = function(e, t, n) {
              for (var i in n) i in e ? e[i].push(t) : (e[i] = [t]);
            }),
            (z.Index.prototype.coordNorm = function(e, t, n) {
              for (var i in e)
                if (i in t) {
                  var o = t[i].length;
                  e[i] = (e[i] * o) / n;
                }
              return e;
            }),
            (z.Index.prototype.toJSON = function() {
              var e = {};
              return (
                this._fields.forEach(function(t) {
                  e[t] = this.index[t].toJSON();
                }, this),
                {
                  version: z.version,
                  fields: this._fields,
                  ref: this._ref,
                  documentStore: this.documentStore.toJSON(),
                  index: e,
                  pipeline: this.pipeline.toJSON()
                }
              );
            }),
            (z.Index.prototype.use = function(e) {
              var t = Array.prototype.slice.call(arguments, 1);
              t.unshift(this), e.apply(this, t);
            }),
            ((z.DocumentStore = function(e) {
              (this._save = null == e || e),
                (this.docs = {}),
                (this.docInfo = {}),
                (this.length = 0);
            }).load = function(e) {
              var t = new this();
              return (
                (t.length = e.length),
                (t.docs = e.docs),
                (t.docInfo = e.docInfo),
                (t._save = e.save),
                t
              );
            }),
            (z.DocumentStore.prototype.isDocStored = function() {
              return this._save;
            }),
            (z.DocumentStore.prototype.addDoc = function(e, t) {
              this.hasDoc(e) || this.length++,
                !0 === this._save
                  ? (this.docs[e] = (function(e) {
                      if (null === e || "object" != typeof e) return e;
                      var t = e.constructor();
                      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      return t;
                    })(t))
                  : (this.docs[e] = null);
            }),
            (z.DocumentStore.prototype.getDoc = function(e) {
              return !1 === this.hasDoc(e) ? null : this.docs[e];
            }),
            (z.DocumentStore.prototype.hasDoc = function(e) {
              return e in this.docs;
            }),
            (z.DocumentStore.prototype.removeDoc = function(e) {
              this.hasDoc(e) &&
                (delete this.docs[e], delete this.docInfo[e], this.length--);
            }),
            (z.DocumentStore.prototype.addFieldLength = function(e, t, n) {
              null != e &&
                0 != this.hasDoc(e) &&
                (this.docInfo[e] || (this.docInfo[e] = {}),
                (this.docInfo[e][t] = n));
            }),
            (z.DocumentStore.prototype.updateFieldLength = function(e, t, n) {
              null != e && 0 != this.hasDoc(e) && this.addFieldLength(e, t, n);
            }),
            (z.DocumentStore.prototype.getFieldLength = function(e, t) {
              return null == e
                ? 0
                : e in this.docs && t in this.docInfo[e]
                ? this.docInfo[e][t]
                : 0;
            }),
            (z.DocumentStore.prototype.toJSON = function() {
              return {
                docs: this.docs,
                docInfo: this.docInfo,
                length: this.length,
                save: this._save
              };
            }),
            (z.stemmer =
              ((s = {
                ational: "ate",
                tional: "tion",
                enci: "ence",
                anci: "ance",
                izer: "ize",
                bli: "ble",
                alli: "al",
                entli: "ent",
                eli: "e",
                ousli: "ous",
                ization: "ize",
                ation: "ate",
                ator: "ate",
                alism: "al",
                iveness: "ive",
                fulness: "ful",
                ousness: "ous",
                aliti: "al",
                iviti: "ive",
                biliti: "ble",
                logi: "log"
              }),
              (a = {
                icate: "ic",
                ative: "",
                alize: "al",
                iciti: "ic",
                ical: "ic",
                ful: "",
                ness: ""
              }),
              (u = "[aeiouy]"),
              (l = "[^aeiou][^aeiouy]*"),
              (c = new RegExp(
                "^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"
              )),
              (d = new RegExp(
                "^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"
              )),
              (h = new RegExp(
                "^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"
              )),
              (f = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]")),
              (p = /^(.+?)(ss|i)es$/),
              (m = /^(.+?)([^s])s$/),
              (v = /^(.+?)eed$/),
              (g = /^(.+?)(ed|ing)$/),
              (y = /.$/),
              (x = /(at|bl|iz)$/),
              (w = new RegExp("([^aeiouylsz])\\1$")),
              (S = new RegExp("^" + l + u + "[^aeiouwxy]$")),
              (b = /^(.+?[^aeiou])y$/),
              (I = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/),
              (E = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/),
              (D = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/),
              (F = /^(.+?)(s|t)(ion)$/),
              (_ = /^(.+?)e$/),
              (k = /ll$/),
              (C = new RegExp("^" + l + u + "[^aeiouwxy]$")),
              function(e) {
                var t, n, i, o, r, u, l;
                if (e.length < 3) return e;
                if (
                  ("y" == (i = e.substr(0, 1)) &&
                    (e = i.toUpperCase() + e.substr(1)),
                  (r = m),
                  (o = p).test(e)
                    ? (e = e.replace(o, "$1$2"))
                    : r.test(e) && (e = e.replace(r, "$1$2")),
                  (r = g),
                  (o = v).test(e))
                ) {
                  var z = o.exec(e);
                  (o = c).test(z[1]) && ((o = y), (e = e.replace(o, "")));
                } else
                  r.test(e) &&
                    ((t = (z = r.exec(e))[1]),
                    (r = f).test(t) &&
                      ((u = w),
                      (l = S),
                      (r = x).test((e = t))
                        ? (e += "e")
                        : u.test(e)
                        ? ((o = y), (e = e.replace(o, "")))
                        : l.test(e) && (e += "e")));
                return (
                  (o = b).test(e) && (e = (t = (z = o.exec(e))[1]) + "i"),
                  (o = I).test(e) &&
                    ((t = (z = o.exec(e))[1]),
                    (n = z[2]),
                    (o = c).test(t) && (e = t + s[n])),
                  (o = E).test(e) &&
                    ((t = (z = o.exec(e))[1]),
                    (n = z[2]),
                    (o = c).test(t) && (e = t + a[n])),
                  (r = F),
                  (o = D).test(e)
                    ? ((t = (z = o.exec(e))[1]), (o = d).test(t) && (e = t))
                    : r.test(e) &&
                      ((t = (z = r.exec(e))[1] + z[2]),
                      (r = d).test(t) && (e = t)),
                  (o = _).test(e) &&
                    ((t = (z = o.exec(e))[1]),
                    (r = h),
                    (u = C),
                    ((o = d).test(t) || (r.test(t) && !u.test(t))) && (e = t)),
                  (r = d),
                  (o = k).test(e) &&
                    r.test(e) &&
                    ((o = y), (e = e.replace(o, ""))),
                  "y" == i && (e = i.toLowerCase() + e.substr(1)),
                  e
                );
              })),
            z.Pipeline.registerFunction(z.stemmer, "stemmer"),
            (z.stopWordFilter = function(e) {
              if (e && !0 !== z.stopWordFilter.stopWords[e]) return e;
            }),
            (z.clearStopWords = function() {
              z.stopWordFilter.stopWords = {};
            }),
            (z.addStopWords = function(e) {
              null != e &&
                !1 !== Array.isArray(e) &&
                e.forEach(function(e) {
                  z.stopWordFilter.stopWords[e] = !0;
                }, this);
            }),
            (z.resetStopWords = function() {
              z.stopWordFilter.stopWords = z.defaultStopWords;
            }),
            (z.defaultStopWords = {
              "": !0,
              a: !0,
              able: !0,
              about: !0,
              across: !0,
              after: !0,
              all: !0,
              almost: !0,
              also: !0,
              am: !0,
              among: !0,
              an: !0,
              and: !0,
              any: !0,
              are: !0,
              as: !0,
              at: !0,
              be: !0,
              because: !0,
              been: !0,
              but: !0,
              by: !0,
              can: !0,
              cannot: !0,
              could: !0,
              dear: !0,
              did: !0,
              do: !0,
              does: !0,
              either: !0,
              else: !0,
              ever: !0,
              every: !0,
              for: !0,
              from: !0,
              get: !0,
              got: !0,
              had: !0,
              has: !0,
              have: !0,
              he: !0,
              her: !0,
              hers: !0,
              him: !0,
              his: !0,
              how: !0,
              however: !0,
              i: !0,
              if: !0,
              in: !0,
              into: !0,
              is: !0,
              it: !0,
              its: !0,
              just: !0,
              least: !0,
              let: !0,
              like: !0,
              likely: !0,
              may: !0,
              me: !0,
              might: !0,
              most: !0,
              must: !0,
              my: !0,
              neither: !0,
              no: !0,
              nor: !0,
              not: !0,
              of: !0,
              off: !0,
              often: !0,
              on: !0,
              only: !0,
              or: !0,
              other: !0,
              our: !0,
              own: !0,
              rather: !0,
              said: !0,
              say: !0,
              says: !0,
              she: !0,
              should: !0,
              since: !0,
              so: !0,
              some: !0,
              than: !0,
              that: !0,
              the: !0,
              their: !0,
              them: !0,
              then: !0,
              there: !0,
              these: !0,
              they: !0,
              this: !0,
              tis: !0,
              to: !0,
              too: !0,
              twas: !0,
              us: !0,
              wants: !0,
              was: !0,
              we: !0,
              were: !0,
              what: !0,
              when: !0,
              where: !0,
              which: !0,
              while: !0,
              who: !0,
              whom: !0,
              why: !0,
              will: !0,
              with: !0,
              would: !0,
              yet: !0,
              you: !0,
              your: !0
            }),
            (z.stopWordFilter.stopWords = z.defaultStopWords),
            z.Pipeline.registerFunction(z.stopWordFilter, "stopWordFilter"),
            (z.trimmer = function(e) {
              if (null == e) throw new Error("token should not be undefined");
              return e.replace(/^\W+/, "").replace(/\W+$/, "");
            }),
            z.Pipeline.registerFunction(z.trimmer, "trimmer"),
            ((z.InvertedIndex = function() {
              this.root = { docs: {}, df: 0 };
            }).load = function(e) {
              var t = new this();
              return (t.root = e.root), t;
            }),
            (z.InvertedIndex.prototype.addToken = function(e, t, n) {
              n = n || this.root;
              for (var i = 0; i <= e.length - 1; ) {
                var o = e[i];
                o in n || (n[o] = { docs: {}, df: 0 }), (i += 1), (n = n[o]);
              }
              var r = t.ref;
              n.docs[r]
                ? (n.docs[r] = { tf: t.tf })
                : ((n.docs[r] = { tf: t.tf }), (n.df += 1));
            }),
            (z.InvertedIndex.prototype.hasToken = function(e) {
              if (!e) return !1;
              for (var t = this.root, n = 0; n < e.length; n++) {
                if (!t[e[n]]) return !1;
                t = t[e[n]];
              }
              return !0;
            }),
            (z.InvertedIndex.prototype.getNode = function(e) {
              if (!e) return null;
              for (var t = this.root, n = 0; n < e.length; n++) {
                if (!t[e[n]]) return null;
                t = t[e[n]];
              }
              return t;
            }),
            (z.InvertedIndex.prototype.getDocs = function(e) {
              var t = this.getNode(e);
              return null == t ? {} : t.docs;
            }),
            (z.InvertedIndex.prototype.getTermFrequency = function(e, t) {
              var n = this.getNode(e);
              return null == n ? 0 : t in n.docs ? n.docs[t].tf : 0;
            }),
            (z.InvertedIndex.prototype.getDocFreq = function(e) {
              var t = this.getNode(e);
              return null == t ? 0 : t.df;
            }),
            (z.InvertedIndex.prototype.removeToken = function(e, t) {
              if (e) {
                var n = this.getNode(e);
                null != n && t in n.docs && (delete n.docs[t], (n.df -= 1));
              }
            }),
            (z.InvertedIndex.prototype.expandToken = function(e, t, n) {
              if (null == e || "" == e) return [];
              t = t || [];
              if (null == n && null == (n = this.getNode(e))) return t;
              for (var i in (n.df > 0 && t.push(e), n))
                "docs" !== i && "df" !== i && this.expandToken(e + i, t, n[i]);
              return t;
            }),
            (z.InvertedIndex.prototype.toJSON = function() {
              return { root: this.root };
            }),
            ((z.Configuration = function(e, t) {
              var n;
              e = e || "";
              if (null == t || null == t)
                throw new Error("fields should not be null");
              this.config = {};
              try {
                (n = JSON.parse(e)), this.buildUserConfig(n, t);
              } catch (i) {
                z.utils.warn(
                  "user configuration parse failed, will use default configuration"
                ),
                  this.buildDefaultConfig(t);
              }
            }).prototype.buildDefaultConfig = function(e) {
              this.reset(),
                e.forEach(function(e) {
                  this.config[e] = { boost: 1, bool: "OR", expand: !1 };
                }, this);
            }),
            (z.Configuration.prototype.buildUserConfig = function(e, t) {
              var n = "OR",
                i = !1;
              if (
                (this.reset(),
                "bool" in e && (n = e.bool || n),
                "expand" in e && (i = e.expand || i),
                "fields" in e)
              )
                for (var o in e.fields)
                  if (t.indexOf(o) > -1) {
                    var r = e.fields[o],
                      s = i;
                    null != r.expand && (s = r.expand),
                      (this.config[o] = {
                        boost: r.boost || 0 === r.boost ? r.boost : 1,
                        bool: r.bool || n,
                        expand: s
                      });
                  } else
                    z.utils.warn(
                      "field name in user configuration not found in index instance fields"
                    );
              else this.addAllFields2UserConfig(n, i, t);
            }),
            (z.Configuration.prototype.addAllFields2UserConfig = function(
              e,
              t,
              n
            ) {
              n.forEach(function(n) {
                this.config[n] = { boost: 1, bool: e, expand: t };
              }, this);
            }),
            (z.Configuration.prototype.get = function() {
              return this.config;
            }),
            (z.Configuration.prototype.reset = function() {
              this.config = {};
            }),
            (lunr.SortedSet = function() {
              (this.length = 0), (this.elements = []);
            }),
            (lunr.SortedSet.load = function(e) {
              var t = new this();
              return (t.elements = e), (t.length = e.length), t;
            }),
            (lunr.SortedSet.prototype.add = function() {
              var e, t;
              for (e = 0; e < arguments.length; e++)
                (t = arguments[e]),
                  ~this.indexOf(t) ||
                    this.elements.splice(this.locationFor(t), 0, t);
              this.length = this.elements.length;
            }),
            (lunr.SortedSet.prototype.toArray = function() {
              return this.elements.slice();
            }),
            (lunr.SortedSet.prototype.map = function(e, t) {
              return this.elements.map(e, t);
            }),
            (lunr.SortedSet.prototype.forEach = function(e, t) {
              return this.elements.forEach(e, t);
            }),
            (lunr.SortedSet.prototype.indexOf = function(e) {
              for (
                var t = 0,
                  n = this.elements.length,
                  i = n - t,
                  o = t + Math.floor(i / 2),
                  r = this.elements[o];
                i > 1;

              ) {
                if (r === e) return o;
                r < e && (t = o),
                  r > e && (n = o),
                  (i = n - t),
                  (o = t + Math.floor(i / 2)),
                  (r = this.elements[o]);
              }
              return r === e ? o : -1;
            }),
            (lunr.SortedSet.prototype.locationFor = function(e) {
              for (
                var t = 0,
                  n = this.elements.length,
                  i = n - t,
                  o = t + Math.floor(i / 2),
                  r = this.elements[o];
                i > 1;

              )
                r < e && (t = o),
                  r > e && (n = o),
                  (i = n - t),
                  (o = t + Math.floor(i / 2)),
                  (r = this.elements[o]);
              return r > e ? o : r < e ? o + 1 : void 0;
            }),
            (lunr.SortedSet.prototype.intersect = function(e) {
              for (
                var t = new lunr.SortedSet(),
                  n = 0,
                  i = 0,
                  o = this.length,
                  r = e.length,
                  s = this.elements,
                  a = e.elements;
                !(n > o - 1 || i > r - 1);

              )
                s[n] !== a[i]
                  ? s[n] < a[i]
                    ? n++
                    : s[n] > a[i] && i++
                  : (t.add(s[n]), n++, i++);
              return t;
            }),
            (lunr.SortedSet.prototype.clone = function() {
              var e = new lunr.SortedSet();
              return (
                (e.elements = this.toArray()), (e.length = e.elements.length), e
              );
            }),
            (lunr.SortedSet.prototype.union = function(e) {
              var t, n, i;
              this.length >= e.length
                ? ((t = this), (n = e))
                : ((t = e), (n = this)),
                (i = t.clone());
              for (var o = 0, r = n.toArray(); o < r.length; o++) i.add(r[o]);
              return i;
            }),
            (lunr.SortedSet.prototype.toJSON = function() {
              return this.toArray();
            }),
            void 0 ===
              (o =
                "function" ==
                typeof (i = function() {
                  return z;
                })
                  ? i.call(t, n, t, e)
                  : i) || (e.exports = o);
        })();
    }
  }
]);
//# sourceMappingURL=component---node-modules-gatsby-tech-blog-theme-src-components-search-js-208ebe4696c233c2fc94.js.map
