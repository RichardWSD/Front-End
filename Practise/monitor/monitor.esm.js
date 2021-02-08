function browserType() {
  var e = "undefined" != typeof window && window.navigator.userAgent.toLowerCase(),
    t = e && /msie|trident/.test(e),
    r = e && e.indexOf("edge/") > 0,
    o = e && /chrome\/\d+/.test(e) && !r,
    n = e && (e.indexOf("opera") > -1 || e.indexOf("opr") > -1),
    i = e && e.indexOf("safari") > -1 && -1 === e.indexOf("chrome"),
    a = e && e.indexOf("mqqbrowser") > 0,
    s = e && e.indexOf("firefox") > -1,
    u = e && e.indexOf("ucbrowser/") > 0,
    c = e && e.indexOf("baiduboxapp") > 0,
    p = e && e.indexOf("android") > 0,
    f = e && /iphone|ipad|ipod|ios/.test(e);
  if (t) {
    new RegExp("MSIE (\\d+\\.\\d+);").test(e);
    var d = parseFloat(RegExp.$1);
    return -1 !== e.indexOf("msie 6.0") ? {
      tag: "IE",
      userAgent: e,
      version: "6"
    } : 7 === d ? {
      tag: "IE",
      userAgent: e,
      version: "7"
    } : 8 === d ? {
      tag: "IE",
      userAgent: e,
      version: "8"
    } : 9 === d ? {
      tag: "IE",
      userAgent: e,
      version: "9"
    } : 10 === d ? {
      tag: "IE",
      userAgent: e,
      version: "10"
    } : e.match(/rv:([\d.]+)\) like gecko/) ? {
      tag: "IE",
      userAgent: e,
      version: "11"
    } : {
      tag: "IE",
      userAgent: e,
      version: "0"
    }
  }
  return c ? {
    tag: "Baidu",
    userAgent: e,
    version: ""
  } : a ? {
    tag: "QQ",
    userAgent: e,
    version: ""
  } : u ? {
    tag: "UC",
    userAgent: e,
    version: ""
  } : r ? {
    tag: "Edge",
    userAgent: e,
    version: ""
  } : s ? {
    tag: "firefox",
    userAgent: e,
    version: e.substr(e.indexOf("firefox") + 8, 10).split(".")[0]
  } : n ? {
    tag: "Opera",
    userAgent: e,
    version: ""
  } : i ? {
    tag: "Safari",
    userAgent: e,
    version: e.substr(e.indexOf("version") + 8, 10).split(".")[0]
  } : o ? {
    tag: "Chrome",
    userAgent: e,
    version: e.substr(e.indexOf("chrome") + 7, 10).split(".")[0]
  } : p ? {
    tag: "Android",
    userAgent: e,
    version: ""
  } : f ? {
    tag: "IOS",
    userAgent: e,
    version: ""
  } : {
    tag: "未知",
    userAgent: e,
    version: ""
  }
}

