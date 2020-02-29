// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/index.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "jtqQ": [function (require, module, exports) {
    var t,
        e,
        n = module.exports = {};

    function r() {
      throw new Error("setTimeout has not been defined");
    }

    function o() {
      throw new Error("clearTimeout has not been defined");
    }

    function i(e) {
      if (t === setTimeout) return setTimeout(e, 0);
      if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);

      try {
        return t(e, 0);
      } catch (n) {
        try {
          return t.call(null, e, 0);
        } catch (n) {
          return t.call(this, e, 0);
        }
      }
    }

    function u(t) {
      if (e === clearTimeout) return clearTimeout(t);
      if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);

      try {
        return e(t);
      } catch (n) {
        try {
          return e.call(null, t);
        } catch (n) {
          return e.call(this, t);
        }
      }
    }

    !function () {
      try {
        t = "function" == typeof setTimeout ? setTimeout : r;
      } catch (n) {
        t = r;
      }

      try {
        e = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (n) {
        e = o;
      }
    }();
    var c,
        s = [],
        l = !1,
        a = -1;

    function f() {
      l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h());
    }

    function h() {
      if (!l) {
        var t = i(f);
        l = !0;

        for (var e = s.length; e;) {
          for (c = s, s = []; ++a < e;) {
            c && c[a].run();
          }

          a = -1, e = s.length;
        }

        c = null, l = !1, u(t);
      }
    }

    function m(t, e) {
      this.fun = t, this.array = e;
    }

    function p() {}

    n.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
      s.push(new m(t, e)), 1 !== s.length || l || i(h);
    }, m.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function (t) {
      return [];
    }, n.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, n.cwd = function () {
      return "/";
    }, n.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, n.umask = function () {
      return 0;
    };
  }, {}],
  "juYr": [function (require, module, exports) {
    var global = arguments[3];

    var process = require("process");

    var define;

    var e,
        t = arguments[3],
        n = require("process");

    !function (e, t) {
      "use strict";

      "object" == _typeof(module) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
      } : t(e);
    }("undefined" != typeof window ? window : this, function (t, n) {
      "use strict";

      var r = [],
          i = t.document,
          o = Object.getPrototypeOf,
          a = r.slice,
          s = r.concat,
          u = r.push,
          l = r.indexOf,
          c = {},
          f = c.toString,
          p = c.hasOwnProperty,
          d = p.toString,
          h = d.call(Object),
          g = {},
          v = function v(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
          y = function y(e) {
        return null != e && e === e.window;
      },
          m = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };

      function x(e, t, n) {
        var r,
            o,
            a = (n = n || i).createElement("script");
        if (a.text = e, t) for (r in m) {
          (o = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, o);
        }
        n.head.appendChild(a).parentNode.removeChild(a);
      }

      function b(e) {
        return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? c[f.call(e)] || "object" : _typeof(e);
      }

      var w = function w(e, t) {
        return new w.fn.init(e, t);
      },
          T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

      function C(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
      }

      w.fn = w.prototype = {
        jquery: "3.4.1",
        constructor: w,
        length: 0,
        toArray: function toArray() {
          return a.call(this);
        },
        get: function get(e) {
          return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function pushStack(e) {
          var t = w.merge(this.constructor(), e);
          return t.prevObject = this, t;
        },
        each: function each(e) {
          return w.each(this, e);
        },
        map: function map(e) {
          return this.pushStack(w.map(this, function (t, n) {
            return e.call(t, n, t);
          }));
        },
        slice: function slice() {
          return this.pushStack(a.apply(this, arguments));
        },
        first: function first() {
          return this.eq(0);
        },
        last: function last() {
          return this.eq(-1);
        },
        eq: function eq(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function end() {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: r.sort,
        splice: r.splice
      }, w.extend = w.fn.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;

        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
          if (null != (e = arguments[s])) for (t in e) {
            r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
          }
        }

        return a;
      }, w.extend({
        expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function error(e) {
          throw new Error(e);
        },
        noop: function noop() {},
        isPlainObject: function isPlainObject(e) {
          var t, n;
          return !(!e || "[object Object]" !== f.call(e)) && (!(t = o(e)) || "function" == typeof (n = p.call(t, "constructor") && t.constructor) && d.call(n) === h);
        },
        isEmptyObject: function isEmptyObject(e) {
          var t;

          for (t in e) {
            return !1;
          }

          return !0;
        },
        globalEval: function globalEval(e, t) {
          x(e, {
            nonce: t && t.nonce
          });
        },
        each: function each(e, t) {
          var n,
              r = 0;
          if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {
            ;
          } else for (r in e) {
            if (!1 === t.call(e[r], r, e[r])) break;
          }
          return e;
        },
        trim: function trim(e) {
          return null == e ? "" : (e + "").replace(T, "");
        },
        makeArray: function makeArray(e, t) {
          var n = t || [];
          return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
        },
        inArray: function inArray(e, t, n) {
          return null == t ? -1 : l.call(t, e, n);
        },
        merge: function merge(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
            e[i++] = t[r];
          }

          return e.length = i, e;
        },
        grep: function grep(e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
            !t(e[i], i) !== a && r.push(e[i]);
          }

          return r;
        },
        map: function map(e, t, n) {
          var r,
              i,
              o = 0,
              a = [];
          if (C(e)) for (r = e.length; o < r; o++) {
            null != (i = t(e[o], o, n)) && a.push(i);
          } else for (o in e) {
            null != (i = t(e[o], o, n)) && a.push(i);
          }
          return s.apply([], a);
        },
        guid: 1,
        support: g
      }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = r[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase();
      });

      var E = function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            y,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ue(),
            k = ue(),
            S = ue(),
            N = ue(),
            A = function A(e, t) {
          return e === t && (f = !0), 0;
        },
            D = {}.hasOwnProperty,
            j = [],
            q = j.pop,
            L = j.push,
            H = j.push,
            O = j.slice,
            P = function P(e, t) {
          for (var n = 0, r = e.length; n < r; n++) {
            if (e[n] === t) return n;
          }

          return -1;
        },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = {
          ID: new RegExp("^#(" + I + ")"),
          CLASS: new RegExp("^\\.(" + I + ")"),
          TAG: new RegExp("^(" + I + "|[*])"),
          ATTR: new RegExp("^" + W),
          PSEUDO: new RegExp("^" + $),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + R + ")$", "i"),
          needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function ne(e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function ie(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            oe = function oe() {
          p();
        },
            ae = be(function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
          dir: "parentNode",
          next: "legend"
        });

        try {
          H.apply(j = O.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType;
        } catch (ke) {
          H = {
            apply: j.length ? function (e, t) {
              L.apply(e, O.call(t));
            } : function (e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];) {
                ;
              }

              e.length = n - 1;
            }
          };
        }

        function se(e, t, r, i) {
          var o,
              s,
              l,
              c,
              f,
              h,
              y,
              m = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
          if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

          if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
            if (11 !== T && (f = Z.exec(e))) if (o = f[1]) {
              if (9 === T) {
                if (!(l = t.getElementById(o))) return r;
                if (l.id === o) return r.push(l), r;
              } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
            } else {
              if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
              if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r;
            }

            if (n.qsa && !N[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
              if (y = e, m = t, 1 === T && U.test(e)) {
                for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) {
                  h[s] = "#" + c + " " + xe(h[s]);
                }

                y = h.join(","), m = ee.test(e) && ye(t.parentNode) || t;
              }

              try {
                return H.apply(r, m.querySelectorAll(y)), r;
              } catch (C) {
                N(e, !0);
              } finally {
                c === b && t.removeAttribute("id");
              }
            }
          }

          return u(e.replace(B, "$1"), t, r, i);
        }

        function ue() {
          var e = [];
          return function t(n, i) {
            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
          };
        }

        function le(e) {
          return e[b] = !0, e;
        }

        function ce(e) {
          var t = d.createElement("fieldset");

          try {
            return !!e(t);
          } catch (ke) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null;
          }
        }

        function fe(e, t) {
          for (var n = e.split("|"), i = n.length; i--;) {
            r.attrHandle[n[i]] = t;
          }
        }

        function pe(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; n = n.nextSibling;) {
            if (n === t) return -1;
          }
          return e ? 1 : -1;
        }

        function de(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }

        function he(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }

        function ge(e) {
          return function (t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
          };
        }

        function ve(e) {
          return le(function (t) {
            return t = +t, le(function (n, r) {
              for (var i, o = e([], n.length, t), a = o.length; a--;) {
                n[i = o[a]] && (n[i] = !(r[i] = n[i]));
              }
            });
          });
        }

        function ye(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }

        for (t in n = se.support = {}, o = se.isXML = function (e) {
          var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
          return !Y.test(t || n && n.nodeName || "HTML");
        }, p = se.setDocument = function (e) {
          var t,
              i,
              a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = ce(function (e) {
            return e.className = "i", !e.getAttribute("className");
          }), n.getElementsByTagName = ce(function (e) {
            return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
          }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function (e) {
            return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
          }), n.getById ? (r.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          }, r.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n = t.getElementById(e);
              return n ? [n] : [];
            }
          }) : (r.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t;
            };
          }, r.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n,
                  r,
                  i,
                  o = t.getElementById(e);

              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

                for (i = t.getElementsByName(e), r = 0; o = i[r++];) {
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                }
              }

              return [];
            }
          }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
          } : function (e, t) {
            var n,
                r = [],
                i = 0,
                o = t.getElementsByTagName(e);

            if ("*" === e) {
              for (; n = o[i++];) {
                1 === n.nodeType && r.push(n);
              }

              return r;
            }

            return o;
          }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
          }, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function (e) {
            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
          }), ce(function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = d.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
          })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
            n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", $);
          }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) {
              if (t === e) return !0;
            }
            return !1;
          }, A = t ? function (e, t) {
            if (e === t) return f = !0, 0;
            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1);
          } : function (e, t) {
            if (e === t) return f = !0, 0;
            var n,
                r = 0,
                i = e.parentNode,
                o = t.parentNode,
                a = [e],
                s = [t];
            if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
            if (i === o) return pe(e, t);

            for (n = e; n = n.parentNode;) {
              a.unshift(n);
            }

            for (n = t; n = n.parentNode;) {
              s.unshift(n);
            }

            for (; a[r] === s[r];) {
              r++;
            }

            return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
          }, d) : d;
        }, se.matches = function (e, t) {
          return se(e, null, null, t);
        }, se.matchesSelector = function (e, t) {
          if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !N[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
            var r = m.call(e, t);
            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
          } catch (ke) {
            N(t, !0);
          }
          return se(t, d, null, [e]).length > 0;
        }, se.contains = function (e, t) {
          return (e.ownerDocument || e) !== d && p(e), x(e, t);
        }, se.attr = function (e, t) {
          (e.ownerDocument || e) !== d && p(e);
          var i = r.attrHandle[t.toLowerCase()],
              o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, se.escape = function (e) {
          return (e + "").replace(re, ie);
        }, se.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }, se.uniqueSort = function (e) {
          var t,
              r = [],
              i = 0,
              o = 0;

          if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
            for (; t = e[o++];) {
              t === e[o] && (i = r.push(o));
            }

            for (; i--;) {
              e.splice(r[i], 1);
            }
          }

          return c = null, e;
        }, i = se.getText = function (e) {
          var t,
              n = "",
              r = 0,
              o = e.nodeType;

          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;

              for (e = e.firstChild; e; e = e.nextSibling) {
                n += i(e);
              }
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; t = e[r++];) {
            n += i(t);
          }

          return n;
        }, (r = se.selectors = {
          cacheLength: 50,
          createPseudo: le,
          match: G,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function ATTR(e) {
              return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
            },
            CHILD: function CHILD(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
            },
            PSEUDO: function PSEUDO(e) {
              var t,
                  n = !e[6] && e[2];
              return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
            }
          },
          filter: {
            TAG: function TAG(e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e ? function () {
                return !0;
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
            },
            CLASS: function CLASS(e) {
              var t = E[e + " "];
              return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
              });
            },
            ATTR: function ATTR(e, t, n) {
              return function (r) {
                var i = se.attr(r, e);
                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function CHILD(e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
              return 1 === r && 0 === i ? function (e) {
                return !!e.parentNode;
              } : function (t, n, u) {
                var l,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g = o !== a ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    y = s && t.nodeName.toLowerCase(),
                    m = !u && !s,
                    x = !1;

                if (v) {
                  if (o) {
                    for (; g;) {
                      for (p = t; p = p[g];) {
                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                      }

                      h = g = "only" === e && !h && "nextSibling";
                    }

                    return !0;
                  }

                  if (h = [a ? v.firstChild : v.lastChild], a && m) {
                    for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) {
                      if (1 === p.nodeType && ++x && p === t) {
                        c[e] = [T, d, x];
                        break;
                      }
                    }
                  } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));) {
                    ;
                  }

                  return (x -= i) === r || x % r == 0 && x / r >= 0;
                }
              };
            },
            PSEUDO: function PSEUDO(e, t) {
              var n,
                  i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
              return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
                for (var r, o = i(e, t), a = o.length; a--;) {
                  e[r = P(e, o[a])] = !(n[r] = o[a]);
                }
              }) : function (e) {
                return i(e, 0, n);
              }) : i;
            }
          },
          pseudos: {
            not: le(function (e) {
              var t = [],
                  n = [],
                  r = s(e.replace(B, "$1"));
              return r[b] ? le(function (e, t, n, i) {
                for (var o, a = r(e, null, i, []), s = e.length; s--;) {
                  (o = a[s]) && (e[s] = !(t[s] = o));
                }
              }) : function (e, i, o) {
                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
              };
            }),
            has: le(function (e) {
              return function (t) {
                return se(e, t).length > 0;
              };
            }),
            contains: le(function (e) {
              return e = e.replace(te, ne), function (t) {
                return (t.textContent || i(t)).indexOf(e) > -1;
              };
            }),
            lang: le(function (e) {
              return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                var n;

                do {
                  if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);

                return !1;
              };
            }),
            target: function target(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function root(e) {
              return e === h;
            },
            focus: function focus(e) {
              return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            },
            enabled: ge(!1),
            disabled: ge(!0),
            checked: function checked(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected;
            },
            selected: function selected(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            },
            empty: function empty(e) {
              for (e = e.firstChild; e; e = e.nextSibling) {
                if (e.nodeType < 6) return !1;
              }

              return !0;
            },
            parent: function parent(e) {
              return !r.pseudos.empty(e);
            },
            header: function header(e) {
              return J.test(e.nodeName);
            },
            input: function input(e) {
              return Q.test(e.nodeName);
            },
            button: function button(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t;
            },
            text: function text(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
            },
            first: ve(function () {
              return [0];
            }),
            last: ve(function (e, t) {
              return [t - 1];
            }),
            eq: ve(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ve(function (e, t) {
              for (var n = 0; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            odd: ve(function (e, t) {
              for (var n = 1; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            lt: ve(function (e, t, n) {
              for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
                e.push(r);
              }

              return e;
            }),
            gt: ve(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) {
                e.push(r);
              }

              return e;
            })
          }
        }).pseudos.nth = r.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) {
          r.pseudos[t] = de(t);
        }

        for (t in {
          submit: !0,
          reset: !0
        }) {
          r.pseudos[t] = he(t);
        }

        function me() {}

        function xe(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) {
            r += e[t].value;
          }

          return r;
        }

        function be(e, t, n) {
          var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = C++;
          return t.first ? function (t, n, i) {
            for (; t = t[r];) {
              if (1 === t.nodeType || a) return e(t, n, i);
            }

            return !1;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p = [T, s];

            if (u) {
              for (; t = t[r];) {
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
              }
            } else for (; t = t[r];) {
              if (1 === t.nodeType || a) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                if (c[o] = p, p[2] = e(t, n, u)) return !0;
              }
            }

            return !1;
          };
        }

        function we(e) {
          return e.length > 1 ? function (t, n, r) {
            for (var i = e.length; i--;) {
              if (!e[i](t, n, r)) return !1;
            }

            return !0;
          } : e[0];
        }

        function Te(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
            (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
          }

          return a;
        }

        function Ce(e, t, n, r, i, o) {
          return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le(function (o, a, s, u) {
            var l,
                c,
                f,
                p = [],
                d = [],
                h = a.length,
                g = o || function (e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) {
                se(e, t[r], n);
              }

              return n;
            }(t || "*", s.nodeType ? [s] : s, []),
                v = !e || !o && t ? g : Te(g, p, e, s, u),
                y = n ? i || (o ? e : h || r) ? [] : a : v;

            if (n && n(v, y, s, u), r) for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;) {
              (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
            }

            if (o) {
              if (i || e) {
                if (i) {
                  for (l = [], c = y.length; c--;) {
                    (f = y[c]) && l.push(v[c] = f);
                  }

                  i(null, y = [], l, u);
                }

                for (c = y.length; c--;) {
                  (f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                }
              }
            } else y = Te(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y);
          });
        }

        function Ee(e) {
          for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function (e) {
            return e === t;
          }, s, !0), f = be(function (e) {
            return P(t, e) > -1;
          }, s, !0), p = [function (e, n, r) {
            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
            return t = null, i;
          }]; u < o; u++) {
            if (n = r.relative[e[u].type]) p = [be(we(p), n)];else {
              if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                for (i = ++u; i < o && !r.relative[e[i].type]; i++) {
                  ;
                }

                return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                  value: " " === e[u - 2].type ? "*" : ""
                })).replace(B, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e));
              }

              p.push(n);
            }
          }

          return we(p);
        }

        return me.prototype = r.filters = r.pseudos, r.setFilters = new me(), a = se.tokenize = function (e, t) {
          var n,
              i,
              o,
              a,
              s,
              u,
              l,
              c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);

          for (s = e, u = [], l = r.preFilter; s;) {
            for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
              value: n,
              type: i[0].replace(B, " ")
            }), s = s.slice(n.length)), r.filter) {
              !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                value: n,
                type: a,
                matches: i
              }), s = s.slice(n.length));
            }

            if (!n) break;
          }

          return t ? s.length : s ? se.error(e) : k(e, u).slice(0);
        }, s = se.compile = function (e, t) {
          var n,
              i = [],
              o = [],
              s = S[e + " "];

          if (!s) {
            for (t || (t = a(e)), n = t.length; n--;) {
              (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
            }

            (s = S(e, function (e, t) {
              var n = t.length > 0,
                  i = e.length > 0,
                  o = function o(_o, a, s, u, c) {
                var f,
                    h,
                    v,
                    y = 0,
                    m = "0",
                    x = _o && [],
                    b = [],
                    w = l,
                    C = _o || i && r.find.TAG("*", c),
                    E = T += null == w ? 1 : Math.random() || .1,
                    k = C.length;

                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                  if (i && f) {
                    for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];) {
                      if (v(f, a || d, s)) {
                        u.push(f);
                        break;
                      }
                    }

                    c && (T = E);
                  }

                  n && ((f = !v && f) && y--, _o && x.push(f));
                }

                if (y += m, n && m !== y) {
                  for (h = 0; v = t[h++];) {
                    v(x, b, a, s);
                  }

                  if (_o) {
                    if (y > 0) for (; m--;) {
                      x[m] || b[m] || (b[m] = q.call(u));
                    }
                    b = Te(b);
                  }

                  H.apply(u, b), c && !_o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u);
                }

                return c && (T = E, l = w), x;
              };

              return n ? le(o) : o;
            }(o, i))).selector = e;
          }

          return s;
        }, u = se.select = function (e, t, n, i) {
          var o,
              u,
              l,
              c,
              f,
              p = "function" == typeof e && e,
              d = !i && a(e = p.selector || e);

          if (n = n || [], 1 === d.length) {
            if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
              if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
              p && (t = t.parentNode), e = e.slice(u.shift().value.length);
            }

            for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);) {
              if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                if (u.splice(o, 1), !(e = i.length && xe(u))) return H.apply(n, i), n;
                break;
              }
            }
          }

          return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
        }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
        }), ce(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ce(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ce(function (e) {
          return null == e.getAttribute("disabled");
        }) || fe(R, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), se;
      }(t);

      w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;

      var k = function k(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
          if (1 === e.nodeType) {
            if (i && w(e).is(n)) break;
            r.push(e);
          }
        }

        return r;
      },
          S = function S(e, t) {
        for (var n = []; e; e = e.nextSibling) {
          1 === e.nodeType && e !== t && n.push(e);
        }

        return n;
      },
          N = w.expr.match.needsContext;

      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }

      var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function j(e, t, n) {
        return v(t) ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? w.grep(e, function (e) {
          return e === t !== n;
        }) : "string" != typeof t ? w.grep(e, function (e) {
          return l.call(t, e) > -1 !== n;
        }) : w.filter(t, e, n);
      }

      w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
          return 1 === e.nodeType;
        }));
      }, w.fn.extend({
        find: function find(e) {
          var t,
              n,
              r = this.length,
              i = this;
          if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
            for (t = 0; t < r; t++) {
              if (w.contains(i[t], this)) return !0;
            }
          }));

          for (n = this.pushStack([]), t = 0; t < r; t++) {
            w.find(e, i[t], n);
          }

          return r > 1 ? w.uniqueSort(n) : n;
        },
        filter: function filter(e) {
          return this.pushStack(j(this, e || [], !1));
        },
        not: function not(e) {
          return this.pushStack(j(this, e || [], !0));
        },
        is: function is(e) {
          return !!j(this, "string" == typeof e && N.test(e) ? w(e) : e || [], !1).length;
        }
      });
      var q,
          L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (w.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;

        if (n = n || q, "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

          if (r[1]) {
            if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(r[1]) && w.isPlainObject(t)) for (r in t) {
              v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            }
            return this;
          }

          return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
        }

        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
      }).prototype = w.fn, q = w(i);
      var H = /^(?:parents|prev(?:Until|All))/,
          O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

      function P(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) {
          ;
        }

        return e;
      }

      w.fn.extend({
        has: function has(e) {
          var t = w(e, this),
              n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) {
              if (w.contains(this, t[e])) return !0;
            }
          });
        },
        closest: function closest(e, t) {
          var n,
              r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof e && w(e);
          if (!N.test(e)) for (; r < i; r++) {
            for (n = this[r]; n && n !== t; n = n.parentNode) {
              if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                o.push(n);
                break;
              }
            }
          }
          return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function index(e) {
          return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function add(e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function addBack(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
      }), w.each({
        parent: function parent(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function parents(e) {
          return k(e, "parentNode");
        },
        parentsUntil: function parentsUntil(e, t, n) {
          return k(e, "parentNode", n);
        },
        next: function next(e) {
          return P(e, "nextSibling");
        },
        prev: function prev(e) {
          return P(e, "previousSibling");
        },
        nextAll: function nextAll(e) {
          return k(e, "nextSibling");
        },
        prevAll: function prevAll(e) {
          return k(e, "previousSibling");
        },
        nextUntil: function nextUntil(e, t, n) {
          return k(e, "nextSibling", n);
        },
        prevUntil: function prevUntil(e, t, n) {
          return k(e, "previousSibling", n);
        },
        siblings: function siblings(e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function children(e) {
          return S(e.firstChild);
        },
        contents: function contents(e) {
          return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
        }
      }, function (e, t) {
        w.fn[e] = function (n, r) {
          var i = w.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
        };
      });
      var R = /[^\x20\t\r\n\f]+/g;

      function M(e) {
        return e;
      }

      function I(e) {
        throw e;
      }

      function W(e, t, n, r) {
        var i;

        try {
          e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }

      w.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
          var t = {};
          return w.each(e.match(R) || [], function (e, n) {
            t[n] = !0;
          }), t;
        }(e) : w.extend({}, e);

        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function u() {
          for (i = i || e.once, r = t = !0; a.length; s = -1) {
            for (n = a.shift(); ++s < o.length;) {
              !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
            }
          }

          e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        },
            l = {
          add: function add() {
            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
              w.each(n, function (n, r) {
                v(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r);
              });
            }(arguments), n && !t && u()), this;
          },
          remove: function remove() {
            return w.each(arguments, function (e, t) {
              for (var n; (n = w.inArray(t, o, n)) > -1;) {
                o.splice(n, 1), n <= s && s--;
              }
            }), this;
          },
          has: function has(e) {
            return e ? w.inArray(e, o) > -1 : o.length > 0;
          },
          empty: function empty() {
            return o && (o = []), this;
          },
          disable: function disable() {
            return i = a = [], o = n = "", this;
          },
          disabled: function disabled() {
            return !o;
          },
          lock: function lock() {
            return i = a = [], n || t || (o = n = ""), this;
          },
          locked: function locked() {
            return !!i;
          },
          fireWith: function fireWith(e, n) {
            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
          },
          fire: function fire() {
            return l.fireWith(this, arguments), this;
          },
          fired: function fired() {
            return !!r;
          }
        };

        return l;
      }, w.extend({
        Deferred: function Deferred(e) {
          var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
              r = "pending",
              i = {
            state: function state() {
              return r;
            },
            always: function always() {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function _catch(e) {
              return i.then(null, e);
            },
            pipe: function pipe() {
              var e = arguments;
              return w.Deferred(function (t) {
                w.each(n, function (n, r) {
                  var i = v(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && v(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }), e = null;
              }).promise();
            },
            then: function then(e, r, i) {
              var o = 0;

              function a(e, n, r, i) {
                return function () {
                  var s = this,
                      u = arguments,
                      l = function l() {
                    var t, l;

                    if (!(e < o)) {
                      if ((t = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                      l = t && ("object" == _typeof(t) || "function" == typeof t) && t.then, v(l) ? i ? l.call(t, a(o, n, M, i), a(o, n, I, i)) : (o++, l.call(t, a(o, n, M, i), a(o, n, I, i), a(o, n, M, n.notifyWith))) : (r !== M && (s = void 0, u = [t]), (i || n.resolveWith)(s, u));
                    }
                  },
                      c = i ? l : function () {
                    try {
                      l();
                    } catch (t) {
                      w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (r !== I && (s = void 0, u = [t]), n.rejectWith(s, u));
                    }
                  };

                  e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c));
                };
              }

              return w.Deferred(function (t) {
                n[0][3].add(a(0, t, v(i) ? i : M, t.notifyWith)), n[1][3].add(a(0, t, v(e) ? e : M)), n[2][3].add(a(0, t, v(r) ? r : I));
              }).promise();
            },
            promise: function promise(e) {
              return null != e ? w.extend(e, i) : i;
            }
          },
              o = {};
          return w.each(n, function (e, t) {
            var a = t[2],
                s = t[5];
            i[t[1]] = a.add, s && a.add(function () {
              r = s;
            }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
              return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
            }, o[t[0] + "With"] = a.fireWith;
          }), i.promise(o), e && e.call(o, o), o;
        },
        when: function when(e) {
          var t = arguments.length,
              n = t,
              r = Array(n),
              i = a.call(arguments),
              o = w.Deferred(),
              s = function s(e) {
            return function (n) {
              r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(r, i);
            };
          };

          if (t <= 1 && (W(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();

          for (; n--;) {
            W(i[n], s(n), o.reject);
          }

          return o.promise();
        }
      });
      var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      w.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && $.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
      }, w.readyException = function (e) {
        t.setTimeout(function () {
          throw e;
        });
      };
      var F = w.Deferred();

      function B() {
        i.removeEventListener("DOMContentLoaded", B), t.removeEventListener("load", B), w.ready();
      }

      w.fn.ready = function (e) {
        return F.then(e).catch(function (e) {
          w.readyException(e);
        }), this;
      }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function ready(e) {
          (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(i, [w]));
        }
      }), w.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));

      var _ = function _(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;
        if ("object" === b(n)) for (s in i = !0, n) {
          _(e, t, s, n[s], !0, o, a);
        } else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
          return l.call(w(e), n);
        })), t)) for (; s < u; s++) {
          t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        }
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
          z = /^-ms-/,
          U = /-([a-z])/g;

      function X(e, t) {
        return t.toUpperCase();
      }

      function V(e) {
        return e.replace(z, "ms-").replace(U, X);
      }

      var G = function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };

      function Y() {
        this.expando = w.expando + Y.uid++;
      }

      Y.uid = 1, Y.prototype = {
        cache: function cache(e) {
          var t = e[this.expando];
          return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t;
        },
        set: function set(e, t, n) {
          var r,
              i = this.cache(e);
          if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
            i[V(r)] = t[r];
          }
          return i;
        },
        get: function get(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
        },
        access: function access(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function remove(e, t) {
          var n,
              r = e[this.expando];

          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

              for (; n--;) {
                delete r[t[n]];
              }
            }

            (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function hasData(e) {
          var t = e[this.expando];
          return void 0 !== t && !w.isEmptyObject(t);
        }
      };
      var Q = new Y(),
          J = new Y(),
          K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          Z = /[A-Z]/g;

      function ee(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
          try {
            n = function (e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e);
            }(n);
          } catch (i) {}

          J.set(e, t, n);
        } else n = void 0;
        return n;
      }

      w.extend({
        hasData: function hasData(e) {
          return J.hasData(e) || Q.hasData(e);
        },
        data: function data(e, t, n) {
          return J.access(e, t, n);
        },
        removeData: function removeData(e, t) {
          J.remove(e, t);
        },
        _data: function _data(e, t, n) {
          return Q.access(e, t, n);
        },
        _removeData: function _removeData(e, t) {
          Q.remove(e, t);
        }
      }), w.fn.extend({
        data: function data(e, t) {
          var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;

          if (void 0 === e) {
            if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
              for (n = a.length; n--;) {
                a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
              }

              Q.set(o, "hasDataAttrs", !0);
            }

            return i;
          }

          return "object" == _typeof(e) ? this.each(function () {
            J.set(this, e);
          }) : _(this, function (t) {
            var n;
            if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
            this.each(function () {
              J.set(this, e, t);
            });
          }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function removeData(e) {
          return this.each(function () {
            J.remove(this, e);
          });
        }
      }), w.extend({
        queue: function queue(e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function dequeue(e, t) {
          t = t || "fx";

          var n = w.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = w._queueHooks(e, t);

          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
            w.dequeue(e, t);
          }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function _queueHooks(e, t) {
          var n = t + "queueHooks";
          return Q.get(e, n) || Q.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            })
          });
        }
      }), w.fn.extend({
        queue: function queue(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
            var n = w.queue(this, e, t);
            w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
          });
        },
        dequeue: function dequeue(e) {
          return this.each(function () {
            w.dequeue(this, e);
          });
        },
        clearQueue: function clearQueue(e) {
          return this.queue(e || "fx", []);
        },
        promise: function promise(e, t) {
          var n,
              r = 1,
              i = w.Deferred(),
              o = this,
              a = this.length,
              s = function s() {
            --r || i.resolveWith(o, [o]);
          };

          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
            (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
          }

          return s(), i.promise(t);
        }
      });

      var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
          re = ["Top", "Right", "Bottom", "Left"],
          ie = i.documentElement,
          oe = function oe(e) {
        return w.contains(e.ownerDocument, e);
      },
          ae = {
        composed: !0
      };

      ie.getRootNode && (oe = function oe(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
      });

      var se = function se(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display");
      },
          ue = function ue(e, t, n, r) {
        var i,
            o,
            a = {};

        for (o in t) {
          a[o] = e.style[o], e.style[o] = t[o];
        }

        for (o in i = n.apply(e, r || []), t) {
          e.style[o] = a[o];
        }

        return i;
      };

      function le(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ? function () {
          return r.cur();
        } : function () {
          return w.css(e, t, "");
        },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && ne.exec(w.css(e, t));

        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--;) {
            w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
          }

          c *= 2, w.style(e, t, c + l), n = n || [];
        }

        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
      }

      var ce = {};

      function fe(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = ce[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i);
      }

      function pe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
          (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Q.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && se(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", Q.set(r, "display", n)));
        }

        for (o = 0; o < a; o++) {
          null != i[o] && (e[o].style.display = i[o]);
        }

        return e;
      }

      w.fn.extend({
        show: function show() {
          return pe(this, !0);
        },
        hide: function hide() {
          return pe(this);
        },
        toggle: function toggle(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            se(this) ? w(this).show() : w(this).hide();
          });
        }
      });
      var de = /^(?:checkbox|radio)$/i,
          he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ge = /^$|^module$|\/(?:java|ecma)script/i,
          ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function ye(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n;
      }

      function me(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
        }
      }

      ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td;
      var xe,
          be,
          we = /<|&#?\w+;/;

      function Te(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
          if ((o = e[d]) || 0 === o) if ("object" === b(o)) w.merge(p, o.nodeType ? [o] : o);else if (we.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), u = ve[s] || ve._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) {
              a = a.lastChild;
            }

            w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
          } else p.push(t.createTextNode(o));
        }

        for (f.textContent = "", d = 0; o = p[d++];) {
          if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = oe(o), a = ye(f.appendChild(o), "script"), l && me(a), n) for (c = 0; o = a[c++];) {
            ge.test(o.type || "") && n.push(o);
          }
        }

        return f;
      }

      xe = i.createDocumentFragment().appendChild(i.createElement("div")), (be = i.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), g.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue;
      var Ce = /^key/,
          Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          ke = /^([^.]*)(?:\.(.+)|)/;

      function Se() {
        return !0;
      }

      function Ne() {
        return !1;
      }

      function Ae(e, t) {
        return e === function () {
          try {
            return i.activeElement;
          } catch (e) {}
        }() == ("focus" === t);
      }

      function De(e, t, n, r, i, o) {
        var a, s;

        if ("object" == _typeof(t)) {
          for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
            De(e, s, n, r, t[s], o);
          }

          return e;
        }

        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne;else if (!i) return e;
        return 1 === o && (a = i, (i = function i(e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
          w.event.add(this, t, i, r, n);
        });
      }

      function je(e, t, n) {
        n ? (Q.set(e, t, !1), w.event.add(e, t, {
          namespace: !1,
          handler: function handler(e) {
            var r,
                i,
                o = Q.get(this, t);

            if (1 & e.isTrigger && this[t]) {
              if (o.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();else if (o = a.call(arguments), Q.set(this, t, o), r = n(this, t), this[t](), o !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value;
            } else o.length && (Q.set(this, t, {
              value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this)
            }), e.stopImmediatePropagation());
          }
        })) : void 0 === Q.get(e, t) && w.event.add(e, t, Se);
      }

      w.event = {
        global: {},
        add: function add(e, t, n, r, i) {
          var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = Q.get(e);
          if (v) for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(ie, i), n.guid || (n.guid = w.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
            return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
          }), l = (t = (t || "").match(R) || [""]).length; l--;) {
            d = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
              type: d,
              origType: g,
              data: r,
              handler: n,
              guid: n.guid,
              selector: i,
              needsContext: i && w.expr.match.needsContext.test(i),
              namespace: h.join(".")
            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
          }
        },
        remove: function remove(e, t, n, r, i) {
          var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = Q.hasData(e) && Q.get(e);

          if (v && (u = v.events)) {
            for (l = (t = (t || "").match(R) || [""]).length; l--;) {
              if (d = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) {
                  c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                }

                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, d, v.handle), delete u[d]);
              } else for (d in u) {
                w.event.remove(e, d + t[l], n, r, !0);
              }
            }

            w.isEmptyObject(u) && Q.remove(e, "handle events");
          }
        },
        dispatch: function dispatch(e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s = w.event.fix(e),
              u = new Array(arguments.length),
              l = (Q.get(this, "events") || {})[s.type] || [],
              c = w.event.special[s.type] || {};

          for (u[0] = s, t = 1; t < arguments.length; t++) {
            u[t] = arguments[t];
          }

          if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
            for (a = w.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped();) {
              for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) {
                s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
              }
            }

            return c.postDispatch && c.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function handlers(e, t) {
          var n,
              r,
              i,
              o,
              a,
              s = [],
              u = t.delegateCount,
              l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++) {
                void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
              }

              o.length && s.push({
                elem: l,
                handlers: o
              });
            }
          }
          return l = this, u < t.length && s.push({
            elem: l,
            handlers: t.slice(u)
          }), s;
        },
        addProp: function addProp(e, t) {
          Object.defineProperty(w.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t) ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            } : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
            set: function set(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              });
            }
          });
        },
        fix: function fix(e) {
          return e[w.expando] ? e : new w.Event(e);
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function setup(e) {
              var t = this || e;
              return de.test(t.type) && t.click && A(t, "input") && je(t, "click", Se), !1;
            },
            trigger: function trigger(e) {
              var t = this || e;
              return de.test(t.type) && t.click && A(t, "input") && je(t, "click"), !0;
            },
            _default: function _default(e) {
              var t = e.target;
              return de.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
            }
          },
          beforeunload: {
            postDispatch: function postDispatch(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
      }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ne,
        isPropagationStopped: Ne,
        isImmediatePropagationStopped: Ne,
        isSimulated: !1,
        preventDefault: function preventDefault() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          var e = this.originalEvent;
          this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
      }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function which(e) {
          var t = e.button;
          return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
      }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
      }, function (e, t) {
        w.event.special[e] = {
          setup: function setup() {
            return je(this, e, Ae), !1;
          },
          trigger: function trigger() {
            return je(this, e), !0;
          },
          delegateType: t
        };
      }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function handle(e) {
            var n,
                r = e.relatedTarget,
                i = e.handleObj;
            return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
          }
        };
      }), w.fn.extend({
        on: function on(e, t, n, r) {
          return De(this, e, t, n, r);
        },
        one: function one(e, t, n, r) {
          return De(this, e, t, n, r, 1);
        },
        off: function off(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

          if ("object" == _typeof(e)) {
            for (i in e) {
              this.off(i, t, e[i]);
            }

            return this;
          }

          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function () {
            w.event.remove(this, e, n, t);
          });
        }
      });
      var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          Le = /<script|<style|<link/i,
          He = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function Pe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e;
      }

      function Re(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
      }

      function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }

      function Ie(e, t) {
        var n, r, i, o, a, s, u, l;

        if (1 === t.nodeType) {
          if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
            for (n = 0, r = l[i].length; n < r; n++) {
              w.event.add(t, i, l[i][n]);
            }
          }
          J.hasData(e) && (s = J.access(e), u = w.extend({}, s), J.set(t, u));
        }
      }

      function We(e, t, n, r) {
        t = s.apply([], t);
        var i,
            o,
            a,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            y = v(h);
        if (y || p > 1 && "string" == typeof h && !g.checkClone && He.test(h)) return e.each(function (i) {
          var o = e.eq(i);
          y && (t[0] = h.call(this, i, o.html())), We(o, t, n, r);
        });

        if (p && (o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
          for (u = (a = w.map(ye(i, "script"), Re)).length; f < p; f++) {
            l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(a, ye(l, "script"))), n.call(e[f], l, f);
          }

          if (u) for (c = a[a.length - 1].ownerDocument, w.map(a, Me), f = 0; f < u; f++) {
            l = a[f], ge.test(l.type || "") && !Q.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
              nonce: l.nonce || l.getAttribute("nonce")
            }) : x(l.textContent.replace(Oe, ""), l, c));
          }
        }

        return e;
      }

      function $e(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
          n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && oe(r) && me(ye(r, "script")), r.parentNode.removeChild(r));
        }

        return e;
      }

      w.extend({
        htmlPrefilter: function htmlPrefilter(e) {
          return e.replace(qe, "<$1></$2>");
        },
        clone: function clone(e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c = e.cloneNode(!0),
              f = oe(e);
          if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) {
            s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
          }
          if (t) if (n) for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) {
            Ie(o[r], a[r]);
          } else Ie(e, c);
          return (a = ye(c, "script")).length > 0 && me(a, !f && ye(e, "script")), c;
        },
        cleanData: function cleanData(e) {
          for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
            if (G(n)) {
              if (t = n[Q.expando]) {
                if (t.events) for (r in t.events) {
                  i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                }
                n[Q.expando] = void 0;
              }

              n[J.expando] && (n[J.expando] = void 0);
            }
          }
        }
      }), w.fn.extend({
        detach: function detach(e) {
          return $e(this, e, !0);
        },
        remove: function remove(e) {
          return $e(this, e);
        },
        text: function text(e) {
          return _(this, function (e) {
            return void 0 === e ? w.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
            });
          }, null, e, arguments.length);
        },
        append: function append() {
          return We(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e);
          });
        },
        prepend: function prepend() {
          return We(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Pe(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function before() {
          return We(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function after() {
          return We(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function empty() {
          for (var e, t = 0; null != (e = this[t]); t++) {
            1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
          }

          return this;
        },
        clone: function clone(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return w.clone(this, e, t);
          });
        },
        html: function html(e) {
          return _(this, function (e) {
            var t = this[0] || {},
                n = 0,
                r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

            if ("string" == typeof e && !Le.test(e) && !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = w.htmlPrefilter(e);

              try {
                for (; n < r; n++) {
                  1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                }

                t = 0;
              } catch (i) {}
            }

            t && this.empty().append(e);
          }, null, e, arguments.length);
        },
        replaceWith: function replaceWith() {
          var e = [];
          return We(this, arguments, function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
          }, e);
        }
      }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
            n = a === o ? this : this.clone(!0), w(i[a])[t](n), u.apply(r, n.get());
          }

          return this.pushStack(r);
        };
      });

      var Fe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
          Be = function Be(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e);
      },
          _e = new RegExp(re.join("|"), "i");

      function ze(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)), !g.pixelBoxStyles() && Fe.test(a) && _e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
      }

      function Ue(e, t) {
        return {
          get: function get() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }

      !function () {
        function e() {
          if (c) {
            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(l).appendChild(c);
            var e = t.getComputedStyle(c);
            r = "1%" !== e.top, u = 12 === n(e.marginLeft), c.style.right = "60%", s = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", a = 12 === n(c.offsetWidth / 3), ie.removeChild(l), c = null;
          }
        }

        function n(e) {
          return Math.round(parseFloat(e));
        }

        var r,
            o,
            a,
            s,
            u,
            l = i.createElement("div"),
            c = i.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(g, {
          boxSizingReliable: function boxSizingReliable() {
            return e(), o;
          },
          pixelBoxStyles: function pixelBoxStyles() {
            return e(), s;
          },
          pixelPosition: function pixelPosition() {
            return e(), r;
          },
          reliableMarginLeft: function reliableMarginLeft() {
            return e(), u;
          },
          scrollboxSize: function scrollboxSize() {
            return e(), a;
          }
        }));
      }();
      var Xe = ["Webkit", "Moz", "ms"],
          Ve = i.createElement("div").style,
          Ge = {};

      function Ye(e) {
        var t = w.cssProps[e] || Ge[e];
        return t || (e in Ve ? e : Ge[e] = function (e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;) {
            if ((e = Xe[n] + t) in Ve) return e;
          }
        }(e) || e);
      }

      var Qe = /^(none|table(?!-c[ea]).+)/,
          Je = /^--/,
          Ke = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
          Ze = {
        letterSpacing: "0",
        fontWeight: "400"
      };

      function et(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }

      function tt(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;

        for (; a < 4; a += 2) {
          "margin" === n && (u += w.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + re[a] + "Width", !0, i))) : (u += w.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += w.css(e, "border" + re[a] + "Width", !0, i) : s += w.css(e, "border" + re[a] + "Width", !0, i));
        }

        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
      }

      function nt(e, t, n) {
        var r = Be(e),
            i = (!g.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
            o = i,
            a = ze(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);

        if (Fe.test(a)) {
          if (!n) return a;
          a = "auto";
        }

        return (!g.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
      }

      function rt(e, t, n, r, i) {
        return new rt.prototype.init(e, t, n, r, i);
      }

      w.extend({
        cssHooks: {
          opacity: {
            get: function get(e, t) {
              if (t) {
                var n = ze(e, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function style(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
                o,
                a,
                s = V(t),
                u = Je.test(t),
                l = e.style;
            if (u || (t = Ye(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
            "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
          }
        },
        css: function css(e, t, n, r) {
          var i,
              o,
              a,
              s = V(t);
          return Je.test(t) || (t = Ye(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = ze(e, t, r)), "normal" === i && t in Ze && (i = Ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
      }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
          get: function get(e, n, r) {
            if (n) return !Qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : ue(e, Ke, function () {
              return nt(e, t, r);
            });
          },
          set: function set(e, n, r) {
            var i,
                o = Be(e),
                a = !g.scrollboxSize() && "absolute" === o.position,
                s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                u = r ? tt(e, t, r, s, o) : 0;
            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)), u && (i = ne.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), et(0, n, u);
          }
        };
      }), w.cssHooks.marginLeft = Ue(g.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
          marginLeft: 0
        }, function () {
          return e.getBoundingClientRect().left;
        })) + "px";
      }), w.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (e, t) {
        w.cssHooks[e + t] = {
          expand: function expand(n) {
            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
              i[e + re[r] + t] = o[r] || o[r - 2] || o[0];
            }

            return i;
          }
        }, "margin" !== e && (w.cssHooks[e + t].set = et);
      }), w.fn.extend({
        css: function css(e, t) {
          return _(this, function (e, t, n) {
            var r,
                i,
                o = {},
                a = 0;

            if (Array.isArray(t)) {
              for (r = Be(e), i = t.length; a < i; a++) {
                o[t[a]] = w.css(e, t[a], !1, r);
              }

              return o;
            }

            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          }, e, t, arguments.length > 1);
        }
      }), w.Tween = rt, rt.prototype = {
        constructor: rt,
        init: function init(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
        },
        cur: function cur() {
          var e = rt.propHooks[this.prop];
          return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
        },
        run: function run(e) {
          var t,
              n = rt.propHooks[this.prop];
          return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this;
        }
      }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
        _default: {
          get: function get(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
          },
          set: function set(e) {
            w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
          }
        }
      }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
        set: function set(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }, w.easing = {
        linear: function linear(e) {
          return e;
        },
        swing: function swing(e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
      }, w.fx = rt.prototype.init, w.fx.step = {};
      var it,
          ot,
          at = /^(?:toggle|show|hide)$/,
          st = /queueHooks$/;

      function ut() {
        ot && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ut) : t.setTimeout(ut, w.fx.interval), w.fx.tick());
      }

      function lt() {
        return t.setTimeout(function () {
          it = void 0;
        }), it = Date.now();
      }

      function ct(e, t) {
        var n,
            r = 0,
            i = {
          height: e
        };

        for (t = t ? 1 : 0; r < 4; r += 2 - t) {
          i["margin" + (n = re[r])] = i["padding" + n] = e;
        }

        return t && (i.opacity = i.width = e), i;
      }

      function ft(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
          if (r = i[o].call(n, t, e)) return r;
        }
      }

      function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
          delete u.elem;
        }),
            u = function u() {
          if (i) return !1;

          for (var t = it || lt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
            l.tweens[o].run(r);
          }

          return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
        },
            l = s.promise({
          elem: e,
          props: w.extend({}, t),
          opts: w.extend(!0, {
            specialEasing: {},
            easing: w.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: it || lt(),
          duration: n.duration,
          tweens: [],
          createTween: function createTween(t, n) {
            var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(r), r;
          },
          stop: function stop(t) {
            var n = 0,
                r = t ? l.tweens.length : 0;
            if (i) return this;

            for (i = !0; n < r; n++) {
              l.tweens[n].run(1);
            }

            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
          }
        }),
            c = l.props;

        for (!function (e, t) {
          var n, r, i, o, a;

          for (n in e) {
            if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
              (n in e) || (e[n] = o[n], t[n] = i);
            } else t[r] = i;
          }
        }(c, l.opts.specialEasing); o < a; o++) {
          if (r = pt.prefilters[o].call(l, e, c, l.opts)) return v(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        }

        return w.map(c, ft, l), v(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
          elem: e,
          anim: l,
          queue: l.opts.queue
        })), l;
      }

      w.Animation = w.extend(pt, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return le(n.elem, e, ne.exec(t), n), n;
          }]
        },
        tweener: function tweener(e, t) {
          v(e) ? (t = e, e = ["*"]) : e = e.match(R);

          for (var n, r = 0, i = e.length; r < i; r++) {
            n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
          }
        },
        prefilters: [function (e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = "width" in t || "height" in t,
              p = this,
              d = {},
              h = e.style,
              g = e.nodeType && se(e),
              v = Q.get(e, "fxshow");

          for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s();
          }), a.unqueued++, p.always(function () {
            p.always(function () {
              a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
            });
          })), t) {
            if (i = t[r], at.test(i)) {
              if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !v || void 0 === v[r]) continue;
                g = !0;
              }

              d[r] = v && v[r] || w.style(e, r);
            }
          }

          if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (pe([e], !0), l = e.style.display || l, c = w.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
            h.display = l;
          }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
          })), u = !1, d) {
            u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
              display: l
            }), o && (v.hidden = !g), g && pe([e], !0), p.done(function () {
              for (r in g || pe([e]), Q.remove(e, "fxshow"), d) {
                w.style(e, r, d[r]);
              }
            })), u = ft(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
          }
        }],
        prefilter: function prefilter(e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        }
      }), w.speed = function (e, t, n) {
        var r = e && "object" == _typeof(e) ? w.extend({}, e) : {
          complete: n || !n && t || v(e) && e,
          duration: e,
          easing: n && t || t && !v(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }, r;
      }, w.fn.extend({
        fadeTo: function fadeTo(e, t, n, r) {
          return this.filter(se).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, r);
        },
        animate: function animate(e, t, n, r) {
          var i = w.isEmptyObject(e),
              o = w.speed(t, n, r),
              a = function a() {
            var t = pt(this, w.extend({}, e), o);
            (i || Q.get(this, "finish")) && t.stop(!0);
          };

          return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function stop(e, t, n) {
          var r = function r(e) {
            var t = e.stop;
            delete e.stop, t(n);
          };

          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
            var t = !0,
                i = null != e && e + "queueHooks",
                o = w.timers,
                a = Q.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
              a[i] && a[i].stop && st.test(i) && r(a[i]);
            }

            for (i = o.length; i--;) {
              o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
            }

            !t && n || w.dequeue(this, e);
          });
        },
        finish: function finish(e) {
          return !1 !== e && (e = e || "fx"), this.each(function () {
            var t,
                n = Q.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = w.timers,
                a = r ? r.length : 0;

            for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            }

            for (t = 0; t < a; t++) {
              r[t] && r[t].finish && r[t].finish.call(this);
            }

            delete n.finish;
          });
        }
      }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];

        w.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, i);
        };
      }), w.each({
        slideDown: ct("show"),
        slideUp: ct("hide"),
        slideToggle: ct("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }), w.timers = [], w.fx.tick = function () {
        var e,
            t = 0,
            n = w.timers;

        for (it = Date.now(); t < n.length; t++) {
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }

        n.length || w.fx.stop(), it = void 0;
      }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start();
      }, w.fx.interval = 13, w.fx.start = function () {
        ot || (ot = !0, ut());
      }, w.fx.stop = function () {
        ot = null;
      }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, w.fn.delay = function (e, n) {
        return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, r) {
          var i = t.setTimeout(n, e);

          r.stop = function () {
            t.clearTimeout(i);
          };
        });
      }, function () {
        var e = i.createElement("input"),
            t = i.createElement("select").appendChild(i.createElement("option"));
        e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value;
      }();
      var dt,
          ht = w.expr.attrHandle;
      w.fn.extend({
        attr: function attr(e, t) {
          return _(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function removeAttr(e) {
          return this.each(function () {
            w.removeAttr(this, e);
          });
        }
      }), w.extend({
        attr: function attr(e, t, n) {
          var r,
              i,
              o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
          type: {
            set: function set(e, t) {
              if (!g.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            }
          }
        },
        removeAttr: function removeAttr(e, t) {
          var n,
              r = 0,
              i = t && t.match(R);
          if (i && 1 === e.nodeType) for (; n = i[r++];) {
            e.removeAttribute(n);
          }
        }
      }), dt = {
        set: function set(e, t, n) {
          return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
      }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;

        ht[t] = function (e, t, r) {
          var i,
              o,
              a = t.toLowerCase();
          return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
        };
      });
      var gt = /^(?:input|select|textarea|button)$/i,
          vt = /^(?:a|area)$/i;

      function yt(e) {
        return (e.match(R) || []).join(" ");
      }

      function mt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }

      function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
      }

      w.fn.extend({
        prop: function prop(e, t) {
          return _(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function removeProp(e) {
          return this.each(function () {
            delete this[w.propFix[e] || e];
          });
        }
      }), w.extend({
        prop: function prop(e, t, n) {
          var r,
              i,
              o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
          tabIndex: {
            get: function get(e) {
              var t = w.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), g.optSelected || (w.propHooks.selected = {
        get: function get(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function set(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this;
      }), w.fn.extend({
        addClass: function addClass(e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
          if (v(e)) return this.each(function (t) {
            w(this).addClass(e.call(this, t, mt(this)));
          });
          if ((t = xt(e)).length) for (; n = this[u++];) {
            if (i = mt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
              for (a = 0; o = t[a++];) {
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              }

              i !== (s = yt(r)) && n.setAttribute("class", s);
            }
          }
          return this;
        },
        removeClass: function removeClass(e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
          if (v(e)) return this.each(function (t) {
            w(this).removeClass(e.call(this, t, mt(this)));
          });
          if (!arguments.length) return this.attr("class", "");
          if ((t = xt(e)).length) for (; n = this[u++];) {
            if (i = mt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
              for (a = 0; o = t[a++];) {
                for (; r.indexOf(" " + o + " ") > -1;) {
                  r = r.replace(" " + o + " ", " ");
                }
              }

              i !== (s = yt(r)) && n.setAttribute("class", s);
            }
          }
          return this;
        },
        toggleClass: function toggleClass(e, t) {
          var n = _typeof(e),
              r = "string" === n || Array.isArray(e);

          return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function (n) {
            w(this).toggleClass(e.call(this, n, mt(this), t), t);
          }) : this.each(function () {
            var t, i, o, a;
            if (r) for (i = 0, o = w(this), a = xt(e); t = a[i++];) {
              o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
          });
        },
        hasClass: function hasClass(e) {
          var t,
              n,
              r = 0;

          for (t = " " + e + " "; n = this[r++];) {
            if (1 === n.nodeType && (" " + yt(mt(n)) + " ").indexOf(t) > -1) return !0;
          }

          return !1;
        }
      });
      var bt = /\r/g;
      w.fn.extend({
        val: function val(e) {
          var t,
              n,
              r,
              i = this[0];
          return arguments.length ? (r = v(e), this.each(function (n) {
            var i;
            1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
              return null == e ? "" : e + "";
            })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
          })) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0;
        }
      }), w.extend({
        valHooks: {
          option: {
            get: function get(e) {
              var t = w.find.attr(e, "value");
              return null != t ? t : yt(w.text(e));
            }
          },
          select: {
            get: function get(e) {
              var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? o + 1 : i.length;

              for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                  if (t = w(n).val(), a) return t;
                  s.push(t);
                }
              }

              return s;
            },
            set: function set(e, t) {
              for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;) {
                ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
              }

              return n || (e.selectedIndex = -1), o;
            }
          }
        }
      }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
          set: function set(e, t) {
            if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
          }
        }, g.checkOn || (w.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value;
        });
      }), g.focusin = "onfocusin" in t;

      var wt = /^(?:focusinfocus|focusoutblur)$/,
          Tt = function Tt(e) {
        e.stopPropagation();
      };

      w.extend(w.event, {
        trigger: function trigger(e, n, r, o) {
          var a,
              s,
              u,
              l,
              c,
              f,
              d,
              h,
              g = [r || i],
              m = p.call(e, "type") ? e.type : e,
              x = p.call(e, "namespace") ? e.namespace.split(".") : [];

          if (s = h = u = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (x = m.split("."), m = x.shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[w.expando] ? e : new w.Event(m, "object" == _typeof(e) && e)).isTrigger = o ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : w.makeArray(n, [e]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
            if (!o && !d.noBubble && !y(r)) {
              for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
                g.push(s), u = s;
              }

              u === (r.ownerDocument || i) && g.push(u.defaultView || u.parentWindow || t);
            }

            for (a = 0; (s = g[a++]) && !e.isPropagationStopped();) {
              h = s, e.type = a > 1 ? l : d.bindType || m, (f = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && f.apply(s, n), (f = c && s[c]) && f.apply && G(s) && (e.result = f.apply(s, n), !1 === e.result && e.preventDefault());
            }

            return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), n) || !G(r) || c && v(r[m]) && !y(r) && ((u = r[c]) && (r[c] = null), w.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, Tt), r[m](), e.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (r[c] = u)), e.result;
          }
        },
        simulate: function simulate(e, t, n) {
          var r = w.extend(new w.Event(), n, {
            type: e,
            isSimulated: !0
          });
          w.event.trigger(r, null, t);
        }
      }), w.fn.extend({
        trigger: function trigger(e, t) {
          return this.each(function () {
            w.event.trigger(e, t, this);
          });
        },
        triggerHandler: function triggerHandler(e, t) {
          var n = this[0];
          if (n) return w.event.trigger(e, t, n, !0);
        }
      }), g.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
      }, function (e, t) {
        var n = function n(e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };

        w.event.special[t] = {
          setup: function setup() {
            var r = this.ownerDocument || this,
                i = Q.access(r, t);
            i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1);
          },
          teardown: function teardown() {
            var r = this.ownerDocument || this,
                i = Q.access(r, t) - 1;
            i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t));
          }
        };
      });
      var Ct = t.location,
          Et = Date.now(),
          kt = /\?/;

      w.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;

        try {
          n = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (r) {
          n = void 0;
        }

        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n;
      };

      var St = /\[\]$/,
          Nt = /\r?\n/g,
          At = /^(?:submit|button|image|reset|file)$/i,
          Dt = /^(?:input|select|textarea|keygen)/i;

      function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
          n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
        });else if (n || "object" !== b(t)) r(e, t);else for (i in t) {
          jt(e + "[" + i + "]", t[i], n, r);
        }
      }

      w.param = function (e, t) {
        var n,
            r = [],
            i = function i(e, t) {
          var n = v(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };

        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
          i(this.name, this.value);
        });else for (n in e) {
          jt(n, e[n], t, i);
        }
        return r.join("&");
      }, w.fn.extend({
        serialize: function serialize() {
          return w.param(this.serializeArray());
        },
        serializeArray: function serializeArray() {
          return this.map(function () {
            var e = w.prop(this, "elements");
            return e ? w.makeArray(e) : this;
          }).filter(function () {
            var e = this.type;
            return this.name && !w(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e));
          }).map(function (e, t) {
            var n = w(this).val();
            return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
              return {
                name: t.name,
                value: e.replace(Nt, "\r\n")
              };
            }) : {
              name: t.name,
              value: n.replace(Nt, "\r\n")
            };
          }).get();
        }
      });
      var qt = /%20/g,
          Lt = /#.*$/,
          Ht = /([?&])_=[^&]*/,
          Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Pt = /^(?:GET|HEAD)$/,
          Rt = /^\/\//,
          Mt = {},
          It = {},
          Wt = "*/".concat("*"),
          $t = i.createElement("a");

      function Ft(e) {
        return function (t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r,
              i = 0,
              o = t.toLowerCase().match(R) || [];
          if (v(n)) for (; r = o[i++];) {
            "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
          }
        };
      }

      function Bt(e, t, n, r) {
        var i = {},
            o = e === It;

        function a(s) {
          var u;
          return i[s] = !0, w.each(e[s] || [], function (e, s) {
            var l = s(t, n, r);
            return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
          }), u;
        }

        return a(t.dataTypes[0]) || !i["*"] && a("*");
      }

      function _t(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};

        for (n in t) {
          void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        }

        return r && w.extend(!0, e, r), e;
      }

      $t.href = Ct.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Ct.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Wt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": w.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function ajaxSetup(e, t) {
          return t ? _t(_t(e, w.ajaxSettings), t) : _t(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(Mt),
        ajaxTransport: Ft(It),
        ajax: function ajax(e, n) {
          "object" == _typeof(e) && (n = e, e = void 0), n = n || {};
          var r,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h = w.ajaxSetup({}, n),
              g = h.context || h,
              v = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
              y = w.Deferred(),
              m = w.Callbacks("once memory"),
              x = h.statusCode || {},
              b = {},
              T = {},
              C = "canceled",
              E = {
            readyState: 0,
            getResponseHeader: function getResponseHeader(e) {
              var t;

              if (c) {
                if (!s) for (s = {}; t = Ot.exec(a);) {
                  s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                }
                t = s[e.toLowerCase() + " "];
              }

              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function getAllResponseHeaders() {
              return c ? a : null;
            },
            setRequestHeader: function setRequestHeader(e, t) {
              return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
            },
            overrideMimeType: function overrideMimeType(e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function statusCode(e) {
              var t;
              if (e) if (c) E.always(e[E.status]);else for (t in e) {
                x[t] = [x[t], e[t]];
              }
              return this;
            },
            abort: function abort(e) {
              var t = e || C;
              return r && r.abort(t), k(0, t), this;
            }
          };

          if (y.promise(E), h.url = ((e || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
            l = i.createElement("a");

            try {
              l.href = h.url, l.href = l.href, h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host;
            } catch (S) {
              h.crossDomain = !0;
            }
          }

          if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Bt(Mt, h, n, E), c) return E;

          for (p in (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
            E.setRequestHeader(p, h.headers[p]);
          }

          if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();

          if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), r = Bt(It, h, n, E)) {
            if (E.readyState = 1, f && v.trigger("ajaxSend", [E, h]), c) return E;
            h.async && h.timeout > 0 && (u = t.setTimeout(function () {
              E.abort("timeout");
            }, h.timeout));

            try {
              c = !1, r.send(b, k);
            } catch (S) {
              if (c) throw S;
              k(-1, S);
            }
          } else k(-1, "No Transport");

          function k(e, n, i, s) {
            var l,
                p,
                d,
                b,
                T,
                C = n;
            c || (c = !0, u && t.clearTimeout(u), r = void 0, a = s || "", E.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, i && (b = function (e, t, n) {
              for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) {
                u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              }

              if (r) for (i in s) {
                if (s[i] && s[i].test(r)) {
                  u.unshift(i);
                  break;
                }
              }
              if (u[0] in n) o = u[0];else {
                for (i in n) {
                  if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                  }

                  a || (a = i);
                }

                o = o || a;
              }
              if (o) return o !== u[0] && u.unshift(o), n[o];
            }(h, E, i)), b = function (e, t, n, r) {
              var i,
                  o,
                  a,
                  s,
                  u,
                  l = {},
                  c = e.dataTypes.slice();
              if (c[1]) for (a in e.converters) {
                l[a.toLowerCase()] = e.converters[a];
              }

              for (o = c.shift(); o;) {
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                  if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                      !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                      break;
                    }
                  }
                  if (!0 !== a) if (a && e.throws) t = a(t);else try {
                    t = a(t);
                  } catch (S) {
                    return {
                      state: "parsererror",
                      error: a ? S : "No conversion from " + u + " to " + o
                    };
                  }
                }
              }

              return {
                state: "success",
                data: t
              };
            }(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || C) + "", l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (v.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
          }

          return E;
        },
        getJSON: function getJSON(e, t, n) {
          return w.get(e, t, n, "json");
        },
        getScript: function getScript(e, t) {
          return w.get(e, void 0, t, "script");
        }
      }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
          return v(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
            url: e,
            type: t,
            dataType: i,
            data: n,
            success: r
          }, w.isPlainObject(e) && e));
        };
      }), w._evalUrl = function (e, t) {
        return w.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function textScript() {}
          },
          dataFilter: function dataFilter(e) {
            w.globalEval(e, t);
          }
        });
      }, w.fn.extend({
        wrapAll: function wrapAll(e) {
          var t;
          return this[0] && (v(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) {
              e = e.firstElementChild;
            }

            return e;
          }).append(this)), this;
        },
        wrapInner: function wrapInner(e) {
          return v(e) ? this.each(function (t) {
            w(this).wrapInner(e.call(this, t));
          }) : this.each(function () {
            var t = w(this),
                n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e);
          });
        },
        wrap: function wrap(e) {
          var t = v(e);
          return this.each(function (n) {
            w(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function unwrap(e) {
          return this.parent(e).not("body").each(function () {
            w(this).replaceWith(this.childNodes);
          }), this;
        }
      }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e);
      }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, w.ajaxSettings.xhr = function () {
        try {
          return new t.XMLHttpRequest();
        } catch (e) {}
      };
      var zt = {
        0: 200,
        1223: 204
      },
          Ut = w.ajaxSettings.xhr();
      g.cors = !!Ut && "withCredentials" in Ut, g.ajax = Ut = !!Ut, w.ajaxTransport(function (e) {
        var _n, r;

        if (g.cors || Ut && !e.crossDomain) return {
          send: function send(i, o) {
            var a,
                s = e.xhr();
            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) {
              s[a] = e.xhrFields[a];
            }

            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) {
              s.setRequestHeader(a, i[a]);
            }

            _n = function n(e) {
              return function () {
                _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                  binary: s.response
                } : {
                  text: s.responseText
                }, s.getAllResponseHeaders()));
              };
            }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
              4 === s.readyState && t.setTimeout(function () {
                _n && r();
              });
            }, _n = _n("abort");

            try {
              s.send(e.hasContent && e.data || null);
            } catch (u) {
              if (_n) throw u;
            }
          },
          abort: function abort() {
            _n && _n();
          }
        };
      }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }), w.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function textScript(e) {
            return w.globalEval(e), e;
          }
        }
      }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), w.ajaxTransport("script", function (e) {
        var t, _n2;

        if (e.crossDomain || e.scriptAttrs) return {
          send: function send(r, o) {
            t = w("<script>").attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", _n2 = function n(e) {
              t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
            }), i.head.appendChild(t[0]);
          },
          abort: function abort() {
            _n2 && _n2();
          }
        };
      });
      var Xt,
          Vt = [],
          Gt = /(=)\?(?=&|$)|\?\?/;
      w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
          var e = Vt.pop() || w.expando + "_" + Et++;
          return this[e] = !0, e;
        }
      }), w.ajaxPrefilter("json jsonp", function (e, n, r) {
        var i,
            o,
            a,
            s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
          return a || w.error(i + " was not called"), a[0];
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function () {
          a = arguments;
        }, r.always(function () {
          void 0 === o ? w(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Vt.push(i)), a && v(o) && o(a[0]), a = o = void 0;
        }), "script";
      }), g.createHTMLDocument = ((Xt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), w.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), a = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
        var r, o, a;
      }, w.fn.load = function (e, t, n) {
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = yt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), a.length > 0 && w.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
          a.each(function () {
            n.apply(this, o || [e.responseText, t, e]);
          });
        }), this;
      }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
          return e === t.elem;
        }).length;
      }, w.offset = {
        setOffset: function setOffset(e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              u,
              l = w.css(e, "position"),
              c = w(e),
              f = {};
          "static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
        }
      }, w.fn.extend({
        offset: function offset(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
            w.offset.setOffset(this, e, t);
          });
          var t,
              n,
              r = this[0];
          return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0;
        },
        position: function position() {
          if (this[0]) {
            var e,
                t,
                n,
                r = this[0],
                i = {
              top: 0,
              left: 0
            };
            if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
              for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) {
                e = e.parentNode;
              }

              e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
            }
            return {
              top: t.top - i.top - w.css(r, "marginTop", !0),
              left: t.left - i.left - w.css(r, "marginLeft", !0)
            };
          }
        },
        offsetParent: function offsetParent() {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === w.css(e, "position");) {
              e = e.offsetParent;
            }

            return e || ie;
          });
        }
      }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (e, t) {
        var n = "pageYOffset" === t;

        w.fn[e] = function (r) {
          return _(this, function (e, r, i) {
            var o;
            if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
          }, e, r, arguments.length);
        };
      }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = Ue(g.pixelPosition, function (e, n) {
          if (n) return n = ze(e, t), Fe.test(n) ? w(e).position()[t] + "px" : n;
        });
      }), w.each({
        Height: "height",
        Width: "width"
      }, function (e, t) {
        w.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, function (n, r) {
          w.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
                s = n || (!0 === i || !0 === o ? "margin" : "border");
            return _(this, function (t, n, i) {
              var o;
              return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
            }, t, a ? i : void 0, a);
          };
        });
      }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      }), w.fn.extend({
        hover: function hover(e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        }
      }), w.fn.extend({
        bind: function bind(e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function unbind(e, t) {
          return this.off(e, null, t);
        },
        delegate: function delegate(e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function undelegate(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
      }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = a.call(arguments, 2), (i = function i() {
          return e.apply(t || this, r.concat(a.call(arguments)));
        }).guid = e.guid = e.guid || w.guid++, i;
      }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0);
      }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = v, w.isWindow = y, w.camelCase = V, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }, "function" == typeof e && e.amd && e("jquery", [], function () {
        return w;
      });
      var Yt = t.jQuery,
          Qt = t.$;
      return w.noConflict = function (e) {
        return t.$ === w && (t.$ = Qt), e && t.jQuery === w && (t.jQuery = Yt), w;
      }, n || (t.jQuery = t.$ = w), w;
    });
  }, {
    "process": "jtqQ"
  }],
  "L7lC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = function e() {
      return 10;
    },
        t = e;

    exports.default = t;
  }, {}],
  "Czob": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.printName = o, exports.my = exports.jq = void 0;
    var e = t(require("jquery")),
        r = t(require("./mod1"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(e) {
      return "Hello Mr. ".concat(e, " ");
    }

    var u = function u() {
      return (0, e.default)("body").attr("class", "bodyclass");
    };

    exports.jq = u;

    var n = function n(e) {
      return (0, r.default)() + 55;
    };

    exports.my = n;
  }, {
    "jquery": "juYr",
    "./mod1": "L7lC"
  }],
  "P0P0": [function (require, module, exports) {}, {}],
  "Focm": [function (require, module, exports) {
    "use strict";

    var e = require("./mod2");

    require("../css/styles.css");

    var s = "Rafal",
        o = "<h1>".concat((0, e.printName)(s), "</h1>\n              <p>result is: ").concat((0, e.my)(), '</p>\n              <img src="https://www.google.com/logos/doodles/2020/leap-year-2020-6753651837108301-law.gif" />\n            ');
    (0, e.jq)(), document.body.innerHTML = o;
  }, {
    "./mod2": "Czob",
    "../css/styles.css": "P0P0"
  }]
}, {}, ["Focm"], null);
},{}],"../../Users/rafdr/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52346" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../Users/rafdr/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/index.js"], null)
//# sourceMappingURL=/dist.de44d8ea.js.map