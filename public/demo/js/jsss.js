!function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {i: r, l: !1, exports: {}};
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
            return t[e]
        }.bind(null, i));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 0)
}({
    0: function (t, e, n) {
        n("bUC5"), t.exports = n("pyCd")
    }, "2EJX": function (t, e, n) {
        (function (t) {
            !function (e) {
                var n = function () {
                    "use strict";
                    return {
                        isMsie: function () {
                            return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                        },
                        isBlankString: function (t) {
                            return !t || /^\s*$/.test(t)
                        },
                        escapeRegExChars: function (t) {
                            return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                        },
                        isString: function (t) {
                            return "string" == typeof t
                        },
                        isNumber: function (t) {
                            return "number" == typeof t
                        },
                        isArray: e.isArray,
                        isFunction: e.isFunction,
                        isObject: e.isPlainObject,
                        isUndefined: function (t) {
                            return void 0 === t
                        },
                        toStr: function (t) {
                            return n.isUndefined(t) || null === t ? "" : t + ""
                        },
                        bind: e.proxy,
                        each: function (t, n) {
                            e.each(t, function (t, e) {
                                return n(e, t)
                            })
                        },
                        map: e.map,
                        filter: e.grep,
                        every: function (t, n) {
                            var r = !0;
                            return t ? (e.each(t, function (e, i) {
                                if (!(r = n.call(null, i, e, t))) return !1
                            }), !!r) : r
                        },
                        some: function (t, n) {
                            var r = !1;
                            return t ? (e.each(t, function (e, i) {
                                if (r = n.call(null, i, e, t)) return !1
                            }), !!r) : r
                        },
                        mixin: e.extend,
                        getUniqueId: (t = 0, function () {
                            return t++
                        }),
                        templatify: function (t) {
                            return e.isFunction(t) ? t : function () {
                                return String(t)
                            }
                        },
                        defer: function (t) {
                            setTimeout(t, 0)
                        },
                        debounce: function (t, e, n) {
                            var r, i;
                            return function () {
                                var o, s, a = this, u = arguments;
                                return o = function () {
                                    r = null, n || (i = t.apply(a, u))
                                }, s = n && !r, clearTimeout(r), r = setTimeout(o, e), s && (i = t.apply(a, u)), i
                            }
                        },
                        throttle: function (t, e) {
                            var n, r, i, o, s, a;
                            return s = 0, a = function () {
                                s = new Date, i = null, o = t.apply(n, r)
                            }, function () {
                                var u = new Date, c = e - (u - s);
                                return n = this, r = arguments, c <= 0 ? (clearTimeout(i), i = null, s = u, o = t.apply(n, r)) : i || (i = setTimeout(a, c)), o
                            }
                        },
                        noop: function () {
                        }
                    };
                    var t
                }(), r = "0.10.5", i = function () {
                    "use strict";
                    return {nonword: e, whitespace: t, obj: {nonword: r(e), whitespace: r(t)}};

                    function t(t) {
                        return (t = n.toStr(t)) ? t.split(/\s+/) : []
                    }

                    function e(t) {
                        return (t = n.toStr(t)) ? t.split(/\W+/) : []
                    }

                    function r(t) {
                        return function () {
                            var e = [].slice.call(arguments, 0);
                            return function (r) {
                                var i = [];
                                return n.each(e, function (e) {
                                    i = i.concat(t(n.toStr(r[e])))
                                }), i
                            }
                        }
                    }
                }(), o = function () {
                    "use strict";

                    function t(t) {
                        this.maxSize = n.isNumber(t) ? t : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = e.noop)
                    }

                    function r() {
                        this.head = this.tail = null
                    }

                    function i(t, e) {
                        this.key = t, this.val = e, this.prev = this.next = null
                    }

                    return n.mixin(t.prototype, {
                        set: function (t, e) {
                            var n, r = this.list.tail;
                            this.size >= this.maxSize && (this.list.remove(r), delete this.hash[r.key]), (n = this.hash[t]) ? (n.val = e, this.list.moveToFront(n)) : (n = new i(t, e), this.list.add(n), this.hash[t] = n, this.size++)
                        }, get: function (t) {
                            var e = this.hash[t];
                            if (e) return this.list.moveToFront(e), e.val
                        }, reset: function () {
                            this.size = 0, this.hash = {}, this.list = new r
                        }
                    }), n.mixin(r.prototype, {
                        add: function (t) {
                            this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
                        }, remove: function (t) {
                            t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
                        }, moveToFront: function (t) {
                            this.remove(t), this.add(t)
                        }
                    }), t
                }(), s = function () {
                    "use strict";
                    var t, e;
                    try {
                        (t = window.localStorage).setItem("~~~", "!"), t.removeItem("~~~")
                    } catch (e) {
                        t = null
                    }

                    function r(t) {
                        this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + n.escapeRegExChars(this.prefix))
                    }

                    return e = t && window.JSON ? {
                        _prefix: function (t) {
                            return this.prefix + t
                        }, _ttlKey: function (t) {
                            return this._prefix(t) + this.ttlKey
                        }, get: function (e) {
                            return this.isExpired(e) && this.remove(e), s(t.getItem(this._prefix(e)))
                        }, set: function (e, r, s) {
                            return n.isNumber(s) ? t.setItem(this._ttlKey(e), o(i() + s)) : t.removeItem(this._ttlKey(e)), t.setItem(this._prefix(e), o(r))
                        }, remove: function (e) {
                            return t.removeItem(this._ttlKey(e)), t.removeItem(this._prefix(e)), this
                        }, clear: function () {
                            var e, n, r = [], i = t.length;
                            for (e = 0; e < i; e++) (n = t.key(e)).match(this.keyMatcher) && r.push(n.replace(this.keyMatcher, ""));
                            for (e = r.length; e--;) this.remove(r[e]);
                            return this
                        }, isExpired: function (e) {
                            var r = s(t.getItem(this._ttlKey(e)));
                            return !!(n.isNumber(r) && i() > r)
                        }
                    } : {
                        get: n.noop,
                        set: n.noop,
                        remove: n.noop,
                        clear: n.noop,
                        isExpired: n.noop
                    }, n.mixin(r.prototype, e), r;

                    function i() {
                        return (new Date).getTime()
                    }

                    function o(t) {
                        return JSON.stringify(n.isUndefined(t) ? null : t)
                    }

                    function s(t) {
                        return JSON.parse(t)
                    }
                }(), a = function () {
                    "use strict";
                    var t = 0, r = {}, i = 6, s = new o(10);

                    function a(t) {
                        var r;
                        t = t || {}, this.cancelled = !1, this.lastUrl = null, this._send = t.transport ? (r = t.transport, function (t, i) {
                            var o = e.Deferred();
                            return r(t, i, function (t) {
                                n.defer(function () {
                                    o.resolve(t)
                                })
                            }, function (t) {
                                n.defer(function () {
                                    o.reject(t)
                                })
                            }), o
                        }) : e.ajax, this._get = t.rateLimiter ? t.rateLimiter(this._get) : this._get, this._cache = !1 === t.cache ? new o(0) : s
                    }

                    return a.setMaxPendingRequests = function (t) {
                        i = t
                    }, a.resetCache = function () {
                        s.reset()
                    }, n.mixin(a.prototype, {
                        _get: function (e, n, o) {
                            var s, a = this;

                            function u(t) {
                                o && o(null, t), a._cache.set(e, t)
                            }

                            function c() {
                                o && o(!0)
                            }

                            this.cancelled || e !== this.lastUrl || ((s = r[e]) ? s.done(u).fail(c) : t < i ? (t++, r[e] = this._send(e, n).done(u).fail(c).always(function () {
                                t--, delete r[e], a.onDeckRequestArgs && (a._get.apply(a, a.onDeckRequestArgs), a.onDeckRequestArgs = null)
                            })) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                        }, get: function (t, e, r) {
                            var i;
                            return n.isFunction(e) && (r = e, e = {}), this.cancelled = !1, this.lastUrl = t, (i = this._cache.get(t)) ? n.defer(function () {
                                r && r(null, i)
                            }) : this._get(t, e, r), !!i
                        }, cancel: function () {
                            this.cancelled = !0
                        }
                    }), a
                }(), u = function () {
                    "use strict";

                    function t(t) {
                        (t = t || {}).datumTokenizer && t.queryTokenizer || e.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = t.datumTokenizer, this.queryTokenizer = t.queryTokenizer, this.reset()
                    }

                    return n.mixin(t.prototype, {
                        bootstrap: function (t) {
                            this.datums = t.datums, this.trie = t.trie
                        }, add: function (t) {
                            var e = this;
                            t = n.isArray(t) ? t : [t], n.each(t, function (t) {
                                var i, o;
                                i = e.datums.push(t) - 1, o = r(e.datumTokenizer(t)), n.each(o, function (t) {
                                    var n, r, o;
                                    for (n = e.trie, r = t.split(""); o = r.shift();) (n = n.children[o] || (n.children[o] = {
                                        ids: [],
                                        children: {}
                                    })).ids.push(i)
                                })
                            })
                        }, get: function (t) {
                            var e, i, o = this;
                            return e = r(this.queryTokenizer(t)), n.each(e, function (t) {
                                var e, n, r, s;
                                if (i && 0 === i.length) return !1;
                                for (e = o.trie, n = t.split(""); e && (r = n.shift());) e = e.children[r];
                                if (!e || 0 !== n.length) return i = [], !1;
                                s = e.ids.slice(0), i = i ? function (t, e) {
                                    var n = 0, r = 0, i = [];
                                    t = t.sort(a), e = e.sort(a);
                                    var o = t.length, s = e.length;
                                    for (; n < o && r < s;) t[n] < e[r] ? n++ : t[n] > e[r] ? r++ : (i.push(t[n]), n++, r++);
                                    return i;

                                    function a(t, e) {
                                        return t - e
                                    }
                                }(i, s) : s
                            }), i ? n.map(function (t) {
                                for (var e = {}, n = [], r = 0, i = t.length; r < i; r++) e[t[r]] || (e[t[r]] = !0, n.push(t[r]));
                                return n
                            }(i), function (t) {
                                return o.datums[t]
                            }) : []
                        }, reset: function () {
                            this.datums = [], this.trie = {ids: [], children: {}}
                        }, serialize: function () {
                            return {datums: this.datums, trie: this.trie}
                        }
                    }), t;

                    function r(t) {
                        return t = n.filter(t, function (t) {
                            return !!t
                        }), t = n.map(t, function (t) {
                            return t.toLowerCase()
                        })
                    }
                }(), c = function () {
                    "use strict";
                    return {
                        local: function (t) {
                            return t.local || null
                        }, prefetch: function (t) {
                            var i, o;
                            o = {
                                url: null,
                                thumbprint: "",
                                ttl: 864e5,
                                filter: null,
                                ajax: {}
                            }, (i = t.prefetch || null) && (i = n.isString(i) ? {url: i} : i, (i = n.mixin(o, i)).thumbprint = r + i.thumbprint, i.ajax.type = i.ajax.type || "GET", i.ajax.dataType = i.ajax.dataType || "json", !i.url && e.error("prefetch requires url to be set"));
                            return i
                        }, remote: function (t) {
                            var r, i;
                            i = {
                                url: null,
                                cache: !0,
                                wildcard: "%QUERY",
                                replace: null,
                                rateLimitBy: "debounce",
                                rateLimitWait: 300,
                                send: null,
                                filter: null,
                                ajax: {}
                            }, (r = t.remote || null) && (r = n.isString(r) ? {url: r} : r, (r = n.mixin(i, r)).rateLimiter = /^throttle$/i.test(r.rateLimitBy) ? (o = r.rateLimitWait, function (t) {
                                return n.throttle(t, o)
                            }) : function (t) {
                                return function (e) {
                                    return n.debounce(e, t)
                                }
                            }(r.rateLimitWait), r.ajax.type = r.ajax.type || "GET", r.ajax.dataType = r.ajax.dataType || "json", delete r.rateLimitBy, delete r.rateLimitWait, !r.url && e.error("remote requires url to be set"));
                            var o;
                            return r
                        }
                    }
                }();
                !function (t) {
                    "use strict";
                    var r, o;

                    function l(t) {
                        t && (t.local || t.prefetch || t.remote) || e.error("one of local, prefetch, or remote is required"), this.limit = t.limit || 5, this.sorter = function (t) {
                            return n.isFunction(t) ? function (e) {
                                return e.sort(t)
                            } : function (t) {
                                return t
                            }
                        }(t.sorter), this.dupDetector = t.dupDetector || h, this.local = c.local(t), this.prefetch = c.prefetch(t), this.remote = c.remote(t), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new u({
                            datumTokenizer: t.datumTokenizer,
                            queryTokenizer: t.queryTokenizer
                        }), this.storage = this.cacheKey ? new s(this.cacheKey) : null
                    }

                    return r = t.Bloodhound, o = {
                        data: "data",
                        protocol: "protocol",
                        thumbprint: "thumbprint"
                    }, t.Bloodhound = l, l.noConflict = function () {
                        return t.Bloodhound = r, l
                    }, l.tokenizers = i, n.mixin(l.prototype, {
                        _loadPrefetch: function (t) {
                            var n, r, i = this;
                            return (n = this._readFromStorage(t.thumbprint)) ? (this.index.bootstrap(n), r = e.Deferred().resolve()) : r = e.ajax(t.url, t.ajax).done(function (e) {
                                i.clear(), i.add(t.filter ? t.filter(e) : e), i._saveToStorage(i.index.serialize(), t.thumbprint, t.ttl)
                            }), r
                        }, _getFromRemote: function (t, e) {
                            var n, r, i = this;
                            if (this.transport) return t = t || "", r = encodeURIComponent(t), n = this.remote.replace ? this.remote.replace(this.remote.url, t) : this.remote.url.replace(this.remote.wildcard, r), this.transport.get(n, this.remote.ajax, function (t, n) {
                                e(t ? [] : i.remote.filter ? i.remote.filter(n) : n)
                            })
                        }, _cancelLastRemoteRequest: function () {
                            this.transport && this.transport.cancel()
                        }, _saveToStorage: function (t, e, n) {
                            this.storage && (this.storage.set(o.data, t, n), this.storage.set(o.protocol, location.protocol, n), this.storage.set(o.thumbprint, e, n))
                        }, _readFromStorage: function (t) {
                            var e, n = {};
                            return this.storage && (n.data = this.storage.get(o.data), n.protocol = this.storage.get(o.protocol), n.thumbprint = this.storage.get(o.thumbprint)), e = n.thumbprint !== t || n.protocol !== location.protocol, n.data && !e ? n.data : null
                        }, _initialize: function () {
                            var t, r = this, i = this.local;
                            return t = this.prefetch ? this._loadPrefetch(this.prefetch) : e.Deferred().resolve(), i && t.done(function () {
                                r.add(n.isFunction(i) ? i() : i)
                            }), this.transport = this.remote ? new a(this.remote) : null, this.initPromise = t.promise()
                        }, initialize: function (t) {
                            return !this.initPromise || t ? this._initialize() : this.initPromise
                        }, add: function (t) {
                            this.index.add(t)
                        }, get: function (t, e) {
                            var r = this, i = [], o = !1;
                            i = this.index.get(t), (i = this.sorter(i).slice(0, this.limit)).length < this.limit ? o = this._getFromRemote(t, function (t) {
                                var o = i.slice(0);
                                n.each(t, function (t) {
                                    return !n.some(o, function (e) {
                                        return r.dupDetector(t, e)
                                    }) && o.push(t), o.length < r.limit
                                }), e && e(r.sorter(o))
                            }) : this._cancelLastRemoteRequest(), o || (i.length > 0 || !this.transport) && e && e(i)
                        }, clear: function () {
                            this.index.reset()
                        }, clearPrefetchCache: function () {
                            this.storage && this.storage.clear()
                        }, clearRemoteCache: function () {
                            this.transport && a.resetCache()
                        }, ttAdapter: function () {
                            return n.bind(this.get, this)
                        }
                    }), l;

                    function h() {
                        return !1
                    }
                }(this);
                var l = {
                    wrapper: '<span class="twitter-typeahead"></span>',
                    dropdown: '<span class="tt-dropdown-menu"></span>',
                    dataset: '<div class="tt-dataset-%CLASS%"></div>',
                    suggestions: '<span class="tt-suggestions"></span>',
                    suggestion: '<div class="tt-suggestion"></div>'
                }, h = function () {
                    "use strict";
                    var t = {
                        wrapper: {position: "relative", display: "inline-block"},
                        hint: {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            borderColor: "transparent",
                            boxShadow: "none",
                            opacity: "1"
                        },
                        input: {position: "relative", verticalAlign: "top", backgroundColor: "transparent"},
                        inputWithNoHint: {position: "relative", verticalAlign: "top"},
                        dropdown: {position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none"},
                        suggestions: {display: "block"},
                        suggestion: {whiteSpace: "nowrap", cursor: "pointer"},
                        suggestionChild: {whiteSpace: "normal"},
                        ltr: {left: "0", right: "auto"},
                        rtl: {left: "auto", right: " 0"}
                    };
                    return n.isMsie() && n.mixin(t.input, {backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}), n.isMsie() && n.isMsie() <= 7 && n.mixin(t.input, {marginTop: "-1px"}), t
                }(), p = function () {
                    "use strict";

                    function t(t) {
                        t && t.el || e.error("EventBus initialized without el"), this.$el = e(t.el)
                    }

                    return n.mixin(t.prototype, {
                        trigger: function (t) {
                            var e = [].slice.call(arguments, 1);
                            this.$el.trigger("typeahead:" + t, e)
                        }
                    }), t
                }(), d = function () {
                    "use strict";
                    var e = /\s+/, n = function () {
                        var e;
                        e = window.setImmediate ? function (e) {
                            t(function () {
                                e()
                            })
                        } : function (t) {
                            setTimeout(function () {
                                t()
                            }, 0)
                        };
                        return e
                    }();
                    return {
                        onSync: function (t, e, n) {
                            return r.call(this, "sync", t, e, n)
                        }, onAsync: function (t, e, n) {
                            return r.call(this, "async", t, e, n)
                        }, off: function (t) {
                            var n;
                            if (!this._callbacks) return this;
                            t = t.split(e);
                            for (; n = t.shift();) delete this._callbacks[n];
                            return this
                        }, trigger: function (t) {
                            var r, o, s, a, u;
                            if (!this._callbacks) return this;
                            t = t.split(e), s = [].slice.call(arguments, 1);
                            for (; (r = t.shift()) && (o = this._callbacks[r]);) a = i(o.sync, this, [r].concat(s)), u = i(o.async, this, [r].concat(s)), a() && n(u);
                            return this
                        }
                    };

                    function r(t, n, r, i) {
                        var o;
                        if (!r) return this;
                        for (n = n.split(e), r = i ? function (t, e) {
                            return t.bind ? t.bind(e) : function () {
                                t.apply(e, [].slice.call(arguments, 0))
                            }
                        }(r, i) : r, this._callbacks = this._callbacks || {}; o = n.shift();) this._callbacks[o] = this._callbacks[o] || {
                            sync: [],
                            async: []
                        }, this._callbacks[o][t].push(r);
                        return this
                    }

                    function i(t, e, n) {
                        return function () {
                            for (var r, i = 0, o = t.length; !r && i < o; i += 1) r = !1 === t[i].apply(e, n);
                            return !r
                        }
                    }
                }(), f = function (t) {
                    "use strict";
                    var e = {
                        node: null,
                        pattern: null,
                        tagName: "strong",
                        className: null,
                        wordsOnly: !1,
                        caseSensitive: !1
                    };
                    return function (r) {
                        var i;
                        (r = n.mixin({}, e, r)).node && r.pattern && (r.pattern = n.isArray(r.pattern) ? r.pattern : [r.pattern], i = function (t, e, r) {
                            for (var i, o = [], s = 0, a = t.length; s < a; s++) o.push(n.escapeRegExChars(t[s]));
                            return i = r ? "\\b(" + o.join("|") + ")\\b" : "(" + o.join("|") + ")", e ? new RegExp(i) : new RegExp(i, "i")
                        }(r.pattern, r.caseSensitive, r.wordsOnly), function t(e, n) {
                            var r;
                            for (var i = 0; i < e.childNodes.length; i++) 3 === (r = e.childNodes[i]).nodeType ? i += n(r) ? 1 : 0 : t(r, n)
                        }(r.node, function (e) {
                            var n, o, s;
                            (n = i.exec(e.data)) && (s = t.createElement(r.tagName), r.className && (s.className = r.className), (o = e.splitText(n.index)).splitText(n[0].length), s.appendChild(o.cloneNode(!0)), e.parentNode.replaceChild(s, o));
                            return !!n
                        }))
                    }
                }(window.document), g = function () {
                    "use strict";
                    var t;

                    function r(r) {
                        var i, o, s, a, u, c = this;
                        (r = r || {}).input || e.error("input is missing"), i = n.bind(this._onBlur, this), o = n.bind(this._onFocus, this), s = n.bind(this._onKeydown, this), a = n.bind(this._onInput, this), this.$hint = e(r.hint), this.$input = e(r.input).on("blur.tt", i).on("focus.tt", o).on("keydown.tt", s), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = n.noop), n.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (e) {
                            t[e.which || e.keyCode] || n.defer(n.bind(c._onInput, c, e))
                        }) : this.$input.on("input.tt", a), this.query = this.$input.val(), this.$overflowHelper = (u = this.$input, e('<pre aria-hidden="true"></pre>').css({
                            position: "absolute",
                            visibility: "hidden",
                            whiteSpace: "pre",
                            fontFamily: u.css("font-family"),
                            fontSize: u.css("font-size"),
                            fontStyle: u.css("font-style"),
                            fontVariant: u.css("font-variant"),
                            fontWeight: u.css("font-weight"),
                            wordSpacing: u.css("word-spacing"),
                            letterSpacing: u.css("letter-spacing"),
                            textIndent: u.css("text-indent"),
                            textRendering: u.css("text-rendering"),
                            textTransform: u.css("text-transform")
                        }).insertAfter(u))
                    }

                    return t = {
                        9: "tab",
                        27: "esc",
                        37: "left",
                        39: "right",
                        13: "enter",
                        38: "up",
                        40: "down"
                    }, r.normalizeQuery = function (t) {
                        return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                    }, n.mixin(r.prototype, d, {
                        _onBlur: function () {
                            this.resetInputValue(), this.trigger("blurred")
                        }, _onFocus: function () {
                            this.trigger("focused")
                        }, _onKeydown: function (e) {
                            var n = t[e.which || e.keyCode];
                            this._managePreventDefault(n, e), n && this._shouldTrigger(n, e) && this.trigger(n + "Keyed", e)
                        }, _onInput: function () {
                            this._checkInputValue()
                        }, _managePreventDefault: function (t, e) {
                            var n, r, o;
                            switch (t) {
                                case"tab":
                                    r = this.getHint(), o = this.getInputValue(), n = r && r !== o && !i(e);
                                    break;
                                case"up":
                                case"down":
                                    n = !i(e);
                                    break;
                                default:
                                    n = !1
                            }
                            n && e.preventDefault()
                        }, _shouldTrigger: function (t, e) {
                            var n;
                            switch (t) {
                                case"tab":
                                    n = !i(e);
                                    break;
                                default:
                                    n = !0
                            }
                            return n
                        }, _checkInputValue: function () {
                            var t, e, n, i, o;
                            t = this.getInputValue(), i = t, o = this.query, n = !!(e = r.normalizeQuery(i) === r.normalizeQuery(o)) && this.query.length !== t.length, this.query = t, e ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                        }, focus: function () {
                            this.$input.focus()
                        }, blur: function () {
                            this.$input.blur()
                        }, getQuery: function () {
                            return this.query
                        }, setQuery: function (t) {
                            this.query = t
                        }, getInputValue: function () {
                            return this.$input.val()
                        }, setInputValue: function (t, e) {
                            this.$input.val(t), e ? this.clearHint() : this._checkInputValue()
                        }, resetInputValue: function () {
                            this.setInputValue(this.query, !0)
                        }, getHint: function () {
                            return this.$hint.val()
                        }, setHint: function (t) {
                            this.$hint.val(t)
                        }, clearHint: function () {
                            this.setHint("")
                        }, clearHintIfInvalid: function () {
                            var t, e, n;
                            n = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), !("" !== t && n && !this.hasOverflow()) && this.clearHint()
                        }, getLanguageDirection: function () {
                            return (this.$input.css("direction") || "ltr").toLowerCase()
                        }, hasOverflow: function () {
                            var t = this.$input.width() - 2;
                            return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
                        }, isCursorAtEnd: function () {
                            var t, e, r;
                            return t = this.$input.val().length, e = this.$input[0].selectionStart, n.isNumber(e) ? e === t : !document.selection || ((r = document.selection.createRange()).moveStart("character", -t), t === r.text.length)
                        }, destroy: function () {
                            this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                        }
                    }), r;

                    function i(t) {
                        return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
                    }
                }(), m = function () {
                    "use strict";
                    var t = "ttDataset", r = "ttValue", i = "ttDatum";

                    function o(t) {
                        var r;
                        (t = t || {}).templates = t.templates || {}, t.source || e.error("missing source"), t.name && (r = t.name, !/^[_a-zA-Z0-9-]+$/.test(r)) && e.error("invalid dataset name: " + t.name), this.query = null, this.highlight = !!t.highlight, this.name = t.name || n.getUniqueId(), this.source = t.source, this.displayFn = function (t) {
                            return t = t || "value", n.isFunction(t) ? t : function (e) {
                                return e[t]
                            }
                        }(t.display || t.displayKey), this.templates = function (t, e) {
                            return {
                                empty: t.empty && n.templatify(t.empty),
                                header: t.header && n.templatify(t.header),
                                footer: t.footer && n.templatify(t.footer),
                                suggestion: t.suggestion || function (t) {
                                    return "<p>" + e(t) + "</p>"
                                }
                            }
                        }(t.templates, this.displayFn), this.$el = e(l.dataset.replace("%CLASS%", this.name))
                    }

                    return o.extractDatasetName = function (n) {
                        return e(n).data(t)
                    }, o.extractValue = function (t) {
                        return e(t).data(r)
                    }, o.extractDatum = function (t) {
                        return e(t).data(i)
                    }, n.mixin(o.prototype, d, {
                        _render: function (o, s) {
                            if (this.$el) {
                                var a, u = this;
                                this.$el.empty(), !(a = s && s.length) && this.templates.empty ? this.$el.html(u.templates.empty({
                                    query: o,
                                    isEmpty: !0
                                })).prepend(u.templates.header ? c() : null).append(u.templates.footer ? p() : null) : a && this.$el.html(function () {
                                    var a, c;
                                    return a = e(l.suggestions).css(h.suggestions), c = n.map(s, function (n) {
                                        var o;
                                        return (o = e(l.suggestion).append(u.templates.suggestion(n)).data(t, u.name).data(r, u.displayFn(n)).data(i, n)).children().each(function () {
                                            e(this).css(h.suggestionChild)
                                        }), o
                                    }), a.append.apply(a, c), u.highlight && f({
                                        className: "tt-highlight",
                                        node: a[0],
                                        pattern: o
                                    }), a
                                }()).prepend(u.templates.header ? c() : null).append(u.templates.footer ? p() : null), this.trigger("rendered")
                            }

                            function c() {
                                return u.templates.header({query: o, isEmpty: !a})
                            }

                            function p() {
                                return u.templates.footer({query: o, isEmpty: !a})
                            }
                        }, getRoot: function () {
                            return this.$el
                        }, update: function (t) {
                            var e = this;
                            this.query = t, this.canceled = !1, this.source(t, function (n) {
                                e.canceled || t !== e.query || e._render(t, n)
                            })
                        }, cancel: function () {
                            this.canceled = !0
                        }, clear: function () {
                            this.cancel(), this.$el.empty(), this.trigger("rendered")
                        }, isEmpty: function () {
                            return this.$el.is(":empty")
                        }, destroy: function () {
                            this.$el = null
                        }
                    }), o
                }(), y = function () {
                    "use strict";

                    function t(t) {
                        var i, o, s, a = this;
                        (t = t || {}).menu || e.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = n.map(t.datasets, r), i = n.bind(this._onSuggestionClick, this), o = n.bind(this._onSuggestionMouseEnter, this), s = n.bind(this._onSuggestionMouseLeave, this), this.$menu = e(t.menu).on("click.tt", ".tt-suggestion", i).on("mouseenter.tt", ".tt-suggestion", o).on("mouseleave.tt", ".tt-suggestion", s), n.each(this.datasets, function (t) {
                            a.$menu.append(t.getRoot()), t.onSync("rendered", a._onRendered, a)
                        })
                    }

                    return n.mixin(t.prototype, d, {
                        _onSuggestionClick: function (t) {
                            this.trigger("suggestionClicked", e(t.currentTarget))
                        }, _onSuggestionMouseEnter: function (t) {
                            this._removeCursor(), this._setCursor(e(t.currentTarget), !0)
                        }, _onSuggestionMouseLeave: function () {
                            this._removeCursor()
                        }, _onRendered: function () {
                            this.isEmpty = n.every(this.datasets, function (t) {
                                return t.isEmpty()
                            }), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
                        }, _hide: function () {
                            this.$menu.hide()
                        }, _show: function () {
                            this.$menu.css("display", "block")
                        }, _getSuggestions: function () {
                            return this.$menu.find(".tt-suggestion")
                        }, _getCursor: function () {
                            return this.$menu.find(".tt-cursor").first()
                        }, _setCursor: function (t, e) {
                            t.first().addClass("tt-cursor"), !e && this.trigger("cursorMoved")
                        }, _removeCursor: function () {
                            this._getCursor().removeClass("tt-cursor")
                        }, _moveCursor: function (t) {
                            var e, n, r, i;
                            this.isOpen && (n = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), -1 !== (r = ((r = e.index(n) + t) + 1) % (e.length + 1) - 1) ? (r < -1 && (r = e.length - 1), this._setCursor(i = e.eq(r)), this._ensureVisible(i)) : this.trigger("cursorRemoved"))
                        }, _ensureVisible: function (t) {
                            var e, n, r, i;
                            n = (e = t.position().top) + t.outerHeight(!0), r = this.$menu.scrollTop(), i = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), e < 0 ? this.$menu.scrollTop(r + e) : i < n && this.$menu.scrollTop(r + (n - i))
                        }, close: function () {
                            this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
                        }, open: function () {
                            this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                        }, setLanguageDirection: function (t) {
                            this.$menu.css("ltr" === t ? h.ltr : h.rtl)
                        }, moveCursorUp: function () {
                            this._moveCursor(-1)
                        }, moveCursorDown: function () {
                            this._moveCursor(1)
                        }, getDatumForSuggestion: function (t) {
                            var e = null;
                            return t.length && (e = {
                                raw: m.extractDatum(t),
                                value: m.extractValue(t),
                                datasetName: m.extractDatasetName(t)
                            }), e
                        }, getDatumForCursor: function () {
                            return this.getDatumForSuggestion(this._getCursor().first())
                        }, getDatumForTopSuggestion: function () {
                            return this.getDatumForSuggestion(this._getSuggestions().first())
                        }, update: function (t) {
                            n.each(this.datasets, function (e) {
                                e.update(t)
                            })
                        }, empty: function () {
                            n.each(this.datasets, function (t) {
                                t.clear()
                            }), this.isEmpty = !0
                        }, isVisible: function () {
                            return this.isOpen && !this.isEmpty
                        }, destroy: function () {
                            this.$menu.off(".tt"), this.$menu = null, n.each(this.datasets, function (t) {
                                t.destroy()
                            })
                        }
                    }), t;

                    function r(t) {
                        return new m(t)
                    }
                }(), v = function () {
                    "use strict";
                    var t = "ttAttrs";

                    function r(r) {
                        var i, o, s;
                        (r = r || {}).input || e.error("missing input"), this.isActivated = !1, this.autoselect = !!r.autoselect, this.minLength = n.isNumber(r.minLength) ? r.minLength : 1, this.$node = function (n, r) {
                            var i, o, s, a;
                            i = e(n), o = e(l.wrapper).css(h.wrapper), s = e(l.dropdown).css(h.dropdown), (a = i.clone().css(h.hint).css((u = i, {
                                backgroundAttachment: u.css("background-attachment"),
                                backgroundClip: u.css("background-clip"),
                                backgroundColor: u.css("background-color"),
                                backgroundImage: u.css("background-image"),
                                backgroundOrigin: u.css("background-origin"),
                                backgroundPosition: u.css("background-position"),
                                backgroundRepeat: u.css("background-repeat"),
                                backgroundSize: u.css("background-size")
                            }))).val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                                autocomplete: "off",
                                spellcheck: "false",
                                tabindex: -1
                            }), i.data(t, {
                                dir: i.attr("dir"),
                                autocomplete: i.attr("autocomplete"),
                                spellcheck: i.attr("spellcheck"),
                                style: i.attr("style")
                            }), i.addClass("tt-input").attr({
                                autocomplete: "off",
                                spellcheck: !1
                            }).css(r ? h.input : h.inputWithNoHint);
                            var u;
                            try {
                                !i.attr("dir") && i.attr("dir", "auto")
                            } catch (t) {
                            }
                            return i.wrap(o).parent().prepend(r ? a : null).append(s)
                        }(r.input, r.withHint), i = this.$node.find(".tt-dropdown-menu"), o = this.$node.find(".tt-input"), s = this.$node.find(".tt-hint"), o.on("blur.tt", function (t) {
                            var e, r, s;
                            e = document.activeElement, r = i.is(e), s = i.has(e).length > 0, n.isMsie() && (r || s) && (t.preventDefault(), t.stopImmediatePropagation(), n.defer(function () {
                                o.focus()
                            }))
                        }), i.on("mousedown.tt", function (t) {
                            t.preventDefault()
                        }), this.eventBus = r.eventBus || new p({el: o}), this.dropdown = new y({
                            menu: i,
                            datasets: r.datasets
                        }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new g({
                            input: o,
                            hint: s
                        }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
                    }

                    return n.mixin(r.prototype, {
                        _onSuggestionClicked: function (t, e) {
                            var n;
                            (n = this.dropdown.getDatumForSuggestion(e)) && this._select(n)
                        }, _onCursorMoved: function () {
                            var t = this.dropdown.getDatumForCursor();
                            this.input.setInputValue(t.value, !0), this.eventBus.trigger("cursorchanged", t.raw, t.datasetName)
                        }, _onCursorRemoved: function () {
                            this.input.resetInputValue(), this._updateHint()
                        }, _onDatasetRendered: function () {
                            this._updateHint()
                        }, _onOpened: function () {
                            this._updateHint(), this.eventBus.trigger("opened")
                        }, _onClosed: function () {
                            this.input.clearHint(), this.eventBus.trigger("closed")
                        }, _onFocused: function () {
                            this.isActivated = !0, this.dropdown.open()
                        }, _onBlurred: function () {
                            this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
                        }, _onEnterKeyed: function (t, e) {
                            var n, r;
                            n = this.dropdown.getDatumForCursor(), r = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), e.preventDefault()) : this.autoselect && r && (this._select(r), e.preventDefault())
                        }, _onTabKeyed: function (t, e) {
                            var n;
                            (n = this.dropdown.getDatumForCursor()) ? (this._select(n), e.preventDefault()) : this._autocomplete(!0)
                        }, _onEscKeyed: function () {
                            this.dropdown.close(), this.input.resetInputValue()
                        }, _onUpKeyed: function () {
                            var t = this.input.getQuery();
                            this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()
                        }, _onDownKeyed: function () {
                            var t = this.input.getQuery();
                            this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()
                        }, _onLeftKeyed: function () {
                            "rtl" === this.dir && this._autocomplete()
                        }, _onRightKeyed: function () {
                            "ltr" === this.dir && this._autocomplete()
                        }, _onQueryChanged: function (t, e) {
                            this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
                        }, _onWhitespaceChanged: function () {
                            this._updateHint(), this.dropdown.open()
                        }, _setLanguageDirection: function () {
                            var t;
                            this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
                        }, _updateHint: function () {
                            var t, e, r, i, o;
                            (t = this.dropdown.getDatumForTopSuggestion()) && this.dropdown.isVisible() && !this.input.hasOverflow() ? (e = this.input.getInputValue(), r = g.normalizeQuery(e), i = n.escapeRegExChars(r), (o = new RegExp("^(?:" + i + ")(.+$)", "i").exec(t.value)) ? this.input.setHint(e + o[1]) : this.input.clearHint()) : this.input.clearHint()
                        }, _autocomplete: function (t) {
                            var e, n, r, i;
                            e = this.input.getHint(), n = this.input.getQuery(), r = t || this.input.isCursorAtEnd(), e && n !== e && r && ((i = this.dropdown.getDatumForTopSuggestion()) && this.input.setInputValue(i.value), this.eventBus.trigger("autocompleted", i.raw, i.datasetName))
                        }, _select: function (t) {
                            this.input.setQuery(t.value), this.input.setInputValue(t.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", t.raw, t.datasetName), this.dropdown.close(), n.defer(n.bind(this.dropdown.empty, this.dropdown))
                        }, open: function () {
                            this.dropdown.open()
                        }, close: function () {
                            this.dropdown.close()
                        }, setVal: function (t) {
                            t = n.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection()
                        }, getVal: function () {
                            return this.input.getQuery()
                        }, destroy: function () {
                            var e, r;
                            this.input.destroy(), this.dropdown.destroy(), e = this.$node, r = e.find(".tt-input"), n.each(r.data(t), function (t, e) {
                                n.isUndefined(t) ? r.removeAttr(e) : r.attr(e, t)
                            }), r.detach().removeData(t).removeClass("tt-input").insertAfter(e), e.remove(), this.$node = null
                        }
                    }), r
                }();
                !function () {
                    "use strict";
                    var t, r, i;
                    t = e.fn.typeahead, r = "ttTypeahead", i = {
                        initialize: function (t, i) {
                            return i = n.isArray(i) ? i : [].slice.call(arguments, 1), t = t || {}, this.each(function () {
                                var o, s = e(this);
                                n.each(i, function (e) {
                                    e.highlight = !!t.highlight
                                }), o = new v({
                                    input: s,
                                    eventBus: new p({el: s}),
                                    withHint: !!n.isUndefined(t.hint) || !!t.hint,
                                    minLength: t.minLength,
                                    autoselect: t.autoselect,
                                    datasets: i
                                }), s.data(r, o)
                            })
                        }, open: function () {
                            return this.each(function () {
                                var t, n = e(this);
                                (t = n.data(r)) && t.open()
                            })
                        }, close: function () {
                            return this.each(function () {
                                var t, n = e(this);
                                (t = n.data(r)) && t.close()
                            })
                        }, val: function (t) {
                            return arguments.length ? this.each(function () {
                                var n, i = e(this);
                                (n = i.data(r)) && n.setVal(t)
                            }) : function (t) {
                                var e, n;
                                (e = t.data(r)) && (n = e.getVal());
                                return n
                            }(this.first())
                        }, destroy: function () {
                            return this.each(function () {
                                var t, n = e(this);
                                (t = n.data(r)) && (t.destroy(), n.removeData(r))
                            })
                        }
                    }, e.fn.typeahead = function (t) {
                        var n;
                        return i[t] && "initialize" !== t ? (n = this.filter(function () {
                            return !!e(this).data(r)
                        }), i[t].apply(n, [].slice.call(arguments, 1))) : i.initialize.apply(this, arguments)
                    }, e.fn.typeahead.noConflict = function () {
                        return e.fn.typeahead = t, this
                    }
                }()
            }(window.jQuery)
        }).call(this, n("URgk").setImmediate)
    }, "5HLv": function (t, e, n) {
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        !function (t) {
            function e(t, e, n) {
                var i;
                return e && "object" == r(e) && (void 0 !== e[t] ? i = e[t] : n && e.get && "function" == typeof e.get && (i = e.get(t))), i
            }

            t.Template = function (t, e, n, r) {
                t = t || {}, this.r = t.code || this.r, this.c = n, this.options = r || {}, this.text = e || "", this.partials = t.partials || {}, this.subs = t.subs || {}, this.buf = ""
            }, t.Template.prototype = {
                r: function (t, e, n) {
                    return ""
                }, v: function (t) {
                    return t = c(t), u.test(t) ? t.replace(n, "&amp;").replace(i, "&lt;").replace(o, "&gt;").replace(s, "&#39;").replace(a, "&quot;") : t
                }, t: c, render: function (t, e, n) {
                    return this.ri([t], e || {}, n)
                }, ri: function (t, e, n) {
                    return this.r(t, e, n)
                }, ep: function (t, e) {
                    var n = this.partials[t], r = e[n.name];
                    if (n.instance && n.base == r) return n.instance;
                    if ("string" == typeof r) {
                        if (!this.c) throw new Error("No compiler available.");
                        r = this.c.compile(r, this.options)
                    }
                    if (!r) return null;
                    if (this.partials[t].base = r, n.subs) {
                        for (key in e.stackText || (e.stackText = {}), n.subs) e.stackText[key] || (e.stackText[key] = void 0 !== this.activeSub && e.stackText[this.activeSub] ? e.stackText[this.activeSub] : this.text);
                        r = function (t, e, n, r, i, o) {
                            function s() {
                            }

                            function a() {
                            }

                            var u;
                            s.prototype = t, a.prototype = t.subs;
                            var c = new s;
                            for (u in c.subs = new a, c.subsText = {}, c.buf = "", r = r || {}, c.stackSubs = r, c.subsText = o, e) r[u] || (r[u] = e[u]);
                            for (u in r) c.subs[u] = r[u];
                            for (u in i = i || {}, c.stackPartials = i, n) i[u] || (i[u] = n[u]);
                            for (u in i) c.partials[u] = i[u];
                            return c
                        }(r, n.subs, n.partials, this.stackSubs, this.stackPartials, e.stackText)
                    }
                    return this.partials[t].instance = r, r
                }, rp: function (t, e, n, r) {
                    var i = this.ep(t, n);
                    return i ? i.ri(e, n, r) : ""
                }, rs: function (t, e, n) {
                    var r = t[t.length - 1];
                    if (l(r)) for (var i = 0; i < r.length; i++) t.push(r[i]), n(t, e, this), t.pop(); else n(t, e, this)
                }, s: function (t, e, n, i, o, s, a) {
                    var u;
                    return (!l(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ms(t, e, n, i, o, s, a)), u = !!t, !i && u && e && e.push("object" == r(t) ? t : e[e.length - 1]), u)
                }, d: function (t, n, r, i) {
                    var o, s = t.split("."), a = this.f(s[0], n, r, i), u = this.options.modelGet, c = null;
                    if ("." === t && l(n[n.length - 2])) a = n[n.length - 1]; else for (var h = 1; h < s.length; h++) void 0 !== (o = e(s[h], a, u)) ? (c = a, a = o) : a = "";
                    return !(i && !a) && (i || "function" != typeof a || (n.push(c), a = this.mv(a, n, r), n.pop()), a)
                }, f: function (t, n, r, i) {
                    for (var o = !1, s = !1, a = this.options.modelGet, u = n.length - 1; u >= 0; u--) if (void 0 !== (o = e(t, n[u], a))) {
                        s = !0;
                        break
                    }
                    return s ? (i || "function" != typeof o || (o = this.mv(o, n, r)), o) : !i && ""
                }, ls: function (t, e, n, r, i) {
                    var o = this.options.delimiters;
                    return this.options.delimiters = i, this.b(this.ct(c(t.call(e, r)), e, n)), this.options.delimiters = o, !1
                }, ct: function (t, e, n) {
                    if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                    return this.c.compile(t, this.options).render(e, n)
                }, b: function (t) {
                    this.buf += t
                }, fl: function () {
                    var t = this.buf;
                    return this.buf = "", t
                }, ms: function (t, e, n, r, i, o, s) {
                    var a, u = e[e.length - 1], c = t.call(u);
                    return "function" == typeof c ? !!r || (a = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, u, n, a.substring(i, o), s)) : c
                }, mv: function (t, e, n) {
                    var r = e[e.length - 1], i = t.call(r);
                    return "function" == typeof i ? this.ct(c(i.call(r)), r, n) : i
                }, sub: function (t, e, n, r) {
                    var i = this.subs[t];
                    i && (this.activeSub = t, i(e, n, this, r), this.activeSub = !1)
                }
            };
            var n = /&/g, i = /</g, o = />/g, s = /\'/g, a = /\"/g, u = /[&<>\"\']/;

            function c(t) {
                return String(null == t ? "" : t)
            }

            var l = Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        }(e), function (t) {
            var e = /\S/, n = /\"/g, r = /\n/g, i = /\r/g, o = /\\/g, s = /\u2028/, a = /\u2029/;

            function u(t) {
                "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1))
            }

            function c(t) {
                return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
            }

            function l(t, e, n) {
                if (e.charAt(n) != t.charAt(0)) return !1;
                for (var r = 1, i = t.length; r < i; r++) if (e.charAt(n + r) != t.charAt(r)) return !1;
                return !0
            }

            t.tags = {
                "#": 1,
                "^": 2,
                "<": 3,
                $: 4,
                "/": 5,
                "!": 6,
                ">": 7,
                "=": 8,
                _v: 9,
                "{": 10,
                "&": 11,
                _t: 12
            }, t.scan = function (n, r) {
                var i = n.length, o = 0, s = null, a = null, h = "", p = [], d = !1, f = 0, g = 0, m = "{{", y = "}}";

                function v() {
                    h.length > 0 && (p.push({tag: "_t", text: new String(h)}), h = "")
                }

                function b(n, r) {
                    if (v(), n && function () {
                        for (var n = !0, r = g; r < p.length; r++) if (!(n = t.tags[p[r].tag] < t.tags._v || "_t" == p[r].tag && null === p[r].text.match(e))) return !1;
                        return n
                    }()) for (var i, o = g; o < p.length; o++) p[o].text && ((i = p[o + 1]) && ">" == i.tag && (i.indent = p[o].text.toString()), p.splice(o, 1)); else r || p.push({tag: "\n"});
                    d = !1, g = p.length
                }

                function w(t, e) {
                    var n = "=" + y, r = t.indexOf(n, e), i = c(t.substring(t.indexOf("=", e) + 1, r)).split(" ");
                    return m = i[0], y = i[i.length - 1], r + n.length - 1
                }

                for (r && (r = r.split(" "), m = r[0], y = r[1]), f = 0; f < i; f++) 0 == o ? l(m, n, f) ? (--f, v(), o = 1) : "\n" == n.charAt(f) ? b(d) : h += n.charAt(f) : 1 == o ? (f += m.length - 1, "=" == (s = (a = t.tags[n.charAt(f + 1)]) ? n.charAt(f + 1) : "_v") ? (f = w(n, f), o = 0) : (a && f++, o = 2), d = f) : l(y, n, f) ? (p.push({
                    tag: s,
                    n: c(h),
                    otag: m,
                    ctag: y,
                    i: "/" == s ? d - m.length : f + y.length
                }), h = "", f += y.length - 1, o = 0, "{" == s && ("}}" == y ? f++ : u(p[p.length - 1]))) : h += n.charAt(f);
                return b(d, !0), p
            };
            var h = {_t: !0, "\n": !0, $: !0, "/": !0};

            function p(t, e) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n].o == t.n) return t.tag = "#", !0
            }

            function d(t, e, n) {
                for (var r = 0, i = n.length; r < i; r++) if (n[r].c == t && n[r].o == e) return !0
            }

            function f(t) {
                var e = [];
                for (var n in t.partials) e.push('"' + m(n) + '":{name:"' + m(t.partials[n].name) + '", ' + f(t.partials[n]) + "}");
                return "partials: {" + e.join(",") + "}, subs: " + function (t) {
                    var e = [];
                    for (var n in t) e.push('"' + m(n) + '": function(c,p,t,i) {' + t[n] + "}");
                    return "{ " + e.join(",") + " }"
                }(t.subs)
            }

            t.stringify = function (e, n, r) {
                return "{code: function (c,p,i) { " + t.wrapMain(e.code) + " }," + f(e) + "}"
            };
            var g = 0;

            function m(t) {
                return t.replace(o, "\\\\").replace(n, '\\"').replace(r, "\\n").replace(i, "\\r").replace(s, "\\u2028").replace(a, "\\u2029")
            }

            function y(t) {
                return ~t.indexOf(".") ? "d" : "f"
            }

            function v(t, e) {
                var n = "<" + (e.prefix || "") + t.n + g++;
                return e.partials[n] = {
                    name: t.n,
                    partials: {}
                }, e.code += 't.b(t.rp("' + m(n) + '",c,p,"' + (t.indent || "") + '"));', n
            }

            function b(t, e) {
                e.code += "t.b(t.t(t." + y(t.n) + '("' + m(t.n) + '",c,p,0)));'
            }

            function w(t) {
                return "t.b(" + t + ");"
            }

            t.generate = function (e, n, r) {
                g = 0;
                var i = {code: "", subs: {}, partials: {}};
                return t.walk(e, i), r.asString ? this.stringify(i, n, r) : this.makeTemplate(i, n, r)
            }, t.wrapMain = function (t) {
                return 'var t=this;t.b(i=i||"");' + t + "return t.fl();"
            }, t.template = t.Template, t.makeTemplate = function (t, e, n) {
                var r = this.makePartials(t);
                return r.code = new Function("c", "p", "i", this.wrapMain(t.code)), new this.template(r, e, this, n)
            }, t.makePartials = function (t) {
                var e, n = {subs: {}, partials: t.partials, name: t.name};
                for (e in n.partials) n.partials[e] = this.makePartials(n.partials[e]);
                for (e in t.subs) n.subs[e] = new Function("c", "p", "t", "i", t.subs[e]);
                return n
            }, t.codegen = {
                "#": function (e, n) {
                    n.code += "if(t.s(t." + y(e.n) + '("' + m(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += "});c.pop();}"
                }, "^": function (e, n) {
                    n.code += "if(!t.s(t." + y(e.n) + '("' + m(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += "};"
                }, ">": v, "<": function (e, n) {
                    var r = {partials: {}, code: "", subs: {}, inPartial: !0};
                    t.walk(e.nodes, r);
                    var i = n.partials[v(e, n)];
                    i.subs = r.subs, i.partials = r.partials
                }, $: function (e, n) {
                    var r = {subs: {}, code: "", partials: n.partials, prefix: e.n};
                    t.walk(e.nodes, r), n.subs[e.n] = r.code, n.inPartial || (n.code += 't.sub("' + m(e.n) + '",c,p,i);')
                }, "\n": function (t, e) {
                    e.code += w('"\\n"' + (t.last ? "" : " + i"))
                }, _v: function (t, e) {
                    e.code += "t.b(t.v(t." + y(t.n) + '("' + m(t.n) + '",c,p,0)));'
                }, _t: function (t, e) {
                    e.code += w('"' + m(t.text) + '"')
                }, "{": b, "&": b
            }, t.walk = function (e, n) {
                for (var r, i = 0, o = e.length; i < o; i++) (r = t.codegen[e[i].tag]) && r(e[i], n);
                return n
            }, t.parse = function (e, n, r) {
                return function e(n, r, i, o) {
                    var s, a = [], u = null, c = null;
                    for (s = i[i.length - 1]; n.length > 0;) {
                        if (c = n.shift(), s && "<" == s.tag && !(c.tag in h)) throw new Error("Illegal content in < super tag.");
                        if (t.tags[c.tag] <= t.tags.$ || p(c, o)) i.push(c), c.nodes = e(n, c.tag, i, o); else {
                            if ("/" == c.tag) {
                                if (0 === i.length) throw new Error("Closing tag without opener: /" + c.n);
                                if (u = i.pop(), c.n != u.n && !d(c.n, u.n, o)) throw new Error("Nesting error: " + u.n + " vs. " + c.n);
                                return u.end = c.i, a
                            }
                            "\n" == c.tag && (c.last = 0 == n.length || "\n" == n[0].tag)
                        }
                        a.push(c)
                    }
                    if (i.length > 0) throw new Error("missing closing tag: " + i.pop().n);
                    return a
                }(e, 0, [], (r = r || {}).sectionTags || [])
            }, t.cache = {}, t.cacheKey = function (t, e) {
                return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join("||")
            }, t.compile = function (e, n) {
                n = n || {};
                var r = t.cacheKey(e, n), i = this.cache[r];
                if (i) {
                    var o = i.partials;
                    for (var s in o) delete o[s].instance;
                    return i
                }
                return i = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[r] = i
            }
        }(e)
    }, "5b4q": function (t, e, n) {
        (function (e) {
            var n = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
                r = function () {
                    var t = /\blang(?:uage)?-([\w-]+)\b/i, e = 0, r = n.Prism = {
                        manual: n.Prism && n.Prism.manual,
                        disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
                        util: {
                            encode: function (t) {
                                return t instanceof i ? new i(t.type, r.util.encode(t.content), t.alias) : "Array" === r.util.type(t) ? t.map(r.util.encode) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                            }, type: function (t) {
                                return Object.prototype.toString.call(t).slice(8, -1)
                            }, objId: function (t) {
                                return t.__id || Object.defineProperty(t, "__id", {value: ++e}), t.__id
                            }, clone: function (t, e) {
                                var n = r.util.type(t);
                                switch (e = e || {}, n) {
                                    case"Object":
                                        if (e[r.util.objId(t)]) return e[r.util.objId(t)];
                                        var i = {};
                                        for (var o in e[r.util.objId(t)] = i, t) t.hasOwnProperty(o) && (i[o] = r.util.clone(t[o], e));
                                        return i;
                                    case"Array":
                                        if (e[r.util.objId(t)]) return e[r.util.objId(t)];
                                        i = [];
                                        return e[r.util.objId(t)] = i, t.forEach(function (t, n) {
                                            i[n] = r.util.clone(t, e)
                                        }), i
                                }
                                return t
                            }
                        },
                        languages: {
                            extend: function (t, e) {
                                var n = r.util.clone(r.languages[t]);
                                for (var i in e) n[i] = e[i];
                                return n
                            }, insertBefore: function (t, e, n, i) {
                                var o = (i = i || r.languages)[t], s = {};
                                for (var a in o) if (o.hasOwnProperty(a)) {
                                    if (a == e) for (var u in n) n.hasOwnProperty(u) && (s[u] = n[u]);
                                    n.hasOwnProperty(a) || (s[a] = o[a])
                                }
                                var c = i[t];
                                return i[t] = s, r.languages.DFS(r.languages, function (e, n) {
                                    n === c && e != t && (this[e] = s)
                                }), s
                            }, DFS: function (t, e, n, i) {
                                for (var o in i = i || {}, t) t.hasOwnProperty(o) && (e.call(t, o, t[o], n || o), "Object" !== r.util.type(t[o]) || i[r.util.objId(t[o])] ? "Array" !== r.util.type(t[o]) || i[r.util.objId(t[o])] || (i[r.util.objId(t[o])] = !0, r.languages.DFS(t[o], e, o, i)) : (i[r.util.objId(t[o])] = !0, r.languages.DFS(t[o], e, null, i)))
                            }
                        },
                        plugins: {},
                        highlightAll: function (t, e) {
                            r.highlightAllUnder(document, t, e)
                        },
                        highlightAllUnder: function (t, e, n) {
                            var i = {
                                callback: n,
                                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                            };
                            r.hooks.run("before-highlightall", i);
                            for (var o, s = i.elements || t.querySelectorAll(i.selector), a = 0; o = s[a++];) r.highlightElement(o, !0 === e, i.callback)
                        },
                        highlightElement: function (e, i, o) {
                            for (var s, a, u = e; u && !t.test(u.className);) u = u.parentNode;
                            u && (s = (u.className.match(t) || [, ""])[1].toLowerCase(), a = r.languages[s]), e.className = e.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s, e.parentNode && (u = e.parentNode, /pre/i.test(u.nodeName) && (u.className = u.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s));
                            var c = {element: e, language: s, grammar: a, code: e.textContent}, l = function (t) {
                                c.highlightedCode = t, r.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r.hooks.run("after-highlight", c), r.hooks.run("complete", c), o && o.call(c.element)
                            };
                            if (r.hooks.run("before-sanity-check", c), c.code) if (r.hooks.run("before-highlight", c), c.grammar) if (i && n.Worker) {
                                var h = new Worker(r.filename);
                                h.onmessage = function (t) {
                                    l(t.data)
                                }, h.postMessage(JSON.stringify({
                                    language: c.language,
                                    code: c.code,
                                    immediateClose: !0
                                }))
                            } else l(r.highlight(c.code, c.grammar, c.language)); else l(r.util.encode(c.code)); else r.hooks.run("complete", c)
                        },
                        highlight: function (t, e, n) {
                            var o = {code: t, grammar: e, language: n};
                            return r.hooks.run("before-tokenize", o), o.tokens = r.tokenize(o.code, o.grammar), r.hooks.run("after-tokenize", o), i.stringify(r.util.encode(o.tokens), o.language)
                        },
                        matchGrammar: function (t, e, n, i, o, s, a) {
                            var u = r.Token;
                            for (var c in n) if (n.hasOwnProperty(c) && n[c]) {
                                if (c == a) return;
                                var l = n[c];
                                l = "Array" === r.util.type(l) ? l : [l];
                                for (var h = 0; h < l.length; ++h) {
                                    var p = l[h], d = p.inside, f = !!p.lookbehind, g = !!p.greedy, m = 0, y = p.alias;
                                    if (g && !p.pattern.global) {
                                        var v = p.pattern.toString().match(/[imuy]*$/)[0];
                                        p.pattern = RegExp(p.pattern.source, v + "g")
                                    }
                                    p = p.pattern || p;
                                    for (var b = i, w = o; b < e.length; w += e[b].length, ++b) {
                                        var _ = e[b];
                                        if (e.length > t.length) return;
                                        if (!(_ instanceof u)) {
                                            if (g && b != e.length - 1) {
                                                if (p.lastIndex = w, !(T = p.exec(t))) break;
                                                for (var x = T.index + (f ? T[1].length : 0), k = T.index + T[0].length, j = b, S = w, A = e.length; A > j && (k > S || !e[j].type && !e[j - 1].greedy); ++j) x >= (S += e[j].length) && (++b, w = S);
                                                if (e[b] instanceof u) continue;
                                                C = j - b, _ = t.slice(w, S), T.index -= w
                                            } else {
                                                p.lastIndex = 0;
                                                var T = p.exec(_), C = 1
                                            }
                                            if (T) {
                                                f && (m = T[1] ? T[1].length : 0);
                                                k = (x = T.index + m) + (T = T[0].slice(m)).length;
                                                var I = _.slice(0, x), O = _.slice(k), E = [b, C];
                                                I && (++b, w += I.length, E.push(I));
                                                var P = new u(c, d ? r.tokenize(T, d) : T, y, T, g);
                                                if (E.push(P), O && E.push(O), Array.prototype.splice.apply(e, E), 1 != C && r.matchGrammar(t, e, n, b, w, !0, c), s) break
                                            } else if (s) break
                                        }
                                    }
                                }
                            }
                        },
                        tokenize: function (t, e) {
                            var n = [t], i = e.rest;
                            if (i) {
                                for (var o in i) e[o] = i[o];
                                delete e.rest
                            }
                            return r.matchGrammar(t, n, e, 0, 0, !1), n
                        },
                        hooks: {
                            all: {}, add: function (t, e) {
                                var n = r.hooks.all;
                                n[t] = n[t] || [], n[t].push(e)
                            }, run: function (t, e) {
                                var n = r.hooks.all[t];
                                if (n && n.length) for (var i, o = 0; i = n[o++];) i(e)
                            }
                        }
                    }, i = r.Token = function (t, e, n, r, i) {
                        this.type = t, this.content = e, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!i
                    };
                    if (i.stringify = function (t, e, n) {
                        if ("string" == typeof t) return t;
                        if ("Array" === r.util.type(t)) return t.map(function (n) {
                            return i.stringify(n, e, t)
                        }).join("");
                        var o = {
                            type: t.type,
                            content: i.stringify(t.content, e, n),
                            tag: "span",
                            classes: ["token", t.type],
                            attributes: {},
                            language: e,
                            parent: n
                        };
                        if (t.alias) {
                            var s = "Array" === r.util.type(t.alias) ? t.alias : [t.alias];
                            Array.prototype.push.apply(o.classes, s)
                        }
                        r.hooks.run("wrap", o);
                        var a = Object.keys(o.attributes).map(function (t) {
                            return t + '="' + (o.attributes[t] || "").replace(/"/g, "&quot;") + '"'
                        }).join(" ");
                        return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + o.content + "</" + o.tag + ">"
                    }, !n.document) return n.addEventListener ? (r.disableWorkerMessageHandler || n.addEventListener("message", function (t) {
                        var e = JSON.parse(t.data), i = e.language, o = e.code, s = e.immediateClose;
                        n.postMessage(r.highlight(o, r.languages[i], i)), s && n.close()
                    }, !1), n.Prism) : n.Prism;
                    var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
                    return o && (r.filename = o.src, r.manual || o.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(r.highlightAll) : window.setTimeout(r.highlightAll, 16) : document.addEventListener("DOMContentLoaded", r.highlightAll))), n.Prism
                }();
            t.exports && (t.exports = r), void 0 !== e && (e.Prism = r), r.languages.markup = {
                comment: /<!--[\s\S]*?-->/,
                prolog: /<\?[\s\S]+?\?>/,
                doctype: /<!DOCTYPE[\s\S]+?>/i,
                cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
                    greedy: !0,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/i,
                            inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}
                        },
                        "attr-value": {
                            pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                            inside: {punctuation: [/^=/, {pattern: /(^|[^\\])["']/, lookbehind: !0}]}
                        },
                        punctuation: /\/?>/,
                        "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
                    }
                },
                entity: /&#?[\da-z]{1,8};/i
            }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.hooks.add("wrap", function (t) {
                "entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))
            }), r.languages.xml = r.languages.extend("markup", {}), r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
                url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
                selector: /[^{}\s][^{};]*?(?=\s*\{)/,
                string: {pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
                property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
                important: /!important\b/i,
                function: /[-a-z0-9]+(?=\()/i,
                punctuation: /[(){};:,]/
            }, r.languages.css.atrule.inside.rest = r.languages.css, r.languages.markup && (r.languages.insertBefore("markup", "tag", {
                style: {
                    pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                    lookbehind: !0,
                    inside: r.languages.css,
                    alias: "language-css",
                    greedy: !0
                }
            }), r.languages.insertBefore("inside", "attr-value", {
                "style-attr": {
                    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                    inside: {
                        "attr-name": {pattern: /^\s*style/i, inside: r.languages.markup.tag.inside},
                        punctuation: /^\s*=\s*['"]|['"]\s*$/,
                        "attr-value": {pattern: /.+/i, inside: r.languages.css}
                    },
                    alias: "language-css"
                }
            }, r.languages.markup.tag)), r.languages.clike = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0
                }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
                string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
                "class-name": {
                    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
                    lookbehind: !0,
                    inside: {punctuation: /[.\\]/}
                },
                keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                boolean: /\b(?:true|false)\b/,
                function: /\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
                punctuation: /[{}[\];(),.:]/
            }, r.languages.javascript = r.languages.extend("clike", {
                "class-name": [r.languages.clike["class-name"], {
                    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                    lookbehind: !0
                }],
                keyword: [{
                    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                    lookbehind: !0
                }, /\b(?:as|async|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/],
                number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
                function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\(|\.(?:apply|bind|call)\()/,
                operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
            }), r.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, r.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
                    lookbehind: !0,
                    greedy: !0
                },
                "function-variable": {
                    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
                    alias: "function"
                },
                parameter: [{
                    pattern: /(function(?:\s+[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)[^\s()][^()]*?(?=\s*\))/,
                    lookbehind: !0,
                    inside: r.languages.javascript
                }, {
                    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/,
                    inside: r.languages.javascript
                }, {
                    pattern: /(\(\s*)[^\s()][^()]*?(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: r.languages.javascript
                }, {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)[^\s()][^()]*?(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: r.languages.javascript
                }],
                constant: /\b[A-Z][A-Z\d_]*\b/
            }), r.languages.insertBefore("javascript", "string", {
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /\${[^}]+}/,
                            inside: {
                                "interpolation-punctuation": {pattern: /^\${|}$/, alias: "punctuation"},
                                rest: r.languages.javascript
                            }
                        }, string: /[\s\S]+/
                    }
                }
            }), r.languages.markup && r.languages.insertBefore("markup", "tag", {
                script: {
                    pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                    lookbehind: !0,
                    inside: r.languages.javascript,
                    alias: "language-javascript",
                    greedy: !0
                }
            }), r.languages.js = r.languages.javascript, r.languages["markup-templating"] = {}, Object.defineProperties(r.languages["markup-templating"], {
                buildPlaceholders: {
                    value: function (t, e, n, i) {
                        t.language === e && (t.tokenStack = [], t.code = t.code.replace(n, function (n) {
                            if ("function" == typeof i && !i(n)) return n;
                            for (var r = t.tokenStack.length; -1 !== t.code.indexOf("___" + e.toUpperCase() + r + "___");) ++r;
                            return t.tokenStack[r] = n, "___" + e.toUpperCase() + r + "___"
                        }), t.grammar = r.languages.markup)
                    }
                }, tokenizePlaceholders: {
                    value: function (t, e) {
                        if (t.language === e && t.tokenStack) {
                            t.grammar = r.languages[e];
                            var n = 0, i = Object.keys(t.tokenStack);
                            !function o(s) {
                                if (!(n >= i.length)) for (var a = 0; a < s.length; a++) {
                                    var u = s[a];
                                    if ("string" == typeof u || u.content && "string" == typeof u.content) {
                                        var c = i[n], l = t.tokenStack[c], h = "string" == typeof u ? u : u.content,
                                            p = h.indexOf("___" + e.toUpperCase() + c + "___");
                                        if (p > -1) {
                                            ++n;
                                            var d, f = h.substring(0, p),
                                                g = new r.Token(e, r.tokenize(l, t.grammar, e), "language-" + e, l),
                                                m = h.substring(p + ("___" + e.toUpperCase() + c + "___").length);
                                            if (f || m ? o(d = [f, g, m].filter(function (t) {
                                                return !!t
                                            })) : d = g, "string" == typeof u ? Array.prototype.splice.apply(s, [a, 1].concat(d)) : u.content = d, n >= i.length) break
                                        }
                                    } else u.content && "string" != typeof u.content && o(u.content)
                                }
                            }(t.tokens)
                        }
                    }
                }
            }), function (t) {
                t.languages.php = t.languages.extend("clike", {
                    keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
                    boolean: {pattern: /\b(?:false|true)\b/i, alias: "constant"},
                    constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
                    comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0}
                }), t.languages.insertBefore("php", "string", {
                    "shell-comment": {
                        pattern: /(^|[^\\])#.*/,
                        lookbehind: !0,
                        alias: "comment"
                    }
                }), t.languages.insertBefore("php", "keyword", {
                    delimiter: {
                        pattern: /\?>|<\?(?:php|=)?/i,
                        alias: "important"
                    },
                    variable: /\$+(?:\w+\b|(?={))/i,
                    package: {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: {punctuation: /\\/}}
                }), t.languages.insertBefore("php", "operator", {property: {pattern: /(->)[\w]+/, lookbehind: !0}});
                var e = {
                    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
                    lookbehind: !0,
                    inside: {rest: t.languages.php}
                };
                t.languages.insertBefore("php", "string", {
                    "nowdoc-string": {
                        pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            delimiter: {
                                pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                                alias: "symbol",
                                inside: {punctuation: /^<<<'?|[';]$/}
                            }
                        }
                    },
                    "heredoc-string": {
                        pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            delimiter: {
                                pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                                alias: "symbol",
                                inside: {punctuation: /^<<<"?|[";]$/}
                            }, interpolation: e
                        }
                    },
                    "single-quoted-string": {pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string"},
                    "double-quoted-string": {
                        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                        greedy: !0,
                        alias: "string",
                        inside: {interpolation: e}
                    }
                }), delete t.languages.php.string, t.hooks.add("before-tokenize", function (e) {
                    if (/(?:<\?php|<\?)/gi.test(e.code)) {
                        t.languages["markup-templating"].buildPlaceholders(e, "php", /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)
                    }
                }), t.hooks.add("after-tokenize", function (e) {
                    t.languages["markup-templating"].tokenizePlaceholders(e, "php")
                })
            }(r), function () {
                if ("undefined" != typeof self && self.Prism && self.document) {
                    var t = "line-numbers", e = /\n(?!$)/g, n = function (t) {
                        var n = i(t), r = n["white-space"];
                        if ("pre-wrap" === r || "pre-line" === r) {
                            var o = t.querySelector("code"), s = t.querySelector(".line-numbers-rows"),
                                a = t.querySelector(".line-numbers-sizer"), u = o.textContent.split(e);
                            a || ((a = document.createElement("span")).className = "line-numbers-sizer", o.appendChild(a)), a.style.display = "block", u.forEach(function (t, e) {
                                a.textContent = t || "\n";
                                var n = a.getBoundingClientRect().height;
                                s.children[e].style.height = n + "px"
                            }), a.textContent = "", a.style.display = "none"
                        }
                    }, i = function (t) {
                        return t ? window.getComputedStyle ? getComputedStyle(t) : t.currentStyle || null : null
                    };
                    window.addEventListener("resize", function () {
                        Array.prototype.forEach.call(document.querySelectorAll("pre." + t), n)
                    }), r.hooks.add("complete", function (t) {
                        if (t.code) {
                            var i = t.element.parentNode, o = /\s*\bline-numbers\b\s*/;
                            if (i && /pre/i.test(i.nodeName) && (o.test(i.className) || o.test(t.element.className)) && !t.element.querySelector(".line-numbers-rows")) {
                                o.test(t.element.className) && (t.element.className = t.element.className.replace(o, " ")), o.test(i.className) || (i.className += " line-numbers");
                                var s, a = t.code.match(e), u = a ? a.length + 1 : 1, c = new Array(u + 1);
                                c = c.join("<span></span>"), (s = document.createElement("span")).setAttribute("aria-hidden", "true"), s.className = "line-numbers-rows", s.innerHTML = c, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), t.element.appendChild(s), n(i), r.hooks.run("line-numbers", t)
                            }
                        }
                    }), r.hooks.add("line-numbers", function (t) {
                        t.plugins = t.plugins || {}, t.plugins.lineNumbers = !0
                    }), r.plugins.lineNumbers = {
                        getLine: function (e, n) {
                            if ("PRE" === e.tagName && e.classList.contains(t)) {
                                var r = e.querySelector(".line-numbers-rows"),
                                    i = parseInt(e.getAttribute("data-start"), 10) || 1,
                                    o = i + (r.children.length - 1);
                                i > n && (n = i), n > o && (n = o);
                                var s = n - i;
                                return r.children[s]
                            }
                        }
                    }
                }
            }()
        }).call(this, n("yLpj"))
    }, "8oxB": function (t, e) {
        var n, r, i = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }

        !function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                n = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (t) {
                r = s
            }
        }();
        var u, c = [], l = !1, h = -1;

        function p() {
            l && u && (l = !1, u.length ? c = u.concat(c) : h = -1, c.length && d())
        }

        function d() {
            if (!l) {
                var t = a(p);
                l = !0;
                for (var e = c.length; e;) {
                    for (u = c, c = []; ++h < e;) u && u[h].run();
                    h = -1, e = c.length
                }
                u = null, l = !1, function (t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                    try {
                        r(t)
                    } catch (e) {
                        try {
                            return r.call(null, t)
                        } catch (e) {
                            return r.call(this, t)
                        }
                    }
                }(t)
            }
        }

        function f(t, e) {
            this.fun = t, this.array = e
        }

        function g() {
        }

        i.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new f(t, e)), 1 !== c.length || l || a(d)
        }, f.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function (t) {
            return []
        }, i.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function () {
            return "/"
        }, i.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function () {
            return 0
        }
    }, "Fo9+": function (t, e, n) {
        (function (n, r) {
            var i, o, s, a, u, c;

            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            "undefined" != typeof window ? u = window : "undefined" != typeof self && (u = self), u.ALGOLIA_MIGRATION_LAYER = function t(e, n, r) {
                function i(s, u) {
                    if (!n[s]) {
                        if (!e[s]) {
                            var c = "function" == typeof a && a;
                            if (!u && c) return a(s, !0);
                            if (o) return o(s, !0);
                            var l = new Error("Cannot find module '" + s + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var h = n[s] = {exports: {}};
                        e[s][0].call(h.exports, function (t) {
                            var n = e[s][1][t];
                            return i(n || t)
                        }, h, h.exports, t, e, n, r)
                    }
                    return n[s].exports
                }

                for (var o = "function" == typeof a && a, s = 0; s < r.length; s++) i(r[s]);
                return i
            }({
                1: [function (t, e, n) {
                    function r(t, e) {
                        t.onload = function () {
                            this.onerror = this.onload = null, e(null, t)
                        }, t.onerror = function () {
                            this.onerror = this.onload = null, e(new Error("Failed to load " + this.src), t)
                        }
                    }

                    function i(t, e) {
                        t.onreadystatechange = function () {
                            "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, e(null, t))
                        }
                    }

                    e.exports = function (t, e, n) {
                        var o = document.head || document.getElementsByTagName("head")[0],
                            s = document.createElement("script");
                        "function" == typeof e && (n = e, e = {}), e = e || {}, n = n || function () {
                        }, s.type = e.type || "text/javascript", s.charset = e.charset || "utf8", s.async = !("async" in e && !e.async), s.src = t, e.attrs && function (t, e) {
                            for (var n in e) t.setAttribute(n, e[n])
                        }(s, e.attrs), e.text && (s.text = "" + e.text);
                        var a = "onload" in s ? r : i;
                        a(s, n), s.onload || r(s, n), o.appendChild(s)
                    }
                }, {}], 2: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        for (var e = new RegExp("cdn\\.jsdelivr\\.net/algoliasearch/latest/" + t.replace(".", "\\.") + "(?:\\.min)?\\.js$"), n = document.getElementsByTagName("script"), r = !1, i = 0, o = n.length; i < o; i++) if (n[i].src && e.test(n[i].src)) {
                            r = !0;
                            break
                        }
                        return r
                    }
                }, {}], 3: [function (t, e, n) {
                    "use strict";

                    function r(t) {
                        return function () {
                            var e = "AlgoliaSearch: loaded V2 script using " + t;
                            window.console && window.console.log && window.console.log(e)
                        }
                    }

                    e.exports = function (e) {
                        var n = t(1), i = "//cdn.jsdelivr.net/algoliasearch/2/" + e + ".min.js",
                            o = "-- AlgoliaSearch `latest` warning --\nWarning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\nUsing `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\nAlso, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\nplease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch  `latest` warning --";
                        window.console && (window.console.warn ? window.console.warn(o) : window.console.log && window.console.log(o));
                        try {
                            document.write("<script>window.ALGOLIA_SUPPORTS_DOCWRITE = true<\/script>"), !0 === window.ALGOLIA_SUPPORTS_DOCWRITE ? (document.write('<script src="' + i + '"><\/script>'), r("document.write")()) : n(i, r("DOMElement"))
                        } catch (t) {
                            n(i, r("DOMElement"))
                        }
                    }
                }, {1: 1}], 4: [function (t, e, n) {
                    "use strict";
                    e.exports = function () {
                        var t = "-- AlgoliaSearch V2 => V3 error --\nYou are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\nPlease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch V2 => V3 error --";
                        window.AlgoliaSearch = function () {
                            throw new Error(t)
                        }, window.AlgoliaSearchHelper = function () {
                            throw new Error(t)
                        }, window.AlgoliaExplainResults = function () {
                            throw new Error(t)
                        }
                    }
                }, {}], 5: [function (t, e, n) {
                    "use strict";
                    var r, i, o, s;
                    r = "algoliasearch", i = t(2), o = t(3), s = t(4), i(r) ? o(r) : s()
                }, {2: 2, 3: 3, 4: 4}]
            }, {}, [5])(5), c = function () {
                return function t(e, n, r) {
                    function i(s, u) {
                        if (!n[s]) {
                            if (!e[s]) {
                                if (!u && ("function" == typeof a && a)) return a(s, !0);
                                if (o) return o(s, !0);
                                var c = new Error("Cannot find module '" + s + "'");
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var l = n[s] = {exports: {}};
                            e[s][0].call(l.exports, function (t) {
                                var n = e[s][1][t];
                                return i(n || t)
                            }, l, l.exports, t, e, n, r)
                        }
                        return n[s].exports
                    }

                    for (var o = "function" == typeof a && a, s = 0; s < r.length; s++) i(r[s]);
                    return i
                }({
                    1: [function (t, e, n) {
                        function r() {
                            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                        }

                        function i(t) {
                            return "function" == typeof t
                        }

                        function o(t) {
                            return "object" === l(t) && null !== t
                        }

                        function s(t) {
                            return void 0 === t
                        }

                        e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function (t) {
                            if ("number" != typeof t || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
                            return this._maxListeners = t, this
                        }, r.prototype.emit = function (t) {
                            var e, n, r, a, u, c;
                            if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                                if ((e = arguments[1]) instanceof Error) throw e;
                                throw TypeError('Uncaught, unspecified "error" event.')
                            }
                            if (s(n = this._events[t])) return !1;
                            if (i(n)) switch (arguments.length) {
                                case 1:
                                    n.call(this);
                                    break;
                                case 2:
                                    n.call(this, arguments[1]);
                                    break;
                                case 3:
                                    n.call(this, arguments[1], arguments[2]);
                                    break;
                                default:
                                    for (r = arguments.length, a = new Array(r - 1), u = 1; u < r; u++) a[u - 1] = arguments[u];
                                    n.apply(this, a)
                            } else if (o(n)) {
                                for (r = arguments.length, a = new Array(r - 1), u = 1; u < r; u++) a[u - 1] = arguments[u];
                                for (r = (c = n.slice()).length, u = 0; u < r; u++) c[u].apply(this, a)
                            }
                            return !0
                        }, r.prototype.addListener = function (t, e) {
                            var n;
                            if (!i(e)) throw TypeError("listener must be a function");
                            (this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned) && ((n = s(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[t].length > n && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()));
                            return this
                        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function (t, e) {
                            if (!i(e)) throw TypeError("listener must be a function");
                            var n = !1;

                            function r() {
                                this.removeListener(t, r), n || (n = !0, e.apply(this, arguments))
                            }

                            return r.listener = e, this.on(t, r), this
                        }, r.prototype.removeListener = function (t, e) {
                            var n, r, s, a;
                            if (!i(e)) throw TypeError("listener must be a function");
                            if (!this._events || !this._events[t]) return this;
                            if (s = (n = this._events[t]).length, r = -1, n === e || i(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e); else if (o(n)) {
                                for (a = s; a-- > 0;) if (n[a] === e || n[a].listener && n[a].listener === e) {
                                    r = a;
                                    break
                                }
                                if (r < 0) return this;
                                1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", t, e)
                            }
                            return this
                        }, r.prototype.removeAllListeners = function (t) {
                            var e, n;
                            if (!this._events) return this;
                            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
                            if (0 === arguments.length) {
                                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                                return this.removeAllListeners("removeListener"), this._events = {}, this
                            }
                            if (i(n = this._events[t])) this.removeListener(t, n); else for (; n.length;) this.removeListener(t, n[n.length - 1]);
                            return delete this._events[t], this
                        }, r.prototype.listeners = function (t) {
                            return this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
                        }, r.listenerCount = function (t, e) {
                            return t._events && t._events[e] ? i(t._events[e]) ? 1 : t._events[e].length : 0
                        }
                    }, {}],
                    2: [function (t, e, n) {
                        var r, i = e.exports = {}, o = [], s = !1, a = -1;

                        function u() {
                            s = !1, r.length ? o = r.concat(o) : a = -1, o.length && c()
                        }

                        function c() {
                            if (!s) {
                                var t = setTimeout(u);
                                s = !0;
                                for (var e = o.length; e;) {
                                    for (r = o, o = []; ++a < e;) r[a].run();
                                    a = -1, e = o.length
                                }
                                r = null, s = !1, clearTimeout(t)
                            }
                        }

                        function l(t, e) {
                            this.fun = t, this.array = e
                        }

                        function h() {
                        }

                        i.nextTick = function (t) {
                            var e = new Array(arguments.length - 1);
                            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                            o.push(new l(t, e)), 1 !== o.length || s || setTimeout(c, 0)
                        }, l.prototype.run = function () {
                            this.fun.apply(null, this.array)
                        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.binding = function (t) {
                            throw new Error("process.binding is not supported")
                        }, i.cwd = function () {
                            return "/"
                        }, i.chdir = function (t) {
                            throw new Error("process.chdir is not supported")
                        }, i.umask = function () {
                            return 0
                        }
                    }, {}],
                    3: [function (t, e, n) {
                        "use strict";

                        function r(t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }

                        e.exports = function (t, e, n, o) {
                            e = e || "&", n = n || "=";
                            var s = {};
                            if ("string" != typeof t || 0 === t.length) return s;
                            var a = /\+/g;
                            t = t.split(e);
                            var u = 1e3;
                            o && "number" == typeof o.maxKeys && (u = o.maxKeys);
                            var c = t.length;
                            u > 0 && c > u && (c = u);
                            for (var l = 0; l < c; ++l) {
                                var h, p, d, f, g = t[l].replace(a, "%20"), m = g.indexOf(n);
                                m >= 0 ? (h = g.substr(0, m), p = g.substr(m + 1)) : (h = g, p = ""), d = decodeURIComponent(h), f = decodeURIComponent(p), r(s, d) ? i(s[d]) ? s[d].push(f) : s[d] = [s[d], f] : s[d] = f
                            }
                            return s
                        };
                        var i = Array.isArray || function (t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        }
                    }, {}],
                    4: [function (t, e, n) {
                        "use strict";
                        var r = function (t) {
                            switch (l(t)) {
                                case"string":
                                    return t;
                                case"boolean":
                                    return t ? "true" : "false";
                                case"number":
                                    return isFinite(t) ? t : "";
                                default:
                                    return ""
                            }
                        };
                        e.exports = function (t, e, n, a) {
                            return e = e || "&", n = n || "=", null === t && (t = void 0), "object" === l(t) ? o(s(t), function (s) {
                                var a = encodeURIComponent(r(s)) + n;
                                return i(t[s]) ? o(t[s], function (t) {
                                    return a + encodeURIComponent(r(t))
                                }).join(e) : a + encodeURIComponent(r(t[s]))
                            }).join(e) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(t)) : ""
                        };
                        var i = Array.isArray || function (t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        };

                        function o(t, e) {
                            if (t.map) return t.map(e);
                            for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
                            return n
                        }

                        var s = Object.keys || function (t) {
                            var e = [];
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                            return e
                        }
                    }, {}],
                    5: [function (t, e, n) {
                        "use strict";
                        n.decode = n.parse = t(3), n.encode = n.stringify = t(4)
                    }, {3: 3, 4: 4}],
                    6: [function (t, e, n) {
                        function r() {
                            var t;
                            try {
                                t = n.storage.debug
                            } catch (t) {
                            }
                            return t
                        }

                        (n = e.exports = t(7)).log = function () {
                            return "object" === ("undefined" == typeof console ? "undefined" : l(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments)
                        }, n.formatArgs = function () {
                            var t = arguments, e = this.useColors;
                            if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + n.humanize(this.diff), !e) return t;
                            var r = "color: " + this.color;
                            t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                            var i = 0, o = 0;
                            return t[0].replace(/%[a-z%]/g, function (t) {
                                "%%" !== t && (i++, "%c" === t && (o = i))
                            }), t.splice(o, 0, r), t
                        }, n.save = function (t) {
                            try {
                                null == t ? n.storage.removeItem("debug") : n.storage.debug = t
                            } catch (t) {
                            }
                        }, n.load = r, n.useColors = function () {
                            return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
                        }, n.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
                            try {
                                return window.localStorage
                            } catch (t) {
                            }
                        }(), n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], n.formatters.j = function (t) {
                            return JSON.stringify(t)
                        }, n.enable(r())
                    }, {7: 7}],
                    7: [function (t, e, n) {
                        (n = e.exports = function (t) {
                            function e() {
                            }

                            function o() {
                                var t = o, e = +new Date, s = e - (r || e);
                                t.diff = s, t.prev = r, t.curr = e, r = e, null == t.useColors && (t.useColors = n.useColors()), null == t.color && t.useColors && (t.color = n.colors[i++ % n.colors.length]);
                                var a = Array.prototype.slice.call(arguments);
                                a[0] = n.coerce(a[0]), "string" != typeof a[0] && (a = ["%o"].concat(a));
                                var u = 0;
                                a[0] = a[0].replace(/%([a-z%])/g, function (e, r) {
                                    if ("%%" === e) return e;
                                    u++;
                                    var i = n.formatters[r];
                                    if ("function" == typeof i) {
                                        var o = a[u];
                                        e = i.call(t, o), a.splice(u, 1), u--
                                    }
                                    return e
                                }), "function" == typeof n.formatArgs && (a = n.formatArgs.apply(t, a));
                                var c = o.log || n.log || console.log.bind(console);
                                c.apply(t, a)
                            }

                            e.enabled = !1, o.enabled = !0;
                            var s = n.enabled(t) ? o : e;
                            return s.namespace = t, s
                        }).coerce = function (t) {
                            return t instanceof Error ? t.stack || t.message : t
                        }, n.disable = function () {
                            n.enable("")
                        }, n.enable = function (t) {
                            n.save(t);
                            for (var e = (t || "").split(/[\s,]+/), r = e.length, i = 0; i < r; i++) e[i] && ("-" === (t = e[i].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")))
                        }, n.enabled = function (t) {
                            var e, r;
                            for (e = 0, r = n.skips.length; e < r; e++) if (n.skips[e].test(t)) return !1;
                            for (e = 0, r = n.names.length; e < r; e++) if (n.names[e].test(t)) return !0;
                            return !1
                        }, n.humanize = t(8), n.names = [], n.skips = [], n.formatters = {};
                        var r, i = 0
                    }, {8: 8}],
                    8: [function (t, e, n) {
                        var r = 1e3, i = 60 * r, o = 60 * i, s = 24 * o, a = 365.25 * s;

                        function u(t, e, n) {
                            if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
                        }

                        e.exports = function (t, e) {
                            return e = e || {}, "string" == typeof t ? function (t) {
                                if ((t = "" + t).length > 1e4) return;
                                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                                if (!e) return;
                                var n = parseFloat(e[1]);
                                switch ((e[2] || "ms").toLowerCase()) {
                                    case"years":
                                    case"year":
                                    case"yrs":
                                    case"yr":
                                    case"y":
                                        return n * a;
                                    case"days":
                                    case"day":
                                    case"d":
                                        return n * s;
                                    case"hours":
                                    case"hour":
                                    case"hrs":
                                    case"hr":
                                    case"h":
                                        return n * o;
                                    case"minutes":
                                    case"minute":
                                    case"mins":
                                    case"min":
                                    case"m":
                                        return n * i;
                                    case"seconds":
                                    case"second":
                                    case"secs":
                                    case"sec":
                                    case"s":
                                        return n * r;
                                    case"milliseconds":
                                    case"millisecond":
                                    case"msecs":
                                    case"msec":
                                    case"ms":
                                        return n
                                }
                            }(t) : e.long ? u(n = t, s, "day") || u(n, o, "hour") || u(n, i, "minute") || u(n, r, "second") || n + " ms" : function (t) {
                                return t >= s ? Math.round(t / s) + "d" : t >= o ? Math.round(t / o) + "h" : t >= i ? Math.round(t / i) + "m" : t >= r ? Math.round(t / r) + "s" : t + "ms"
                            }(t);
                            var n
                        }
                    }, {}],
                    9: [function (t, e, i) {
                        (function (n, i) {
                            (function () {
                                "use strict";

                                function o(t) {
                                    return "function" == typeof t
                                }

                                var s, a, u = Array.isArray ? Array.isArray : function (t) {
                                    return "[object Array]" === Object.prototype.toString.call(t)
                                }, c = 0, h = function (t, e) {
                                    S[c] = t, S[c + 1] = e, 2 === (c += 2) && (a ? a(A) : v())
                                };
                                var p = "undefined" != typeof window ? window : void 0, d = p || {},
                                    f = d.MutationObserver || d.WebKitMutationObserver,
                                    g = void 0 !== n && "[object process]" === {}.toString.call(n),
                                    m = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                                function y() {
                                    return function () {
                                        setTimeout(A, 1)
                                    }
                                }

                                var v, b, w, _, x, k, j, S = new Array(1e3);

                                function A() {
                                    for (var t = 0; t < c; t += 2) {
                                        (0, S[t])(S[t + 1]), S[t] = void 0, S[t + 1] = void 0
                                    }
                                    c = 0
                                }

                                function T() {
                                }

                                g ? (k = n.nextTick, j = n.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/), Array.isArray(j) && "0" === j[1] && "10" === j[2] && (k = r), v = function () {
                                    k(A)
                                }) : f ? (w = 0, _ = new f(A), x = document.createTextNode(""), _.observe(x, {characterData: !0}), v = function () {
                                    x.data = w = ++w % 2
                                }) : m ? ((b = new MessageChannel).port1.onmessage = A, v = function () {
                                    b.port2.postMessage(0)
                                }) : v = void 0 === p && "function" == typeof t ? function () {
                                    try {
                                        var e = t("vertx");
                                        return s = e.runOnLoop || e.runOnContext, function () {
                                            s(A)
                                        }
                                    } catch (t) {
                                        return y()
                                    }
                                }() : y();
                                var C = void 0, I = 1, O = 2, E = new L;

                                function P(t, e) {
                                    if (e.constructor === t.constructor) !function (t, e) {
                                        e._state === I ? $(t, e._result) : e._state === O ? F(t, e._result) : U(e, void 0, function (e) {
                                            R(t, e)
                                        }, function (e) {
                                            F(t, e)
                                        })
                                    }(t, e); else {
                                        var n = function (t) {
                                            try {
                                                return t.then
                                            } catch (t) {
                                                return E.error = t, E
                                            }
                                        }(e);
                                        n === E ? F(t, E.error) : void 0 === n ? $(t, e) : o(n) ? function (t, e, n) {
                                            h(function (t) {
                                                var r = !1, i = function (t, e, n, r) {
                                                    try {
                                                        t.call(e, n, r)
                                                    } catch (t) {
                                                        return t
                                                    }
                                                }(n, e, function (n) {
                                                    r || (r = !0, e !== n ? R(t, n) : $(t, n))
                                                }, function (e) {
                                                    r || (r = !0, F(t, e))
                                                }, t._label);
                                                !r && i && (r = !0, F(t, i))
                                            }, t)
                                        }(t, e, n) : $(t, e)
                                    }
                                }

                                function R(t, e) {
                                    var n;
                                    t === e ? F(t, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof (n = e) || "object" === l(n) && null !== n ? P(t, e) : $(t, e)
                                }

                                function q(t) {
                                    t._onerror && t._onerror(t._result), N(t)
                                }

                                function $(t, e) {
                                    t._state === C && (t._result = e, t._state = I, 0 !== t._subscribers.length && h(N, t))
                                }

                                function F(t, e) {
                                    t._state === C && (t._state = O, t._result = e, h(q, t))
                                }

                                function U(t, e, n, r) {
                                    var i = t._subscribers, o = i.length;
                                    t._onerror = null, i[o] = e, i[o + I] = n, i[o + O] = r, 0 === o && t._state && h(N, t)
                                }

                                function N(t) {
                                    var e = t._subscribers, n = t._state;
                                    if (0 !== e.length) {
                                        for (var r, i, o = t._result, s = 0; s < e.length; s += 3) r = e[s], i = e[s + n], r ? B(n, r, i, o) : i(o);
                                        t._subscribers.length = 0
                                    }
                                }

                                function L() {
                                    this.error = null
                                }

                                var D = new L;

                                function B(t, e, n, r) {
                                    var i, s, a, u, c = o(n);
                                    if (c) {
                                        if ((i = function (t, e) {
                                            try {
                                                return t(e)
                                            } catch (t) {
                                                return D.error = t, D
                                            }
                                        }(n, r)) === D ? (u = !0, s = i.error, i = null) : a = !0, e === i) return void F(e, new TypeError("A promises callback cannot return that same promise."))
                                    } else i = r, a = !0;
                                    e._state !== C || (c && a ? R(e, i) : u ? F(e, s) : t === I ? $(e, i) : t === O && F(e, i))
                                }

                                function H(t, e) {
                                    this._instanceConstructor = t, this.promise = new t(T), this._validateInput(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._init(), 0 === this.length ? $(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && $(this.promise, this._result))) : F(this.promise, this._validationError())
                                }

                                H.prototype._validateInput = function (t) {
                                    return u(t)
                                }, H.prototype._validationError = function () {
                                    return new Error("Array Methods must be provided an Array")
                                }, H.prototype._init = function () {
                                    this._result = new Array(this.length)
                                };
                                var M = H;
                                H.prototype._enumerate = function () {
                                    for (var t = this.length, e = this.promise, n = this._input, r = 0; e._state === C && r < t; r++) this._eachEntry(n[r], r)
                                }, H.prototype._eachEntry = function (t, e) {
                                    var n, r = this._instanceConstructor;
                                    "object" === l(n = t) && null !== n ? t.constructor === r && t._state !== C ? (t._onerror = null, this._settledAt(t._state, e, t._result)) : this._willSettleAt(r.resolve(t), e) : (this._remaining--, this._result[e] = t)
                                }, H.prototype._settledAt = function (t, e, n) {
                                    var r = this.promise;
                                    r._state === C && (this._remaining--, t === O ? F(r, n) : this._result[e] = n), 0 === this._remaining && $(r, this._result)
                                }, H.prototype._willSettleAt = function (t, e) {
                                    var n = this;
                                    U(t, void 0, function (t) {
                                        n._settledAt(I, e, t)
                                    }, function (t) {
                                        n._settledAt(O, e, t)
                                    })
                                };
                                var z = function (t) {
                                    return new M(this, t).promise
                                };
                                var K = function (t) {
                                    var e = new this(T);
                                    if (!u(t)) return F(e, new TypeError("You must pass an array to race.")), e;
                                    var n = t.length;

                                    function r(t) {
                                        R(e, t)
                                    }

                                    function i(t) {
                                        F(e, t)
                                    }

                                    for (var o = 0; e._state === C && o < n; o++) U(this.resolve(t[o]), void 0, r, i);
                                    return e
                                };
                                var V = function (t) {
                                    if (t && "object" === l(t) && t.constructor === this) return t;
                                    var e = new this(T);
                                    return R(e, t), e
                                };
                                var Q = function (t) {
                                    var e = new this(T);
                                    return F(e, t), e
                                }, J = 0;
                                var G = W;

                                function W(t) {
                                    this._id = J++, this._state = void 0, this._result = void 0, this._subscribers = [], T !== t && (o(t) || function () {
                                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                    }(), this instanceof W || function () {
                                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                    }(), function (t, e) {
                                        try {
                                            e(function (e) {
                                                R(t, e)
                                            }, function (e) {
                                                F(t, e)
                                            })
                                        } catch (e) {
                                            F(t, e)
                                        }
                                    }(this, t))
                                }

                                W.all = z, W.race = K, W.resolve = V, W.reject = Q, W._setScheduler = function (t) {
                                    a = t
                                }, W._setAsap = function (t) {
                                    h = t
                                }, W._asap = h, W.prototype = {
                                    constructor: W, then: function (t, e) {
                                        var n = this._state;
                                        if (n === I && !t || n === O && !e) return this;
                                        var r = new this.constructor(T), i = this._result;
                                        if (n) {
                                            var o = arguments[n - 1];
                                            h(function () {
                                                B(n, r, o, i)
                                            })
                                        } else U(this, r, t, e);
                                        return r
                                    }, catch: function (t) {
                                        return this.then(null, t)
                                    }
                                };
                                var X = function () {
                                    var t;
                                    if (void 0 !== i) t = i; else if ("undefined" != typeof self) t = self; else try {
                                        t = Function("return this")()
                                    } catch (t) {
                                        throw new Error("polyfill failed because global object is unavailable in this environment")
                                    }
                                    var e = t.Promise;
                                    e && "[object Promise]" === Object.prototype.toString.call(e.resolve()) && !e.cast || (t.Promise = G)
                                }, Y = {Promise: G, polyfill: X};
                                void 0 !== e && e.exports ? e.exports = Y : void 0 !== this && (this.ES6Promise = Y), X()
                            }).call(this)
                        }).call(this, t(2), void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {2: 2}],
                    10: [function (t, e, n) {
                        "function" == typeof Object.create ? e.exports = function (t, e) {
                            t.super_ = e, t.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })
                        } : e.exports = function (t, e) {
                            t.super_ = e;
                            var n = function () {
                            };
                            n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
                        }
                    }, {}],
                    11: [function (t, e, n) {
                        var r = t(14), i = t(18), o = t(30)(r, i);
                        e.exports = o
                    }, {14: 14, 18: 18, 30: 30}],
                    12: [function (t, e, n) {
                        var r = "Expected a function", i = Math.max;
                        e.exports = function (t, e) {
                            if ("function" != typeof t) throw new TypeError(r);
                            return e = i(void 0 === e ? t.length - 1 : +e || 0, 0), function () {
                                for (var n = arguments, r = -1, o = i(n.length - e, 0), s = Array(o); ++r < o;) s[r] = n[e + r];
                                switch (e) {
                                    case 0:
                                        return t.call(this, s);
                                    case 1:
                                        return t.call(this, n[0], s);
                                    case 2:
                                        return t.call(this, n[0], n[1], s)
                                }
                                var a = Array(e + 1);
                                for (r = -1; ++r < e;) a[r] = n[r];
                                return a[e] = s, t.apply(this, a)
                            }
                        }
                    }, {}],
                    13: [function (t, e, n) {
                        e.exports = function (t, e) {
                            var n = -1, r = t.length;
                            for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                            return e
                        }
                    }, {}],
                    14: [function (t, e, n) {
                        e.exports = function (t, e) {
                            for (var n = -1, r = t.length; ++n < r && !1 !== e(t[n], n, t);) ;
                            return t
                        }
                    }, {}],
                    15: [function (t, e, n) {
                        var r = t(17), i = t(55);
                        e.exports = function (t, e) {
                            return null == e ? t : r(e, i(e), t)
                        }
                    }, {17: 17, 55: 55}],
                    16: [function (t, e, n) {
                        var r = t(13), i = t(14), o = t(15), s = t(21), a = t(33), u = t(34), c = t(35), l = t(47),
                            h = t(37), p = t(50), d = "[object Arguments]", f = "[object Function]",
                            g = "[object Object]", m = {};
                        m[d] = m["[object Array]"] = m["[object ArrayBuffer]"] = m["[object Boolean]"] = m["[object Date]"] = m["[object Float32Array]"] = m["[object Float64Array]"] = m["[object Int8Array]"] = m["[object Int16Array]"] = m["[object Int32Array]"] = m["[object Number]"] = m[g] = m["[object RegExp]"] = m["[object String]"] = m["[object Uint8Array]"] = m["[object Uint8ClampedArray]"] = m["[object Uint16Array]"] = m["[object Uint32Array]"] = !0, m["[object Error]"] = m[f] = m["[object Map]"] = m["[object Set]"] = m["[object WeakMap]"] = !1;
                        var y = Object.prototype.toString;
                        e.exports = function t(e, n, v, b, w, _, x) {
                            var k;
                            if (v && (k = w ? v(e, b, w) : v(e)), void 0 !== k) return k;
                            if (!p(e)) return e;
                            var j = l(e);
                            if (j) {
                                if (k = a(e), !n) return r(e, k)
                            } else {
                                var S = y.call(e), A = S == f;
                                if (S != g && S != d && (!A || w)) return m[S] ? u(e, S, n) : w ? e : {};
                                if (h(e)) return w ? e : {};
                                if (k = c(A ? {} : e), !n) return o(k, e)
                            }
                            _ || (_ = []), x || (x = []);
                            for (var T = _.length; T--;) if (_[T] == e) return x[T];
                            return _.push(e), x.push(k), (j ? i : s)(e, function (r, i) {
                                k[i] = t(r, n, v, i, e, _, x)
                            }), k
                        }
                    }, {13: 13, 14: 14, 15: 15, 21: 21, 33: 33, 34: 34, 35: 35, 37: 37, 47: 47, 50: 50}],
                    17: [function (t, e, n) {
                        e.exports = function (t, e, n) {
                            n || (n = {});
                            for (var r = -1, i = e.length; ++r < i;) {
                                var o = e[r];
                                n[o] = t[o]
                            }
                            return n
                        }
                    }, {}],
                    18: [function (t, e, n) {
                        var r = t(21), i = t(28)(r);
                        e.exports = i
                    }, {21: 21, 28: 28}],
                    19: [function (t, e, n) {
                        var r = t(29)();
                        e.exports = r
                    }, {29: 29}],
                    20: [function (t, e, n) {
                        var r = t(19), i = t(56);
                        e.exports = function (t, e) {
                            return r(t, e, i)
                        }
                    }, {19: 19, 56: 56}],
                    21: [function (t, e, n) {
                        var r = t(19), i = t(55);
                        e.exports = function (t, e) {
                            return r(t, e, i)
                        }
                    }, {19: 19, 55: 55}],
                    22: [function (t, e, n) {
                        var r = t(14), i = t(23), o = t(47), s = t(36), a = t(50), u = t(41), c = t(53), l = t(55);
                        e.exports = function t(e, n, h, p, d) {
                            if (!a(e)) return e;
                            var f = s(n) && (o(n) || c(n)), g = f ? void 0 : l(n);
                            return r(g || n, function (r, o) {
                                if (g && (r = n[o = r]), u(r)) p || (p = []), d || (d = []), i(e, n, o, t, h, p, d); else {
                                    var s = e[o], a = h ? h(s, r, o, e, n) : void 0, c = void 0 === a;
                                    c && (a = r), void 0 === a && (!f || o in e) || !c && (a == a ? a === s : s != s) || (e[o] = a)
                                }
                            }), e
                        }
                    }, {14: 14, 23: 23, 36: 36, 41: 41, 47: 47, 50: 50, 53: 53, 55: 55}],
                    23: [function (t, e, n) {
                        var r = t(13), i = t(46), o = t(47), s = t(36), a = t(51), u = t(53), c = t(54);
                        e.exports = function (t, e, n, l, h, p, d) {
                            for (var f = p.length, g = e[n]; f--;) if (p[f] == g) return void (t[n] = d[f]);
                            var m = t[n], y = h ? h(m, g, n, t, e) : void 0, v = void 0 === y;
                            v && (y = g, s(g) && (o(g) || u(g)) ? y = o(m) ? m : s(m) ? r(m) : [] : a(g) || i(g) ? y = i(m) ? c(m) : a(m) ? m : {} : v = !1), p.push(g), d.push(y), v ? t[n] = l(y, g, h, p, d) : (y == y ? y !== m : m == m) && (t[n] = y)
                        }
                    }, {13: 13, 36: 36, 46: 46, 47: 47, 51: 51, 53: 53, 54: 54}],
                    24: [function (t, e, n) {
                        var r = t(43);
                        e.exports = function (t) {
                            return function (e) {
                                return null == e ? void 0 : r(e)[t]
                            }
                        }
                    }, {43: 43}],
                    25: [function (t, e, n) {
                        var r = t(59);
                        e.exports = function (t, e, n) {
                            if ("function" != typeof t) return r;
                            if (void 0 === e) return t;
                            switch (n) {
                                case 1:
                                    return function (n) {
                                        return t.call(e, n)
                                    };
                                case 3:
                                    return function (n, r, i) {
                                        return t.call(e, n, r, i)
                                    };
                                case 4:
                                    return function (n, r, i, o) {
                                        return t.call(e, n, r, i, o)
                                    };
                                case 5:
                                    return function (n, r, i, o, s) {
                                        return t.call(e, n, r, i, o, s)
                                    }
                            }
                            return function () {
                                return t.apply(e, arguments)
                            }
                        }
                    }, {59: 59}],
                    26: [function (t, e, r) {
                        (function (t) {
                            var n = t.ArrayBuffer, r = t.Uint8Array;
                            e.exports = function (t) {
                                var e = new n(t.byteLength);
                                return new r(e).set(new r(t)), e
                            }
                        }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    27: [function (t, e, n) {
                        var r = t(25), i = t(39), o = t(12);
                        e.exports = function (t) {
                            return o(function (e, n) {
                                var o = -1, s = null == e ? 0 : n.length, a = s > 2 ? n[s - 2] : void 0,
                                    u = s > 2 ? n[2] : void 0, c = s > 1 ? n[s - 1] : void 0;
                                for ("function" == typeof a ? (a = r(a, c, 5), s -= 2) : s -= (a = "function" == typeof c ? c : void 0) ? 1 : 0, u && i(n[0], n[1], u) && (a = s < 3 ? void 0 : a, s = 1); ++o < s;) {
                                    var l = n[o];
                                    l && t(e, l, a)
                                }
                                return e
                            })
                        }
                    }, {12: 12, 25: 25, 39: 39}],
                    28: [function (t, e, n) {
                        var r = t(31), i = t(40), o = t(43);
                        e.exports = function (t, e) {
                            return function (n, s) {
                                var a = n ? r(n) : 0;
                                if (!i(a)) return t(n, s);
                                for (var u = e ? a : -1, c = o(n); (e ? u-- : ++u < a) && !1 !== s(c[u], u, c);) ;
                                return n
                            }
                        }
                    }, {31: 31, 40: 40, 43: 43}],
                    29: [function (t, e, n) {
                        var r = t(43);
                        e.exports = function (t) {
                            return function (e, n, i) {
                                for (var o = r(e), s = i(e), a = s.length, u = t ? a : -1; t ? u-- : ++u < a;) {
                                    var c = s[u];
                                    if (!1 === n(o[c], c, o)) break
                                }
                                return e
                            }
                        }
                    }, {43: 43}],
                    30: [function (t, e, n) {
                        var r = t(25), i = t(47);
                        e.exports = function (t, e) {
                            return function (n, o, s) {
                                return "function" == typeof o && void 0 === s && i(n) ? t(n, o) : e(n, r(o, s, 3))
                            }
                        }
                    }, {25: 25, 47: 47}],
                    31: [function (t, e, n) {
                        var r = t(24)("length");
                        e.exports = r
                    }, {24: 24}],
                    32: [function (t, e, n) {
                        var r = t(49);
                        e.exports = function (t, e) {
                            var n = null == t ? void 0 : t[e];
                            return r(n) ? n : void 0
                        }
                    }, {49: 49}],
                    33: [function (t, e, n) {
                        var r = Object.prototype.hasOwnProperty;
                        e.exports = function (t) {
                            var e = t.length, n = new t.constructor(e);
                            return e && "string" == typeof t[0] && r.call(t, "index") && (n.index = t.index, n.input = t.input), n
                        }
                    }, {}],
                    34: [function (t, e, r) {
                        (function (n) {
                            var r = t(26), i = "[object Boolean]", o = "[object Date]", s = "[object Number]",
                                a = "[object RegExp]", u = "[object String]", c = "[object ArrayBuffer]",
                                l = "[object Float32Array]", h = "[object Float64Array]", p = "[object Int8Array]",
                                d = "[object Int16Array]", f = "[object Int32Array]", g = "[object Uint8Array]",
                                m = "[object Uint8ClampedArray]", y = "[object Uint16Array]",
                                v = "[object Uint32Array]", b = /\w*$/, w = n.Uint8Array, _ = {};
                            _[l] = n.Float32Array, _[h] = n.Float64Array, _[p] = n.Int8Array, _[d] = n.Int16Array, _[f] = n.Int32Array, _[g] = w, _[m] = n.Uint8ClampedArray, _[y] = n.Uint16Array, _[v] = n.Uint32Array, e.exports = function (t, e, n) {
                                var w = t.constructor;
                                switch (e) {
                                    case c:
                                        return r(t);
                                    case i:
                                    case o:
                                        return new w(+t);
                                    case l:
                                    case h:
                                    case p:
                                    case d:
                                    case f:
                                    case g:
                                    case m:
                                    case y:
                                    case v:
                                        w instanceof w && (w = _[e]);
                                        var x = t.buffer;
                                        return new w(n ? r(x) : x, t.byteOffset, t.length);
                                    case s:
                                    case u:
                                        return new w(t);
                                    case a:
                                        var k = new w(t.source, b.exec(t));
                                        k.lastIndex = t.lastIndex
                                }
                                return k
                            }
                        }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {26: 26}],
                    35: [function (t, e, n) {
                        e.exports = function (t) {
                            var e = t.constructor;
                            return "function" == typeof e && e instanceof e || (e = Object), new e
                        }
                    }, {}],
                    36: [function (t, e, n) {
                        var r = t(31), i = t(40);
                        e.exports = function (t) {
                            return null != t && i(r(t))
                        }
                    }, {31: 31, 40: 40}],
                    37: [function (t, e, n) {
                        var r = function () {
                            try {
                                Object({toString: 0} + "")
                            } catch (t) {
                                return function () {
                                    return !1
                                }
                            }
                            return function (t) {
                                return "function" != typeof t.toString && "string" == typeof (t + "")
                            }
                        }();
                        e.exports = r
                    }, {}],
                    38: [function (t, e, n) {
                        var r = /^\d+$/, i = 9007199254740991;
                        e.exports = function (t, e) {
                            return t = "number" == typeof t || r.test(t) ? +t : -1, e = null == e ? i : e, t > -1 && t % 1 == 0 && t < e
                        }
                    }, {}],
                    39: [function (t, e, n) {
                        var r = t(36), i = t(38), o = t(50);
                        e.exports = function (t, e, n) {
                            if (!o(n)) return !1;
                            var s = l(e);
                            if ("number" == s ? r(n) && i(e, n.length) : "string" == s && e in n) {
                                var a = n[e];
                                return t == t ? t === a : a != a
                            }
                            return !1
                        }
                    }, {36: 36, 38: 38, 50: 50}],
                    40: [function (t, e, n) {
                        var r = 9007199254740991;
                        e.exports = function (t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
                        }
                    }, {}],
                    41: [function (t, e, n) {
                        e.exports = function (t) {
                            return !!t && "object" == l(t)
                        }
                    }, {}],
                    42: [function (t, e, n) {
                        var r = t(46), i = t(47), o = t(38), s = t(40), a = t(52), u = t(56),
                            c = Object.prototype.hasOwnProperty;
                        e.exports = function (t) {
                            for (var e = u(t), n = e.length, l = n && t.length, h = !!l && s(l) && (i(t) || r(t) || a(t)), p = -1, d = []; ++p < n;) {
                                var f = e[p];
                                (h && o(f, l) || c.call(t, f)) && d.push(f)
                            }
                            return d
                        }
                    }, {38: 38, 40: 40, 46: 46, 47: 47, 52: 52, 56: 56}],
                    43: [function (t, e, n) {
                        var r = t(50), i = t(52), o = t(58);
                        e.exports = function (t) {
                            if (o.unindexedChars && i(t)) {
                                for (var e = -1, n = t.length, s = Object(t); ++e < n;) s[e] = t.charAt(e);
                                return s
                            }
                            return r(t) ? t : Object(t)
                        }
                    }, {50: 50, 52: 52, 58: 58}],
                    44: [function (t, e, n) {
                        var r = t(16), i = t(25), o = t(39);
                        e.exports = function (t, e, n, s) {
                            return e && "boolean" != typeof e && o(t, e, n) ? e = !1 : "function" == typeof e && (s = n, n = e, e = !1), "function" == typeof n ? r(t, e, i(n, s, 1)) : r(t, e)
                        }
                    }, {16: 16, 25: 25, 39: 39}],
                    45: [function (t, e, n) {
                        var r = t(16), i = t(25);
                        e.exports = function (t, e, n) {
                            return "function" == typeof e ? r(t, !0, i(e, n, 1)) : r(t, !0)
                        }
                    }, {16: 16, 25: 25}],
                    46: [function (t, e, n) {
                        var r = t(36), i = t(41), o = Object.prototype, s = o.hasOwnProperty,
                            a = o.propertyIsEnumerable;
                        e.exports = function (t) {
                            return i(t) && r(t) && s.call(t, "callee") && !a.call(t, "callee")
                        }
                    }, {36: 36, 41: 41}],
                    47: [function (t, e, n) {
                        var r = t(32), i = t(40), o = t(41), s = Object.prototype.toString,
                            a = r(Array, "isArray") || function (t) {
                                return o(t) && i(t.length) && "[object Array]" == s.call(t)
                            };
                        e.exports = a
                    }, {32: 32, 40: 40, 41: 41}],
                    48: [function (t, e, n) {
                        var r = t(50), i = "[object Function]", o = Object.prototype.toString;
                        e.exports = function (t) {
                            return r(t) && o.call(t) == i
                        }
                    }, {50: 50}],
                    49: [function (t, e, n) {
                        var r = t(48), i = t(37), o = t(41), s = /^\[object .+?Constructor\]$/, a = Object.prototype,
                            u = Function.prototype.toString, c = a.hasOwnProperty,
                            l = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                        e.exports = function (t) {
                            return null != t && (r(t) ? l.test(u.call(t)) : o(t) && (i(t) ? l : s).test(t))
                        }
                    }, {37: 37, 41: 41, 48: 48}],
                    50: [function (t, e, n) {
                        e.exports = function (t) {
                            var e = l(t);
                            return !!t && ("object" == e || "function" == e)
                        }
                    }, {}],
                    51: [function (t, e, n) {
                        var r = t(20), i = t(46), o = t(37), s = t(41), a = t(58), u = "[object Object]",
                            c = Object.prototype, l = c.hasOwnProperty, h = c.toString;
                        e.exports = function (t) {
                            var e, n;
                            return !(!s(t) || h.call(t) != u || o(t) || i(t) || !(l.call(t, "constructor") || "function" != typeof (e = t.constructor) || e instanceof e)) && (a.ownLast ? (r(t, function (t, e, r) {
                                return n = l.call(r, e), !1
                            }), !1 !== n) : (r(t, function (t, e) {
                                n = e
                            }), void 0 === n || l.call(t, n)))
                        }
                    }, {20: 20, 37: 37, 41: 41, 46: 46, 58: 58}],
                    52: [function (t, e, n) {
                        var r = t(41), i = "[object String]", o = Object.prototype.toString;
                        e.exports = function (t) {
                            return "string" == typeof t || r(t) && o.call(t) == i
                        }
                    }, {41: 41}],
                    53: [function (t, e, n) {
                        var r = t(40), i = t(41), o = {};
                        o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
                        var s = Object.prototype.toString;
                        e.exports = function (t) {
                            return i(t) && r(t.length) && !!o[s.call(t)]
                        }
                    }, {40: 40, 41: 41}],
                    54: [function (t, e, n) {
                        var r = t(17), i = t(56);
                        e.exports = function (t) {
                            return r(t, i(t))
                        }
                    }, {17: 17, 56: 56}],
                    55: [function (t, e, n) {
                        var r = t(32), i = t(36), o = t(50), s = t(42), a = t(58), u = r(Object, "keys"),
                            c = u ? function (t) {
                                var e = null == t ? void 0 : t.constructor;
                                return "function" == typeof e && e.prototype === t || ("function" == typeof t ? a.enumPrototypes : i(t)) ? s(t) : o(t) ? u(t) : []
                            } : s;
                        e.exports = c
                    }, {32: 32, 36: 36, 42: 42, 50: 50, 58: 58}],
                    56: [function (t, e, n) {
                        var r = t(14), i = t(46), o = t(47), s = t(48), a = t(38), u = t(40), c = t(50), l = t(52),
                            h = t(58), p = "[object Error]", d = "[object Object]", f = "[object String]",
                            g = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                            m = Error.prototype, y = Object.prototype, v = String.prototype, b = y.hasOwnProperty,
                            w = y.toString, _ = {};
                        _["[object Array]"] = _["[object Date]"] = _["[object Number]"] = {
                            constructor: !0,
                            toLocaleString: !0,
                            toString: !0,
                            valueOf: !0
                        }, _["[object Boolean]"] = _[f] = {
                            constructor: !0,
                            toString: !0,
                            valueOf: !0
                        }, _[p] = _["[object Function]"] = _["[object RegExp]"] = {
                            constructor: !0,
                            toString: !0
                        }, _[d] = {constructor: !0}, r(g, function (t) {
                            for (var e in _) if (b.call(_, e)) {
                                var n = _[e];
                                n[t] = b.call(n, t)
                            }
                        }), e.exports = function (t) {
                            if (null == t) return [];
                            c(t) || (t = Object(t));
                            var e = t.length;
                            e = e && u(e) && (o(t) || i(t) || l(t)) && e || 0;
                            for (var n = t.constructor, r = -1, x = s(n) && n.prototype || y, k = x === t, j = Array(e), S = e > 0, A = h.enumErrorProps && (t === m || t instanceof Error), T = h.enumPrototypes && s(t); ++r < e;) j[r] = r + "";
                            for (var C in t) T && "prototype" == C || A && ("message" == C || "name" == C) || S && a(C, e) || "constructor" == C && (k || !b.call(t, C)) || j.push(C);
                            if (h.nonEnumShadows && t !== y) {
                                var I = t === v ? f : t === m ? p : w.call(t), O = _[I] || _[d];
                                for (I == d && (x = y), e = g.length; e--;) {
                                    var E = O[C = g[e]];
                                    k && E || (E ? !b.call(t, C) : t[C] === x[C]) || j.push(C)
                                }
                            }
                            return j
                        }
                    }, {14: 14, 38: 38, 40: 40, 46: 46, 47: 47, 48: 48, 50: 50, 52: 52, 58: 58}],
                    57: [function (t, e, n) {
                        var r = t(22), i = t(27)(r);
                        e.exports = i
                    }, {22: 22, 27: 27}],
                    58: [function (t, e, n) {
                        var r = Array.prototype, i = Error.prototype, o = Object.prototype.propertyIsEnumerable,
                            s = r.splice, a = {};
                        !function (t) {
                            var e = function () {
                                this.x = 1
                            }, n = {0: 1, length: 1}, r = [];
                            for (var u in e.prototype = {valueOf: 1, y: 1}, new e) r.push(u);
                            a.enumErrorProps = o.call(i, "message") || o.call(i, "name"), a.enumPrototypes = o.call(e, "prototype"), a.nonEnumShadows = !/valueOf/.test(r), a.ownLast = "x" != r[0], a.spliceObjects = (s.call(n, 0, 1), !n[0]), a.unindexedChars = "x"[0] + Object("x")[0] != "xx"
                        }(), e.exports = a
                    }, {}],
                    59: [function (t, e, n) {
                        e.exports = function (t) {
                            return t
                        }
                    }, {}],
                    60: [function (t, e, n) {
                        (function (n) {
                            "use strict";
                            e.exports = i;
                            var r = t(66);

                            function i(e, n, i) {
                                var a = t(6)("algoliasearch"), u = t(44), c = t(47),
                                    l = "Usage: algoliasearch(applicationID, apiKey, opts)";
                                if (!e) throw new r.AlgoliaSearchError("Please provide an application ID. " + l);
                                if (!n) throw new r.AlgoliaSearchError("Please provide an API key. " + l);
                                this.applicationID = e, this.apiKey = n;
                                var h = [this.applicationID + "-1.algolianet.com", this.applicationID + "-2.algolianet.com", this.applicationID + "-3.algolianet.com"];
                                this.hosts = {read: [], write: []}, this.hostIndex = {read: 0, write: 0};
                                var p = (i = i || {}).protocol || "https:", d = void 0 === i.timeout ? 2e3 : i.timeout;
                                if (/:$/.test(p) || (p += ":"), "http:" !== i.protocol && "https:" !== i.protocol) throw new r.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + i.protocol + "`)");
                                i.hosts ? c(i.hosts) ? (this.hosts.read = u(i.hosts), this.hosts.write = u(i.hosts)) : (this.hosts.read = u(i.hosts.read), this.hosts.write = u(i.hosts.write)) : (this.hosts.read = [this.applicationID + "-dsn.algolia.net"].concat(h), this.hosts.write = [this.applicationID + ".algolia.net"].concat(h)), this.hosts.read = o(this.hosts.read, s(p)), this.hosts.write = o(this.hosts.write, s(p)), this.requestTimeout = d, this.extraHeaders = [], this.cache = {}, this._ua = i._ua, this._useCache = void 0 === i._useCache || i._useCache, this._setTimeout = i._setTimeout, a("init done, %j", this)
                            }

                            function o(t, e) {
                                for (var n = [], r = 0; r < t.length; ++r) n.push(e(t[r], r));
                                return n
                            }

                            function s(t) {
                                return function (e) {
                                    return t + "//" + e.toLowerCase()
                                }
                            }

                            function a() {
                                throw new r.AlgoliaSearchError("Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com")
                            }

                            function u(t, e) {
                                var n = t.toLowerCase().replace(".", "").replace("()", "");
                                return "algoliasearch: `" + t + "` was replaced by `" + e + "`. Please see https://github.com/algolia/algoliasearch-client-js/wiki/Deprecated#" + n
                            }

                            function c(t, e) {
                                e(t, 0)
                            }

                            function h(t, e) {
                                var n = !1;
                                return function () {
                                    return n || (console.log(e), n = !0), t.apply(this, arguments)
                                }
                            }

                            function p(t) {
                                if (void 0 === Array.prototype.toJSON) return JSON.stringify(t);
                                var e = Array.prototype.toJSON;
                                delete Array.prototype.toJSON;
                                var n = JSON.stringify(t);
                                return Array.prototype.toJSON = e, n
                            }

                            i.prototype = {
                                deleteIndex: function (t, e) {
                                    return this._jsonRequest({
                                        method: "DELETE",
                                        url: "/1/indexes/" + encodeURIComponent(t),
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                moveIndex: function (t, e, n) {
                                    var r = {operation: "move", destination: e};
                                    return this._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/" + encodeURIComponent(t) + "/operation",
                                        body: r,
                                        hostType: "write",
                                        callback: n
                                    })
                                },
                                copyIndex: function (t, e, n) {
                                    var r = {operation: "copy", destination: e};
                                    return this._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/" + encodeURIComponent(t) + "/operation",
                                        body: r,
                                        hostType: "write",
                                        callback: n
                                    })
                                },
                                getLogs: function (t, e, n) {
                                    return 0 === arguments.length || "function" == typeof t ? (n = t, t = 0, e = 10) : 1 !== arguments.length && "function" != typeof e || (n = e, e = 10), this._jsonRequest({
                                        method: "GET",
                                        url: "/1/logs?offset=" + t + "&length=" + e,
                                        hostType: "read",
                                        callback: n
                                    })
                                },
                                listIndexes: function (t, e) {
                                    var n = "";
                                    return void 0 === t || "function" == typeof t ? e = t : n = "?page=" + t, this._jsonRequest({
                                        method: "GET",
                                        url: "/1/indexes" + n,
                                        hostType: "read",
                                        callback: e
                                    })
                                },
                                initIndex: function (t) {
                                    return new this.Index(this, t)
                                },
                                listUserKeys: function (t) {
                                    return this._jsonRequest({
                                        method: "GET",
                                        url: "/1/keys",
                                        hostType: "read",
                                        callback: t
                                    })
                                },
                                getUserKeyACL: function (t, e) {
                                    return this._jsonRequest({
                                        method: "GET",
                                        url: "/1/keys/" + t,
                                        hostType: "read",
                                        callback: e
                                    })
                                },
                                deleteUserKey: function (t, e) {
                                    return this._jsonRequest({
                                        method: "DELETE",
                                        url: "/1/keys/" + t,
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                addUserKey: function (t, e, n) {
                                    1 !== arguments.length && "function" != typeof e || (n = e, e = null);
                                    var r = {acl: t};
                                    return e && (r.validity = e.validity, r.maxQueriesPerIPPerHour = e.maxQueriesPerIPPerHour, r.maxHitsPerQuery = e.maxHitsPerQuery, r.indexes = e.indexes, r.description = e.description, e.queryParameters && (r.queryParameters = this._getSearchParams(e.queryParameters, "")), r.referers = e.referers), this._jsonRequest({
                                        method: "POST",
                                        url: "/1/keys",
                                        body: r,
                                        hostType: "write",
                                        callback: n
                                    })
                                },
                                addUserKeyWithValidity: h(function (t, e, n) {
                                    return this.addUserKey(t, e, n)
                                }, u("client.addUserKeyWithValidity()", "client.addUserKey()")),
                                updateUserKey: function (t, e, n, r) {
                                    2 !== arguments.length && "function" != typeof n || (r = n, n = null);
                                    var i = {acl: e};
                                    return n && (i.validity = n.validity, i.maxQueriesPerIPPerHour = n.maxQueriesPerIPPerHour, i.maxHitsPerQuery = n.maxHitsPerQuery, i.indexes = n.indexes, i.description = n.description, n.queryParameters && (i.queryParameters = this._getSearchParams(n.queryParameters, "")), i.referers = n.referers), this._jsonRequest({
                                        method: "PUT",
                                        url: "/1/keys/" + t,
                                        body: i,
                                        hostType: "write",
                                        callback: r
                                    })
                                },
                                setSecurityTags: function (t) {
                                    if ("[object Array]" === Object.prototype.toString.call(t)) {
                                        for (var e = [], n = 0; n < t.length; ++n) if ("[object Array]" === Object.prototype.toString.call(t[n])) {
                                            for (var r = [], i = 0; i < t[n].length; ++i) r.push(t[n][i]);
                                            e.push("(" + r.join(",") + ")")
                                        } else e.push(t[n]);
                                        t = e.join(",")
                                    }
                                    this.securityTags = t
                                },
                                setUserToken: function (t) {
                                    this.userToken = t
                                },
                                startQueriesBatch: h(function () {
                                    this._batch = []
                                }, u("client.startQueriesBatch()", "client.search()")),
                                addQueryInBatch: h(function (t, e, n) {
                                    this._batch.push({indexName: t, query: e, params: n})
                                }, u("client.addQueryInBatch()", "client.search()")),
                                clearCache: function () {
                                    this.cache = {}
                                },
                                sendQueriesBatch: h(function (t) {
                                    return this.search(this._batch, t)
                                }, u("client.sendQueriesBatch()", "client.search()")),
                                setRequestTimeout: function (t) {
                                    t && (this.requestTimeout = parseInt(t, 10))
                                },
                                search: function (t, e) {
                                    var n = this, r = {
                                        requests: o(t, function (t) {
                                            var e = "";
                                            return void 0 !== t.query && (e += "query=" + encodeURIComponent(t.query)), {
                                                indexName: t.indexName,
                                                params: n._getSearchParams(t.params, e)
                                            }
                                        })
                                    };
                                    return this._jsonRequest({
                                        cache: this.cache,
                                        method: "POST",
                                        url: "/1/indexes/*/queries",
                                        body: r,
                                        hostType: "read",
                                        callback: e
                                    })
                                },
                                batch: function (t, e) {
                                    return this._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/*/batch",
                                        body: {requests: t},
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                destroy: a,
                                enableRateLimitForward: a,
                                disableRateLimitForward: a,
                                useSecuredAPIKey: a,
                                disableSecuredAPIKey: a,
                                generateSecuredApiKey: a,
                                Index: function (t, e) {
                                    this.indexName = e, this.as = t, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {}
                                },
                                setExtraHeader: function (t, e) {
                                    this.extraHeaders.push({name: t.toLowerCase(), value: e})
                                },
                                _sendQueriesBatch: function (t, e) {
                                    return this._jsonRequest({
                                        cache: this.cache,
                                        method: "POST",
                                        url: "/1/indexes/*/queries",
                                        body: t,
                                        hostType: "read",
                                        fallback: {
                                            method: "GET", url: "/1/indexes/*", body: {
                                                params: function () {
                                                    for (var e = "", n = 0; n < t.requests.length; ++n) {
                                                        var r = "/1/indexes/" + encodeURIComponent(t.requests[n].indexName) + "?" + t.requests[n].params;
                                                        e += n + "=" + encodeURIComponent(r) + "&"
                                                    }
                                                    return e
                                                }()
                                            }
                                        },
                                        callback: e
                                    })
                                },
                                _jsonRequest: function (e) {
                                    var i, o = t(6)("algoliasearch:" + e.url), s = e.cache, a = this, u = 0, l = !1;
                                    void 0 !== e.body && (i = p(e.body)), o("request start");
                                    var h = a.useFallback && e.fallback, d = h ? e.fallback : e, f = function t(c, h) {
                                        var d;
                                        if (a._useCache && (d = e.url), a._useCache && i && (d += "_body_" + h.body), a._useCache && s && void 0 !== s[d]) return o("serving response from cache"), a._promise.resolve(JSON.parse(p(s[d])));
                                        if (u >= a.hosts[e.hostType].length || a.useFallback && !l) return e.fallback && a._request.fallback && !l ? (o("switching to fallback"), u = 0, h.method = e.fallback.method, h.url = e.fallback.url, h.jsonBody = e.fallback.body, h.jsonBody && (h.body = p(h.jsonBody)), h.timeout = a.requestTimeout * (u + 1), a.hostIndex[e.hostType] = 0, l = !0, t(a._request.fallback, h)) : (o("could not get any response"), a._promise.reject(new r.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + a.applicationID)));
                                        var f = a.hosts[e.hostType][a.hostIndex[e.hostType]] + h.url, g = {
                                            body: i,
                                            jsonBody: e.body,
                                            method: h.method,
                                            headers: a._computeRequestHeaders(),
                                            timeout: h.timeout,
                                            debug: o
                                        };
                                        return o("method: %s, url: %s, headers: %j, timeout: %d", g.method, f, g.headers, g.timeout), c === a._request.fallback && o("using fallback"), c.call(a, f, g).then(function (t) {
                                            var e = t && t.body && t.body.message && t.body.status || t.statusCode || t && t.body && 200;
                                            o("received response: statusCode: %s, computed statusCode: %d, headers: %j", t.statusCode, e, t.headers), n.env.DEBUG && -1 !== n.env.DEBUG.indexOf("debugBody") && o("body: %j", t.body);
                                            var i = 200 === e || 201 === e,
                                                c = !i && 4 !== Math.floor(e / 100) && 1 !== Math.floor(e / 100);
                                            if (a._useCache && i && s && (s[d] = t.body), i) return t.body;
                                            if (c) return u += 1, m();
                                            var l = new r.AlgoliaSearchError(t.body && t.body.message);
                                            return a._promise.reject(l)
                                        }, function (n) {
                                            return o("error: %s, stack: %s", n.message, n.stack), n instanceof r.AlgoliaSearchError || (n = new r.Unknown(n && n.message, n)), u += 1, n instanceof r.Unknown || n instanceof r.UnparsableJSON || !c.fallback && n instanceof r.Network || u >= a.hosts[e.hostType].length && (l || !e.fallback || !a._request.fallback) ? a._promise.reject(n) : (a.hostIndex[e.hostType] = ++a.hostIndex[e.hostType] % a.hosts[e.hostType].length, n instanceof r.RequestTimeout ? m() : (a._request.fallback && !a.useFallback && (a.useFallback = !0), t(c, h)))
                                        });

                                        function m() {
                                            return a.hostIndex[e.hostType] = ++a.hostIndex[e.hostType] % a.hosts[e.hostType].length, h.timeout = a.requestTimeout * (u + 1), t(c, h)
                                        }
                                    }(h ? a._request.fallback : a._request, {
                                        url: d.url,
                                        method: d.method,
                                        body: i,
                                        jsonBody: e.body,
                                        timeout: a.requestTimeout * (u + 1)
                                    });
                                    if (!e.callback) return f;
                                    f.then(function (t) {
                                        c(function () {
                                            e.callback(null, t)
                                        }, a._setTimeout || setTimeout)
                                    }, function (t) {
                                        c(function () {
                                            e.callback(t)
                                        }, a._setTimeout || setTimeout)
                                    })
                                },
                                _getSearchParams: function (t, e) {
                                    if (this._isUndefined(t) || null === t) return e;
                                    for (var n in t) null !== n && void 0 !== t[n] && t.hasOwnProperty(n) && (e += "" === e ? "" : "&", e += n + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(t[n]) ? p(t[n]) : t[n]));
                                    return e
                                },
                                _isUndefined: function (t) {
                                    return void 0 === t
                                },
                                _computeRequestHeaders: function () {
                                    var e = t(11), n = {
                                        "x-algolia-api-key": this.apiKey,
                                        "x-algolia-application-id": this.applicationID,
                                        "x-algolia-agent": this._ua
                                    };
                                    return this.userToken && (n["x-algolia-usertoken"] = this.userToken), this.securityTags && (n["x-algolia-tagfilters"] = this.securityTags), this.extraHeaders && e(this.extraHeaders, function (t) {
                                        n[t.name] = t.value
                                    }), n
                                }
                            }, i.prototype.Index.prototype = {
                                clearCache: function () {
                                    this.cache = {}
                                },
                                addObject: function (t, e, n) {
                                    return 1 !== arguments.length && "function" != typeof e || (n = e, e = void 0), this.as._jsonRequest({
                                        method: void 0 !== e ? "PUT" : "POST",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + (void 0 !== e ? "/" + encodeURIComponent(e) : ""),
                                        body: t,
                                        hostType: "write",
                                        callback: n
                                    })
                                },
                                addObjects: function (t, e) {
                                    for (var n = {requests: []}, r = 0; r < t.length; ++r) {
                                        var i = {action: "addObject", body: t[r]};
                                        n.requests.push(i)
                                    }
                                    return this.as._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
                                        body: n,
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                getObject: function (t, e, n) {
                                    1 !== arguments.length && "function" != typeof e || (n = e, e = void 0);
                                    var r = "";
                                    if (void 0 !== e) {
                                        r = "?attributes=";
                                        for (var i = 0; i < e.length; ++i) 0 !== i && (r += ","), r += e[i]
                                    }
                                    return this.as._jsonRequest({
                                        method: "GET",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(t) + r,
                                        hostType: "read",
                                        callback: n
                                    })
                                },
                                getObjects: function (t, e, n) {
                                    var r = this;
                                    1 !== arguments.length && "function" != typeof e || (n = e, e = void 0);
                                    var i = {
                                        requests: o(t, function (t) {
                                            var n = {indexName: r.indexName, objectID: t};
                                            return e && (n.attributesToRetrieve = e.join(",")), n
                                        })
                                    };
                                    return this.as._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/*/objects",
                                        hostType: "read",
                                        body: i,
                                        callback: n
                                    })
                                },
                                partialUpdateObject: function (t, e) {
                                    return this.as._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(t.objectID) + "/partial",
                                        body: t,
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                partialUpdateObjects: function (t, e) {
                                    for (var n = {requests: []}, r = 0; r < t.length; ++r) {
                                        var i = {action: "partialUpdateObject", objectID: t[r].objectID, body: t[r]};
                                        n.requests.push(i)
                                    }
                                    return this.as._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
                                        body: n,
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                saveObject: function (t, e) {
                                    return this.as._jsonRequest({
                                        method: "PUT",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(t.objectID),
                                        body: t,
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                saveObjects: function (t, e) {
                                    for (var n = {requests: []}, r = 0; r < t.length; ++r) {
                                        var i = {action: "updateObject", objectID: t[r].objectID, body: t[r]};
                                        n.requests.push(i)
                                    }
                                    return this.as._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
                                        body: n,
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                deleteObject: function (t, e) {
                                    if ("function" == typeof t || "string" != typeof t && "number" != typeof t) {
                                        var n = new r.AlgoliaSearchError("Cannot delete an object without an objectID");
                                        return "function" == typeof (e = t) ? e(n) : this.as._promise.reject(n)
                                    }
                                    return this.as._jsonRequest({
                                        method: "DELETE",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(t),
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                deleteObjects: function (t, e) {
                                    var n = {
                                        requests: o(t, function (t) {
                                            return {action: "deleteObject", objectID: t, body: {objectID: t}}
                                        })
                                    };
                                    return this.as._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
                                        body: n,
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                deleteByQuery: function (t, e, n) {
                                    var r = this, i = r.as;
                                    1 !== arguments.length && "function" != typeof e || (n = e, e = {}), e.attributesToRetrieve = "objectID", e.hitsPerPage = 1e3, this.clearCache();
                                    var s = this.search(t, e).then(function (t) {
                                        if (0 === t.nbHits) return t;
                                        var e = o(t.hits, function (t) {
                                            return t.objectID
                                        });
                                        return r.deleteObjects(e).then(a).then(u)
                                    });

                                    function a(t) {
                                        return r.waitTask(t.taskID)
                                    }

                                    function u() {
                                        return r.deleteByQuery(t, e)
                                    }

                                    if (!n) return s;
                                    s.then(function () {
                                        c(function () {
                                            n(null)
                                        }, i._setTimeout || setTimeout)
                                    }, function (t) {
                                        c(function () {
                                            n(t)
                                        }, i._setTimeout || setTimeout)
                                    })
                                },
                                search: function (t, e, n) {
                                    if ("function" == typeof t && "object" === l(e) || "object" === l(n)) throw new r.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
                                    0 === arguments.length || "function" == typeof t ? (n = t, t = "") : 1 !== arguments.length && "function" != typeof e || (n = e, e = void 0), "object" === l(t) && null !== t ? (e = t, t = void 0) : null == t && (t = "");
                                    var i = "";
                                    return void 0 !== t && (i += "query=" + encodeURIComponent(t)), void 0 !== e && (i = this.as._getSearchParams(e, i)), this._search(i, n)
                                },
                                browse: function (e, n, r) {
                                    var i, o, s = t(57);
                                    0 === arguments.length || 1 === arguments.length && "function" == typeof arguments[0] ? (i = 0, r = arguments[0], e = void 0) : "number" == typeof arguments[0] ? (i = arguments[0], "number" == typeof arguments[1] ? o = arguments[1] : "function" == typeof arguments[1] && (r = arguments[1], o = void 0), e = void 0, n = void 0) : "object" === l(arguments[0]) ? ("function" == typeof arguments[1] && (r = arguments[1]), n = arguments[0], e = void 0) : "string" == typeof arguments[0] && "function" == typeof arguments[1] && (r = arguments[1], n = void 0), n = s({}, n || {}, {
                                        page: i,
                                        hitsPerPage: o,
                                        query: e
                                    });
                                    var a = this.as._getSearchParams(n, "");
                                    return this.as._jsonRequest({
                                        method: "GET",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse?" + a,
                                        hostType: "read",
                                        callback: r
                                    })
                                },
                                browseFrom: function (t, e) {
                                    return this.as._jsonRequest({
                                        method: "GET",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse?cursor=" + encodeURIComponent(t),
                                        hostType: "read",
                                        callback: e
                                    })
                                },
                                browseAll: function (e, n) {
                                    "object" === l(e) && (n = e, e = void 0);
                                    var r = t(57), i = new (t(61)), o = this.as, s = this,
                                        a = o._getSearchParams(r({}, n || {}, {query: e}), "");

                                    function u(t) {
                                        var e;
                                        i._stopped || (e = void 0 !== t ? "cursor=" + encodeURIComponent(t) : a, o._jsonRequest({
                                            method: "GET",
                                            url: "/1/indexes/" + encodeURIComponent(s.indexName) + "/browse?" + e,
                                            hostType: "read",
                                            callback: c
                                        }))
                                    }

                                    function c(t, e) {
                                        i._stopped || (t ? i._error(t) : (i._result(e), void 0 !== e.cursor ? u(e.cursor) : i._end()))
                                    }

                                    return u(), i
                                },
                                ttAdapter: function (t) {
                                    var e = this;
                                    return function (n, r, i) {
                                        var o;
                                        o = "function" == typeof i ? i : r, e.search(n, t, function (t, e) {
                                            o(t || e.hits)
                                        })
                                    }
                                },
                                waitTask: function (t, e) {
                                    var n = 100, r = 5e3, i = 0, o = this, s = o.as, a = function e() {
                                        return s._jsonRequest({
                                            method: "GET",
                                            hostType: "read",
                                            url: "/1/indexes/" + encodeURIComponent(o.indexName) + "/task/" + t
                                        }).then(function (t) {
                                            var o = n * ++i * i;
                                            return o > r && (o = r), "published" !== t.status ? s._promise.delay(o).then(e) : t
                                        })
                                    }();
                                    if (!e) return a;
                                    a.then(function (t) {
                                        c(function () {
                                            e(null, t)
                                        }, s._setTimeout || setTimeout)
                                    }, function (t) {
                                        c(function () {
                                            e(t)
                                        }, s._setTimeout || setTimeout)
                                    })
                                },
                                clearIndex: function (t) {
                                    return this.as._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/clear",
                                        hostType: "write",
                                        callback: t
                                    })
                                },
                                getSettings: function (t) {
                                    return this.as._jsonRequest({
                                        method: "GET",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/settings",
                                        hostType: "read",
                                        callback: t
                                    })
                                },
                                setSettings: function (t, e) {
                                    return this.as._jsonRequest({
                                        method: "PUT",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/settings",
                                        hostType: "write",
                                        body: t,
                                        callback: e
                                    })
                                },
                                listUserKeys: function (t) {
                                    return this.as._jsonRequest({
                                        method: "GET",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys",
                                        hostType: "read",
                                        callback: t
                                    })
                                },
                                getUserKeyACL: function (t, e) {
                                    return this.as._jsonRequest({
                                        method: "GET",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + t,
                                        hostType: "read",
                                        callback: e
                                    })
                                },
                                deleteUserKey: function (t, e) {
                                    return this.as._jsonRequest({
                                        method: "DELETE",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + t,
                                        hostType: "write",
                                        callback: e
                                    })
                                },
                                addUserKey: function (t, e, n) {
                                    1 !== arguments.length && "function" != typeof e || (n = e, e = null);
                                    var r = {acl: t};
                                    return e && (r.validity = e.validity, r.maxQueriesPerIPPerHour = e.maxQueriesPerIPPerHour, r.maxHitsPerQuery = e.maxHitsPerQuery, r.description = e.description, e.queryParameters && (r.queryParameters = this.as._getSearchParams(e.queryParameters, "")), r.referers = e.referers), this.as._jsonRequest({
                                        method: "POST",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys",
                                        body: r,
                                        hostType: "write",
                                        callback: n
                                    })
                                },
                                addUserKeyWithValidity: h(function (t, e, n) {
                                    return this.addUserKey(t, e, n)
                                }, u("index.addUserKeyWithValidity()", "index.addUserKey()")),
                                updateUserKey: function (t, e, n, r) {
                                    2 !== arguments.length && "function" != typeof n || (r = n, n = null);
                                    var i = {acl: e};
                                    return n && (i.validity = n.validity, i.maxQueriesPerIPPerHour = n.maxQueriesPerIPPerHour, i.maxHitsPerQuery = n.maxHitsPerQuery, i.description = n.description, n.queryParameters && (i.queryParameters = this.as._getSearchParams(n.queryParameters, "")), i.referers = n.referers), this.as._jsonRequest({
                                        method: "PUT",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + t,
                                        body: i,
                                        hostType: "write",
                                        callback: r
                                    })
                                },
                                _search: function (t, e) {
                                    return this.as._jsonRequest({
                                        cache: this.cache,
                                        method: "POST",
                                        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
                                        body: {params: t},
                                        hostType: "read",
                                        fallback: {
                                            method: "GET",
                                            url: "/1/indexes/" + encodeURIComponent(this.indexName),
                                            body: {params: t}
                                        },
                                        callback: e
                                    })
                                },
                                as: null,
                                indexName: null,
                                typeAheadArgs: null,
                                typeAheadValueOption: null
                            }
                        }).call(this, t(2))
                    }, {11: 11, 2: 2, 44: 44, 47: 47, 57: 57, 6: 6, 61: 61, 66: 66}],
                    61: [function (t, e, n) {
                        "use strict";

                        function r() {
                        }

                        e.exports = r, t(10)(r, t(1).EventEmitter), r.prototype.stop = function () {
                            this._stopped = !0, this._clean()
                        }, r.prototype._end = function () {
                            this.emit("end"), this._clean()
                        }, r.prototype._error = function (t) {
                            this.emit("error", t), this._clean()
                        }, r.prototype._result = function (t) {
                            this.emit("result", t)
                        }, r.prototype._clean = function () {
                            this.removeAllListeners("stop"), this.removeAllListeners("end"), this.removeAllListeners("error"), this.removeAllListeners("result")
                        }
                    }, {1: 1, 10: 10}],
                    62: [function (t, e, n) {
                        "use strict";
                        e.exports = c;
                        var r = t(10), i = window.Promise || t(9).Promise, o = t(60), s = t(66), a = t(64), u = t(65);

                        function c(e, n, r) {
                            var i = t(45), o = t(63);
                            return void 0 === (r = i(r || {})).protocol && (r.protocol = o()), r._ua = r._ua || c.ua, new h(e, n, r)
                        }

                        c.version = t(67), c.ua = "Algolia for vanilla JavaScript " + c.version, window.__algolia = {
                            debug: t(6),
                            algoliasearch: c
                        };
                        var l = {
                            hasXMLHttpRequest: "XMLHttpRequest" in window,
                            hasXDomainRequest: "XDomainRequest" in window,
                            cors: "withCredentials" in new XMLHttpRequest,
                            timeout: "timeout" in new XMLHttpRequest
                        };

                        function h() {
                            o.apply(this, arguments)
                        }

                        r(h, o), h.prototype._request = function (t, e) {
                            return new i(function (n, r) {
                                if (l.cors || l.hasXDomainRequest) {
                                    t = a(t, e.headers);
                                    var i, o, u = e.body, c = l.cors ? new XMLHttpRequest : new XDomainRequest;
                                    c instanceof XMLHttpRequest ? c.open(e.method, t, !0) : c.open(e.method, t), l.cors && (u && ("POST" === e.method ? c.setRequestHeader("content-type", "application/x-www-form-urlencoded") : c.setRequestHeader("content-type", "application/json")), c.setRequestHeader("accept", "application/json")), c.onprogress = function () {
                                    }, c.onload = function () {
                                        if (o) return;
                                        l.timeout || clearTimeout(i);
                                        var t;
                                        try {
                                            t = {
                                                body: JSON.parse(c.responseText),
                                                statusCode: c.status,
                                                headers: c.getAllResponseHeaders && c.getAllResponseHeaders() || {}
                                            }
                                        } catch (e) {
                                            t = new s.UnparsableJSON({more: c.responseText})
                                        }
                                        t instanceof s.UnparsableJSON ? r(t) : n(t)
                                    }, c.onerror = function (t) {
                                        if (o) return;
                                        l.timeout || clearTimeout(i);
                                        r(new s.Network({more: t}))
                                    }, l.timeout ? (c.timeout = e.timeout, c.ontimeout = h) : i = setTimeout(h, e.timeout), c.send(u)
                                } else r(new s.Network("CORS not supported"));

                                function h() {
                                    l.timeout || (o = !0, c.abort()), r(new s.RequestTimeout)
                                }
                            })
                        }, h.prototype._request.fallback = function (t, e) {
                            return t = a(t, e.headers), new i(function (n, r) {
                                u(t, e, function (t, e) {
                                    t ? r(t) : n(e)
                                })
                            })
                        }, h.prototype._promise = {
                            reject: function (t) {
                                return i.reject(t)
                            }, resolve: function (t) {
                                return i.resolve(t)
                            }, delay: function (t) {
                                return new i(function (e) {
                                    setTimeout(e, t)
                                })
                            }
                        }
                    }, {10: 10, 45: 45, 6: 6, 60: 60, 63: 63, 64: 64, 65: 65, 66: 66, 67: 67, 9: 9}],
                    63: [function (t, e, n) {
                        "use strict";
                        e.exports = function () {
                            var t = window.document.location.protocol;
                            "http:" !== t && "https:" !== t && (t = "http:");
                            return t
                        }
                    }, {}],
                    64: [function (t, e, n) {
                        "use strict";
                        e.exports = function (t, e) {
                            /\?/.test(t) ? t += "&" : t += "?";
                            return t + r.encode(e)
                        };
                        var r = t(5)
                    }, {5: 5}],
                    65: [function (t, e, n) {
                        "use strict";
                        e.exports = function (t, e, n) {
                            if ("GET" !== e.method) return void n(new Error("Method " + e.method + " " + t + " is not supported by JSONP."));
                            e.debug("JSONP: start");
                            var o = !1, s = !1;
                            i += 1;
                            var a = document.getElementsByTagName("head")[0], u = document.createElement("script"),
                                c = "algoliaJSONP_" + i, l = !1;
                            window[c] = function (t) {
                                try {
                                    delete window[c]
                                } catch (t) {
                                    window[c] = void 0
                                }
                                s || (o = !0, d(), n(null, {body: t}))
                            }, t += "&callback=" + c, e.jsonBody && e.jsonBody.params && (t += "&" + e.jsonBody.params);
                            var h = setTimeout(function () {
                                e.debug("JSONP: Script timeout"), s = !0, d(), n(new r.RequestTimeout)
                            }, e.timeout);

                            function p() {
                                e.debug("JSONP: success"), l || s || (l = !0, o || (e.debug("JSONP: Fail. Script loaded but did not call the callback"), d(), n(new r.JSONPScriptFail)))
                            }

                            function d() {
                                clearTimeout(h), u.onload = null, u.onreadystatechange = null, u.onerror = null, a.removeChild(u);
                                try {
                                    delete window[c], delete window[c + "_loaded"]
                                } catch (t) {
                                    window[c] = null, window[c + "_loaded"] = null
                                }
                            }

                            u.onreadystatechange = function () {
                                "loaded" !== this.readyState && "complete" !== this.readyState || p()
                            }, u.onload = p, u.onerror = function () {
                                if (e.debug("JSONP: Script error"), l || s) return;
                                d(), n(new r.JSONPScriptError)
                            }, u.async = !0, u.defer = !0, u.src = t, a.appendChild(u)
                        };
                        var r = t(66), i = 0
                    }, {66: 66}],
                    66: [function (t, e, n) {
                        "use strict";
                        var r = t(10);

                        function i(e, n) {
                            var r = t(11), i = this;
                            "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : i.stack = (new Error).stack || "Cannot get a stacktrace, browser is too old", this.name = this.constructor.name, this.message = e || "Unknown error", n && r(n, function (t, e) {
                                i[e] = t
                            })
                        }

                        function o(t, e) {
                            function n() {
                                var n = Array.prototype.slice.call(arguments, 0);
                                "string" != typeof n[0] && n.unshift(e), i.apply(this, n), this.name = "AlgoliaSearch" + t + "Error"
                            }

                            return r(n, i), n
                        }

                        r(i, Error), e.exports = {
                            AlgoliaSearchError: i,
                            UnparsableJSON: o("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
                            RequestTimeout: o("RequestTimeout", "Request timedout before getting a response"),
                            Network: o("Network", "Network issue, see err.more for details"),
                            JSONPScriptFail: o("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
                            JSONPScriptError: o("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
                            Unknown: o("Unknown", "Unknown error occured")
                        }
                    }, {10: 10, 11: 11}],
                    67: [function (t, e, n) {
                        e.exports = "3.7.7"
                    }, {}]
                }, {}, [62])(62)
            }, "object" === l(e) && void 0 !== t ? t.exports = c() : (o = [], void 0 === (s = "function" == typeof (i = c) ? i.apply(e, o) : i) || (t.exports = s))
        }).call(this, n("yLpj"), n("URgk").setImmediate)
    }, RsYP: function (t, e, n) {
        n("5b4q"), $(document).ready(function () {
            $(".navigation_contain").show()
        });
        var r = $(".docs_sidebar ul").find('li a[href="' + window.location.pathname + '"]');
        r.length && (r.parent().parent().parent().addClass("sub--on"), r.parent().addClass("active")), $(".docs_sidebar h2").click(function (t) {
            t.preventDefault();
            var e = $(this).parent().hasClass("sub--on");
            $(".navigation_contain ul li").removeClass("sub--on"), e || $(this).parent().addClass("sub--on")
        }), $("#version_switcher").change(function (t) {
            window.location = $("#version_switcher").val()
        }), $(".docs_main blockquote p").each(function () {
            var t, e, n = $(this).html(), r = n.match(/\{(.*?)\}/);
            if (r) var i = r[1] || !1;
            if (i) {
                switch (i) {
                    case"note":
                        t = "/img/callouts/exclamation.min.svg", e = "red";
                        break;
                    case"tip":
                        t = "/img/callouts/lightbulb.min.svg", e = "purple";
                        break;
                    case"laracasts":
                    case"video":
                        t = "/img/callouts/laracast.min.svg", e = "blue"
                }
                $(this).wrap("<div></div>"), $(this).before('<div class="icon ' + e + '"><img src="' + t + '"></div>'), $(this).html(n.replace(/\{(.*?)\}/, "")), $(this).addClass("content"), $(this).parent().addClass("callout")
            }
        })
    }, URgk: function (t, e, n) {
        (function (t) {
            var r = void 0 !== t && t || "undefined" != typeof self && self || window, i = Function.prototype.apply;

            function o(t, e) {
                this._id = t, this._clearFn = e
            }

            e.setTimeout = function () {
                return new o(i.call(setTimeout, r, arguments), clearTimeout)
            }, e.setInterval = function () {
                return new o(i.call(setInterval, r, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function (t) {
                t && t.close()
            }, o.prototype.unref = o.prototype.ref = function () {
            }, o.prototype.close = function () {
                this._clearFn.call(r, this._id)
            }, e.enroll = function (t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, e.unenroll = function (t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, e._unrefActive = e.active = function (t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, n("YBdB"), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }).call(this, n("yLpj"))
    }, YBdB: function (t, e, n) {
        (function (t, e) {
            !function (t, n) {
                "use strict";
                if (!t.setImmediate) {
                    var r, i, o, s, a, u = 1, c = {}, l = !1, h = t.document,
                        p = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    p = p && p.setTimeout ? p : t, "[object process]" === {}.toString.call(t.process) ? r = function (t) {
                        e.nextTick(function () {
                            f(t)
                        })
                    } : !function () {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0, n = t.onmessage;
                            return t.onmessage = function () {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = n, e
                        }
                    }() ? t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function (t) {
                        f(t.data)
                    }, r = function (t) {
                        o.port2.postMessage(t)
                    }) : h && "onreadystatechange" in h.createElement("script") ? (i = h.documentElement, r = function (t) {
                        var e = h.createElement("script");
                        e.onreadystatechange = function () {
                            f(t), e.onreadystatechange = null, i.removeChild(e), e = null
                        }, i.appendChild(e)
                    }) : r = function (t) {
                        setTimeout(f, 0, t)
                    } : (s = "setImmediate$" + Math.random() + "$", a = function (e) {
                        e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(s) && f(+e.data.slice(s.length))
                    }, t.addEventListener ? t.addEventListener("message", a, !1) : t.attachEvent("onmessage", a), r = function (e) {
                        t.postMessage(s + e, "*")
                    }), p.setImmediate = function (t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                        var i = {callback: t, args: e};
                        return c[u] = i, r(u), u++
                    }, p.clearImmediate = d
                }

                function d(t) {
                    delete c[t]
                }

                function f(t) {
                    if (l) setTimeout(f, 0, t); else {
                        var e = c[t];
                        if (e) {
                            l = !0;
                            try {
                                !function (t) {
                                    var e = t.callback, r = t.args;
                                    switch (r.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(r[0]);
                                            break;
                                        case 2:
                                            e(r[0], r[1]);
                                            break;
                                        case 3:
                                            e(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            e.apply(n, r)
                                    }
                                }(e)
                            } finally {
                                d(t), l = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(this, n("yLpj"), n("8oxB"))
    }, bUC5: function (t, e, n) {
        $(document).ready(function () {
            $(".nav_trigger").click(function (t) {
                t.preventDefault(), $("html").toggleClass("nav--on"), $(".bar").toggleClass("animate")
            }), $(document).on("keydown", function (t) {
                ("/" === t.key || 191 === t.which || 191 === t.keyCode) && (t.preventDefault(), $(".header_content .search_box").addClass("search--on"), $("#search-docs-input").focus())
            }), $(".footer_nav_trigger").click(function (t) {
                t.preventDefault(), $(this).parent().toggleClass("nav--on")
            }), $(".drop_trigger").click(function (t) {
                t.preventDefault(), $(this).parent().toggleClass("drop--on")
            }), $("#docsScreen").length && n("RsYP"), "" != window.algolia_app_id && n("z01h"), $(".header_content .search_box").click(function (t) {
                $(this).addClass("search--on")
            }), $(document).mouseup(function (t) {
                var e = $(".header_content .search_box");
                e.is(t.target) || 0 !== e.has(t.target).length || e.removeClass("search--on")
            }), $(".docs_body").find("a[name]").each(function () {
                var t = $('<a href="#' + this.name + '"/>');
                $(this).parent().next().wrapInner(t)
            })
        })
    }, pyCd: function (t, e) {
    }, yLpj: function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, z01h: function (t, e, n) {
        var r = n("Fo9+"), i = n("5HLv");
        n("2EJX");
        var o = r(window.algolia_app_id, window.algolia_search_key).initIndex("docs"), s = {
            suggestion: i.compile($("#search_suggestion_template").html()),
            empty: i.compile($("#search_empty_template").html()),
            footer: i.compile($("#search_footer_template").html())
        }, a = $(".search_input"), u = $(".docs_main");
        a.blur(function () {
            $(this).val("")
        });
        var c = [];
        c.push({
            source: function (t, e) {
                o.search(t, {hitsPerPage: 5, tagFilters: [window.version]}, function (t, n) {
                    if (t) throw t;
                    e(n.hits)
                })
            },
            templates: {
                suggestion: s.suggestion.render.bind(s.suggestion),
                empty: s.empty.render.bind(s.empty),
                footer: s.footer.render.bind(s.footer)
            }
        });
        var l = a.typeahead({hint: !1}, c), h = "";
        l.on("typeahead:selected", function (t, e) {
            window.location.href = "/docs/" + e._tags[0] + "/" + e.link
        }), l.on("keyup", function (t) {
            h = $(this).typeahead("val"), "" === $(this).val() && h.length == $(this).typeahead("val") ? (u.css("opacity", "1"), a.closest("#search-wrapper").removeClass("not-empty")) : (u.css("opacity", "0.1"), a.closest("#search-wrapper").addClass("not-empty")), 27 === t.keyCode && u.css("opacity", "1")
        }), l.on("typeahead:closed", function () {
            u.css("opacity", "1")
        }), l.on("typeahead:closed", function (t) {
            if ($(t.target).is(":focus")) return !1
        }), $("#cross").click(function () {
            l.typeahead("val", "").keyup(), u.css("opacity", "1")
        })
    }
});