function getOS() {
  var e = window.navigator.userAgent,
    t = window.navigator.platform,
    r = "";
  return ~["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(t) ? r = "Mac OS" : ~["iPhone", "iPad", "iPod"].indexOf(t) ? r = "iOS" : ~["Win32", "Win64", "Windows", "WinCE"].indexOf(t) ? r = "Windows" : /Android/.test(e) ? r = "Android" : !r && /Linux/.test(t) && (r = "Linux"), r
}

function formatComponentName(e) {
  if (e.$root === e) return "root";
  var t = e._isVue ? e.$options && e.$options.name || e.$options && e.$options._componentTag : e.name;
  return (t ? "component <" + t + ">" : "anonymous component") + (e._isVue && e.$options && e.$options.__file ? " at " + (e.$options && e.$options.__file) : "")
}

function getReferrer() {
  return document.referrer.split("/")[2] || "未知"
}
var withAfterHook = function (e, t) {
    return function () {
      e.apply(this, arguments), t.apply(this, arguments)
    }
  },
  debounce = function (e, t) {
    void 0 === t && (t = 500);
    var r = null;
    return function () {
      for (var o = [], n = arguments.length; n--;) o[n] = arguments[n];
      r && clearTimeout(r), r = setTimeout(function () {
        e.apply(this, o)
      }, t)
    }
  },
  runIdleTask = function (e) {
    window.requestIdleCallback ? window.requestIdleCallback(function (t) {
      e.call(null)
    }) : setTimeout(function (t) {
      e.call(null)
    }, 0)
  },
  isRegExp = function (e) {
    return "[object RegExp]" === Object.prototype.toString.call(e)
  },
  isError = function (e) {
    return "[object Error]" === Object.prototype.toString.call(e)
  },
  BaseData = function (e) {
    var t = screen.width,
      r = screen.height,
      o = screen.pixelDepth,
      n = screen.colorDepth;
    this.browser = browserType(), this.platform = getOS(), this.project = e, this.version = "1.2.1", this.screen = {
      width: t,
      height: r,
      pixelDepth: o,
      colorDepth: n
    }
  },
  base = {
    id: "",
    project: "",
    baseUrl: "//fe-monitor.yunxiao.com/v2/monitor"
  },
  pv = {
    urlTracker: !0,
    visibilityTracker: !1,
    visibilityPvTime: 36e5
  },
  error = {
    sample: 1,
    jsError: !0,
    apiError: !0,
    vueError: !0,
    httpError: !0,
    filters: []
  },
  report = {
    reportTime: 36e5,
    reportPvTime: 6e4
  },
  perf = {
    isCollectedPerformance: !0,
    maxTiming: 1e3
  },
  defaultOpts = Object.assign({}, base, pv, error, report, perf),
  filterMap = {
    APIError: {
      response: "responseText",
      method: "method",
      code: "code"
    },
    "Script Error": {
      msg: "stack"
    },
    "Vue HandleError": {
      msg: "stack"
    },
    ResourceError: {
      element: "element"
    }
  },
  MonitorData = function () {
    var e = location.origin,
      t = location.pathname,
      r = location.href;
    this.url = r, this.path = e + t, this.time = new Date, this.user = window.user || ""
  };
MonitorData.prototype.pushToErrorQueue = function () {
  var e = this,
    t = {
      "Vue HandleError": function (e, t) {
        return e.vmName === t.vmName && e.stack === t.stack && e.url === t.url
      },
      ResourceError: function (e, t) {
        return e.element === t.element && e.source === t.source && e.url === t.url
      },
      APIError: function (e, t) {
        return JSON.stringify(e.desc) === JSON.stringify(t.desc) && e.url === t.url
      },
      "Script Error": function (e, t) {
        return e.stack === t.stack && e.url === t.url
      }
    },
    r = e.type,
    o = MonitorData.errorFilters.filter(function (e) {
      return e.type === r
    }).some(function (t) {
      var o = filterMap[t.type],
        n = !1;
      for (var i in o)
        if (o.hasOwnProperty(i)) {
          var a = o[i],
            s = "APIError" === r ? e.desc[a] : e[a];
          if (!t[i]) continue;
          if (!(isRegExp(t[i]) ? t[i] : new RegExp(t[i])).test(s)) {
            n = !1;
            break
          }
          n = !0
        } return n
    });
  MonitorData.errorQueue.some(function (r) {
    return t[r.type](r, e)
  }) || o || MonitorData.errorQueue.push(e)
}, MonitorData.prototype.pushToPerformanceQueue = function () {
  MonitorData.performanceQueue.push(this)
}, MonitorData.prototype.pushToResourceQueue = function () {
  MonitorData.resourceQueue.push(this)
}, MonitorData.prototype.pushToPageViewQueue = function (e) {
  void 0 === e && (e = 1);
  MonitorData.pageViewQueue.push(Object.assign({}, {
    track: e
  }, this))
}, MonitorData.hasReportData = function () {
  for (var e of ["errorQueue", "performanceQueue", "resourceQueue"])
    if (0 !== MonitorData[e].length) return !0;
  return !1
}, MonitorData.getReportData = function (e) {
  var t = {},
    r = e ? ["baseData", e] : ["baseData", "errorQueue", "performanceQueue", "resourceQueue"];
  for (var o of r) t[o] = MonitorData[o];
  return t
}, MonitorData.clear = function () {
  for (var e of ["errorQueue", "performanceQueue", "resourceQueue"]) MonitorData[e].length = 0
}, MonitorData.clearPv = function () {
  MonitorData.pageViewQueue.length = 0
}, MonitorData.customOptions = defaultOpts, MonitorData.baseData = {}, MonitorData.errorFilters = [], MonitorData.errorQueue = [], MonitorData.performanceQueue = [], MonitorData.resourceQueue = [], MonitorData.pageViewQueue = [], MonitorData.errorTimer = {
  id: "",
  failedNum: 0
}, MonitorData.pvTimer = {
  id: "",
  failedNum: 0
};
var debounceSend, ErrorData = function (e) {
    function t(t, r, o, n) {
      void 0 === o && (o = ""), void 0 === n && (n = {}), e.call(this), this.type = t, this.msg = r, this.desc = n, this.stack = o
    }
    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
  }(MonitorData),
  VueErrorData = function (e) {
    function t(t, r, o, n, i) {
      e.call(this, t, "Vue 捕获异常", r, {
        name: o.name,
        message: o.message
      }), this.vmName = formatComponentName(n), this.info = i
    }
    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
  }(ErrorData),
  ApiErrorData = function (e) {
    function t(t, r, o, n, i, a) {
      e.call(this, "APIError", "接口请求异常"), this.desc = {
        message: "接口请求异常",
        code: t,
        api: r,
        params: o,
        response: n,
        responseText: i,
        method: a
      }
    }
    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
  }(ErrorData),
  HttpErrorData = function (e) {
    function t(t, r) {
      e.call(this, "ResourceError", "资源加载异常"), this.source = r.src, this.tagName = r.tagName, this.element = t
    }
    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
  }(ErrorData),
  PagePerformance = function (e) {
    function t(t) {
      e.call(this);
      var r = t.memory,
        o = t.navigation,
        n = t.timing,
        i = t.onresourcetimingbufferfull,
        a = t.timeOrigin;
      this.memory = r, this.navigation = o, this.timing = n, this.onresourcetimingbufferfull = i, this.timeOrigin = a, this.referrer = getReferrer()
    }
    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
  }(MonitorData),
  ResPerformance = function (e) {
    function t(t) {
      e.call(this), this.timings = t
    }
    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
  }(MonitorData),
  VISIBLE = "visible",
  isSafari = !("object" != typeof safari || !safari.pushNotification);

function initUrlTracker() {
  sendPageView(), history.pushState && window.addEventListener && (pushStateOverride(), replaceStateOverride(), window.addEventListener("popstate", handleUrlChange))
}

function createDebounceSend() {
  debounceSend = debounce(sendPageView, MonitorData.customOptions.visibilityPvTime)
}

function initVisibilityTracker() {
  document.visibilityState && (createDebounceSend(), window.addEventListener("visibilitychange", handleVisibilityChange, !0), isSafari && addEventListener("beforeunload", sendPageView, !0))
}

function pushStateOverride() {
  history.pushState = withAfterHook(history.pushState, handleUrlChange)
}

function replaceStateOverride() {
  history.replaceState = withAfterHook(history.replaceState, handleUrlChange)
}

function handleUrlChange() {
  var e = "";
  setTimeout(function () {
    var t = getPath();
    e !== t && (e = t, sendPageView())
  }, 0)
}

function sendPageView(e) {
  (new MonitorData).pushToPageViewQueue(e)
}

function handleVisibilityChange() {
  document.visibilityState === VISIBLE && debounceSend(0)
}

function getPath() {
  return location.pathname + location.search
}

function ajax(e) {
  var t = e.method,
    r = e.baseUrl,
    o = e.data,
    n = e.contentType;
  return void 0 === n && (n = "text/plain"), new Promise(function (e, i) {
    var a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    a.onerror = i, a.onreadystatechange = function () {
      if (4 === a.readyState)
        if (a.status >= 200 && a.status < 400) {
          var t = /application\/json/.test(a.getResponseHeader("content-type")) ? JSON.parse(a.responseText) : a.responseText;
          e(t)
        } else i(new Error("POST to " + r + " failed with status: " + a.status))
    }, a.open(t, r), a.setRequestHeader("Content-Type", n + ";charset=UTF-8"), a.send(o)
  })
}

function forceSendPvData() {
  var e = MonitorData.baseData,
    t = MonitorData.pageViewQueue,
    r = MonitorData.customOptions,
    o = r.baseUrl + "/" + r.id + "/add/pv";
  t.length && ajax({
    method: "post",
    baseUrl: o,
    contentType: "application/json",
    data: JSON.stringify({
      baseData: e,
      pageViewQueue: t
    })
  }).then(function (e) {
    MonitorData.clearPv()
  }).catch(function (e) {
    console.error(e), MonitorData.pvTimer.failedNum++, MonitorData.pvTimer.failedNum >= 3 && (clearInterval(MonitorData.pvTimer.id), console.info("PV心跳检测失败，已断开链接"))
  })
}

function forceSendMonitorData() {
  var e = JSON.parse(localStorage.getItem("_BOSS_monitor")),
    t = MonitorData.getReportData("errorQueue");
  e && (t.errorQueue = t.errorQueue.concat(e.errorQueue));
  var r = MonitorData.customOptions,
    o = r.baseUrl + "/" + r.id + "/add";
  MonitorData.errorQueue.length && ajax({
    method: "post",
    baseUrl: o,
    data: JSON.stringify(t)
  }).then(function (e) {
    localStorage.removeItem("_BOSS_monitor")
  }).catch(function (e) {
    MonitorData.errorTimer.failedNum++, MonitorData.errorTimer.failedNum >= 3 && (clearInterval(MonitorData.errorTimer.id), console.info("心跳检测失败，已断开链接"));
    var r = t.errorQueue;
    try {
      localStorage.setItem("_BOSS_monitor", JSON.stringify({
        errorQueue: r
      }))
    } catch (e) {
      isQuotaExceeded(e) && localStorage.removeItem("_BOSS_monitor")
    }
  }).then(function () {
    MonitorData.clear()
  })
}

function isQuotaExceeded(e) {
  var t = !1;
  if (e)
    if (e.code) switch (e.code) {
      case 22:
        t = !0;
        break;
      case 1014:
        "NS_ERROR_DOM_QUOTA_REACHED" === e.name && (t = !0)
    } else -2147024882 === e.number && (t = !0);
  return t
}

function sendMonitorData() {
  var e = MonitorData.getReportData(),
    t = MonitorData.customOptions,
    r = t.baseUrl + "/" + t.id + "/add";
  return MonitorData.hasReportData() && (void 0 !== navigator.sendBeacon ? navigator.sendBeacon(r, JSON.stringify(e)) : ajax({
    method: "post",
    baseUrl: r,
    data: JSON.stringify(e)
  })), e
}
var pm = {
  getNavigationTiming: function () {
    return performance.getEntriesByType("navigation")[0]
  },
  getResourceTiming: function (e) {
    if (void 0 !== performance)
      if (performance.getEntriesByType) {
        var t = performance.getEntriesByType("resource").filter(function (t, r) {
          return t.responseEnd - t.startTime >= e
        }).slice(0, 20);
        if (t.length) new ResPerformance(t).pushToResourceQueue()
      } else console.log("浏览器不支持资源加载收集");
    else console.log("浏览器不支持performance API 无法收集")
  },
  collectData: function () {
    new PagePerformance(performance).pushToPerformanceQueue()
  },
  init: function (e) {
    var t = this;
    runIdleTask(function () {
      t.collectData(), t.getResourceTiming(e)
    })
  }
};
! function () {
  function e() {
    return Math.random() <= MonitorData.customOptions.sample
  }

  function t(e) {
    return Object.assign(MonitorData.customOptions, e)
  }

  function r() {
    var r = MonitorData.customOptions;
    ajax({
      method: "get",
      baseUrl: r.baseUrl + "/" + r.id + "/config"
    }).then(function (e) {
      0 === e.code && e.data && t(e.data)
    }).catch(function (e) {
      console.error(e)
    }).then(function (t) {
      var r, n, i, a, s, u, c, p, f, d;
      r = MonitorData.customOptions, n = r.name, i = r.jsError, a = r.apiError, s = r.httpError, u = r.reportTime, c = r.reportPvTime, p = r.filters, console.info("%c monitor custom config: ", "background-color: #1DAEF8; color: white", MonitorData.customOptions), d = new BaseData(n), MonitorData.baseData = d, MonitorData.errorFilters = p, i && (window.onerror = function (t, r, o, n, i) {
          if (i && i.stack) {
            if (!e()) return;
            var a = i.name,
              s = i.message;
            new ErrorData("Script Error", "脚本错误", i.stack.toString(), {
              name: a,
              message: s
            }).pushToErrorQueue()
          }
        }), s && window.addEventListener && window.addEventListener("error", function (t) {
          if (!t.message) {
            if (!e()) return;
            var r, o = (r = t.target ? t.target : t.srcElement) && r.outerHTML;
            o && o.length > 200 && (o = o.slice(0, 200)), new HttpErrorData(o, r).pushToErrorQueue()
          }
        }, !0), a && (f = "", XMLHttpRequest.prototype.open = withAfterHook(XMLHttpRequest.prototype.open, function (e) {
          f = e
        }), XMLHttpRequest.prototype.send = withAfterHook(XMLHttpRequest.prototype.send, function (t) {
          var r = this;
          this.addEventListener("readystatechange", function (o) {
            4 === r.readyState && ![200, 204, 304, 0].includes(r.status) && e() && -1 === r.responseURL.indexOf(MonitorData.customOptions.baseUrl) && new ApiErrorData(r.status + " " + r.statusText, r.responseURL, t, r.response, r.responseText, f).pushToErrorQueue()
          }, !1)
        })),
        function (e, t) {
          window.onunload = function () {
            sendMonitorData()
          }, MonitorData.errorTimer.id = setInterval(function (e) {
            forceSendMonitorData()
          }, e), MonitorData.pvTimer.id = setInterval(function (e) {
            forceSendPvData()
          }, t)
        }(u, c), "complete" === document.readyState ? o() : window.addEventListener("load", function (e) {
          o()
        })
    })
  }

  function o() {
    var t = MonitorData.customOptions,
      r = t.vueError,
      o = t.isCollectedPerformance,
      n = t.urlTracker,
      i = t.visibilityTracker,
      a = t.maxTiming;
    r && window.Vue && (window.Vue.config.errorHandler = function (t, r, o) {
      if (t && isError(t) && e()) try {
        new VueErrorData(void 0 !== o ? "Vue HandleError" : "Async Http", t.stack.toString(), t, r, o).pushToErrorQueue()
      } catch (t) {
        console.warn("errorHandler has error:", t)
      }
    }), o && pm.init(a), n && initUrlTracker(), i && initVisibilityTracker()
  }
  window.newMonitor = {
    init: function (e) {
      t(e), r(), window.nm = {
        sendData: sendMonitorData,
        getData: function () {
          return MonitorData.getReportData()
        }
      }
    }
  }
}();