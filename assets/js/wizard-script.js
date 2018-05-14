/*
 Copyright (c) 2008 Yii Software LLC
 @license http://www.yiiframework.com/license/
 @author Qiang Xue <qiang.xue@gmail.com>
 @since 2.0
 */
(function (d, c) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = d.document ? c(d, !0) : function (b) {
        if (!b.document)throw Error("jQuery requires a window with a document");
        return c(b)
    } : c(d)
})("undefined" !== typeof window ? window : this, function (d, c) {
    function b(l) {
        var a = l.length, b = g.type(l);
        return "function" === b || g.isWindow(l) ? !1 : 1 === l.nodeType && a ? !0 : "array" === b || 0 === a || "number" === typeof a && 0 < a && a - 1 in l
    }

    function a(l, a, b) {
        if (g.isFunction(a))return g.grep(l, function (l, d) {
            return !!a.call(l,
                    d, l) !== b
        });
        if (a.nodeType)return g.grep(l, function (l) {
            return l === a !== b
        });
        if ("string" === typeof a) {
            if (ib.test(a))return g.filter(a, l, b);
            a = g.filter(a, l)
        }
        return g.grep(l, function (l) {
            return 0 <= ua.call(a, l) !== b
        })
    }

    function e(l, a) {
        for (; (l = l[a]) && 1 !== l.nodeType;);
        return l
    }

    function f(l) {
        var a = Ma[l] = {};
        g.each(l.match(ca) || [], function (l, b) {
            a[b] = !0
        });
        return a
    }

    function k() {
        M.removeEventListener("DOMContentLoaded", k, !1);
        d.removeEventListener("load", k, !1);
        g.ready()
    }

    function m() {
        Object.defineProperty(this.cache = {},
            0, {
                get: function () {
                    return {}
                }
            });
        this.expando = g.expando + Math.random()
    }

    function s(l, a, b) {
        if (void 0 === b && 1 === l.nodeType)if (b = "data-" + a.replace(jb, "-$1").toLowerCase(), b = l.getAttribute(b), "string" === typeof b) {
            try {
                b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : +b + "" === b ? +b : kb.test(b) ? g.parseJSON(b) : b
            } catch (d) {
            }
            U.set(l, a, b)
        } else b = void 0;
        return b
    }

    function u() {
        return !0
    }

    function x() {
        return !1
    }

    function p() {
        try {
            return M.activeElement
        } catch (l) {
        }
    }

    function q(l, a) {
        return g.nodeName(l, "table") && g.nodeName(11 !== a.nodeType ?
            a : a.firstChild, "tr") ? l.getElementsByTagName("tbody")[0] || l.appendChild(l.ownerDocument.createElement("tbody")) : l
    }

    function t(l) {
        l.type = (null !== l.getAttribute("type")) + "/" + l.type;
        return l
    }

    function B(l) {
        var a = lb.exec(l.type);
        a ? l.type = a[1] : l.removeAttribute("type");
        return l
    }

    function h(l, a) {
        for (var b = 0, d = l.length; b < d; b++)F.set(l[b], "globalEval", !a || F.get(a[b], "globalEval"))
    }

    function n(l, a) {
        var b, d, c, e;
        if (1 === a.nodeType) {
            if (F.hasData(l) && (e = F.access(l), b = F.set(a, e), e = e.events))for (c in delete b.handle,
                b.events = {}, e)for (b = 0, d = e[c].length; b < d; b++)g.event.add(a, c, e[c][b]);
            U.hasData(l) && (c = U.access(l), c = g.extend({}, c), U.set(a, c))
        }
    }

    function v(l, a) {
        var b = l.getElementsByTagName ? l.getElementsByTagName(a || "*") : l.querySelectorAll ? l.querySelectorAll(a || "*") : [];
        return void 0 === a || a && g.nodeName(l, a) ? g.merge([l], b) : b
    }

    function L(l, a) {
        var b = g(a.createElement(l)).appendTo(a.body), c = d.getDefaultComputedStyle ? d.getDefaultComputedStyle(b[0]).display : g.css(b[0], "display");
        b.detach();
        return c
    }

    function N(l) {
        var a = M,
            b = Na[l];
        b || (b = L(l, a), "none" !== b && b || (va = (va || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(a.documentElement), a = va[0].contentDocument, a.write(), a.close(), b = L(l, a), va.detach()), Na[l] = b);
        return b
    }

    function A(l, a, b) {
        var c, d, e = l.style;
        (b = b || wa(l)) && (d = b.getPropertyValue(a) || b[a]);
        b && ("" !== d || g.contains(l.ownerDocument, l) || (d = g.style(l, a)), Ea.test(d) && Oa.test(a) && (l = e.width, a = e.minWidth, c = e.maxWidth, e.minWidth = e.maxWidth = e.width = d, d = b.width, e.width = l, e.minWidth = a, e.maxWidth = c));
        return void 0 !==
        d ? d + "" : d
    }

    function y(l, a) {
        return {
            get: function () {
                if (l())delete this.get; else return (this.get = a).apply(this, arguments)
            }
        }
    }

    function r(l, a) {
        if (a in l)return a;
        for (var b = a[0].toUpperCase() + a.slice(1), d = a, c = Pa.length; c--;)if (a = Pa[c] + b, a in l)return a;
        return d
    }

    function J(l, a, b) {
        return (l = mb.exec(a)) ? Math.max(0, l[1] - (b || 0)) + (l[2] || "px") : a
    }

    function D(l, a, b, d, c) {
        a = b === (d ? "border" : "content") ? 4 : "width" === a ? 1 : 0;
        for (var e = 0; 4 > a; a += 2)"margin" === b && (e += g.css(l, b + ha[a], !0, c)), d ? ("content" === b && (e -= g.css(l, "padding" +
            ha[a], !0, c)), "margin" !== b && (e -= g.css(l, "border" + ha[a] + "Width", !0, c))) : (e += g.css(l, "padding" + ha[a], !0, c), "padding" !== b && (e += g.css(l, "border" + ha[a] + "Width", !0, c)));
        return e
    }

    function P(l, a, b) {
        var d = !0, c = "width" === a ? l.offsetWidth : l.offsetHeight, e = wa(l), h = "border-box" === g.css(l, "boxSizing", !1, e);
        if (0 >= c || null == c) {
            c = A(l, a, e);
            if (0 > c || null == c)c = l.style[a];
            if (Ea.test(c))return c;
            d = h && (Q.boxSizingReliable() || c === l.style[a]);
            c = parseFloat(c) || 0
        }
        return c + D(l, a, b || (h ? "border" : "content"), d, e) + "px"
    }

    function G(l,
               a) {
        for (var b, c, d, e = [], h = 0, f = l.length; h < f; h++)c = l[h], c.style && (e[h] = F.get(c, "olddisplay"), b = c.style.display, a ? (e[h] || "none" !== b || (c.style.display = ""), "" === c.style.display && ma(c) && (e[h] = F.access(c, "olddisplay", N(c.nodeName)))) : e[h] || (d = ma(c), (b && "none" !== b || !d) && F.set(c, "olddisplay", d ? b : g.css(c, "display"))));
        for (h = 0; h < f; h++)c = l[h], !c.style || a && "none" !== c.style.display && "" !== c.style.display || (c.style.display = a ? e[h] || "" : "none");
        return l
    }

    function w(l, a, b, c, d) {
        return new w.prototype.init(l, a, b, c, d)
    }

    function z() {
        setTimeout(function () {
            ia = void 0
        });
        return ia = g.now()
    }

    function H(l, a) {
        var b, c = 0, d = {height: l};
        for (a = a ? 1 : 0; 4 > c; c += 2 - a)b = ha[c], d["margin" + b] = d["padding" + b] = l;
        a && (d.opacity = d.width = l);
        return d
    }

    function K(l, a, b) {
        for (var c, d = (ja[a] || []).concat(ja["*"]), e = 0, h = d.length; e < h; e++)if (c = d[e].call(b, a, l))return c
    }

    function O(l, a) {
        var b, c, d, e, h;
        for (b in l)if (c = g.camelCase(b), d = a[c], e = l[b], g.isArray(e) && (d = e[1], e = l[b] = e[0]), b !== c && (l[c] = e, delete l[b]), (h = g.cssHooks[c]) && "expand"in h)for (b in e = h.expand(e), delete l[c], e)b in l || (l[b] = e[b], a[b] =
            d); else a[c] = d
    }

    function I(l, a, b) {
        var c, d = 0, e = xa.length, h = g.Deferred().always(function () {
            delete f.elem
        }), f = function () {
            if (c)return !1;
            for (var a = ia || z(), a = Math.max(0, n.startTime + n.duration - a), b = 1 - (a / n.duration || 0), d = 0, e = n.tweens.length; d < e; d++)n.tweens[d].run(b);
            h.notifyWith(l, [n, b, a]);
            if (1 > b && e)return a;
            h.resolveWith(l, [n]);
            return !1
        }, n = h.promise({
            elem: l,
            props: g.extend({}, a),
            opts: g.extend(!0, {specialEasing: {}}, b),
            originalProperties: a,
            originalOptions: b,
            startTime: ia || z(),
            duration: b.duration,
            tweens: [],
            createTween: function (a,
                                   b) {
                var c = g.Tween(l, n.opts, a, b, n.opts.specialEasing[a] || n.opts.easing);
                n.tweens.push(c);
                return c
            },
            stop: function (a) {
                var b = 0, d = a ? n.tweens.length : 0;
                if (c)return this;
                for (c = !0; b < d; b++)n.tweens[b].run(1);
                a ? h.resolveWith(l, [n, a]) : h.rejectWith(l, [n, a]);
                return this
            }
        });
        b = n.props;
        for (O(b, n.opts.specialEasing); d < e; d++)if (a = xa[d].call(n, l, b, n.opts))return a;
        g.map(b, K, n);
        g.isFunction(n.opts.start) && n.opts.start.call(l, n);
        g.fx.timer(g.extend(f, {elem: l, anim: n, queue: n.opts.queue}));
        return n.progress(n.opts.progress).done(n.opts.done,
            n.opts.complete).fail(n.opts.fail).always(n.opts.always)
    }

    function S(l) {
        return function (a, b) {
            "string" !== typeof a && (b = a, a = "*");
            var c, d = 0, e = a.toLowerCase().match(ca) || [];
            if (g.isFunction(b))for (; c = e[d++];)"+" === c[0] ? (c = c.slice(1) || "*", (l[c] = l[c] || []).unshift(b)) : (l[c] = l[c] || []).push(b)
        }
    }

    function da(l, a, b, c) {
        function d(f) {
            var n;
            e[f] = !0;
            g.each(l[f] || [], function (l, g) {
                var f = g(a, b, c);
                if ("string" === typeof f && !h && !e[f])return a.dataTypes.unshift(f), d(f), !1;
                if (h)return !(n = f)
            });
            return n
        }

        var e = {}, h = l === Fa;
        return d(a.dataTypes[0]) ||
            !e["*"] && d("*")
    }

    function aa(l, a) {
        var b, c, d = g.ajaxSettings.flatOptions || {};
        for (b in a)void 0 !== a[b] && ((d[b] ? l : c || (c = {}))[b] = a[b]);
        c && g.extend(!0, l, c);
        return l
    }

    function ba(l, a, b, c) {
        var d;
        if (g.isArray(a))g.each(a, function (a, d) {
            b || nb.test(l) ? c(l, d) : ba(l + "[" + ("object" === typeof d ? a : "") + "]", d, b, c)
        }); else if (b || "object" !== g.type(a))c(l, a); else for (d in a)ba(l + "[" + d + "]", a[d], b, c)
    }

    function X(l) {
        return g.isWindow(l) ? l : 9 === l.nodeType && l.defaultView
    }

    var W = [], ea = W.slice, ra = W.concat, Ga = W.push, ua = W.indexOf, ya = {},
        ob = ya.toString, Ha = ya.hasOwnProperty, pb = "".trim, Q = {}, M = d.document, g = function (l, a) {
            return new g.fn.init(l, a)
        }, qb = /^-ms-/, rb = /-([\da-z])/gi, sb = function (l, a) {
            return a.toUpperCase()
        };
    g.fn = g.prototype = {
        jquery: "2.1.0", constructor: g, selector: "", length: 0, toArray: function () {
            return ea.call(this)
        }, get: function (l) {
            return null != l ? 0 > l ? this[l + this.length] : this[l] : ea.call(this)
        }, pushStack: function (l) {
            l = g.merge(this.constructor(), l);
            l.prevObject = this;
            l.context = this.context;
            return l
        }, each: function (l, a) {
            return g.each(this,
                l, a)
        }, map: function (l) {
            return this.pushStack(g.map(this, function (a, b) {
                return l.call(a, b, a)
            }))
        }, slice: function () {
            return this.pushStack(ea.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (l) {
            var a = this.length;
            l = +l + (0 > l ? a : 0);
            return this.pushStack(0 <= l && l < a ? [this[l]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Ga, sort: W.sort, splice: W.splice
    };
    g.extend = g.fn.extend = function () {
        var l, a, b, c, d, e = arguments[0] || {}, h = 1, f = arguments.length,
            n = !1;
        "boolean" === typeof e && (n = e, e = arguments[h] || {}, h++);
        "object" === typeof e || g.isFunction(e) || (e = {});
        h === f && (e = this, h--);
        for (; h < f; h++)if (null != (l = arguments[h]))for (a in l)b = e[a], c = l[a], e !== c && (n && c && (g.isPlainObject(c) || (d = g.isArray(c))) ? (d ? (d = !1, b = b && g.isArray(b) ? b : []) : b = b && g.isPlainObject(b) ? b : {}, e[a] = g.extend(n, b, c)) : void 0 !== c && (e[a] = c));
        return e
    };
    g.extend({
        expando: "jQuery" + ("2.1.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw Error(a);
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" ===
                g.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return 0 <= a - parseFloat(a)
        }, isPlainObject: function (a) {
            if ("object" !== g.type(a) || a.nodeType || g.isWindow(a))return !1;
            try {
                if (a.constructor && !Ha.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (b) {
                return !1
            }
            return !0
        }, isEmptyObject: function (a) {
            for (var b in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? ya[ob.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            var b;
            b = eval;
            if (a = g.trim(a))1 === a.indexOf("use strict") ? (b = M.createElement("script"), b.text = a, M.head.appendChild(b).parentNode.removeChild(b)) : b(a)
        }, camelCase: function (a) {
            return a.replace(qb, "ms-").replace(rb, sb)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, c, d) {
            var e, h = 0, g = a.length;
            e = b(a);
            if (d)if (e)for (; h < g && (e = c.apply(a[h], d), !1 !== e); h++); else for (h in a) {
                if (e = c.apply(a[h], d), !1 === e)break
            } else if (e)for (; h < g && (e = c.call(a[h],
                h, a[h]), !1 !== e); h++); else for (h in a)if (e = c.call(a[h], h, a[h]), !1 === e)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : pb.call(a)
        }, makeArray: function (a, c) {
            var d = c || [];
            null != a && (b(Object(a)) ? g.merge(d, "string" === typeof a ? [a] : a) : Ga.call(d, a));
            return d
        }, inArray: function (a, b, c) {
            return null == b ? -1 : ua.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++)a[e++] = b[d];
            a.length = e;
            return a
        }, grep: function (a, b, c) {
            for (var d = [], e = 0, h = a.length, g = !c; e < h; e++)c = !b(a[e], e), c !== g && d.push(a[e]);
            return d
        }, map: function (a, c, d) {
            var e, h = 0, g = a.length, f = [];
            if (b(a))for (; h < g; h++)e = c(a[h], h, d), null != e && f.push(e); else for (h in a)e = c(a[h], h, d), null != e && f.push(e);
            return ra.apply([], f)
        }, guid: 1, proxy: function (a, b) {
            var c, d;
            "string" === typeof b && (c = a[b], b = a, a = c);
            if (g.isFunction(a))return d = ea.call(arguments, 2), c = function () {
                return a.apply(b || this, d.concat(ea.call(arguments)))
            }, c.guid = a.guid = a.guid || g.guid++, c
        }, now: Date.now, support: Q
    });
    g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function (a, b) {
            ya["[object " + b + "]"] = b.toLowerCase()
        });
    var ka = function (a) {
        function b(a, l, c, d) {
            var e, h, g, E, C;
            (l ? l.ownerDocument || l : W) !== G && aa(l);
            l = l || G;
            c = c || [];
            if (!a || "string" !== typeof a)return c;
            if (1 !== (E = l.nodeType) && 9 !== E)return [];
            if (ba && !d) {
                if (e = Aa.exec(a))if (g = e[1])if (9 === E)if ((h = l.getElementById(g)) && h.parentNode) {
                    if (h.id === g)return c.push(h), c
                } else return c; else {
                    if (l.ownerDocument && (h = l.ownerDocument.getElementById(g)) && K(l, h) && h.id === g)return c.push(h), c
                } else {
                    if (e[2])return na.apply(c, l.getElementsByTagName(a)),
                        c;
                    if ((g = e[3]) && D.getElementsByClassName && l.getElementsByClassName)return na.apply(c, l.getElementsByClassName(g)), c
                }
                if (D.qsa && (!X || !X.test(a))) {
                    h = e = I;
                    g = l;
                    C = 9 === E && a;
                    if (1 === E && "object" !== l.nodeName.toLowerCase()) {
                        E = t(a);
                        (e = l.getAttribute("id")) ? h = e.replace(Ba, "\\$&") : l.setAttribute("id", h);
                        h = "[id='" + h + "'] ";
                        for (g = E.length; g--;)E[g] = h + r(E[g]);
                        g = qa.test(a) && v(l.parentNode) || l;
                        C = E.join(",")
                    }
                    if (C)try {
                        return na.apply(c, g.querySelectorAll(C)), c
                    } catch (f) {
                    } finally {
                        e || l.removeAttribute("id")
                    }
                }
            }
            var n;
            a:{
                a = a.replace(ga,
                    "$1");
                h = t(a);
                if (!d && 1 === h.length) {
                    e = h[0] = h[0].slice(0);
                    if (2 < e.length && "ID" === (n = e[0]).type && D.getById && 9 === l.nodeType && ba && A.relative[e[1].type]) {
                        l = (A.find.ID(n.matches[0].replace(oa, pa), l) || [])[0];
                        if (!l) {
                            n = c;
                            break a
                        }
                        a = a.slice(e.shift().value.length)
                    }
                    for (E = ra.needsContext.test(a) ? 0 : e.length; E--;) {
                        n = e[E];
                        if (A.relative[g = n.type])break;
                        if (g = A.find[g])if (d = g(n.matches[0].replace(oa, pa), qa.test(e[0].type) && v(l.parentNode) || l)) {
                            e.splice(E, 1);
                            a = d.length && r(e);
                            if (!a) {
                                na.apply(c, d);
                                n = c;
                                break a
                            }
                            break
                        }
                    }
                }
                u(a,
                    h)(d, l, !ba, c, qa.test(a) && v(l.parentNode) || l);
                n = c
            }
            return n
        }

        function c() {
            function a(b, c) {
                l.push(b + " ") > A.cacheLength && delete a[l.shift()];
                return a[b + " "] = c
            }

            var l = [];
            return a
        }

        function d(a) {
            a[I] = !0;
            return a
        }

        function e(a) {
            var l = G.createElement("div");
            try {
                return !!a(l)
            } catch (b) {
                return !1
            } finally {
                l.parentNode && l.parentNode.removeChild(l)
            }
        }

        function h(a, l) {
            for (var b = a.split("|"), c = a.length; c--;)A.attrHandle[b[c]] = l
        }

        function g(a, l) {
            var b = l && a, c = b && 1 === a.nodeType && 1 === l.nodeType && (~l.sourceIndex || ca) - (~a.sourceIndex ||
                ca);
            if (c)return c;
            if (b)for (; b = b.nextSibling;)if (b === l)return -1;
            return a ? 1 : -1
        }

        function f(a) {
            return function (l) {
                return "input" === l.nodeName.toLowerCase() && l.type === a
            }
        }

        function n(a) {
            return function (l) {
                var b = l.nodeName.toLowerCase();
                return ("input" === b || "button" === b) && l.type === a
            }
        }

        function q(a) {
            return d(function (l) {
                l = +l;
                return d(function (b, c) {
                    for (var d, e = a([], b.length, l), h = e.length; h--;)b[d = e[h]] && (b[d] = !(c[d] = b[d]))
                })
            })
        }

        function v(a) {
            return a && typeof a.getElementsByTagName !== V && a
        }

        function k() {
        }

        function t(a,
                   l) {
            var c, d, e, h, g, C, f;
            if (g = Q[a + " "])return l ? 0 : g.slice(0);
            g = a;
            C = [];
            for (f = A.preFilter; g;) {
                if (!c || (d = ta.exec(g)))d && (g = g.slice(d[0].length) || g), C.push(e = []);
                c = !1;
                if (d = ua.exec(g))c = d.shift(), e.push({
                    value: c,
                    type: d[0].replace(ga, " ")
                }), g = g.slice(c.length);
                for (h in A.filter)!(d = ra[h].exec(g)) || f[h] && !(d = f[h](d)) || (c = d.shift(), e.push({
                    value: c,
                    type: h,
                    matches: d
                }), g = g.slice(c.length));
                if (!c)break
            }
            return l ? g.length : g ? b.error(a) : Q(a, C).slice(0)
        }

        function r(a) {
            for (var l = 0, b = a.length, c = ""; l < b; l++)c += a[l].value;
            return c
        }

        function m(a, l, b) {
            var c = l.dir, d = b && "parentNode" === c, e = M++;
            return l.first ? function (l, b, e) {
                for (; l = l[c];)if (1 === l.nodeType || d)return a(l, b, e)
            } : function (l, b, h) {
                var g, E, C = [S, e];
                if (h)for (; l = l[c];) {
                    if ((1 === l.nodeType || d) && a(l, b, h))return !0
                } else for (; l = l[c];)if (1 === l.nodeType || d) {
                    E = l[I] || (l[I] = {});
                    if ((g = E[c]) && g[0] === S && g[1] === e)return C[2] = g[2];
                    E[c] = C;
                    if (C[2] = a(l, b, h))return !0
                }
            }
        }

        function L(a) {
            return 1 < a.length ? function (l, b, c) {
                for (var d = a.length; d--;)if (!a[d](l, b, c))return !1;
                return !0
            } : a[0]
        }

        function B(a,
                   l, b, c, d) {
            for (var e, h = [], g = 0, E = a.length, C = null != l; g < E; g++)if (e = a[g])if (!b || b(e, c, d))h.push(e), C && l.push(g);
            return h
        }

        function J(a, l, c, e, h, g) {
            e && !e[I] && (e = J(e));
            h && !h[I] && (h = J(h, g));
            return d(function (d, g, C, f) {
                var n, T, q = [], v = [], Z = g.length, k;
                if (!(k = d)) {
                    k = l || "*";
                    for (var R = C.nodeType ? [C] : C, t = [], r = 0, m = R.length; r < m; r++)b(k, R[r], t);
                    k = t
                }
                k = !a || !d && l ? k : B(k, q, a, C, f);
                R = c ? h || (d ? a : Z || e) ? [] : g : k;
                c && c(k, R, C, f);
                if (e)for (n = B(R, v), e(n, [], C, f), C = n.length; C--;)if (T = n[C])R[v[C]] = !(k[v[C]] = T);
                if (d) {
                    if (h || a) {
                        if (h) {
                            n = [];
                            for (C =
                                     R.length; C--;)(T = R[C]) && n.push(k[C] = T);
                            h(null, R = [], n, f)
                        }
                        for (C = R.length; C--;)(T = R[C]) && -1 < (n = h ? sa.call(d, T) : q[C]) && (d[n] = !(g[n] = T))
                    }
                } else R = B(R === g ? R.splice(Z, R.length) : R), h ? h(null, g, R, f) : na.apply(g, R)
            })
        }

        function p(a) {
            var l, b, c, d = a.length, e = A.relative[a[0].type];
            b = e || A.relative[" "];
            for (var h = e ? 1 : 0, g = m(function (a) {
                return a === l
            }, b, !0), E = m(function (a) {
                return -1 < sa.call(l, a)
            }, b, !0), C = [function (a, b, c) {
                return !e && (c || b !== P) || ((l = b).nodeType ? g(a, b, c) : E(a, b, c))
            }]; h < d; h++)if (b = A.relative[a[h].type])C = [m(L(C),
                b)]; else {
                b = A.filter[a[h].type].apply(null, a[h].matches);
                if (b[I]) {
                    for (c = ++h; c < d && !A.relative[a[c].type]; c++);
                    return J(1 < h && L(C), 1 < h && r(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ga, "$1"), b, h < c && p(a.slice(h, c)), c < d && p(a = a.slice(c)), c < d && r(a))
                }
                C.push(b)
            }
            return L(C)
        }

        function y(a, l) {
            var c = 0 < l.length, e = 0 < a.length, h = function (d, h, g, C, f) {
                var n, T, q, v = 0, Z = "0", k = d && [], R = [], t = P, r = d || e && A.find.TAG("*", f), m = S += null == t ? 1 : Math.random() || 0.1, L = r.length;
                for (f && (P = h !== G && h); Z !== L && null != (n = r[Z]); Z++) {
                    if (e &&
                        n) {
                        for (T = 0; q = a[T++];)if (q(n, h, g)) {
                            C.push(n);
                            break
                        }
                        f && (S = m)
                    }
                    c && ((n = !q && n) && v--, d && k.push(n))
                }
                v += Z;
                if (c && Z !== v) {
                    for (T = 0; q = l[T++];)q(k, R, h, g);
                    if (d) {
                        if (0 < v)for (; Z--;)k[Z] || R[Z] || (R[Z] = ha.call(C));
                        R = B(R)
                    }
                    na.apply(C, R);
                    f && !d && 0 < R.length && 1 < v + l.length && b.uniqueSort(C)
                }
                f && (S = m, P = t);
                return k
            };
            return c ? d(h) : h
        }

        var s, D, A, N, w, u, P, x, z, aa, G, O, ba, X, H, F, K, I = "sizzle" + -new Date, W = a.document, S = 0, M = 0, da = c(), Q = c(), ea = c(), U = function (a, l) {
                a === l && (z = !0);
                return 0
            }, V = "undefined", ca = -2147483648, fa = {}.hasOwnProperty, Y = [], ha =
                Y.pop, la = Y.push, na = Y.push, ia = Y.slice, sa = Y.indexOf || function (a) {
                    for (var l = 0, b = this.length; l < b; l++)if (this[l] === a)return l;
                    return -1
                }, ka = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), ma = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ka + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", ja = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ma.replace(3, 8) + ")*)|.*)\\)|)",
            ga = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), ta = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ua = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, va = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), wa = new RegExp(ja), xa = new RegExp("^" + ka + "$"), ra = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ma),
                PSEUDO: new RegExp("^" +
                    ja),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                    "i")
            }, ya = /^(?:input|select|textarea|button)$/i, za = /^h\d$/i, Ca = /^[^{]+\{\s*\[native \w/, Aa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, qa = /[+~]/, Ba = /'|\\/g, oa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), pa = function (a, l, b) {
                a = "0x" + l - 65536;
                return a !== a || b ? l : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
            };
        try {
            na.apply(Y = ia.call(W.childNodes), W.childNodes), Y[W.childNodes.length].nodeType
        } catch (Da) {
            na = {
                apply: Y.length ? function (a, l) {
                    la.apply(a, ia.call(l))
                } :
                    function (a, l) {
                        for (var b = a.length, c = 0; a[b++] = l[c++];);
                        a.length = b - 1
                    }
            }
        }
        D = b.support = {};
        w = b.isXML = function (a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        aa = b.setDocument = function (a) {
            var l = a ? a.ownerDocument || a : W;
            a = l.defaultView;
            if (l === G || 9 !== l.nodeType || !l.documentElement)return G;
            G = l;
            O = l.documentElement;
            ba = !w(l);
            a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function () {
                aa()
            }, !1) : a.attachEvent && a.attachEvent("onunload", function () {
                aa()
            }));
            D.attributes = e(function (a) {
                a.className =
                    "i";
                return !a.getAttribute("className")
            });
            D.getElementsByTagName = e(function (a) {
                a.appendChild(l.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            D.getElementsByClassName = Ca.test(l.getElementsByClassName) && e(function (a) {
                    a.innerHTML = "<div class='a'></div><div class='a i'></div>";
                    a.firstChild.className = "i";
                    return 2 === a.getElementsByClassName("i").length
                });
            D.getById = e(function (a) {
                O.appendChild(a).id = I;
                return !l.getElementsByName || !l.getElementsByName(I).length
            });
            D.getById ? (A.find.ID = function (a,
                                               l) {
                if (typeof l.getElementById !== V && ba) {
                    var b = l.getElementById(a);
                    return b && b.parentNode ? [b] : []
                }
            }, A.filter.ID = function (a) {
                var l = a.replace(oa, pa);
                return function (a) {
                    return a.getAttribute("id") === l
                }
            }) : (delete A.find.ID, A.filter.ID = function (a) {
                var l = a.replace(oa, pa);
                return function (a) {
                    return (a = typeof a.getAttributeNode !== V && a.getAttributeNode("id")) && a.value === l
                }
            });
            A.find.TAG = D.getElementsByTagName ? function (a, l) {
                if (typeof l.getElementsByTagName !== V)return l.getElementsByTagName(a)
            } : function (a, l) {
                var b,
                    c = [], d = 0, e = l.getElementsByTagName(a);
                if ("*" === a) {
                    for (; b = e[d++];)1 === b.nodeType && c.push(b);
                    return c
                }
                return e
            };
            A.find.CLASS = D.getElementsByClassName && function (a, l) {
                    if (typeof l.getElementsByClassName !== V && ba)return l.getElementsByClassName(a)
                };
            H = [];
            X = [];
            if (D.qsa = Ca.test(l.querySelectorAll))e(function (a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>";
                a.querySelectorAll("[t^='']").length && X.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || X.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || X.push(":checked")
            }), e(function (a) {
                var b = l.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && X.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || X.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                X.push(",.*:")
            });
            (D.matchesSelector = Ca.test(F = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && e(function (a) {
                D.disconnectedMatch =
                    F.call(a, "div");
                F.call(a, "[s!='']:x");
                H.push("!=", ja)
            });
            X = X.length && new RegExp(X.join("|"));
            H = H.length && new RegExp(H.join("|"));
            K = (a = Ca.test(O.compareDocumentPosition)) || Ca.test(O.contains) ? function (a, l) {
                var b = 9 === a.nodeType ? a.documentElement : a, c = l && l.parentNode;
                return a === c || !!(c && 1 === c.nodeType && (b.contains ? b.contains(c) : a.compareDocumentPosition && a.compareDocumentPosition(c) & 16))
            } : function (a, l) {
                if (l)for (; l = l.parentNode;)if (l === a)return !0;
                return !1
            };
            U = a ? function (a, b) {
                if (a === b)return z = !0, 0;
                var c =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (c)return c;
                c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                return c & 1 || !D.sortDetached && b.compareDocumentPosition(a) === c ? a === l || a.ownerDocument === W && K(W, a) ? -1 : b === l || b.ownerDocument === W && K(W, b) ? 1 : x ? sa.call(x, a) - sa.call(x, b) : 0 : c & 4 ? -1 : 1
            } : function (a, b) {
                if (a === b)return z = !0, 0;
                var c, d = 0;
                c = a.parentNode;
                var e = b.parentNode, h = [a], E = [b];
                if (!c || !e)return a === l ? -1 : b === l ? 1 : c ? -1 : e ? 1 : x ? sa.call(x, a) - sa.call(x, b) : 0;
                if (c === e)return g(a,
                    b);
                for (c = a; c = c.parentNode;)h.unshift(c);
                for (c = b; c = c.parentNode;)E.unshift(c);
                for (; h[d] === E[d];)d++;
                return d ? g(h[d], E[d]) : h[d] === W ? -1 : E[d] === W ? 1 : 0
            };
            return l
        };
        b.matches = function (a, l) {
            return b(a, null, null, l)
        };
        b.matchesSelector = function (a, l) {
            (a.ownerDocument || a) !== G && aa(a);
            l = l.replace(va, "='$1']");
            if (D.matchesSelector && ba && !(H && H.test(l) || X && X.test(l)))try {
                var c = F.call(a, l);
                if (c || D.disconnectedMatch || a.document && 11 !== a.document.nodeType)return c
            } catch (d) {
            }
            return 0 < b(l, G, null, [a]).length
        };
        b.contains = function (a,
                               l) {
            (a.ownerDocument || a) !== G && aa(a);
            return K(a, l)
        };
        b.attr = function (a, l) {
            (a.ownerDocument || a) !== G && aa(a);
            var b = A.attrHandle[l.toLowerCase()], b = b && fa.call(A.attrHandle, l.toLowerCase()) ? b(a, l, !ba) : void 0;
            return void 0 !== b ? b : D.attributes || !ba ? a.getAttribute(l) : (b = a.getAttributeNode(l)) && b.specified ? b.value : null
        };
        b.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function (a) {
            var l, b = [], c = 0, d = 0;
            z = !D.detectDuplicates;
            x = !D.sortStable && a.slice(0);
            a.sort(U);
            if (z) {
                for (; l =
                           a[d++];)l === a[d] && (c = b.push(d));
                for (; c--;)a.splice(b[c], 1)
            }
            x = null;
            return a
        };
        N = b.getText = function (a) {
            var l, b = "", c = 0;
            l = a.nodeType;
            if (!l)for (; l = a[c++];)b += N(l); else if (1 === l || 9 === l || 11 === l) {
                if ("string" === typeof a.textContent)return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)b += N(a)
            } else if (3 === l || 4 === l)return a.nodeValue;
            return b
        };
        A = b.selectors = {
            cacheLength: 50, createPseudo: d, match: ra, attrHandle: {}, find: {}, relative: {
                ">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {
                    dir: "previousSibling",
                    first: !0
                }, "~": {dir: "previousSibling"}
            }, preFilter: {
                ATTR: function (a) {
                    a[1] = a[1].replace(oa, pa);
                    a[3] = (a[4] || a[5] || "").replace(oa, pa);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                }, CHILD: function (a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
                    return a
                }, PSEUDO: function (a) {
                    var l, b = !a[5] && a[2];
                    if (ra.CHILD.test(a[0]))return null;
                    a[3] && void 0 !== a[4] ? a[2] = a[4] : b && wa.test(b) &&
                    (l = t(b, !0)) && (l = b.indexOf(")", b.length - l) - b.length) && (a[0] = a[0].slice(0, l), a[2] = b.slice(0, l));
                    return a.slice(0, 3)
                }
            }, filter: {
                TAG: function (a) {
                    var l = a.replace(oa, pa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === l
                    }
                }, CLASS: function (a) {
                    var l = da[a + " "];
                    return l || (l = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && da(a, function (a) {
                            return l.test("string" === typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") ||
                                "")
                        })
                }, ATTR: function (a, l, c) {
                    return function (d) {
                        d = b.attr(d, a);
                        if (null == d)return "!=" === l;
                        if (!l)return !0;
                        d += "";
                        return "=" === l ? d === c : "!=" === l ? d !== c : "^=" === l ? c && 0 === d.indexOf(c) : "*=" === l ? c && -1 < d.indexOf(c) : "$=" === l ? c && d.slice(-c.length) === c : "~=" === l ? -1 < (" " + d + " ").indexOf(c) : "|=" === l ? d === c || d.slice(0, c.length + 1) === c + "-" : !1
                    }
                }, CHILD: function (a, l, b, c, d) {
                    var e = "nth" !== a.slice(0, 3), h = "last" !== a.slice(-4), g = "of-type" === l;
                    return 1 === c && 0 === d ? function (a) {
                        return !!a.parentNode
                    } : function (l, b, E) {
                        var C, f, n, T, q;
                        b = e !==
                        h ? "nextSibling" : "previousSibling";
                        var v = l.parentNode, Z = g && l.nodeName.toLowerCase();
                        E = !E && !g;
                        if (v) {
                            if (e) {
                                for (; b;) {
                                    for (f = l; f = f[b];)if (g ? f.nodeName.toLowerCase() === Z : 1 === f.nodeType)return !1;
                                    q = b = "only" === a && !q && "nextSibling"
                                }
                                return !0
                            }
                            q = [h ? v.firstChild : v.lastChild];
                            if (h && E)for (E = v[I] || (v[I] = {}), C = E[a] || [], T = C[0] === S && C[1], n = C[0] === S && C[2], f = T && v.childNodes[T]; f = ++T && f && f[b] || (n = T = 0, q.pop());) {
                                if (1 === f.nodeType && ++n && f === l) {
                                    E[a] = [S, T, n];
                                    break
                                }
                            } else if (E && (C = (l[I] || (l[I] = {}))[a]) && C[0] === S)n = C[1]; else for (; (f =
                                ++T && f && f[b] || (n = T = 0, q.pop())) && ((g ? f.nodeName.toLowerCase() !== Z : 1 !== f.nodeType) || !++n || (E && ((f[I] || (f[I] = {}))[a] = [S, n]), f !== l)););
                            n -= d;
                            return n === c || 0 === n % c && 0 <= n / c
                        }
                    }
                }, PSEUDO: function (a, l) {
                    var c, e = A.pseudos[a] || A.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return e[I] ? e(l) : 1 < e.length ? (c = [a, a, "", l], A.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var c, d = e(a, l), h = d.length; h--;)c = sa.call(a, d[h]), a[c] = !(b[c] = d[h])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            }, pseudos: {
                not: d(function (a) {
                    var l =
                        [], b = [], c = u(a.replace(ga, "$1"));
                    return c[I] ? d(function (a, l, b, d) {
                        d = c(a, null, d, []);
                        for (var e = a.length; e--;)if (b = d[e])a[e] = !(l[e] = b)
                    }) : function (a, d, e) {
                        l[0] = a;
                        c(l, null, e, b);
                        return !b.pop()
                    }
                }), has: d(function (a) {
                    return function (l) {
                        return 0 < b(a, l).length
                    }
                }), contains: d(function (a) {
                    return function (l) {
                        return -1 < (l.textContent || l.innerText || N(l)).indexOf(a)
                    }
                }), lang: d(function (a) {
                    xa.test(a || "") || b.error("unsupported lang: " + a);
                    a = a.replace(oa, pa).toLowerCase();
                    return function (l) {
                        var b;
                        do if (b = ba ? l.lang : l.getAttribute("xml:lang") ||
                            l.getAttribute("lang"))return b = b.toLowerCase(), b === a || 0 === b.indexOf(a + "-"); while ((l = l.parentNode) && 1 === l.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === O
                }, focus: function (a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return !1 === a.disabled
                }, disabled: function (a) {
                    return !0 === a.disabled
                }, checked: function (a) {
                    var l = a.nodeName.toLowerCase();
                    return "input" ===
                        l && !!a.checked || "option" === l && !!a.selected
                }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType)return !1;
                    return !0
                }, parent: function (a) {
                    return !A.pseudos.empty(a)
                }, header: function (a) {
                    return za.test(a.nodeName)
                }, input: function (a) {
                    return ya.test(a.nodeName)
                }, button: function (a) {
                    var l = a.nodeName.toLowerCase();
                    return "input" === l && "button" === a.type || "button" === l
                }, text: function (a) {
                    var l;
                    return "input" === a.nodeName.toLowerCase() &&
                        "text" === a.type && (null == (l = a.getAttribute("type")) || "text" === l.toLowerCase())
                }, first: q(function () {
                    return [0]
                }), last: q(function (a, l) {
                    return [l - 1]
                }), eq: q(function (a, l, b) {
                    return [0 > b ? b + l : b]
                }), even: q(function (a, l) {
                    for (var b = 0; b < l; b += 2)a.push(b);
                    return a
                }), odd: q(function (a, l) {
                    for (var b = 1; b < l; b += 2)a.push(b);
                    return a
                }), lt: q(function (a, l, b) {
                    for (l = 0 > b ? b + l : b; 0 <= --l;)a.push(l);
                    return a
                }), gt: q(function (a, l, b) {
                    for (b = 0 > b ? b + l : b; ++b < l;)a.push(b);
                    return a
                })
            }
        };
        A.pseudos.nth = A.pseudos.eq;
        for (s in{
            radio: !0, checkbox: !0,
            file: !0, password: !0, image: !0
        })A.pseudos[s] = f(s);
        for (s in{submit: !0, reset: !0})A.pseudos[s] = n(s);
        k.prototype = A.filters = A.pseudos;
        A.setFilters = new k;
        u = b.compile = function (a, l) {
            var b, c = [], d = [], e = ea[a + " "];
            if (!e) {
                l || (l = t(a));
                for (b = l.length; b--;)e = p(l[b]), e[I] ? c.push(e) : d.push(e);
                e = ea(a, y(d, c))
            }
            return e
        };
        D.sortStable = I.split("").sort(U).join("") === I;
        D.detectDuplicates = !!z;
        aa();
        D.sortDetached = e(function (a) {
            return a.compareDocumentPosition(G.createElement("div")) & 1
        });
        e(function (a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || h("type|href|height|width", function (a, l, b) {
            if (!b)return a.getAttribute(l, "type" === l.toLowerCase() ? 1 : 2)
        });
        D.attributes && e(function (a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        }) || h("value", function (a, l, b) {
            if (!b && "input" === a.nodeName.toLowerCase())return a.defaultValue
        });
        e(function (a) {
            return null == a.getAttribute("disabled")
        }) || h("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            function (a, l, b) {
                var c;
                if (!b)return !0 === a[l] ? l.toLowerCase() : (c = a.getAttributeNode(l)) && c.specified ? c.value : null
            });
        return b
    }(d);
    g.find = ka;
    g.expr = ka.selectors;
    g.expr[":"] = g.expr.pseudos;
    g.unique = ka.uniqueSort;
    g.text = ka.getText;
    g.isXMLDoc = ka.isXML;
    g.contains = ka.contains;
    var Qa = g.expr.match.needsContext, Ra = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ib = /^.[^:#\[\.,]*$/;
    g.filter = function (a, b, c) {
        var d = b[0];
        c && (a = ":not(" + a + ")");
        return 1 === b.length && 1 === d.nodeType ? g.find.matchesSelector(d, a) ? [d] : [] : g.find.matches(a, g.grep(b,
            function (a) {
                return 1 === a.nodeType
            }))
    };
    g.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" !== typeof a)return this.pushStack(g(a).filter(function () {
                for (b = 0; b < c; b++)if (g.contains(e[b], this))return !0
            }));
            for (b = 0; b < c; b++)g.find(a, e[b], d);
            d = this.pushStack(1 < c ? g.unique(d) : d);
            d.selector = this.selector ? this.selector + " " + a : a;
            return d
        }, filter: function (l) {
            return this.pushStack(a(this, l || [], !1))
        }, not: function (l) {
            return this.pushStack(a(this, l || [], !0))
        }, is: function (l) {
            return !!a(this, "string" === typeof l && Qa.test(l) ? g(l) : l || [], !1).length
        }
    });
    var za, ub = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (g.fn.init = function (a, b) {
        var c;
        if (!a)return this;
        if ("string" === typeof a) {
            c = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : ub.exec(a);
            if (!c || !c[1] && b)return !b || b.jquery ? (b || za).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof g ? b[0] : b, g.merge(this, g.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : M, !0)), Ra.test(c[1]) && g.isPlainObject(b))for (c in b)if (g.isFunction(this[c]))this[c](b[c]);
                else this.attr(c, b[c])
            } else(c = M.getElementById(c[2])) && c.parentNode && (this.length = 1, this[0] = c), this.context = M, this.selector = a;
            return this
        }
        if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
        if (g.isFunction(a))return "undefined" !== typeof za.ready ? za.ready(a) : a(g);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return g.makeArray(a, this)
    }).prototype = g.fn;
    za = g(M);
    var vb = /^(?:parents|prev(?:Until|All))/, wb = {children: !0, contents: !0, next: !0, prev: !0};
    g.extend({
        dir: function (a,
                       b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;)if (1 === a.nodeType) {
                if (e && g(a).is(c))break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    g.fn.extend({
        has: function (a) {
            var b = g(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++)if (g.contains(this, b[a]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, h = [], f = Qa.test(a) || "string" !== typeof a ? g(a, b || this.context) : 0; d < e; d++)for (c = this[d]; c && c !==
            b; c = c.parentNode)if (11 > c.nodeType && (f ? -1 < f.index(c) : 1 === c.nodeType && g.find.matchesSelector(c, a))) {
                h.push(c);
                break
            }
            return this.pushStack(1 < h.length ? g.unique(h) : h)
        }, index: function (a) {
            return a ? "string" === typeof a ? ua.call(g(a), this[0]) : ua.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(g.unique(g.merge(this.get(), g(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    g.each({
        parent: function (a) {
            return (a =
                a.parentNode) && 11 !== a.nodeType ? a : null
        }, parents: function (a) {
            return g.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return g.dir(a, "parentNode", c)
        }, next: function (a) {
            return e(a, "nextSibling")
        }, prev: function (a) {
            return e(a, "previousSibling")
        }, nextAll: function (a) {
            return g.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return g.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return g.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return g.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return g.sibling((a.parentNode ||
            {}).firstChild, a)
        }, children: function (a) {
            return g.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || g.merge([], a.childNodes)
        }
    }, function (a, b) {
        g.fn[a] = function (c, d) {
            var e = g.map(this, b, c);
            "Until" !== a.slice(-5) && (d = c);
            d && "string" === typeof d && (e = g.filter(d, e));
            1 < this.length && (wb[a] || g.unique(e), vb.test(a) && e.reverse());
            return this.pushStack(e)
        }
    });
    var ca = /\S+/g, Ma = {};
    g.Callbacks = function (a) {
        a = "string" === typeof a ? Ma[a] || f(a) : g.extend({}, a);
        var b, c, d, e, h, n, q = [], v = !a.once && [], k = function (g) {
            b =
                a.memory && g;
            c = !0;
            n = e || 0;
            e = 0;
            h = q.length;
            for (d = !0; q && n < h; n++)if (!1 === q[n].apply(g[0], g[1]) && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1;
            q && (v ? v.length && k(v.shift()) : b ? q = [] : t.disable())
        }, t = {
            add: function () {
                if (q) {
                    var c = q.length;
                    (function tb(b) {
                        g.each(b, function (b, c) {
                            var d = g.type(c);
                            "function" === d ? a.unique && t.has(c) || q.push(c) : c && c.length && "string" !== d && tb(c)
                        })
                    })(arguments);
                    d ? h = q.length : b && (e = c, k(b))
                }
                return this
            }, remove: function () {
                q && g.each(arguments, function (a, b) {
                    for (var l; -1 < (l = g.inArray(b, q, l));)q.splice(l, 1), d &&
                    (l <= h && h--, l <= n && n--)
                });
                return this
            }, has: function (a) {
                return a ? -1 < g.inArray(a, q) : !(!q || !q.length)
            }, empty: function () {
                q = [];
                h = 0;
                return this
            }, disable: function () {
                q = v = b = void 0;
                return this
            }, disabled: function () {
                return !q
            }, lock: function () {
                v = void 0;
                b || t.disable();
                return this
            }, locked: function () {
                return !v
            }, fireWith: function (a, b) {
                !q || c && !v || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? v.push(b) : k(b));
                return this
            }, fire: function () {
                t.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!c
            }
        };
        return t
    };
    g.extend({
        Deferred: function (a) {
            var b =
                [["resolve", "done", g.Callbacks("once memory"), "resolved"], ["reject", "fail", g.Callbacks("once memory"), "rejected"], ["notify", "progress", g.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    e.done(arguments).fail(arguments);
                    return this
                }, then: function () {
                    var a = arguments;
                    return g.Deferred(function (l) {
                        g.each(b, function (b, c) {
                            var h = g.isFunction(a[b]) && a[b];
                            e[c[1]](function () {
                                var a = h && h.apply(this, arguments);
                                if (a && g.isFunction(a.promise))a.promise().done(l.resolve).fail(l.reject).progress(l.notify);
                                else l[c[0] + "With"](this === d ? l.promise() : this, h ? [a] : arguments)
                            })
                        });
                        a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? g.extend(a, d) : d
                }
            }, e = {};
            d.pipe = d.then;
            g.each(b, function (a, l) {
                var h = l[2], g = l[3];
                d[l[1]] = h.add;
                g && h.add(function () {
                    c = g
                }, b[a ^ 1][2].disable, b[2][2].lock);
                e[l[0]] = function () {
                    e[l[0] + "With"](this === e ? d : this, arguments);
                    return this
                };
                e[l[0] + "With"] = h.fireWith
            });
            d.promise(e);
            a && a.call(e, e);
            return e
        }, when: function (a) {
            var b = 0, c = ea.call(arguments), d = c.length, e = 1 !== d || a && g.isFunction(a.promise) ?
                d : 0, h = 1 === e ? a : g.Deferred(), f = function (a, b, l) {
                return function (c) {
                    b[a] = this;
                    l[a] = 1 < arguments.length ? ea.call(arguments) : c;
                    l === n ? h.notifyWith(b, l) : --e || h.resolveWith(b, l)
                }
            }, n, q, v;
            if (1 < d)for (n = Array(d), q = Array(d), v = Array(d); b < d; b++)c[b] && g.isFunction(c[b].promise) ? c[b].promise().done(f(b, v, c)).fail(h.reject).progress(f(b, q, n)) : --e;
            e || h.resolveWith(v, c);
            return h.promise()
        }
    });
    var Aa;
    g.fn.ready = function (a) {
        g.ready.promise().done(a);
        return this
    };
    g.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? g.readyWait++ :
                g.ready(!0)
        }, ready: function (a) {
            (!0 === a ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== a && 0 < --g.readyWait || (Aa.resolveWith(M, [g]), g.fn.trigger && g(M).trigger("ready").off("ready")))
        }
    });
    g.ready.promise = function (a) {
        Aa || (Aa = g.Deferred(), "complete" === M.readyState ? setTimeout(g.ready) : (M.addEventListener("DOMContentLoaded", k, !1), d.addEventListener("load", k, !1)));
        return Aa.promise(a)
    };
    g.ready.promise();
    var fa = g.access = function (a, b, c, d, e, h, f) {
        var n = 0, q = a.length, v = null == c;
        if ("object" === g.type(c))for (n in e = !0,
            c)g.access(a, b, n, c[n], !0, h, f); else if (void 0 !== d && (e = !0, g.isFunction(d) || (f = !0), v && (f ? (b.call(a, d), b = null) : (v = b, b = function (a, b, l) {
                return v.call(g(a), l)
            })), b))for (; n < q; n++)b(a[n], c, f ? d : d.call(a[n], n, b(a[n], c)));
        return e ? a : v ? b.call(a) : q ? b(a[0], c) : h
    };
    g.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    m.uid = 1;
    m.accepts = g.acceptData;
    m.prototype = {
        key: function (a) {
            if (!m.accepts(a))return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = m.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a,
                        b)
                } catch (d) {
                    b[this.expando] = c, g.extend(a, b)
                }
            }
            this.cache[c] || (this.cache[c] = {});
            return c
        }, set: function (a, b, c) {
            var d;
            a = this.key(a);
            var e = this.cache[a];
            if ("string" === typeof b)e[b] = c; else if (g.isEmptyObject(e))g.extend(this.cache[a], b); else for (d in b)e[d] = b[d];
            return e
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            if (void 0 === b || b && "string" === typeof b && void 0 === c)return c = this.get(a, b), void 0 !== c ? c : this.get(a, g.camelCase(b));
            this.set(a, b, c);
            return void 0 !==
            c ? c : b
        }, remove: function (a, b) {
            var c, d;
            c = this.key(a);
            var e = this.cache[c];
            if (void 0 === b)this.cache[c] = {}; else for (g.isArray(b) ? d = b.concat(b.map(g.camelCase)) : (c = g.camelCase(b), b in e ? d = [b, c] : (d = c, d = d in e ? [d] : d.match(ca) || [])), c = d.length; c--;)delete e[d[c]]
        }, hasData: function (a) {
            return !g.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var F = new m, U = new m, kb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, jb = /([A-Z])/g;
    g.extend({
        hasData: function (a) {
            return U.hasData(a) ||
                F.hasData(a)
        }, data: function (a, b, c) {
            return U.access(a, b, c)
        }, removeData: function (a, b) {
            U.remove(a, b)
        }, _data: function (a, b, c) {
            return F.access(a, b, c)
        }, _removeData: function (a, b) {
            F.remove(a, b)
        }
    });
    g.fn.extend({
        data: function (a, b) {
            var c, d, e, h = this[0], f = h && h.attributes;
            if (void 0 === a) {
                if (this.length && (e = U.get(h), 1 === h.nodeType && !F.get(h, "hasDataAttrs"))) {
                    for (c = f.length; c--;)d = f[c].name, 0 === d.indexOf("data-") && (d = g.camelCase(d.slice(5)), s(h, d, e[d]));
                    F.set(h, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" === typeof a ?
                this.each(function () {
                    U.set(this, a)
                }) : fa(this, function (b) {
                var c, d = g.camelCase(a);
                if (h && void 0 === b) {
                    c = U.get(h, a);
                    if (void 0 !== c)return c;
                    c = U.get(h, d);
                    if (void 0 !== c)return c;
                    c = s(h, d, void 0);
                    if (void 0 !== c)return c
                } else this.each(function () {
                    var c = U.get(this, d);
                    U.set(this, d, b);
                    -1 !== a.indexOf("-") && void 0 !== c && U.set(this, a, b)
                })
            }, null, b, 1 < arguments.length, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                U.remove(this, a)
            })
        }
    });
    g.extend({
        queue: function (a, b, c) {
            var d;
            if (a)return b = (b || "fx") + "queue",
                d = F.get(a, b), c && (!d || g.isArray(c) ? d = F.access(a, b, g.makeArray(c)) : d.push(c)), d || []
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = g.queue(a, b), d = c.length, e = c.shift(), h = g._queueHooks(a, b), f = function () {
                g.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--);
            e && ("fx" === b && c.unshift("inprogress"), delete h.stop, e.call(a, f, h));
            !d && h && h.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return F.get(a, c) || F.access(a, c, {
                    empty: g.Callbacks("once memory").add(function () {
                        F.remove(a, [b + "queue", c])
                    })
                })
        }
    });
    g.fn.extend({
        queue: function (a,
                         b) {
            var c = 2;
            "string" !== typeof a && (b = a, a = "fx", c--);
            return arguments.length < c ? g.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = g.queue(this, a, b);
                g._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && g.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                g.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = g.Deferred(), h = this, f = this.length, n = function () {
                --d || e.resolveWith(h, [h])
            };
            "string" !== typeof a && (b = a, a = void 0);
            for (a =
                     a || "fx"; f--;)(c = F.get(h[f], a + "queueHooks")) && c.empty && (d++, c.empty.add(n));
            n();
            return e.promise(b)
        }
    });
    var qa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ha = ["Top", "Right", "Bottom", "Left"], ma = function (a, b) {
        a = b || a;
        return "none" === g.css(a, "display") || !g.contains(a.ownerDocument, a)
    }, Sa = /^(?:checkbox|radio)$/i;
    (function () {
        var a = M.createDocumentFragment().appendChild(M.createElement("div"));
        a.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        Q.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        Q.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    })();
    Q.focusinBubbles = "onfocusin"in d;
    var xb = /^key/, yb = /^(?:mouse|contextmenu)|click/, Ta = /^(?:focusinfocus|focusoutblur)$/, Ua = /^([^.]*)(?:\.(.+)|)$/;
    g.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var h, f, n, q, v, k, t, r, m;
            if (v = F.get(a))for (c.handler && (h = c, c = h.handler, e = h.selector), c.guid || (c.guid = g.guid++), (q = v.events) || (q = v.events = {}), (f = v.handle) || (f = v.handle = function (b) {
                return "undefined" !== typeof g && g.event.triggered !==
                b.type ? g.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(ca) || [""], v = b.length; v--;)n = Ua.exec(b[v]) || [], r = k = n[1], m = (n[2] || "").split(".").sort(), r && (n = g.event.special[r] || {}, r = (e ? n.delegateType : n.bindType) || r, n = g.event.special[r] || {}, k = g.extend({
                type: r,
                origType: k,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && g.expr.match.needsContext.test(e),
                namespace: m.join(".")
            }, h), (t = q[r]) || (t = q[r] = [], t.delegateCount = 0, n.setup && !1 !== n.setup.call(a, d, m, f) || a.addEventListener && a.addEventListener(r,
                f, !1)), n.add && (n.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? t.splice(t.delegateCount++, 0, k) : t.push(k), g.event.global[r] = !0)
        },
        remove: function (a, b, c, d, e) {
            var h, f, n, q, v, k, t, r, m, L, B, J = F.hasData(a) && F.get(a);
            if (J && (q = J.events)) {
                b = (b || "").match(ca) || [""];
                for (v = b.length; v--;)if (n = Ua.exec(b[v]) || [], m = B = n[1], L = (n[2] || "").split(".").sort(), m) {
                    t = g.event.special[m] || {};
                    m = (d ? t.delegateType : t.bindType) || m;
                    r = q[m] || [];
                    n = n[2] && new RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (f = h = r.length; h--;)k =
                        r[h], !e && B !== k.origType || c && c.guid !== k.guid || n && !n.test(k.namespace) || d && !(d === k.selector || "**" === d && k.selector) || (r.splice(h, 1), k.selector && r.delegateCount--, t.remove && t.remove.call(a, k));
                    f && !r.length && (t.teardown && !1 !== t.teardown.call(a, L, J.handle) || g.removeEvent(a, m, J.handle), delete q[m])
                } else for (m in q)g.event.remove(a, m + b[v], c, d, !0);
                g.isEmptyObject(q) && (delete J.handle, F.remove(a, "events"))
            }
        },
        trigger: function (a, b, c, e) {
            var h, f, n, q, v, k, t = [c || M], r = Ha.call(a, "type") ? a.type : a;
            k = Ha.call(a, "namespace") ?
                a.namespace.split(".") : [];
            f = h = c = c || M;
            if (3 !== c.nodeType && 8 !== c.nodeType && !Ta.test(r + g.event.triggered) && (0 <= r.indexOf(".") && (k = r.split("."), r = k.shift(), k.sort()), q = 0 > r.indexOf(":") && "on" + r, a = a[g.expando] ? a : new g.Event(r, "object" === typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = k.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + k.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : g.makeArray(b, [a]), k = g.event.special[r] || {}, e || !k.trigger || !1 !== k.trigger.apply(c,
                    b))) {
                if (!e && !k.noBubble && !g.isWindow(c)) {
                    n = k.delegateType || r;
                    Ta.test(n + r) || (f = f.parentNode);
                    for (; f; f = f.parentNode)t.push(f), h = f;
                    h === (c.ownerDocument || M) && t.push(h.defaultView || h.parentWindow || d)
                }
                for (h = 0; (f = t[h++]) && !a.isPropagationStopped();)a.type = 1 < h ? n : k.bindType || r, (v = (F.get(f, "events") || {})[a.type] && F.get(f, "handle")) && v.apply(f, b), (v = q && f[q]) && v.apply && g.acceptData(f) && (a.result = v.apply(f, b), !1 === a.result && a.preventDefault());
                a.type = r;
                e || a.isDefaultPrevented() || k._default && !1 !== k._default.apply(t.pop(),
                    b) || !g.acceptData(c) || !q || !g.isFunction(c[r]) || g.isWindow(c) || ((h = c[q]) && (c[q] = null), g.event.triggered = r, c[r](), g.event.triggered = void 0, h && (c[q] = h));
                return a.result
            }
        },
        dispatch: function (a) {
            a = g.event.fix(a);
            var b, c, d, e, h = [], f = ea.call(arguments);
            b = (F.get(this, "events") || {})[a.type] || [];
            var n = g.event.special[a.type] || {};
            f[0] = a;
            a.delegateTarget = this;
            if (!n.preDispatch || !1 !== n.preDispatch.call(this, a)) {
                h = g.event.handlers.call(this, a, b);
                for (b = 0; (e = h[b++]) && !a.isPropagationStopped();)for (a.currentTarget =
                                                                                e.elem, c = 0; (d = e.handlers[c++]) && !a.isImmediatePropagationStopped();)if (!a.namespace_re || a.namespace_re.test(d.namespace))a.handleObj = d, a.data = d.data, d = ((g.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, f), void 0 !== d && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation());
                n.postDispatch && n.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, h, f = [], n = b.delegateCount, q = a.target;
            if (n && q.nodeType && (!a.button || "click" !== a.type))for (; q !== this; q = q.parentNode ||
                this)if (!0 !== q.disabled || "click" !== a.type) {
                d = [];
                for (c = 0; c < n; c++)h = b[c], e = h.selector + " ", void 0 === d[e] && (d[e] = h.needsContext ? 0 <= g(e, this).index(q) : g.find(e, this, null, [q]).length), d[e] && d.push(h);
                d.length && f.push({elem: q, handlers: d})
            }
            n < b.length && f.push({elem: this, handlers: b.slice(n)});
            return f
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (a,
                                                                             b) {
                null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e = b.button;
                null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || M, d = c.documentElement, c = c.body, a.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop ||
                    0));
                a.which || void 0 === e || (a.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[g.expando])return a;
            var b, c, d;
            b = a.type;
            var e = a, h = this.fixHooks[b];
            h || (this.fixHooks[b] = h = yb.test(b) ? this.mouseHooks : xb.test(b) ? this.keyHooks : {});
            d = h.props ? this.props.concat(h.props) : this.props;
            a = new g.Event(e);
            for (b = d.length; b--;)c = d[b], a[c] = e[c];
            a.target || (a.target = M);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            return h.filter ? h.filter(a, e) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !==
                        p() && this.focus)return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === p() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && g.nodeName(this, "input"))return this.click(), !1
                }, _default: function (a) {
                    return g.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            a = g.extend(new g.Event, c, {
                type: a, isSimulated: !0,
                originalEvent: {}
            });
            d ? g.event.trigger(a, null, b) : g.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    g.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };
    g.Event = function (a, b) {
        if (!(this instanceof g.Event))return new g.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() ? u : x) : this.type = a;
        b && g.extend(this, b);
        this.timeStamp = a && a.timeStamp ||
            g.now();
        this[g.expando] = !0
    };
    g.Event.prototype = {
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = u;
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = u;
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u;
            this.stopPropagation()
        }
    };
    g.each({mouseenter: "mouseover", mouseleave: "mouseout"},
        function (a, b) {
            g.event.special[a] = {
                delegateType: b, bindType: b, handle: function (a) {
                    var c, d = a.relatedTarget, l = a.handleObj;
                    if (!d || d !== this && !g.contains(this, d))a.type = l.origType, c = l.handler.apply(this, arguments), a.type = b;
                    return c
                }
            }
        });
    Q.focusinBubbles || g.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            g.event.simulate(b, a.target, g.event.fix(a), !0)
        };
        g.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = F.access(d, b);
                e || d.addEventListener(a, c, !0);
                F.access(d, b, (e || 0) +
                    1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = F.access(d, b) - 1;
                e ? F.access(d, b, e) : (d.removeEventListener(a, c, !0), F.remove(d, b))
            }
        }
    });
    g.fn.extend({
        on: function (a, b, c, d, e) {
            var h, f;
            if ("object" === typeof a) {
                "string" !== typeof b && (c = c || b, b = void 0);
                for (f in a)this.on(f, b, c, a[f], e);
                return this
            }
            null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" === typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0));
            if (!1 === d)d = x; else if (!d)return this;
            1 === e && (h = d, d = function (a) {
                g().off(a);
                return h.apply(this, arguments)
            }, d.guid =
                h.guid || (h.guid = g.guid++));
            return this.each(function () {
                g.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, g(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" === typeof a) {
                for (d in a)this.off(d, b, a[d]);
                return this
            }
            if (!1 === b || "function" === typeof b)c = b, b = void 0;
            !1 === c && (c = x);
            return this.each(function () {
                g.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                g.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            if (c)return g.event.trigger(a, b, c, !0)
        }
    });
    var Va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Wa = /<([\w:]+)/, zb = /<|&#?\w+;/, Ab = /<(?:script|style|link)/i, Bb = /checked\s*(?:[^=]|=\s*.checked.)/i, Xa = /^$|\/(?:java|ecma)script/i, lb = /^true\/(.*)/, Cb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, V = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1,
            "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    g.extend({
        clone: function (a, b, c) {
            var d, e, f, q, k = a.cloneNode(!0), r = g.contains(a.ownerDocument, a);
            if (!(Q.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || g.isXMLDoc(a)))for (q = v(k), f = v(a), d = 0, e = f.length; d < e; d++) {
                var t = f[d], m = q[d], L = m.nodeName.toLowerCase();
                if ("input" === L && Sa.test(t.type))m.checked = t.checked; else if ("input" === L || "textarea" === L)m.defaultValue = t.defaultValue
            }
            if (b)if (c)for (f = f || v(a), q = q || v(k), d = 0, e = f.length; d < e; d++)n(f[d], q[d]); else n(a, k);
            q = v(k, "script");
            0 < q.length && h(q, !r && v(a, "script"));
            return k
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, n, q = b.createDocumentFragment(), k = [], t = 0, r = a.length; t < r; t++)if ((e = a[t]) || 0 === e)if ("object" === g.type(e))g.merge(k, e.nodeType ? [e] : e); else if (zb.test(e)) {
                f = f || q.appendChild(b.createElement("div"));
                n = (Wa.exec(e) ||
                ["", ""])[1].toLowerCase();
                n = V[n] || V._default;
                f.innerHTML = n[1] + e.replace(Va, "<$1></$2>") + n[2];
                for (n = n[0]; n--;)f = f.lastChild;
                g.merge(k, f.childNodes);
                f = q.firstChild;
                f.textContent = ""
            } else k.push(b.createTextNode(e));
            q.textContent = "";
            for (t = 0; e = k[t++];)if (!d || -1 === g.inArray(e, d))if (a = g.contains(e.ownerDocument, e), f = v(q.appendChild(e), "script"), a && h(f), c)for (n = 0; e = f[n++];)Xa.test(e.type || "") && c.push(e);
            return q
        }, cleanData: function (a) {
            for (var b, c, d, e, h, f, n = g.event.special, q = 0; void 0 !== (c = a[q]); q++) {
                if (g.acceptData(c) &&
                    (h = c[F.expando]) && (b = F.cache[h])) {
                    d = Object.keys(b.events || {});
                    if (d.length)for (f = 0; void 0 !== (e = d[f]); f++)n[e] ? g.event.remove(c, e) : g.removeEvent(c, e, b.handle);
                    F.cache[h] && delete F.cache[h]
                }
                delete U.cache[c[U.expando]]
            }
        }
    });
    g.fn.extend({
        text: function (a) {
            return fa(this, function (a) {
                return void 0 === a ? g.text(this) : this.empty().each(function () {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)this.textContent = a
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                1 !==
                this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || q(this, a).appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = q(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? g.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || g.cleanData(v(c)), c.parentNode && (b && g.contains(c.ownerDocument, c) && h(v(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (g.cleanData(v(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function () {
                return g.clone(this, a, b)
            })
        }, html: function (a) {
            return fa(this, function (a) {
                var b =
                    this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                if ("string" === typeof a && !Ab.test(a) && !V[(Wa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Va, "<$1></$2>");
                    try {
                        for (; c < d; c++)b = this[c] || {}, 1 === b.nodeType && (g.cleanData(v(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            this.domManip(arguments, function (b) {
                a = this.parentNode;
                g.cleanData(v(this));
                a && a.replaceChild(b, this)
            });
            return a && (a.length ||
            a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = ra.apply([], a);
            var c, d, e, h, f = 0, n = this.length, q = this, k = n - 1, r = a[0], m = g.isFunction(r);
            if (m || 1 < n && "string" === typeof r && !Q.checkClone && Bb.test(r))return this.each(function (c) {
                var d = q.eq(c);
                m && (a[0] = r.call(this, c, d.html()));
                d.domManip(a, b)
            });
            if (n && (c = g.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                d = g.map(v(c, "script"), t);
                for (e = d.length; f < n; f++)h = c, f !==
                k && (h = g.clone(h, !0, !0), e && g.merge(d, v(h, "script"))), b.call(this[f], h, f);
                if (e)for (c = d[d.length - 1].ownerDocument, g.map(d, B), f = 0; f < e; f++)h = d[f], Xa.test(h.type || "") && !F.access(h, "globalEval") && g.contains(c, h) && (h.src ? g._evalUrl && g._evalUrl(h.src) : g.globalEval(h.textContent.replace(Cb, "")))
            }
            return this
        }
    });
    g.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        g.fn[a] = function (a) {
            for (var c = [], d = g(a), e = d.length - 1, h = 0; h <= e; h++)a = h ===
            e ? this : this.clone(!0), g(d[h])[b](a), Ga.apply(c, a.get());
            return this.pushStack(c)
        }
    });
    var va, Na = {}, Oa = /^margin/, Ea = new RegExp("^(" + qa + ")(?!px)[a-z%]+$", "i"), wa = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };
    (function () {
        function a() {
            f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";
            e.appendChild(h);
            var l = d.getComputedStyle(f, null);
            b = "1%" !== l.top;
            c = "4px" === l.width;
            e.removeChild(h)
        }

        var b, c, e = M.documentElement, h = M.createElement("div"), f = M.createElement("div");
        f.style.backgroundClip = "content-box";
        f.cloneNode(!0).style.backgroundClip = "";
        Q.clearCloneStyle = "content-box" === f.style.backgroundClip;
        h.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
        h.appendChild(f);
        d.getComputedStyle && g.extend(Q, {
            pixelPosition: function () {
                a();
                return b
            }, boxSizingReliable: function () {
                null == c && a();
                return c
            }, reliableMarginRight: function () {
                var a;
                a = f.appendChild(M.createElement("div"));
                a.style.cssText = f.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box";
                a.style.marginRight = a.style.width = "0";
                f.style.width = "1px";
                e.appendChild(h);
                a = !parseFloat(d.getComputedStyle(a, null).marginRight);
                e.removeChild(h);
                f.innerHTML = "";
                return a
            }
        })
    })();
    g.swap = function (a, b, c, d) {
        var e, h = {};
        for (e in b)h[e] = a.style[e], a.style[e] = b[e];
        c = c.apply(a, d || []);
        for (e in b)a.style[e] = h[e];
        return c
    };
    var Db = /^(none|table(?!-c[ea]).+)/, mb = new RegExp("^(" + qa + ")(.*)$", "i"), Eb = new RegExp("^([+-])=(" + qa + ")", "i"), Fb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ya = {letterSpacing: 0, fontWeight: 400}, Pa = ["Webkit", "O", "Moz", "ms"];
    g.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = A(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a,
                         b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, h, f, n = g.camelCase(b), q = a.style;
                b = g.cssProps[n] || (g.cssProps[n] = r(q, n));
                f = g.cssHooks[b] || g.cssHooks[n];
                if (void 0 !== c)h = typeof c, "string" === h && (e = Eb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(g.css(a, b)), h = "number"), null != c && c === c && ("number" !== h || g.cssNumber[n] || (c += "px"), Q.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (q[b] = "inherit"), f && "set"in f && void 0 === (c = f.set(a, c, d)) || (q[b] = "", q[b] = c)); else return f && "get"in f && void 0 !== (e = f.get(a,
                    !1, d)) ? e : q[b]
            }
        },
        css: function (a, b, c, d) {
            var e, h;
            h = g.camelCase(b);
            b = g.cssProps[h] || (g.cssProps[h] = r(a.style, h));
            (h = g.cssHooks[b] || g.cssHooks[h]) && "get"in h && (e = h.get(a, !0, c));
            void 0 === e && (e = A(a, b, d));
            "normal" === e && b in Ya && (e = Ya[b]);
            return "" === c || c ? (a = parseFloat(e), !0 === c || g.isNumeric(a) ? a || 0 : e) : e
        }
    });
    g.each(["height", "width"], function (a, b) {
        g.cssHooks[b] = {
            get: function (a, c, d) {
                if (c)return 0 === a.offsetWidth && Db.test(g.css(a, "display")) ? g.swap(a, Fb, function () {
                    return P(a, b, d)
                }) : P(a, b, d)
            }, set: function (a, c,
                              d) {
                var e = d && wa(a);
                return J(a, c, d ? D(a, b, d, "border-box" === g.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    });
    g.cssHooks.marginRight = y(Q.reliableMarginRight, function (a, b) {
        if (b)return g.swap(a, {display: "inline-block"}, A, [a, "marginRight"])
    });
    g.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        g.cssHooks[a + b] = {
            expand: function (c) {
                var d = 0, e = {};
                for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + ha[d] + b] = c[d] || c[d - 2] || c[0];
                return e
            }
        };
        Oa.test(a) || (g.cssHooks[a + b].set = J)
    });
    g.fn.extend({
        css: function (a, b) {
            return fa(this,
                function (a, b, c) {
                    var d, e = {}, h = 0;
                    if (g.isArray(b)) {
                        c = wa(a);
                        for (d = b.length; h < d; h++)e[b[h]] = g.css(a, b[h], !1, c);
                        return e
                    }
                    return void 0 !== c ? g.style(a, b, c) : g.css(a, b)
                }, a, b, 1 < arguments.length)
        }, show: function () {
            return G(this, !0)
        }, hide: function () {
            return G(this)
        }, toggle: function (a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ma(this) ? g(this).show() : g(this).hide()
            })
        }
    });
    g.Tween = w;
    w.prototype = {
        constructor: w, init: function (a, b, c, d, e, h) {
            this.elem = a;
            this.prop = c;
            this.easing = e || "swing";
            this.options =
                b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = h || (g.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = w.propHooks[this.prop];
            return a && a.get ? a.get(this) : w.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = w.propHooks[this.prop];
            this.pos = this.options.duration ? b = g.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
            this.now = (this.end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : w.propHooks._default.set(this);
            return this
        }
    };
    w.prototype.init.prototype = w.prototype;
    w.propHooks = {
        _default: {
            get: function (a) {
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = g.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
            }, set: function (a) {
                if (g.fx.step[a.prop])g.fx.step[a.prop](a); else a.elem.style && (null != a.elem.style[g.cssProps[a.prop]] || g.cssHooks[a.prop]) ? g.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    w.propHooks.scrollTop = w.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode &&
            (a.elem[a.prop] = a.now)
        }
    };
    g.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    };
    g.fx = w.prototype.init;
    g.fx.step = {};
    var ia, Ba, Gb = /^(?:toggle|show|hide)$/, Za = new RegExp("^(?:([+-])=|)(" + qa + ")([a-z%]*)$", "i"), Hb = /queueHooks$/, xa = [function (a, b, c) {
        var d, e, h, f, n, q = this, v = {}, k = a.style, t = a.nodeType && ma(a), r = F.get(a, "fxshow");
        c.queue || (f = g._queueHooks(a, "fx"), null == f.unqueued && (f.unqueued = 0, n = f.empty.fire, f.empty.fire = function () {
            f.unqueued || n()
        }), f.unqueued++, q.always(function () {
            q.always(function () {
                f.unqueued--;
                g.queue(a, "fx").length || f.empty.fire()
            })
        }));
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [k.overflow, k.overflowX, k.overflowY], e = g.css(a, "display"), "none" === e && (e = N(a.nodeName)), "inline" === e && "none" === g.css(a, "float") && (k.display = "inline-block"));
        c.overflow && (k.overflow = "hidden", q.always(function () {
            k.overflow = c.overflow[0];
            k.overflowX = c.overflow[1];
            k.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], Gb.exec(e)) {
            delete b[d];
            h = h || "toggle" === e;
            if (e === (t ? "hide" : "show"))if ("show" === e && r && void 0 !==
                r[d])t = !0; else continue;
            v[d] = r && r[d] || g.style(a, d)
        }
        if (!g.isEmptyObject(v))for (d in r ? "hidden"in r && (t = r.hidden) : r = F.access(a, "fxshow", {}), h && (r.hidden = !t), t ? g(a).show() : q.done(function () {
            g(a).hide()
        }), q.done(function () {
            var b;
            F.remove(a, "fxshow");
            for (b in v)g.style(a, b, v[b])
        }), v)b = K(t ? r[d] : 0, d, q), d in r || (r[d] = b.start, t && (b.end = b.start, b.start = "width" === d || "height" === d ? 1 : 0))
    }], ja = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Za.exec(b), h = e && e[3] || (g.cssNumber[a] ? "" : "px"), f = (g.cssNumber[a] ||
                "px" !== h && +d) && Za.exec(g.css(c.elem, a)), n = 1, q = 20;
            if (f && f[3] !== h) {
                h = h || f[3];
                e = e || [];
                f = +d || 1;
                do n = n || ".5", f /= n, g.style(c.elem, a, f + h); while (n !== (n = c.cur() / d) && 1 !== n && --q)
            }
            e && (f = c.start = +f || +d || 0, c.unit = h, c.end = e[1] ? f + (e[1] + 1) * e[2] : +e[2]);
            return c
        }]
    };
    g.Animation = g.extend(I, {
        tweener: function (a, b) {
            g.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; d < e; d++)c = a[d], ja[c] = ja[c] || [], ja[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? xa.unshift(a) : xa.push(a)
        }
    });
    g.speed = function (a, b, c) {
        var d = a && "object" === typeof a ? g.extend({}, a) : {
            complete: c || !c && b || g.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !g.isFunction(b) && b
        };
        d.duration = g.fx.off ? 0 : "number" === typeof d.duration ? d.duration : d.duration in g.fx.speeds ? g.fx.speeds[d.duration] : g.fx.speeds._default;
        if (null == d.queue || !0 === d.queue)d.queue = "fx";
        d.old = d.complete;
        d.complete = function () {
            g.isFunction(d.old) && d.old.call(this);
            d.queue && g.dequeue(this, d.queue)
        };
        return d
    };
    g.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(ma).css("opacity", 0).show().end().animate({opacity: b},
                a, c, d)
        }, animate: function (a, b, c, d) {
            var e = g.isEmptyObject(a), h = g.speed(b, c, d);
            b = function () {
                var b = I(this, g.extend({}, a), h);
                (e || F.get(this, "finish")) && b.stop(!0)
            };
            b.finish = b;
            return e || !1 === h.queue ? this.each(b) : this.queue(h.queue, b)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            "string" !== typeof a && (c = b, b = a, a = void 0);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", h = g.timers, f = F.get(this);
                if (e)f[e] && f[e].stop && d(f[e]); else for (e in f)f[e] &&
                f[e].stop && Hb.test(e) && d(f[e]);
                for (e = h.length; e--;)h[e].elem !== this || null != a && h[e].queue !== a || (h[e].anim.stop(c), b = !1, h.splice(e, 1));
                !b && c || g.dequeue(this, a)
            })
        }, finish: function (a) {
            !1 !== a && (a = a || "fx");
            return this.each(function () {
                var b, c = F.get(this), d = c[a + "queue"];
                b = c[a + "queueHooks"];
                var e = g.timers, h = d ? d.length : 0;
                c.finish = !0;
                g.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = e.length; b--;)e[b].elem === this && e[b].queue === a && (e[b].anim.stop(!0), e.splice(b, 1));
                for (b = 0; b < h; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    });
    g.each(["toggle", "show", "hide"], function (a, b) {
        var c = g.fn[b];
        g.fn[b] = function (a, d, e) {
            return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(H(b, !0), a, d, e)
        }
    });
    g.each({
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        g.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    });
    g.timers = [];
    g.fx.tick = function () {
        var a, b = 0, c = g.timers;
        for (ia = g.now(); b < c.length; b++)a =
            c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || g.fx.stop();
        ia = void 0
    };
    g.fx.timer = function (a) {
        g.timers.push(a);
        a() ? g.fx.start() : g.timers.pop()
    };
    g.fx.interval = 13;
    g.fx.start = function () {
        Ba || (Ba = setInterval(g.fx.tick, g.fx.interval))
    };
    g.fx.stop = function () {
        clearInterval(Ba);
        Ba = null
    };
    g.fx.speeds = {slow: 600, fast: 200, _default: 400};
    g.fn.delay = function (a, b) {
        a = g.fx ? g.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    };
    (function () {
        var a = M.createElement("input"),
            b = M.createElement("select"), c = b.appendChild(M.createElement("option"));
        a.type = "checkbox";
        Q.checkOn = "" !== a.value;
        Q.optSelected = c.selected;
        b.disabled = !0;
        Q.optDisabled = !c.disabled;
        a = M.createElement("input");
        a.value = "t";
        a.type = "radio";
        Q.radioValue = "t" === a.value
    })();
    var $a, ga = g.expr.attrHandle;
    g.fn.extend({
        attr: function (a, b) {
            return fa(this, g.attr, a, b, 1 < arguments.length)
        }, removeAttr: function (a) {
            return this.each(function () {
                g.removeAttr(this, a)
            })
        }
    });
    g.extend({
        attr: function (a, b, c) {
            var d, e, h = a.nodeType;
            if (a &&
                3 !== h && 8 !== h && 2 !== h) {
                if ("undefined" === typeof a.getAttribute)return g.prop(a, b, c);
                1 === h && g.isXMLDoc(a) || (b = b.toLowerCase(), d = g.attrHooks[b] || (g.expr.match.bool.test(b) ? $a : void 0));
                if (void 0 !== c)if (null === c)g.removeAttr(a, b); else {
                    if (d && "set"in d && void 0 !== (e = d.set(a, c, b)))return e;
                    a.setAttribute(b, c + "");
                    return c
                } else {
                    if (d && "get"in d && null !== (e = d.get(a, b)))return e;
                    e = g.find.attr(a, b);
                    return null == e ? void 0 : e
                }
            }
        }, removeAttr: function (a, b) {
            var c, d, e = 0, h = b && b.match(ca);
            if (h && 1 === a.nodeType)for (; c = h[e++];)d =
                g.propFix[c] || c, g.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!Q.radioValue && "radio" === b && g.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        c && (a.value = c);
                        return b
                    }
                }
            }
        }
    });
    $a = {
        set: function (a, b, c) {
            !1 === b ? g.removeAttr(a, c) : a.setAttribute(c, c);
            return c
        }
    };
    g.each(g.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ga[b] || g.find.attr;
        ga[b] = function (a, b, d) {
            var e, h;
            d || (h = ga[b], ga[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ga[b] = h);
            return e
        }
    });
    var Ib = /^(?:input|select|textarea|button)$/i;
    g.fn.extend({
        prop: function (a, b) {
            return fa(this, g.prop, a, b, 1 < arguments.length)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[g.propFix[a] || a]
            })
        }
    });
    g.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, h;
            h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) {
                if (h = 1 !== h || !g.isXMLDoc(a))b = g.propFix[b] || b, e = g.propHooks[b];
                return void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ?
                    d : a[b]
            }
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || Ib.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    });
    Q.optSelected || (g.propHooks.selected = {
        get: function (a) {
            (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    });
    g.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        g.propFix[this.toLowerCase()] = this
    });
    var Ia = /[\t\r\n\f]/g;
    g.fn.extend({
        addClass: function (a) {
            var b, c, d, e, h;
            b = "string" === typeof a && a;
            var f = 0, n = this.length;
            if (g.isFunction(a))return this.each(function (b) {
                g(this).addClass(a.call(this, b, this.className))
            });
            if (b)for (b = (a || "").match(ca) || []; f < n; f++)if (c = this[f], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ia, " ") : " ")) {
                for (h = 0; e = b[h++];)0 > d.indexOf(" " + e + " ") && (d += e + " ");
                d = g.trim(d);
                c.className !== d && (c.className = d)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, h;
            b = 0 === arguments.length || "string" === typeof a && a;
            var f = 0, n = this.length;
            if (g.isFunction(a))return this.each(function (b) {
                g(this).removeClass(a.call(this,
                    b, this.className))
            });
            if (b)for (b = (a || "").match(ca) || []; f < n; f++)if (c = this[f], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ia, " ") : "")) {
                for (h = 0; e = b[h++];)for (; 0 <= d.indexOf(" " + e + " ");)d = d.replace(" " + e + " ", " ");
                d = a ? g.trim(d) : "";
                c.className !== d && (c.className = d)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : g.isFunction(a) ? this.each(function (c) {
                g(this).toggleClass(a.call(this, c, this.className, b), b)
            }) :
                this.each(function () {
                    if ("string" === c)for (var b, d = 0, e = g(this), h = a.match(ca) || []; b = h[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else if ("undefined" === c || "boolean" === c)this.className && F.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : F.get(this, "__className__") || ""
                })
        }, hasClass: function (a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; b < c; b++)if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Ia, " ").indexOf(a))return !0;
            return !1
        }
    });
    var Jb = /\r/g;
    g.fn.extend({
        val: function (a) {
            var b,
                c, d, e = this[0];
            if (arguments.length)return d = g.isFunction(a), this.each(function (c) {
                1 === this.nodeType && (c = d ? a.call(this, c, g(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : g.isArray(c) && (c = g.map(c, function (a) {
                    return null == a ? "" : a + ""
                })), b = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, c, "value") || (this.value = c))
            });
            if (e) {
                if ((b = g.valHooks[e.type] || g.valHooks[e.nodeName.toLowerCase()]) && "get"in b && void 0 !== (c = b.get(e, "value")))return c;
                c = e.value;
                return "string" === typeof c ? c.replace(Jb, "") : null == c ? "" : c
            }
        }
    });
    g.extend({
        valHooks: {
            select: {
                get: function (a) {
                    for (var b, c = a.options, d = a.selectedIndex, e = (a = "select-one" === a.type || 0 > d) ? null : [], h = a ? d + 1 : c.length, f = 0 > d ? h : a ? d : 0; f < h; f++)if (b = c[f], !(!b.selected && f !== d || (Q.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && g.nodeName(b.parentNode, "optgroup"))) {
                        b = g(b).val();
                        if (a)return b;
                        e.push(b)
                    }
                    return e
                }, set: function (a, b) {
                    for (var c, d, e = a.options, h = g.makeArray(b), f = e.length; f--;)if (d = e[f], d.selected =
                            0 <= g.inArray(g(d).val(), h))c = !0;
                    c || (a.selectedIndex = -1);
                    return h
                }
            }
        }
    });
    g.each(["radio", "checkbox"], function () {
        g.valHooks[this] = {
            set: function (a, b) {
                if (g.isArray(b))return a.checked = 0 <= g.inArray(g(a).val(), b)
            }
        };
        Q.checkOn || (g.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (a, b) {
            g.fn[b] = function (a, c) {
                return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
            }
        });
    g.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Ja = g.now(), Ka = /\?/;
    g.parseJSON = function (a) {
        return JSON.parse(a + "")
    };
    g.parseXML =
        function (a) {
            var b, c;
            if (!a || "string" !== typeof a)return null;
            try {
                c = new DOMParser, b = c.parseFromString(a, "text/xml")
            } catch (d) {
                b = void 0
            }
            b && !b.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + a);
            return b
        };
    var la, Y, Kb = /#.*$/, ab = /([?&])_=[^&]*/, Lb = /^(.*?):[ \t]*([^\r\n]*)$/mg, Mb = /^(?:GET|HEAD)$/, Nb = /^\/\//, bb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, cb = {}, Fa = {}, db = "*/".concat("*");
    try {
        Y = location.href
    } catch (Vb) {
        Y = M.createElement("a"), Y.href = "", Y = Y.href
    }
    la = bb.exec(Y.toLowerCase()) ||
        [];
    g.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: Y,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(la[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": db,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {
                "* text": String,
                "text html": !0, "text json": g.parseJSON, "text xml": g.parseXML
            },
            flatOptions: {url: !0, context: !0}
        }, ajaxSetup: function (a, b) {
            return b ? aa(aa(a, g.ajaxSettings), b) : aa(g.ajaxSettings, a)
        }, ajaxPrefilter: S(cb), ajaxTransport: S(Fa), ajax: function (a, b) {
            function c(a, b, f, l) {
                var q, k, p, A;
                A = b;
                if (2 !== y) {
                    y = 2;
                    n && clearTimeout(n);
                    d = void 0;
                    h = l || "";
                    s.readyState = 0 < a ? 4 : 0;
                    l = 200 <= a && 300 > a || 304 === a;
                    if (f) {
                        p = r;
                        for (var D = s, N, C, w, E, u = p.contents, P = p.dataTypes; "*" === P[0];)P.shift(), void 0 === N && (N = p.mimeType || D.getResponseHeader("Content-Type"));
                        if (N)for (C in u)if (u[C] && u[C].test(N)) {
                            P.unshift(C);
                            break
                        }
                        if (P[0]in f)w = P[0]; else {
                            for (C in f) {
                                if (!P[0] || p.converters[C + " " + P[0]]) {
                                    w = C;
                                    break
                                }
                                E || (E = C)
                            }
                            w = w || E
                        }
                        w ? (w !== P[0] && P.unshift(w), p = f[w]) : p = void 0
                    }
                    a:{
                        f = r;
                        N = p;
                        C = s;
                        w = l;
                        var x, G, z, D = {}, u = f.dataTypes.slice();
                        if (u[1])for (G in f.converters)D[G.toLowerCase()] = f.converters[G];
                        for (E = u.shift(); E;)if (f.responseFields[E] && (C[f.responseFields[E]] = N), !z && w && f.dataFilter && (N = f.dataFilter(N, f.dataType)), z = E, E = u.shift())if ("*" === E)E = z; else if ("*" !== z && z !== E) {
                            G = D[z +
                                " " + E] || D["* " + E];
                            if (!G)for (x in D)if (p = x.split(" "), p[1] === E && (G = D[z + " " + p[0]] || D["* " + p[0]])) {
                                !0 === G ? G = D[x] : !0 !== D[x] && (E = p[0], u.unshift(p[1]));
                                break
                            }
                            if (!0 !== G)if (G && f["throws"])N = G(N); else try {
                                N = G(N)
                            } catch (aa) {
                                p = {state: "parsererror", error: G ? aa : "No conversion from " + z + " to " + E};
                                break a
                            }
                        }
                        p = {state: "success", data: N}
                    }
                    if (l)r.ifModified && ((A = s.getResponseHeader("Last-Modified")) && (g.lastModified[e] = A), (A = s.getResponseHeader("etag")) && (g.etag[e] = A)), 204 === a || "HEAD" === r.type ? A = "nocontent" : 304 === a ? A = "notmodified" :
                        (A = p.state, q = p.data, k = p.error, l = !k); else if (k = A, a || !A)A = "error", 0 > a && (a = 0);
                    s.status = a;
                    s.statusText = (b || A) + "";
                    l ? L.resolveWith(t, [q, A, s]) : L.rejectWith(t, [s, A, k]);
                    s.statusCode(J);
                    J = void 0;
                    v && m.trigger(l ? "ajaxSuccess" : "ajaxError", [s, r, l ? q : k]);
                    B.fireWith(t, [s, A]);
                    v && (m.trigger("ajaxComplete", [s, r]), --g.active || g.event.trigger("ajaxStop"))
                }
            }

            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var d, e, h, f, n, q, v, k, r = g.ajaxSetup({}, b), t = r.context || r, m = r.context && (t.nodeType || t.jquery) ? g(t) : g.event, L = g.Deferred(), B =
                g.Callbacks("once memory"), J = r.statusCode || {}, p = {}, A = {}, y = 0, D = "canceled", s = {
                readyState: 0, getResponseHeader: function (a) {
                    var b;
                    if (2 === y) {
                        if (!f)for (f = {}; b = Lb.exec(h);)f[b[1].toLowerCase()] = b[2];
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                }, getAllResponseHeaders: function () {
                    return 2 === y ? h : null
                }, setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    y || (a = A[c] = A[c] || a, p[a] = b);
                    return this
                }, overrideMimeType: function (a) {
                    y || (r.mimeType = a);
                    return this
                }, statusCode: function (a) {
                    var b;
                    if (a)if (2 > y)for (b in a)J[b] = [J[b],
                        a[b]]; else s.always(a[s.status]);
                    return this
                }, abort: function (a) {
                    a = a || D;
                    d && d.abort(a);
                    c(0, a);
                    return this
                }
            };
            L.promise(s).complete = B.add;
            s.success = s.done;
            s.error = s.fail;
            r.url = ((a || r.url || Y) + "").replace(Kb, "").replace(Nb, la[1] + "//");
            r.type = b.method || b.type || r.method || r.type;
            r.dataTypes = g.trim(r.dataType || "*").toLowerCase().match(ca) || [""];
            null == r.crossDomain && (q = bb.exec(r.url.toLowerCase()), r.crossDomain = !(!q || q[1] === la[1] && q[2] === la[2] && (q[3] || ("http:" === q[1] ? "80" : "443")) === (la[3] || ("http:" === la[1] ?
                "80" : "443"))));
            r.data && r.processData && "string" !== typeof r.data && (r.data = g.param(r.data, r.traditional));
            da(cb, r, b, s);
            if (2 === y)return s;
            (v = r.global) && 0 === g.active++ && g.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !Mb.test(r.type);
            e = r.url;
            r.hasContent || (r.data && (e = r.url += (Ka.test(e) ? "&" : "?") + r.data, delete r.data), !1 === r.cache && (r.url = ab.test(e) ? e.replace(ab, "$1_=" + Ja++) : e + (Ka.test(e) ? "&" : "?") + "_=" + Ja++));
            r.ifModified && (g.lastModified[e] && s.setRequestHeader("If-Modified-Since",
                g.lastModified[e]), g.etag[e] && s.setRequestHeader("If-None-Match", g.etag[e]));
            (r.data && r.hasContent && !1 !== r.contentType || b.contentType) && s.setRequestHeader("Content-Type", r.contentType);
            s.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + db + "; q=0.01" : "") : r.accepts["*"]);
            for (k in r.headers)s.setRequestHeader(k, r.headers[k]);
            if (r.beforeSend && (!1 === r.beforeSend.call(t, s, r) || 2 === y))return s.abort();
            D = "abort";
            for (k in{
                success: 1, error: 1,
                complete: 1
            })s[k](r[k]);
            if (d = da(Fa, r, b, s)) {
                s.readyState = 1;
                v && m.trigger("ajaxSend", [s, r]);
                r.async && 0 < r.timeout && (n = setTimeout(function () {
                    s.abort("timeout")
                }, r.timeout));
                try {
                    y = 1, d.send(p, c)
                } catch (N) {
                    if (2 > y)c(-1, N); else throw N;
                }
            } else c(-1, "No Transport");
            return s
        }, getJSON: function (a, b, c) {
            return g.get(a, b, c, "json")
        }, getScript: function (a, b) {
            return g.get(a, void 0, b, "script")
        }
    });
    g.each(["get", "post"], function (a, b) {
        g[b] = function (a, c, d, e) {
            g.isFunction(c) && (e = e || d, d = c, c = void 0);
            return g.ajax({
                url: a, type: b,
                dataType: e, data: c, success: d
            })
        }
    });
    g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        g.fn[b] = function (a) {
            return this.on(b, a)
        }
    });
    g._evalUrl = function (a) {
        return g.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    };
    g.fn.extend({
        wrapAll: function (a) {
            var b;
            if (g.isFunction(a))return this.each(function (b) {
                g(this).wrapAll(a.call(this, b))
            });
            this[0] && (b = g(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a =
                    this; a.firstElementChild;)a = a.firstElementChild;
                return a
            }).append(this));
            return this
        }, wrapInner: function (a) {
            return g.isFunction(a) ? this.each(function (b) {
                g(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = g(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = g.isFunction(a);
            return this.each(function (c) {
                g(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    g.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    };
    g.expr.filters.visible = function (a) {
        return !g.expr.filters.hidden(a)
    };
    var Ob = /%20/g, nb = /\[\]$/, eb = /\r?\n/g, Pb = /^(?:submit|button|image|reset|file)$/i, Qb = /^(?:input|select|textarea|keygen)/i;
    g.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = g.isFunction(b) ? b() : null == b ? "" : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        void 0 === b && (b = g.ajaxSettings && g.ajaxSettings.traditional);
        if (g.isArray(a) || a.jquery && !g.isPlainObject(a))g.each(a,
            function () {
                e(this.name, this.value)
            }); else for (c in a)ba(c, a[c], b, e);
        return d.join("&").replace(Ob, "+")
    };
    g.fn.extend({
        serialize: function () {
            return g.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = g.prop(this, "elements");
                return a ? g.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !g(this).is(":disabled") && Qb.test(this.nodeName) && !Pb.test(a) && (this.checked || !Sa.test(a))
            }).map(function (a, b) {
                var c = g(this).val();
                return null == c ? null : g.isArray(c) ?
                    g.map(c, function (a) {
                        return {name: b.name, value: a.replace(eb, "\r\n")}
                    }) : {name: b.name, value: c.replace(eb, "\r\n")}
            }).get()
        }
    });
    g.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Rb = 0, Da = {}, Sb = {0: 200, 1223: 204}, ta = g.ajaxSettings.xhr();
    if (d.ActiveXObject)g(d).on("unload", function () {
        for (var a in Da)Da[a]()
    });
    Q.cors = !!ta && "withCredentials"in ta;
    Q.ajax = ta = !!ta;
    g.ajaxTransport(function (a) {
        var b;
        if (Q.cors || ta && !a.crossDomain)return {
            send: function (c, d) {
                var e, h = a.xhr(), f = ++Rb;
                h.open(a.type,
                    a.url, a.async, a.username, a.password);
                if (a.xhrFields)for (e in a.xhrFields)h[e] = a.xhrFields[e];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType);
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)h.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Da[f], b = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? d(h.status, h.statusText) : d(Sb[h.status] || h.status, h.statusText, "string" === typeof h.responseText ? {text: h.responseText} : void 0,
                            h.getAllResponseHeaders()))
                    }
                };
                h.onload = b();
                h.onerror = b("error");
                b = Da[f] = b("abort");
                h.send(a.hasContent && a.data || null)
            }, abort: function () {
                b && b()
            }
        }
    });
    g.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                g.globalEval(a);
                return a
            }
        }
    });
    g.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    g.ajaxTransport("script",
        function (a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function (d, e) {
                        b = g("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function (a) {
                            b.remove();
                            c = null;
                            a && e("error" === a.type ? 404 : 200, a.type)
                        });
                        M.head.appendChild(b[0])
                    }, abort: function () {
                        c && c()
                    }
                }
            }
        });
    var fb = [], La = /(=)\?(?=&|$)|\?\?/;
    g.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = fb.pop() || g.expando + "_" + Ja++;
            this[a] = !0;
            return a
        }
    });
    g.ajaxPrefilter("json jsonp", function (a, b, c) {
        var e, h, f, n = !1 !== a.jsonp && (La.test(a.url) ?
                "url" : "string" === typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && La.test(a.data) && "data");
        if (n || "jsonp" === a.dataTypes[0])return e = a.jsonpCallback = g.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, n ? a[n] = a[n].replace(La, "$1" + e) : !1 !== a.jsonp && (a.url += (Ka.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function () {
            f || g.error(e + " was not called");
            return f[0]
        }, a.dataTypes[0] = "json", h = d[e], d[e] = function () {
            f = arguments
        }, c.always(function () {
            d[e] =
                h;
            a[e] && (a.jsonpCallback = b.jsonpCallback, fb.push(e));
            f && g.isFunction(h) && h(f[0]);
            f = h = void 0
        }), "script"
    });
    g.parseHTML = function (a, b, c) {
        if (!a || "string" !== typeof a)return null;
        "boolean" === typeof b && (c = b, b = !1);
        b = b || M;
        var d = Ra.exec(a);
        c = !c && [];
        if (d)return [b.createElement(d[1])];
        d = g.buildFragment([a], b, c);
        c && c.length && g(c).remove();
        return g.merge([], d.childNodes)
    };
    var gb = g.fn.load;
    g.fn.load = function (a, b, c) {
        if ("string" !== typeof a && gb)return gb.apply(this, arguments);
        var d, e, h, f = this, n = a.indexOf(" ");
        0 <= n &&
        (d = a.slice(n), a = a.slice(0, n));
        g.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (e = "POST");
        0 < f.length && g.ajax({url: a, type: e, dataType: "html", data: b}).done(function (a) {
            h = arguments;
            f.html(d ? g("<div>").append(g.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                f.each(c, h || [a.responseText, b, a])
            });
        return this
    };
    g.expr.filters.animated = function (a) {
        return g.grep(g.timers, function (b) {
            return a === b.elem
        }).length
    };
    var hb = d.document.documentElement;
    g.offset = {
        setOffset: function (a, b, c) {
            var d, e, h, f = g.css(a,
                "position"), n = g(a), q = {};
            "static" === f && (a.style.position = "relative");
            h = n.offset();
            e = g.css(a, "top");
            d = g.css(a, "left");
            ("absolute" === f || "fixed" === f) && -1 < (e + d).indexOf("auto") ? (d = n.position(), e = d.top, d = d.left) : (e = parseFloat(e) || 0, d = parseFloat(d) || 0);
            g.isFunction(b) && (b = b.call(a, c, h));
            null != b.top && (q.top = b.top - h.top + e);
            null != b.left && (q.left = b.left - h.left + d);
            "using"in b ? b.using.call(a, q) : n.css(q)
        }
    };
    g.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                g.offset.setOffset(this,
                    a, b)
            });
            var b, c;
            c = this[0];
            var d = {top: 0, left: 0}, e = c && c.ownerDocument;
            if (e) {
                b = e.documentElement;
                if (!g.contains(b, c))return d;
                "undefined" !== typeof c.getBoundingClientRect && (d = c.getBoundingClientRect());
                c = X(e);
                return {top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft}
            }
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                "fixed" === g.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), g.nodeName(a[0], "html") || (d = a.offset()), d.top +=
                    g.css(a[0], "borderTopWidth", !0), d.left += g.css(a[0], "borderLeftWidth", !0));
                return {
                    top: b.top - d.top - g.css(c, "marginTop", !0),
                    left: b.left - d.left - g.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || hb; a && !g.nodeName(a, "html") && "static" === g.css(a, "position");)a = a.offsetParent;
                return a || hb
            })
        }
    });
    g.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = "pageYOffset" === b;
        g.fn[a] = function (e) {
            return fa(this, function (a, e, h) {
                var f = X(a);
                if (void 0 === h)return f ? f[b] : a[e];
                f ? f.scrollTo(c ? d.pageXOffset : h, c ? h : d.pageYOffset) : a[e] = h
            }, a, e, arguments.length, null)
        }
    });
    g.each(["top", "left"], function (a, b) {
        g.cssHooks[b] = y(Q.pixelPosition, function (a, c) {
            if (c)return c = A(a, b), Ea.test(c) ? g(a).position()[b] + "px" : c
        })
    });
    g.each({Height: "height", Width: "width"}, function (a, b) {
        g.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            g.fn[d] = function (d, e) {
                var h = arguments.length && (c || "boolean" !== typeof d), f = c || (!0 === d || !0 === e ? "margin" : "border");
                return fa(this,
                    function (b, c, d) {
                        return g.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === d ? g.css(b, c, f) : g.style(b, c, d, f)
                    }, b, h ? d : void 0, h, null)
            }
        })
    });
    g.fn.size = function () {
        return this.length
    };
    g.fn.andSelf = g.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function () {
        return g
    });
    var Tb = d.jQuery, Ub = d.$;
    g.noConflict = function (a) {
        d.$ === g && (d.$ = Ub);
        a && d.jQuery === g &&
        (d.jQuery = Tb);
        return g
    };
    "undefined" === typeof c && (d.jQuery = d.$ = g);
    return g
});
yii = function (d) {
    function c() {
        d(document).ajaxComplete(function (a, b, c) {
            if (a = b.getResponseHeader("X-Redirect"))window.location = a
        })
    }

    function b() {
        d.ajaxPrefilter(function (a, b, c) {
            !a.crossDomain && f.getCsrfParam() && c.setRequestHeader("X-CSRF-Token", f.getCsrfToken())
        })
    }

    function a() {
        var a = d(document);
        a.on("click.yii", f.clickableSelector, function (a) {
            var b = d(this);
            if (f.allowAction(b))return f.handleAction(b);
            a.stopImmediatePropagation();
            return !1
        });
        a.on("change.yii", f.changeableSelector, function (a) {
            var b = d(this);
            if (f.allowAction(b))return f.handleAction(b);
            a.stopImmediatePropagation();
            return !1
        })
    }

    function e() {
        var a = location.protocol + "//" + location.host, b = d("script[src]").map(function () {
            return "/" === this.src.charAt(0) ? a + this.src : this.src
        }).toArray();
        d.ajaxPrefilter("script", function (c, e, x) {
            "jsonp" != c.dataType && (c = "/" === c.url.charAt(0) ? a + c.url : c.url, -1 === d.inArray(c, b) ? b.push(c) : -1 === d.inArray(c, d.map(f.reloadableScripts, function (b) {
                return "/" === b.charAt(0) ? a + b : b
            })) && x.abort())
        })
    }

    var f = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
        changeableSelector: "select, input, textarea",
        getCsrfParam: function () {
            return d("meta[name=csrf-param]").prop("content")
        },
        getCsrfToken: function () {
            return d("meta[name=csrf-token]").prop("content")
        },
        confirm: function (a) {
            return confirm(a)
        },
        allowAction: function (a) {
            a = a.data("confirm");
            return void 0 === a || f.confirm(a)
        },
        handleAction: function (a) {
            var b = a.data("method");
            if (void 0 === b)return !0;
            var c = a.closest("form"), e = a.prop("href"), x = !c.length || e;
            x && (e && e.match(/(^\/|:\/\/)/) || (e = window.location.href), c = d('<form method="' +
                b + '" action="' + e + '"></form>'), (e = a.prop("target")) && c.attr("target", e), b.match(/(get|post)/i) || (c.append('<input name="_method" value="' + b + '" type="hidden">'), b = "POST"), b.match(/(get|head|options)/i) || (e = f.getCsrfParam()) && c.append('<input name="' + e + '" value="' + f.getCsrfToken() + '" type="hidden">'), c.hide().appendTo("body"));
            if (e = c.data("yiiActiveForm"))e.submitObject = a;
            a = c.prop("method");
            c.prop("method", b);
            c.trigger("submit");
            c.prop("method", a);
            x && c.remove();
            return !1
        },
        getQueryParams: function (a) {
            var b =
                a.indexOf("?");
            if (0 > b)return {};
            a = a.substring(b + 1).split("&");
            for (var b = 0, c = {}; b < a.length; b++)a[b] = a[b].split("="), c[decodeURIComponent(a[b][0])] = decodeURIComponent(a[b][1]);
            return c
        },
        initModule: function (a) {
            if (void 0 === a.isActive || a.isActive)d.isFunction(a.init) && a.init(), d.each(a, function () {
                d.isPlainObject(this) && f.initModule(this)
            })
        },
        init: function () {
            b();
            c();
            e();
            a()
        }
    };
    return f
}(jQuery);
jQuery(document).ready(function () {
    yii.initModule(yii)
});
(function (d) {
    function c(a, c) {
        this.config = d.extend({}, b, c);
        this.element = a;
        this.steps = a.find("fieldset");
        this.config.showLegend || this.element.addClass("sf-hide-legend");
        this.btnFinishTmp = this.config.finishBtn;
        this.btnPrevTmp = this.config.prevBtn;
        this.btnNextTmp = this.config.nextBtn;
        this.viewPort;
        this.navWrap;
        this.stepOffset = this.config.stepOffset;
        this.config.startStep >= this.steps.length && (this.config.startStep = this.steps.length - 1);
        this.stepActive = this.config.startStep;
        this.init();
        a.trigger("sf-loaded");
        return this
    }

    var b = {
        duration: 500,
        timingFunction: "swing",
        linkNav: !0,
        showNav: !0,
        showNavNumbers: !0,
        showButtons: !0,
        showLegend: !0,
        nextBtn: d('<a class="next-btn sf-right sf-btn" href="#">NEXT</a>'),
        prevBtn: d('<a class="prev-btn sf-left sf-btn" href="#">PREV</a>'),
        finishBtn: d('<input class="finish-btn sf-right sf-btn" type="submit" value="FINISH"/>'),
        onNext: function (a, b) {
        },
        onPrev: function (a, b) {
        },
        onFinish: function (a, b) {
        },
        onSlideChanged: function (a, b, c) {
        },
        startStep: 0,
        stepOffset: 10,
        height: "first",
        theme: "sea",
        markPrevSteps: !1
    };
    c.prototype.init = function () {
        this.element.append(d("<div>").addClass("sf-viewport"));
        this.viewPort = d(".sf-viewport", this.element);
        this.element.wrap(d("<div>").addClass("sf-wizard").attr("id", this.element.attr("id") + "-box"));
        this.wizard = this.element.parent();
        this.wizard.parent().addClass("sf-" + this.config.theme);
        this.config.showNavNumbers || this.wizard.addClass("sf-nonumbers");
        d(this.viewPort).append(d("<div>").addClass("sf-fieldwrap clearfix"));
        this.fieldWrap = d(".sf-fieldwrap", this.element);
        this.element.append(d("<div>").addClass("sf-controls clearfix"));
        this.controls = d(".sf-controls", this.element);
        this.config.showButtons || this.controls.addClass("sf-hide-buttons");
        var a = this;
        !1 !== this.config.showNav && this.initNav();
        this.steps.each(function (b) {
            var c = d("<div>").addClass("sf-step sf-step-" + b);
            b == a.config.startStep ? c.addClass("sf-step-active") : c.addClass("sf-step-no-active");
            d(this).wrap(c).parent().appendTo(a.fieldWrap);
            d(this).append(d("<div>").addClass("sf-" + b));
            b == a.config.startStep &&
            (a.initBtnFinish(a.config.startStep), a.initBtnNext(a.config.startStep), a.initBtnPrev(a.config.startStep), 0 == a.config.startStep && a.element.find(".sf-btn-prev").hide(), a.config.startStep != a.steps.length - 1 ? a.element.find(".sf-btn-finish").hide() : a.element.find(".sf-btn-next").hide())
        });
        this.setProportion();
        d(window).resize(function () {
            a.careNav(a.stepActive, a.stepActive);
            a.setProportion()
        });
        a.element.on("click", ".next-btn", function (b, c) {
            var k = !1;
            !1 !== a.config.onNext(a.stepActive, a.wizard) && (k = a.goTo(d(".sf-controls .next-btn",
                a.element).data("step")));
            void 0 !== c && (c.ret = k);
            b.preventDefault()
        });
        a.element.on("click", ".prev-btn", function (b, c) {
            var k = !1;
            !1 !== a.config.onPrev(a.stepActive, a.wizard) && (k = a.goTo(d(".sf-controls .prev-btn", a.element).data("step")));
            void 0 !== c && (c.ret = k);
            b.preventDefault()
        });
        a.element.on("click", ".finish-btn", function (b, c) {
            var d = !1, m = jQuery.Event("sf-finish");
            a.element.trigger(m, [a.stepActive, a.stepActive, a.wizard]);
            !1 === a.config.onFinish(a.stepActive, a.wizard) || m.isDefaultPrevented() ? b.preventDefault() :
                d = !0;
            void 0 !== c && (c.ret = d)
        });
        a.element.on("keydown", ":input", function (b) {
            13 == (b.keyCode || b.which) && (a.next(), b.preventDefault())
        })
    };
    c.prototype.initNav = function () {
        var a = this, b = d("<div>").addClass("sf-nav-wrap clearfix"), c = d("<ul>").addClass("sf-nav clearfix");
        b.append(c);
        "bottom" == a.config.showNav ? this.element.after(b) : this.element.before(b);
        this.navWrap = d(".sf-nav-wrap", a.wizard);
        this.steps.each(function (b) {
            var c = d("<li>").addClass("sf-nav-step sf-nav-step-" + b).data("step", b);
            a.config.markPrevSteps &&
            b < a.config.startStep && c.addClass("sf-nav-prev-step");
            a.config.showNavNumbers ? c.addClass("sf-li-number") : c.addClass("sf-li-nonumber");
            d("<span>").addClass("sf-nav-subtext").html(d(this).find("legend").first().html()).appendTo(c);
            var e = d("<div>").addClass("sf-nav-number").appendTo(c);
            d("<span>").addClass("sf-nav-number-inner").html(b + 1).appendTo(e);
            d("<div>").appendTo(c);
            b == a.config.startStep && c.addClass("sf-active");
            !0 == a.config.linkNav && c.addClass("sf-nav-link");
            "left" == a.config.showNav && (d(".sf-nav-wrap",
                a.wizard).addClass("sf-nav-left"), a.element.addClass("sf-nav-on-left"));
            "right" == a.config.showNav && (d(".sf-nav-wrap", a.wizard).addClass("sf-nav-right"), a.element.addClass("sf-nav-on-right"));
            if ("top" == a.config.showNav || !0 === a.config.showNav)d(".sf-nav-wrap", a.wizard).addClass("sf-nav-top"), a.element.addClass("sf-nav-on-top");
            "bottom" == a.config.showNav && (d(".sf-nav-wrap", a.wizard).addClass("sf-nav-bottom"), a.element.addClass("sf-nav-on-bottom"));
            a.wizard.find(".sf-nav").append(c)
        });
        d(".sf-nav-step.sf-nav-link",
            a.wizard).on("click", function (b) {
                var c = d(this).data("step"), e = a.stepActive;
                if (0 > a.stepActive - c)for (var f = a.stepActive; f < c; f++)if (!1 !== a.config.onNext(f))e = f + 1; else break; else for (f = a.stepActive; f > c; f--)if (!1 !== a.config.onPrev(f))e = f - 1; else break;
                a.goTo(e);
                b.preventDefault()
            });
        this.careNav(this.stepActive, this.stepActive)
    };
    c.prototype.setProportion = function () {
        this.stepWidth = this.viewPort.width();
        var a = this.stepWidth * this.steps.length, b = 0;
        if ("auto" == this.config.height && this.steps.length) {
            this.viewPort.height("auto");
            var c = d(this.steps[this.stepActive]).outerHeight(!0);
            this.viewPort.height(c)
        }
        "first" == this.config.height && this.steps.length && (d(this.steps[0]).height("auto"), b = d(this.steps[0]).height());
        !isNaN(parseInt(this.config.height)) && this.steps.length && (b = this.config.height);
        "tallest" == this.config.height && this.steps.length && this.steps.each(function (a) {
            d(this).height("auto");
            d(this).height() > b && (b = d(this).height())
        });
        var k = this;
        this.steps.each(function (a) {
            d(this).parent().css({
                width: k.stepWidth + "px", "float": "left",
                "margin-right": k.stepOffset + "px"
            });
            b && d(this).height(b)
        });
        this.fieldWrap.width(a + this.stepOffset * this.steps.length + "px");
        this.fieldWrap.css({"margin-left": "-" + (this.stepActive * this.stepWidth + this.stepOffset * this.stepActive) + "px"})
    };
    c.prototype.goTo = function (a) {
        var b = this, c = this.stepActive, k = c - a, m = jQuery.Event("sf-step-before");
        b.element.trigger(m, [c, a, b.wizard]);
        if (m.isDefaultPrevented())return !1;
        b.config.markPrevSteps && d(".sf-nav-step", b.navWrap).each(function (b) {
            d(this).removeClass("sf-nav-prev-step");
            b < a && d(this).addClass("sf-nav-prev-step")
        });
        this.careNav(a, c);
        b.element.find(".sf-step").removeClass("sf-step-no-active").addClass("sf-step-active");
        m = "+=";
        0 > k && (m = "-=");
        k = Math.abs(k);
        this.fieldWrap.animate({"margin-left": m + (k * this.stepWidth + this.stepOffset * k)}, this.config.duration * k, this.config.timingFunction, function () {
            b.element.find(".sf-step").removeClass("sf-step-active").addClass("sf-step-no-active");
            b.element.find(".sf-step-" + a).removeClass("sf-step-no-active").addClass("sf-step-active");
            b.element.trigger("sf-step-after",
                [c, a, b.wizard]);
            b.config.onSlideChanged(c, a, this.wizard)
        });
        this.stepActive = a;
        d(".sf-nav-step", this.wizard).removeClass("sf-active");
        d(".sf-nav-step-" + a, this.wizard).addClass("sf-active");
        "auto" == this.config.height && this.steps.length && (k = d(this.steps[this.stepActive]).outerHeight(!0), this.viewPort.animate({height: k + "px"}, this.config.duration, this.config.timingFunction));
        a + 1 < this.steps.length ? this.btnNext.data("step", a + 1).fadeIn(100) : this.btnNext.fadeOut(0);
        a + 1 >= this.steps.length ? this.btnFinish.data("step",
            a - 1).fadeIn(100) : this.btnFinish.fadeOut(0);
        0 == a ? this.btnPrev.fadeOut(100) : this.btnPrev.data("step", a - 1).fadeIn(100);
        return !0
    };
    c.prototype.careNav = function (a, b) {
        var c = this;
        if (!1 !== c.config.showNav) {
            var k = c.navWrap.width(), m = [];
            if (c.navWrap.hasClass("sf-nav-top") || c.navWrap.hasClass("sf-nav-bottom")) {
                var s = 0, u = 0;
                d(".sf-nav-step", c.navWrap).each(function (b) {
                    m[b] = d(this).outerWidth(!0);
                    u += m[b];
                    b < a && (s += m[b])
                });
                0 <= b - a && (s -= m[a - 1]);
                if (u > k) {
                    var k = u - k, x = a - 1, p = 0;
                    0 > b - a && (x = a + 1, p = -50);
                    s > k && (s = k, p = 0);
                    d(".sf-nav-step-" +
                        x, this.wizard).length ? d(".sf-nav", c.navWrap).animate({left: "-" + (s + p) + "px"}, this.config.duration) : 0 > x ? d(".sf-nav", c.navWrap).animate({left: "0px"}, this.config.duration) : d(".sf-nav", c.navWrap).animate({left: "-" + s + "px"}, this.config.duration)
                }
            } else {
                var q = 0;
                d(".sf-nav-step", c.navWrap).each(function (a) {
                    c.navWrap.css("width", "9999px");
                    a = d(this).css("float", "left").outerWidth(!0);
                    c.navWrap.css("width", "");
                    d(this).css("float", "");
                    q < a && (q = a)
                });
                q += 2;
                k = c.element.closest(".sf-wizard").width() - q;
                c.element.css({
                    width: k +
                    "px", "float": ""
                });
                c.navWrap.hasClass("sf-nav-left") && c.element.css({"margin-left": q + "px"});
                c.navWrap.css("width", q + "px")
            }
        }
    };
    c.prototype.refresh = function () {
        this.careNav(this.stepActive, this.stepActive);
        this.setProportion()
    };
    c.prototype.initBtnNext = function (a) {
        this.btnNext = this.btnNextTmp.clone(!0).addClass("sf-btn-next").data("step", a + 1);
        this.btnNext.appendTo(d(this.controls))
    };
    c.prototype.initBtnPrev = function (a) {
        this.btnPrev = this.btnPrevTmp.clone(!0).addClass("sf-btn-prev").data("step", a - 1);
        this.btnPrev.appendTo(d(this.controls))
    };
    c.prototype.initBtnFinish = function (a) {
        d(".sf-step-" + a).append(" ");
        this.btnFinish = this.btnFinishTmp.clone(!0).addClass("sf-btn-finish").data("step", a - 1);
        this.btnFinish.appendTo(d(this.controls))
    };
    c.prototype.next = function () {
        var a = {ret: !1};
        this.stepActive < this.steps.length - 1 ? d(".sf-controls .next-btn", this.element).trigger("click", [a]) : d(".sf-controls .finish-btn", this.element).trigger("click", [a]);
        return a.ret
    };
    c.prototype.prev = function () {
        var a = {ret: !1};
        d(".sf-controls .prev-btn", this.element).trigger("click",
            [a]);
        return a.ret
    };
    c.prototype.finish = function () {
        var a = {ret: !1};
        d(".sf-controls .finish-btn", this.element).trigger("click", [a]);
        return a.ret
    };
    d.fn.stepFormWizard = function (a) {
        return new c(this.first(), a)
    }
})(jQuery);
$(window).load(function () {
    $(".sf-wizard fieldset").mCustomScrollbar({theme: "dark-3", scrollButtons: {enable: !0}});
    w1.refresh();
    w2.refresh();
    w3.refresh();
    w4.refresh();
    w4_5.refresh();
    w5.refresh();
    w6.refresh();
    w7.refresh()
});
var w0, w1, w2, w3, w4, w5, w6, w7, w8, w9, w4_5, validator, prepare_example = function () {
    w1 = $("#wizard_example_1").stepFormWizard();
    w2 = $("#wizard_example_2").stepFormWizard({showNav: "left", height: "300px"});
    w3 = $("#wizard_example_3").stepFormWizard({
        showNav: "bottom", showNavNumbers: !1, onNext: function (b) {
            alert("Event onNext, step: " + b)
        }, onPrev: function (b) {
            alert("Event onPrev, step: " + b)
        }, onFinish: function (b) {
            alert("Event onFinish")
        }, onSlideChanged: function (b, a) {
            alert("Event onSlideChanged. From slide " + b + " to slide " +
                a)
        }
    });
    w4 = $("#wizard_example_4").stepFormWizard({
        showNav: "right",
        height: "auto",
        nextBtn: $('<a class="next-btn sf-right sf-btn" href="#">FORWARD</a>'),
        prevBtn: $('<a class="prev-btn sf-left sf-btn" href="#">BACK</a>'),
        finishBtn: $('<a class="finish-btn sf-right sf-btn" href="#">DONE</a>'),
        showNavNumbers: !1,
        onFinish: function (b, a) {
            var c = $("form", a).serialize();
            $.getJSON(yii_site_finis_url, c, function (b) {
                a.html(b.html)
            });
            a.html($("#ajax_response").html);
            return !1
        }
    });
    w4_5 = $("#wizard_example_4_5").stepFormWizard({
        showButtons: !1,
        markPrevSteps: !0
    });
    w5 = $("#wizard_example_5").stepFormWizard();
    w6 = $("#wizard_example_6").stepFormWizard({
        onNext: function (b, a) {
            return $("#wizard_example_6").parsley().validate("block" + b)
        }, onFinish: function (b) {
            return $("#wizard_example_6").parsley().validate()
        }
    });
    var d = window.location.hash.match(/^#step-(\d+)/), c = 0;
    null !== d && (c = d[1] - 1);
    w7 = $("#wizard_example_7").stepFormWizard({
        startStep: c, onNext: function (b, a) {
            window.location.hash = "#step-" + (b + 2)
        }, onPrev: function (b, a) {
            window.location.hash = "#step-" + b
        },
        onFinish: function (b) {
            window.location.hash = "#form-sended"
        }
    })
};
$(document).ready(function () {
    prepare_example();
    $("pre code").each(function (c, b) {
        hljs.highlightBlock(b)
    });
    var d = $(location).attr("search").match(/t=([a-z]+)/);
    "undefined" != typeof d && null != d ? ($(".sf-wizard").parent().removeClass("sf-sea").addClass("sf-" + d[1]), $(".bt-" + d[1]).removeClass("btn-default").addClass("btn-info")) : $(".bt-sea").removeClass("btn-default").addClass("btn-info")
});
var hljs = new function () {
    function d(a) {
        return a.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function c(a, b) {
        var c = a && a.exec(b);
        return c && 0 == c.index
    }

    function b(a) {
        return Array.prototype.map.call(a.childNodes, function (a) {
            return 3 == a.nodeType ? B.useBR ? a.nodeValue.replace(/\n/g, "") : a.nodeValue : "br" == a.nodeName.toLowerCase() ? "\n" : b(a)
        }).join("")
    }

    function a(a) {
        a = (a.className + " " + (a.parentNode ? a.parentNode.className : "")).split(/\s+/);
        a = a.map(function (a) {
            return a.replace(/^language-/,
                "")
        });
        return a.filter(function (a) {
            return t(a) || "no-highlight" == a
        })[0]
    }

    function e(a, b) {
        var c = {}, d;
        for (d in a)c[d] = a[d];
        if (b)for (d in b)c[d] = b[d];
        return c
    }

    function f(a) {
        var b = [];
        (function A(a, c) {
            for (var d = a.firstChild; d; d = d.nextSibling)3 == d.nodeType ? c += d.nodeValue.length : "br" == d.nodeName.toLowerCase() ? c += 1 : 1 == d.nodeType && (b.push({
                event: "start",
                offset: c,
                node: d
            }), c = A(d, c), b.push({event: "stop", offset: c, node: d}));
            return c
        })(a, 0);
        return b
    }

    function k(a, b, c) {
        function e() {
            return a.length && b.length ? a[0].offset !=
            b[0].offset ? a[0].offset < b[0].offset ? a : b : "start" == b[0].event ? a : b : a.length ? a : b
        }

        function h(a) {
            k += "<" + a.nodeName.toLowerCase() + Array.prototype.map.call(a.attributes, function (a) {
                    return " " + a.nodeName + '="' + d(a.value) + '"'
                }).join("") + ">"
        }

        function f(a) {
            k += "</" + a.nodeName.toLowerCase() + ">"
        }

        function n(a) {
            ("start" == a.event ? h : f)(a.node)
        }

        for (var q = 0, k = "", t = []; a.length || b.length;) {
            var m = e(), k = k + d(c.substr(q, m[0].offset - q)), q = m[0].offset;
            if (m == a) {
                t.reverse().forEach(f);
                do n(m.splice(0, 1)[0]), m = e(); while (m == a && m.length &&
                m[0].offset == q);
                t.reverse().forEach(h)
            } else"start" == m[0].event ? t.push(m[0].node) : t.pop(), n(m.splice(0, 1)[0])
        }
        return k + d(c.substr(q))
    }

    function m(a) {
        function b(a) {
            return a && a.source || a
        }

        function c(d, e) {
            return RegExp(b(d), "m" + (a.cI ? "i" : "") + (e ? "g" : ""))
        }

        function d(h, f) {
            if (!h.compiled) {
                h.compiled = !0;
                h.k = h.k || h.bK;
                if (h.k) {
                    var n = {}, q = function (b, c) {
                        a.cI && (c = c.toLowerCase());
                        c.split(" ").forEach(function (a) {
                            a = a.split("|");
                            n[a[0]] = [b, a[1] ? Number(a[1]) : 1]
                        })
                    };
                    "string" == typeof h.k ? q("keyword", h.k) : Object.keys(h.k).forEach(function (a) {
                        q(a,
                            h.k[a])
                    });
                    h.k = n
                }
                h.lR = c(h.l || /\b[A-Za-z0-9_]+\b/, !0);
                f && (h.bK && (h.b = h.bK.split(" ").join("|")), h.b || (h.b = /\B|\b/), h.bR = c(h.b), h.e || h.eW || (h.e = /\B|\b/), h.e && (h.eR = c(h.e)), h.tE = b(h.e) || "", h.eW && f.tE && (h.tE += (h.e ? "|" : "") + f.tE));
                h.i && (h.iR = c(h.i));
                void 0 === h.r && (h.r = 1);
                h.c || (h.c = []);
                var k = [];
                h.c.forEach(function (a) {
                    a.v ? a.v.forEach(function (b) {
                        k.push(e(a, b))
                    }) : k.push("self" == a ? h : a)
                });
                h.c = k;
                h.c.forEach(function (a) {
                    d(a, h)
                });
                h.starts && d(h.starts, f);
                var t = h.c.map(function (a) {
                    return a.bK ? "\\.?\\b(" + a.b + ")\\b\\.?" :
                        a.b
                }).concat([h.tE]).concat([h.i]).map(b).filter(Boolean);
                h.t = t.length ? c(t.join("|"), !0) : {
                    exec: function (a) {
                        return null
                    }
                };
                h.continuation = {}
            }
        }

        d(a)
    }

    function s(a, b, e, f) {
        function n(a, b) {
            if (c(a.eR, b))return a;
            if (a.eW)return n(a.parent, b)
        }

        function q(a, b, c, d) {
            d = '<span class="' + (d ? "" : B.classPrefix);
            return d + (a + '">') + b + (c ? "" : "</span>")
        }

        function k() {
            var a;
            if (void 0 !== w.sL)w.sL && !h[w.sL] ? a = d(H) : (a = w.sL ? s(w.sL, H, !0, w.continuation.top) : u(H), 0 < w.r && (K += a.r), "continuous" == w.subLanguageMode && (w.continuation.top = a.top),
                a = q(a.language, a.value, !1, !0)); else if (a = d(H), w.k) {
                var b = "", c = 0;
                w.lR.lastIndex = 0;
                for (var e = w.lR.exec(a); e;) {
                    var b = b + a.substr(c, e.index - c), c = w, f = e, f = x.cI ? f[0].toLowerCase() : f[0];
                    (c = c.k.hasOwnProperty(f) && c.k[f]) ? (K += c[1], b += q(c[0], e[0])) : b += e[0];
                    c = w.lR.lastIndex;
                    e = w.lR.exec(a)
                }
                a = b + a.substr(c)
            }
            return a
        }

        function p(a, b) {
            var c = a.cN ? q(a.cN, "", !0) : "";
            a.rB ? (z += c, H = "") : a.eB ? (z += d(b) + c, H = "") : (z += c, H = b);
            w = Object.create(a, {parent: {value: w}})
        }

        function P(a, b) {
            H += a;
            if (void 0 === b)return z += k(), 0;
            var h;
            a:{
                h = w;
                for (var f =
                    0; f < h.c.length; f++)if (c(h.c[f].bR, b)) {
                    h = h.c[f];
                    break a
                }
                h = void 0
            }
            if (h)return z += k(), p(h, b), h.rB ? 0 : b.length;
            if (h = n(w, b)) {
                f = w;
                f.rE || f.eE || (H += b);
                z += k();
                do w.cN && (z += "</span>"), K += w.r, w = w.parent; while (w != h.parent);
                f.eE && (z += d(b));
                H = "";
                h.starts && p(h.starts, "");
                return f.rE ? 0 : b.length
            }
            if (!e && c(w.iR, b))throw Error('Illegal lexeme "' + b + '" for mode "' + (w.cN || "<unnamed>") + '"');
            H += b;
            return b.length || 1
        }

        var x = t(a);
        if (!x)throw Error('Unknown language: "' + a + '"');
        m(x);
        var w = f || x, z = "";
        for (f = w; f != x; f = f.parent)f.cN &&
        (z = q(f.cN, z, !0));
        var H = "", K = 0;
        try {
            for (var O, I, S = 0; ;) {
                w.t.lastIndex = S;
                O = w.t.exec(b);
                if (!O)break;
                I = P(b.substr(S, O.index - S), O[0]);
                S = O.index + I
            }
            P(b.substr(S));
            for (f = w; f.parent; f = f.parent)f.cN && (z += "</span>");
            return {r: K, value: z, language: a, top: w}
        } catch (da) {
            if (-1 != da.message.indexOf("Illegal"))return {r: 0, value: d(b)};
            throw da;
        }
    }

    function u(a, b) {
        b = b || B.languages || Object.keys(h);
        var c = {r: 0, value: d(a)}, e = c;
        b.forEach(function (b) {
            if (t(b)) {
                var d = s(b, a, !1);
                d.language = b;
                d.r > e.r && (e = d);
                d.r > c.r && (e = c, c = d)
            }
        });
        e.language &&
        (c.second_best = e);
        return c
    }

    function x(a) {
        B.tabReplace && (a = a.replace(/^((<[^>]+>|\t)+)/gm, function (a, b, c, d) {
            return b.replace(/\t/g, B.tabReplace)
        }));
        B.useBR && (a = a.replace(/\n/g, "<br>"));
        return a
    }

    function p(c) {
        var d = b(c), e = a(c);
        if ("no-highlight" != e) {
            var h = e ? s(e, d, !0) : u(d), n = f(c);
            if (n.length) {
                var q = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
                q.innerHTML = h.value;
                h.value = k(n, f(q), d)
            }
            h.value = x(h.value);
            c.innerHTML = h.value;
            c.className += " hljs " + (!e && h.language || "");
            c.result = {
                language: h.language,
                re: h.r
            };
            h.second_best && (c.second_best = {language: h.second_best.language, re: h.second_best.r})
        }
    }

    function q() {
        if (!q.called) {
            q.called = !0;
            var a = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(a, p)
        }
    }

    function t(a) {
        return h[a] || h[n[a]]
    }

    var B = {classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0}, h = {}, n = {};
    this.highlight = s;
    this.highlightAuto = u;
    this.fixMarkup = x;
    this.highlightBlock = p;
    this.configure = function (a) {
        B = e(B, a)
    };
    this.initHighlighting = q;
    this.initHighlightingOnLoad = function () {
        addEventListener("DOMContentLoaded",
            q, !1);
        addEventListener("load", q, !1)
    };
    this.registerLanguage = function (a, b) {
        var c = h[a] = b(this);
        c.aliases && c.aliases.forEach(function (b) {
            n[b] = a
        })
    };
    this.getLanguage = t;
    this.inherit = e;
    this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
    this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
    this.NR = "\\b\\d+(\\.\\d+)?";
    this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    this.BNR = "\\b(0b[01]+)";
    this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    this.BE = {b: "\\\\[\\s\\S]", r: 0};
    this.ASM = {cN: "string", b: "'", e: "'", i: "\\n", c: [this.BE]};
    this.QSM = {cN: "string", b: '"', e: '"', i: "\\n", c: [this.BE]};
    this.CLCM = {cN: "comment", b: "//", e: "$"};
    this.CBLCLM = {cN: "comment", b: "/\\*", e: "\\*/"};
    this.HCM = {cN: "comment", b: "#", e: "$"};
    this.NM = {cN: "number", b: this.NR, r: 0};
    this.CNM = {cN: "number", b: this.CNR, r: 0};
    this.BNM = {cN: "number", b: this.BNR, r: 0};
    this.REGEXP_MODE = {
        cN: "regexp",
        b: /\//,
        e: /\/[gim]*/,
        i: /\n/,
        c: [this.BE, {b: /\[/, e: /\]/, r: 0, c: [this.BE]}]
    };
    this.TM = {
        cN: "title", b: this.IR,
        r: 0
    };
    this.UTM = {cN: "title", b: this.UIR, r: 0}
};
hljs.registerLanguage("javascript", function (d) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"
        },
        c: [{
            cN: "pi",
            b: /^\s*('|")use strict('|")/, r: 10
        }, d.ASM, d.QSM, d.CLCM, d.CBLCLM, d.CNM, {
            b: "(" + d.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [d.CLCM, d.CBLCLM, d.REGEXP_MODE, {b: /</, e: />;/, r: 0, sL: "xml"}],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            c: [d.inherit(d.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [d.CLCM, d.CBLCLM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {b: /\$[(.]/}, {b: "\\." + d.IR, r: 0}]
    }
});
hljs.registerLanguage("css", function (d) {
    var c = {cN: "function", b: "[a-zA-Z-][a-zA-Z0-9_-]*\\(", e: "\\)", c: ["self", d.NM, d.ASM, d.QSM]};
    return {
        cI: !0,
        i: "[=/|']",
        c: [d.CBLCLM, {cN: "id", b: "\\#[A-Za-z0-9_-]+"}, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {cN: "attr_selector", b: "\\[", e: "\\]", i: "$"}, {
            cN: "pseudo",
            b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
        }, {cN: "at_rule", b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page"}, {
            cN: "at_rule", b: "@", e: "[{;]", c: [{cN: "keyword", b: /\S+/}, {
                b: /\s/, eW: !0, eE: !0, r: 0, c: [c, d.ASM, d.QSM,
                    d.NM]
            }]
        }, {cN: "tag", b: "[a-zA-Z-][a-zA-Z0-9_-]*", r: 0}, {
            cN: "rules",
            b: "{",
            e: "}",
            i: "[^\\s]",
            r: 0,
            c: [d.CBLCLM, {
                cN: "rule",
                b: "[^\\s]",
                rB: !0,
                e: ";",
                eW: !0,
                c: [{
                    cN: "attribute",
                    b: "[A-Z\\_\\.\\-]+",
                    e: ":",
                    eE: !0,
                    i: "[^\\s]",
                    starts: {
                        cN: "value",
                        eW: !0,
                        eE: !0,
                        c: [c, d.NM, d.QSM, d.ASM, d.CBLCLM, {cN: "hexcolor", b: "#[0-9A-Fa-f]+"}, {
                            cN: "important",
                            b: "!important"
                        }]
                    }
                }]
            }]
        }]
    }
});
hljs.registerLanguage("xml", function (d) {
    d = {b: /<\?(php)?(?!\w)/, e: /\?>/, sL: "php", subLanguageMode: "continuous"};
    var c = {
        eW: !0,
        i: /</,
        r: 0,
        c: [d, {cN: "attribute", b: "[A-Za-z0-9\\._:-]+", r: 0}, {
            b: "=",
            r: 0,
            c: [{cN: "value", v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}, {b: /[^\s\/>]+/}]}]
        }]
    };
    return {
        aliases: ["html"],
        cI: !0,
        c: [{cN: "doctype", b: "<!DOCTYPE", e: ">", r: 10, c: [{b: "\\[", e: "\\]"}]}, {
            cN: "comment",
            b: "\x3c!--",
            e: "--\x3e",
            r: 10
        }, {cN: "cdata", b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10}, {
            cN: "tag", b: "<style(?=\\s|>|$)", e: ">", k: {title: "style"},
            c: [c], starts: {e: "</style>", rE: !0, sL: "css"}
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {title: "script"},
            c: [c],
            starts: {e: "\x3c/script>", rE: !0, sL: "javascript"}
        }, {b: "<%", e: "%>", sL: "vbscript"}, d, {cN: "pi", b: /<\?\w+/, e: /\?>/, r: 10}, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{cN: "title", b: "[^ /><]+", r: 0}, c]
        }]
    }
});
hljs.registerLanguage("http", function (d) {
    return {
        i: "\\S",
        c: [{cN: "status", b: "^HTTP/[0-9\\.]+", e: "$", c: [{cN: "number", b: "\\b\\d{3}\\b"}]}, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: !0,
            e: "$",
            c: [{cN: "string", b: " ", e: " ", eB: !0, eE: !0}]
        }, {cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: {cN: "string", e: "$"}}, {
            b: "\\n\\n",
            starts: {sL: "", eW: !0}
        }]
    }
});
!function (d) {
    "function" == typeof define && define.amd ? define(["jquery"], d) : "object" == typeof exports ? module.exports = d : d(jQuery)
}(function (d) {
    function c(c) {
        var f = c || window.event, q = m.call(arguments, 1), k = 0, B = 0, h = 0, n = 0, v = 0, L = 0;
        if (c = d.event.fix(f), c.type = "mousewheel", "detail"in f && (h = -1 * f.detail), "wheelDelta"in f && (h = f.wheelDelta), "wheelDeltaY"in f && (h = f.wheelDeltaY), "wheelDeltaX"in f && (B = -1 * f.wheelDeltaX), "axis"in f && f.axis === f.HORIZONTAL_AXIS && (B = -1 * h, h = 0), k = 0 === h ? B : h, "deltaY"in f && (h = -1 * f.deltaY, k = h), "deltaX"in
            f && (B = f.deltaX, 0 === h && (k = -1 * B)), 0 !== h || 0 !== B) {
            if (1 === f.deltaMode)var s = d.data(this, "mousewheel-line-height"), k = k * s, h = h * s, B = B * s; else 2 === f.deltaMode && (s = d.data(this, "mousewheel-page-height"), k *= s, h *= s, B *= s);
            if (n = Math.max(Math.abs(h), Math.abs(B)), (!e || e > n) && (e = n, u.settings.adjustOldDeltas && "mousewheel" === f.type && 0 === n % 120 && (e /= 40)), u.settings.adjustOldDeltas && "mousewheel" === f.type && 0 === n % 120 && (k /= 40, B /= 40, h /= 40), k = Math[1 <= k ? "floor" : "ceil"](k / e), B = Math[1 <= B ? "floor" : "ceil"](B / e), h = Math[1 <= h ? "floor" : "ceil"](h /
                    e), u.settings.normalizeOffset && this.getBoundingClientRect)f = this.getBoundingClientRect(), v = c.clientX - f.left, L = c.clientY - f.top;
            return c.deltaX = B, c.deltaY = h, c.deltaFactor = e, c.offsetX = v, c.offsetY = L, c.deltaMode = 0, q.unshift(c, k, B, h), a && clearTimeout(a), a = setTimeout(b, 200), (d.event.dispatch || d.event.handle).apply(this, q)
        }
    }

    function b() {
        e = null
    }

    var a, e, f = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], k = "onwheel"in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        m = Array.prototype.slice;
    if (d.event.fixHooks)for (var s = f.length; s;)d.event.fixHooks[f[--s]] = d.event.mouseHooks;
    var u = d.event.special.mousewheel = {
        version: "3.1.11", setup: function () {
            if (this.addEventListener)for (var a = k.length; a;)this.addEventListener(k[--a], c, !1); else this.onmousewheel = c;
            d.data(this, "mousewheel-line-height", u.getLineHeight(this));
            d.data(this, "mousewheel-page-height", u.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener)for (var a = k.length; a;)this.removeEventListener(k[--a],
                c, !1); else this.onmousewheel = null;
            d.removeData(this, "mousewheel-line-height");
            d.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (a) {
            a = d(a)["offsetParent"in d.fn ? "offsetParent" : "parent"]();
            return a.length || (a = d("body")), parseInt(a.css("fontSize"), 10)
        }, getPageHeight: function (a) {
            return d(a).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    d.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        }, unmousewheel: function (a) {
            return this.unbind("mousewheel",
                a)
        }
    })
});
(function (d, c, b) {
    (function (a) {
        a(jQuery)
    })(function (a) {
        var b = {
            setWidth: !1,
            setHeight: !1,
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            autoHideScrollbar: !1,
            autoExpandScrollbar: !1,
            alwaysShowScrollbar: 0,
            snapAmount: null,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: !1,
                deltaFactor: "auto",
                normalizeDelta: !1,
                invert: !1,
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {enable: !1, scrollType: "stepless", scrollAmount: "auto"},
            keyboard: {enable: !0, scrollType: "stepless", scrollAmount: "auto"},
            contentTouchScroll: 25,
            advanced: {
                autoExpandHorizontalScroll: !1,
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: !0,
                updateOnSelectorChange: !1
            },
            theme: "light",
            callbacks: {
                onScrollStart: !1,
                onScroll: !1,
                onTotalScroll: !1,
                onTotalScrollBack: !1,
                whileScrolling: !1,
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            },
            live: !1,
            liveSelector: null
        }, f = 0, k = {}, m = function (a) {
            k[a] && (clearTimeout(k[a]), p._delete.call(null, k[a]))
        }, s = d.attachEvent && !d.addEventListener ? 1 : 0, u = !1, x = {
            init: function (c) {
                c = a.extend(!0, {}, b, c);
                var d = p._selector.call(this);
                if (c.live) {
                    var B = c.liveSelector || this.selector || ".mCustomScrollbar", h = a(B);
                    if ("off" === c.live) {
                        m(B);
                        return
                    }
                    k[B] = setTimeout(function () {
                        h.mCustomScrollbar(c);
                        "once" === c.live && h.length && m(B)
                    }, 500)
                } else m(B);
                c.setWidth = c.set_width ? c.set_width : c.setWidth;
                c.setHeight = c.set_height ? c.set_height : c.setHeight;
                c.axis = c.horizontalScroll ? "x" : p._findAxis.call(null, c.axis);
                c.scrollInertia = 17 > c.scrollInertia ? 17 : c.scrollInertia;
                "object" !== typeof c.mouseWheel && !0 == c.mouseWheel && (c.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                });
                c.mouseWheel.scrollAmount = c.mouseWheelPixels ? c.mouseWheelPixels : c.mouseWheel.scrollAmount;
                c.mouseWheel.normalizeDelta = c.advanced.normalizeMouseWheelDelta ? c.advanced.normalizeMouseWheelDelta : c.mouseWheel.normalizeDelta;
                c.scrollButtons.scrollType = p._findScrollButtonsType.call(null, c.scrollButtons.scrollType);
                p._theme.call(null, c);
                return a(d).each(function () {
                    var b = a(this);
                    if (!b.data("mCS")) {
                        b.data("mCS", {
                            idx: ++f,
                            opt: c,
                            scrollRatio: {y: null, x: null},
                            overflowed: null,
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: b.css("direction"),
                            cbOffsets: null,
                            trigger: null
                        });
                        var d = b.data("mCS").opt, e = b.data("mcs-axis"), h = b.data("mcs-scrollbar-position"), k = b.data("mcs-theme");
                        e && (d.axis = e);
                        h && (d.scrollbarPosition = h);
                        k && (d.theme =
                            k, p._theme.call(null, d));
                        p._pluginMarkup.call(this);
                        x.update.call(null, b)
                    }
                })
            }, update: function (b) {
                b = b || p._selector.call(this);
                return a(b).each(function () {
                    var b = a(this);
                    if (b.data("mCS")) {
                        var c = b.data("mCS"), d = c.opt, e = a("#mCSB_" + c.idx + "_container"), f = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")];
                        e.length && (c.tweenRunning && p._stop.call(null, b), b.hasClass("mCS_disabled") && b.removeClass("mCS_disabled"), b.hasClass("mCS_destroyed") && b.removeClass("mCS_destroyed"), p._maxHeight.call(this),
                            p._expandContentHorizontally.call(this), "y" === d.axis || d.advanced.autoExpandHorizontalScroll || e.css("width", p._contentWidth(e.children())), c.overflowed = p._overflowed.call(this), p._scrollbarVisibility.call(this), d.autoDraggerLength && p._setDraggerLength.call(this), p._scrollRatio.call(this), p._bindEvents.call(this), e = [Math.abs(e[0].offsetTop), Math.abs(e[0].offsetLeft)], "x" !== d.axis && (c.overflowed[0] ? f[0].height() > f[0].parent().height() ? p._resetContentPosition.call(this) : p._scrollTo.call(this, b, e[0].toString(),
                            {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }) : (p._resetContentPosition.call(this), "y" === d.axis ? p._unbindEvents.call(this) : "yx" === d.axis && c.overflowed[1] && p._scrollTo.call(this, b, e[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))), "y" !== d.axis && (c.overflowed[1] ? f[1].width() > f[1].parent().width() ? p._resetContentPosition.call(this) : p._scrollTo.call(this, b, e[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }) : (p._resetContentPosition.call(this), "x" === d.axis ? p._unbindEvents.call(this) : "yx" === d.axis && c.overflowed[0] &&
                        p._scrollTo.call(this, b, e[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))), p._autoUpdate.call(this))
                    }
                })
            }, scrollTo: function (b, c) {
                if ("undefined" != typeof b && null != b) {
                    var d = p._selector.call(this);
                    return a(d).each(function () {
                        var d = a(this);
                        if (d.data("mCS")) {
                            var e = d.data("mCS"), f = e.opt, k = a.extend(!0, {}, {
                                trigger: "external",
                                scrollInertia: f.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }, c), m = p._arr.call(this, b), B = 17 > k.scrollInertia ? 17 : k.scrollInertia;
                            m[0] = p._to.call(this, m[0], "y");
                            m[1] = p._to.call(this, m[1], "x");
                            k.moveDragger && (m[0] *= e.scrollRatio.y, m[1] *= e.scrollRatio.x);
                            k.dur = B;
                            setTimeout(function () {
                                null !== m[0] && "undefined" !== typeof m[0] && "x" !== f.axis && e.overflowed[0] && (k.dir = "y", k.overwrite = "all", p._scrollTo.call(this, d, m[0].toString(), k));
                                null !== m[1] && "undefined" !== typeof m[1] && "y" !== f.axis && e.overflowed[1] && (k.dir = "x", k.overwrite = "none", p._scrollTo.call(this, d, m[1].toString(), k))
                            }, 60)
                        }
                    })
                }
            }, stop: function () {
                var b = p._selector.call(this);
                return a(b).each(function () {
                    var b =
                        a(this);
                    b.data("mCS") && p._stop.call(null, b)
                })
            }, disable: function (b) {
                var c = p._selector.call(this);
                return a(c).each(function () {
                    var c = a(this);
                    c.data("mCS") && (c.data("mCS"), p._autoUpdate.call(this, "remove"), p._unbindEvents.call(this), b && p._resetContentPosition.call(this), p._scrollbarVisibility.call(this, !0), c.addClass("mCS_disabled"))
                })
            }, destroy: function () {
                var b = p._selector.call(this);
                return a(b).each(function () {
                    var c = a(this);
                    if (c.data("mCS")) {
                        var d = c.data("mCS"), e = d.opt, f = a("#mCSB_" + d.idx), k = a("#mCSB_" +
                            d.idx + "_container"), L = a(".mCSB_" + d.idx + "_scrollbar");
                        e.live && m(b);
                        p._autoUpdate.call(this, "remove");
                        p._unbindEvents.call(this);
                        p._resetContentPosition.call(this);
                        c.removeData("mCS");
                        p._delete.call(null, this.mcs);
                        L.remove();
                        f.replaceWith(k.contents());
                        c.removeClass("mCustomScrollbar _mCS_" + d.idx + " mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")
                    }
                })
            }
        }, p = {
            _selector: function () {
                return "object" !== typeof a(this) || 1 > a(this).length ? ".mCustomScrollbar" : this
            }, _theme: function (b) {
                b.autoDraggerLength =
                    -1 < a.inArray(b.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) ? !1 : b.autoDraggerLength;
                b.autoExpandScrollbar = -1 < a.inArray(b.theme, "rounded-dots rounded-dots-dark 3d 3d-dark 3d-thick 3d-thick-dark inset inset-dark inset-2 inset-2-dark inset-3 inset-3-dark".split(" ")) ? !1 : b.autoExpandScrollbar;
                b.scrollButtons.enable = -1 < a.inArray(b.theme, ["minimal", "minimal-dark"]) ? !1 : b.scrollButtons.enable;
                b.autoHideScrollbar = -1 < a.inArray(b.theme, ["minimal", "minimal-dark"]) ? !0 : b.autoHideScrollbar;
                b.scrollbarPosition = -1 < a.inArray(b.theme, ["minimal", "minimal-dark"]) ? "outside" : b.scrollbarPosition
            }, _findAxis: function (a) {
                return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y"
            }, _findScrollButtonsType: function (a) {
                return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless"
            }, _pluginMarkup: function () {
                var b = a(this), c = b.data("mCS"), d = c.opt, e = d.autoExpandScrollbar ? " mCSB_scrollTools_onDrag_expand" : "", e = ["<div id='mCSB_" + c.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
                c.idx + "_scrollbar mCS-" + d.theme + " mCSB_scrollTools_vertical" + e + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + c.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + c.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + c.idx + "_scrollbar mCS-" + d.theme + " mCSB_scrollTools_horizontal" + e + "'><div class='mCSB_draggerContainer'><div id='mCSB_" +
                c.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"], f = "yx" === d.axis ? "mCSB_vertical_horizontal" : "x" === d.axis ? "mCSB_horizontal" : "mCSB_vertical", e = "yx" === d.axis ? e[0] + e[1] : "x" === d.axis ? e[1] : e[0], k = "yx" === d.axis ? "<div id='mCSB_" + c.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "", m = d.autoHideScrollbar ? " mCS-autoHide" : "", s = "x" !== d.axis && "rtl" === c.langDir ?
                    " mCS-dir-rtl" : "";
                d.setWidth && b.css("width", d.setWidth);
                d.setHeight && b.css("height", d.setHeight);
                d.setLeft = "y" !== d.axis && "rtl" === c.langDir ? "989999px" : d.setLeft;
                b.addClass("mCustomScrollbar _mCS_" + c.idx + m + s).wrapInner("<div id='mCSB_" + c.idx + "' class='mCustomScrollBox mCS-" + d.theme + " " + f + "'><div id='mCSB_" + c.idx + "_container' class='mCSB_container' style='position:relative; top:" + d.setTop + "; left:" + d.setLeft + ";' dir=" + c.langDir + " /></div>");
                f = a("#mCSB_" + c.idx);
                m = a("#mCSB_" + c.idx + "_container");
                "y" ===
                d.axis || d.advanced.autoExpandHorizontalScroll || m.css("width", p._contentWidth(m.children()));
                "outside" === d.scrollbarPosition ? ("static" === b.css("position") && b.css("position", "relative"), b.css("overflow", "visible"), f.addClass("mCSB_outside").after(e)) : (f.addClass("mCSB_inside").append(e), m.wrap(k));
                p._scrollButtons.call(this);
                b = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")];
                b[0].css("min-height", b[0].height());
                b[1].css("min-width", b[1].width())
            }, _contentWidth: function (b) {
                return Math.max.apply(Math,
                    b.map(function () {
                        return a(this).outerWidth(!0)
                    }).get())
            }, _expandContentHorizontally: function () {
                var b = a(this).data("mCS"), c = b.opt, b = a("#mCSB_" + b.idx + "_container");
                c.advanced.autoExpandHorizontalScroll && "y" !== c.axis && b.css({
                    position: "absolute",
                    width: "auto"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(b[0].getBoundingClientRect().right + 0.4) - Math.floor(b[0].getBoundingClientRect().left),
                    position: "relative"
                }).unwrap()
            }, _scrollButtons: function () {
                var b =
                    a(this).data("mCS"), c = b.opt, b = a(".mCSB_" + b.idx + "_scrollbar:first"), d = ["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"], d = ["x" === c.axis ? d[2] : d[0], "x" === c.axis ? d[3] : d[1], d[2], d[3]];
                c.scrollButtons.enable && b.prepend(d[0]).append(d[1]).next(".mCSB_scrollTools").prepend(d[2]).append(d[3])
            },
            _maxHeight: function () {
                var b = a(this), c = b.data("mCS"), c = a("#mCSB_" + c.idx), d = b.css("max-height"), e = -1 !== d.indexOf("%"), f = b.css("box-sizing");
                "none" !== d && (d = e ? b.parent().height() * parseInt(d) / 100 : parseInt(d), "border-box" === f && (d -= b.innerHeight() - b.height() + (b.outerHeight() - b.innerHeight())), c.css("max-height", Math.round(d)))
            }, _setDraggerLength: function () {
                var b = a(this).data("mCS"), c = a("#mCSB_" + b.idx), d = a("#mCSB_" + b.idx + "_container"), b = [a("#mCSB_" + b.idx + "_dragger_vertical"), a("#mCSB_" + b.idx + "_dragger_horizontal")],
                    c = [c.height() / d.outerHeight(!1), c.width() / d.outerWidth(!1)], c = [parseInt(b[0].css("min-height")), Math.round(c[0] * b[0].parent().height()), parseInt(b[1].css("min-width")), Math.round(c[1] * b[1].parent().width())], d = s && c[3] < c[2] ? c[2] : c[3];
                b[0].css({
                    height: s && c[1] < c[0] ? c[0] : c[1],
                    "max-height": b[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({"line-height": c[0] + "px"});
                b[1].css({width: d, "max-width": b[1].parent().width() - 10})
            }, _scrollRatio: function () {
                var b = a(this).data("mCS"), c = a("#mCSB_" + b.idx), d =
                    a("#mCSB_" + b.idx + "_container"), e = [a("#mCSB_" + b.idx + "_dragger_vertical"), a("#mCSB_" + b.idx + "_dragger_horizontal")], c = [d.outerHeight(!1) - c.height(), d.outerWidth(!1) - c.width()], e = [c[0] / (e[0].parent().height() - e[0].height()), c[1] / (e[1].parent().width() - e[1].width())];
                b.scrollRatio = {y: e[0], x: e[1]}
            }, _onDragClasses: function (a, b, c) {
                c = c ? "mCSB_dragger_onDrag_expanded" : "";
                var d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag"], e = a.closest(".mCSB_scrollTools");
                "active" === b ? (a.toggleClass(d[0] + " " + c), e.toggleClass(d[1]),
                    a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable || ("hide" === b ? (a.removeClass(d[0]), e.removeClass(d[1])) : (a.addClass(d[0]), e.addClass(d[1])))
            }, _overflowed: function () {
                var b = a(this).data("mCS"), c = a("#mCSB_" + b.idx), d = a("#mCSB_" + b.idx + "_container"), e = null == b.overflowed ? d.height() : d.outerHeight(!1), b = null == b.overflowed ? d.width() : d.outerWidth(!1);
                return [e > c.height(), b > c.width()]
            }, _resetContentPosition: function () {
                var b = a(this), c = b.data("mCS"), d = c.opt, e = a("#mCSB_" + c.idx), f = a("#mCSB_" + c.idx + "_container"),
                    k = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")];
                p._stop(b);
                ("x" !== d.axis && !c.overflowed[0] || "y" === d.axis && c.overflowed[0]) && k[0].add(f).css("top", 0);
                if ("y" !== d.axis && !c.overflowed[1] || "x" === d.axis && c.overflowed[1])b = dx = 0, "rtl" === c.langDir && (b = e.width() - f.outerWidth(!1), dx = Math.abs(b / c.scrollRatio.x)), f.css("left", b), k[1].css("left", dx)
            }, _bindEvents: function () {
                var b = a(this), c = b.data("mCS"), d = c.opt;
                if (!c.bindEvents) {
                    p._draggable.call(this);
                    d.contentTouchScroll && p._contentDraggable.call(this);
                    if (d.mouseWheel.enable) {
                        var e = function () {
                            f = setTimeout(function () {
                                a.event.special.mousewheel ? (clearTimeout(f), p._mousewheel.call(b[0])) : e()
                            }, 1E3)
                        }, f;
                        e()
                    }
                    p._draggerRail.call(this);
                    p._wrapperScroll.call(this);
                    d.advanced.autoScrollOnFocus && p._focus.call(this);
                    d.scrollButtons.enable && p._buttons.call(this);
                    d.keyboard.enable && p._keyboard.call(this);
                    c.bindEvents = !0
                }
            }, _unbindEvents: function () {
                var b = a(this), d = b.data("mCS"), e = "mCS_" + d.idx, h = ".mCSB_" + d.idx + "_scrollbar", h = a("#mCSB_" + d.idx + ",#mCSB_" + d.idx + "_container,#mCSB_" +
                    d.idx + "_container_wrapper," + h + " .mCSB_draggerContainer,#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal," + h + ">a"), f = a("#mCSB_" + d.idx + "_container");
                d.bindEvents && (a(c).unbind("." + e), h.each(function () {
                    a(this).unbind("." + e)
                }), clearTimeout(b[0]._focusTimeout), p._delete.call(null, b[0]._focusTimeout), clearTimeout(d.sequential.step), p._delete.call(null, d.sequential.step), clearTimeout(f[0].onCompleteTimeout), p._delete.call(null, f[0].onCompleteTimeout), d.bindEvents = !1)
            }, _scrollbarVisibility: function (b) {
                var c =
                    a(this), d = c.data("mCS"), e = d.opt, f = a("#mCSB_" + d.idx + "_container_wrapper"), f = f.length ? f : a("#mCSB_" + d.idx + "_container"), k = [a("#mCSB_" + d.idx + "_scrollbar_vertical"), a("#mCSB_" + d.idx + "_scrollbar_horizontal")], m = [k[0].find(".mCSB_dragger"), k[1].find(".mCSB_dragger")];
                "x" !== e.axis && (d.overflowed[0] && !b ? (k[0].add(m[0]).add(k[0].children("a")).css("display", "block"), f.removeClass("mCS_no_scrollbar_y mCS_y_hidden")) : (e.alwaysShowScrollbar ? (2 !== e.alwaysShowScrollbar && m[0].add(k[0].children("a")).css("display",
                    "none"), f.removeClass("mCS_y_hidden")) : (k[0].css("display", "none"), f.addClass("mCS_y_hidden")), f.addClass("mCS_no_scrollbar_y")));
                "y" !== e.axis && (d.overflowed[1] && !b ? (k[1].add(m[1]).add(k[1].children("a")).css("display", "block"), f.removeClass("mCS_no_scrollbar_x mCS_x_hidden")) : (e.alwaysShowScrollbar ? (2 !== e.alwaysShowScrollbar && m[1].add(k[1].children("a")).css("display", "none"), f.removeClass("mCS_x_hidden")) : (k[1].css("display", "none"), f.addClass("mCS_x_hidden")), f.addClass("mCS_no_scrollbar_x")));
                d.overflowed[0] || d.overflowed[1] ? c.removeClass("mCS_no_scrollbar") : c.addClass("mCS_no_scrollbar")
            }, _coordinates: function (a) {
                switch (a.type) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return [a.originalEvent.pageY, a.originalEvent.pageX];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        return a = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], [a.pageY, a.pageX];
                    default:
                        return [a.pageY, a.pageX]
                }
            }, _draggable: function () {
                function b(a) {
                    var c =
                        N.find("iframe");
                    c.length && c.css("pointer-events", a ? "auto" : "none")
                }

                function d(a, b, c, k) {
                    N[0].idleTimer = 233 > f.scrollInertia ? 250 : 0;
                    if (y.attr("id") === m[1]) {
                        var r = "x";
                        a = (y[0].offsetLeft - b + k) * h.scrollRatio.x
                    } else r = "y", a = (y[0].offsetTop - a + c) * h.scrollRatio.y;
                    p._scrollTo(e, a.toString(), {dir: r, drag: !0})
                }

                var e = a(this), h = e.data("mCS"), f = h.opt, k = "mCS_" + h.idx, m = ["mCSB_" + h.idx + "_dragger_vertical", "mCSB_" + h.idx + "_dragger_horizontal"], N = a("#mCSB_" + h.idx + "_container"), A = a("#" + m[0] + ",#" + m[1]), y, r, J;
                A.bind("mousedown." +
                    k + " touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, function (d) {
                    d.stopImmediatePropagation();
                    d.preventDefault();
                    if (p._mouseBtnLeft(d)) {
                        u = !0;
                        s && (c.onselectstart = function () {
                            return !1
                        });
                        b(!1);
                        p._stop(e);
                        y = a(this);
                        var h = y.offset(), k = p._coordinates(d)[0] - h.top;
                        d = p._coordinates(d)[1] - h.left;
                        var v = y.height() + h.top, h = y.width() + h.left;
                        k < v && 0 < k && d < h && 0 < d && (r = k, J = d);
                        p._onDragClasses(y, "active", f.autoExpandScrollbar)
                    }
                }).bind("touchmove." + k, function (a) {
                    a.stopImmediatePropagation();
                    a.preventDefault();
                    var b =
                        y.offset(), c = p._coordinates(a)[0] - b.top;
                    a = p._coordinates(a)[1] - b.left;
                    d(r, J, c, a)
                });
                a(c).bind("mousemove." + k + " pointermove." + k + " MSPointerMove." + k, function (a) {
                    if (y) {
                        var b = y.offset(), c = p._coordinates(a)[0] - b.top;
                        a = p._coordinates(a)[1] - b.left;
                        r !== c && d(r, J, c, a)
                    }
                }).add(A).bind("mouseup." + k + " touchend." + k + " pointerup." + k + " MSPointerUp." + k, function (a) {
                    y && (p._onDragClasses(y, "active", f.autoExpandScrollbar), y = null);
                    u = !1;
                    s && (c.onselectstart = null);
                    b(!0)
                })
            }, _contentDraggable: function () {
                function b(a, c) {
                    var d =
                        [1.5 * c, 2 * c, c / 1.5, c / 2];
                    return 90 < a ? 4 < c ? d[0] : d[3] : 60 < a ? 3 < c ? d[3] : d[2] : 30 < a ? 8 < c ? d[1] : 6 < c ? d[0] : 4 < c ? c : d[2] : 8 < c ? c : d[3]
                }

                function c(a, b, e, h, f, n) {
                    a && p._scrollTo(d, a.toString(), {dur: b, scrollEasing: e, dir: h, overwrite: f, drag: n})
                }

                var d = a(this), e = d.data("mCS"), f = e.opt, k = "mCS_" + e.idx, m = a("#mCSB_" + e.idx), s = a("#mCSB_" + e.idx + "_container"), A = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")], y, r, J, D, P = [], x = [], w, z, H, K, O, I, S, da = "yx" === f.axis ? "none" : "all";
                s.bind("touchstart." + k + " pointerdown." +
                    k + " MSPointerDown." + k, function (a) {
                    if (p._pointerTouch(a) && !u) {
                        var b = s.offset();
                        y = p._coordinates(a)[0] - b.top;
                        r = p._coordinates(a)[1] - b.left
                    }
                }).bind("touchmove." + k + " pointermove." + k + " MSPointerMove." + k, function (a) {
                    if (p._pointerTouch(a) && !u) {
                        a.stopImmediatePropagation();
                        z = p._getTime();
                        var b = m.offset(), d = p._coordinates(a)[0] - b.top, b = p._coordinates(a)[1] - b.left;
                        P.push(d);
                        x.push(b);
                        if (e.overflowed[0])var k = A[0].parent().height() - A[0].height(), k = 0 < y - d && d - y > -(k * e.scrollRatio.y);
                        if (e.overflowed[1])var q = A[1].parent().width() -
                            A[1].width(), q = 0 < r - b && b - r > -(q * e.scrollRatio.x);
                        (k || q) && a.preventDefault();
                        I = "yx" === f.axis ? [y - d, r - b] : "x" === f.axis ? [null, r - b] : [y - d, null];
                        s[0].idleTimer = 250;
                        e.overflowed[0] && c(I[0], 0, "mcsLinearOut", "y", "all", !0);
                        e.overflowed[1] && c(I[1], 0, "mcsLinearOut", "x", da, !0)
                    }
                });
                m.bind("touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, function (a) {
                    if (p._pointerTouch(a) && !u) {
                        a.stopImmediatePropagation();
                        p._stop(d);
                        w = p._getTime();
                        var b = m.offset();
                        J = p._coordinates(a)[0] - b.top;
                        D = p._coordinates(a)[1] - b.left;
                        P = [];
                        x =
                            []
                    }
                }).bind("touchend." + k + " pointerup." + k + " MSPointerUp." + k, function (a) {
                    if (p._pointerTouch(a) && !u) {
                        a.stopImmediatePropagation();
                        H = p._getTime();
                        var d = m.offset(), k = p._coordinates(a)[0] - d.top, d = p._coordinates(a)[1] - d.left;
                        if (!(30 < H - z)) {
                            O = 1E3 / (H - w);
                            var r = (a = 2.5 > O) ? [P[P.length - 2], x[x.length - 2]] : [0, 0];
                            K = a ? [k - r[0], d - r[1]] : [k - J, d - D];
                            k = [Math.abs(K[0]), Math.abs(K[1])];
                            O = a ? [Math.abs(K[0] / 4), Math.abs(K[1] / 4)] : [O, O];
                            a = [Math.abs(s[0].offsetTop) - K[0] * b(k[0] / O[0], O[0]), Math.abs(s[0].offsetLeft) - K[1] * b(k[1] / O[1], O[1])];
                            I = "yx" === f.axis ? [a[0], a[1]] : "x" === f.axis ? [null, a[1]] : [a[0], null];
                            S = [4 * k[0] + f.scrollInertia, 4 * k[1] + f.scrollInertia];
                            a = parseInt(f.contentTouchScroll) || 0;
                            I[0] = k[0] > a ? I[0] : 0;
                            I[1] = k[1] > a ? I[1] : 0;
                            e.overflowed[0] && c(I[0], S[0], "mcsEaseOut", "y", da, !1);
                            e.overflowed[1] && c(I[1], S[1], "mcsEaseOut", "x", da, !1)
                        }
                    }
                })
            }, _mousewheel: function () {
                var b = a(this), c = b.data("mCS");
                if (c) {
                    var d = c.opt, e = "mCS_" + c.idx, f = a("#mCSB_" + c.idx), k = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")];
                    f.bind("mousewheel." +
                        e, function (e, h) {
                        p._stop(b);
                        if (!p._disableMousewheel(b, e.target)) {
                            var m = "auto" !== d.mouseWheel.deltaFactor ? parseInt(d.mouseWheel.deltaFactor) : s && 100 > e.deltaFactor ? 100 : 40 > e.deltaFactor ? 40 : e.deltaFactor || 100;
                            if ("x" === d.axis || "x" === d.mouseWheel.axis)var y = "x", m = [Math.round(m * c.scrollRatio.x), parseInt(d.mouseWheel.scrollAmount)], m = "auto" !== d.mouseWheel.scrollAmount ? m[1] : m[0] >= f.width() ? 0.9 * f.width() : m[0], r = Math.abs(a("#mCSB_" + c.idx + "_container")[0].offsetLeft), J = k[1][0].offsetLeft, D = k[1].parent().width() -
                                k[1].width(), u = e.deltaX || e.deltaY || h; else y = "y", m = [Math.round(m * c.scrollRatio.y), parseInt(d.mouseWheel.scrollAmount)], m = "auto" !== d.mouseWheel.scrollAmount ? m[1] : m[0] >= f.height() ? 0.9 * f.height() : m[0], r = Math.abs(a("#mCSB_" + c.idx + "_container")[0].offsetTop), J = k[0][0].offsetTop, D = k[0].parent().height() - k[0].height(), u = e.deltaY || h;
                            if (("y" !== y || c.overflowed[0]) && ("x" !== y || c.overflowed[1])) {
                                d.mouseWheel.invert && (u = -u);
                                d.mouseWheel.normalizeDelta && (u = 0 > u ? -1 : 1);
                                if (0 < u && 0 !== J || 0 > u && J !== D || d.mouseWheel.preventDefault)e.stopImmediatePropagation(),
                                    e.preventDefault();
                                p._scrollTo(b, (r - u * m).toString(), {dir: y})
                            }
                        }
                    })
                }
            }, _disableMousewheel: function (b, c) {
                var d = c.nodeName.toLowerCase(), e = b.data("mCS").opt.mouseWheel.disableOver, f = ["select", "textarea"];
                return -1 < a.inArray(d, e) && !(-1 < a.inArray(d, f) && !a(c).is(":focus"))
            }, _draggerRail: function () {
                var b = a(this), c = b.data("mCS"), d = "mCS_" + c.idx, e = a("#mCSB_" + c.idx + "_container"), f = e.parent();
                a(".mCSB_" + c.idx + "_scrollbar .mCSB_draggerContainer").bind("touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, function (a) {
                    u = !0
                }).bind("touchend." + d + " pointerup." + d + " MSPointerUp." + d, function (a) {
                    u = !1
                }).bind("click." + d, function (d) {
                    if (a(d.target).hasClass("mCSB_draggerContainer") || a(d.target).hasClass("mCSB_draggerRail")) {
                        p._stop(b);
                        var k = a(this), m = k.find(".mCSB_dragger");
                        if (0 < k.parent(".mCSB_scrollTools_horizontal").length) {
                            if (!c.overflowed[1])return;
                            k = "x";
                            d = d.pageX > m.offset().left ? -1 : 1;
                            d = Math.abs(e[0].offsetLeft) - 0.9 * d * f.width()
                        } else {
                            if (!c.overflowed[0])return;
                            k = "y";
                            d = d.pageY > m.offset().top ? -1 : 1;
                            d = Math.abs(e[0].offsetTop) -
                                0.9 * d * f.height()
                        }
                        p._scrollTo(b, d.toString(), {dir: k, scrollEasing: "mcsEaseInOut"})
                    }
                })
            }, _focus: function () {
                var b = a(this), d = b.data("mCS"), e = d.opt, h = "mCS_" + d.idx, f = a("#mCSB_" + d.idx + "_container"), k = f.parent();
                f.bind("focusin." + h, function (d) {
                    var h = a(c.activeElement);
                    d = f.find(".mCustomScrollBox").length;
                    h.is(e.advanced.autoScrollOnFocus) && (p._stop(b), clearTimeout(b[0]._focusTimeout), b[0]._focusTimer = d ? 17 * d : 0, b[0]._focusTimeout = setTimeout(function () {
                        var a = [h.offset().top - f.offset().top, h.offset().left - f.offset().left],
                            c = [f[0].offsetTop, f[0].offsetLeft], c = [0 <= c[0] + a[0] && c[0] + a[0] < k.height() - h.outerHeight(!1), 0 <= c[1] + a[1] && c[0] + a[1] < k.width() - h.outerWidth(!1)], d = "yx" !== e.axis || c[0] || c[1] ? "all" : "none";
                        "x" === e.axis || c[0] || p._scrollTo(b, a[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: d,
                            dur: 0
                        });
                        "y" === e.axis || c[1] || p._scrollTo(b, a[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: d,
                            dur: 0
                        })
                    }, b[0]._focusTimer))
                })
            }, _wrapperScroll: function () {
                var b = a(this).data("mCS"), c = "mCS_" + b.idx, d = a("#mCSB_" +
                    b.idx + "_container").parent();
                d.bind("scroll." + c, function (a) {
                    d.scrollTop(0).scrollLeft(0)
                })
            }, _buttons: function () {
                var b = a(this), c = b.data("mCS"), d = c.opt, e = c.sequential, f = "mCS_" + c.idx;
                a("#mCSB_" + c.idx + "_container");
                a(".mCSB_" + c.idx + "_scrollbar>a").bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f + " mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f + " mouseout." + f + " pointerout." + f + " MSPointerOut." + f + " click." + f, function (f) {
                    function n(a, c) {
                        e.scrollAmount = d.snapAmount ||
                            d.scrollButtons.scrollAmount;
                        p._sequentialScroll.call(this, b, a, c)
                    }

                    f.preventDefault();
                    if (p._mouseBtnLeft(f)) {
                        var k = a(this).attr("class");
                        e.type = d.scrollButtons.scrollType;
                        switch (f.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === e.type)break;
                                u = !0;
                                c.tweenRunning = !1;
                                n("on", k);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === e.type)break;
                                u = !1;
                                e.dir && n("off", k);
                                break;
                            case "click":
                                if ("stepped" !== e.type || c.tweenRunning)break;
                                n("on", k)
                        }
                    }
                })
            }, _keyboard: function () {
                var b = a(this), d = b.data("mCS"), e = d.opt, h = d.sequential, f = "mCS_" + d.idx, k = a("#mCSB_" + d.idx), m = a("#mCSB_" + d.idx + "_container"), s = m.parent();
                k.attr("tabindex", "0").bind("blur." + f + " keydown." + f + " keyup." + f, function (f) {
                    function n(a, c) {
                        h.type = e.keyboard.scrollType;
                        h.scrollAmount = e.snapAmount || e.keyboard.scrollAmount;
                        "stepped" === h.type && d.tweenRunning || p._sequentialScroll.call(this, b, a, c)
                    }

                    switch (f.type) {
                        case "blur":
                            d.tweenRunning &&
                            h.dir && n("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var k = f.keyCode ? f.keyCode : f.which, v = "on";
                            if ("x" !== e.axis && (38 === k || 40 === k) || "y" !== e.axis && (37 === k || 39 === k)) {
                                if ((38 === k || 40 === k) && !d.overflowed[0] || (37 === k || 39 === k) && !d.overflowed[1])break;
                                "keyup" === f.type && (v = "off");
                                a(c.activeElement).is("input,textarea,select,datalist,keygen,[contenteditable='true']") || (f.preventDefault(), f.stopImmediatePropagation(), n(v, k))
                            } else if (33 === k || 34 === k) {
                                if (d.overflowed[0] || d.overflowed[1])f.preventDefault(), f.stopImmediatePropagation();
                                "keyup" === f.type && (p._stop(b), k = 34 === k ? -1 : 1, "x" === e.axis || "yx" === e.axis && d.overflowed[1] && !d.overflowed[0] ? (f = "x", k = Math.abs(m[0].offsetLeft) - 0.9 * k * s.width()) : (f = "y", k = Math.abs(m[0].offsetTop) - 0.9 * k * s.height()), p._scrollTo(b, k.toString(), {
                                    dir: f,
                                    scrollEasing: "mcsEaseInOut"
                                }))
                            } else if ((35 === k || 36 === k) && !a(c.activeElement).is("input,textarea,select,datalist,keygen,[contenteditable='true']")) {
                                if (d.overflowed[0] || d.overflowed[1])f.preventDefault(), f.stopImmediatePropagation();
                                "keyup" === f.type && ("x" ===
                                e.axis || "yx" === e.axis && d.overflowed[1] && !d.overflowed[0] ? (f = "x", k = 35 === k ? Math.abs(s.width() - m.outerWidth(!1)) : 0) : (f = "y", k = 35 === k ? Math.abs(s.height() - m.outerHeight(!1)) : 0), p._scrollTo(b, k.toString(), {
                                    dir: f,
                                    scrollEasing: "mcsEaseInOut"
                                }))
                            }
                    }
                })
            }, _sequentialScroll: function (b, c, d) {
                function e(a) {
                    var c = "stepped" !== m.type, d = a ? c ? k.scrollInertia / 1.5 : k.scrollInertia : 1E3 / 60, t = a ? c ? 7.5 : 40 : 2.5, u = [Math.abs(s[0].offsetTop), Math.abs(s[0].offsetLeft)], B = [10 < f.scrollRatio.y ? 10 : f.scrollRatio.y, 10 < f.scrollRatio.x ? 10 : f.scrollRatio.x],
                        t = "x" === m.dir[0] ? u[1] + m.dir[1] * B[1] * t : u[0] + m.dir[1] * B[0] * t, B = "x" === m.dir[0] ? u[1] + m.dir[1] * parseInt(m.scrollAmount) : u[0] + m.dir[1] * parseInt(m.scrollAmount), t = "auto" !== m.scrollAmount ? B : t;
                    a && 17 > d && (t = "x" === m.dir[0] ? u[1] : u[0]);
                    p._scrollTo(b, t.toString(), {
                        dir: m.dir[0],
                        scrollEasing: a ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                        dur: d,
                        onComplete: a ? !0 : !1
                    });
                    a ? m.dir = !1 : (clearTimeout(m.step), m.step = setTimeout(function () {
                        e()
                    }, d))
                }

                var f = b.data("mCS"), k = f.opt, m = f.sequential, s = a("#mCSB_" + f.idx + "_container"), u = "stepped" ===
                m.type ? !0 : !1;
                switch (c) {
                    case "on":
                        m.dir = ["mCSB_buttonRight" === d || "mCSB_buttonLeft" === d || 39 === d || 37 === d ? "x" : "y", "mCSB_buttonUp" === d || "mCSB_buttonLeft" === d || 38 === d || 37 === d ? -1 : 1];
                        p._stop(b);
                        if (p._isNumeric(d) && "stepped" === m.type)break;
                        e(u);
                        break;
                    case "off":
                        clearTimeout(m.step), p._stop(b), (u || f.tweenRunning && m.dir) && e(!0)
                }
            }, _arr: function (b) {
                var c = a(this).data("mCS").opt, d = [];
                "function" === typeof b && (b = b());
                b instanceof Array ? d = 1 < b.length ? [b[0], b[1]] : "x" === c.axis ? [null, b[0]] : [b[0], null] : (d[0] = b.y ? b.y : b.x ||
                "x" === c.axis ? null : b, d[1] = b.x ? b.x : b.y || "y" === c.axis ? null : b);
                "function" === typeof d[0] && (d[0] = d[0]());
                "function" === typeof d[1] && (d[1] = d[1]());
                return d
            }, _to: function (b, c) {
                if (null != b && "undefined" != typeof b) {
                    var d = a(this), e = d.data("mCS"), f = e.opt, e = a("#mCSB_" + e.idx + "_container"), k = e.parent(), m = typeof b;
                    c || (c = "x" === f.axis ? "x" : "y");
                    var s = "x" === c ? e.outerWidth(!1) : e.outerHeight(!1), f = "x" === c ? e.offset().left : e.offset().top, u = "x" === c ? e[0].offsetLeft : e[0].offsetTop, y = "x" === c ? "left" : "top";
                    switch (m) {
                        case "function":
                            return b();
                        case "object":
                            if (b.nodeType)var r = "x" === c ? a(b).offset().left : a(b).offset().top; else if (b.jquery) {
                                if (!b.length)break;
                                r = "x" === c ? b.offset().left : b.offset().top
                            }
                            return r - f;
                        case "string":
                        case "number":
                            if (p._isNumeric.call(null, b))return Math.abs(b);
                            if (-1 !== b.indexOf("%"))return Math.abs(s * parseInt(b) / 100);
                            if (-1 !== b.indexOf("-="))return Math.abs(u - parseInt(b.split("-=")[1]));
                            if (-1 !== b.indexOf("+="))return d = u + parseInt(b.split("+=")[1]), 0 <= d ? 0 : Math.abs(d);
                            if (-1 !== b.indexOf("px") && p._isNumeric.call(null,
                                    b.split("px")[0]))return Math.abs(b.split("px")[0]);
                            if ("top" === b || "left" === b)return 0;
                            if ("bottom" === b)return Math.abs(k.height() - e.outerHeight(!1));
                            if ("right" === b)return Math.abs(k.width() - e.outerWidth(!1));
                            if ("first" === b || "last" === b)return d = e.find(":" + b), r = "x" === c ? a(d).offset().left : a(d).offset().top, r - f;
                            if (a(b).length)return r = "x" === c ? a(b).offset().left : a(b).offset().top, r - f;
                            e.css(y, b);
                            x.update.call(null, d[0])
                    }
                }
            }, _autoUpdate: function (b) {
                function c() {
                    clearTimeout(y[0].autoUpdate);
                    y[0].autoUpdate =
                        setTimeout(function () {
                            if (u.advanced.updateOnSelectorChange && (G = f(), G !== P)) {
                                k();
                                P = G;
                                return
                            }
                            u.advanced.updateOnContentResize && (z = [y.outerHeight(!1), y.outerWidth(!1), r.height(), r.width(), D()[0], D()[1]], z[0] !== w[0] || z[1] !== w[1] || z[2] !== w[2] || z[3] !== w[3] || z[4] !== w[4] || z[5] !== w[5]) && (k(), w = z);
                            u.advanced.updateOnImageLoad && (K = d(), K !== H && (y.find("img").each(function () {
                                e(this.src)
                            }), H = K));
                            (u.advanced.updateOnSelectorChange || u.advanced.updateOnContentResize || u.advanced.updateOnImageLoad) && c()
                        }, 60)
                }

                function d() {
                    var a =
                        0;
                    u.advanced.updateOnImageLoad && (a = y.find("img").length);
                    return a
                }

                function e(a) {
                    var b = new Image;
                    b.onload = function (a, b) {
                        return function () {
                            return b.apply(a, arguments)
                        }
                    }(b, function () {
                        this.onload = null;
                        k()
                    });
                    b.src = a
                }

                function f() {
                    !0 === u.advanced.updateOnSelectorChange && (u.advanced.updateOnSelectorChange = "*");
                    var b = 0, c = y.find(u.advanced.updateOnSelectorChange);
                    u.advanced.updateOnSelectorChange && 0 < c.length && c.each(function () {
                        b += a(this).height() + a(this).width()
                    });
                    return b
                }

                function k() {
                    clearTimeout(y[0].autoUpdate);
                    x.update.call(null, m[0])
                }

                var m = a(this), s = m.data("mCS"), u = s.opt, y = a("#mCSB_" + s.idx + "_container");
                if (b)clearTimeout(y[0].autoUpdate), p._delete.call(null, y[0].autoUpdate); else {
                    var r = y.parent(), J = [a("#mCSB_" + s.idx + "_scrollbar_vertical"), a("#mCSB_" + s.idx + "_scrollbar_horizontal")], D = function () {
                        return [J[0].is(":visible") ? J[0].outerHeight(!0) : 0, J[1].is(":visible") ? J[1].outerWidth(!0) : 0]
                    }, P = f(), G, w = [y.outerHeight(!1), y.outerWidth(!1), r.height(), r.width(), D()[0], D()[1]], z, H = d(), K;
                    c()
                }
            }, _snapAmount: function (a,
                                      b, c) {
                return Math.round(a / b) * b - c
            }, _stop: function (b) {
                b = b.data("mCS");
                a("#mCSB_" + b.idx + "_container,#mCSB_" + b.idx + "_container_wrapper,#mCSB_" + b.idx + "_dragger_vertical,#mCSB_" + b.idx + "_dragger_horizontal").each(function () {
                    p._stopTween.call(this)
                })
            }, _scrollTo: function (b, c, d) {
                function e(a) {
                    return k && m.callbacks[a] && "function" === typeof m.callbacks[a]
                }

                function f() {
                    var a = [y[0].offsetTop, y[0].offsetLeft], c = [D[0].offsetTop, D[0].offsetLeft], e = [y.outerHeight(!1), y.outerWidth(!1)], h = [u.height(), u.width()];
                    b[0].mcs =
                    {
                        content: y,
                        top: a[0],
                        left: a[1],
                        draggerTop: c[0],
                        draggerLeft: c[1],
                        topPct: Math.round(100 * Math.abs(a[0]) / (Math.abs(e[0]) - h[0])),
                        leftPct: Math.round(100 * Math.abs(a[1]) / (Math.abs(e[1]) - h[1])),
                        direction: d.dir
                    }
                }

                var k = b.data("mCS"), m = k.opt;
                d = a.extend({
                    trigger: "internal",
                    dir: "y",
                    scrollEasing: "mcsEaseOut",
                    drag: !1,
                    dur: m.scrollInertia,
                    overwrite: "all",
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0
                }, d);
                var s = [d.dur, d.drag ? 0 : d.dur], u = a("#mCSB_" + k.idx), y = a("#mCSB_" + k.idx + "_container"), r = m.callbacks.onTotalScrollOffset ?
                    p._arr.call(b, m.callbacks.onTotalScrollOffset) : [0, 0], J = m.callbacks.onTotalScrollBackOffset ? p._arr.call(b, m.callbacks.onTotalScrollBackOffset) : [0, 0];
                k.trigger = d.trigger;
                m.snapAmount && (c = p._snapAmount(c, m.snapAmount, m.snapOffset));
                switch (d.dir) {
                    case "x":
                        var D = a("#mCSB_" + k.idx + "_dragger_horizontal"), x = "left", G = y[0].offsetLeft, w = [u.width() - y.outerWidth(!1), D.parent().width() - D.width()], z = [c, c / k.scrollRatio.x], H = r[1], K = J[1], O = 0 < H ? H / k.scrollRatio.x : 0, I = 0 < K ? K / k.scrollRatio.x : 0;
                        break;
                    case "y":
                        D = a("#mCSB_" +
                            k.idx + "_dragger_vertical"), x = "top", G = y[0].offsetTop, w = [u.height() - y.outerHeight(!1), D.parent().height() - D.height()], z = [c, c / k.scrollRatio.y], H = r[0], K = J[0], O = 0 < H ? H / k.scrollRatio.y : 0, I = 0 < K ? K / k.scrollRatio.y : 0
                }
                0 > z[1] ? z = [0, 0] : z[1] >= w[1] ? z = [w[0], w[1]] : z[0] = -z[0];
                clearTimeout(y[0].onCompleteTimeout);
                if (k.tweenRunning || !(0 === G && 0 <= z[0] || G === w[0] && z[0] <= w[0]))p._tweenTo.call(null, D[0], x, Math.round(z[1]), s[1], d.scrollEasing), p._tweenTo.call(null, y[0], x, Math.round(z[0]), s[0], d.scrollEasing, d.overwrite, {
                    onStart: function () {
                        d.callbacks &&
                        d.onStart && !k.tweenRunning && (e("onScrollStart") && (f(), m.callbacks.onScrollStart.call(b[0])), k.tweenRunning = !0, p._onDragClasses(D), k.cbOffsets = [m.callbacks.alwaysTriggerOffsets || G >= w[0] + H, m.callbacks.alwaysTriggerOffsets || G <= -K])
                    }, onUpdate: function () {
                        d.callbacks && d.onUpdate && e("whileScrolling") && (f(), m.callbacks.whileScrolling.call(b[0]))
                    }, onComplete: function () {
                        d.callbacks && d.onComplete && ("yx" === m.axis && clearTimeout(y[0].onCompleteTimeout), y[0].onCompleteTimeout = setTimeout(function () {
                            e("onScroll") &&
                            (f(), m.callbacks.onScroll.call(b[0]));
                            e("onTotalScroll") && z[1] >= w[1] - O && k.cbOffsets[0] && (f(), m.callbacks.onTotalScroll.call(b[0]));
                            e("onTotalScrollBack") && z[1] <= I && k.cbOffsets[1] && (f(), m.callbacks.onTotalScrollBack.call(b[0]));
                            k.tweenRunning = !1;
                            y[0].idleTimer = 0;
                            p._onDragClasses(D, "hide")
                        }, y[0].idleTimer || 0))
                    }
                })
            }, _tweenTo: function (a, b, c, e, f, k, m) {
                function s() {
                    a._mcsstop || (w || r.call(), w = p._getTime() - x, u(), w >= a._mcstime && (a._mcstime = w > a._mcstime ? w + G - (w - a._mcstime) : w + G - 1, a._mcstime < w + 1 && (a._mcstime = w +
                        1)), a._mcstime < e ? a._mcsid = _request(s) : D.call())
                }

                function u() {
                    0 < e ? (a._mcscurrVal = y(a._mcstime, z, K, e, f), H[b] = Math.round(a._mcscurrVal) + "px") : H[b] = c + "px";
                    J.call()
                }

                function y(a, b, c, d, e) {
                    switch (e) {
                        case "linear":
                        case "mcsLinear":
                            return c * a / d + b;
                        case "mcsLinearOut":
                            return a /= d, a--, c * Math.sqrt(1 - a * a) + b;
                        case "easeInOutSmooth":
                            a /= d / 2;
                            if (1 > a)return c / 2 * a * a + b;
                            a--;
                            return -c / 2 * (a * (a - 2) - 1) + b;
                        case "easeInOutStrong":
                            a /= d / 2;
                            if (1 > a)return c / 2 * Math.pow(2, 10 * (a - 1)) + b;
                            a--;
                            return c / 2 * (-Math.pow(2, -10 * a) + 2) + b;
                        case "easeInOut":
                        case "mcsEaseInOut":
                            a /=
                                d / 2;
                            if (1 > a)return c / 2 * a * a * a + b;
                            a -= 2;
                            return c / 2 * (a * a * a + 2) + b;
                        case "easeOutSmooth":
                            return a /= d, a--, -c * (a * a * a * a - 1) + b;
                        case "easeOutStrong":
                            return c * (-Math.pow(2, -10 * a / d) + 1) + b;
                        default:
                            return d = (a /= d) * a, e = d * a, b + c * (0.499999999999997 * e * d + -2.5 * d * d + 5.5 * e + -6.5 * d + 4 * a)
                    }
                }

                m = m || {};
                var r = m.onStart || function () {
                    }, J = m.onUpdate || function () {
                    }, D = m.onComplete || function () {
                    }, x = p._getTime(), G, w = 0, z = a.offsetTop, H = a.style;
                "left" === b && (z = a.offsetLeft);
                var K = c - z;
                a._mcsstop = 0;
                "none" !== k && null != a._mcsid && (d.requestAnimationFrame ? d.cancelAnimationFrame(a._mcsid) :
                    clearTimeout(a._mcsid), a._mcsid = null);
                (function () {
                    G = 1E3 / 60;
                    a._mcstime = w + G;
                    _request = d.requestAnimationFrame ? d.requestAnimationFrame : function (a) {
                        u();
                        return setTimeout(a, 0.01)
                    };
                    a._mcsid = _request(s)
                })()
            }, _getTime: function () {
                return d.performance && d.performance.now ? d.performance.now() : d.performance && d.performance.webkitNow ? d.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            }, _stopTween: function () {
                null != this._mcsid && (d.requestAnimationFrame ? d.cancelAnimationFrame(this._mcsid) : clearTimeout(this._mcsid),
                    this._mcsid = null, this._mcsstop = 1)
            }, _delete: function (a) {
                delete a
            }, _mouseBtnLeft: function (a) {
                return !(a.which && 1 !== a.which)
            }, _pointerTouch: function (a) {
                a = a.originalEvent.pointerType;
                return !(a && "touch" !== a && 2 !== a)
            }, _isNumeric: function (a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            }
        };
        a.fn.mCustomScrollbar = function (b) {
            if (x[b])return x[b].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" !== typeof b && b)a.error("Method " + b + " does not exist"); else return x.init.apply(this, arguments)
        };
        a.mCustomScrollbar =
            function (b) {
                if (x[b])return x[b].apply(this, Array.prototype.slice.call(arguments, 1));
                if ("object" !== typeof b && b)a.error("Method " + b + " does not exist"); else return x.init.apply(this, arguments)
            };
        a.mCustomScrollbar.defaults = b;
        d.mCustomScrollbar = !0;
        a(d).load(function () {
            a(".mCustomScrollbar").mCustomScrollbar()
        })
    })
})(window, document);
!function (d) {
    var c = function (b, a) {
        this.$form = d(b);
        this.options = d.extend({}, d.fn.bootstrapValidator.DEFAULT_OPTIONS, a);
        this.$invalidFields = d([]);
        this.$hiddenButton = this.$submitButton = null;
        this.STATUS_NOT_VALIDATED = "NOT_VALIDATED";
        this.STATUS_VALIDATING = "VALIDATING";
        this.STATUS_INVALID = "INVALID";
        this.STATUS_VALID = "VALID";
        var c;
        c = 3;
        for (var f = document.createElement("div"), k = f.all || []; f.innerHTML = "\x3c!--[if gt IE " + ++c + "]><br><![endif]--\x3e", k[0];);
        c = 4 < c ? c : !c;
        f = document.createElement("div");
        this._changeEvent =
            9 !== c && "oninput"in f ? "input" : "keyup";
        this._submitIfValid = null;
        this._cacheFields = {};
        this._init()
    };
    c.prototype = {
        constructor: c, _init: function () {
            var b = this, a = {
                excluded: this.$form.attr("data-bv-excluded"),
                trigger: this.$form.attr("data-bv-trigger"),
                message: this.$form.attr("data-bv-message"),
                container: this.$form.attr("data-bv-container"),
                group: this.$form.attr("data-bv-group"),
                submitButtons: this.$form.attr("data-bv-submitbuttons"),
                threshold: this.$form.attr("data-bv-threshold"),
                live: this.$form.attr("data-bv-live"),
                onSuccess: this.$form.attr("data-bv-onsuccess"),
                onError: this.$form.attr("data-bv-onerror"),
                fields: {},
                feedbackIcons: {
                    valid: this.$form.attr("data-bv-feedbackicons-valid"),
                    invalid: this.$form.attr("data-bv-feedbackicons-invalid"),
                    validating: this.$form.attr("data-bv-feedbackicons-validating")
                },
                events: {
                    formInit: this.$form.attr("data-bv-events-form-init"),
                    formError: this.$form.attr("data-bv-events-form-error"),
                    formSuccess: this.$form.attr("data-bv-events-form-success"),
                    fieldAdded: this.$form.attr("data-bv-events-field-added"),
                    fieldRemoved: this.$form.attr("data-bv-events-field-removed"),
                    fieldInit: this.$form.attr("data-bv-events-field-init"),
                    fieldError: this.$form.attr("data-bv-events-field-error"),
                    fieldSuccess: this.$form.attr("data-bv-events-field-success"),
                    fieldStatus: this.$form.attr("data-bv-events-field-status"),
                    validatorError: this.$form.attr("data-bv-events-validator-error"),
                    validatorSuccess: this.$form.attr("data-bv-events-validator-success")
                }
            };
            this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit.bv",
                function (a) {
                    a.preventDefault();
                    b.validate()
                }).on("click.bv", this.options.submitButtons, function () {
                    b.$submitButton = d(this);
                    b._submitIfValid = !0
                }).find("[name], [data-bv-field]").each(function () {
                    var c = d(this), e = c.attr("name") || c.attr("data-bv-field"), m = b._parseOptions(c);
                    m && (c.attr("data-bv-field", e), a.fields[e] = d.extend({}, m, a.fields[e]))
                });
            this.options = d.extend(!0, this.options, a);
            this.$hiddenButton = d("<button/>").attr("type", "submit").prependTo(this.$form).addClass("bv-hidden-submit").css({
                display: "none",
                width: 0, height: 0
            });
            this.$form.on("click.bv", '[type="submit"]', function (a) {
                a = d(a.target).eq(0);
                !b.options.submitButtons || a.is(b.options.submitButtons) || a.is(b.$hiddenButton) || b.$form.off("submit.bv").submit()
            });
            for (var c in this.options.fields)this._initField(c);
            this.$form.trigger(d.Event(this.options.events.formInit), {bv: this, options: this.options});
            this.options.onSuccess && this.$form.on(this.options.events.formSuccess, function (a) {
                d.fn.bootstrapValidator.helpers.call(b.options.onSuccess, [a])
            });
            this.options.onError &&
            this.$form.on(this.options.events.formError, function (a) {
                d.fn.bootstrapValidator.helpers.call(b.options.onError, [a])
            })
        }, _parseOptions: function (b) {
            var a, c, f, k, m, s, u, x = b.attr("name") || b.attr("data-bv-field"), p = {};
            for (c in d.fn.bootstrapValidator.validators)if (a = d.fn.bootstrapValidator.validators[c], f = b.attr("data-bv-" + c.toLowerCase()) + "", u = "function" == typeof a.enableByHtml5 ? a.enableByHtml5(b) : null, u && "false" !== f || !0 !== u && ("" === f || "true" === f))for (s in a.html5Attributes = d.extend({}, {
                message: "message",
                onerror: "onError", onsuccess: "onSuccess"
            }, a.html5Attributes), p[c] = d.extend({}, !0 === u ? {} : u, p[c]), a.html5Attributes)k = a.html5Attributes[s], (m = b.attr("data-bv-" + c.toLowerCase() + "-" + s)) && ("true" === m ? m = !0 : "false" === m && (m = !1), p[c][k] = m);
            b = {
                excluded: b.attr("data-bv-excluded"),
                feedbackIcons: b.attr("data-bv-feedbackicons"),
                trigger: b.attr("data-bv-trigger"),
                message: b.attr("data-bv-message"),
                container: b.attr("data-bv-container"),
                group: b.attr("data-bv-group"),
                selector: b.attr("data-bv-selector"),
                threshold: b.attr("data-bv-threshold"),
                onStatus: b.attr("data-bv-onstatus"),
                onSuccess: b.attr("data-bv-onsuccess"),
                onError: b.attr("data-bv-onerror"),
                validators: p
            };
            a = d.isEmptyObject(b);
            return !d.isEmptyObject(p) || !a && this.options.fields && this.options.fields[x] ? (b.validators = p, b) : null
        }, _initField: function (b) {
            var a = d([]);
            switch (typeof b) {
                case "object":
                    a = b;
                    b = b.attr("data-bv-field");
                    break;
                case "string":
                    a = this.getFieldElements(b), a.attr("data-bv-field", b)
            }
            if (null !== this.options.fields[b] && null !== this.options.fields[b].validators) {
                if (0 === a.length)return void delete this.options.fields[b];
                for (var c in this.options.fields[b].validators)d.fn.bootstrapValidator.validators[c] || delete this.options.fields[b].validators[c];
                null === this.options.fields[b].enabled && (this.options.fields[b].enabled = !0);
                for (var f = this, k = a.length, m = a.attr("type"), s = 1 === k || "radio" === m || "checkbox" === m, u = "radio" === m || "checkbox" === m || "file" === m || "SELECT" === a.eq(0).get(0).tagName ? "change" : this._changeEvent, u = (this.options.fields[b].trigger || this.options.trigger || u).split(" "), x = d.map(u, function (a) {
                        return a + ".update.bv"
                    }).join(" "),
                         p = 0; k > p; p++) {
                    var q = a.eq(p), t = this.options.fields[b].group || this.options.group, B = q.parents(t), h = this.options.fields[b].container || this.options.container, t = h && "tooltip" !== h && "popover" !== h ? d(h) : this._getMessageContainer(q, t);
                    h && "tooltip" !== h && "popover" !== h && t.addClass("has-error");
                    t.find('.help-block[data-bv-validator][data-bv-for="' + b + '"]').remove();
                    B.find('i[data-bv-icon-for="' + b + '"]').remove();
                    q.off(x).on(x, function () {
                        f.updateStatus(d(this), f.STATUS_NOT_VALIDATED)
                    });
                    q.data("bv.messages", t);
                    for (c in this.options.fields[b].validators)q.data("bv.result." +
                        c, this.STATUS_NOT_VALIDATED), s && p !== k - 1 || d("<small/>").css("display", "none").addClass("help-block").attr("data-bv-validator", c).attr("data-bv-for", b).attr("data-bv-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(b, c)).appendTo(t), this.options.fields[b].validators[c].onSuccess && q.on(this.options.events.validatorSuccess, function (a, h) {
                        d.fn.bootstrapValidator.helpers.call(f.options.fields[b].validators[c].onSuccess, [a, h])
                    }), this.options.fields[b].validators[c].onError && q.on(this.options.events.validatorError,
                        function (a, h) {
                            d.fn.bootstrapValidator.helpers.call(f.options.fields[b].validators[c].onError, [a, h])
                        });
                    if (!1 !== this.options.fields[b].feedbackIcons && "false" !== this.options.fields[b].feedbackIcons && this.options.feedbackIcons && this.options.feedbackIcons.validating && this.options.feedbackIcons.invalid && this.options.feedbackIcons.valid && (!s || p === k - 1)) {
                        B.removeClass("has-success").removeClass("has-error").addClass("has-feedback");
                        h = d("<i/>").css("display", "none").addClass("form-control-feedback").attr("data-bv-icon-for",
                            b).insertAfter(q);
                        if ("checkbox" === m || "radio" === m)q = q.parent(), q.hasClass(m) ? h.insertAfter(q) : q.parent().hasClass(m) && h.insertAfter(q.parent());
                        0 === B.find("label").length && h.css("top", 0);
                        0 !== B.find(".input-group").length && h.css({
                            top: 0,
                            "z-index": 100
                        }).insertAfter(B.find(".input-group").eq(0))
                    }
                }
                switch (this.options.fields[b].onSuccess && a.on(this.options.events.fieldSuccess, function (a, c) {
                    d.fn.bootstrapValidator.helpers.call(f.options.fields[b].onSuccess, [a, c])
                }), this.options.fields[b].onError && a.on(this.options.events.fieldError,
                    function (a, c) {
                        d.fn.bootstrapValidator.helpers.call(f.options.fields[b].onError, [a, c])
                    }), this.options.fields[b].onStatus && a.on(this.options.events.fieldStatus, function (a, c) {
                    d.fn.bootstrapValidator.helpers.call(f.options.fields[b].onStatus, [a, c])
                }), x = d.map(u, function (a) {
                    return a + ".live.bv"
                }).join(" "), this.options.live) {
                    case "submitted":
                        break;
                    case "disabled":
                        a.off(x);
                        break;
                    default:
                        a.off(x).on(x, function () {
                            f._exceedThreshold(d(this)) && f.validateField(d(this))
                        })
                }
                a.trigger(d.Event(this.options.events.fieldInit),
                    {bv: this, field: b, element: a})
            }
        }, _getMessage: function (b, a) {
            if (!(this.options.fields[b] && d.fn.bootstrapValidator.validators[a] && this.options.fields[b].validators && this.options.fields[b].validators[a]))return "";
            var c = this.options.fields[b].validators[a];
            switch (!0) {
                case !!c.message:
                    return c.message;
                case !!this.options.fields[b].message:
                    return this.options.fields[b].message;
                case !!d.fn.bootstrapValidator.i18n[a]:
                    return d.fn.bootstrapValidator.i18n[a]["default"];
                default:
                    return this.options.message
            }
        }, _getMessageContainer: function (b,
                                           a) {
            var c = b.parent();
            if (c.is(a))return c;
            var d = c.attr("class");
            if (!d)return this._getMessageContainer(c, a);
            for (var d = d.split(" "), k = d.length, m = 0; k > m; m++)if (/^col-(xs|sm|md|lg)-\d+$/.test(d[m]) || /^col-(xs|sm|md|lg)-offset-\d+$/.test(d[m]))return c;
            return this._getMessageContainer(c, a)
        }, _submit: function () {
            var b = this.isValid(), a = d.Event(b ? this.options.events.formSuccess : this.options.events.formError);
            this.$form.trigger(a);
            this.$submitButton && (b ? this._onSuccess(a) : this._onError(a))
        }, _isExcluded: function (b) {
            var a =
                b.attr("data-bv-excluded"), c = b.attr("data-bv-field") || b.attr("name");
            switch (!0) {
                case !!c && this.options.fields && this.options.fields[c] && ("true" === this.options.fields[c].excluded || !0 === this.options.fields[c].excluded):
                case "true" === a:
                case "" === a:
                    return !0;
                case !!c && this.options.fields && this.options.fields[c] && ("false" === this.options.fields[c].excluded || !1 === this.options.fields[c].excluded):
                case "false" === a:
                    return !1;
                default:
                    if (this.options.excluded)for ("string" == typeof this.options.excluded && (this.options.excluded =
                        d.map(this.options.excluded.split(","), function (a) {
                            return d.trim(a)
                        })), a = this.options.excluded.length, c = 0; a > c; c++)if ("string" == typeof this.options.excluded[c] && b.is(this.options.excluded[c]) || "function" == typeof this.options.excluded[c] && !0 === this.options.excluded[c].call(this, b, this))return !0;
                    return !1
            }
        }, _exceedThreshold: function (b) {
            var a = b.attr("data-bv-field");
            return (a = this.options.fields[a].threshold || this.options.threshold) ? -1 !== d.inArray(b.attr("type"), "button checkbox file hidden image radio reset submit".split(" ")) ||
            b.val().length >= a : !0
        }, _onError: function (b) {
            if (!b.isDefaultPrevented()) {
                if ("submitted" === this.options.live) {
                    this.options.live = "enabled";
                    var a = this, c;
                    for (c in this.options.fields)!function (b) {
                        b = a.getFieldElements(b);
                        if (b.length) {
                            var f = d(b[0]).attr("type"), f = "radio" === f || "checkbox" === f || "file" === f || "SELECT" === d(b[0]).get(0).tagName ? "change" : a._changeEvent, f = d.map((a.options.fields[c].trigger || a.options.trigger || f).split(" "), function (a) {
                                return a + ".live.bv"
                            }).join(" ");
                            b.off(f).on(f, function () {
                                a._exceedThreshold(d(this)) &&
                                a.validateField(d(this))
                            })
                        }
                    }(c)
                }
                if (b = this.$invalidFields.eq(0)) {
                    var f, k = b.parents(".tab-pane");
                    k && (f = k.attr("id")) && d('a[href="#' + f + '"][data-toggle="tab"]').tab("show");
                    b.focus()
                }
            }
        }, _onSuccess: function (b) {
            b.isDefaultPrevented() || this.disableSubmitButtons(!0).defaultSubmit()
        }, _onFieldValidated: function (b, a) {
            var c = b.attr("data-bv-field"), f = this.options.fields[c].validators, k = {}, m = 0, c = {
                bv: this,
                field: c,
                element: b,
                validator: a
            };
            if (a)switch (b.data("bv.result." + a)) {
                case this.STATUS_INVALID:
                    b.trigger(d.Event(this.options.events.validatorError),
                        c);
                    break;
                case this.STATUS_VALID:
                    b.trigger(d.Event(this.options.events.validatorSuccess), c)
            }
            k[this.STATUS_NOT_VALIDATED] = 0;
            k[this.STATUS_VALIDATING] = 0;
            k[this.STATUS_INVALID] = 0;
            k[this.STATUS_VALID] = 0;
            for (var s in f)if (!1 !== f[s].enabled) {
                m++;
                var u = b.data("bv.result." + s);
                u && k[u]++
            }
            k[this.STATUS_VALID] === m ? (this.$invalidFields = this.$invalidFields.not(b), b.trigger(d.Event(this.options.events.fieldSuccess), c)) : 0 === k[this.STATUS_NOT_VALIDATED] && 0 === k[this.STATUS_VALIDATING] && 0 < k[this.STATUS_INVALID] && (this.$invalidFields =
                this.$invalidFields.add(b), b.trigger(d.Event(this.options.events.fieldError), c))
        }, getFieldElements: function (b) {
            return this._cacheFields[b] || (this._cacheFields[b] = this.options.fields[b] && this.options.fields[b].selector ? d(this.options.fields[b].selector) : this.$form.find('[name="' + b + '"]')), this._cacheFields[b]
        }, disableSubmitButtons: function (b) {
            return b ? "disabled" !== this.options.live && this.$form.find(this.options.submitButtons).attr("disabled", "disabled") : this.$form.find(this.options.submitButtons).removeAttr("disabled"),
                this
        }, validate: function () {
            if (!this.options.fields)return this;
            this.disableSubmitButtons(!0);
            for (var b in this.options.fields)this.validateField(b);
            return this._submit(), this
        }, validateField: function (b) {
            var a = d([]);
            switch (typeof b) {
                case "object":
                    a = b;
                    b = b.attr("data-bv-field");
                    break;
                case "string":
                    a = this.getFieldElements(b)
            }
            if (this.options.fields[b] && !1 === this.options.fields[b].enabled)return this;
            for (var c, f, k = this, m = a.attr("type"), s = "radio" === m || "checkbox" === m ? 1 : a.length, u = "radio" === m || "checkbox" ===
                m, m = this.options.fields[b].validators, x = 0; s > x; x++) {
                var p = a.eq(x);
                if (!this._isExcluded(p))for (c in m) {
                    p.data("bv.dfs." + c) && p.data("bv.dfs." + c).reject();
                    var q = p.data("bv.result." + c);
                    q !== this.STATUS_VALID && q !== this.STATUS_INVALID && !1 !== m[c].enabled ? (p.data("bv.result." + c, this.STATUS_VALIDATING), f = d.fn.bootstrapValidator.validators[c].validate(this, p, m[c]), "object" == typeof f && f.resolve ? (this.updateStatus(u ? b : p, this.STATUS_VALIDATING, c), p.data("bv.dfs." + c, f), f.done(function (a, b, c, d) {
                        a.removeData("bv.dfs." +
                            b);
                        d && k.updateMessage(a, b, d);
                        k.updateStatus(u ? a.attr("data-bv-field") : a, c ? k.STATUS_VALID : k.STATUS_INVALID, b);
                        c && !0 === k._submitIfValid && k._submit()
                    })) : "object" == typeof f && void 0 !== f.valid && void 0 !== f.message ? (this.updateMessage(u ? b : p, c, f.message), this.updateStatus(u ? b : p, f.valid ? this.STATUS_VALID : this.STATUS_INVALID, c)) : "boolean" == typeof f && this.updateStatus(u ? b : p, f ? this.STATUS_VALID : this.STATUS_INVALID, c)) : this._onFieldValidated(p, c)
                }
            }
            return this
        }, updateMessage: function (b, a, c) {
            var f = d([]);
            switch (typeof b) {
                case "object":
                    f =
                        b;
                    b = b.attr("data-bv-field");
                    break;
                case "string":
                    f = this.getFieldElements(b)
            }
            f.each(function () {
                d(this).data("bv.messages").find('.help-block[data-bv-validator="' + a + '"][data-bv-for="' + b + '"]').html(c)
            })
        }, updateStatus: function (b, a, c) {
            var f = d([]);
            switch (typeof b) {
                case "object":
                    f = b;
                    b = b.attr("data-bv-field");
                    break;
                case "string":
                    f = this.getFieldElements(b)
            }
            a === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1);
            for (var k = f.attr("type"), m = this.options.fields[b].group || this.options.group, k = "radio" === k || "checkbox" ===
            k ? 1 : f.length, s = 0; k > s; s++) {
                var u = f.eq(s);
                if (!this._isExcluded(u)) {
                    var x = u.parents(m), p = u.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + b + '"]'), q = c ? p.filter('[data-bv-validator="' + c + '"]') : p, t = x.find('.form-control-feedback[data-bv-icon-for="' + b + '"]'), B = this.options.fields[b].container || this.options.container, h = null;
                    if (c)u.data("bv.result." + c, a); else for (var n in this.options.fields[b].validators)u.data("bv.result." + n, a);
                    q.attr("data-bv-result", a);
                    var v, L, N = u.parents(".tab-pane");
                    switch (N && (v = N.attr("id")) && (L = d('a[href="#' + v + '"][data-toggle="tab"]').parent()), a) {
                        case this.STATUS_VALIDATING:
                            h = null;
                            this.disableSubmitButtons(!0);
                            x.removeClass("has-success").removeClass("has-error");
                            t && t.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show();
                            L && L.removeClass("bv-tab-success").removeClass("bv-tab-error");
                            break;
                        case this.STATUS_INVALID:
                            h = !1;
                            this.disableSubmitButtons(!0);
                            x.removeClass("has-success").addClass("has-error");
                            t && t.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show();
                            L && L.removeClass("bv-tab-success").addClass("bv-tab-error");
                            break;
                        case this.STATUS_VALID:
                            h = 0 === p.filter('[data-bv-result="' + this.STATUS_NOT_VALIDATED + '"]').length ? p.filter('[data-bv-result="' + this.STATUS_VALID + '"]').length === p.length : null;
                            null !== h && (this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !h), t && t.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(h ?
                                this.options.feedbackIcons.valid : this.options.feedbackIcons.invalid).show());
                            x.removeClass("has-error has-success").addClass(this.isValidContainer(x) ? "has-success" : "has-error");
                            L && L.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(N) ? "bv-tab-success" : "bv-tab-error");
                            break;
                        default:
                            h = null, this.disableSubmitButtons(!1), x.removeClass("has-success").removeClass("has-error"), t && t.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(),
                            L && L.removeClass("bv-tab-success").removeClass("bv-tab-error")
                    }
                    switch (!0) {
                        case t && "tooltip" === B:
                            !1 === h ? t.css("cursor", "pointer").tooltip("destroy").tooltip({
                                html: !0,
                                placement: "top",
                                title: p.filter('[data-bv-result="' + this.STATUS_INVALID + '"]').eq(0).html()
                            }) : t.css("cursor", "").tooltip("destroy");
                            break;
                        case t && "popover" === B:
                            !1 === h ? t.css("cursor", "pointer").popover("destroy").popover({
                                content: p.filter('[data-bv-result="' + this.STATUS_INVALID + '"]').eq(0).html(),
                                html: !0,
                                placement: "top",
                                trigger: "hover click"
                            }) :
                                t.css("cursor", "").popover("destroy");
                            break;
                        default:
                            a === this.STATUS_INVALID ? q.show() : q.hide()
                    }
                    u.trigger(d.Event(this.options.events.fieldStatus), {bv: this, field: b, element: u, status: a});
                    this._onFieldValidated(u, c)
                }
            }
            return this
        }, isValid: function () {
            for (var b in this.options.fields)if (!this.isValidField(b))return !1;
            return !0
        }, isValidField: function (b) {
            var a = d([]);
            switch (typeof b) {
                case "object":
                    a = b;
                    b = b.attr("data-bv-field");
                    break;
                case "string":
                    a = this.getFieldElements(b)
            }
            if (0 === a.length || null === this.options.fields[b] ||
                !1 === this.options.fields[b].enabled)return !0;
            for (var c, f, k, m = a.attr("type"), m = "radio" === m || "checkbox" === m ? 1 : a.length, s = 0; m > s; s++)if (c = a.eq(s), !this._isExcluded(c))for (f in this.options.fields[b].validators)if (!1 !== this.options.fields[b].validators[f].enabled && (k = c.data("bv.result." + f), k !== this.STATUS_VALID))return !1;
            return !0
        }, isValidContainer: function (b) {
            var a = this, c = {};
            b = "string" == typeof b ? d(b) : b;
            if (0 === b.length)return !0;
            b.find("[data-bv-field]").each(function () {
                var b = d(this), f = b.attr("data-bv-field");
                a._isExcluded(b) || c[f] || (c[f] = b)
            });
            for (var f in c) {
                var k = c[f];
                if (0 !== k.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + f + '"]').filter(function () {
                        var b = d(this).attr("data-bv-validator"), c = d(this).attr("data-bv-for");
                        return !1 !== a.options.fields[c].validators[b].enabled && k.data("bv.result." + b) && k.data("bv.result." + b) !== a.STATUS_VALID
                    }).length)return !1
            }
            return !0
        }, defaultSubmit: function () {
            this.$submitButton && d("<input/>").attr("type", "hidden").attr("data-bv-submit-hidden", "").attr("name",
                this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form);
            this.$form.off("submit.bv").submit()
        }, getInvalidFields: function () {
            return this.$invalidFields
        }, getSubmitButton: function () {
            return this.$submitButton
        }, getMessages: function (b, a) {
            var c = this, f = [], k = d([]);
            switch (!0) {
                case b && "object" == typeof b:
                    k = b;
                    break;
                case b && "string" == typeof b:
                    var m = this.getFieldElements(b);
                    0 < m.length && (k = m.attr("type"), k = "radio" === k || "checkbox" === k ? m.eq(0) : m);
                    break;
                default:
                    k = this.$invalidFields
            }
            var s =
                a ? '[data-bv-validator="' + a + '"]' : "";
            return k.each(function () {
                f = f.concat(d(this).data("bv.messages").find('.help-block[data-bv-for="' + d(this).attr("data-bv-field") + '"][data-bv-result="' + c.STATUS_INVALID + '"]' + s).map(function () {
                    var a = d(this).attr("data-bv-validator"), b = d(this).attr("data-bv-for");
                    return !1 === c.options.fields[b].validators[a].enabled ? "" : d(this).html()
                }).get())
            }), f
        }, getOptions: function (b, a, c) {
            if (!b)return this.options;
            if ("object" == typeof b && (b = b.attr("data-bv-field")), !this.options.fields[b])return null;
            b = this.options.fields[b];
            return a ? b.validators && b.validators[a] ? c ? b.validators[a][c] : b.validators[a] : null : b
        }, updateOption: function (b, a, c, d) {
            return "object" == typeof b && (b = b.attr("data-bv-field")), this.options.fields[b] && this.options.fields[b].validators[a] && (this.options.fields[b].validators[a][c] = d, this.updateStatus(b, this.STATUS_NOT_VALIDATED, a)), this
        }, addField: function (b, a) {
            var c = d([]);
            switch (typeof b) {
                case "object":
                    c = b;
                    b = b.attr("data-bv-field") || b.attr("name");
                    break;
                case "string":
                    delete this._cacheFields[b],
                        c = this.getFieldElements(b)
            }
            c.attr("data-bv-field", b);
            for (var f = c.attr("type"), k = "radio" === f || "checkbox" === f ? 1 : c.length, m = 0; k > m; m++) {
                var s = c.eq(m), u = this._parseOptions(s), u = null === u ? a : d.extend(!0, a, u);
                this.options.fields[b] = d.extend(!0, this.options.fields[b], u);
                this._cacheFields[b] = this._cacheFields[b] ? this._cacheFields[b].add(s) : s;
                this._initField("checkbox" === f || "radio" === f ? b : s)
            }
            return this.disableSubmitButtons(!1), this.$form.trigger(d.Event(this.options.events.fieldAdded), {
                field: b,
                element: c,
                options: this.options.fields[b]
            }),
                this
        }, removeField: function (b) {
            var a = d([]);
            switch (typeof b) {
                case "object":
                    a = b;
                    b = b.attr("data-bv-field") || b.attr("name");
                    a.attr("data-bv-field", b);
                    break;
                case "string":
                    a = this.getFieldElements(b)
            }
            if (0 === a.length)return this;
            for (var c = a.attr("type"), f = "radio" === c || "checkbox" === c ? 1 : a.length, k = 0; f > k; k++) {
                var m = a.eq(k);
                this.$invalidFields = this.$invalidFields.not(m);
                this._cacheFields[b] = this._cacheFields[b].not(m)
            }
            return this._cacheFields[b] && 0 !== this._cacheFields[b].length || delete this.options.fields[b],
            ("checkbox" === c || "radio" === c) && this._initField(b), this.disableSubmitButtons(!1), this.$form.trigger(d.Event(this.options.events.fieldRemoved), {
                field: b,
                element: a
            }), this
        }, resetField: function (b, a) {
            var c = d([]);
            switch (typeof b) {
                case "object":
                    c = b;
                    b = b.attr("data-bv-field");
                    break;
                case "string":
                    c = this.getFieldElements(b)
            }
            var f = c.length;
            if (this.options.fields[b])for (var k = 0; f > k; k++)for (var m in this.options.fields[b].validators)c.eq(k).removeData("bv.dfs." + m);
            if (this.updateStatus(b, this.STATUS_NOT_VALIDATED),
                    a)f = c.attr("type"), "radio" === f || "checkbox" === f ? c.removeAttr("checked").removeAttr("selected") : c.val("");
            return this
        }, resetForm: function (b) {
            for (var a in this.options.fields)this.resetField(a, b);
            return this.$invalidFields = d([]), this.$submitButton = null, this.disableSubmitButtons(!1), this
        }, revalidateField: function (b) {
            return this.updateStatus(b, this.STATUS_NOT_VALIDATED).validateField(b), this
        }, enableFieldValidators: function (b, a, c) {
            var d = this.options.fields[b].validators;
            if (c && d && d[c] && d[c].enabled !== a)this.options.fields[b].validators[c].enabled =
                a, this.updateStatus(b, this.STATUS_NOT_VALIDATED, c); else if (!c && this.options.fields[b].enabled !== a) {
                this.options.fields[b].enabled = a;
                for (var k in d)this.enableFieldValidators(b, a, k)
            }
            return this
        }, getDynamicOption: function (b, a) {
            var c = "string" == typeof b ? this.getFieldElements(b) : b, f = c.val();
            if ("function" == typeof a)return d.fn.bootstrapValidator.helpers.call(a, [f, this, c]);
            if ("string" == typeof a) {
                var k = this.getFieldElements(a);
                return k.length ? k.val() : d.fn.bootstrapValidator.helpers.call(a, [f, this, c]) || a
            }
            return null
        },
        destroy: function () {
            var b, a, c, d, k, m, s;
            for (b in this.options.fields) {
                a = this.getFieldElements(b);
                m = this.options.fields[b].container || this.options.container;
                s = this.options.fields[b].group || this.options.group;
                for (var u = 0; u < a.length; u++) {
                    if (c = a.eq(u), c.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + b + '"]').remove().end().end().removeData("bv.messages").parents(s).removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"), k = c.parents(s).find('i[data-bv-icon-for="' +
                            b + '"]'))switch (m) {
                        case "tooltip":
                            k.tooltip("destroy").remove();
                            break;
                        case "popover":
                            k.popover("destroy").remove();
                            break;
                        default:
                            k.remove()
                    }
                    for (d in this.options.fields[b].validators)c.data("bv.dfs." + d) && c.data("bv.dfs." + d).reject(), c.removeData("bv.result." + d).removeData("bv.dfs." + d)
                }
            }
            this.disableSubmitButtons(!1);
            this.$hiddenButton.remove();
            this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove().end().find('[type="submit"]').off("click.bv")
        }
    };
    d.fn.bootstrapValidator = function (b) {
        var a = arguments;
        return this.each(function () {
            var e = d(this), f = e.data("bootstrapValidator"), k = "object" == typeof b && b;
            f || (f = new c(this, k), e.data("bootstrapValidator", f));
            "string" == typeof b && f[b].apply(f, Array.prototype.slice.call(a, 1))
        })
    };
    d.fn.bootstrapValidator.DEFAULT_OPTIONS = {
        elementClass: "bv-form",
        message: "This value is not valid",
        group: ".form-group",
        container: null,
        threshold: null,
        excluded: [":disabled", ":hidden", ":not(:visible)"],
        feedbackIcons: {
            valid: null, invalid: null,
            validating: null
        },
        submitButtons: '[type="submit"]',
        live: "enabled",
        fields: null,
        events: {
            formInit: "init.form.bv",
            formError: "error.form.bv",
            formSuccess: "success.form.bv",
            fieldAdded: "added.field.bv",
            fieldRemoved: "removed.field.bv",
            fieldInit: "init.field.bv",
            fieldError: "error.field.bv",
            fieldSuccess: "success.field.bv",
            fieldStatus: "status.field.bv",
            validatorError: "error.validator.bv",
            validatorSuccess: "success.validator.bv"
        }
    };
    d.fn.bootstrapValidator.validators = {};
    d.fn.bootstrapValidator.i18n = {};
    d.fn.bootstrapValidator.Constructor =
        c;
    d.fn.bootstrapValidator.helpers = {
        call: function (b, a) {
            if ("function" == typeof b)return b.apply(this, a);
            if ("string" == typeof b) {
                "()" === b.substring(b.length - 2) && (b = b.substring(0, b.length - 2));
                for (var c = b.split("."), d = c.pop(), k = window, m = 0; m < c.length; m++)k = k[c[m]];
                return "undefined" == typeof k[d] ? null : k[d].apply(this, a)
            }
        }, format: function (b, a) {
            d.isArray(a) || (a = [a]);
            for (var c in a)b = b.replace("%s", a[c]);
            return b
        }, date: function (b, a, c, d) {
            if (isNaN(b) || isNaN(a) || isNaN(c) || 2 < c.length || 2 < a.length || 4 < b.length || (c = parseInt(c,
                    10), a = parseInt(a, 10), b = parseInt(b, 10), 1E3 > b || 9999 < b || 0 >= a || 12 < a))return !1;
            var k = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((0 === b % 400 || 0 !== b % 100 && 0 === b % 4) && (k[1] = 29), 0 >= c || c > k[a - 1])return !1;
            if (!0 === d) {
                var m = new Date;
                d = m.getFullYear();
                k = m.getMonth();
                m = m.getDate();
                return d > b || b === d && k > a - 1 || b === d && a - 1 === k && m > c
            }
            return !0
        }, luhn: function (b) {
            for (var a = b.length, c = 0, d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], k = 0; a--;)k += d[c][parseInt(b.charAt(a), 10)], c ^= 1;
            return 0 === k % 10 && 0 < k
        }, mod11And10: function (b) {
            for (var a =
                5, c = b.length, d = 0; c > d; d++)a = (2 * (a || 10) % 11 + parseInt(b.charAt(d), 10)) % 10;
            return 1 === a
        }, mod37And36: function (b, a) {
            a = a || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var c = a.length, d = b.length, k = Math.floor(c / 2), m = 0; d > m; m++)k = (2 * (k || c) % (c + 1) + a.indexOf(b.charAt(m))) % c;
            return 1 === k
        }
    }
}(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.base64 = d.extend(d.fn.bootstrapValidator.i18n.base64 || {}, {"default": "Please enter a valid base 64 encoded"});
    d.fn.bootstrapValidator.validators.base64 = {
        validate: function (c, b) {
            var a = b.val();
            return "" === a ? !0 : /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(a)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.between = d.extend(d.fn.bootstrapValidator.i18n.between || {}, {
        "default": "Please enter a value between %s and %s",
        notInclusive: "Please enter a value between %s and %s strictly"
    });
    d.fn.bootstrapValidator.validators.between = {
        html5Attributes: {message: "message", min: "min", max: "max", inclusive: "inclusive"},
        enableByHtml5: function (c) {
            return "range" === c.attr("type") ? {min: c.attr("min"), max: c.attr("max")} : !1
        },
        validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            if (!d.isNumeric(e))return !1;
            var f = d.isNumeric(a.min) ? a.min : c.getDynamicOption(b, a.min);
            c = d.isNumeric(a.max) ? a.max : c.getDynamicOption(b, a.max);
            return e = parseFloat(e), !0 === a.inclusive || void 0 === a.inclusive ? {
                valid: e >= f && c >= e,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.between["default"], [f, c])
            } : {
                valid: e > f && c > e,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.between.notInclusive, [f, c])
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.callback = d.extend(d.fn.bootstrapValidator.i18n.callback || {}, {"default": "Please enter a valid value"});
    d.fn.bootstrapValidator.validators.callback = {
        html5Attributes: {message: "message", callback: "callback"},
        validate: function (c, b, a) {
            var e = b.val();
            if (a.callback) {
                var f = new d.Deferred;
                c = d.fn.bootstrapValidator.helpers.call(a.callback, [e, c, b]);
                return f.resolve(b, "callback", "boolean" == typeof c ? c : c.valid, "object" == typeof c && c.message ? c.message : null), f
            }
            return !0
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.choice = d.extend(d.fn.bootstrapValidator.i18n.choice || {}, {
        "default": "Please enter a valid value",
        less: "Please choose %s options at minimum",
        more: "Please choose %s options at maximum",
        between: "Please choose %s - %s options"
    });
    d.fn.bootstrapValidator.validators.choice = {
        html5Attributes: {message: "message", min: "min", max: "max"}, validate: function (c, b, a) {
            var e = b.is("select") ? c.getFieldElements(b.attr("data-bv-field")).find("option").filter(":selected").length : c.getFieldElements(b.attr("data-bv-field")).filter(":checked").length,
                f = a.min ? d.isNumeric(a.min) ? a.min : c.getDynamicOption(b, a.min) : null;
            c = a.max ? d.isNumeric(a.max) ? a.max : c.getDynamicOption(b, a.max) : null;
            b = !0;
            var k = a.message || d.fn.bootstrapValidator.i18n.choice["default"];
            switch ((f && e < parseInt(f, 10) || c && e > parseInt(c, 10)) && (b = !1), !0) {
                case !!f && !!c:
                    k = d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.choice.between, [parseInt(f, 10), parseInt(c, 10)]);
                    break;
                case !!f:
                    k = d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.choice.less,
                        parseInt(f, 10));
                    break;
                case !!c:
                    k = d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.choice.more, parseInt(c, 10))
            }
            return {valid: b, message: k}
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.creditCard = d.extend(d.fn.bootstrapValidator.i18n.creditCard || {}, {"default": "Please enter a valid credit card number"});
    d.fn.bootstrapValidator.validators.creditCard = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            if (/[^0-9-\s]+/.test(a) || (a = a.replace(/\D/g, ""), !d.fn.bootstrapValidator.helpers.luhn(a)))return !1;
            var e, f, k = {
                AMERICAN_EXPRESS: {length: [15], prefix: ["34", "37"]},
                DINERS_CLUB: {length: [14], prefix: "300 301 302 303 304 305 36".split(" ")},
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ["54", "55"]
                },
                DISCOVER: {
                    length: [16],
                    prefix: "6011 622126 622127 622128 622129 62213 62214 62215 62216 62217 62218 62219 6222 6223 6224 6225 6226 6227 6228 62290 62291 622920 622921 622922 622923 622924 622925 644 645 646 647 648 649 65".split(" ")
                },
                JCB: {length: [16], prefix: "3528 3529 353 354 355 356 357 358".split(" ")},
                LASER: {length: [16, 17, 18, 19], prefix: ["6304", "6706", "6771", "6709"]},
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: "5018 5020 5038 6304 6759 6761 6762 6763 6764 6765 6766".split(" ")
                },
                MASTERCARD: {length: [16], prefix: ["51", "52", "53", "54", "55"]},
                SOLO: {length: [16, 18, 19], prefix: ["6334", "6767"]},
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: "622126 622127 622128 622129 62213 62214 62215 62216 62217 62218 62219 6222 6223 6224 6225 6226 6227 6228 62290 62291 622920 622921 622922 622923 622924 622925".split(" ")
                },
                VISA: {length: [16], prefix: ["4"]}
            };
            for (e in k)for (f in k[e].prefix)if (a.substr(0, k[e].prefix[f].length) === k[e].prefix[f] && -1 !== d.inArray(a.length, k[e].length))return !0;
            return !1
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.cusip = d.extend(d.fn.bootstrapValidator.i18n.cusip || {}, {"default": "Please enter a valid CUSIP number"});
    d.fn.bootstrapValidator.validators.cusip = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            if (a = a.toUpperCase(), !/^[0-9A-Z]{9}$/.test(a))return !1;
            for (var a = d.map(a.split(""), function (a) {
                var b = a.charCodeAt(0);
                return 65 <= b && 90 >= b ? b - 65 + 10 : a
            }), e = a.length, f = 0, k = 0; e - 1 > k; k++) {
                var m = parseInt(a[k], 10);
                0 !== k % 2 && (m *= 2);
                9 < m && (m -= 9);
                f += m
            }
            return f = (10 - f % 10) % 10,
            f === a[e - 1]
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.cvv = d.extend(d.fn.bootstrapValidator.i18n.cvv || {}, {"default": "Please enter a valid CVV number"});
    d.fn.bootstrapValidator.validators.cvv = {
        html5Attributes: {message: "message", ccfield: "creditCardField"}, validate: function (c, b, a) {
            b = b.val();
            if ("" === b)return !0;
            if (!/^[0-9]{3,4}$/.test(b))return !1;
            if (!a.creditCardField)return !0;
            c = c.getFieldElements(a.creditCardField).val();
            if ("" === c)return !0;
            c = c.replace(/\D/g, "");
            var e, f;
            a = {
                AMERICAN_EXPRESS: {
                    length: [15], prefix: ["34",
                        "37"]
                },
                DINERS_CLUB: {length: [14], prefix: "300 301 302 303 304 305 36".split(" ")},
                DINERS_CLUB_US: {length: [16], prefix: ["54", "55"]},
                DISCOVER: {
                    length: [16],
                    prefix: "6011 622126 622127 622128 622129 62213 62214 62215 62216 62217 62218 62219 6222 6223 6224 6225 6226 6227 6228 62290 62291 622920 622921 622922 622923 622924 622925 644 645 646 647 648 649 65".split(" ")
                },
                JCB: {length: [16], prefix: "3528 3529 353 354 355 356 357 358".split(" ")},
                LASER: {length: [16, 17, 18, 19], prefix: ["6304", "6706", "6771", "6709"]},
                MAESTRO: {
                    length: [12,
                        13, 14, 15, 16, 17, 18, 19],
                    prefix: "5018 5020 5038 6304 6759 6761 6762 6763 6764 6765 6766".split(" ")
                },
                MASTERCARD: {length: [16], prefix: ["51", "52", "53", "54", "55"]},
                SOLO: {length: [16, 18, 19], prefix: ["6334", "6767"]},
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: "622126 622127 622128 622129 62213 62214 62215 62216 62217 62218 62219 6222 6223 6224 6225 6226 6227 6228 62290 62291 622920 622921 622922 622923 622924 622925".split(" ")
                },
                VISA: {length: [16], prefix: ["4"]}
            };
            var k = null;
            for (e in a)for (f in a[e].prefix)if (c.substr(0,
                    a[e].prefix[f].length) === a[e].prefix[f] && -1 !== d.inArray(c.length, a[e].length)) {
                k = e;
                break
            }
            return null === k ? !1 : "AMERICAN_EXPRESS" === k ? 4 === b.length : 3 === b.length
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.date = d.extend(d.fn.bootstrapValidator.i18n.date || {}, {"default": "Please enter a valid date"});
    d.fn.bootstrapValidator.validators.date = {
        html5Attributes: {message: "message", format: "format", separator: "separator"}, validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            a.format = a.format || "MM/DD/YYYY";
            "date" === b.attr("type") && (a.format = "YYYY-MM-DD");
            var f = a.format.split(" "), k = f[0];
            b = 1 < f.length ? f[1] : null;
            c = 2 < f.length ? f[2] : null;
            var m = e.split(" "), s = m[0], e = 1 < m.length ?
                m[1] : null;
            if (f.length !== m.length)return !1;
            a = a.separator;
            if ((a || (a = -1 !== s.indexOf("/") ? "/" : -1 !== s.indexOf("-") ? "-" : null), null === a || -1 === s.indexOf(a)) || (s = s.split(a), k = k.split(a), s.length !== k.length))return !1;
            a = s[d.inArray("YYYY", k)];
            f = s[d.inArray("MM", k)];
            k = s[d.inArray("DD", k)];
            if (!a || !f || !k || 4 !== a.length)return !1;
            var u = m = s = null;
            if (b) {
                if (b = b.split(":"), e = e.split(":"), b.length !== e.length)return !1;
                if (m = 0 < e.length ? e[0] : null, s = 1 < e.length ? e[1] : null, u = 2 < e.length ? e[2] : null)if (isNaN(u) || 2 < u.length || (u = parseInt(u,
                        10), 0 > u || 60 < u))return !1;
                if (m && (isNaN(m) || 2 < m.length || (m = parseInt(m, 10), 0 > m || 24 <= m || c && 12 < m)) || s && (isNaN(s) || 2 < s.length || (s = parseInt(s, 10), 0 > s || 59 < s)))return !1
            }
            return d.fn.bootstrapValidator.helpers.date(a, f, k)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.different = d.extend(d.fn.bootstrapValidator.i18n.different || {}, {"default": "Please enter a different value"});
    d.fn.bootstrapValidator.validators.different = {
        html5Attributes: {message: "message", field: "field"},
        validate: function (c, b, a) {
            b = b.val();
            if ("" === b)return !0;
            var d = c.getFieldElements(a.field);
            return null === d || 0 === d.length ? !0 : b !== d.val() ? (c.updateStatus(a.field, c.STATUS_VALID, "different"), !0) : !1
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.digits = d.extend(d.fn.bootstrapValidator.i18n.digits || {}, {"default": "Please enter only digits"});
    d.fn.bootstrapValidator.validators.digits = {
        validate: function (c, b) {
            var a = b.val();
            return "" === a ? !0 : /^\d+$/.test(a)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.ean = d.extend(d.fn.bootstrapValidator.i18n.ean || {}, {"default": "Please enter a valid EAN number"});
    d.fn.bootstrapValidator.validators.ean = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            if (!/^(\d{8}|\d{12}|\d{13})$/.test(a))return !1;
            for (var d = a.length, f = 0, k = 8 === d ? [3, 1] : [1, 3], m = 0; d - 1 > m; m++)f += parseInt(a.charAt(m), 10) * k[m % 2];
            return f = (10 - f % 10) % 10, f + "" === a.charAt(d - 1)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.emailAddress = d.extend(d.fn.bootstrapValidator.i18n.emailAddress || {}, {"default": "Please enter a valid email address"});
    d.fn.bootstrapValidator.validators.emailAddress = {
        enableByHtml5: function (c) {
            return "email" === c.attr("type")
        }, validate: function (c, b) {
            var a = b.val();
            return "" === a ? !0 : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.file = d.extend(d.fn.bootstrapValidator.i18n.file || {}, {"default": "Please choose a valid file"});
    d.fn.bootstrapValidator.validators.file = {
        html5Attributes: {extension: "extension", maxsize: "maxSize", message: "message", type: "type"},
        validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            var f;
            c = a.extension ? a.extension.toLowerCase().split(",") : null;
            var k = a.type ? a.type.toLowerCase().split(",") : null;
            if (window.File && window.FileList && window.FileReader) {
                b = b.get(0).files;
                for (var e = b.length, m = 0; e > m; m++)if (a.maxSize && b[m].size > parseInt(a.maxSize, 10) || (f = b[m].name.substr(b[m].name.lastIndexOf(".") + 1), c && -1 === d.inArray(f.toLowerCase(), c)) || b[m].type && k && -1 === d.inArray(b[m].type.toLowerCase(), k))return !1
            } else if (f = e.substr(e.lastIndexOf(".") + 1), c && -1 === d.inArray(f.toLowerCase(), c))return !1;
            return !0
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.greaterThan = d.extend(d.fn.bootstrapValidator.i18n.greaterThan || {}, {
        "default": "Please enter a value greater than or equal to %s",
        notInclusive: "Please enter a value greater than %s"
    });
    d.fn.bootstrapValidator.validators.greaterThan = {
        html5Attributes: {message: "message", value: "value", inclusive: "inclusive"}, enableByHtml5: function (c) {
            var b = c.attr("type");
            return (c = c.attr("min")) && "date" !== b ? {value: c} : !1
        }, validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            if (!d.isNumeric(e))return !1;
            c = d.isNumeric(a.value) ? a.value : c.getDynamicOption(b, a.value);
            return e = parseFloat(e), !0 === a.inclusive || void 0 === a.inclusive ? {
                valid: e >= c,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.greaterThan["default"], c)
            } : {
                valid: e > c,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.greaterThan.notInclusive, c)
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.grid = d.extend(d.fn.bootstrapValidator.i18n.grid || {}, {"default": "Please enter a valid GRId number"});
    d.fn.bootstrapValidator.validators.grid = {
        validate: function (c, b) {
            var a = b.val();
            return "" === a ? !0 : (a = a.toUpperCase(), /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(a) ? (a = a.replace(/\s/g, "").replace(/-/g, ""), "GRID:" === a.substr(0, 5) && (a = a.substr(5)), d.fn.bootstrapValidator.helpers.mod37And36(a)) : !1)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.hex = d.extend(d.fn.bootstrapValidator.i18n.hex || {}, {"default": "Please enter a valid hexadecimal number"});
    d.fn.bootstrapValidator.validators.hex = {
        validate: function (c, b) {
            var a = b.val();
            return "" === a ? !0 : /^[0-9a-fA-F]+$/.test(a)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.hexColor = d.extend(d.fn.bootstrapValidator.i18n.hexColor || {}, {"default": "Please enter a valid hex color"});
    d.fn.bootstrapValidator.validators.hexColor = {
        enableByHtml5: function (c) {
            return "color" === c.attr("type")
        }, validate: function (c, b) {
            var a = b.val();
            return "" === a ? !0 : /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.iban = d.extend(d.fn.bootstrapValidator.i18n.iban || {}, {
        "default": "Please enter a valid IBAN number",
        countryNotSupported: "The country code %s is not supported",
        country: "Please enter a valid IBAN number in %s",
        countries: {
            AD: "Andorra",
            AE: "United Arab Emirates",
            AL: "Albania",
            AO: "Angola",
            AT: "Austria",
            AZ: "Azerbaijan",
            BA: "Bosnia and Herzegovina",
            BE: "Belgium",
            BF: "Burkina Faso",
            BG: "Bulgaria",
            BH: "Bahrain",
            BI: "Burundi",
            BJ: "Benin",
            BR: "Brazil",
            CH: "Switzerland",
            CI: "Ivory Coast",
            CM: "Cameroon",
            CR: "Costa Rica",
            CV: "Cape Verde",
            CY: "Cyprus",
            CZ: "Czech Republic",
            DE: "Germany",
            DK: "Denmark",
            DO: "Dominican Republic",
            DZ: "Algeria",
            EE: "Estonia",
            ES: "Spain",
            FI: "Finland",
            FO: "Faroe Islands",
            FR: "France",
            GB: "United Kingdom",
            GE: "Georgia",
            GI: "Gibraltar",
            GL: "Greenland",
            GR: "Greece",
            GT: "Guatemala",
            HR: "Croatia",
            HU: "Hungary",
            IE: "Ireland",
            IL: "Israel",
            IR: "Iran",
            IS: "Iceland",
            IT: "Italy",
            JO: "Jordan",
            KW: "Kuwait",
            KZ: "Kazakhstan",
            LB: "Lebanon",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            LV: "Latvia",
            MC: "Monaco",
            MD: "Moldova",
            ME: "Montenegro",
            MG: "Madagascar",
            MK: "Macedonia",
            ML: "Mali",
            MR: "Mauritania",
            MT: "Malta",
            MU: "Mauritius",
            MZ: "Mozambique",
            NL: "Netherlands",
            NO: "Norway",
            PK: "Pakistan",
            PL: "Poland",
            PS: "Palestinian",
            PT: "Portugal",
            QA: "Qatar",
            RO: "Romania",
            RS: "Serbia",
            SA: "Saudi Arabia",
            SE: "Sweden",
            SI: "Slovenia",
            SK: "Slovakia",
            SM: "San Marino",
            SN: "Senegal",
            TN: "Tunisia",
            TR: "Turkey",
            VG: "Virgin Islands, British"
        }
    });
    d.fn.bootstrapValidator.validators.iban = {
        html5Attributes: {message: "message", country: "country"}, REGEX: {
            AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
            AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
            AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
            AO: "AO[0-9]{2}[0-9]{21}",
            AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
            AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
            BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
            BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
            BF: "BF[0-9]{2}[0-9]{23}",
            BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
            BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
            BI: "BI[0-9]{2}[0-9]{12}",
            BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
            BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
            CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
            CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
            CM: "CM[0-9]{2}[0-9]{23}",
            CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}",
            CV: "CV[0-9]{2}[0-9]{21}",
            CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
            CZ: "CZ[0-9]{2}[0-9]{20}",
            DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
            DK: "DK[0-9]{2}[0-9]{14}",
            DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
            DZ: "DZ[0-9]{2}[0-9]{20}",
            EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
            ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
            FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
            FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
            FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
            GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
            GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
            GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
            GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
            GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
            GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
            HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
            HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
            IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
            IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
            IR: "IR[0-9]{2}[0-9]{22}",
            IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
            IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
            JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
            KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
            KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
            LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
            LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
            LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
            LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
            LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
            MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
            MD: "MD[0-9]{2}[A-Z0-9]{20}",
            ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
            MG: "MG[0-9]{2}[0-9]{23}",
            MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
            ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
            MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
            MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
            MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
            MZ: "MZ[0-9]{2}[0-9]{21}",
            NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
            NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
            PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
            PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
            PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
            PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
            QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
            RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
            RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
            SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
            SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
            SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
            SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
            SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
            SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
            TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
            TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
            VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}"
        }, validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            var e = e.replace(/[^a-zA-Z0-9]/g, "").toUpperCase(), f = a.country;
            if (f ? "string" == typeof f && this.REGEX[f] || (f = c.getDynamicOption(b, f)) : f = e.substr(0, 2), !this.REGEX[f])return {
                valid: !1,
                message: d.fn.bootstrapValidator.helpers.format(d.fn.bootstrapValidator.i18n.iban.countryNotSupported, f)
            };
            if (!(new RegExp("^" + this.REGEX[f] + "$")).test(e))return {
                valid: !1,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.iban.country, d.fn.bootstrapValidator.i18n.iban.countries[f])
            };
            e = e.substr(4) + e.substr(0, 4);
            e = d.map(e.split(""), function (a) {
                var b = a.charCodeAt(0);
                return 65 <=
                b && 90 >= b ? b - 65 + 10 : a
            });
            e = e.join("");
            c = parseInt(e.substr(0, 1), 10);
            b = e.length;
            for (var k = 1; b > k; ++k)c = (10 * c + parseInt(e.substr(k, 1), 10)) % 97;
            return {
                valid: 1 === c,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.iban.country, d.fn.bootstrapValidator.i18n.iban.countries[f])
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.id = d.extend(d.fn.bootstrapValidator.i18n.id || {}, {
        "default": "Please enter a valid identification number",
        countryNotSupported: "The country code %s is not supported",
        country: "Please enter a valid %s identification number",
        countries: {
            BA: "Bosnia and Herzegovina",
            BG: "Bulgarian",
            BR: "Brazilian",
            CH: "Swiss",
            CL: "Chilean",
            CZ: "Czech",
            DK: "Danish",
            EE: "Estonian",
            ES: "Spanish",
            FI: "Finnish",
            HR: "Croatian",
            IE: "Irish",
            IS: "Iceland",
            LT: "Lithuanian",
            LV: "Latvian",
            ME: "Montenegro",
            MK: "Macedonian",
            NL: "Dutch",
            RO: "Romanian",
            RS: "Serbian",
            SE: "Swedish",
            SI: "Slovenian",
            SK: "Slovak",
            SM: "San Marino",
            ZA: "South African"
        }
    });
    d.fn.bootstrapValidator.validators.id = {
        html5Attributes: {message: "message", country: "country"},
        COUNTRY_CODES: "BA BG BR CH CL CZ DK EE ES FI HR IE IS LT LV ME MK NL RO RS SE SI SK SM ZA".split(" "),
        validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            var f = a.country;
            return (f ? ("string" != typeof f || -1 === d.inArray(f.toUpperCase(), this.COUNTRY_CODES)) && (f = c.getDynamicOption(b, f)) : f = e.substr(0,
                2), -1 === d.inArray(f, this.COUNTRY_CODES)) ? {
                valid: !1,
                message: d.fn.bootstrapValidator.helpers.format(d.fn.bootstrapValidator.i18n.id.countryNotSupported, f)
            } : this[["_", f.toLowerCase()].join("")](e) ? !0 : {
                valid: !1,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.id.country, d.fn.bootstrapValidator.i18n.id.countries[f.toUpperCase()])
            }
        },
        _validateJMBG: function (c, b) {
            if (!/^\d{13}$/.test(c))return !1;
            var a = parseInt(c.substr(0, 2), 10), d = parseInt(c.substr(2, 2), 10), f = (parseInt(c.substr(4,
                3), 10), parseInt(c.substr(7, 2), 10)), k = parseInt(c.substr(12, 1), 10);
            if (31 < a || 12 < d)return !1;
            for (d = a = 0; 6 > d; d++)a += (7 - d) * (parseInt(c.charAt(d), 10) + parseInt(c.charAt(d + 6), 10));
            if (a = 11 - a % 11, (10 === a || 11 === a) && (a = 0), a !== k)return !1;
            switch (b.toUpperCase()) {
                case "BA":
                    return 10 <= f && 19 >= f;
                case "MK":
                    return 41 <= f && 49 >= f;
                case "ME":
                    return 20 <= f && 29 >= f;
                case "RS":
                    return 70 <= f && 99 >= f;
                case "SI":
                    return 50 <= f && 59 >= f;
                default:
                    return !0
            }
        },
        _ba: function (c) {
            return this._validateJMBG(c, "BA")
        },
        _mk: function (c) {
            return this._validateJMBG(c,
                "MK")
        },
        _me: function (c) {
            return this._validateJMBG(c, "ME")
        },
        _rs: function (c) {
            return this._validateJMBG(c, "RS")
        },
        _si: function (c) {
            return this._validateJMBG(c, "SI")
        },
        _bg: function (c) {
            if (!/^\d{10}$/.test(c) && !/^\d{6}\s\d{3}\s\d{1}$/.test(c))return !1;
            c = c.replace(/\s/g, "");
            var b = parseInt(c.substr(0, 2), 10) + 1900, a = parseInt(c.substr(2, 2), 10), e = parseInt(c.substr(4, 2), 10);
            if (40 < a ? (b += 100, a -= 40) : 20 < a && (b -= 100, a -= 20), !d.fn.bootstrapValidator.helpers.date(b, a, e))return !1;
            b = 0;
            a = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            for (e = 0; 9 > e; e++)b +=
                parseInt(c.charAt(e), 10) * a[e];
            return b = b % 11 % 10, b + "" === c.substr(9, 1)
        },
        _br: function (c) {
            if (/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(c) || !/^\d{11}$/.test(c) && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(c))return !1;
            c = c.replace(/\./g, "").replace(/-/g, "");
            for (var b = 0, a = 0; 9 > a; a++)b += (10 - a) * parseInt(c.charAt(a), 10);
            if (b = 11 - b % 11, (10 === b || 11 === b) && (b = 0), b + "" !== c.charAt(9))return !1;
            for (a = b = 0; 10 > a; a++)b += (11 - a) * parseInt(c.charAt(a), 10);
            return b = 11 - b % 11, (10 === b || 11 === b) && (b = 0), b + "" === c.charAt(10)
        },
        _ch: function (c) {
            if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(c))return !1;
            c = c.replace(/\D/g, "").substr(3);
            for (var b = c.length, a = 0, d = 8 === b ? [3, 1] : [1, 3], f = 0; b - 1 > f; f++)a += parseInt(c.charAt(f), 10) * d[f % 2];
            return a = 10 - a % 10, a + "" === c.charAt(b - 1)
        },
        _cl: function (c) {
            if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(c))return !1;
            for (c = c.replace(/\-/g, ""); 9 > c.length;)c = "0" + c;
            for (var b = 0, a = [3, 2, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return b = 11 - b % 11, 11 === b ? b = 0 : 10 === b && (b = "K"), b + "" === c.charAt(8).toUpperCase()
        },
        _cz: function (c) {
            if (!/^\d{9,10}$/.test(c))return !1;
            var b = 1900 + parseInt(c.substr(0, 2), 10), a = parseInt(c.substr(2, 2), 10) % 50 % 20, e = parseInt(c.substr(4, 2), 10);
            if (9 === c.length) {
                if (1980 <= b && (b -= 100), 1953 < b)return !1
            } else 1954 > b && (b += 100);
            return d.fn.bootstrapValidator.helpers.date(b, a, e) ? 10 === c.length ? (a = parseInt(c.substr(0, 9), 10) % 11, 1985 > b && (a %= 10), a + "" === c.substr(9, 1)) : !0 : !1
        },
        _dk: function (c) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(c))return !1;
            c = c.replace(/-/g, "");
            var b = parseInt(c.substr(0, 2), 10), a = parseInt(c.substr(2,
                2), 10), e = parseInt(c.substr(4, 2), 10);
            switch (!0) {
                case -1 !== "5678".indexOf(c.charAt(6)) && 58 <= e:
                    e += 1800;
                    break;
                case -1 !== "0123".indexOf(c.charAt(6)):
                case -1 !== "49".indexOf(c.charAt(6)) && 37 <= e:
                    e += 1900;
                    break;
                default:
                    e += 2E3
            }
            return d.fn.bootstrapValidator.helpers.date(e, a, b)
        },
        _ee: function (c) {
            return this._lt(c)
        },
        _es: function (c) {
            if (!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(c) && !/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(c))return !1;
            c = c.replace(/-/g, "");
            var b = "XYZ".indexOf(c.charAt(0));
            -1 !== b && (c = b + c.substr(1) +
                "");
            b = parseInt(c.substr(0, 8), 10);
            return b = "TRWAGMYFPDXBNJZSQVHLCKE"[b % 23], b === c.substr(8, 1)
        },
        _fi: function (c) {
            if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(c))return !1;
            var b = parseInt(c.substr(0, 2), 10), a = parseInt(c.substr(2, 2), 10), e = parseInt(c.substr(4, 2), 10);
            if ((e = {
                        "+": 1800,
                        "-": 1900,
                        A: 2E3
                    }[c.charAt(6)] + e, !d.fn.bootstrapValidator.helpers.date(e, a, b)) || 2 > parseInt(c.substr(7, 3), 10))return !1;
            b = c.substr(0, 6) + c.substr(7, 3) + "";
            return b = parseInt(b, 10), "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(b %
                31) === c.charAt(10)
        },
        _hr: function (c) {
            return /^[0-9]{11}$/.test(c) ? d.fn.bootstrapValidator.helpers.mod11And10(c) : !1
        },
        _ie: function (c) {
            if (!/^\d{7}[A-W][AHWTX]?$/.test(c))return !1;
            var b = function (a) {
                for (; 7 > a.length;)a = "0" + a;
                for (var b = 0, c = 0; 7 > c; c++)b += parseInt(a.charAt(c), 10) * (8 - c);
                return b += 9 * "WABCDEFGHIJKLMNOPQRSTUV".indexOf(a.substr(7)), "WABCDEFGHIJKLMNOPQRSTUV"[b % 23]
            };
            return 9 !== c.length || "A" !== c.charAt(8) && "H" !== c.charAt(8) ? c.charAt(7) === b(c.substr(0, 7)) : c.charAt(7) === b(c.substr(0, 7) + c.substr(8) + "")
        },
        _is: function (c) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(c))return !1;
            c = c.replace(/-/g, "");
            var b = parseInt(c.substr(0, 2), 10), a = parseInt(c.substr(2, 2), 10), e = parseInt(c.substr(4, 2), 10), f = parseInt(c.charAt(9), 10);
            if (e = 9 === f ? 1900 + e : 100 * (20 + f) + e, !d.fn.bootstrapValidator.helpers.date(e, a, b, !0))return !1;
            b = 0;
            a = [3, 2, 7, 6, 5, 4, 3, 2];
            for (e = 0; 8 > e; e++)b += parseInt(c.charAt(e), 10) * a[e];
            return b = 11 - b % 11, b + "" === c.charAt(8)
        },
        _lt: function (c) {
            if (!/^[0-9]{11}$/.test(c))return !1;
            var b = parseInt(c.charAt(0), 10), a = parseInt(c.substr(1,
                2), 10), e = parseInt(c.substr(3, 2), 10), f = parseInt(c.substr(5, 2), 10);
            if (a = 100 * (0 === b % 2 ? 17 + b / 2 : 17 + (b + 1) / 2) + a, !d.fn.bootstrapValidator.helpers.date(a, e, f, !0))return !1;
            b = 0;
            a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
            for (e = 0; 10 > e; e++)b += parseInt(c.charAt(e), 10) * a[e];
            if (b %= 11, 10 !== b)return b + "" === c.charAt(10);
            b = 0;
            a = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
            for (e = 0; 10 > e; e++)b += parseInt(c.charAt(e), 10) * a[e];
            return b %= 11, 10 === b && (b = 0), b + "" === c.charAt(10)
        },
        _lv: function (c) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(c))return !1;
            c = c.replace(/\D/g, "");
            var b =
                parseInt(c.substr(0, 2), 10), a = parseInt(c.substr(2, 2), 10), e = parseInt(c.substr(4, 2), 10);
            if (e = e + 1800 + 100 * parseInt(c.charAt(6), 10), !d.fn.bootstrapValidator.helpers.date(e, a, b, !0))return !1;
            b = 0;
            a = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
            for (e = 0; 10 > e; e++)b += parseInt(c.charAt(e), 10) * a[e];
            return b = (b + 1) % 11 % 10, b + "" === c.charAt(10)
        },
        _nl: function (c) {
            for (; 9 > c.length;)c = "0" + c;
            if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(c) || (c = c.replace(/\./g, ""), 0 === parseInt(c, 10)))return !1;
            for (var b = 0, a = c.length, d = 0; a - 1 > d; d++)b += (9 - d) *
                parseInt(c.charAt(d), 10);
            return b %= 11, 10 === b && (b = 0), b + "" === c.charAt(a - 1)
        },
        _ro: function (c) {
            if (!/^[0-9]{13}$/.test(c))return !1;
            var b = parseInt(c.charAt(0), 10);
            if (0 === b || 7 === b || 8 === b)return !1;
            var a = parseInt(c.substr(1, 2), 10), e = parseInt(c.substr(3, 2), 10), f = parseInt(c.substr(5, 2), 10), k = {
                1: 1900,
                2: 1900,
                3: 1800,
                4: 1800,
                5: 2E3,
                6: 2E3
            };
            if (31 < f && 12 < e || 9 !== b && (a = k[b + ""] + a, !d.fn.bootstrapValidator.helpers.date(a, e, f)))return !1;
            b = 0;
            a = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
            e = c.length;
            for (f = 0; e - 1 > f; f++)b += parseInt(c.charAt(f), 10) *
                a[f];
            return b %= 11, 10 === b && (b = 1), b + "" === c.charAt(e - 1)
        },
        _se: function (c) {
            if (!/^[0-9]{10}$/.test(c) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(c))return !1;
            c = c.replace(/[^0-9]/g, "");
            var b = parseInt(c.substr(0, 2), 10) + 1900, a = parseInt(c.substr(2, 2), 10), e = parseInt(c.substr(4, 2), 10);
            return d.fn.bootstrapValidator.helpers.date(b, a, e) ? d.fn.bootstrapValidator.helpers.luhn(c) : !1
        },
        _sk: function (c) {
            return this._cz(c)
        },
        _sm: function (c) {
            return /^\d{5}$/.test(c)
        },
        _za: function (c) {
            if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(c))return !1;
            var b = parseInt(c.substr(0, 2), 10), a = (new Date).getFullYear() % 100, e = parseInt(c.substr(2, 2), 10), f = parseInt(c.substr(4, 2), 10);
            return b = b >= a ? b + 1900 : b + 2E3, d.fn.bootstrapValidator.helpers.date(b, e, f) ? d.fn.bootstrapValidator.helpers.luhn(c) : !1
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.identical = d.extend(d.fn.bootstrapValidator.i18n.identical || {}, {"default": "Please enter the same value"});
    d.fn.bootstrapValidator.validators.identical = {
        html5Attributes: {message: "message", field: "field"},
        validate: function (c, b, a) {
            b = b.val();
            if ("" === b)return !0;
            var d = c.getFieldElements(a.field);
            return null === d || 0 === d.length ? !0 : b === d.val() ? (c.updateStatus(a.field, c.STATUS_VALID, "identical"), !0) : !1
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.imei = d.extend(d.fn.bootstrapValidator.i18n.imei || {}, {"default": "Please enter a valid IMEI number"});
    d.fn.bootstrapValidator.validators.imei = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            switch (!0) {
                case /^\d{15}$/.test(a):
                case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(a):
                case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(a):
                    return a = a.replace(/[^0-9]/g, ""), d.fn.bootstrapValidator.helpers.luhn(a);
                case /^\d{14}$/.test(a):
                case /^\d{16}$/.test(a):
                case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(a):
                case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(a):
                    return !0;
                default:
                    return !1
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.imo = d.extend(d.fn.bootstrapValidator.i18n.imo || {}, {"default": "Please enter a valid IMO number"});
    d.fn.bootstrapValidator.validators.imo = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            if (!/^IMO \d{7}$/i.test(a))return !1;
            for (var d = 0, a = a.replace(/^.*(\d{7})$/, "$1"), f = 6; 1 <= f; f--)d += a.slice(6 - f, -f) * (f + 1);
            return d % 10 === parseInt(a.charAt(6), 10)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.integer = d.extend(d.fn.bootstrapValidator.i18n.integer || {}, {"default": "Please enter a valid number"});
    d.fn.bootstrapValidator.validators.integer = {
        enableByHtml5: function (c) {
            return "number" === c.attr("type") && (void 0 === c.attr("step") || 0 === c.attr("step") % 1)
        }, validate: function (c, b) {
            if (this.enableByHtml5(b) && b.get(0).validity && !0 === b.get(0).validity.badInput)return !1;
            var a = b.val();
            return "" === a ? !0 : /^(?:-?(?:0|[1-9][0-9]*))$/.test(a)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.ip = d.extend(d.fn.bootstrapValidator.i18n.ip || {}, {
        "default": "Please enter a valid IP address",
        ipv4: "Please enter a valid IPv4 address",
        ipv6: "Please enter a valid IPv6 address"
    });
    d.fn.bootstrapValidator.validators.ip = {
        html5Attributes: {message: "message", ipv4: "ipv4", ipv6: "ipv6"}, validate: function (c, b, a) {
            b = b.val();
            if ("" === b)return !0;
            a = d.extend({}, {ipv4: !0, ipv6: !0}, a);
            var e = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                f = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
            c = !1;
            switch (!0) {
                case a.ipv4 && !a.ipv6:
                    c = e.test(b);
                    a = a.message || d.fn.bootstrapValidator.i18n.ip.ipv4;
                    break;
                case !a.ipv4 && a.ipv6:
                    c = f.test(b);
                    a = a.message || d.fn.bootstrapValidator.i18n.ip.ipv6;
                    break;
                default:
                    c = e.test(b) && f.test(b), a = a.message || d.fn.bootstrapValidator.i18n.ip["default"]
            }
            return {valid: c, message: a}
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.isbn = d.extend(d.fn.bootstrapValidator.i18n.isbn || {}, {"default": "Please enter a valid ISBN number"});
    d.fn.bootstrapValidator.validators.isbn = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            var d;
            switch (!0) {
                case /^\d{9}[\dX]$/.test(a):
                case 13 === a.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(a):
                case 13 === a.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(a):
                    d = "ISBN10";
                    break;
                case /^(978|979)\d{9}[\dX]$/.test(a):
                case 17 === a.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(a):
                case 17 ===
                a.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(a):
                    d = "ISBN13";
                    break;
                default:
                    return !1
            }
            var a = a.replace(/[^0-9X]/gi, ""), f, a = a.split(""), k = a.length, m = 0;
            switch (d) {
                case "ISBN10":
                    for (d = m = 0; k - 1 > d; d++)m += parseInt(a[d], 10) * (10 - d);
                    return f = 11 - m % 11, 11 === f ? f = 0 : 10 === f && (f = "X"), f + "" === a[k - 1];
                case "ISBN13":
                    for (d = m = 0; k - 1 > d; d++)m += 0 === d % 2 ? parseInt(a[d], 10) : 3 * parseInt(a[d], 10);
                    return f = 10 - m % 10, 10 === f && (f = "0"), f + "" === a[k - 1];
                default:
                    return !1
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.isin = d.extend(d.fn.bootstrapValidator.i18n.isin || {}, {"default": "Please enter a valid ISIN number"});
    d.fn.bootstrapValidator.validators.isin = {
        COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            a = a.toUpperCase();
            if (!(new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$")).test(a))return !1;
            for (var d = "", f = a.length, k = 0; f - 1 > k; k++)var m = a.charCodeAt(k), d = d + (57 < m ? (m - 55).toString() : a.charAt(k));
            for (var m = "", s = d.length, u = 0 !== s % 2 ? 0 : 1, k = 0; s > k; k++)m += parseInt(d[k], 10) * (k % 2 === u ? 2 : 1) + "";
            for (k = d = 0; k < m.length; k++)d += parseInt(m.charAt(k), 10);
            return d = (10 - d % 10) % 10, d + "" === a.charAt(f - 1)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.ismn = d.extend(d.fn.bootstrapValidator.i18n.ismn || {}, {"default": "Please enter a valid ISMN number"});
    d.fn.bootstrapValidator.validators.ismn = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            var d;
            switch (!0) {
                case /^M\d{9}$/.test(a):
                case /^M-\d{4}-\d{4}-\d{1}$/.test(a):
                case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(a):
                    d = "ISMN10";
                    break;
                case /^9790\d{9}$/.test(a):
                case /^979-0-\d{4}-\d{4}-\d{1}$/.test(a):
                case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(a):
                    d = "ISMN13";
                    break;
                default:
                    return !1
            }
            "ISMN10" === d && (a = "9790" + a.substr(1));
            a = a.replace(/[^0-9]/gi, "");
            d = a.length;
            for (var f = 0, k = [1, 3], m = 0; d - 1 > m; m++)f += parseInt(a.charAt(m), 10) * k[m % 2];
            return f = 10 - f % 10, f + "" === a.charAt(d - 1)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.issn = d.extend(d.fn.bootstrapValidator.i18n.issn || {}, {"default": "Please enter a valid ISSN number"});
    d.fn.bootstrapValidator.validators.issn = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            if (!/^\d{4}\-\d{3}[\dX]$/.test(a))return !1;
            var a = a.replace(/[^0-9X]/gi, ""), a = a.split(""), d = a.length, f = 0;
            "X" === a[7] && (a[7] = 10);
            for (var k = 0; d > k; k++)f += parseInt(a[k], 10) * (8 - k);
            return 0 === f % 11
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.lessThan = d.extend(d.fn.bootstrapValidator.i18n.lessThan || {}, {
        "default": "Please enter a value less than or equal to %s",
        notInclusive: "Please enter a value less than %s"
    });
    d.fn.bootstrapValidator.validators.lessThan = {
        html5Attributes: {message: "message", value: "value", inclusive: "inclusive"}, enableByHtml5: function (c) {
            var b = c.attr("type");
            return (c = c.attr("max")) && "date" !== b ? {value: c} : !1
        }, validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            if (!d.isNumeric(e))return !1;
            c = d.isNumeric(a.value) ? a.value : c.getDynamicOption(b, a.value);
            return e = parseFloat(e), !0 === a.inclusive || void 0 === a.inclusive ? {
                valid: c >= e,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.lessThan["default"], c)
            } : {
                valid: c > e,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.lessThan.notInclusive, c)
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.mac = d.extend(d.fn.bootstrapValidator.i18n.mac || {}, {"default": "Please enter a valid MAC address"});
    d.fn.bootstrapValidator.validators.mac = {
        validate: function (c, b) {
            var a = b.val();
            return "" === a ? !0 : /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(a)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.meid = d.extend(d.fn.bootstrapValidator.i18n.meid || {}, {"default": "Please enter a valid MEID number"});
    d.fn.bootstrapValidator.validators.meid = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            switch (!0) {
                case /^[0-9A-F]{15}$/i.test(a):
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(a):
                case /^\d{19}$/.test(a):
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(a):
                    var e = a.charAt(a.length - 1);
                    if (a = a.replace(/[- ]/g, ""), a.match(/^\d*$/i))return d.fn.bootstrapValidator.helpers.luhn(a);
                    for (var a = a.slice(0, -1), f = "", k = 1; 13 >= k; k += 2)f += (2 * parseInt(a.charAt(k), 16)).toString(16);
                    for (k = a = 0; k < f.length; k++)a += parseInt(f.charAt(k), 16);
                    return 0 === a % 10 ? "0" === e : e === (2 * (10 * Math.floor((a + 10) / 10) - a)).toString(16);
                case /^[0-9A-F]{14}$/i.test(a):
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(a):
                case /^\d{18}$/.test(a):
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(a):
                    return !0;
                default:
                    return !1
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.notEmpty = d.extend(d.fn.bootstrapValidator.i18n.notEmpty || {}, {"default": "Please enter a value"});
    d.fn.bootstrapValidator.validators.notEmpty = {
        enableByHtml5: function (c) {
            c = c.attr("required") + "";
            return "required" === c || "true" === c
        }, validate: function (c, b) {
            var a = b.attr("type");
            return "radio" === a || "checkbox" === a ? 0 < c.getFieldElements(b.attr("data-bv-field")).filter(":checked").length : "" !== d.trim(b.val())
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.numeric = d.extend(d.fn.bootstrapValidator.i18n.numeric || {}, {"default": "Please enter a valid float number"});
    d.fn.bootstrapValidator.validators.numeric = {
        html5Attributes: {message: "message", separator: "separator"}, enableByHtml5: function (c) {
            return "number" === c.attr("type") && void 0 !== c.attr("step") && 0 !== c.attr("step") % 1
        }, validate: function (c, b, a) {
            if (this.enableByHtml5(b) && b.get(0).validity && !0 === b.get(0).validity.badInput)return !1;
            c = b.val();
            if ("" === c)return !0;
            a = a.separator ||
                ".";
            return "." !== a && (c = c.replace(a, ".")), !isNaN(parseFloat(c)) && isFinite(c)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.phone = d.extend(d.fn.bootstrapValidator.i18n.phone || {}, {
        "default": "Please enter a valid phone number",
        countryNotSupported: "The country code %s is not supported",
        country: "Please enter a valid phone number in %s",
        countries: {
            BR: "Brazil",
            ES: "Spain",
            FR: "France",
            GB: "United Kingdom",
            MA: "Morocco",
            PK: "Pakistan",
            US: "USA"
        }
    });
    d.fn.bootstrapValidator.validators.phone = {
        html5Attributes: {message: "message", country: "country"}, COUNTRY_CODES: "BR ES FR GB MA PK US".split(" "),
        validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            var f = a.country;
            if (("string" != typeof f || -1 === d.inArray(f, this.COUNTRY_CODES)) && (f = c.getDynamicOption(b, f)), !f || -1 === d.inArray(f.toUpperCase(), this.COUNTRY_CODES))return {
                valid: !1,
                message: d.fn.bootstrapValidator.helpers.format(d.fn.bootstrapValidator.i18n.phone.countryNotSupported, f)
            };
            c = !0;
            switch (f.toUpperCase()) {
                case "BR":
                    e = d.trim(e);
                    c = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(e);
                    break;
                case "ES":
                    e = d.trim(e);
                    c = /^(?:(?:(?:\+|00)34\D?))?(?:9|6)(?:\d\D?){8}$/.test(e);
                    break;
                case "FR":
                    e = d.trim(e);
                    c = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(e);
                    break;
                case "GB":
                    e = d.trim(e);
                    c = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(e);
                    break;
                case "MA":
                    e = d.trim(e);
                    c = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(e);
                    break;
                case "PK":
                    e = d.trim(e);
                    c = /^0?3[0-9]{2}[0-9]{7}$/.test(e);
                    break;
                default:
                    e = e.replace(/\D/g, ""), c = /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(e) && 10 === e.length
            }
            return {
                valid: c,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.phone.country, d.fn.bootstrapValidator.i18n.phone.countries[f])
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.regexp = d.extend(d.fn.bootstrapValidator.i18n.regexp || {}, {"default": "Please enter a value matching the pattern"});
    d.fn.bootstrapValidator.validators.regexp = {
        html5Attributes: {message: "message", regexp: "regexp"},
        enableByHtml5: function (c) {
            return (c = c.attr("pattern")) ? {regexp: c} : !1
        },
        validate: function (c, b, a) {
            c = b.val();
            return "" === c ? !0 : ("string" == typeof a.regexp ? new RegExp(a.regexp) : a.regexp).test(c)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.remote = d.extend(d.fn.bootstrapValidator.i18n.remote || {}, {"default": "Please enter a valid value"});
    d.fn.bootstrapValidator.validators.remote = {
        html5Attributes: {message: "message", name: "name", type: "type", url: "url"}, validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            var f = b.attr("data-bv-field"), k = a.data || {}, m = a.url, s = a.type || "POST", u = a.headers || {};
            "function" == typeof k && (k = k.call(this, c));
            "function" == typeof m && (m = m.call(this, c));
            k[a.name || f] = e;
            var x = new d.Deferred,
                p = d.ajax({type: s, headers: u, url: m, dataType: "json", data: k});
            return p.then(function (a) {
                x.resolve(b, "remote", !0 === a.valid || "true" === a.valid, a.message ? a.message : null)
            }), x.fail(function () {
                p.abort()
            }), x
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.rtn = d.extend(d.fn.bootstrapValidator.i18n.rtn || {}, {"default": "Please enter a valid RTN number"});
    d.fn.bootstrapValidator.validators.rtn = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            if (!/^\d{9}$/.test(a))return !1;
            for (var d = 0, f = 0; f < a.length; f += 3)d += 3 * parseInt(a.charAt(f), 10) + 7 * parseInt(a.charAt(f + 1), 10) + parseInt(a.charAt(f + 2), 10);
            return 0 !== d && 0 === d % 10
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.sedol = d.extend(d.fn.bootstrapValidator.i18n.sedol || {}, {"default": "Please enter a valid SEDOL number"});
    d.fn.bootstrapValidator.validators.sedol = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            if (a = a.toUpperCase(), !/^[0-9A-Z]{7}$/.test(a))return !1;
            for (var d = 0, f = [1, 3, 1, 7, 3, 9, 1], k = a.length, m = 0; k - 1 > m; m++)d += f[m] * parseInt(a.charAt(m), 36);
            return d = (10 - d % 10) % 10, d + "" === a.charAt(k - 1)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.siren = d.extend(d.fn.bootstrapValidator.i18n.siren || {}, {"default": "Please enter a valid SIREN number"});
    d.fn.bootstrapValidator.validators.siren = {
        validate: function (c, b) {
            var a = b.val();
            return "" === a ? !0 : /^\d{9}$/.test(a) ? d.fn.bootstrapValidator.helpers.luhn(a) : !1
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.siret = d.extend(d.fn.bootstrapValidator.i18n.siret || {}, {"default": "Please enter a valid SIRET number"});
    d.fn.bootstrapValidator.validators.siret = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            for (var d, f = 0, k = a.length, m = 0; k > m; m++)d = parseInt(a.charAt(m), 10), 0 === m % 2 && (d *= 2, 9 < d && (d -= 9)), f += d;
            return 0 === f % 10
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.step = d.extend(d.fn.bootstrapValidator.i18n.step || {}, {"default": "Please enter a valid step of %s"});
    d.fn.bootstrapValidator.validators.step = {
        html5Attributes: {message: "message", base: "baseValue", step: "step"}, validate: function (c, b, a) {
            c = b.val();
            if ("" === c)return !0;
            if (a = d.extend({}, {baseValue: 0, step: 1}, a), c = parseFloat(c), !d.isNumeric(c))return !1;
            var e = c - a.baseValue, f = a.step;
            0 === f ? c = 1 : (c = (e + "").split("."), b = (f + "").split("."), e -= f * Math.floor(e / f), c = Math.pow(10, (1 ===
                c.length ? 0 : c[1].length) + (1 === b.length ? 0 : b[1].length)), e *= c, b = 0 < e | -(0 > e), c = e % 1 === 0.5 * b ? (Math.floor(e) + (0 < b)) / c : Math.round(e) / c);
            return {
                valid: 0 === c || c === a.step,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.step["default"], [a.step])
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.stringCase = d.extend(d.fn.bootstrapValidator.i18n.stringCase || {}, {
        "default": "Please enter only lowercase characters",
        upper: "Please enter only uppercase characters"
    });
    d.fn.bootstrapValidator.validators.stringCase = {
        html5Attributes: {message: "message", "case": "case"}, validate: function (c, b, a) {
            c = b.val();
            if ("" === c)return !0;
            b = (a["case"] || "lower").toLowerCase();
            return {
                valid: "upper" === b ? c === c.toUpperCase() : c === c.toLowerCase(),
                message: a.message || ("upper" === b ? d.fn.bootstrapValidator.i18n.stringCase.upper :
                    d.fn.bootstrapValidator.i18n.stringCase["default"])
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.stringLength = d.extend(d.fn.bootstrapValidator.i18n.stringLength || {}, {
        "default": "Please enter a value with valid length",
        less: "Please enter less than %s characters",
        more: "Please enter more than %s characters",
        between: "Please enter value between %s and %s characters long"
    });
    d.fn.bootstrapValidator.validators.stringLength = {
        html5Attributes: {message: "message", min: "min", max: "max"}, enableByHtml5: function (c) {
            return (c = c.attr("maxlength")) ? {max: parseInt(c, 10)} : !1
        },
        validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            var f = d.isNumeric(a.min) ? a.min : c.getDynamicOption(b, a.min);
            c = d.isNumeric(a.max) ? a.max : c.getDynamicOption(b, a.max);
            e = e.length;
            b = !0;
            var k = a.message || d.fn.bootstrapValidator.i18n.stringLength["default"];
            switch ((f && e < parseInt(f, 10) || c && e > parseInt(c, 10)) && (b = !1), !0) {
                case !!f && !!c:
                    k = d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.stringLength.between, [parseInt(f, 10), parseInt(c, 10)]);
                    break;
                case !!f:
                    k = d.fn.bootstrapValidator.helpers.format(a.message ||
                        d.fn.bootstrapValidator.i18n.stringLength.more, parseInt(f, 10));
                    break;
                case !!c:
                    k = d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.stringLength.less, parseInt(c, 10))
            }
            return {valid: b, message: k}
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.uri = d.extend(d.fn.bootstrapValidator.i18n.uri || {}, {"default": "Please enter a valid URI"});
    d.fn.bootstrapValidator.validators.uri = {
        html5Attributes: {message: "message", allowlocal: "allowLocal"}, enableByHtml5: function (c) {
            return "url" === c.attr("type")
        }, validate: function (c, b, a) {
            c = b.val();
            if ("" === c)return !0;
            a = !0 === a.allowLocal || "true" === a.allowLocal;
            return (new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:" + (a ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") +
                "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (a ? "?" : "") + ")(?::\\d{2,5})?(?:/[^\\s]*)?$", "i")).test(c)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.uuid = d.extend(d.fn.bootstrapValidator.i18n.uuid || {}, {
        "default": "Please enter a valid UUID number",
        version: "Please enter a valid UUID version %s number"
    });
    d.fn.bootstrapValidator.validators.uuid = {
        html5Attributes: {message: "message", version: "version"}, validate: function (c, b, a) {
            c = b.val();
            if ("" === c)return !0;
            b = {
                3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
            };
            var e = a.version ? a.version + "" : "all";
            return {
                valid: null === b[e] ? !0 : b[e].test(c),
                message: a.version ? d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.uuid.version, a.version) : a.message || d.fn.bootstrapValidator.i18n.uuid["default"]
            }
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.vat = d.extend(d.fn.bootstrapValidator.i18n.vat || {}, {
        "default": "Please enter a valid VAT number",
        countryNotSupported: "The country code %s is not supported",
        country: "Please enter a valid %s VAT number",
        countries: {
            AT: "Austrian",
            BE: "Belgian",
            BG: "Bulgarian",
            BR: "Brazilian",
            CH: "Swiss",
            CY: "Cypriot",
            CZ: "Czech",
            DE: "German",
            DK: "Danish",
            EE: "Estonian",
            ES: "Spanish",
            FI: "Finnish",
            FR: "French",
            GB: "United Kingdom",
            GR: "Greek",
            EL: "Greek",
            HU: "Hungarian",
            HR: "Croatian",
            IE: "Irish",
            IS: "Iceland",
            IT: "Italian",
            LT: "Lithuanian",
            LU: "Luxembourg",
            LV: "Latvian",
            MT: "Maltese",
            NL: "Dutch",
            NO: "Norwegian",
            PL: "Polish",
            PT: "Portuguese",
            RO: "Romanian",
            RU: "Russian",
            RS: "Serbian",
            SE: "Swedish",
            SI: "Slovenian",
            SK: "Slovak",
            ZA: "South African"
        }
    });
    d.fn.bootstrapValidator.validators.vat = {
        html5Attributes: {message: "message", country: "country"},
        COUNTRY_CODES: "AT BE BG BR CH CY CZ DE DK EE EL ES FI FR GB GR HR HU IE IS IT LT LU LV MT NL NO PL PT RO RU RS SE SK SI ZA".split(" "),
        validate: function (c, b, a) {
            var e = b.val();
            if ("" === e)return !0;
            var f = a.country;
            return (f ? ("string" != typeof f || -1 === d.inArray(f.toUpperCase(), this.COUNTRY_CODES)) && (f = c.getDynamicOption(b, f)) : f = e.substr(0, 2), -1 === d.inArray(f, this.COUNTRY_CODES)) ? {
                valid: !1,
                message: d.fn.bootstrapValidator.helpers.format(d.fn.bootstrapValidator.i18n.vat.countryNotSupported, f)
            } : this[["_", f.toLowerCase()].join("")](e) ? !0 : {
                valid: !1,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.vat.country, d.fn.bootstrapValidator.i18n.vat.countries[f.toUpperCase()])
            }
        },
        _at: function (c) {
            if (!/^ATU[0-9]{8}$/.test(c))return !1;
            c = c.substr(3);
            for (var b = 0, a = [1, 2, 1, 2, 1, 2, 1], d = 0, f = 0; 7 > f; f++)d = parseInt(c.charAt(f), 10) * a[f], 9 < d && (d = Math.floor(d / 10) + d % 10), b += d;
            return b = 10 - (b + 4) % 10, 10 === b && (b = 0), b + "" === c.substr(7, 1)
        },
        _be: function (c) {
            return /^BE[0]{0,1}[0-9]{9}$/.test(c) && (c = c.substr(2), 9 === c.length && (c = "0" + c), "0" !== c.substr(1, 1)) ? 0 === (parseInt(c.substr(0, 8), 10) + parseInt(c.substr(8, 2), 10)) % 97 : !1
        },
        _bg: function (c) {
            if (!/^BG[0-9]{9,10}$/.test(c))return !1;
            c = c.substr(2);
            var b = 0, a = 0;
            if (9 ===
                c.length) {
                for (a = 0; 8 > a; a++)b += parseInt(c.charAt(a), 10) * (a + 1);
                if (b %= 11, 10 === b)for (a = b = 0; 8 > a; a++)b += parseInt(c.charAt(a), 10) * (a + 3);
                return b %= 10, b + "" === c.substr(8)
            }
            return 10 === c.length ? (b = function (a) {
                for (var b = 0, c = [21, 19, 17, 13, 11, 9, 7, 3, 1], d = 0; 9 > d; d++)b += parseInt(a.charAt(d), 10) * c[d];
                return b %= 10, b + "" === a.substr(9, 1)
            }, a = function (a) {
                for (var b = 0, c = [4, 3, 2, 7, 6, 5, 4, 3, 2], d = 0; 9 > d; d++)b += parseInt(a.charAt(d), 10) * c[d];
                return b = 11 - b % 11, 10 === b ? !1 : (11 === b && (b = 0), b + "" === a.substr(9, 1))
            }, function (a) {
                var b = parseInt(a.substr(0,
                        2), 10) + 1900, c = parseInt(a.substr(2, 2), 10), m = parseInt(a.substr(4, 2), 10);
                if (40 < c ? (b += 100, c -= 40) : 20 < c && (b -= 100, c -= 20), !d.fn.bootstrapValidator.helpers.date(b, c, m))return !1;
                b = 0;
                c = [2, 4, 8, 5, 10, 9, 7, 3, 6];
                for (m = 0; 9 > m; m++)b += parseInt(a.charAt(m), 10) * c[m];
                return b = b % 11 % 10, b + "" === a.substr(9, 1)
            }(c) || b(c) || a(c)) : !1
        },
        _br: function (c) {
            if ("" === c)return !0;
            c = c.replace(/[^\d]+/g, "");
            if ("" === c || 14 !== c.length || "00000000000000" === c || "11111111111111" === c || "22222222222222" === c || "33333333333333" === c || "44444444444444" === c || "55555555555555" ===
                c || "66666666666666" === c || "77777777777777" === c || "88888888888888" === c || "99999999999999" === c)return !1;
            for (var b = c.length - 2, a = c.substring(0, b), d = c.substring(b), f = 0, k = b - 7, m = b; 1 <= m; m--)f += parseInt(a.charAt(b - m), 10) * k--, 2 > k && (k = 9);
            var s;
            if ((2 > f % 11 ? 0 : 11 - f % 11) !== parseInt(d.charAt(0), 10))return !1;
            b += 1;
            a = c.substring(0, b);
            f = 0;
            k = b - 7;
            for (m = b; 1 <= m; m--)f += parseInt(a.charAt(b - m), 10) * k--, 2 > k && (k = 9);
            return s = 2 > f % 11 ? 0 : 11 - f % 11, s === parseInt(d.charAt(1), 10)
        },
        _ch: function (c) {
            if (!/^CHE[0-9]{9}(MWST)?$/.test(c))return !1;
            c =
                c.substr(3);
            for (var b = 0, a = [5, 4, 3, 2, 7, 6, 5, 4], d = 0; 8 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return b = 11 - b % 11, 10 === b ? !1 : (11 === b && (b = 0), b + "" === c.substr(8, 1))
        },
        _cy: function (c) {
            if (!/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(c) || (c = c.substr(2), "12" === c.substr(0, 2)))return !1;
            for (var b = 0, a = {0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21}, d = 0; 8 > d; d++) {
                var f = parseInt(c.charAt(d), 10);
                0 === d % 2 && (f = a[f + ""]);
                b += f
            }
            return b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[b % 26], b + "" === c.substr(8, 1)
        },
        _cz: function (c) {
            if (!/^CZ[0-9]{8,10}$/.test(c))return !1;
            c = c.substr(2);
            var b = 0, a = 0;
            if (8 === c.length) {
                if ("9" == c.charAt(0) + "")return !1;
                for (a = b = 0; 7 > a; a++)b += parseInt(c.charAt(a), 10) * (8 - a);
                return b = 11 - b % 11, 10 === b && (b = 0), 11 === b && (b = 1), b + "" === c.substr(7, 1)
            }
            if (9 === c.length && "6" == c.charAt(0) + "") {
                for (a = b = 0; 7 > a; a++)b += parseInt(c.charAt(a + 1), 10) * (8 - a);
                return b = 11 - b % 11, 10 === b && (b = 0), 11 === b && (b = 1), b = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][b - 1], b + "" === c.substr(8, 1)
            }
            if (9 === c.length || 10 === c.length) {
                var b = 1900 + parseInt(c.substr(0, 2), 10), a = parseInt(c.substr(2, 2), 10) % 50 % 20, e = parseInt(c.substr(4,
                    2), 10);
                if (9 === c.length) {
                    if (1980 <= b && (b -= 100), 1953 < b)return !1
                } else 1954 > b && (b += 100);
                return d.fn.bootstrapValidator.helpers.date(b, a, e) ? 10 === c.length ? (a = parseInt(c.substr(0, 9), 10) % 11, 1985 > b && (a %= 10), a + "" === c.substr(9, 1)) : !0 : !1
            }
            return !1
        },
        _de: function (c) {
            return /^DE[0-9]{9}$/.test(c) ? (c = c.substr(2), d.fn.bootstrapValidator.helpers.mod11And10(c)) : !1
        },
        _dk: function (c) {
            if (!/^DK[0-9]{8}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = 0, a = [2, 7, 6, 5, 4, 3, 2, 1], d = 0; 8 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return 0 === b %
                11
        },
        _ee: function (c) {
            if (!/^EE[0-9]{9}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = 0, a = [3, 7, 1, 3, 7, 1, 3, 7, 1], d = 0; 9 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return 0 === b % 10
        },
        _es: function (c) {
            if (!/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(c))return !1;
            c = c.substr(2);
            var b = function (a) {
                var b = parseInt(a.substr(0, 8), 10);
                return b = "TRWAGMYFPDXBNJZSQVHLCKE"[b % 23], b + "" === a.substr(8, 1)
            }, a = function (a) {
                var b = ["XYZ".indexOf(a.charAt(0)), a.substr(1)].join("");
                return b = parseInt(b, 10), b = "TRWAGMYFPDXBNJZSQVHLCKE"[b % 23], b + "" === a.substr(8,
                    1)
            }, d = function (a) {
                var b, c = a.charAt(0);
                if (-1 !== "KLM".indexOf(c))return b = parseInt(a.substr(1, 8), 10), b = "TRWAGMYFPDXBNJZSQVHLCKE"[b % 23], b + "" === a.substr(8, 1);
                if (-1 !== "ABCDEFGHJNPQRSUVW".indexOf(c)) {
                    b = 0;
                    for (var c = [2, 1, 2, 1, 2, 1, 2], d = 0, e = 0; 7 > e; e++)d = parseInt(a.charAt(e + 1), 10) * c[e], 9 < d && (d = Math.floor(d / 10) + d % 10), b += d;
                    return b = 10 - b % 10, b + "" === a.substr(8, 1) || "JABCDEFGHI"[b] === a.substr(8, 1)
                }
                return !1
            }, f = c.charAt(0);
            return /^[0-9]$/.test(f) ? b(c) : /^[XYZ]$/.test(f) ? a(c) : d(c)
        },
        _fi: function (c) {
            if (!/^FI[0-9]{8}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = 0, a = [7, 9, 10, 5, 8, 4, 2, 1], d = 0; 8 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return 0 === b % 11
        },
        _fr: function (c) {
            if (!/^FR[0-9A-Z]{2}[0-9]{9}$/.test(c) || (c = c.substr(2), !d.fn.bootstrapValidator.helpers.luhn(c.substr(2))))return !1;
            if (/^[0-9]{2}$/.test(c.substr(0, 2)))return c.substr(0, 2) === parseInt(c.substr(2) + "12", 10) % 97 + "";
            var b;
            return b = /^[0-9]{1}$/.test(c.charAt(0)) ? 24 * "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(c.charAt(0)) + "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(c.charAt(1)) - 10 :
            34 * "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(c.charAt(0)) + "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(c.charAt(1)) - 100, (parseInt(c.substr(2), 10) + 1 + Math.floor(b / 11)) % 11 === b % 11
        },
        _gb: function (c) {
            if (!(/^GB[0-9]{9}$/.test(c) || /^GB[0-9]{12}$/.test(c) || /^GBGD[0-9]{3}$/.test(c) || /^GBHA[0-9]{3}$/.test(c) || /^GB(GD|HA)8888[0-9]{5}$/.test(c)))return !1;
            c = c.substr(2);
            var b = c.length;
            if (5 === b)return b = c.substr(0, 2), c = parseInt(c.substr(2), 10), "GD" === b && 500 > c || "HA" === b && 500 <= c;
            if (11 === b && ("GD8888" === c.substr(0,
                    6) || "HA8888" === c.substr(0, 6)))return "GD" === c.substr(0, 2) && 500 <= parseInt(c.substr(6, 3), 10) || "HA" === c.substr(0, 2) && 500 > parseInt(c.substr(6, 3), 10) ? !1 : parseInt(c.substr(6, 3), 10) % 97 === parseInt(c.substr(9, 2), 10);
            if (9 === b || 12 === b) {
                for (var b = 0, a = [8, 7, 6, 5, 4, 3, 2, 10, 1], d = 0; 9 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
                return b %= 97, 100 <= parseInt(c.substr(0, 3), 10) ? 0 === b || 42 === b || 55 === b : 0 === b
            }
            return !0
        },
        _gr: function (c) {
            if (!/^GR[0-9]{9}$/.test(c))return !1;
            c = c.substr(2);
            8 === c.length && (c = "0" + c);
            for (var b = 0, a = [256, 128, 64,
                32, 16, 8, 4, 2], d = 0; 8 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return b = b % 11 % 10, b + "" === c.substr(8, 1)
        },
        _el: function (c) {
            return /^EL[0-9]{9}$/.test(c) ? (c = "GR" + c.substr(2), this._gr(c)) : !1
        },
        _hu: function (c) {
            if (!/^HU[0-9]{8}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = 0, a = [9, 7, 3, 1, 9, 7, 3, 1], d = 0; 8 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return 0 === b % 10
        },
        _hr: function (c) {
            return /^HR[0-9]{11}$/.test(c) ? (c = c.substr(2), d.fn.bootstrapValidator.helpers.mod11And10(c)) : !1
        },
        _ie: function (c) {
            if (!/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(c))return !1;
            c = c.substr(2);
            var b = function (a) {
                for (; 7 > a.length;)a = "0" + a;
                for (var b = 0, c = 0; 7 > c; c++)b += parseInt(a.charAt(c), 10) * (8 - c);
                return b += 9 * "WABCDEFGHIJKLMNOPQRSTUV".indexOf(a.substr(7)), "WABCDEFGHIJKLMNOPQRSTUV"[b % 23]
            };
            return /^[0-9]+$/.test(c.substr(0, 7)) ? c.charAt(7) === b(c.substr(0, 7) + c.substr(8) + "") : -1 !== "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(c.charAt(1)) ? c.charAt(7) === b(c.substr(2, 5) + c.substr(0, 1) + "") : !0
        },
        _is: function (c) {
            return /^IS\d{5,6}$/.test(c)
        },
        _it: function (c) {
            if (!/^IT[0-9]{11}$/.test(c) || (c = c.substr(2),
                0 === parseInt(c.substr(0, 7), 10)))return !1;
            var b = parseInt(c.substr(7, 3), 10);
            return 1 > b || 201 < b && 999 !== b && 888 !== b ? !1 : d.fn.bootstrapValidator.helpers.luhn(c)
        },
        _lt: function (c) {
            if (!/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(c))return !1;
            c = c.substr(2);
            var b, a = c.length, d = 0;
            for (b = 0; a - 1 > b; b++)d += parseInt(c.charAt(b), 10) * (1 + b % 9);
            var f = d % 11;
            if (10 === f)for (b = d = 0; a - 1 > b; b++)d += parseInt(c.charAt(b), 10) * (1 + (b + 2) % 9);
            return f = f % 11 % 10, f + "" === c.charAt(a - 1)
        },
        _lu: function (c) {
            return /^LU[0-9]{8}$/.test(c) ? (c = c.substr(2),
            parseInt(c.substr(0, 6), 10) % 89 + "" === c.substr(6, 2)) : !1
        },
        _lv: function (c) {
            if (!/^LV[0-9]{11}$/.test(c))return !1;
            c = c.substr(2);
            var b;
            b = parseInt(c.charAt(0), 10);
            var a = 0, e = [], f = c.length;
            if (3 < b) {
                a = 0;
                e = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
                for (b = 0; f > b; b++)a += parseInt(c.charAt(b), 10) * e[b];
                return a %= 11, 3 === a
            }
            a = parseInt(c.substr(0, 2), 10);
            e = parseInt(c.substr(2, 2), 10);
            b = parseInt(c.substr(4, 2), 10);
            if (b = b + 1800 + 100 * parseInt(c.charAt(6), 10), !d.fn.bootstrapValidator.helpers.date(b, e, a))return !1;
            a = 0;
            e = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
            for (b =
                     0; f - 1 > b; b++)a += parseInt(c.charAt(b), 10) * e[b];
            return a = (a + 1) % 11 % 10, a + "" === c.charAt(f - 1)
        },
        _mt: function (c) {
            if (!/^MT[0-9]{8}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = 0, a = [3, 4, 6, 7, 8, 9, 10, 1], d = 0; 8 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return 0 === b % 37
        },
        _nl: function (c) {
            if (!/^NL[0-9]{9}B[0-9]{2}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = 0, a = [9, 8, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return b %= 11, 9 < b && (b = 0), b + "" === c.substr(8, 1)
        },
        _no: function (c) {
            if (!/^NO[0-9]{9}$/.test(c))return !1;
            c =
                c.substr(2);
            for (var b = 0, a = [3, 2, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return b = 11 - b % 11, 11 === b && (b = 0), b + "" === c.substr(8, 1)
        },
        _pl: function (c) {
            if (!/^PL[0-9]{10}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = 0, a = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], d = 0; 10 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return 0 === b % 11
        },
        _pt: function (c) {
            if (!/^PT[0-9]{9}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = 0, a = [9, 8, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return b = 11 - b % 11, 9 < b && (b = 0), b + "" === c.substr(8, 1)
        },
        _ro: function (c) {
            if (!/^RO[1-9][0-9]{1,9}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = c.length, a = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - b), d = 0, f = 0; b - 1 > f; f++)d += parseInt(c.charAt(f), 10) * a[f];
            return d = 10 * d % 11 % 10, d + "" === c.substr(b - 1, 1)
        },
        _ru: function (c) {
            if (!/^RU([0-9]{9}|[0-9]{12})$/.test(c))return !1;
            c = c.substr(2);
            var b = 0;
            if (10 === c.length) {
                for (var a = 0, d = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0], b = 0; 10 > b; b++)a += parseInt(c.charAt(b), 10) * d[b];
                return a %= 11, 9 < a && (a %= 10), a + "" === c.substr(9, 1)
            }
            if (12 === c.length) {
                for (var a = 0, d = [7, 2, 4, 10, 3, 5,
                    9, 4, 6, 8, 0], f = 0, k = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0], b = 0; 11 > b; b++)a += parseInt(c.charAt(b), 10) * d[b], f += parseInt(c.charAt(b), 10) * k[b];
                return a %= 11, 9 < a && (a %= 10), f %= 11, 9 < f && (f %= 10), a + "" === c.substr(10, 1) && f + "" === c.substr(11, 1)
            }
            return !1
        },
        _rs: function (c) {
            if (!/^RS[0-9]{9}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = 10, a = 0, d = 0; 8 > d; d++)a = (parseInt(c.charAt(d), 10) + b) % 10, 0 === a && (a = 10), b = 2 * a % 11;
            return 1 === (b + parseInt(c.substr(8, 1), 10)) % 10
        },
        _se: function (c) {
            return /^SE[0-9]{10}01$/.test(c) ? (c = c.substr(2, 10), d.fn.bootstrapValidator.helpers.luhn(c)) :
                !1
        },
        _si: function (c) {
            if (!/^SI[0-9]{8}$/.test(c))return !1;
            c = c.substr(2);
            for (var b = 0, a = [8, 7, 6, 5, 4, 3, 2], d = 0; 7 > d; d++)b += parseInt(c.charAt(d), 10) * a[d];
            return b = 11 - b % 11, 10 === b && (b = 0), b + "" === c.substr(7, 1)
        },
        _sk: function (c) {
            return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(c) ? 0 === parseInt(c.substr(2), 10) % 11 : !1
        },
        _za: function (c) {
            return /^ZA4\d{9}$/.test(c)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.vin = d.extend(d.fn.bootstrapValidator.i18n.vin || {}, {"default": "Please enter a valid VIN number"});
    d.fn.bootstrapValidator.validators.vin = {
        validate: function (c, b) {
            var a = b.val();
            if ("" === a)return !0;
            if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(a))return !1;
            for (var a = a.toUpperCase(), d = {
                A: 1,
                B: 2,
                C: 3,
                D: 4,
                E: 5,
                F: 6,
                G: 7,
                H: 8,
                J: 1,
                K: 2,
                L: 3,
                M: 4,
                N: 5,
                P: 7,
                R: 9,
                S: 2,
                T: 3,
                U: 4,
                V: 5,
                W: 6,
                X: 7,
                Y: 8,
                Z: 9,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                0: 0
            }, f = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4,
                3, 2], k = 0, m = a.length, s = 0; m > s; s++)k += d[a.charAt(s) + ""] * f[s];
            d = k % 11;
            return 10 === d && (d = "X"), d + "" === a.charAt(8)
        }
    }
})(window.jQuery);
(function (d) {
    d.fn.bootstrapValidator.i18n.zipCode = d.extend(d.fn.bootstrapValidator.i18n.zipCode || {}, {
        "default": "Please enter a valid zip code",
        countryNotSupported: "The country code %s is not supported",
        country: "Please enter a valid %s",
        countries: {
            BR: "Brazilian postal code",
            CA: "Canadian postal code",
            DK: "Danish postal code",
            GB: "United Kingdom postal code",
            IT: "Italian postal code",
            MA: "Moroccan postal code",
            NL: "Dutch postal code",
            SE: "Swiss postal code",
            SG: "Singapore postal code",
            US: "US zip code"
        }
    });
    d.fn.bootstrapValidator.validators.zipCode =
    {
        html5Attributes: {message: "message", country: "country"},
        COUNTRY_CODES: "BR CA DK GB IT MA NL SE SG US".split(" "),
        validate: function (c, b, a) {
            var e = b.val();
            if ("" === e || !a.country)return !0;
            var f = a.country;
            if (("string" != typeof f || -1 === d.inArray(f, this.COUNTRY_CODES)) && (f = c.getDynamicOption(b, f)), !f || -1 === d.inArray(f.toUpperCase(), this.COUNTRY_CODES))return {
                valid: !1,
                message: d.fn.bootstrapValidator.helpers.format(d.fn.bootstrapValidator.i18n.zipCode.countryNotSupported, f)
            };
            c = !1;
            switch (f = f.toUpperCase()) {
                case "BR":
                    c =
                        /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(e);
                    break;
                case "CA":
                    c = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(e);
                    break;
                case "DK":
                    c = /^(DK(-|\s)?)?\d{4}$/i.test(e);
                    break;
                case "GB":
                    c = this._gb(e);
                    break;
                case "IT":
                    c = /^(I-|IT-)?\d{5}$/i.test(e);
                    break;
                case "MA":
                    c = /^[1-9][0-9]{4}$/i.test(e);
                    break;
                case "NL":
                    c = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(e);
                    break;
                case "SE":
                    c = /^(S-)?\d{3}\s?\d{2}$/i.test(e);
                    break;
                case "SG":
                    c = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(e);
                    break;
                default:
                    c = /^\d{4,5}([\-]?\d{4})?$/.test(e)
            }
            return {
                valid: c,
                message: d.fn.bootstrapValidator.helpers.format(a.message || d.fn.bootstrapValidator.i18n.zipCode.country, d.fn.bootstrapValidator.i18n.zipCode.countries[f])
            }
        },
        _gb: function (c) {
            for (var b = [RegExp("^([ABCDEFGHIJKLMNOPRSTUWYZ]{1}[ABCDEFGHKLMNOPQRSTUVWXY]?[0-9]{1,2})(\\s*)([0-9]{1}[ABDEFGHJLNPQRSTUWXYZ]{2})$", "i"), RegExp("^([ABCDEFGHIJKLMNOPRSTUWYZ]{1}[0-9]{1}[ABCDEFGHJKPMNRSTUVWXY]{1})(\\s*)([0-9]{1}[ABDEFGHJLNPQRSTUWXYZ]{2})$",
                "i"), RegExp("^([ABCDEFGHIJKLMNOPRSTUWYZ]{1}[ABCDEFGHKLMNOPQRSTUVWXY]{1}?[0-9]{1}[ABEHMNPRVWXY]{1})(\\s*)([0-9]{1}[ABDEFGHJLNPQRSTUWXYZ]{2})$", "i"), /^(BF1)(\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$/i, /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i], a = 0; a < b.length; a++)if (b[a].test(c))return !0;
            return !1
        }
    }
})(window.jQuery);
!function (d) {
    "function" == typeof define && define.amd ? define(["jquery"], d) : d(jQuery)
}(function (d) {
    "undefined" == typeof d && "undefined" != typeof window.jQuery && (d = window.jQuery);
    var c = {
        attr: function (a, b, c) {
            var d, e = {}, f = this.msieversion(), k = new RegExp("^" + b, "i");
            if ("undefined" == typeof a || "undefined" == typeof a[0])return {};
            for (var r in a[0].attributes)if (d = a[0].attributes[r], "undefined" != typeof d && null !== d && (!f || 8 <= f || d.specified) && k.test(d.name)) {
                if ("undefined" != typeof c && (new RegExp(c + "$", "i")).test(d.name))return !0;
                e[this.camelize(d.name.replace(b, ""))] = this.deserializeValue(d.value)
            }
            return "undefined" == typeof c ? e : !1
        }, setAttr: function (a, b, c, d) {
            a[0].setAttribute(this.dasherize(b + c), String(d))
        }, get: function (a, b) {
            for (var c = 0, d = (b || "").split("."); this.isObject(a) || this.isArray(a);)if (a = a[d[c++]], c === d.length)return a
        }, hash: function (a) {
            return String(Math.random()).substring(2, a ? a + 2 : 9)
        }, isArray: function (a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }, isObject: function (a) {
            return a === Object(a)
        }, deserializeValue: function (a) {
            var b;
            try {
                return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? d.parseJSON(a) : a : b) : a
            } catch (c) {
                return a
            }
        }, camelize: function (a) {
            return a.replace(/-+(.)?/g, function (a, b) {
                return b ? b.toUpperCase() : ""
            })
        }, dasherize: function (a) {
            return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }, msieversion: function () {
            var a = window.navigator.userAgent, b = a.indexOf("MSIE ");
            return 0 < b || navigator.userAgent.match(/Trident.*rv\:11\./) ?
                parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : 0
        }
    }, b = {
        namespace: "data-parsley-",
        inputs: "input, textarea, select",
        excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
        priorityEnabled: !0,
        uiEnabled: !0,
        validationThreshold: 3,
        focus: "first",
        trigger: !1,
        errorClass: "parsley-error",
        successClass: "parsley-success",
        classHandler: function () {
        },
        errorsContainer: function () {
        },
        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
        errorTemplate: "<li></li>"
    }, a = function () {
    };
    a.prototype =
    {
        asyncSupport: !1, actualizeOptions: function () {
        return this.options = this.OptionsFactory.get(this), this
    }, validateThroughValidator: function (a, b, c) {
        return window.ParsleyValidator.validate.apply(window.ParsleyValidator, [a, b, c])
    }, subscribe: function (a, b) {
        return d.listenTo(this, a.toLowerCase(), b), this
    }, unsubscribe: function (a) {
        return d.unsubscribeTo(this, a.toLowerCase()), this
    }, reset: function () {
        if ("ParsleyForm" !== this.__class__)return d.emit("parsley:field:reset", this);
        for (var a = 0; a < this.fields.length; a++)d.emit("parsley:field:reset",
            this.fields[a]);
        d.emit("parsley:form:reset", this)
    }, destroy: function () {
        if ("ParsleyForm" !== this.__class__)return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void d.emit("parsley:field:destroy", this);
        for (var a = 0; a < this.fields.length; a++)this.fields[a].destroy();
        this.$element.removeData("Parsley");
        d.emit("parsley:form:destroy", this)
    }
    };
    var e = function () {
        var a = {}, b = function (a) {
            this.__class__ = "Validator";
            this.__version__ = "1.0.0";
            this.options = a || {};
            this.bindingKey =
                this.options.bindingKey || "_validatorjsConstraint"
        };
        b.prototype = {
            constructor: b, validate: function (a, b, c) {
                if ("string" != typeof a && "object" != typeof a)throw Error("You must validate an object or a string");
                return "string" == typeof a || k(a) ? this._validateString(a, b, c) : this.isBinded(a) ? this._validateBindedObject(a, b) : this._validateObject(a, b, c)
            }, bind: function (a, b) {
                if ("object" != typeof a)throw Error("Must bind a Constraint to an object");
                return a[this.bindingKey] = new c(b), this
            }, unbind: function (a) {
                return "undefined" == typeof a._validatorjsConstraint ? this : (delete a[this.bindingKey], this)
            }, isBinded: function (a) {
                return "undefined" != typeof a[this.bindingKey]
            }, getBinded: function (a) {
                return this.isBinded(a) ? a[this.bindingKey] : null
            }, _validateString: function (a, b, c) {
                var h, f = [];
                k(b) || (b = [b]);
                for (var n = 0; n < b.length; n++) {
                    if (!(b[n]instanceof e))throw Error("You must give an Assert or an Asserts array to validate a string");
                    h = b[n].check(a, c);
                    h instanceof d && f.push(h)
                }
                return f.length ? f : !0
            }, _validateObject: function (a, b, d) {
                if ("object" != typeof b)throw Error("You must give a constraint to validate an object");
                return b instanceof c ? b.check(a, d) : (new c(b)).check(a, d)
            }, _validateBindedObject: function (a, b) {
                return a[this.bindingKey].check(a, b)
            }
        };
        b.errorCode = {
            must_be_a_string: "must_be_a_string",
            must_be_an_array: "must_be_an_array",
            must_be_a_number: "must_be_a_number",
            must_be_a_string_or_array: "must_be_a_string_or_array"
        };
        var c = function (a, b) {
            if (this.__class__ = "Constraint", this.options = b || {}, this.nodes = {}, a)try {
                this._bootstrap(a)
            } catch (c) {
                throw Error("Should give a valid mapping object to Constraint",
                    c, a);
            }
        };
        c.prototype = {
            constructor: c, check: function (a, b) {
                var c, d = {}, h;
                for (h in this.nodes) {
                    for (var n = !1, m = this.get(h), m = k(m) ? m : [m], v = m.length - 1; 0 <= v; v--)"Required" !== m[v].__class__ || (n = m[v].requiresValidation(b));
                    if (this.has(h, a) || this.options.strict || n)try {
                        this.has(h, this.options.strict || n ? a : void 0) || (new e).HaveProperty(h).validate(a), c = this._check(h, a[h], b), (k(c) && 0 < c.length || !k(c) && !f(c)) && (d[h] = c)
                    } catch (p) {
                        d[h] = p
                    }
                }
                return f(d) ? !0 : d
            }, add: function (a, b) {
                if (b instanceof e || k(b) && b[0]instanceof e)return this.nodes[a] =
                    b, this;
                if ("object" == typeof b && !k(b))return this.nodes[a] = b instanceof c ? b : new c(b), this;
                throw Error("Should give an Assert, an Asserts array, a Constraint", b);
            }, has: function (a, b) {
                return b = "undefined" != typeof b ? b : this.nodes, "undefined" != typeof b[a]
            }, get: function (a, b) {
                return this.has(a) ? this.nodes[a] : b || null
            }, remove: function (a) {
                var b = [], c;
                for (c in this.nodes)c !== a && (b[c] = this.nodes[c]);
                return this.nodes = b, this
            }, _bootstrap: function (a) {
                if (a instanceof c)return this.nodes = a.nodes;
                for (var b in a)this.add(b,
                    a[b])
            }, _check: function (a, b, d) {
                if (this.nodes[a]instanceof e)return this._checkAsserts(b, [this.nodes[a]], d);
                if (k(this.nodes[a]))return this._checkAsserts(b, this.nodes[a], d);
                if (this.nodes[a]instanceof c)return this.nodes[a].check(b, d);
                throw Error("Invalid node", this.nodes[a]);
            }, _checkAsserts: function (a, b, c) {
                for (var d, e = [], h = 0; h < b.length; h++)d = b[h].check(a, c), "undefined" != typeof d && !0 !== d && e.push(d);
                return e
            }
        };
        var d = function (a, b, c) {
            if (this.__class__ = "Violation", !(a instanceof e))throw Error("Should give an assertion implementing the Assert interface");
            this.assert = a;
            this.value = b;
            "undefined" != typeof c && (this.violation = c)
        };
        d.prototype = {
            show: function () {
                var a = {assert: this.assert.__class__, value: this.value};
                return this.violation && (a.violation = this.violation), a
            }, __toString: function () {
                return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
            }, getViolation: function () {
                var a, b;
                for (a in this.violation)b =
                    this.violation[a];
                return {constraint: a, expected: b}
            }
        };
        var e = function (a) {
            this.__parentClass__ = this.__class__ = "Assert";
            this.groups = [];
            "undefined" != typeof a && this.addGroup(a)
        };
        e.prototype = {
            construct: e, requiresValidation: function (a) {
                return a && !this.hasGroup(a) ? !1 : !a && this.hasGroups() ? !1 : !0
            }, check: function (a, b) {
                if (this.requiresValidation(b))try {
                    return this.validate(a, b)
                } catch (c) {
                    return c
                }
            }, hasGroup: function (a) {
                return k(a) ? this.hasOneOf(a) : "Any" === a ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(a) : "Default" ===
                a
            }, hasOneOf: function (a) {
                for (var b = 0; b < a.length; b++)if (this.hasGroup(a[b]))return !0;
                return !1
            }, hasGroups: function () {
                return 0 < this.groups.length
            }, addGroup: function (a) {
                return k(a) ? this.addGroups(a) : (this.hasGroup(a) || this.groups.push(a), this)
            }, removeGroup: function (a) {
                for (var b = [], c = 0; c < this.groups.length; c++)a !== this.groups[c] && b.push(this.groups[c]);
                return this.groups = b, this
            }, addGroups: function (a) {
                for (var b = 0; b < a.length; b++)this.addGroup(a[b]);
                return this
            }, HaveProperty: function (a) {
                return this.__class__ =
                    "HaveProperty", this.node = a, this.validate = function (a) {
                    if ("undefined" == typeof a[this.node])throw new d(this, a, {value: this.node});
                    return !0
                }, this
            }, Blank: function () {
                return this.__class__ = "Blank", this.validate = function (a) {
                    if ("string" != typeof a)throw new d(this, a, {value: b.errorCode.must_be_a_string});
                    if ("" !== a.replace(/^\s+/g, "").replace(/\s+$/g, ""))throw new d(this, a);
                    return !0
                }, this
            }, Callback: function (a) {
                if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ?
                        this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof a)throw Error("Callback must be instanciated with a function");
                return this.fn = a, this.validate = function (a) {
                    var b = this.fn.apply(this, [a].concat(this.arguments));
                    if (!0 !== b)throw new d(this, a, {result: b});
                    return !0
                }, this
            }, Choice: function (a) {
                if (this.__class__ = "Choice", !k(a) && "function" != typeof a)throw Error("Choice must be instanciated with an array or a function");
                return this.list = a, this.validate = function (a) {
                    for (var b = "function" == typeof this.list ?
                        this.list() : this.list, c = 0; c < b.length; c++)if (a === b[c])return !0;
                    throw new d(this, a, {choices: b});
                }, this
            }, Collection: function (a) {
                return this.__class__ = "Collection", this.constraint = "undefined" != typeof a ? a instanceof e ? a : new c(a) : !1, this.validate = function (a, c) {
                    var e, h = new b, m = 0, v = {}, r = this.groups.length ? this.groups : c;
                    if (!k(a))throw new d(this, array, {value: b.errorCode.must_be_an_array});
                    for (var p = 0; p < a.length; p++)e = this.constraint ? h.validate(a[p], this.constraint, r) : h.validate(a[p], r), f(e) || (v[m] = e), m++;
                    return f(v) ? !0 : v
                }, this
            }, Count: function (a) {
                return this.__class__ = "Count", this.count = a, this.validate = function (a) {
                    if (!k(a))throw new d(this, a, {value: b.errorCode.must_be_an_array});
                    var c = "function" == typeof this.count ? this.count(a) : this.count;
                    if (isNaN(Number(c)))throw Error("Count must be a valid interger", c);
                    if (c !== a.length)throw new d(this, a, {count: c});
                    return !0
                }, this
            }, Email: function () {
                return this.__class__ = "Email", this.validate = function (a) {
                    if ("string" != typeof a)throw new d(this, a, {value: b.errorCode.must_be_a_string});
                    if (!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a))throw new d(this,
                        a);
                    return !0
                }, this
            }, EqualTo: function (a) {
                if (this.__class__ = "EqualTo", "undefined" == typeof a)throw Error("EqualTo must be instanciated with a value or a function");
                return this.reference = a, this.validate = function (a) {
                    var b = "function" == typeof this.reference ? this.reference(a) : this.reference;
                    if (b !== a)throw new d(this, a, {value: b});
                    return !0
                }, this
            }, GreaterThan: function (a) {
                if (this.__class__ = "GreaterThan", "undefined" == typeof a)throw Error("Should give a threshold value");
                return this.threshold = a, this.validate = function (a) {
                    if ("" ===
                        a || isNaN(Number(a)))throw new d(this, a, {value: b.errorCode.must_be_a_number});
                    if (this.threshold >= a)throw new d(this, a, {threshold: this.threshold});
                    return !0
                }, this
            }, GreaterThanOrEqual: function (a) {
                if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof a)throw Error("Should give a threshold value");
                return this.threshold = a, this.validate = function (a) {
                    if ("" === a || isNaN(Number(a)))throw new d(this, a, {value: b.errorCode.must_be_a_number});
                    if (this.threshold > a)throw new d(this, a, {threshold: this.threshold});
                    return !0
                },
                    this
            }, InstanceOf: function (a) {
                if (this.__class__ = "InstanceOf", "undefined" == typeof a)throw Error("InstanceOf must be instanciated with a value");
                return this.classRef = a, this.validate = function (a) {
                    if (!0 != a instanceof this.classRef)throw new d(this, a, {classRef: this.classRef});
                    return !0
                }, this
            }, Length: function (a) {
                if (this.__class__ = "Length", !a.min && !a.max)throw Error("Lenth assert must be instanciated with a { min: x, max: y } object");
                return this.min = a.min, this.max = a.max, this.validate = function (a) {
                    if ("string" != typeof a && !k(a))throw new d(this, a, {value: b.errorCode.must_be_a_string_or_array});
                    if ("undefined" != typeof this.min && this.min === this.max && a.length !== this.min)throw new d(this, a, {
                        min: this.min,
                        max: this.max
                    });
                    if ("undefined" != typeof this.max && a.length > this.max)throw new d(this, a, {max: this.max});
                    if ("undefined" != typeof this.min && a.length < this.min)throw new d(this, a, {min: this.min});
                    return !0
                }, this
            }, LessThan: function (a) {
                if (this.__class__ = "LessThan", "undefined" == typeof a)throw Error("Should give a threshold value");
                return this.threshold = a, this.validate = function (a) {
                    if ("" === a || isNaN(Number(a)))throw new d(this, a, {value: b.errorCode.must_be_a_number});
                    if (this.threshold <= a)throw new d(this, a, {threshold: this.threshold});
                    return !0
                }, this
            }, LessThanOrEqual: function (a) {
                if (this.__class__ = "LessThanOrEqual", "undefined" == typeof a)throw Error("Should give a threshold value");
                return this.threshold = a, this.validate = function (a) {
                    if ("" === a || isNaN(Number(a)))throw new d(this, a, {value: b.errorCode.must_be_a_number});
                    if (this.threshold <
                        a)throw new d(this, a, {threshold: this.threshold});
                    return !0
                }, this
            }, NotNull: function () {
                return this.__class__ = "NotNull", this.validate = function (a) {
                    if (null === a || "undefined" == typeof a)throw new d(this, a);
                    return !0
                }, this
            }, NotBlank: function () {
                return this.__class__ = "NotBlank", this.validate = function (a) {
                    if ("string" != typeof a)throw new d(this, a, {value: b.errorCode.must_be_a_string});
                    if ("" === a.replace(/^\s+/g, "").replace(/\s+$/g, ""))throw new d(this, a);
                    return !0
                }, this
            }, Null: function () {
                return this.__class__ = "Null",
                    this.validate = function (a) {
                        if (null !== a)throw new d(this, a);
                        return !0
                    }, this
            }, Range: function (a, b) {
                if (this.__class__ = "Range", "undefined" == typeof a || "undefined" == typeof b)throw Error("Range assert expects min and max values");
                return this.min = a, this.max = b, this.validate = function (a) {
                    try {
                        return "string" == typeof a && isNaN(Number(a)) || k(a) ? (new e).Length({
                            min: this.min,
                            max: this.max
                        }).validate(a) : (new e).GreaterThanOrEqual(this.min).validate(a) && (new e).LessThanOrEqual(this.max).validate(a), !0
                    } catch (b) {
                        throw new d(this,
                            a, b.violation);
                    }
                }, this
            }, Regexp: function (a, c) {
                if (this.__class__ = "Regexp", "undefined" == typeof a)throw Error("You must give a regexp");
                return this.regexp = a, this.flag = c || "", this.validate = function (a) {
                    if ("string" != typeof a)throw new d(this, a, {value: b.errorCode.must_be_a_string});
                    if (!(new RegExp(this.regexp, this.flag)).test(a))throw new d(this, a, {
                        regexp: this.regexp,
                        flag: this.flag
                    });
                    return !0
                }, this
            }, Required: function () {
                return this.__class__ = "Required", this.validate = function (a) {
                    if ("undefined" == typeof a)throw new d(this,
                        a);
                    try {
                        "string" == typeof a ? (new e).NotNull().validate(a) && (new e).NotBlank().validate(a) : !0 === k(a) && (new e).Length({min: 1}).validate(a)
                    } catch (b) {
                        throw new d(this, a);
                    }
                    return !0
                }, this
            }, Unique: function (a) {
                return this.__class__ = "Unique", "object" == typeof a && (this.key = a.key), this.validate = function (a) {
                    var c, e = [];
                    if (!k(a))throw new d(this, a, {value: b.errorCode.must_be_an_array});
                    for (var h = 0; h < a.length; h++)if (c = "object" == typeof a[h] ? a[h][this.key] : a[h], "undefined" != typeof c) {
                        if (-1 !== e.indexOf(c))throw new d(this,
                            a, {value: c});
                        e.push(c)
                    }
                    return !0
                }, this
            }
        };
        a.Assert = e;
        a.Validator = b;
        a.Violation = d;
        a.Constraint = c;
        Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
            if (null === this)throw new TypeError;
            var b = Object(this), c = b.length >>> 0;
            if (0 === c)return -1;
            var d = 0;
            if (1 < arguments.length && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && 1 / 0 != d && d != -1 / 0 && (d = (0 < d || -1) * Math.floor(Math.abs(d)))), d >= c)return -1;
            for (d = 0 <= d ? d : Math.max(c - Math.abs(d), 0); c > d; d++)if (d in b && b[d] === a)return d;
            return -1
        });
        var f = function (a) {
            for (var b in a)return !1;
            return !0
        }, k = function (a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        };
        return "function" == typeof define && define.amd ? define("vendors/validator.js/dist/validator", [], function () {
            return a
        }) : "undefined" != typeof module && module.exports ? module.exports = a : window["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = a, a
    }(), e = "undefined" != typeof e ? e : "undefined" != typeof module ? module.exports : null, f = function (a, b) {
        this.__class__ = "ParsleyValidator";
        this.Validator = e;
        this.locale = "en";
        this.init(a ||
            {}, b || {})
    };
    f.prototype = {
        init: function (a, b) {
            this.catalog = b;
            for (var c in a)this.addValidator(c, a[c].fn, a[c].priority, a[c].requirementsTransformer);
            d.emit("parsley:validator:init")
        }, setLocale: function (a) {
            if ("undefined" == typeof this.catalog[a])throw Error(a + " is not available in the catalog");
            return this.locale = a, this
        }, addCatalog: function (a, b, c) {
            return "object" == typeof b && (this.catalog[a] = b), !0 === c ? this.setLocale(a) : this
        }, addMessage: function (a, b, c) {
            return "undefined" == typeof this.catalog[a] && (this.catalog[a] =
            {}), this.catalog[a][b.toLowerCase()] = c, this
        }, validate: function () {
            return (new this.Validator.Validator).validate.apply(new e.Validator, arguments)
        }, addValidator: function (a, b, c, f) {
            return this.validators[a.toLowerCase()] = function (a) {
                return d.extend((new e.Assert).Callback(b, a), {priority: c, requirementsTransformer: f})
            }, this
        }, updateValidator: function (a, b, c, d) {
            return this.addValidator(a, b, c, d)
        }, removeValidator: function (a) {
            return delete this.validators[a], this
        }, getErrorMessage: function (a) {
            var b;
            return b = "type" ===
            a.name ? this.catalog[this.locale][a.name][a.requirements] : this.formatMessage(this.catalog[this.locale][a.name], a.requirements), "" !== b ? b : this.catalog[this.locale].defaultMessage
        }, formatMessage: function (a, b) {
            if ("object" == typeof b) {
                for (var c in b)a = this.formatMessage(a, b[c]);
                return a
            }
            return "string" == typeof a ? a.replace(/%s/i, b) : ""
        }, validators: {
            notblank: function () {
                return d.extend((new e.Assert).NotBlank(), {priority: 2})
            }, required: function () {
                return d.extend((new e.Assert).Required(), {priority: 512})
            }, type: function (a) {
                switch (a) {
                    case "email":
                        a =
                            (new e.Assert).Email();
                        break;
                    case "range":
                    case "number":
                        a = (new e.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
                        break;
                    case "integer":
                        a = (new e.Assert).Regexp("^-?\\d+$");
                        break;
                    case "digits":
                        a = (new e.Assert).Regexp("^\\d+$");
                        break;
                    case "alphanum":
                        a = (new e.Assert).Regexp("^\\w+$", "i");
                        break;
                    case "url":
                        a = (new e.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
                        break;
                    default:
                        throw Error("validator type `" + a + "` is not supported");
                }
                return d.extend(a, {priority: 256})
            }, pattern: function (a) {
                var b = "";
                return /^\/.*\/(?:[gimy]*)$/.test(a) && (b = a.replace(/.*\/([gimy]*)$/, "$1"), a = a.replace(new RegExp("^/(.*?)/" + b + "$"), "$1")), d.extend((new e.Assert).Regexp(a, b), {priority: 64})
            }, minlength: function (a) {
                return d.extend((new e.Assert).Length({min: a}), {
                    priority: 30, requirementsTransformer: function () {
                        return "string" != typeof a || isNaN(a) ? a : parseInt(a, 10)
                    }
                })
            }, maxlength: function (a) {
                return d.extend((new e.Assert).Length({max: a}), {
                    priority: 30, requirementsTransformer: function () {
                        return "string" != typeof a || isNaN(a) ? a : parseInt(a, 10)
                    }
                })
            }, length: function (a) {
                return d.extend((new e.Assert).Length({min: a[0], max: a[1]}), {priority: 32})
            }, mincheck: function (a) {
                return this.minlength(a)
            }, maxcheck: function (a) {
                return this.maxlength(a)
            }, check: function (a) {
                return this.length(a)
            }, min: function (a) {
                return d.extend((new e.Assert).GreaterThanOrEqual(a), {
                    priority: 30,
                    requirementsTransformer: function () {
                        return "string" != typeof a || isNaN(a) ? a : parseInt(a, 10)
                    }
                })
            }, max: function (a) {
                return d.extend((new e.Assert).LessThanOrEqual(a),
                    {
                        priority: 30, requirementsTransformer: function () {
                        return "string" != typeof a || isNaN(a) ? a : parseInt(a, 10)
                    }
                    })
            }, range: function (a) {
                return d.extend((new e.Assert).Range(a[0], a[1]), {
                    priority: 32, requirementsTransformer: function () {
                        for (var b = 0; b < a.length; b++)a[b] = "string" != typeof a[b] || isNaN(a[b]) ? a[b] : parseInt(a[b], 10);
                        return a
                    }
                })
            }, equalto: function (a) {
                return d.extend((new e.Assert).EqualTo(a), {
                    priority: 256, requirementsTransformer: function () {
                        return d(a).length ? d(a).val() : a
                    }
                })
            }
        }
    };
    var k = function () {
        this.__class__ =
            "ParsleyUI"
    };
    k.prototype = {
        listen: function () {
            return d.listen("parsley:form:init", this, this.setupForm), d.listen("parsley:field:init", this, this.setupField), d.listen("parsley:field:validated", this, this.reflow), d.listen("parsley:form:validated", this, this.focus), d.listen("parsley:field:reset", this, this.reset), d.listen("parsley:form:destroy", this, this.destroy), d.listen("parsley:field:destroy", this, this.destroy), this
        }, reflow: function (a) {
            if ("undefined" != typeof a._ui && !1 !== a._ui.active) {
                var b = this._diff(a.validationResult,
                    a._ui.lastValidationResult);
                a._ui.lastValidationResult = a.validationResult;
                a._ui.validatedOnce = !0;
                this.manageStatusClass(a);
                this.manageErrorsMessages(a, b);
                this.actualizeTriggers(a);
                (b.kept.length || b.added.length) && "undefined" == typeof a._ui.failedOnce && this.manageFailingFieldTrigger(a)
            }
        }, getErrorsMessages: function (a) {
            if (!0 === a.validationResult)return [];
            for (var b = [], c = 0; c < a.validationResult.length; c++)b.push(this._getErrorMessage(a, a.validationResult[c].assert));
            return b
        }, manageStatusClass: function (a) {
            !0 ===
            a.validationResult ? this._successClass(a) : 0 < a.validationResult.length ? this._errorClass(a) : this._resetClass(a)
        }, manageErrorsMessages: function (a, b) {
            if ("undefined" == typeof a.options.errorsMessagesDisabled) {
                if ("undefined" != typeof a.options.errorMessage)return b.added.length || b.kept.length ? (0 === a._ui.$errorsWrapper.find(".parsley-custom-error-message").length && a._ui.$errorsWrapper.append(d(a.options.errorTemplate).addClass("parsley-custom-error-message")), a._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(a.options.errorMessage)) :
                    a._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var c = 0; c < b.removed.length; c++)this.removeError(a, b.removed[c].assert.name, !0);
                for (c = 0; c < b.added.length; c++)this.addError(a, b.added[c].assert.name, void 0, b.added[c].assert, !0);
                for (c = 0; c < b.kept.length; c++)this.updateError(a, b.kept[c].assert.name, void 0, b.kept[c].assert, !0)
            }
        }, addError: function (a, b, c, e, f) {
            a._ui.$errorsWrapper.addClass("filled").append(d(a.options.errorTemplate).addClass("parsley-" + b).html(c ||
                this._getErrorMessage(a, e)));
            !0 !== f && this._errorClass(a)
        }, updateError: function (a, b, c, d, e) {
            a._ui.$errorsWrapper.addClass("filled").find(".parsley-" + b).html(c || this._getErrorMessage(a, d));
            !0 !== e && this._errorClass(a)
        }, removeError: function (a, b, c) {
            a._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + b).remove();
            !0 !== c && this.manageStatusClass(a)
        }, focus: function (a) {
            if (!0 === a.validationResult || "none" === a.options.focus)return a._focusedField = null;
            a._focusedField = null;
            for (var b = 0; b < a.fields.length; b++)if (!0 !==
                a.fields[b].validationResult && 0 < a.fields[b].validationResult.length && "undefined" == typeof a.fields[b].options.noFocus) {
                if ("first" === a.options.focus)return a._focusedField = a.fields[b].$element, a._focusedField.focus();
                a._focusedField = a.fields[b].$element
            }
            return null === a._focusedField ? null : a._focusedField.focus()
        }, _getErrorMessage: function (a, b) {
            var c = b.name + "Message";
            return "undefined" != typeof a.options[c] ? window.ParsleyValidator.formatMessage(a.options[c], b.requirements) : window.ParsleyValidator.getErrorMessage(b)
        },
        _diff: function (a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length; f++) {
                for (var k = !1, m = 0; m < b.length; m++)if (a[f].assert.name === b[m].assert.name) {
                    k = !0;
                    break
                }
                k ? e.push(a[f]) : d.push(a[f])
            }
            return {kept: e, added: d, removed: c ? [] : this._diff(b, a, !0).added}
        }, setupForm: function (a) {
            a.$element.on("submit.Parsley", !1, d.proxy(a.onSubmitValidate, a));
            !1 !== a.options.uiEnabled && a.$element.attr("novalidate", "")
        }, setupField: function (a) {
            var b = {active: !1};
            !1 !== a.options.uiEnabled && (b.active = !0, a.$element.attr(a.options.namespace + "id",
                a.__id__), b.$errorClassHandler = this._manageClassHandler(a), b.errorsWrapperId = "parsley-id-" + ("undefined" != typeof a.options.multiple ? "multiple-" + a.options.multiple : a.__id__), b.$errorsWrapper = d(a.options.errorsWrapper).attr("id", b.errorsWrapperId), b.lastValidationResult = [], b.validatedOnce = !1, b.validationInformationVisible = !1, a._ui = b, a.$element.is(a.options.excluded) || this._insertErrorWrapper(a), this.actualizeTriggers(a))
        }, _manageClassHandler: function (a) {
            if ("string" == typeof a.options.classHandler && d(a.options.classHandler).length)return d(a.options.classHandler);
            var b = a.options.classHandler(a);
            return "undefined" != typeof b && b.length ? b : "undefined" == typeof a.options.multiple || a.$element.is("select") ? a.$element : a.$element.parent()
        }, _insertErrorWrapper: function (a) {
            var b;
            if ("string" == typeof a.options.errorsContainer) {
                if (d(a.options.errorsContainer).length)return d(a.options.errorsContainer).append(a._ui.$errorsWrapper);
                window.console && window.console.warn && window.console.warn("The errors container `" + a.options.errorsContainer + "` does not exist in DOM")
            } else"function" == typeof a.options.errorsContainer && (b = a.options.errorsContainer(a));
            return "undefined" != typeof b && b.length ? b.append(a._ui.$errorsWrapper) : "undefined" == typeof a.options.multiple ? a.$element.after(a._ui.$errorsWrapper) : a.$element.parent().after(a._ui.$errorsWrapper)
        }, actualizeTriggers: function (a) {
            var b = this;
            if (a.options.multiple ? d("[" + a.options.namespace + 'multiple="' + a.options.multiple + '"]').each(function () {
                    d(this).off(".Parsley")
                }) : a.$element.off(".Parsley"), !1 !== a.options.trigger) {
                var c = a.options.trigger.replace(/^\s+/g,
                    "").replace(/\s+$/g, "");
                "" !== c && (a.options.multiple ? d("[" + a.options.namespace + 'multiple="' + a.options.multiple + '"]').each(function () {
                    d(this).on(c.split(" ").join(".Parsley ") + ".Parsley", !1, d.proxy("function" == typeof a.eventValidate ? a.eventValidate : b.eventValidate, a))
                }) : a.$element.on(c.split(" ").join(".Parsley ") + ".Parsley", !1, d.proxy("function" == typeof a.eventValidate ? a.eventValidate : this.eventValidate, a)))
            }
        }, eventValidate: function (a) {
            /key/.test(a.type) && !this._ui.validationInformationVisible && this.getValue().length <=
            this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
        }, manageFailingFieldTrigger: function (a) {
            return a._ui.failedOnce = !0, a.options.multiple && d("[" + a.options.namespace + 'multiple="' + a.options.multiple + '"]').each(function () {
                return /change/i.test(d(this).parsley().options.trigger || "") ? void 0 : d(this).on("change.ParsleyFailedOnce", !1, d.proxy(a.validate, a))
            }), a.$element.is("select") && !/change/i.test(a.options.trigger || "") ? a.$element.on("change.ParsleyFailedOnce", !1, d.proxy(a.validate,
                a)) : /keyup/i.test(a.options.trigger || "") ? void 0 : a.$element.on("keyup.ParsleyFailedOnce", !1, d.proxy(a.validate, a))
        }, reset: function (a) {
            a.$element.off(".Parsley");
            a.$element.off(".ParsleyFailedOnce");
            "undefined" != typeof a._ui && "ParsleyForm" !== a.__class__ && (a._ui.$errorsWrapper.children().each(function () {
                d(this).remove()
            }), this._resetClass(a), a._ui.validatedOnce = !1, a._ui.lastValidationResult = [], a._ui.validationInformationVisible = !1)
        }, destroy: function (a) {
            this.reset(a);
            "ParsleyForm" !== a.__class__ && ("undefined" != typeof a._ui && a._ui.$errorsWrapper.remove(), delete a._ui)
        }, _successClass: function (a) {
            a._ui.validationInformationVisible = !0;
            a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)
        }, _errorClass: function (a) {
            a._ui.validationInformationVisible = !0;
            a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)
        }, _resetClass: function (a) {
            a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)
        }
    };
    var m = function (a,
                      b, e, f) {
        this.__class__ = "OptionsFactory";
        this.__id__ = c.hash(4);
        this.fieldOptions = this.formOptions = null;
        this.staticOptions = d.extend(!0, {}, a, b, e, {namespace: f})
    };
    m.prototype = {
        get: function (a) {
            if ("undefined" == typeof a.__class__)throw Error("Parsley Instance expected");
            switch (a.__class__) {
                case "Parsley":
                    return this.staticOptions;
                case "ParsleyForm":
                    return this.getFormOptions(a);
                case "ParsleyField":
                case "ParsleyFieldMultiple":
                    return this.getFieldOptions(a);
                default:
                    throw Error("Instance " + a.__class__ + " is not supported");
            }
        }, getFormOptions: function (a) {
            return this.formOptions = c.attr(a.$element, this.staticOptions.namespace), d.extend({}, this.staticOptions, this.formOptions)
        }, getFieldOptions: function (a) {
            return this.fieldOptions = c.attr(a.$element, this.staticOptions.namespace), null === this.formOptions && "undefined" != typeof a.parent && (this.formOptions = this.getFormOptions(a.parent)), d.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
        }
    };
    var s = function (a, b) {
        if (this.__class__ = "ParsleyForm", this.__id__ = c.hash(4), "OptionsFactory" !==
            c.get(b, "__class__"))throw Error("You must give an OptionsFactory instance");
        this.OptionsFactory = b;
        this.$element = d(a);
        this.validationResult = null;
        this.options = this.OptionsFactory.get(this)
    };
    s.prototype = {
        onSubmitValidate: function (a) {
            return this.validate(void 0, void 0, a), !1 === this.validationResult && a instanceof d.Event && (a.stopImmediatePropagation(), a.preventDefault()), this
        }, validate: function (a, b, c) {
            this.submitEvent = c;
            this.validationResult = !0;
            c = [];
            this._refreshFields();
            d.emit("parsley:form:validate",
                this);
            for (var e = 0; e < this.fields.length; e++)(!a || this._isFieldInGroup(this.fields[e], a)) && (c = this.fields[e].validate(b), !0 !== c && 0 < c.length && this.validationResult && (this.validationResult = !1));
            return d.emit("parsley:form:validated", this), this.validationResult
        }, isValid: function (a, b) {
            this._refreshFields();
            for (var c = 0; c < this.fields.length; c++)if ((!a || this._isFieldInGroup(this.fields[c], a)) && !1 === this.fields[c].isValid(b))return !1;
            return !0
        }, _isFieldInGroup: function (a, b) {
            return c.isArray(a.options.group) ?
            -1 !== d.inArray(a.options.group, b) : a.options.group === b
        }, _refreshFields: function () {
            return this.actualizeOptions()._bindFields()
        }, _bindFields: function () {
            var a = this;
            return this.fields = [], this.fieldsMappedById = {}, this.$element.find(this.options.inputs).each(function () {
                var b = new window.Parsley(this, {}, a);
                "ParsleyField" !== b.__class__ && "ParsleyFieldMultiple" !== b.__class__ || b.$element.is(b.options.excluded) || "undefined" == typeof a.fieldsMappedById[b.__class__ + "-" + b.__id__] && (a.fieldsMappedById[b.__class__ +
                "-" + b.__id__] = b, a.fields.push(b))
            }), this
        }
    };
    var u = function (a, b, e, f, k) {
        if (!/ParsleyField/.test(c.get(a, "__class__")))throw Error("ParsleyField or ParsleyFieldMultiple instance expected");
        if ("function" != typeof window.ParsleyValidator.validators[b] && "Assert" !== window.ParsleyValidator.validators[b](e).__parentClass__)throw Error("Valid validator expected");
        return f = f || ("undefined" != typeof a.options[b + "Priority"] ? a.options[b + "Priority"] : c.get(window.ParsleyValidator.validators[b](e), "priority") || 2), "function" == typeof window.ParsleyValidator.validators[b](e).requirementsTransformer && (e = window.ParsleyValidator.validators[b](e).requirementsTransformer()), d.extend(window.ParsleyValidator.validators[b](e), {
            name: b,
            requirements: e,
            priority: f,
            groups: [f],
            isDomConstraint: k || c.attr(a.$element, a.options.namespace, b)
        })
    }, x = function (a, b, e) {
        this.__class__ = "ParsleyField";
        this.__id__ = c.hash(4);
        this.$element = d(a);
        "undefined" != typeof e ? (this.parent = e, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this)) :
            (this.OptionsFactory = b, this.options = this.OptionsFactory.get(this));
        this.constraints = [];
        this.constraintsByName = {};
        this.validationResult = [];
        this._bindConstraints()
    };
    x.prototype = {
        validate: function (a) {
            return this.value = this.getValue(), d.emit("parsley:field:validate", this), d.emit("parsley:field:" + (this.isValid(a, this.value) ? "success" : "error"), this), d.emit("parsley:field:validated", this), this.validationResult
        }, isValid: function (a, b) {
            this.refreshConstraints();
            var c = this._getConstraintsSortedPriorities();
            if (b = b || this.getValue(), 0 === b.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== a)return this.validationResult = [];
            if (!1 === this.options.priorityEnabled)return !0 === (this.validationResult = this.validateThroughValidator(b, this.constraints, "Any"));
            for (var d = 0; d < c.length; d++)if (!0 !== (this.validationResult = this.validateThroughValidator(b, this.constraints, c[d])))return !1;
            return !0
        }, getValue: function () {
            var a;
            return a = "undefined" != typeof this.options.value ? this.options.value :
                this.$element.val(), "undefined" == typeof a || null === a ? "" : !0 === this.options.trimValue ? a.replace(/^\s+|\s+$/g, "") : a
        }, refreshConstraints: function () {
            return this.actualizeOptions()._bindConstraints()
        }, addConstraint: function (a, b, c, d) {
            if (a = a.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[a])a = new u(this, a, b, c, d), "undefined" !== this.constraintsByName[a.name] && this.removeConstraint(a.name), this.constraints.push(a), this.constraintsByName[a.name] = a;
            return this
        }, removeConstraint: function (a) {
            for (var b =
                0; b < this.constraints.length; b++)if (a === this.constraints[b].name) {
                this.constraints.splice(b, 1);
                break
            }
            return this
        }, updateConstraint: function (a, b, c) {
            return this.removeConstraint(a).addConstraint(a, b, c)
        }, _bindConstraints: function () {
            for (var a = [], b = 0; b < this.constraints.length; b++)!1 === this.constraints[b].isDomConstraint && a.push(this.constraints[b]);
            this.constraints = a;
            for (var c in this.options)this.addConstraint(c, this.options[c]);
            return this._bindHtml5Constraints()
        }, _bindHtml5Constraints: function () {
            (this.$element.hasClass("required") ||
            this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0);
            "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0);
            "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0);
            var a = this.$element.attr("type");
            return "undefined" == typeof a ? this : "number" === a ? this.addConstraint("type", "integer", void 0, !0) : (new RegExp(a, "i")).test("email url range") ? this.addConstraint("type", a, void 0, !0) : this
        }, _isRequired: function () {
            return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
        }, _getConstraintsSortedPriorities: function () {
            for (var a = [],
                     b = 0; b < this.constraints.length; b++)-1 === a.indexOf(this.constraints[b].priority) && a.push(this.constraints[b].priority);
            return a.sort(function (a, b) {
                return b - a
            }), a
        }
    };
    var p = function () {
        this.__class__ = "ParsleyFieldMultiple"
    };
    p.prototype = {
        addElement: function (a) {
            return this.$elements.push(a), this
        }, refreshConstraints: function () {
            var a;
            if (this.constraints = [], this.$element.is("select"))return this.actualizeOptions()._bindConstraints(), this;
            for (var b = 0; b < this.$elements.length; b++)if (d("html").has(this.$elements[b]).length) {
                a =
                    this.$elements[b].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                for (var c = 0; c < a.length; c++)this.addConstraint(a[c].name, a[c].requirements, a[c].priority, a[c].isDomConstraint)
            } else this.$elements.splice(b, 1);
            return this
        }, getValue: function () {
            if ("undefined" != typeof this.options.value)return this.options.value;
            if (this.$element.is("input[type=radio]"))return d("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
            if (this.$element.is("input[type=checkbox]")) {
                var a =
                    [];
                return d("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function () {
                    a.push(d(this).val())
                }), a.length ? a : []
            }
            return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
        }, _init: function (a) {
            return this.$elements = [this.$element], this.options.multiple = a, this
        }
    };
    var q = d({}), t = {};
    d.listen = function (a, b, c) {
        if ("undefined" == typeof t[a] && (t[a] = []), "function" == typeof b)return t[a].push({fn: b});
        if ("object" == typeof b && "function" == typeof c)return t[a].push({
            fn: c,
            ctxt: b
        });
        throw Error("Wrong parameters");
    };
    d.listenTo = function (a, b, c) {
        if ("undefined" == typeof t[b] && (t[b] = []), !(a instanceof x || a instanceof s))throw Error("Must give Parsley instance");
        if ("string" != typeof b || "function" != typeof c)throw Error("Wrong parameters");
        t[b].push({instance: a, fn: c})
    };
    d.unsubscribe = function (a, b) {
        if ("undefined" != typeof t[a]) {
            if ("string" != typeof a || "function" != typeof b)throw Error("Wrong arguments");
            for (var c = 0; c < t[a].length; c++)if (t[a][c].fn === b)return t[a].splice(c, 1)
        }
    };
    d.unsubscribeTo =
        function (a, b) {
            if ("undefined" != typeof t[b]) {
                if (!(a instanceof x || a instanceof s))throw Error("Must give Parsley instance");
                for (var c = 0; c < t[b].length; c++)if ("undefined" != typeof t[b][c].instance && t[b][c].instance.__id__ === a.__id__)return t[b].splice(c, 1)
            }
        };
    d.unsubscribeAll = function (a) {
        "undefined" != typeof t[a] && delete t[a]
    };
    d.emit = function (a, b) {
        if ("undefined" != typeof t[a])for (var c = 0; c < t[a].length; c++)if ("undefined" != typeof t[a][c].instance) {
            if (b instanceof x || b instanceof s)if (t[a][c].instance.__id__ !==
                b.__id__) {
                if (t[a][c].instance instanceof s && b instanceof x)for (var d = 0; d < t[a][c].instance.fields.length; d++)t[a][c].instance.fields[d].__id__ === b.__id__ && t[a][c].fn.apply(q, Array.prototype.slice.call(arguments, 1))
            } else t[a][c].fn.apply(q, Array.prototype.slice.call(arguments, 1))
        } else t[a][c].fn.apply("undefined" != typeof t[a][c].ctxt ? t[a][c].ctxt : q, Array.prototype.slice.call(arguments, 1))
    };
    d.subscribed = function () {
        return t
    };
    window.ParsleyConfig = window.ParsleyConfig || {};
    window.ParsleyConfig.i18n = window.ParsleyConfig.i18n ||
        {};
    window.ParsleyConfig.i18n.en = d.extend(window.ParsleyConfig.i18n.en || {}, {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    });
    "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
    var B = function (a, b, e) {
        if (this.__class__ = "Parsley", this.__version__ = "2.0.5", this.__id__ = c.hash(4), "undefined" == typeof a)throw Error("You must give an element");
        if ("undefined" != typeof e && "ParsleyForm" !== e.__class__)throw Error("Parent instance must be a ParsleyForm instance");
        return this.init(d(a), b, e)
    };
    B.prototype = {
        init: function (a, d, e) {
            if (!a.length)throw Error("You must bind Parsley on an existing element.");
            return (this.$element = a, this.$element.data("Parsley")) ? (a = this.$element.data("Parsley"), "undefined" != typeof e && (a.parent = e), a) : (this.OptionsFactory = new m(b, c.get(window, "ParsleyConfig") || {}, d, this.getNamespace(d)), this.options = this.OptionsFactory.get(this), this.$element.is("form") || c.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded) ? this.isMultiple() ?
                this.handleMultiple(e) : this.bind("parsleyField", e) : this)
        }, isMultiple: function () {
            return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
        }, handleMultiple: function (a) {
            var b, e, f, k = this;
            if (this.options = d.extend(this.options, a ? a.OptionsFactory.get(a) : {}, c.attr(this.$element, this.options.namespace)), this.options.multiple ? e = this.options.multiple : "undefined" != typeof this.$element.attr("name") &&
                this.$element.attr("name").length ? e = b = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (e = this.$element.attr("id")), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple"))return this.bind("parsleyFieldMultiple", a, e || this.__id__);
            if ("undefined" == typeof e)return window.console && window.console.warn && window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",
                this.$element), this;
            if (e = e.replace(/(:|\.|\[|\]|\$)/g, ""), "undefined" != typeof b && d('input[name="' + b + '"]').each(function () {
                    d(this).is("input[type=radio], input[type=checkbox]") && d(this).attr(k.options.namespace + "multiple", e)
                }), d("[" + this.options.namespace + "multiple=" + e + "]").length)for (b = 0; b < d("[" + this.options.namespace + "multiple=" + e + "]").length; b++)if ("undefined" != typeof d(d("[" + this.options.namespace + "multiple=" + e + "]").get(b)).data("Parsley")) {
                f = d(d("[" + this.options.namespace + "multiple=" + e + "]").get(b)).data("Parsley");
                this.$element.data("ParsleyFieldMultiple") || (f.addElement(this.$element), this.$element.attr(this.options.namespace + "id", f.__id__));
                break
            }
            return this.bind("parsleyField", a, e, !0), f || this.bind("parsleyFieldMultiple", a, e)
        }, getNamespace: function (a) {
            return "undefined" != typeof this.$element.data("parsleyNamespace") ? this.$element.data("parsleyNamespace") : "undefined" != typeof c.get(a, "namespace") ? a.namespace : "undefined" != typeof c.get(window, "ParsleyConfig.namespace") ? window.ParsleyConfig.namespace : b.namespace
        },
        bind: function (b, e, f, k) {
            switch (b) {
                case "parsleyForm":
                    e = d.extend(new s(this.$element, this.OptionsFactory), new a, window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    e = d.extend(new x(this.$element, this.OptionsFactory, e), new a, window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    e = d.extend(new x(this.$element, this.OptionsFactory, e), new a, new p, window.ParsleyExtend)._init(f);
                    break;
                default:
                    throw Error(b + "is not a supported Parsley type");
            }
            return "undefined" != typeof f && c.setAttr(this.$element,
                this.options.namespace, "multiple", f), "undefined" != typeof k ? (this.$element.data("ParsleyFieldMultiple", e), e) : (/ParsleyF/i.test(e.__class__) && (this.$element.data("Parsley", e), d.emit("parsley:" + ("parsleyForm" === b ? "form" : "field") + ":init", e)), e)
        }
    };
    d.fn.parsley = d.fn.psly = function (a) {
        if (1 < this.length) {
            var b = [];
            return this.each(function () {
                b.push(d(this).parsley(a))
            }), b
        }
        return d(this).length ? new B(this, a) : void(window.console && window.console.warn && window.console.warn("You must bind Parsley on an existing element."))
    };
    window.ParsleyUI = "function" == typeof c.get(window, "ParsleyConfig.ParsleyUI") ? (new window.ParsleyConfig.ParsleyUI).listen() : (new k).listen();
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {});
    "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {});
    window.Parsley = window.psly = B;
    window.ParsleyUtils = c;
    window.ParsleyValidator = new f(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    !1 !== c.get(window, "ParsleyConfig.autoBind") && d(document).ready(function () {
        d("[data-parsley-validate]").length &&
        d("[data-parsley-validate]").parsley()
    })
});
