/* fingerprint: 0cb1865b8db48179c76ef3e86fba0b1a */
(function() {
    var t = this,
        e = t._,
        n = {},
        i = Array.prototype,
        r = Object.prototype,
        s = Function.prototype,
        o = i.push,
        a = i.slice,
        u = i.concat,
        h = (i.unshift, r.toString),
        l = r.hasOwnProperty,
        c = i.forEach,
        f = i.map,
        d = i.reduce,
        p = i.reduceRight,
        g = i.filter,
        v = i.every,
        m = i.some,
        y = i.indexOf,
        b = i.lastIndexOf,
        x = Array.isArray,
        w = Object.keys,
        _ = s.bind,
        k = function(t) {
            return t instanceof k ? t : this instanceof k ? void(this._wrapped = t) : new k(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : t._ = k, k.VERSION = "1.4.2";
    var S = k.each = k.forEach = function(t, e, i) {
        if (null != t)
            if (c && t.forEach === c) t.forEach(e, i);
            else if (t.length === +t.length) {
            for (var r = 0, s = t.length; s > r; r++)
                if (e.call(i, t[r], r, t) === n) return
        } else
            for (var o in t)
                if (k.has(t, o) && e.call(i, t[o], o, t) === n) return
    };
    k.map = k.collect = function(t, e, n) {
        var i = [];
        return null == t ? i : f && t.map === f ? t.map(e, n) : (S(t, function(t, r, s) {
            i[i.length] = e.call(n, t, r, s)
        }), i)
    }, k.reduce = k.foldl = k.inject = function(t, e, n, i) {
        var r = arguments.length > 2;
        if (null == t && (t = []), d && t.reduce === d) return i && (e = k.bind(e, i)), r ? t.reduce(e, n) : t.reduce(e);
        if (S(t, function(t, s, o) {
                r ? n = e.call(i, n, t, s, o) : (n = t, r = !0)
            }), !r) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, k.reduceRight = k.foldr = function(t, e, n, i) {
        var r = arguments.length > 2;
        if (null == t && (t = []), p && t.reduceRight === p) return i && (e = k.bind(e, i)), arguments.length > 2 ? t.reduceRight(e, n) : t.reduceRight(e);
        var s = t.length;
        if (s !== +s) {
            var o = k.keys(t);
            s = o.length
        }
        if (S(t, function(a, u, h) {
                u = o ? o[--s] : --s, r ? n = e.call(i, n, t[u], u, h) : (n = t[u], r = !0)
            }), !r) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, k.find = k.detect = function(t, e, n) {
        var i;
        return H(t, function(t, r, s) {
            return e.call(n, t, r, s) ? (i = t, !0) : void 0
        }), i
    }, k.filter = k.select = function(t, e, n) {
        var i = [];
        return null == t ? i : g && t.filter === g ? t.filter(e, n) : (S(t, function(t, r, s) {
            e.call(n, t, r, s) && (i[i.length] = t)
        }), i)
    }, k.reject = function(t, e, n) {
        var i = [];
        return null == t ? i : (S(t, function(t, r, s) {
            e.call(n, t, r, s) || (i[i.length] = t)
        }), i)
    }, k.every = k.all = function(t, e, i) {
        e || (e = k.identity);
        var r = !0;
        return null == t ? r : v && t.every === v ? t.every(e, i) : (S(t, function(t, s, o) {
            return (r = r && e.call(i, t, s, o)) ? void 0 : n
        }), !!r)
    };
    var H = k.some = k.any = function(t, e, i) {
        e || (e = k.identity);
        var r = !1;
        return null == t ? r : m && t.some === m ? t.some(e, i) : (S(t, function(t, s, o) {
            return r || (r = e.call(i, t, s, o)) ? n : void 0
        }), !!r)
    };
    k.contains = k.include = function(t, e) {
        var n = !1;
        return null == t ? n : y && t.indexOf === y ? -1 != t.indexOf(e) : n = H(t, function(t) {
            return t === e
        })
    }, k.invoke = function(t, e) {
        var n = a.call(arguments, 2);
        return k.map(t, function(t) {
            return (k.isFunction(e) ? e : t[e]).apply(t, n)
        })
    }, k.pluck = function(t, e) {
        return k.map(t, function(t) {
            return t[e]
        })
    }, k.where = function(t, e) {
        return k.isEmpty(e) ? [] : k.filter(t, function(t) {
            for (var n in e)
                if (e[n] !== t[n]) return !1;
            return !0
        })
    }, k.max = function(t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        if (!e && k.isEmpty(t)) return -1 / 0;
        var i = {
            computed: -1 / 0
        };
        return S(t, function(t, r, s) {
            var o = e ? e.call(n, t, r, s) : t;
            o >= i.computed && (i = {
                value: t,
                computed: o
            })
        }), i.value
    }, k.min = function(t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        if (!e && k.isEmpty(t)) return 1 / 0;
        var i = {
            computed: 1 / 0
        };
        return S(t, function(t, r, s) {
            var o = e ? e.call(n, t, r, s) : t;
            o < i.computed && (i = {
                value: t,
                computed: o
            })
        }), i.value
    }, k.shuffle = function(t) {
        var e, n = 0,
            i = [];
        return S(t, function(t) {
            e = k.random(n++), i[n - 1] = i[e], i[e] = t
        }), i
    };
    var C = function(t) {
        return k.isFunction(t) ? t : function(e) {
            return e[t]
        }
    };
    k.sortBy = function(t, e, n) {
        var i = C(e);
        return k.pluck(k.map(t, function(t, e, r) {
            return {
                value: t,
                index: e,
                criteria: i.call(n, t, e, r)
            }
        }).sort(function(t, e) {
            var n = t.criteria,
                i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (i > n || void 0 === i) return -1
            }
            return t.index < e.index ? -1 : 1
        }), "value")
    };
    var R = function(t, e, n, i) {
        var r = {},
            s = C(e);
        return S(t, function(e, o) {
            var a = s.call(n, e, o, t);
            i(r, a, e)
        }), r
    };
    k.groupBy = function(t, e, n) {
        return R(t, e, n, function(t, e, n) {
            (k.has(t, e) ? t[e] : t[e] = []).push(n)
        })
    }, k.countBy = function(t, e, n) {
        return R(t, e, n, function(t, e) {
            k.has(t, e) || (t[e] = 0), t[e]++
        })
    }, k.sortedIndex = function(t, e, n, i) {
        n = null == n ? k.identity : C(n);
        for (var r = n.call(i, e), s = 0, o = t.length; o > s;) {
            var a = s + o >>> 1;
            n.call(i, t[a]) < r ? s = a + 1 : o = a
        }
        return s
    }, k.toArray = function(t) {
        return t ? t.length === +t.length ? a.call(t) : k.values(t) : []
    }, k.size = function(t) {
        return t.length === +t.length ? t.length : k.keys(t).length
    }, k.first = k.head = k.take = function(t, e, n) {
        return null == e || n ? t[0] : a.call(t, 0, e)
    }, k.initial = function(t, e, n) {
        return a.call(t, 0, t.length - (null == e || n ? 1 : e))
    }, k.last = function(t, e, n) {
        return null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, k.rest = k.tail = k.drop = function(t, e, n) {
        return a.call(t, null == e || n ? 1 : e)
    }, k.compact = function(t) {
        return k.filter(t, function(t) {
            return !!t
        })
    };
    var T = function(t, e, n) {
        return S(t, function(t) {
            k.isArray(t) ? e ? o.apply(n, t) : T(t, e, n) : n.push(t)
        }), n
    };
    k.flatten = function(t, e) {
        return T(t, e, [])
    }, k.without = function(t) {
        return k.difference(t, a.call(arguments, 1))
    }, k.uniq = k.unique = function(t, e, n, i) {
        var r = n ? k.map(t, n, i) : t,
            s = [],
            o = [];
        return S(r, function(n, i) {
            (e ? i && o[o.length - 1] === n : k.contains(o, n)) || (o.push(n), s.push(t[i]))
        }), s
    }, k.union = function() {
        return k.uniq(u.apply(i, arguments))
    }, k.intersection = function(t) {
        var e = a.call(arguments, 1);
        return k.filter(k.uniq(t), function(t) {
            return k.every(e, function(e) {
                return k.indexOf(e, t) >= 0
            })
        })
    }, k.difference = function(t) {
        var e = u.apply(i, a.call(arguments, 1));
        return k.filter(t, function(t) {
            return !k.contains(e, t)
        })
    }, k.zip = function() {
        for (var t = a.call(arguments), e = k.max(k.pluck(t, "length")), n = new Array(e), i = 0; e > i; i++) n[i] = k.pluck(t, "" + i);
        return n
    }, k.object = function(t, e) {
        for (var n = {}, i = 0, r = t.length; r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    }, k.indexOf = function(t, e, n) {
        if (null == t) return -1;
        var i = 0,
            r = t.length;
        if (n) {
            if ("number" != typeof n) return i = k.sortedIndex(t, e), t[i] === e ? i : -1;
            i = 0 > n ? Math.max(0, r + n) : n
        }
        if (y && t.indexOf === y) return t.indexOf(e, n);
        for (; r > i; i++)
            if (t[i] === e) return i;
        return -1
    }, k.lastIndexOf = function(t, e, n) {
        if (null == t) return -1;
        var i = null != n;
        if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
        for (var r = i ? n : t.length; r--;)
            if (t[r] === e) return r;
        return -1
    }, k.range = function(t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, s = new Array(i); i > r;) s[r++] = t, t += n;
        return s
    };
    var E = function() {};
    k.bind = function(t, e) {
        var n, i;
        if (t.bind === _ && _) return _.apply(t, a.call(arguments, 1));
        if (!k.isFunction(t)) throw new TypeError;
        return i = a.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
            E.prototype = t.prototype;
            var r = new E,
                s = t.apply(r, i.concat(a.call(arguments)));
            return Object(s) === s ? s : r
        }
    }, k.bindAll = function(t) {
        var e = a.call(arguments, 1);
        return 0 == e.length && (e = k.functions(t)), S(e, function(e) {
            t[e] = k.bind(t[e], t)
        }), t
    }, k.memoize = function(t, e) {
        var n = {};
        return e || (e = k.identity),
            function() {
                var i = e.apply(this, arguments);
                return k.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
            }
    }, k.delay = function(t, e) {
        var n = a.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        }, e)
    }, k.defer = function(t) {
        return k.delay.apply(k, [t, 1].concat(a.call(arguments, 1)))
    }, k.throttle = function(t, e) {
        var n, i, r, s, o, a, u = k.debounce(function() {
            o = s = !1
        }, e);
        return function() {
            n = this, i = arguments;
            var h = function() {
                r = null, o && (a = t.apply(n, i)), u()
            };
            return r || (r = setTimeout(h, e)), s ? o = !0 : (s = !0, a = t.apply(n, i)), u(), a
        }
    }, k.debounce = function(t, e, n) {
        var i, r;
        return function() {
            var s = this,
                o = arguments,
                a = function() {
                    i = null, n || (r = t.apply(s, o))
                },
                u = n && !i;
            return clearTimeout(i), i = setTimeout(a, e), u && (r = t.apply(s, o)), r
        }
    }, k.once = function(t) {
        var e, n = !1;
        return function() {
            return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, k.wrap = function(t, e) {
        return function() {
            var n = [t];
            return o.apply(n, arguments), e.apply(this, n)
        }
    }, k.compose = function() {
        var t = arguments;
        return function() {
            for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
            return e[0]
        }
    }, k.after = function(t, e) {
        return 0 >= t ? e() : function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, k.keys = w || function(t) {
        if (t !== Object(t)) throw new TypeError("Invalid object");
        var e = [];
        for (var n in t) k.has(t, n) && (e[e.length] = n);
        return e
    }, k.values = function(t) {
        var e = [];
        for (var n in t) k.has(t, n) && e.push(t[n]);
        return e
    }, k.pairs = function(t) {
        var e = [];
        for (var n in t) k.has(t, n) && e.push([n, t[n]]);
        return e
    }, k.invert = function(t) {
        var e = {};
        for (var n in t) k.has(t, n) && (e[t[n]] = n);
        return e
    }, k.functions = k.methods = function(t) {
        var e = [];
        for (var n in t) k.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, k.extend = function(t) {
        return S(a.call(arguments, 1), function(e) {
            for (var n in e) t[n] = e[n]
        }), t
    }, k.pick = function(t) {
        var e = {},
            n = u.apply(i, a.call(arguments, 1));
        return S(n, function(n) {
            n in t && (e[n] = t[n])
        }), e
    }, k.omit = function(t) {
        var e = {},
            n = u.apply(i, a.call(arguments, 1));
        for (var r in t) k.contains(n, r) || (e[r] = t[r]);
        return e
    }, k.defaults = function(t) {
        return S(a.call(arguments, 1), function(e) {
            for (var n in e) null == t[n] && (t[n] = e[n])
        }), t
    }, k.clone = function(t) {
        return k.isObject(t) ? k.isArray(t) ? t.slice() : k.extend({}, t) : t
    }, k.tap = function(t, e) {
        return e(t), t
    };
    var O = function(t, e, n, i) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
        var r = h.call(t);
        if (r != h.call(e)) return !1;
        switch (r) {
            case "[object String]":
                return t == String(e);
            case "[object Number]":
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +e;
            case "[object RegExp]":
                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var s = n.length; s--;)
            if (n[s] == t) return i[s] == e;
        n.push(t), i.push(e);
        var o = 0,
            a = !0;
        if ("[object Array]" == r) {
            if (o = t.length, a = o == e.length)
                for (; o-- && (a = O(t[o], e[o], n, i)););
        } else {
            var u = t.constructor,
                l = e.constructor;
            if (u !== l && !(k.isFunction(u) && u instanceof u && k.isFunction(l) && l instanceof l)) return !1;
            for (var c in t)
                if (k.has(t, c) && (o++, !(a = k.has(e, c) && O(t[c], e[c], n, i)))) break;
            if (a) {
                for (c in e)
                    if (k.has(e, c) && !o--) break;
                a = !o
            }
        }
        return n.pop(), i.pop(), a
    };
    k.isEqual = function(t, e) {
        return O(t, e, [], [])
    }, k.isEmpty = function(t) {
        if (null == t) return !0;
        if (k.isArray(t) || k.isString(t)) return 0 === t.length;
        for (var e in t)
            if (k.has(t, e)) return !1;
        return !0
    }, k.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, k.isArray = x || function(t) {
        return "[object Array]" == h.call(t)
    }, k.isObject = function(t) {
        return t === Object(t)
    }, S(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        k["is" + t] = function(e) {
            return h.call(e) == "[object " + t + "]"
        }
    }), k.isArguments(arguments) || (k.isArguments = function(t) {
        return !(!t || !k.has(t, "callee"))
    }), "function" != typeof /./ && (k.isFunction = function(t) {
        return "function" == typeof t
    }), k.isFinite = function(t) {
        return k.isNumber(t) && isFinite(t)
    }, k.isNaN = function(t) {
        return k.isNumber(t) && t != +t
    }, k.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" == h.call(t)
    }, k.isNull = function(t) {
        return null === t
    }, k.isUndefined = function(t) {
        return void 0 === t
    }, k.has = function(t, e) {
        return l.call(t, e)
    }, k.noConflict = function() {
        return t._ = e, this
    }, k.identity = function(t) {
        return t
    }, k.times = function(t, e, n) {
        for (var i = 0; t > i; i++) e.call(n, i)
    }, k.random = function(t, e) {
        return null == e && (e = t, t = 0), t + (0 | Math.random() * (e - t + 1))
    };
    var $ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    $.unescape = k.invert($.escape);
    var j = {
        escape: new RegExp("[" + k.keys($.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + k.keys($.unescape).join("|") + ")", "g")
    };
    k.each(["escape", "unescape"], function(t) {
        k[t] = function(e) {
            return null == e ? "" : ("" + e).replace(j[t], function(e) {
                return $[t][e]
            })
        }
    }), k.result = function(t, e) {
        if (null == t) return null;
        var n = t[e];
        return k.isFunction(n) ? n.call(t) : n
    }, k.mixin = function(t) {
        S(k.functions(t), function(e) {
            var n = k[e] = t[e];
            k.prototype[e] = function() {
                var t = [this._wrapped];
                return o.apply(t, arguments), F.call(this, n.apply(k, t))
            }
        })
    };
    var A = 0;
    k.uniqueId = function(t) {
        var e = A++;
        return t ? t + e : e
    }, k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var M = /(.)^/,
        P = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function(t, e, n) {
        n = k.defaults({}, n, k.templateSettings);
        var i = new RegExp([(n.escape || M).source, (n.interpolate || M).source, (n.evaluate || M).source].join("|") + "|$", "g"),
            r = 0,
            s = "__p+='";
        t.replace(i, function(e, n, i, o, a) {
            s += t.slice(r, a).replace(B, function(t) {
                return "\\" + P[t]
            }), s += n ? "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : o ? "';\n" + o + "\n__p+='" : "", r = a + e.length
        }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(n.variable || "obj", "_", s)
        } catch (a) {
            throw a.source = s, a
        }
        if (e) return o(e, k);
        var u = function(t) {
            return o.call(this, t, k)
        };
        return u.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", u
    }, k.chain = function(t) {
        return k(t).chain()
    };
    var F = function(t) {
        return this._chain ? k(t).chain() : t
    };
    k.mixin(k), S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = i[t];
        k.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], F.call(this, n)
        }
    }), S(["concat", "join", "slice"], function(t) {
        var e = i[t];
        k.prototype[t] = function() {
            return F.call(this, e.apply(this._wrapped, arguments))
        }
    }), k.extend(k.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this),
    function() {
        var t, e = this,
            n = e.Backbone,
            i = [],
            r = i.push,
            s = i.slice,
            o = i.splice;
        t = "undefined" != typeof exports ? exports : e.Backbone = {}, t.VERSION = "0.9.10";
        var a = e._;
        a || "undefined" == typeof require || (a = require("underscore")), t.$ = e.jQuery || e.Zepto || e.ender, t.noConflict = function() {
            return e.Backbone = n, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var u = /\s+/,
            h = function(t, e, n, i) {
                if (!n) return !0;
                if ("object" == typeof n)
                    for (var r in n) t[e].apply(t, [r, n[r]].concat(i));
                else {
                    if (!u.test(n)) return !0;
                    for (var s = n.split(u), o = 0, a = s.length; a > o; o++) t[e].apply(t, [s[o]].concat(i))
                }
            },
            l = function(t, e) {
                var n, i = -1,
                    r = t.length;
                switch (e.length) {
                    case 0:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, e[0]);
                        return;
                    case 2:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, e[0], e[1]);
                        return;
                    case 3:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, e[0], e[1], e[2]);
                        return;
                    default:
                        for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e)
                }
            },
            c = t.Events = {
                on: function(t, e, n) {
                    if (!h(this, "on", t, [e, n]) || !e) return this;
                    this._events || (this._events = {});
                    var i = this._events[t] || (this._events[t] = []);
                    return i.push({
                        callback: e,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(t, e, n) {
                    if (!h(this, "once", t, [e, n]) || !e) return this;
                    var i = this,
                        r = a.once(function() {
                            i.off(t, r), e.apply(this, arguments)
                        });
                    return r._callback = e, this.on(t, r, n), this
                },
                off: function(t, e, n) {
                    var i, r, s, o, u, l, c, f;
                    if (!this._events || !h(this, "off", t, [e, n])) return this;
                    if (!t && !e && !n) return this._events = {}, this;
                    for (o = t ? [t] : a.keys(this._events), u = 0, l = o.length; l > u; u++)
                        if (t = o[u], i = this._events[t]) {
                            if (s = [], e || n)
                                for (c = 0, f = i.length; f > c; c++) r = i[c], (e && e !== r.callback && e !== r.callback._callback || n && n !== r.context) && s.push(r);
                            this._events[t] = s
                        }
                    return this
                },
                trigger: function(t) {
                    if (!this._events) return this;
                    var e = s.call(arguments, 1);
                    if (!h(this, "trigger", t, e)) return this;
                    var n = this._events[t],
                        i = this._events.all;
                    return n && l(n, e), i && l(i, arguments), this
                },
                listenTo: function(t, e, n) {
                    var i = this._listeners || (this._listeners = {}),
                        r = t._listenerId || (t._listenerId = a.uniqueId("l"));
                    return i[r] = t, t.on(e, "object" == typeof e ? this : n, this), this
                },
                stopListening: function(t, e, n) {
                    var i = this._listeners;
                    if (i) {
                        if (t) t.off(e, "object" == typeof e ? this : n, this), e || n || delete i[t._listenerId];
                        else {
                            "object" == typeof e && (n = this);
                            for (var r in i) i[r].off(e, n, this);
                            this._listeners = {}
                        }
                        return this
                    }
                }
            };
        c.bind = c.on, c.unbind = c.off, a.extend(t, c);
        var f = t.Model = function(t, e) {
            var n, i = t || {};
            this.cid = a.uniqueId("c"), this.attributes = {}, e && e.collection && (this.collection = e.collection), e && e.parse && (i = this.parse(i, e) || {}), (n = a.result(this, "defaults")) && (i = a.defaults({}, i, n)), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
        };
        a.extend(f.prototype, c, {
            changed: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function() {
                return a.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(t) {
                return this.attributes[t]
            },
            escape: function(t) {
                return a.escape(this.get(t))
            },
            has: function(t) {
                return null != this.get(t)
            },
            set: function(t, e, n) {
                var i, r, s, o, u, h, l, c;
                if (null == t) return this;
                if ("object" == typeof t ? (r = t, n = e) : (r = {})[t] = e, n || (n = {}), !this._validate(r, n)) return !1;
                s = n.unset, u = n.silent, o = [], h = this._changing, this._changing = !0, h || (this._previousAttributes = a.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in r && (this.id = r[this.idAttribute]);
                for (i in r) e = r[i], a.isEqual(c[i], e) || o.push(i), a.isEqual(l[i], e) ? delete this.changed[i] : this.changed[i] = e, s ? delete c[i] : c[i] = e;
                if (!u) {
                    o.length && (this._pending = !0);
                    for (var f = 0, d = o.length; d > f; f++) this.trigger("change:" + o[f], this, c[o[f]], n)
                }
                if (h) return this;
                if (!u)
                    for (; this._pending;) this._pending = !1, this.trigger("change", this, n);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(t, e) {
                return this.set(t, void 0, a.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function(t) {
                var e = {};
                for (var n in this.attributes) e[n] = void 0;
                return this.set(e, a.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function(t) {
                return null == t ? !a.isEmpty(this.changed) : a.has(this.changed, t)
            },
            changedAttributes: function(t) {
                if (!t) return this.hasChanged() ? a.clone(this.changed) : !1;
                var e, n = !1,
                    i = this._changing ? this._previousAttributes : this.attributes;
                for (var r in t) a.isEqual(i[r], e = t[r]) || ((n || (n = {}))[r] = e);
                return n
            },
            previous: function(t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function() {
                return a.clone(this._previousAttributes)
            },
            fetch: function(t) {
                t = t ? a.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = t.success;
                return t.success = function(t, n, i) {
                    return t.set(t.parse(n, i), i) ? void(e && e(t, n, i)) : !1
                }, this.sync("read", this, t)
            },
            save: function(t, e, n) {
                var i, r, s, o, u = this.attributes;
                return null == t || "object" == typeof t ? (i = t, n = e) : (i = {})[t] = e, !i || n && n.wait || this.set(i, n) ? (n = a.extend({
                    validate: !0
                }, n), this._validate(i, n) ? (i && n.wait && (this.attributes = a.extend({}, u, i)), void 0 === n.parse && (n.parse = !0), r = n.success, n.success = function(t, e, n) {
                    t.attributes = u;
                    var s = t.parse(e, n);
                    return n.wait && (s = a.extend(i || {}, s)), a.isObject(s) && !t.set(s, n) ? !1 : void(r && r(t, e, n))
                }, s = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === s && (n.attrs = i), o = this.sync(s, this, n), i && n.wait && (this.attributes = u), o) : !1) : !1
            },
            destroy: function(t) {
                t = t ? a.clone(t) : {};
                var e = this,
                    n = t.success,
                    i = function() {
                        e.trigger("destroy", e, e.collection, t)
                    };
                if (t.success = function(t, e, r) {
                        (r.wait || t.isNew()) && i(), n && n(t, e, r)
                    }, this.isNew()) return t.success(this, null, t), !1;
                var r = this.sync("delete", this, t);
                return t.wait || i(), r
            },
            url: function() {
                var t = a.result(this, "urlRoot") || a.result(this.collection, "url") || $();
                return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(t) {
                return t
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return null == this.id
            },
            isValid: function(t) {
                return !this.validate || !this.validate(this.attributes, t)
            },
            _validate: function(t, e) {
                if (!e.validate || !this.validate) return !0;
                t = a.extend({}, this.attributes, t);
                var n = this.validationError = this.validate(t, e) || null;
                return n ? (this.trigger("invalid", this, n, e || {}), !1) : !0
            }
        });
        var d = t.Collection = function(t, e) {
            e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this.models = [], this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, a.extend({
                silent: !0
            }, e))
        };
        a.extend(d.prototype, c, {
            model: f,
            initialize: function() {},
            toJSON: function(t) {
                return this.map(function(e) {
                    return e.toJSON(t)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(t, e) {
                t = a.isArray(t) ? t.slice() : [t], e || (e = {});
                var n, i, s, u, h, l, c, f, d, p;
                for (c = [], f = e.at, d = this.comparator && null == f && 0 != e.sort, p = a.isString(this.comparator) ? this.comparator : null, n = 0, i = t.length; i > n; n++)(s = this._prepareModel(u = t[n], e)) ? (h = this.get(s)) ? e.merge && (h.set(u === s ? s.attributes : u, e), d && !l && h.hasChanged(p) && (l = !0)) : (c.push(s), s.on("all", this._onModelEvent, this), this._byId[s.cid] = s, null != s.id && (this._byId[s.id] = s)) : this.trigger("invalid", this, u, e);
                if (c.length && (d && (l = !0), this.length += c.length, null != f ? o.apply(this.models, [f, 0].concat(c)) : r.apply(this.models, c)), l && this.sort({
                        silent: !0
                    }), e.silent) return this;
                for (n = 0, i = c.length; i > n; n++)(s = c[n]).trigger("add", s, this, e);
                return l && this.trigger("sort", this, e), this
            },
            remove: function(t, e) {
                t = a.isArray(t) ? t.slice() : [t], e || (e = {});
                var n, i, r, s;
                for (n = 0, i = t.length; i > n; n++) s = this.get(t[n]), s && (delete this._byId[s.id], delete this._byId[s.cid], r = this.indexOf(s), this.models.splice(r, 1), this.length--, e.silent || (e.index = r, s.trigger("remove", s, this, e)), this._removeReference(s));
                return this
            },
            push: function(t, e) {
                return t = this._prepareModel(t, e), this.add(t, a.extend({
                    at: this.length
                }, e)), t
            },
            pop: function(t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t), e
            },
            unshift: function(t, e) {
                return t = this._prepareModel(t, e), this.add(t, a.extend({
                    at: 0
                }, e)), t
            },
            shift: function(t) {
                var e = this.at(0);
                return this.remove(e, t), e
            },
            slice: function(t, e) {
                return this.models.slice(t, e)
            },
            get: function(t) {
                return null == t ? void 0 : (this._idAttr || (this._idAttr = this.model.prototype.idAttribute), this._byId[t.id || t.cid || t[this._idAttr] || t])
            },
            at: function(t) {
                return this.models[t]
            },
            where: function(t) {
                return a.isEmpty(t) ? [] : this.filter(function(e) {
                    for (var n in t)
                        if (t[n] !== e.get(n)) return !1;
                    return !0
                })
            },
            sort: function(t) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}), a.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(a.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
            },
            pluck: function(t) {
                return a.invoke(this.models, "get", t)
            },
            update: function(t, e) {
                e = a.extend({
                    add: !0,
                    merge: !0,
                    remove: !0
                }, e), e.parse && (t = this.parse(t, e));
                var n, i, r, s, o = [],
                    u = [],
                    h = {};
                if (a.isArray(t) || (t = t ? [t] : []), e.add && !e.remove) return this.add(t, e);
                for (i = 0, r = t.length; r > i; i++) n = t[i], s = this.get(n), e.remove && s && (h[s.cid] = !0), (e.add && !s || e.merge && s) && o.push(n);
                if (e.remove)
                    for (i = 0, r = this.models.length; r > i; i++) n = this.models[i], h[n.cid] || u.push(n);
                return u.length && this.remove(u, e), o.length && this.add(o, e), this
            },
            reset: function(t, e) {
                e || (e = {}), e.parse && (t = this.parse(t, e));
                for (var n = 0, i = this.models.length; i > n; n++) this._removeReference(this.models[n]);
                return e.previousModels = this.models.slice(), this._reset(), t && this.add(t, a.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), this
            },
            fetch: function(t) {
                t = t ? a.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = t.success;
                return t.success = function(t, n, i) {
                    var r = i.update ? "update" : "reset";
                    t[r](n, i), e && e(t, n, i)
                }, this.sync("read", this, t)
            },
            create: function(t, e) {
                if (e = e ? a.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
                e.wait || this.add(t, e);
                var n = this,
                    i = e.success;
                return e.success = function(t, e, r) {
                    r.wait && n.add(t, r), i && i(t, e, r)
                }, t.save(null, e), t
            },
            parse: function(t) {
                return t
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models.length = 0, this._byId = {}
            },
            _prepareModel: function(t, e) {
                if (t instanceof f) return t.collection || (t.collection = this), t;
                e || (e = {}), e.collection = this;
                var n = new this.model(t, e);
                return n._validate(t, e) ? n : !1
            },
            _removeReference: function(t) {
                this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(t, e, n, i) {
                ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
            },
            sortedIndex: function(t, e, n) {
                e || (e = this.comparator);
                var i = a.isFunction(e) ? e : function(t) {
                    return t.get(e)
                };
                return a.sortedIndex(this.models, t, i, n)
            }
        });
        var p = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
        a.each(p, function(t) {
            d.prototype[t] = function() {
                var e = s.call(arguments);
                return e.unshift(this.models), a[t].apply(a, e)
            }
        });
        var g = ["groupBy", "countBy", "sortBy"];
        a.each(g, function(t) {
            d.prototype[t] = function(e, n) {
                var i = a.isFunction(e) ? e : function(t) {
                    return t.get(e)
                };
                return a[t](this.models, i, n)
            }
        });
        var v = t.Router = function(t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            m = /\((.*?)\)/g,
            y = /(\(\?)?:\w+/g,
            b = /\*\w+/g,
            x = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        a.extend(v.prototype, c, {
            initialize: function() {},
            route: function(e, n, i) {
                return a.isRegExp(e) || (e = this._routeToRegExp(e)), i || (i = this[n]), t.history.route(e, a.bind(function(r) {
                    var s = this._extractParameters(e, r);
                    i && i.apply(this, s), this.trigger.apply(this, ["route:" + n].concat(s)), this.trigger("route", n, s), t.history.trigger("route", this, n, s)
                }, this)), this
            },
            navigate: function(e, n) {
                return t.history.navigate(e, n), this
            },
            _bindRoutes: function() {
                if (this.routes)
                    for (var t, e = a.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
            },
            _routeToRegExp: function(t) {
                return t = t.replace(x, "\\$&").replace(m, "(?:$1)?").replace(y, function(t, e) {
                    return e ? t : "([^/]+)"
                }).replace(b, "(.*?)"), new RegExp("^" + t + "$")
            },
            _extractParameters: function(t, e) {
                return t.exec(e).slice(1)
            }
        });
        var w = t.History = function() {
                this.handlers = [], a.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            _ = /^[#\/]|\s+$/g,
            k = /^\/+|\/+$/g,
            S = /msie [\w.]+/,
            H = /\/$/;
        w.started = !1, a.extend(w.prototype, c, {
            interval: 50,
            getHash: function(t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getFragment: function(t, e) {
                if (null == t)
                    if (this._hasPushState || !this._wantsHashChange || e) {
                        t = this.location.pathname;
                        var n = this.root.replace(H, "");
                        t.indexOf(n) || (t = t.substr(n.length))
                    } else t = this.getHash();
                return t.replace(_, "")
            },
            start: function(e) {
                if (w.started) throw new Error("Backbone.history has already been started");
                w.started = !0, this.options = a.extend({}, {
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var n = this.getFragment(),
                    i = document.documentMode,
                    r = S.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
                this.root = ("/" + this.root + "/").replace(k, "/"), r && this._wantsHashChange && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(n)), this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = n;
                var s = this.location,
                    o = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
                return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !o ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && o && s.hash && (this.fragment = this.getHash().replace(_, ""), this.history.replaceState({}, document.title, this.root + this.fragment + s.search)), this.options.silent ? void 0 : this.loadUrl())
            },
            stop: function() {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), w.started = !1
            },
            route: function(t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function() {
                var t = this.getFragment();
                return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void(this.loadUrl() || this.loadUrl(this.getHash())))
            },
            loadUrl: function(t) {
                var e = this.fragment = this.getFragment(t),
                    n = a.any(this.handlers, function(t) {
                        return t.route.test(e) ? (t.callback(e), !0) : void 0
                    });
                return n
            },
            navigate: function(t, e) {
                if (!w.started) return !1;
                if (e && e !== !0 || (e = {
                        trigger: e
                    }), t = this.getFragment(t || ""), this.fragment !== t) {
                    this.fragment = t;
                    var n = this.root + t;
                    if (this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                    }
                    e.trigger && this.loadUrl(t)
                }
            },
            _updateHash: function(t, e, n) {
                if (n) {
                    var i = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(i + "#" + e)
                } else t.hash = "#" + e
            }
        }), t.history = new w;
        var C = t.View = function(t) {
                this.cid = a.uniqueId("view"), this._configure(t || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            R = /^(\S+)\s*(.*)$/,
            T = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        a.extend(C.prototype, c, {
            tagName: "div",
            $: function(t) {
                return this.$el.find(t)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(e, n) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(t) {
                if (t || (t = a.result(this, "events"))) {
                    this.undelegateEvents();
                    for (var e in t) {
                        var n = t[e];
                        if (a.isFunction(n) || (n = this[t[e]]), !n) throw new Error('Method "' + t[e] + '" does not exist');
                        var i = e.match(R),
                            r = i[1],
                            s = i[2];
                        n = a.bind(n, this), r += ".delegateEvents" + this.cid, "" === s ? this.$el.on(r, n) : this.$el.on(r, s, n)
                    }
                }
            },
            undelegateEvents: function() {
                this.$el.off(".delegateEvents" + this.cid)
            },
            _configure: function(t) {
                this.options && (t = a.extend({}, a.result(this, "options"), t)), a.extend(this, a.pick(t, T)), this.options = t
            },
            _ensureElement: function() {
                if (this.el) this.setElement(a.result(this, "el"), !1);
                else {
                    var e = a.extend({}, a.result(this, "attributes"));
                    this.id && (e.id = a.result(this, "id")), this.className && (e["class"] = a.result(this, "className"));
                    var n = t.$("<" + a.result(this, "tagName") + ">").attr(e);
                    this.setElement(n, !1)
                }
            }
        });
        var E = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        t.sync = function(e, n, i) {
            var r = E[e];
            a.defaults(i || (i = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var s = {
                type: r,
                dataType: "json"
            };
            if (i.url || (s.url = a.result(n, "url") || $()), null != i.data || !n || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(i.attrs || n.toJSON(i))), i.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                    model: s.data
                } : {}), i.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
                s.type = "POST", i.emulateJSON && (s.data._method = r);
                var o = i.beforeSend;
                i.beforeSend = function(t) {
                    return t.setRequestHeader("X-HTTP-Method-Override", r), o ? o.apply(this, arguments) : void 0
                }
            }
            "GET" === s.type || i.emulateJSON || (s.processData = !1);
            var u = i.success;
            i.success = function(t) {
                u && u(n, t, i), n.trigger("sync", n, t, i)
            };
            var h = i.error;
            i.error = function(t) {
                h && h(n, t, i), n.trigger("error", n, t, i)
            };
            var l = i.xhr = t.ajax(a.extend(s, i));
            return n.trigger("request", n, l, i), l
        }, t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var O = function(t, e) {
            var n, i = this;
            n = t && a.has(t, "constructor") ? t.constructor : function() {
                return i.apply(this, arguments)
            }, a.extend(n, i, e);
            var r = function() {
                this.constructor = n
            };
            return r.prototype = i.prototype, n.prototype = new r, t && a.extend(n.prototype, t), n.__super__ = i.prototype, n
        };
        f.extend = d.extend = v.extend = C.extend = w.extend = O;
        var $ = function() {
            throw new Error('A "url" property or function must be specified')
        }
    }.call(this);
/**
 * Dragdealer JS v0.9.5
 * http://code.ovidiu.ch/dragdealer-js
 *
 * Copyright (c) 2010, Ovidiu Chereches
 * MIT License
 * http://legal.ovidiu.ch/licenses/MIT
 */
var Cursor = {
    x: 0,
    y: 0,
    init: function() {
        this.setEvent("mouse"), this.setEvent("touch")
    },
    setEvent: function(t) {
        var e = document["on" + t + "move"] || function() {};
        document["on" + t + "move"] = function(t) {
            e(t), Cursor.refresh(t)
        }
    },
    refresh: function(t) {
        t || (t = window.event), "mousemove" == t.type ? this.set(t) : t.touches && this.set(t.touches[0])
    },
    set: function(t) {
        t.pageX || t.pageY ? (this.x = t.pageX, this.y = t.pageY) : (t.clientX || t.clientY) && (this.x = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, this.y = t.clientY + document.body.scrollTop + document.documentElement.scrollTop)
    }
};
Cursor.init();
var Position = {
        get: function(t) {
            var e = curtop = 0;
            if (t.offsetParent)
                do e += t.offsetLeft, curtop += t.offsetTop; while (t = t.offsetParent);
            return [e, curtop]
        }
    },
    Dragdealer = function(t, e) {
        if ("string" == typeof t && (t = document.getElementById(t)), t) {
            var n = t.getElementsByTagName("div")[0];
            n && -1 != n.className.search(/(^|\s)handle(\s|$)/) && (this.init(t, n, e || {}), this.setup())
        }
    };
Dragdealer.prototype = {
        init: function(t, e, n) {
            this.wrapper = t, this.handle = e, this.options = n, this.disabled = this.getOption("disabled", !1), this.horizontal = this.getOption("horizontal", !0), this.vertical = this.getOption("vertical", !1), this.slide = this.getOption("slide", !0), this.steps = this.getOption("steps", 0), this.snap = this.getOption("snap", !1), this.loose = this.getOption("loose", !1), this.speed = this.getOption("speed", 10) / 100, this.xPrecision = this.getOption("xPrecision", 0), this.yPrecision = this.getOption("yPrecision", 0), this.callback = n.callback || null, this.animationCallback = n.animationCallback || null, this.bounds = {
                left: n.left || 0,
                right: -(n.right || 0),
                top: n.top || 0,
                bottom: -(n.bottom || 0),
                x0: 0,
                x1: 0,
                xRange: 0,
                y0: 0,
                y1: 0,
                yRange: 0
            }, this.value = {
                prev: [-1, -1],
                current: [n.x || 0, n.y || 0],
                target: [n.x || 0, n.y || 0]
            }, this.offset = {
                wrapper: [0, 0],
                mouse: [0, 0],
                prev: [-999999, -999999],
                current: [0, 0],
                target: [0, 0]
            }, this.change = [0, 0], this.activity = !1, this.dragging = !1, this.tapping = !1
        },
        getOption: function(t, e) {
            return void 0 !== this.options[t] ? this.options[t] : e
        },
        setup: function() {
            this.setWrapperOffset(), this.setBoundsPadding(), this.setBounds(), this.setSteps(), this.addListeners()
        },
        setWrapperOffset: function() {
            this.offset.wrapper = Position.get(this.wrapper)
        },
        setBoundsPadding: function() {
            this.bounds.left || this.bounds.right || (this.bounds.left = Position.get(this.handle)[0] - this.offset.wrapper[0], this.bounds.right = -this.bounds.left), this.bounds.top || this.bounds.bottom || (this.bounds.top = Position.get(this.handle)[1] - this.offset.wrapper[1], this.bounds.bottom = -this.bounds.top)
        },
        setBounds: function() {
            this.bounds.x0 = this.bounds.left, this.bounds.x1 = this.wrapper.offsetWidth + this.bounds.right, this.bounds.xRange = this.bounds.x1 - this.bounds.x0 - this.handle.offsetWidth, this.bounds.y0 = this.bounds.top, this.bounds.y1 = this.wrapper.offsetHeight + this.bounds.bottom, this.bounds.yRange = this.bounds.y1 - this.bounds.y0 - this.handle.offsetHeight, this.bounds.xStep = 1 / (this.xPrecision || Math.max(this.wrapper.offsetWidth, this.handle.offsetWidth)), this.bounds.yStep = 1 / (this.yPrecision || Math.max(this.wrapper.offsetHeight, this.handle.offsetHeight))
        },
        setSteps: function() {
            if (this.steps > 1) {
                this.stepRatios = [];
                for (var t = 0; t <= this.steps - 1; t++) this.stepRatios[t] = t / (this.steps - 1)
            }
        },
        addListeners: function() {
            var t = this;
            this.wrapper.onselectstart = function() {
                return !1
            }, this.handle.onmousedown = this.handle.ontouchstart = function(e) {
                t.handleDownHandler(e)
            }, this.wrapper.onmousedown = this.wrapper.ontouchstart = function(e) {
                t.wrapperDownHandler(e)
            };
            var e = document.onmouseup || function() {};
            document.onmouseup = function(n) {
                e(n), t.documentUpHandler(n)
            };
            var n = document.ontouchend || function() {};
            document.ontouchend = function(e) {
                n(e), t.documentUpHandler(e)
            };
            var i = window.onresize || function() {};
            window.onresize = function(e) {
                i(e), t.documentResizeHandler(e)
            }, this.wrapper.onmousemove = function() {
                t.activity = !0
            }, this.wrapper.onclick = function() {
                return !t.activity
            }, this.interval = setInterval(function() {
                t.animate()
            }, 25), t.animate(!1, !0)
        },
        handleDownHandler: function(t) {
            this.activity = !1, Cursor.refresh(t), this.preventDefaults(t, !0), this.startDrag(), this.cancelEvent(t)
        },
        wrapperDownHandler: function(t) {
            Cursor.refresh(t), this.preventDefaults(t, !0), this.startTap()
        },
        documentUpHandler: function() {
            this.stopDrag(), this.stopTap(), $(this.handle).trigger("dang")
        },
        documentResizeHandler: function() {
            this.setWrapperOffset(), this.setBounds(), this.update()
        },
        enable: function() {
            this.disabled = !1, this.handle.className = this.handle.className.replace(/\s?disabled/g, "")
        },
        disable: function() {
            this.disabled = !0, this.handle.className += " disabled"
        },
        setStep: function(t, e, n) {
            this.setValue(this.steps && t > 1 ? (t - 1) / (this.steps - 1) : 0, this.steps && e > 1 ? (e - 1) / (this.steps - 1) : 0, n)
        },
        setValue: function(t, e, n) {
            this.setTargetValue([t, e || 0]), n && this.groupCopy(this.value.current, this.value.target)
        },
        startTap: function(t) {
            this.disabled || (this.tapping = !0, void 0 === t && (t = [Cursor.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, Cursor.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]), this.setTargetOffset(t))
        },
        stopTap: function() {
            !this.disabled && this.tapping && (this.tapping = !1, this.setTargetValue(this.value.current), this.result())
        },
        startDrag: function() {
            this.disabled || (this.offset.mouse = [Cursor.x - Position.get(this.handle)[0], Cursor.y - Position.get(this.handle)[1]], this.dragging = !0)
        },
        stopDrag: function() {
            if (!this.disabled && this.dragging) {
                this.dragging = !1;
                var t = this.groupClone(this.value.current);
                if (this.slide) {
                    var e = this.change;
                    t[0] += 4 * e[0], t[1] += 4 * e[1]
                }
                this.setTargetValue(t), this.result()
            }
        },
        feedback: function() {
            var t = this.value.current;
            this.snap && this.steps > 1 && (t = this.getClosestSteps(t)), this.groupCompare(t, this.value.prev) || ("function" == typeof this.animationCallback && this.animationCallback(t[0], t[1]), this.groupCopy(this.value.prev, t))
        },
        result: function() {
            "function" == typeof this.callback && this.callback(this.value.target[0], this.value.target[1])
        },
        animate: function(t, e) {
            if (!t || this.dragging) {
                if (this.dragging) {
                    var n = this.groupClone(this.value.target),
                        i = [Cursor.x - this.offset.wrapper[0] - this.offset.mouse[0], Cursor.y - this.offset.wrapper[1] - this.offset.mouse[1]];
                    this.setTargetOffset(i, this.loose), this.change = [this.value.target[0] - n[0], this.value.target[1] - n[1]]
                }(this.dragging || e) && this.groupCopy(this.value.current, this.value.target), (this.dragging || this.glide() || e) && (this.update(), this.feedback())
            }
        },
        glide: function() {
            var t = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
            return t[0] || t[1] ? (Math.abs(t[0]) > this.bounds.xStep || Math.abs(t[1]) > this.bounds.yStep ? (this.value.current[0] += t[0] * this.speed, this.value.current[1] += t[1] * this.speed) : this.groupCopy(this.value.current, this.value.target), !0) : !1
        },
        update: function() {
            this.offset.current = this.getOffsetsByRatios(this.snap ? this.getClosestSteps(this.value.current) : this.value.current), this.show()
        },
        show: function() {
            this.groupCompare(this.offset.current, this.offset.prev) || (this.horizontal && (this.handle.style.left = String(this.offset.current[0]) + "px"), this.vertical && (this.handle.style.top = String(this.offset.current[1]) + "px"), this.groupCopy(this.offset.prev, this.offset.current))
        },
        setTargetValue: function(t, e) {
            var n = e ? this.getLooseValue(t) : this.getProperValue(t);
            this.groupCopy(this.value.target, n), this.offset.target = this.getOffsetsByRatios(n)
        },
        setTargetOffset: function(t, e) {
            var n = this.getRatiosByOffsets(t),
                i = e ? this.getLooseValue(n) : this.getProperValue(n);
            this.groupCopy(this.value.target, i), this.offset.target = this.getOffsetsByRatios(i)
        },
        getLooseValue: function(t) {
            var e = this.getProperValue(t);
            return [e[0] + (t[0] - e[0]) / 4, e[1] + (t[1] - e[1]) / 4]
        },
        getProperValue: function(t) {
            var e = this.groupClone(t);
            return e[0] = Math.max(e[0], 0), e[1] = Math.max(e[1], 0), e[0] = Math.min(e[0], 1), e[1] = Math.min(e[1], 1), (!this.dragging && !this.tapping || this.snap) && this.steps > 1 && (e = this.getClosestSteps(e)), e
        },
        getRatiosByOffsets: function(t) {
            return [this.getRatioByOffset(t[0], this.bounds.xRange, this.bounds.x0), this.getRatioByOffset(t[1], this.bounds.yRange, this.bounds.y0)]
        },
        getRatioByOffset: function(t, e, n) {
            return e ? (t - n) / e : 0
        },
        getOffsetsByRatios: function(t) {
            return [this.getOffsetByRatio(t[0], this.bounds.xRange, this.bounds.x0), this.getOffsetByRatio(t[1], this.bounds.yRange, this.bounds.y0)]
        },
        getOffsetByRatio: function(t, e, n) {
            return Math.round(t * e) + n
        },
        getClosestSteps: function(t) {
            return [this.getClosestStep(t[0]), this.getClosestStep(t[1])]
        },
        getClosestStep: function(t) {
            for (var e = 0, n = 1, i = 0; i <= this.steps - 1; i++) Math.abs(this.stepRatios[i] - t) < n && (n = Math.abs(this.stepRatios[i] - t), e = i);
            return this.stepRatios[e]
        },
        groupCompare: function(t, e) {
            return t[0] == e[0] && t[1] == e[1]
        },
        groupCopy: function(t, e) {
            t[0] = e[0], t[1] = e[1]
        },
        groupClone: function(t) {
            return [t[0], t[1]]
        },
        preventDefaults: function(t, e) {
            t || (t = window.event), t.preventDefault && t.preventDefault(), t.returnValue = !1, e && document.selection && document.selection.empty()
        },
        cancelEvent: function(t) {
            t || (t = window.event), t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0
        }
    }, ! function(t) {
        t.fn.dragdealer = function(t) {
            return new Dragdealer(this[0], t)
        }
    }(jQuery),
    function() {
        if (!this.require) {
            var t = {},
                e = {},
                n = function(s, o) {
                    var a, u, h = i(o, s),
                        l = i(h, "./index");
                    if (a = e[h] || e[l]) return a;
                    if (u = t[h] || t[h = l]) return a = {
                        id: h,
                        exports: {}
                    }, e[h] = a.exports, u(a.exports, function(t) {
                        return n(t, r(h))
                    }, a), e[h] = a.exports;
                    throw "module " + s + " not found"
                },
                i = function(t, e) {
                    var n, i, r = [];
                    n = /^\.\.?(\/|$)/.test(e) ? [t, e].join("/").split("/") : e.split("/");
                    for (var s = 0, o = n.length; o > s; s++) i = n[s], ".." == i ? r.pop() : "." != i && "" != i && r.push(i);
                    return r.join("/")
                },
                r = function(t) {
                    return t.split("/").slice(0, -1).join("/")
                };
            this.require = function(t) {
                return n(t, "")
            }, this.require.define = function(e) {
                for (var n in e) t[n] = e[n]
            }, this.require.modules = t, this.require.cache = e
        }
        return this.require.define
    }.call(this)({
        color: function(t, e, n) {
            (function() {
                var t;
                t = Backbone.Model.extend({
                    defaults: {},
                    randomColor: function() {
                        return [_.random(0, 360), 100, 50, 1]
                    },
                    updateRgb: function(t) {
                        return t || (t = this.hslToRgb(this.hsla())), this.set({
                            rgb: [t[0], t[1], t[2]]
                        }), t
                    },
                    updateHsl: function(t) {
                        return this.set({
                            h: t[0],
                            s: t[1],
                            l: t[2]
                        })
                    },
                    updateHex: function(t) {
                        return this.set({
                            hex: this.rgbToHex(t || this.rgba())
                        })
                    },
                    h: function(t) {
                        return this.inRange("h", t) ? (this.get("h") !== t && (this.set({
                            h: t
                        }), this.updateHex(this.updateRgb())), t) : !1
                    },
                    s: function(t) {
                        return this.inRange("s", t) ? (this.get("s") !== t && (this.set({
                            s: t
                        }), this.updateHex(this.updateRgb())), t) : !1
                    },
                    l: function(t) {
                        return this.inRange("l", t) ? (this.get("l") !== t && (this.set({
                            l: t
                        }), this.updateHex(this.updateRgb())), t) : !1
                    },
                    a: function(t) {
                        return this.inRange("a", t) ? (this.get("a") !== t && (this.set({
                            a: t
                        }), this.updateHex(this.updateRgb())), t) : !1
                    },
                    hsla: function(t) {
                        return null != t ? (t = this.isHsl(t), t ? (this.hsla().join(",") !== t.join(",") && (this.updateHex(this.updateRgb(this.hslToRgb(t))), this.updateHsl(t), this.set({
                            a: null != t[3] ? t[3] : 1
                        })), t) : !1) : [this.get("h"), this.get("s"), this.get("l"), this.get("a")]
                    },
                    hslaStr: function(t) {
                    	//Hacky way to show the hue value
                    	var hueValue = $('#hsla').val();
                    	hueValue = hueValue.split(',');
                    	hueValue = hueValue[0].substring(5);
                    	hueValue = parseInt(hueValue)*182;
                    	$('#hueValue').val(hueValue);

                        return t || (t = this.hsla()), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")"
                    },
                    rgba: function(t) {
                        return null != t ? (t = this.isRgb(t), t ? (t.join(",") !== this.rgba().join(",") && (this.set({
                            rgb: [t[0], t[1], t[2]],
                            a: null != t[3] ? t[3] : 1
                        }), this.updateHex(t), this.updateHsl(this.rgbToHsl(t))), t) : !1) : this.get("rgb").concat(this.get("a"))
                    },
                    rgbaStr: function() {
                        var t;
                        return t = this.get("rgb"), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + this.get("a") + ")"
                    },
                    hex: function(t) {
                        var e;
                        return null != t ? (t = this.isHex(t), t ? (this.hex() !== t && (this.set({
                            hex: t
                        }), e = this.hexToRgb(t), this.updateRgb(e), this.set({
                            a: e[3] || 1
                        }), this.updateHsl(this.rgbToHsl(e))), t) : !1) : this.get("hex")
                    },
                    isHex: function(e, n) {
                        var i, r;
                        return null == n && (n = !0), i = null != (r = e.match(/^#?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/)) ? r.slice(1) : void 0, null == i ? !1 : (t = _.compact(i).join(""), n ? "#" + t : t)
                    },
                    isRgb: function(t) {
                        var e, n, i, r;
                        if ("string" == typeof t) {
                            if (n = null != (r = t.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(0?\.?\d+)?\s*\)$/)) ? r.slice(1) : void 0, null == n) return !1;
                            t = function() {
                                var t, i, r, s;
                                for (r = _.compact(n), s = [], t = 0, i = r.length; i > t; t++) e = r[t], s.push(parseFloat(e));
                                return s
                            }()
                        }
                        return null == t[3] && (t[3] = 1), i = t[0] <= 255 && t[1] <= 255 && t[2] <= 255 && t[3] <= 1, i ? t : !1
                    },
                    isHsl: function(t) {
                        var e, n, i, r;
                        if ("string" == typeof t) {
                            if (n = null != (r = t.match(/hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\%\s*,\s*(\d{1,3})\%\s*,?\s*(0?\.?\d+)?\s*\)$/)) ? r.slice(1) : void 0, null == n) return !1;
                            t = function() {
                                var t, i, r, s;
                                for (r = _.compact(n), s = [], t = 0, i = r.length; i > t; t++) e = r[t], s.push(parseFloat(e));
                                return s
                            }()
                        }
                        return null == t[3] && (t[3] = 1), i = t[0] <= 360 && t[1] <= 100 && t[2] <= 100 && t[3] <= 1, i ? t : !1
                    },
                    valid: function(t) {
                        var e;
                        return e = this.type(t), "hex" === e ? this.isHex(t) : "rgb" === e ? this.isRgb(t) : "hsl" === e ? this.isHsl(t) : !1
                    },
                    inRange: function(t, e) {
                        var n;
                        switch (t) {
                            case "h":
                                n = e >= 0 && 360 >= e;
                                break;
                            case "s":
                            case "l":
                                n = e >= 0 && 100 >= e;
                                break;
                            case "a":
                                n = e >= 0 && 1 >= e
                        }
                        return n
                    },
                    type: function(t) {
                        var e, n;
                        return e = t.toString(), n = e.indexOf("#") >= 0 || 3 === e.length || 6 === e.length ? "hex" : e.indexOf("%") ? "hsl" : "rgb"
                    },
                    hexToRgb: function(e) {
                        var n;
                        return (e = this.isHex(e, !1)) ? (6 !== e.length && (e = function() {
                            var t, i, r;
                            for (r = [], t = 0, i = e.length; i > t; t++) n = e[t], r.push("" + n + n);
                            return r
                        }().join("")), t = e.match(/#?(.{2})(.{2})(.{2})/).slice(1), t = function() {
                            var e, i, r;
                            for (r = [], e = 0, i = t.length; i > e; e++) n = t[e], r.push(parseInt(n, 16));
                            return r
                        }().concat([1])) : !1
                    },
                    hexToHsl: function(t) {
                        return (t.indexOf("#") >= 0 || t.length < 6) && (t = this.isHex(t)), t ? this.rgbToHsl(this.hexToRgb(t)) : !1
                    },
                    rgbToHex: function(t) {
                        var e, n, i;
                        return "string" == typeof t && (t = this.isRgb(t)), t ? (n = function() {
                            var n, i, r, s;
                            for (r = t.slice(0, 3), s = [], n = 0, i = r.length; i > n; n++) e = r[n], s.push(parseFloat(e).toString(16));
                            return s
                        }(), n = function() {
                            var t, i, r;
                            for (r = [], t = 0, i = n.length; i > t; t++) e = n[t], r.push(1 === e.length ? "0" + e : e);
                            return r
                        }(), n = n.join(""), 3 === _.compact(function() {
                            var t, e, r, s;
                            for (r = n.match(/.{1,2}/g), s = [], t = 0, e = r.length; e > t; t++) i = r[t], s.push(i[0] === i[1]);
                            return s
                        }()).length ? "#" + n[0] + n[2] + n[4] : "#" + n) : void 0
                    },
                    rgbToHsl: function(t) {
                        var e, n, i, r, s, o, a, u, h, l, c, f, d, p;
                        return "string" == typeof t && (t = this.isRgb(t)), t ? (f = parseFloat(t[0]) / 255, s = parseFloat(t[1]) / 255, i = parseFloat(t[2]) / 255, l = Math.max(f, s, i), c = Math.min(f, s, i), r = l - c, n = l + c, a = c === l ? 0 : f === l ? (60 * (s - i) / r + 360) % 360 : s === l ? 60 * (i - f) / r + 120 : 60 * (f - s) / r + 240, h = .5 * n, p = 0 === h ? 0 : 1 === h ? 1 : .5 >= h ? r / n : r / (2 - n), o = Math.round(a), d = Math.round(100 * p), u = Math.round(100 * h), e = parseFloat(t[3]) || 1, [o, d, u, e]) : !1
                    },
                    hslToRgb: function(t) {
                        var e, n, i, r, s, o, a, u, h, l, c, f;
                        return "string" == typeof t && (t = this.isHsl(t)), t ? (o = parseInt(t[0]) / 360, f = parseInt(t[1]) / 100, a = parseInt(t[2]) / 100, h = .5 >= a ? a * (1 + f) : a + f - a * f, u = 2 * a - h, c = o + 1 / 3, s = o, i = o - 1 / 3, l = Math.round(255 * this.hueToRgb(u, h, c)), r = Math.round(255 * this.hueToRgb(u, h, s)), n = Math.round(255 * this.hueToRgb(u, h, i)), e = parseFloat(t[3]) || 1, [l, r, n, e]) : !1
                    },
                    hslToHex: function(t) {
                        return "string" == typeof t && (t = this.isHsl(t)), t ? this.rgbToHex(this.hslToRgb(t)) : !1
                    },
                    hueToRgb: function(t, e, n) {
                        return 0 > n && (n += 1), n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
                    }
                }), n.exports = function(e) {
                    return new t(e)
                }
            }).call(this)
        },
        inputs: function(t, e, n) {
            (function() {
                var t;
                t = Backbone.View.extend({
                    initialize: function(t) {
                        return this.setElement($(t.el)), this.model.on("change:h", this.setHue, this), this.model.on("change:s", this.setSat, this), this.model.on("change:l", this.setLum, this), this.model.on("change:a", this.setAlpha, this), this.model.on("change:a", this.changeRgb, this), this.model.on("change:hex", this.changeHex, this), this.model.on("change:rgb", this.changeRgb, this)
                    },
                    events: {
                        "keydown .sliders input": "bumpHsl",
                        "keyup .sliders input": "editHsl",
                        "keyup .color-inputs input": "changeColor"
                    },
                    changeColor: function(t) {
                        var e;
                        return e = $(t.target), this.model[e.attr("id")](e.val()) ? e.removeClass("error") : e.addClass("error")
                    },
                    bumpHsl: function(t) {
                        var e, n;
                        return 38 === t.keyCode || 40 === t.keyCode ? (e = $(t.target).attr("id"), n = t.shiftKey ? 10 : 1, 40 === t.keyCode && (n = -n), this.bumpValue(e, n), t.preventDefault()) : void 0
                    },
                    bumpValue: function(t, e) {
                        var n, i;
                        switch (n = this.model.get(t), i = "a" === t ? Math.round(100 * n + e) / 100 : n + e, t) {
                            case "h":
                                i = this.gate(i, 360);
                                break;
                            case "s":
                            case "l":
                                i = this.gate(i, 100);
                                break;
                            case "a":
                                i = this.gate(i, 1)
                        }
                        return this.model[t](i)
                    },
                    gate: function(t, e) {
                        return 0 > t ? 0 : t > e ? e : t
                    },
                    editHsl: function(t) {
                        var e, n, i;
                        return e = $(t.target), n = e.attr("id"), i = parseFloat(e.val()), this.model.inRange(n, i) ? (e.removeClass("error"), this.model[n](i)) : e.addClass("error")
                    },
                    changeHex: function() {
                        return this.update($("#hex"), this.model.get("hex"))
                    },
                    changeRgb: function() {
                        return this.update($("#rgba"), this.model.rgbaStr())
                    },
                    changeHsl: function() {
                        return this.update($("#hsla"), this.model.hslaStr())
                    },
                    setHue: function() {
                        return this.update($("#h"), this.model.get("h")), this.changeHsl()
                    },
                    setSat: function() {
                        return this.update($("#s"), this.model.get("s")), this.changeHsl()
                    },
                    setLum: function() {
                        return this.update($("#l"), this.model.get("l")), this.changeHsl()
                    },
                    setAlpha: function() {
                        return this.update($("#a"), this.model.get("a")), this.changeHsl()
                    },
                    update: function(t, e) {
                        return t.val() !== "" + e ? t.val("" + e) : void 0
                    }
                }), n.exports = function(e) {
                    return new t(e)
                }
            }).call(this)
        },
        picker: function(t, e, n) {
            (function() {
                var t;
                t = Backbone.View.extend({
                    initialize: function(t) {
                        return this.setElement($(t.el))
                    },
                    render: function() {
                        return this.hueSlider = this.$("#h-slider").dragdealer({
                            slide: !1,
                            steps: 361,
                            speed: 100,
                            x: this.model.get("h") / 360,
                            animationCallback: function(t) {
                                return function(e) {
                                    var n;
                                    return n = Math.round(360 * e), t.model.get("h") !== n ? t.model.h(n) : void 0
                                }
                            }(this)
                        }), this.satSlider = this.$("#s-slider").dragdealer({
                            slide: !1,
                            steps: 101,
                            speed: 100,
                            x: this.model.get("s") / 100,
                            animationCallback: function(t) {
                                return function(e) {
                                    var n;
                                    return n = Math.round(100 * e), t.model.get("s") !== n ? t.model.s(n) : void 0
                                }
                            }(this)
                        }), this.lumSlider = this.$("#l-slider").dragdealer({
                            slide: !1,
                            steps: 101,
                            speed: 100,
                            x: this.model.get("l") / 100,
                            animationCallback: function(t) {
                                return function(e) {
                                    var n;
                                    return n = Math.round(100 * e), t.model.get("l") !== n ? t.model.l(n) : void 0
                                }
                            }(this)
                        }), this.alphaSlider = this.$("#a-slider").dragdealer({
                            slide: !1,
                            steps: 101,
                            speed: 100,
                            x: this.model.get("a"),
                            animationCallback: function(t) {
                                return function(e) {
                                    var n;
                                    return n = Math.round(100 * e) / 100, t.model.get("a") !== n ? t.model.a(n) : void 0
                                }
                            }(this)
                        }), this.updateSliderStyles("all"), this.model.on("change:h", this.setHue, this), this.model.on("change:s", this.setSat, this), this.model.on("change:l", this.setLum, this), this.model.on("change:a", this.setAlpha, this), this
                    },
                    setHue: function() {
                        return this.setSlider(this.hueSlider, this.model.get("h"), 360), this.updateSliderStyles("h")
                    },
                    setSat: function() {
                        return this.setSlider(this.satSlider, this.model.get("s"), 100), this.updateSliderStyles("s")
                    },
                    setLum: function() {
                        return this.setSlider(this.lumSlider, this.model.get("l"), 100), this.updateSliderStyles("l")
                    },
                    setAlpha: function() {
                        return this.setSlider(this.alphaSlider, 100 * this.model.get("a"), 100), this.updateSliderStyles("a")
                    },
                    setSlider: function(t, e, n) {
                        return Math.round(t.value.current[0] * n) !== Math.round(e) ? t.setValue(e / n) : void 0
                    },
                    updateSliderStyles: function(t) {
                        var e, n, i, r, s;
                        for (n = _.without(["h", "s", "l", "a"], t), s = [], i = 0, r = n.length; r > i; i++) e = n[i], s.push(this.setSliderBg(e));
                        return s
                    },
                    setSliderBg: function(t) {
                        return $("#" + t + "-slider").attr("style", "background: -webkit-" + this.gradient(t) + "; background: -moz-" + this.gradient(t))
                    },
                    gradient: function(t) {
                        var e, n, i, r;
                        switch (t) {
                            case "h":
                                r = 36, n = 10;
                                break;
                            case "s":
                            case "l":
                                r = 5, n = 20;
                                break;
                            case "a":
                                r = 5, n = .2
                        }
                        return e = function() {
                            var e, s;
                            for (s = [], i = e = 0; r >= 0 ? r >= e : e >= r; i = r >= 0 ? ++e : --e) s.push(this.model.hslaStr(this.tweakHsla(t, i * n)));
                            return s
                        }.call(this), "linear-gradient(left, " + e.join(",") + ");"
                    },
                    tweakHsla: function(t, e) {
                        var n, i;
                        switch (n = this.model.hsla(), t) {
                            case "h":
                                i = 0;
                                break;
                            case "s":
                                i = 1;
                                break;
                            case "l":
                                i = 2;
                                break;
                            case "a":
                                i = 3
                        }
                        return n.splice(i, 1, e), n
                    }
                }), n.exports = function(e) {
                    return new t(e)
                }
            }).call(this)
        },
        site: function(t, n, i) {
            (function() {
                var t, r, s, o, a;
                t = n("color"), s = n("picker"), r = n("inputs"), a = n("tiles"), o = Backbone.View.extend({
                    initialize: function(e) {
                        return this.setElement($("body")), this.tiles = e.tiles, this.model.set({
                            tile: "foreground"
                        }), this.model.on("change:h", this.updateColor, this), this.model.on("change:s", this.updateColor, this), this.model.on("change:l", this.updateColor, this), this.model.on("change:a", this.updateColor, this), this.style = $("<style>"), $("head").append(this.style), t = this.urlToColor(window.location.hash) || this.model.randomColor(), this.model.hsla(t)
                    },
                    events: {
                        "click .url": "selectUrl",
                        "click .show-more": "toggleWhy",
                        "dang .handle": "setUrl"
                    },
                    updateColor: function() {
                        var e, n;
                        return t = this.model.hsla(), n = this.model.get("tile"), e = {}, e[n] = t, this.model.set(e), "foreground" === n ? this.setPageStyles() : void 0
                    },
                    selectUrl: function(t) {
                        return t.target.select()
                    },
                    toggleWhy: function() {
                        return $("#more").toggleClass("hide"), e.preventDefault()
                    },
                    urlToColor: function(e) {
                        var n, i, r, s, o, a, u;
                        return e.length ? (r = function() {
                            var i, r, s, h;
                            for (s = e.split("/"), h = [], i = 0, r = s.length; r > i; i++) t = s[i], t = t.split(","), o = t[0], n = t[1], a = this.model.hexToRgb(o), h.push(u = null != n ? (a.splice(-1, 1, parseFloat(n)), this.model.rgbToHsl(a)) : this.model.rgbToHsl(a));
                            return h
                        }.call(this), s = r[0], i = r[1], null != s && this.model.set({
                            foreground: s
                        }), null != i && this.model.set({
                            background: i
                        }), s) : void 0
                    },
                    setUrl: function() {
                        var t, e, n, i, r, s;
                        return n = window.location.host, e = this.getColorUrl(this.model.get("foreground")), t = this.model.get("background"), t[3] > 0 && (e += "/" + this.getColorUrl(t)), r = n + "/" + e, r !== window.location.host + "/" + window.location.hash ? (i = $(".url"), window.location.replace(e), s = 7.8 * r.length, i.css({
                            width: s
                        }), i.val(r)) : void 0
                    },
                    getColorUrl: function(t) {
                        var e;
                        return e = this.model.hslToHex(t), 1 !== t[3] && (e += "," + t[3]), e
                    },
                    setPageStyles: function() {
                        var t, e, n, i;
                        return e = this.model.hsla(), _.contains(e, void 0) ? void 0 : (n = this.model.hslaStr([e[0], 100, 70, 1]), i = this.model.hslaStr([e[0], 40, 70, 1]), t = this.model.hslaStr([e[0], 40, 70, 1]), $("h1").css("text-shadow", this.getTextShadow(e)), this.style.text("body a:hover { color: " + n + " !important } h1 + p { color: " + i + " } body h2, body h3, code { color: " + t + " }"))
                    },
                    getTextShadow: function(e) {
                        var n, i, r, s;
                        return r = e[2], s = 35 > r ? 30 : r > 80 ? 30 : e[1], i = 35 > r ? 35 : r > 80 ? 80 : r, t = [e[0], Math.round(s / 2.7), i], n = [], _(4).times(function(e) {
                            return function(i) {
                                return n.push(e.adjustLum(Math.round(-5.5 * (i - 1)), t))
                            }
                        }(this)), n[0] + " 0px 1px 0px, " + n[1] + " 0px 2px 0px, " + n[2] + " 0px 3px 0px, " + n[3] + " 0px 4px 0px, rgba(0, 0, 0, 0.2) 0px 5px 1px, rgba(0, 0, 0, 0.3) 0px 0px 10px, rgba(0, 0, 0, 0.4) 0px 3px 5px, rgba(0, 0, 0, 0.5) 0px 6px 5px, rgba(0, 0, 0, 0.6) 0px 10px 10px"
                    },
                    adjustLum: function(t, e) {
                        return null == e && (e = this.model.hsla()), this.model.hslaStr([e[0], e[1], e[2] + 1, this.model.get("a")])
                    },
                    throttle: function(t, e) {
                        var n;
                        return null == e && (e = 50), n = null,
                            function() {
                                var i, r;
                                return r = this, i = arguments, clearTimeout(n), n = setTimeout(function() {
                                    return t.apply(r, i)
                                }, e)
                            }
                    }
                }), i.exports = function() {
                    return t = t(), s({
                        model: t,
                        el: "#picker"
                    }).render(), r({
                        model: t,
                        el: "#hslpicker"
                    }), new o({
                        model: t,
                        tiles: a({
                            model: t,
                            el: "#tiles"
                        })
                    })
                }
            }).call(this)
        },
        tiles: function(t, e, n) {
            (function() {
                var t;
                t = Backbone.View.extend({
                    initialize: function() {
                        return this.model.on("change:foreground", this.updateForeground, this), this.model.on("change:background", this.updateBackground, this), this.model.get("background") || this.model.set({
                            background: [360, 100, 100, 0]
                        }), _.delay(this.toggleExposed, 1e3)
                    },
                    events: {
                        "click .expose": "toggleExposed",
                        "click .foreground, .background": "selectTile",
                        "click .bg": "setTileBg"
                    },
                    toggleExposed: function() {
                        return $(".color-tiles").toggleClass("exposed"), $(".slider").css("background-color", $(".color-tiles").is(".exposed") ? "transparent" : this.model.hslaStr(this.model.get("background"))), $(".foreground").trigger("click")
                    },
                    selectTile: function(t) {
                        var e;
                        return e = $(t.currentTarget), e.is(".selected") ? void 0 : (this.model.set({
                            tile: e.data("name")
                        }), this.model.hsla(this.model.get(e.data("name"))), $(".selected").removeClass("selected"), e.addClass("selected"))
                    },
                    setTileBg: function(t) {
                        var e, n;
                        return n = $(t.target), n.is(".random") ? (e = this.model.randomColor(), e[3] = this.model.get("a") || 1, this.model.hsla(e)) : this.model.hsla(n.data("color"))
                    },
                    updateForeground: function() {
                        return $(".foreground-color").css({
                            "background-color": this.model.hslaStr(this.model.get("foreground"))
                        })
                    },
                    updateBackground: function() {
                        return $(".background-color").css({
                            "background-color": this.model.hslaStr(this.model.get("background"))
                        })
                    }
                }), n.exports = function(e) {
                    return new t(e)
                }
            }).call(this)
        }
    });