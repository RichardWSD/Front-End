! function (e) {
  function t(t) {
    for (var n, i, c = t[0], l = t[1], f = t[3] || [], s = 0, p = []; s < c.length; s++) i = c[s], Object.prototype.hasOwnProperty.call(r, i) && r[i] && p.push(r[i][0]), r[i] = 0;
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (a && a(t), f.forEach((function (e) {
        if (void 0 === r[e]) {
          r[e] = null;
          var t = document.createElement("link");
          u.nc && t.setAttribute("nonce", u.nc), t.rel = "prefetch", t.as = "script", t.href = o(e), document.head.appendChild(t)
        }
      })); p.length;) p.shift()()
  }
  var n = {},
    r = {
      0: 0
    };

  function o(e) {
    return u.p + "js/" + ({
      1: "test"
    } [e] || e) + "." + {
      1: "882bb25e15"
    } [e] + ".js"
  }

  function u(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, u), r.l = !0, r.exports
  }
  u.e = function (e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var i = new Promise((function (t, o) {
          n = r[e] = [t, o]
        }));
        t.push(n[2] = i);
        var c, l = document.createElement("script");
        l.charset = "utf-8", l.timeout = 120, u.nc && l.setAttribute("nonce", u.nc), l.src = o(e);
        var a = new Error;
        c = function (t) {
          l.onerror = l.onload = null, clearTimeout(f);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var o = t && ("load" === t.type ? "missing" : t.type),
                u = t && t.target && t.target.src;
              a.message = "Loading chunk " + e + " failed.\n(" + o + ": " + u + ")", a.name = "ChunkLoadError", a.type = o, a.request = u, n[1](a)
            }
            r[e] = void 0
          }
        };
        var f = setTimeout((function () {
          c({
            type: "timeout",
            target: l
          })
        }), 12e4);
        l.onerror = l.onload = c, document.head.appendChild(l)
      } return Promise.all(t)
  }, u.m = e, u.c = n, u.d = function (e, t, n) {
    u.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, u.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, u.t = function (e, t) {
    if (1 & t && (e = u(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (u.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) u.d(n, r, function (t) {
        return e[t]
      }.bind(null, r));
    return n
  }, u.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return u.d(t, "a", t), t
  }, u.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, u.p = "", u.oe = function (e) {
    throw console.error(e), e
  };
  var i = window.webpackJsonp = window.webpackJsonp || [],
    c = i.push.bind(i);
  i.push = t, i = i.slice();
  for (var l = 0; l < i.length; l++) t(i[l]);
  var a = c,
    f = u(u.s = 0);
  t([
    [], {},
    0, [1]
  ])
}([function (e, t, n) {
  console.log("index.js文件被加载了~"), document.getElementById("btn").onclick = function () {
    n.e(1).then(n.bind(null, 1)).then(({
      mul: e
    }) => {
      console.log(e(4, 5))
    })
  }
}]);