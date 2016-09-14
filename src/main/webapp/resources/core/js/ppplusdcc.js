/*! ppplusbrcpmnodeweb 30-06-2016 */ ! function() {
    /*!
     * jQuery JavaScript Library v1.10.2 -deprecated
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-07-07T16:53Z
     */
    ! function(a, b) {
        function c(a) {
            var b = a.length,
                c = ka.type(a);
            return !ka.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)))
        }

        function d(a) {
            var b = za[a] = {};
            return ka.each(a.match(ma) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function e(a, c, d, e) {
            if (ka.acceptData(a)) {
                var f, g, h = ka.expando,
                    i = a.nodeType,
                    j = i ? ka.cache : a,
                    k = i ? a[h] : a[h] && h;
                if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = ba.pop() || ka.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: ka.noop
                }), "object" != typeof c && "function" != typeof c || (e ? j[k] = ka.extend(j[k], c) : j[k].data = ka.extend(j[k].data, c)), g = j[k], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[ka.camelCase(c)] = d), "string" == typeof c ? (f = g[c], null == f && (f = g[ka.camelCase(c)])) : f = g, f
            }
        }

        function f(a, b, c) {
            if (ka.acceptData(a)) {
                var d, e, f = a.nodeType,
                    g = f ? ka.cache : a,
                    i = f ? a[ka.expando] : ka.expando;
                if (g[i]) {
                    if (b && (d = c ? g[i] : g[i].data)) {
                        ka.isArray(b) ? b = b.concat(ka.map(b, ka.camelCase)) : b in d ? b = [b] : (b = ka.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        for (; e--;) delete d[b[e]];
                        if (c ? !h(d) : !ka.isEmptyObject(d)) return
                    }(c || (delete g[i].data, h(g[i]))) && (f ? ka.cleanData([a], !0) : ka.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null)
                }
            }
        }

        function g(a, c, d) {
            if (d === b && 1 === a.nodeType) {
                var e = "data-" + c.replace(Ba, "-$1").toLowerCase();
                if (d = a.getAttribute(e), "string" == typeof d) {
                    try {
                        d = "true" === d || "false" !== d && ("null" === d ? null : +d + "" === d ? +d : Aa.test(d) ? ka.parseJSON(d) : d)
                    } catch (f) {}
                    ka.data(a, c, d)
                } else d = b
            }
            return d
        }

        function h(a) {
            var b;
            for (b in a)
                if (("data" !== b || !ka.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function i() {
            return !0
        }

        function j() {
            return !1
        }

        function k() {
            try {
                return Y.activeElement
            } catch (a) {}
        }

        function l(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }

        function m(a, b, c) {
            if (ka.isFunction(b)) return ka.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return ka.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (Qa.test(b)) return ka.filter(b, a, c);
                b = ka.filter(b, a)
            }
            return ka.grep(a, function(a) {
                return ka.inArray(a, b) >= 0 !== c
            })
        }

        function n(a) {
            var b = Ua.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length;) c.createElement(b.pop());
            return c
        }

        function o(a, b) {
            return ka.nodeName(a, "table") && ka.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function p(a) {
            return a.type = (null !== ka.find.attr(a, "type")) + "/" + a.type, a
        }

        function q(a) {
            var b = eb.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function r(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++) ka._data(c, "globalEval", !b || ka._data(b[d], "globalEval"))
        }

        function s(a, b) {
            if (1 === b.nodeType && ka.hasData(a)) {
                var c, d, e, f = ka._data(a),
                    g = ka._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; d < e; d++) ka.event.add(b, c, h[c][d])
                }
                g.data && (g.data = ka.extend({}, g.data))
            }
        }

        function t(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !ka.support.noCloneEvent && b[ka.expando]) {
                    e = ka._data(b);
                    for (d in e.events) ka.removeEvent(b, d, e.handle);
                    b.removeAttribute(ka.expando)
                }
                "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ka.support.html5Clone && a.innerHTML && !ka.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
            }
        }

        function u(a, c) {
            var d, e, f = 0,
                g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
            if (!g)
                for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !c || ka.nodeName(e, c) ? g.push(e) : ka.merge(g, u(e, c));
            return c === b || c && ka.nodeName(a, c) ? ka.merge([a], g) : g
        }

        function v(a) {
            bb.test(a.type) && (a.defaultChecked = a.checked)
        }

        function w(a, b) {
            if (b in a) return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yb.length; e--;)
                if (b = yb[e] + c, b in a) return b;
            return d
        }

        function x(a, b) {
            return a = b || a, "none" === ka.css(a, "display") || !ka.contains(a.ownerDocument, a)
        }

        function y(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = ka._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = ka._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), (c && "none" !== c || !e) && ka._data(d, "olddisplay", e ? c : ka.css(d, "display"))));
            for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function z(a, b, c) {
            var d = rb.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function A(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += ka.css(a, c + xb[f], !0, e)), d ? ("content" === c && (g -= ka.css(a, "padding" + xb[f], !0, e)), "margin" !== c && (g -= ka.css(a, "border" + xb[f] + "Width", !0, e))) : (g += ka.css(a, "padding" + xb[f], !0, e), "padding" !== c && (g += ka.css(a, "border" + xb[f] + "Width", !0, e)));
            return g
        }

        function B(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = kb(a),
                g = ka.support.boxSizing && "border-box" === ka.css(a, "boxSizing", !1, f);
            if (e <= 0 || null == e) {
                if (e = lb(a, b, f), (e < 0 || null == e) && (e = a.style[b]), sb.test(e)) return e;
                d = g && (ka.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function C(a) {
            var b = Y,
                c = ub[a];
            return c || (c = D(a, b), "none" !== c && c || (jb = (jb || ka("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jb[0].contentWindow || jb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = D(a, b), jb.detach()), ub[a] = c), c
        }

        function D(a, b) {
            var c = ka(b.createElement(a)).appendTo(b.body),
                d = ka.css(c[0], "display");
            return c.remove(), d
        }

        function E(a, b, c, d) {
            var e;
            if (ka.isArray(b)) ka.each(b, function(b, e) {
                c || Ab.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== ka.type(b)) d(a, b);
            else
                for (e in b) E(a + "[" + e + "]", b[e], c, d)
        }

        function F(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(ma) || [];
                if (ka.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function G(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, ka.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === Rb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function H(a, c) {
            var d, e, f = ka.ajaxSettings.flatOptions || {};
            for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
            return d && ka.extend(!0, a, d), a
        }

        function I(a, c, d) {
            for (var e, f, g, h, i = a.contents, j = a.dataTypes;
                "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
            if (f)
                for (h in i)
                    if (i[h] && i[h].test(f)) {
                        j.unshift(h);
                        break
                    }
            if (j[0] in d) g = j[0];
            else {
                for (h in d) {
                    if (!j[0] || a.converters[h + " " + j[0]]) {
                        g = h;
                        break
                    }
                    e || (e = h)
                }
                g = g || e
            }
            if (g) return g !== j[0] && j.unshift(g), d[g]
        }

        function J(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function K() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function L() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }

        function M() {
            return setTimeout(function() {
                $b = b
            }), $b = ka.now()
        }

        function N(a, b, c) {
            for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; f < g; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function O(a, b, c) {
            var d, e, f = 0,
                g = dc.length,
                h = ka.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = $b || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: ka.extend({}, b),
                    opts: ka.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: $b || M(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = ka.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; c < d; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (P(k, j.opts.specialEasing); f < g; f++)
                if (d = dc[f].call(j, a, k, j.opts)) return d;
            return ka.map(k, N, j), ka.isFunction(j.opts.start) && j.opts.start.call(a, j), ka.fx.timer(ka.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function P(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = ka.camelCase(c), e = b[d], f = a[c], ka.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ka.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function Q(a, b, c) {
            var d, e, f, g, h, i, j = this,
                k = {},
                l = a.style,
                m = a.nodeType && x(a),
                n = ka._data(a, "fxshow");
            c.queue || (h = ka._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, j.always(function() {
                j.always(function() {
                    h.unqueued--, ka.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === ka.css(a, "display") && "none" === ka.css(a, "float") && (ka.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")), c.overflow && (l.overflow = "hidden", ka.support.shrinkWrapBlocks || j.always(function() {
                l.overflow = c.overflow[0], l.overflowX = c.overflow[1], l.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], ac.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
                    k[d] = n && n[d] || ka.style(a, d)
                }
            if (!ka.isEmptyObject(k)) {
                n ? "hidden" in n && (m = n.hidden) : n = ka._data(a, "fxshow", {}), f && (n.hidden = !m), m ? ka(a).show() : j.done(function() {
                    ka(a).hide()
                }), j.done(function() {
                    var b;
                    ka._removeData(a, "fxshow");
                    for (b in k) ka.style(a, b, k[b])
                });
                for (d in k) g = N(m ? n[d] : 0, d, j), d in n || (n[d] = g.start, m && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function R(a, b, c, d, e) {
            return new R.prototype.init(a, b, c, d, e)
        }

        function S(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; e < 4; e += 2 - b) c = xb[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function T(a) {
            return ka.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
        }
        var U, V, W = typeof b,
            X = a.location,
            Y = a.document,
            Z = Y.documentElement,
            $ = a.jQuery,
            _ = a.$,
            aa = {},
            ba = [],
            ca = "1.10.2 -deprecated",
            da = ba.concat,
            ea = ba.push,
            fa = ba.slice,
            ga = ba.indexOf,
            ha = aa.toString,
            ia = aa.hasOwnProperty,
            ja = ca.trim,
            ka = function(a, b) {
                return new ka.fn.init(a, b, V)
            },
            la = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ma = /\S+/g,
            na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            oa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            pa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            qa = /^[\],:{}\s]*$/,
            ra = /(?:^|:|,)(?:\s*\[)+/g,
            sa = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            ta = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            ua = /^-ms-/,
            va = /-([\da-z])/gi,
            wa = function(a, b) {
                return b.toUpperCase()
            },
            xa = function(a) {
                (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (ya(), ka.ready())
            },
            ya = function() {
                Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xa, !1), a.removeEventListener("load", xa, !1)) : (Y.detachEvent("onreadystatechange", xa), a.detachEvent("onload", xa))
            };
        ka.fn = ka.prototype = {
                jquery: ca,
                constructor: ka,
                init: function(a, c, d) {
                    var e, f;
                    if (!a) return this;
                    if ("string" == typeof a) {
                        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : oa.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                        if (e[1]) {
                            if (c = c instanceof ka ? c[0] : c, ka.merge(this, ka.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), pa.test(e[1]) && ka.isPlainObject(c))
                                for (e in c) ka.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                            return this
                        }
                        if (f = Y.getElementById(e[2]), f && f.parentNode) {
                            if (f.id !== e[2]) return d.find(a);
                            this.length = 1, this[0] = f
                        }
                        return this.context = Y, this.selector = a, this
                    }
                    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ka.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), ka.makeArray(a, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return fa.call(this)
                },
                get: function(a) {
                    return null == a ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function(a) {
                    var b = ka.merge(this.constructor(), a);
                    return b.prevObject = this, b.context = this.context, b
                },
                each: function(a, b) {
                    return ka.each(this, a, b)
                },
                ready: function(a) {
                    return ka.ready.promise().done(a), this
                },
                slice: function() {
                    return this.pushStack(fa.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(a) {
                    var b = this.length,
                        c = +a + (a < 0 ? b : 0);
                    return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
                },
                map: function(a) {
                    return this.pushStack(ka.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: ea,
                sort: [].sort,
                splice: [].splice
            }, ka.fn.init.prototype = ka.fn, ka.extend = ka.fn.extend = function() {
                var a, c, d, e, f, g, h = arguments[0] || {},
                    i = 1,
                    j = arguments.length,
                    k = !1;
                for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || ka.isFunction(h) || (h = {}), j === i && (h = this, --i); i < j; i++)
                    if (null != (f = arguments[i]))
                        for (e in f) a = h[e], d = f[e], h !== d && (k && d && (ka.isPlainObject(d) || (c = ka.isArray(d))) ? (c ? (c = !1, g = a && ka.isArray(a) ? a : []) : g = a && ka.isPlainObject(a) ? a : {}, h[e] = ka.extend(k, g, d)) : d !== b && (h[e] = d));
                return h
            }, ka.extend({
                expando: "jQuery" + (ca + Math.random()).replace(/\D/g, ""),
                noConflict: function(b) {
                    return a.$ === ka && (a.$ = _), b && a.jQuery === ka && (a.jQuery = $), ka
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? ka.readyWait++ : ka.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 ? !--ka.readyWait : !ka.isReady) {
                        if (!Y.body) return setTimeout(ka.ready);
                        ka.isReady = !0, a !== !0 && --ka.readyWait > 0 || (U.resolveWith(Y, [ka]), ka.fn.trigger && ka(Y).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(a) {
                    return "function" === ka.type(a)
                },
                isArray: Array.isArray || function(a) {
                    return "array" === ka.type(a)
                },
                isWindow: function(a) {
                    return null != a && a == a.window
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? aa[ha.call(a)] || "object" : typeof a
                },
                isPlainObject: function(a) {
                    var c;
                    if (!a || "object" !== ka.type(a) || a.nodeType || ka.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !ia.call(a, "constructor") && !ia.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (d) {
                        return !1
                    }
                    if (ka.support.ownLast)
                        for (c in a) return ia.call(a, c);
                    for (c in a);
                    return c === b || ia.call(a, c)
                },
                isEmptyObject: function(a) {
                    var b;
                    for (b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseHTML: function(a, b, c) {
                    if (!a || "string" != typeof a) return null;
                    "boolean" == typeof b && (c = b, b = !1), b = b || Y;
                    var d = pa.exec(a),
                        e = !c && [];
                    return d ? [b.createElement(d[1])] : (d = ka.buildFragment([a], b, e), e && ka(e).remove(), ka.merge([], d.childNodes))
                },
                parseJSON: function(b) {
                    return a.JSON && a.JSON.parse ? a.JSON.parse(b) : null === b ? b : "string" == typeof b && (b = ka.trim(b), b && qa.test(b.replace(sa, "@").replace(ta, "]").replace(ra, ""))) ? new Function("return " + b)() : void ka.error("Invalid JSON: " + b)
                },
                parseXML: function(c) {
                    var d, e;
                    if (!c || "string" != typeof c) return null;
                    try {
                        a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (f) {
                        d = b
                    }
                    return d && d.documentElement && !d.getElementsByTagName("parsererror").length || ka.error("Invalid XML: " + c), d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && ka.trim(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(ua, "ms-").replace(va, wa)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                },
                each: function(a, b, d) {
                    var e, f = 0,
                        g = a.length,
                        h = c(a);
                    if (d) {
                        if (h)
                            for (; f < g && (e = b.apply(a[f], d), e !== !1); f++);
                        else
                            for (f in a)
                                if (e = b.apply(a[f], d), e === !1) break
                    } else if (h)
                        for (; f < g && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.call(a[f], f, a[f]), e === !1) break; return a
                },
                trim: ja && !ja.call("\ufeffÂ ") ? function(a) {
                    return null == a ? "" : ja.call(a)
                } : function(a) {
                    return null == a ? "" : (a + "").replace(na, "")
                },
                makeArray: function(a, b) {
                    var d = b || [];
                    return null != a && (c(Object(a)) ? ka.merge(d, "string" == typeof a ? [a] : a) : ea.call(d, a)), d
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (ga) return ga.call(b, a, c);
                        for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = c.length,
                        e = a.length,
                        f = 0;
                    if ("number" == typeof d)
                        for (; f < d; f++) a[e++] = c[f];
                    else
                        for (; c[f] !== b;) a[e++] = c[f++];
                    return a.length = e, a
                },
                grep: function(a, b, c) {
                    var d, e = [],
                        f = 0,
                        g = a.length;
                    for (c = !!c; f < g; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                    return e
                },
                map: function(a, b, d) {
                    var e, f = 0,
                        g = a.length,
                        h = c(a),
                        i = [];
                    if (h)
                        for (; f < g; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
                    else
                        for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
                    return da.apply([], i)
                },
                guid: 1,
                proxy: function(a, c) {
                    var d, e, f;
                    return "string" == typeof c && (f = a[c], c = a, a = f), ka.isFunction(a) ? (d = fa.call(arguments, 2), e = function() {
                        return a.apply(c || this, d.concat(fa.call(arguments)))
                    }, e.guid = a.guid = a.guid || ka.guid++, e) : b
                },
                access: function(a, c, d, e, f, g, h) {
                    var i = 0,
                        j = a.length,
                        k = null == d;
                    if ("object" === ka.type(d)) {
                        f = !0;
                        for (i in d) ka.access(a, c, i, d[i], !0, g, h)
                    } else if (e !== b && (f = !0, ka.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                            return k.call(ka(a), c)
                        })), c))
                        for (; i < j; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
                    return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(a, b, c, d) {
                    var e, f, g = {};
                    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                    e = c.apply(a, d || []);
                    for (f in b) a.style[f] = g[f];
                    return e
                }
            }), ka.ready.promise = function(b) {
                if (!U)
                    if (U = ka.Deferred(), "complete" === Y.readyState) setTimeout(ka.ready);
                    else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xa, !1), a.addEventListener("load", xa, !1);
                else {
                    Y.attachEvent("onreadystatechange", xa), a.attachEvent("onload", xa);
                    var c = !1;
                    try {
                        c = null == a.frameElement && Y.documentElement
                    } catch (d) {}
                    c && c.doScroll && ! function e() {
                        if (!ka.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(e, 50)
                            }
                            ya(), ka.ready()
                        }
                    }()
                }
                return U.promise(b)
            }, ka.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
                aa["[object " + b + "]"] = b.toLowerCase()
            }), V = ka(Y),
            /*!
             * Sizzle CSS Selector Engine v1.10.2
             * http://sizzlejs.com/
             *
             * Copyright 2013 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2013-07-03
             */
            function(a, b) {
                function c(a, b, c, d) {
                    var e, f, g, h, i, j, k, l, o, p;
                    if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
                    if (1 !== (h = b.nodeType) && 9 !== h) return [];
                    if (I && !d) {
                        if (e = ta.exec(a))
                            if (g = e[1]) {
                                if (9 === h) {
                                    if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                    if (f.id === g) return c.push(f), c
                                } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                            } else {
                                if (e[2]) return aa.apply(c, b.getElementsByTagName(a)), c;
                                if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return aa.apply(c, b.getElementsByClassName(g)), c
                            }
                        if (x.qsa && (!J || !J.test(a))) {
                            if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                                for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wa, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + n(j[i]);
                                o = na.test(a) && b.parentNode || b, p = j.join(",")
                            }
                            if (p) try {
                                return aa.apply(c, o.querySelectorAll(p)), c
                            } catch (q) {} finally {
                                k || b.removeAttribute("id")
                            }
                        }
                    }
                    return v(a.replace(ja, "$1"), b, c, d)
                }

                function d() {
                    function a(c, d) {
                        return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d
                    }
                    var b = [];
                    return a
                }

                function e(a) {
                    return a[N] = !0, a
                }

                function f(a) {
                    var b = G.createElement("div");
                    try {
                        return !!a(b)
                    } catch (c) {
                        return !1
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b), b = null
                    }
                }

                function g(a, b) {
                    for (var c = a.split("|"), d = a.length; d--;) z.attrHandle[c[d]] = b
                }

                function h(a, b) {
                    var c = b && a,
                        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
                    if (d) return d;
                    if (c)
                        for (; c = c.nextSibling;)
                            if (c === b) return -1;
                    return a ? 1 : -1
                }

                function i(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return "input" === c && b.type === a
                    }
                }

                function j(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a
                    }
                }

                function k(a) {
                    return e(function(b) {
                        return b = +b, e(function(c, d) {
                            for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                    })
                }

                function l() {}

                function m(a, b) {
                    var d, e, f, g, h, i, j, k = S[a + " "];
                    if (k) return b ? 0 : k.slice(0);
                    for (h = a, i = [], j = z.preFilter; h;) {
                        d && !(e = la.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ma.exec(h)) && (d = e.shift(), f.push({
                            value: d,
                            type: e[0].replace(ja, " ")
                        }), h = h.slice(d.length));
                        for (g in z.filter) !(e = ra[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                            value: d,
                            type: g,
                            matches: e
                        }), h = h.slice(d.length));
                        if (!d) break
                    }
                    return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
                }

                function n(a) {
                    for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
                    return d
                }

                function o(a, b, c) {
                    var d = b.dir,
                        e = c && "parentNode" === d,
                        f = Q++;
                    return b.first ? function(b, c, f) {
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) return a(b, c, f)
                    } : function(b, c, g) {
                        var h, i, j, k = P + " " + f;
                        if (g) {
                            for (; b = b[d];)
                                if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                        } else
                            for (; b = b[d];)
                                if (1 === b.nodeType || e)
                                    if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                        if ((h = i[1]) === !0 || h === y) return h === !0
                                    } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0) return !0
                    }
                }

                function p(a) {
                    return a.length > 1 ? function(b, c, d) {
                        for (var e = a.length; e--;)
                            if (!a[e](b, c, d)) return !1;
                        return !0
                    } : a[0]
                }

                function q(a, b, c, d, e) {
                    for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                    return g
                }

                function r(a, b, c, d, f, g) {
                    return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                        var j, k, l, m = [],
                            n = [],
                            o = g.length,
                            p = e || u(b || "*", h.nodeType ? [h] : h, []),
                            r = !a || !e && b ? p : q(p, m, a, h, i),
                            s = c ? f || (e ? a : o || d) ? [] : g : r;
                        if (c && c(r, s, h, i), d)
                            for (j = q(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                        if (e) {
                            if (f || a) {
                                if (f) {
                                    for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                                    f(null, s = [], j, i)
                                }
                                for (k = s.length; k--;)(l = s[k]) && (j = f ? ca.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                            }
                        } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : aa.apply(g, s)
                    })
                }

                function s(a) {
                    for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                            return a === b
                        }, g, !0), j = o(function(a) {
                            return ca.call(b, a) > -1
                        }, g, !0), k = [function(a, c, d) {
                            return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                        }]; h < e; h++)
                        if (c = z.relative[a[h].type]) k = [o(p(k), c)];
                        else {
                            if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                                for (d = ++h; d < e && !z.relative[a[d].type]; d++);
                                return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                    value: " " === a[h - 2].type ? "*" : ""
                                })).replace(ja, "$1"), c, h < d && s(a.slice(h, d)), d < e && s(a = a.slice(d)), d < e && n(a))
                            }
                            k.push(c)
                        }
                    return p(k)
                }

                function t(a, b) {
                    var d = 0,
                        f = b.length > 0,
                        g = a.length > 0,
                        h = function(e, h, i, j, k) {
                            var l, m, n, o = [],
                                p = 0,
                                r = "0",
                                s = e && [],
                                t = null != k,
                                u = D,
                                v = e || g && z.find.TAG("*", k && h.parentNode || h),
                                w = P += null == u ? 1 : Math.random() || .1;
                            for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                                if (g && l) {
                                    for (m = 0; n = a[m++];)
                                        if (n(l, h, i)) {
                                            j.push(l);
                                            break
                                        }
                                    t && (P = w, y = ++d)
                                }
                                f && ((l = !n && l) && p--, e && s.push(l))
                            }
                            if (p += r, f && r !== p) {
                                for (m = 0; n = b[m++];) n(s, o, h, i);
                                if (e) {
                                    if (p > 0)
                                        for (; r--;) s[r] || o[r] || (o[r] = $.call(j));
                                    o = q(o)
                                }
                                aa.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                            }
                            return t && (P = w, D = u), s
                        };
                    return f ? e(h) : h
                }

                function u(a, b, d) {
                    for (var e = 0, f = b.length; e < f; e++) c(a, b[e], d);
                    return d
                }

                function v(a, b, c, d) {
                    var e, f, g, h, i, j = m(a);
                    if (!d && 1 === j.length) {
                        if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                            if (b = (z.find.ID(g.matches[0].replace(xa, ya), b) || [])[0], !b) return c;
                            a = a.slice(f.shift().value.length)
                        }
                        for (e = ra.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]);)
                            if ((i = z.find[h]) && (d = i(g.matches[0].replace(xa, ya), na.test(f[0].type) && b.parentNode || b))) {
                                if (f.splice(e, 1), a = d.length && n(f), !a) return aa.apply(c, d), c;
                                break
                            }
                    }
                    return C(a, j)(d, b, !I, c, na.test(a)), c
                }
                var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
                    O = a.document,
                    P = 0,
                    Q = 0,
                    R = d(),
                    S = d(),
                    T = d(),
                    U = !1,
                    V = function(a, b) {
                        return a === b ? (U = !0, 0) : 0
                    },
                    W = typeof b,
                    X = 1 << 31,
                    Y = {}.hasOwnProperty,
                    Z = [],
                    $ = Z.pop,
                    _ = Z.push,
                    aa = Z.push,
                    ba = Z.slice,
                    ca = Z.indexOf || function(a) {
                        for (var b = 0, c = this.length; b < c; b++)
                            if (this[b] === a) return b;
                        return -1
                    },
                    da = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ea = "[\\x20\\t\\r\\n\\f]",
                    fa = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ga = fa.replace("w", "w#"),
                    ha = "\\[" + ea + "*(" + fa + ")" + ea + "*(?:([*^$|!~]?=)" + ea + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ga + ")|)|)" + ea + "*\\]",
                    ia = ":(" + fa + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ha.replace(3, 8) + ")*)|.*)\\)|)",
                    ja = new RegExp("^" + ea + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ea + "+$", "g"),
                    la = new RegExp("^" + ea + "*," + ea + "*"),
                    ma = new RegExp("^" + ea + "*([>+~]|" + ea + ")" + ea + "*"),
                    na = new RegExp(ea + "*[+~]"),
                    oa = new RegExp("=" + ea + "*([^\\]'\"]*)" + ea + "*\\]", "g"),
                    pa = new RegExp(ia),
                    qa = new RegExp("^" + ga + "$"),
                    ra = {
                        ID: new RegExp("^#(" + fa + ")"),
                        CLASS: new RegExp("^\\.(" + fa + ")"),
                        TAG: new RegExp("^(" + fa.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ha),
                        PSEUDO: new RegExp("^" + ia),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ea + "*(even|odd|(([+-]|)(\\d*)n|)" + ea + "*(?:([+-]|)" + ea + "*(\\d+)|))" + ea + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + da + ")$", "i"),
                        needsContext: new RegExp("^" + ea + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ea + "*((?:-\\d)?\\d*)" + ea + "*\\)|)(?=[^-]|$)", "i")
                    },
                    sa = /^[^{]+\{\s*\[native \w/,
                    ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ua = /^(?:input|select|textarea|button)$/i,
                    va = /^h\d$/i,
                    wa = /'|\\/g,
                    xa = new RegExp("\\\\([\\da-f]{1,6}" + ea + "?|(" + ea + ")|.)", "ig"),
                    ya = function(a, b, c) {
                        var d = "0x" + b - 65536;
                        return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                    };
                try {
                    aa.apply(Z = ba.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
                } catch (za) {
                    aa = {
                        apply: Z.length ? function(a, b) {
                            _.apply(a, ba.call(b))
                        } : function(a, b) {
                            for (var c = a.length, d = 0; a[c++] = b[d++];);
                            a.length = c - 1
                        }
                    }
                }
                B = c.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return !!b && "HTML" !== b.nodeName
                }, x = c.support = {}, F = c.setDocument = function(a) {
                    var b = a ? a.ownerDocument || a : O,
                        c = b.defaultView;
                    return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() {
                        F()
                    }), x.attributes = f(function(a) {
                        return a.className = "i", !a.getAttribute("className")
                    }), x.getElementsByTagName = f(function(a) {
                        return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length
                    }), x.getElementsByClassName = f(function(a) {
                        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                    }), x.getById = f(function(a) {
                        return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length
                    }), x.getById ? (z.find.ID = function(a, b) {
                        if (typeof b.getElementById !== W && I) {
                            var c = b.getElementById(a);
                            return c && c.parentNode ? [c] : []
                        }
                    }, z.filter.ID = function(a) {
                        var b = a.replace(xa, ya);
                        return function(a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete z.find.ID, z.filter.ID = function(a) {
                        var b = a.replace(xa, ya);
                        return function(a) {
                            var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }), z.find.TAG = x.getElementsByTagName ? function(a, b) {
                        if (typeof b.getElementsByTagName !== W) return b.getElementsByTagName(a)
                    } : function(a, b) {
                        var c, d = [],
                            e = 0,
                            f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }, z.find.CLASS = x.getElementsByClassName && function(a, b) {
                        if (typeof b.getElementsByClassName !== W && I) return b.getElementsByClassName(a)
                    }, K = [], J = [], (x.qsa = sa.test(b.querySelectorAll)) && (f(function(a) {
                        a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + ea + "*(?:value|" + da + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
                    }), f(function(a) {
                        var c = b.createElement("input");
                        c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + ea + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                    })), (x.matchesSelector = sa.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                        x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ia)
                    }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), M = sa.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                            d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    }, V = H.compareDocumentPosition ? function(a, c) {
                        if (a === c) return U = !0, 0;
                        var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                        return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? ca.call(E, a) - ca.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                    } : function(a, c) {
                        var d, e = 0,
                            f = a.parentNode,
                            g = c.parentNode,
                            i = [a],
                            j = [c];
                        if (a === c) return U = !0, 0;
                        if (!f || !g) return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? ca.call(E, a) - ca.call(E, c) : 0;
                        if (f === g) return h(a, c);
                        for (d = a; d = d.parentNode;) i.unshift(d);
                        for (d = c; d = d.parentNode;) j.unshift(d);
                        for (; i[e] === j[e];) e++;
                        return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                    }, b) : G
                }, c.matches = function(a, b) {
                    return c(a, null, null, b)
                }, c.matchesSelector = function(a, b) {
                    if ((a.ownerDocument || a) !== G && F(a), b = b.replace(oa, "='$1']"), x.matchesSelector && I && (!K || !K.test(b)) && (!J || !J.test(b))) try {
                        var d = L.call(a, b);
                        if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                    } catch (e) {}
                    return c(b, G, null, [a]).length > 0
                }, c.contains = function(a, b) {
                    return (a.ownerDocument || a) !== G && F(a), M(a, b)
                }, c.attr = function(a, c) {
                    (a.ownerDocument || a) !== G && F(a);
                    var d = z.attrHandle[c.toLowerCase()],
                        e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
                    return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
                }, c.error = function(a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }, c.uniqueSort = function(a) {
                    var b, c = [],
                        d = 0,
                        e = 0;
                    if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                        for (; b = a[e++];) b === a[e] && (d = c.push(e));
                        for (; d--;) a.splice(c[d], 1)
                    }
                    return a
                }, A = c.getText = function(a) {
                    var b, c = "",
                        d = 0,
                        e = a.nodeType;
                    if (e) {
                        if (1 === e || 9 === e || 11 === e) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += A(a)
                        } else if (3 === e || 4 === e) return a.nodeValue
                    } else
                        for (; b = a[d]; d++) c += A(b);
                    return c
                }, z = c.selectors = {
                    cacheLength: 50,
                    createPseudo: e,
                    match: ra,
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
                        ATTR: function(a) {
                            return a[1] = a[1].replace(xa, ya), a[3] = (a[4] || a[5] || "").replace(xa, ya), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                        },
                        PSEUDO: function(a) {
                            var c, d = !a[5] && a[2];
                            return ra.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pa.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(a) {
                            var b = a.replace(xa, ya).toLowerCase();
                            return "*" === a ? function() {
                                return !0
                            } : function(a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                        },
                        CLASS: function(a) {
                            var b = R[a + " "];
                            return b || (b = new RegExp("(^|" + ea + ")" + a + "(" + ea + "|$)")) && R(a, function(a) {
                                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(a, b, d) {
                            return function(e) {
                                var f = c.attr(e, a);
                                return null == f ? "!=" === b : !b || (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b && (f === d || f.slice(0, d.length + 1) === d + "-"))
                            }
                        },
                        CHILD: function(a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3),
                                g = "last" !== a.slice(-4),
                                h = "of-type" === b;
                            return 1 === d && 0 === e ? function(a) {
                                return !!a.parentNode
                            } : function(b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                    q = b.parentNode,
                                    r = h && b.nodeName.toLowerCase(),
                                    s = !i && !h;
                                if (q) {
                                    if (f) {
                                        for (; p;) {
                                            for (l = b; l = l[p];)
                                                if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                        for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                            if (1 === l.nodeType && ++m && l === b) {
                                                k[a] = [P, n, m];
                                                break
                                            }
                                    } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                    else
                                        for (;
                                            (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                    return m -= e, m === d || m % d === 0 && m / d >= 0
                                }
                            }
                        },
                        PSEUDO: function(a, b) {
                            var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                            return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                                for (var d, e = f(a, b), g = e.length; g--;) d = ca.call(a, e[g]), a[d] = !(c[d] = e[g])
                            }) : function(a) {
                                return f(a, 0, d)
                            }) : f
                        }
                    },
                    pseudos: {
                        not: e(function(a) {
                            var b = [],
                                c = [],
                                d = C(a.replace(ja, "$1"));
                            return d[N] ? e(function(a, b, c, e) {
                                for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                            }) : function(a, e, f) {
                                return b[0] = a, d(b, null, f, c), !c.pop()
                            }
                        }),
                        has: e(function(a) {
                            return function(b) {
                                return c(a, b).length > 0
                            }
                        }),
                        contains: e(function(a) {
                            return function(b) {
                                return (b.textContent || b.innerText || A(b)).indexOf(a) > -1
                            }
                        }),
                        lang: e(function(a) {
                            return qa.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xa, ya).toLowerCase(),
                                function(b) {
                                    var c;
                                    do
                                        if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                    while ((b = b.parentNode) && 1 === b.nodeType);
                                    return !1
                                }
                        }),
                        target: function(b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        },
                        root: function(a) {
                            return a === H
                        },
                        focus: function(a) {
                            return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        },
                        enabled: function(a) {
                            return a.disabled === !1
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        },
                        empty: function(a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                            return !0
                        },
                        parent: function(a) {
                            return !z.pseudos.empty(a)
                        },
                        header: function(a) {
                            return va.test(a.nodeName)
                        },
                        input: function(a) {
                            return ua.test(a.nodeName)
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        text: function(a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                        },
                        first: k(function() {
                            return [0]
                        }),
                        last: k(function(a, b) {
                            return [b - 1]
                        }),
                        eq: k(function(a, b, c) {
                            return [c < 0 ? c + b : c]
                        }),
                        even: k(function(a, b) {
                            for (var c = 0; c < b; c += 2) a.push(c);
                            return a
                        }),
                        odd: k(function(a, b) {
                            for (var c = 1; c < b; c += 2) a.push(c);
                            return a
                        }),
                        lt: k(function(a, b, c) {
                            for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                            return a
                        }),
                        gt: k(function(a, b, c) {
                            for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                            return a
                        })
                    }
                }, z.pseudos.nth = z.pseudos.eq;
                for (w in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) z.pseudos[w] = i(w);
                for (w in {
                        submit: !0,
                        reset: !0
                    }) z.pseudos[w] = j(w);
                l.prototype = z.filters = z.pseudos, z.setFilters = new l, C = c.compile = function(a, b) {
                    var c, d = [],
                        e = [],
                        f = T[a + " "];
                    if (!f) {
                        for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                        f = T(a, t(e, d))
                    }
                    return f
                }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), x.sortDetached = f(function(a) {
                    return 1 & a.compareDocumentPosition(G.createElement("div"))
                }), f(function(a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                }) || g("type|href|height|width", function(a, b, c) {
                    if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), x.attributes && f(function(a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                }) || g("value", function(a, b, c) {
                    if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
                }), f(function(a) {
                    return null == a.getAttribute("disabled")
                }) || g(da, function(a, b, c) {
                    var d;
                    if (!c) return (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null
                }), ka.find = c, ka.expr = c.selectors, ka.expr[":"] = ka.expr.pseudos, ka.unique = c.uniqueSort, ka.text = c.getText, ka.isXMLDoc = c.isXML, ka.contains = c.contains
            }(a);
        var za = {};
        ka.Callbacks = function(a) {
            a = "string" == typeof a ? za[a] || d(a) : ka.extend({}, a);
            var c, e, f, g, h, i, j = [],
                k = !a.once && [],
                l = function(b) {
                    for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && h < g; h++)
                        if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                            e = !1;
                            break
                        }
                    c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
                },
                m = {
                    add: function() {
                        if (j) {
                            var b = j.length;
                            ! function d(b) {
                                ka.each(b, function(b, c) {
                                    var e = ka.type(c);
                                    "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                                })
                            }(arguments), c ? g = j.length : e && (i = b, l(e))
                        }
                        return this
                    },
                    remove: function() {
                        return j && ka.each(arguments, function(a, b) {
                            for (var d;
                                (d = ka.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (d <= g && g--, d <= h && h--)
                        }), this
                    },
                    has: function(a) {
                        return a ? ka.inArray(a, j) > -1 : !(!j || !j.length)
                    },
                    empty: function() {
                        return j = [], g = 0, this
                    },
                    disable: function() {
                        return j = k = e = b, this
                    },
                    disabled: function() {
                        return !j
                    },
                    lock: function() {
                        return k = b, e || m.disable(), this
                    },
                    locked: function() {
                        return !k
                    },
                    fireWith: function(a, b) {
                        return !j || f && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], c ? k.push(b) : l(b)), this
                    },
                    fire: function() {
                        return m.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!f
                    }
                };
            return m
        }, ka.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", ka.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ka.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ka.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return ka.Deferred(function(c) {
                                ka.each(b, function(b, f) {
                                    var g = f[0],
                                        h = ka.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = h && h.apply(this, arguments);
                                        a && ka.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? ka.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, ka.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = fa.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && ka.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : ka.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? fa.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); e < g; e++) f[e] && ka.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        }), ka.support = function(b) {
            var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
            if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
            f = Y.createElement("select"), h = f.appendChild(Y.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b.getSetAttribute = "t" !== l.className, b.leadingWhitespace = 3 === l.firstChild.nodeType, b.tbody = !l.getElementsByTagName("tbody").length, b.htmlSerialize = !!l.getElementsByTagName("link").length, b.style = /top/.test(d.getAttribute("style")), b.hrefNormalized = "/a" === d.getAttribute("href"), b.opacity = /^0.5/.test(d.style.opacity), b.cssFloat = !!d.style.cssFloat, b.checkOn = !!e.value, b.optSelected = h.selected, b.enctype = !!Y.createElement("form").enctype, b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, b.inlineBlockNeedsLayout = !1, b.shrinkWrapBlocks = !1, b.pixelPosition = !1, b.deleteExpando = !0, b.noCloneEvent = !0, b.reliableMarginRight = !0, b.boxSizingReliable = !0, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
            try {
                delete l.test
            } catch (m) {
                b.deleteExpando = !1
            }
            e = Y.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = Y.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function() {
                b.noCloneEvent = !1
            }), l.cloneNode(!0).click());
            for (k in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
            l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip;
            for (k in ka(b)) break;
            return b.ownLast = "0" !== k, ka(function() {
                var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    g = Y.getElementsByTagName("body")[0];
                g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ka.swap(g, null != g.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    b.boxSizing = 4 === l.offsetWidth
                }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                    width: "4px"
                }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
            }), c = f = g = h = d = e = null, b
        }({});
        var Aa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Ba = /([A-Z])/g;
        ka.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? ka.cache[a[ka.expando]] : a[ka.expando], !!a && !h(a)
            },
            data: function(a, b, c) {
                return e(a, b, c)
            },
            removeData: function(a, b) {
                return f(a, b)
            },
            _data: function(a, b, c) {
                return e(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return f(a, b, !0)
            },
            acceptData: function(a) {
                if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
                var b = a.nodeName && ka.noData[a.nodeName.toLowerCase()];
                return !b || b !== !0 && a.getAttribute("classid") === b
            }
        }), ka.fn.extend({
            data: function(a, c) {
                var d, e, f = null,
                    h = 0,
                    i = this[0];
                if (a === b) {
                    if (this.length && (f = ka.data(i), 1 === i.nodeType && !ka._data(i, "parsedAttrs"))) {
                        for (d = i.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = ka.camelCase(e.slice(5)), g(i, e, f[e]));
                        ka._data(i, "parsedAttrs", !0)
                    }
                    return f
                }
                return "object" == typeof a ? this.each(function() {
                    ka.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    ka.data(this, a, c)
                }) : i ? g(i, a, ka.data(i, a)) : null
            },
            removeData: function(a) {
                return this.each(function() {
                    ka.removeData(this, a)
                })
            }
        }), ka.extend({
            queue: function(a, b, c) {
                var d;
                if (a) return b = (b || "fx") + "queue", d = ka._data(a, b), c && (!d || ka.isArray(c) ? d = ka._data(a, b, ka.makeArray(c)) : d.push(c)), d || []
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = ka.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = ka._queueHooks(a, b),
                    g = function() {
                        ka.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return ka._data(a, c) || ka._data(a, c, {
                    empty: ka.Callbacks("once memory").add(function() {
                        ka._removeData(a, b + "queue"), ka._removeData(a, c)
                    })
                })
            }
        }), ka.fn.extend({
            queue: function(a, c) {
                var d = 2;
                return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? ka.queue(this[0], a) : c === b ? this : this.each(function() {
                    var b = ka.queue(this, a, c);
                    ka._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && ka.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    ka.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                return a = ka.fx ? ka.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                var d, e = 1,
                    f = ka.Deferred(),
                    g = this,
                    h = this.length,
                    i = function() {
                        --e || f.resolveWith(g, [g])
                    };
                for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = ka._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
                return i(), f.promise(c)
            }
        });
        var Ca, Da, Ea = /[\t\r\n\f]/g,
            Fa = /\r/g,
            Ga = /^(?:input|select|textarea|button|object)$/i,
            Ha = /^(?:a|area)$/i,
            Ia = /^(?:checked|selected)$/i,
            Ja = ka.support.getSetAttribute,
            Ka = ka.support.input;
        ka.fn.extend({
            attr: function(a, b) {
                return ka.access(this, ka.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    ka.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return ka.access(this, ka.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = ka.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = b, delete this[a]
                    } catch (c) {}
                })
            },
            addClass: function(a) {
                var b, c, d, e, f, g = 0,
                    h = this.length,
                    i = "string" == typeof a && a;
                if (ka.isFunction(a)) return this.each(function(b) {
                    ka(this).addClass(a.call(this, b, this.className))
                });
                if (i)
                    for (b = (a || "").match(ma) || []; g < h; g++)
                        if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ea, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            c.className = ka.trim(d)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g = 0,
                    h = this.length,
                    i = 0 === arguments.length || "string" == typeof a && a;
                if (ka.isFunction(a)) return this.each(function(b) {
                    ka(this).removeClass(a.call(this, b, this.className))
                });
                if (i)
                    for (b = (a || "").match(ma) || []; g < h; g++)
                        if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ea, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            c.className = a ? ka.trim(d) : ""
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ka.isFunction(a) ? this.each(function(c) {
                    ka(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c)
                        for (var b, d = 0, e = ka(this), f = a.match(ma) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else c !== W && "boolean" !== c || (this.className && ka._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ka._data(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Ea, " ").indexOf(b) >= 0) return !0;
                return !1
            },
            val: function(a) {
                var c, d, e, f = this[0]; {
                    if (arguments.length) return e = ka.isFunction(a), this.each(function(c) {
                        var f;
                        1 === this.nodeType && (f = e ? a.call(this, c, ka(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : ka.isArray(f) && (f = ka.map(f, function(a) {
                            return null == a ? "" : a + ""
                        })), d = ka.valHooks[this.type] || ka.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
                    });
                    if (f) return d = ka.valHooks[f.type] || ka.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Fa, "") : null == c ? "" : c)
                }
            }
        }), ka.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = ka.find.attr(a, "value");
                        return null != b ? b : a.text
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                            if (c = d[i], (c.selected || i === e) && (ka.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !ka.nodeName(c.parentNode, "optgroup"))) {
                                if (b = ka(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = ka.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = ka.inArray(ka(d).val(), f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            },
            attr: function(a, c, d) {
                var e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === W ? ka.prop(a, c, d) : (1 === g && ka.isXMLDoc(a) || (c = c.toLowerCase(), e = ka.attrHooks[c] || (ka.expr.match.bool.test(c) ? Da : Ca)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = ka.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : void ka.removeAttr(a, c))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(ma);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = ka.propFix[c] || c, ka.expr.match.bool.test(c) ? Ka && Ja || !Ia.test(c) ? a[d] = !1 : a[ka.camelCase("default-" + c)] = a[d] = !1 : ka.attr(a, c, ""), a.removeAttribute(Ja ? c : d)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!ka.support.radioValue && "radio" === b && ka.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, c, d) {
                var e, f, g, h = a.nodeType;
                if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !ka.isXMLDoc(a), g && (c = ka.propFix[c] || c, f = ka.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = ka.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Ga.test(a.nodeName) || Ha.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        }), Da = {
            set: function(a, b, c) {
                return b === !1 ? ka.removeAttr(a, c) : Ka && Ja || !Ia.test(c) ? a.setAttribute(!Ja && ka.propFix[c] || c, c) : a[ka.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, ka.each(ka.expr.match.bool.source.match(/\w+/g), function(a, c) {
            var d = ka.expr.attrHandle[c] || ka.find.attr;
            ka.expr.attrHandle[c] = Ka && Ja || !Ia.test(c) ? function(a, c, e) {
                var f = ka.expr.attrHandle[c],
                    g = e ? b : (ka.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
                return ka.expr.attrHandle[c] = f, g
            } : function(a, c, d) {
                return d ? b : a[ka.camelCase("default-" + c)] ? c.toLowerCase() : null
            }
        }), Ka && Ja || (ka.attrHooks.value = {
            set: function(a, b, c) {
                return ka.nodeName(a, "input") ? void(a.defaultValue = b) : Ca && Ca.set(a, b, c)
            }
        }), Ja || (Ca = {
            set: function(a, c, d) {
                var e = a.getAttributeNode(d);
                return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b;
            }
        }, ka.expr.attrHandle.id = ka.expr.attrHandle.name = ka.expr.attrHandle.coords = function(a, c, d) {
            var e;
            return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null
        }, ka.valHooks.button = {
            get: function(a, c) {
                var d = a.getAttributeNode(c);
                return d && d.specified ? d.value : b
            },
            set: Ca.set
        }, ka.attrHooks.contenteditable = {
            set: function(a, b, c) {
                Ca.set(a, "" !== b && b, c)
            }
        }, ka.each(["width", "height"], function(a, b) {
            ka.attrHooks[b] = {
                set: function(a, c) {
                    if ("" === c) return a.setAttribute(b, "auto"), c
                }
            }
        })), ka.support.hrefNormalized || ka.each(["href", "src"], function(a, b) {
            ka.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), ka.support.style || (ka.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || b
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        }), ka.support.optSelected || (ka.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }
        }), ka.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ka.propFix[this.toLowerCase()] = this
        }), ka.support.enctype || (ka.propFix.enctype = "encoding"), ka.each(["radio", "checkbox"], function() {
            ka.valHooks[this] = {
                set: function(a, b) {
                    if (ka.isArray(b)) return a.checked = ka.inArray(ka(a).val(), b) >= 0
                }
            }, ka.support.checkOn || (ka.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var La = /^(?:input|select|textarea)$/i,
            Ma = /^key/,
            Na = /^(?:mouse|contextmenu)|click/,
            Oa = /^(?:focusinfocus|focusoutblur)$/,
            Pa = /^([^.]*)(?:\.(.+)|)$/;
        ka.event = {
            global: {},
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q, r = ka._data(a);
                if (r) {
                    for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = ka.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                            return typeof ka === W || a && ka.event.triggered === a.type ? b : ka.event.dispatch.apply(l.elem, arguments)
                        }, l.elem = a), c = (c || "").match(ma) || [""], i = c.length; i--;) g = Pa.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), o && (k = ka.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = ka.event.special[o] || {}, m = ka.extend({
                        type: o,
                        origType: q,
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && ka.expr.match.needsContext.test(f),
                        namespace: p.join(".")
                    }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), ka.event.global[o] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ka.hasData(a) && ka._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(ma) || [""], j = b.length; j--;)
                        if (h = Pa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = ka.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ka.removeEvent(a, n, q.handle), delete k[n])
                        } else
                            for (n in k) ka.event.remove(a, n + b[j], c, d, !0);
                    ka.isEmptyObject(k) && (delete q.handle, ka._removeData(a, "events"))
                }
            },
            trigger: function(c, d, e, f) {
                var g, h, i, j, k, l, m, n = [e || Y],
                    o = ia.call(c, "type") ? c.type : c,
                    p = ia.call(c, "namespace") ? c.namespace.split(".") : [];
                if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Oa.test(o + ka.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = o.indexOf(":") < 0 && "on" + o, c = c[ka.expando] ? c : new ka.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : ka.makeArray(d, [c]), k = ka.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                    if (!f && !k.noBubble && !ka.isWindow(e)) {
                        for (j = k.delegateType || o, Oa.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                        l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a)
                    }
                    for (m = 0;
                        (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (ka._data(i, "events") || {})[c.type] && ka._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && ka.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                    if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && ka.acceptData(e) && h && e[o] && !ka.isWindow(e)) {
                        l = e[h], l && (e[h] = null), ka.event.triggered = o;
                        try {
                            e[o]()
                        } catch (q) {}
                        ka.event.triggered = b, l && (e[h] = l)
                    }
                    return c.result
                }
            },
            dispatch: function(a) {
                a = ka.event.fix(a);
                var c, d, e, f, g, h = [],
                    i = fa.call(arguments),
                    j = (ka._data(this, "events") || {})[a.type] || [],
                    k = ka.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    for (h = ka.event.handlers.call(this, a, j), c = 0;
                        (f = h[c++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = f.elem, g = 0;
                            (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(e.namespace) || (a.handleObj = e, a.data = e.data, d = ((ka.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, c) {
                var d, e, f, g, h = [],
                    i = c.delegateCount,
                    j = a.target;
                if (i && j.nodeType && (!a.button || "click" !== a.type))
                    for (; j != this; j = j.parentNode || this)
                        if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                            for (f = [], g = 0; g < i; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? ka(d, this).index(j) >= 0 : ka.find(d, this, null, [j]).length), f[d] && f.push(e);
                            f.length && h.push({
                                elem: j,
                                handlers: f
                            })
                        }
                return i < c.length && h.push({
                    elem: this,
                    handlers: c.slice(i)
                }), h
            },
            fix: function(a) {
                if (a[ka.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ka.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || Y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, e, f, g = c.button,
                        h = c.fromElement;
                    return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== k() && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === k() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (ka.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(a) {
                        return ka.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        a.result !== b && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = ka.extend(new ka.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? ka.event.trigger(e, null, b) : ka.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, ka.removeEvent = Y.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c))
        }, ka.Event = function(a, b) {
            return this instanceof ka.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, b && ka.extend(this, b), this.timeStamp = a && a.timeStamp || ka.now(), void(this[ka.expando] = !0)) : new ka.Event(a, b)
        }, ka.Event.prototype = {
            isDefaultPrevented: j,
            isPropagationStopped: j,
            isImmediatePropagationStopped: j,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = i, this.stopPropagation()
            }
        }, ka.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            ka.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || ka.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), ka.support.submitBubbles || (ka.event.special.submit = {
            setup: function() {
                return !ka.nodeName(this, "form") && void ka.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = ka.nodeName(c, "input") || ka.nodeName(c, "button") ? c.form : b;
                    d && !ka._data(d, "submitBubbles") && (ka.event.add(d, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), ka._data(d, "submitBubbles", !0))
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ka.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                return !ka.nodeName(this, "form") && void ka.event.remove(this, "._submit")
            }
        }), ka.support.changeBubbles || (ka.event.special.change = {
            setup: function() {
                return La.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ka.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), ka.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), ka.event.simulate("change", this, a, !0)
                })), !1) : void ka.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    La.test(b.nodeName) && !ka._data(b, "changeBubbles") && (ka.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || ka.event.simulate("change", this.parentNode, a, !0)
                    }), ka._data(b, "changeBubbles", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return ka.event.remove(this, "._change"), !La.test(this.nodeName)
            }
        }), ka.support.focusinBubbles || ka.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                d = function(a) {
                    ka.event.simulate(b, a.target, ka.event.fix(a), !0)
                };
            ka.event.special[b] = {
                setup: function() {
                    0 === c++ && Y.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --c && Y.removeEventListener(a, d, !0)
                }
            }
        }), ka.fn.extend({
            on: function(a, c, d, e, f) {
                var g, h;
                if ("object" == typeof a) {
                    "string" != typeof c && (d = d || c, c = b);
                    for (g in a) this.on(g, c, d, a[g], f);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
                else if (!e) return this;
                return 1 === f && (h = e, e = function(a) {
                    return ka().off(a), h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = ka.guid++)), this.each(function() {
                    ka.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj, ka(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if ("object" == typeof a) {
                    for (f in a) this.off(f, c, a[f]);
                    return this
                }
                return c !== !1 && "function" != typeof c || (d = c, c = b), d === !1 && (d = j), this.each(function() {
                    ka.event.remove(this, a, d, c)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    ka.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                if (c) return ka.event.trigger(a, b, c, !0)
            }
        });
        var Qa = /^.[^:#\[\.,]*$/,
            Ra = /^(?:parents|prev(?:Until|All))/,
            Sa = ka.expr.match.needsContext,
            Ta = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ka.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(ka(a).filter(function() {
                    for (b = 0; b < e; b++)
                        if (ka.contains(d[b], this)) return !0
                }));
                for (b = 0; b < e; b++) ka.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? ka.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            has: function(a) {
                var b, c = ka(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; b < d; b++)
                        if (ka.contains(this, c[b])) return !0
                })
            },
            not: function(a) {
                return this.pushStack(m(this, a || [], !0))
            },
            filter: function(a) {
                return this.pushStack(m(this, a || [], !1))
            },
            is: function(a) {
                return !!m(this, "string" == typeof a && Sa.test(a) ? ka(a) : a || [], !1).length
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = Sa.test(a) || "string" != typeof a ? ka(a, b || this.context) : 0; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ka.find.matchesSelector(c, a))) {
                            c = f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? ka.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? ka.inArray(this[0], ka(a)) : ka.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                var c = "string" == typeof a ? ka(a, b) : ka.makeArray(a && a.nodeType ? [a] : a),
                    d = ka.merge(this.get(), c);
                return this.pushStack(ka.unique(d))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), ka.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return ka.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return ka.dir(a, "parentNode", c)
            },
            next: function(a) {
                return l(a, "nextSibling")
            },
            prev: function(a) {
                return l(a, "previousSibling")
            },
            nextAll: function(a) {
                return ka.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return ka.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return ka.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return ka.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return ka.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return ka.sibling(a.firstChild)
            },
            contents: function(a) {
                return ka.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ka.merge([], a.childNodes)
            }
        }, function(a, b) {
            ka.fn[a] = function(c, d) {
                var e = ka.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ka.filter(d, e)), this.length > 1 && (Ta[a] || (e = ka.unique(e)), Ra.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        }), ka.extend({
            filter: function(a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ka.find.matchesSelector(d, a) ? [d] : [] : ka.find.matches(a, ka.grep(b, function(a) {
                    return 1 === a.nodeType
                }))
            },
            dir: function(a, c, d) {
                for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ka(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
                return e
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
        var Ua = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Va = / jQuery\d+="(?:null|\d+)"/g,
            Wa = new RegExp("<(?:" + Ua + ")[\\s/>]", "i"),
            Xa = /^\s+/,
            Ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Za = /<([\w:]+)/,
            $a = /<tbody/i,
            _a = /<|&#?\w+;/,
            ab = /<(?:script|style|link)/i,
            bb = /^(?:checkbox|radio)$/i,
            cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            db = /^$|\/(?:java|ecma)script/i,
            eb = /^true\/(.*)/,
            fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            gb = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ka.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            hb = n(Y),
            ib = hb.appendChild(Y.createElement("div"));
        gb.optgroup = gb.option, gb.tbody = gb.tfoot = gb.colgroup = gb.caption = gb.thead, gb.th = gb.td, ka.fn.extend({
            text: function(a) {
                return ka.access(this, function(a) {
                    return a === b ? ka.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = o(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = o(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? ka.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ka.cleanData(u(c)), c.parentNode && (b && ka.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && ka.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                    a.options && ka.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null != a && a, b = null == b ? a : b, this.map(function() {
                    return ka.clone(this, a, b)
                })
            },
            html: function(a) {
                return ka.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Va, "") : b;
                    if ("string" == typeof a && !ab.test(a) && (ka.support.htmlSerialize || !Wa.test(a)) && (ka.support.leadingWhitespace || !Xa.test(a)) && !gb[(Za.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Ya, "<$1></$2>");
                        try {
                            for (; d < e; d++) c = this[d] || {}, 1 === c.nodeType && (ka.cleanData(u(c, !1)), c.innerHTML = a);
                            c = 0
                        } catch (f) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = ka.map(this, function(a) {
                        return [a.nextSibling, a.parentNode]
                    }),
                    b = 0;
                return this.domManip(arguments, function(c) {
                    var d = a[b++],
                        e = a[b++];
                    e && (d && d.parentNode !== e && (d = this.nextSibling), ka(this).remove(), e.insertBefore(c, d))
                }, !0), b ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b, c) {
                a = da.apply([], a);
                var d, e, f, g, h, i, j = 0,
                    k = this.length,
                    l = this,
                    m = k - 1,
                    n = a[0],
                    o = ka.isFunction(n);
                if (o || !(k <= 1 || "string" != typeof n || ka.support.checkClone) && cb.test(n)) return this.each(function(d) {
                    var e = l.eq(d);
                    o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c)
                });
                if (k && (i = ka.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
                    for (g = ka.map(u(i, "script"), p), f = g.length; j < k; j++) e = i, j !== m && (e = ka.clone(e, !0, !0), f && ka.merge(g, u(e, "script"))), b.call(this[j], e, j);
                    if (f)
                        for (h = g[g.length - 1].ownerDocument, ka.map(g, q), j = 0; j < f; j++) e = g[j], db.test(e.type || "") && !ka._data(e, "globalEval") && ka.contains(h, e) && (e.src ? ka._evalUrl(e.src) : ka.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fb, "")));
                    i = d = null
                }
                return this
            }
        }), ka.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            ka.fn[a] = function(a) {
                for (var c, d = 0, e = [], f = ka(a), g = f.length - 1; d <= g; d++) c = d === g ? this : this.clone(!0), ka(f[d])[b](c), ea.apply(e, c.get());
                return this.pushStack(e)
            }
        }), ka.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h, i = ka.contains(a.ownerDocument, a);
                if (ka.support.html5Clone || ka.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ib.innerHTML = a.outerHTML, ib.removeChild(f = ib.firstChild)), !(ka.support.noCloneEvent && ka.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ka.isXMLDoc(a)))
                    for (d = u(f), h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]);
                    else s(a, f);
                return d = u(f, "script"), d.length > 0 && r(d, !i && u(a, "script")), d = h = e = null, f
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; p < l; p++)
                    if (f = a[p], f || 0 === f)
                        if ("object" === ka.type(f)) ka.merge(o, f.nodeType ? [f] : f);
                        else if (_a.test(f)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (Za.exec(f) || ["", ""])[1].toLowerCase(), k = gb[i] || gb._default, h.innerHTML = k[1] + f.replace(Ya, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                    if (!ka.support.leadingWhitespace && Xa.test(f) && o.push(b.createTextNode(Xa.exec(f)[0])), !ka.support.tbody)
                        for (f = "table" !== i || $a.test(f) ? "<table>" !== k[1] || $a.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ka.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                    for (ka.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                    h = m.lastChild
                } else o.push(b.createTextNode(f));
                for (h && m.removeChild(h), ka.support.appendChecked || ka.grep(u(o, "input"), v), p = 0; f = o[p++];)
                    if ((!d || ka.inArray(f, d) === -1) && (g = ka.contains(f.ownerDocument, f), h = u(m.appendChild(f), "script"), g && r(h), c))
                        for (e = 0; f = h[e++];) db.test(f.type || "") && c.push(f);
                return h = null, m
            },
            cleanData: function(a, b) {
                for (var c, d, e, f, g = 0, h = ka.expando, i = ka.cache, j = ka.support.deleteExpando, k = ka.event.special; null != (c = a[g]); g++)
                    if ((b || ka.acceptData(c)) && (e = c[h], f = e && i[e])) {
                        if (f.events)
                            for (d in f.events) k[d] ? ka.event.remove(c, d) : ka.removeEvent(c, d, f.handle);
                        i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, ba.push(e))
                    }
            },
            _evalUrl: function(a) {
                return ka.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ka.fn.extend({
            wrapAll: function(a) {
                if (ka.isFunction(a)) return this.each(function(b) {
                    ka(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = ka(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return ka.isFunction(a) ? this.each(function(b) {
                    ka(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = ka(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = ka.isFunction(a);
                return this.each(function(c) {
                    ka(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ka.nodeName(this, "body") || ka(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var jb, kb, lb, mb = /alpha\([^)]*\)/i,
            nb = /opacity\s*=\s*([^)]*)/,
            ob = /^(top|right|bottom|left)$/,
            pb = /^(none|table(?!-c[ea]).+)/,
            qb = /^margin/,
            rb = new RegExp("^(" + la + ")(.*)$", "i"),
            sb = new RegExp("^(" + la + ")(?!px)[a-z%]+$", "i"),
            tb = new RegExp("^([+-])=(" + la + ")", "i"),
            ub = {
                BODY: "block"
            },
            vb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            wb = {
                letterSpacing: 0,
                fontWeight: 400
            },
            xb = ["Top", "Right", "Bottom", "Left"],
            yb = ["Webkit", "O", "Moz", "ms"];
        ka.fn.extend({
            css: function(a, c) {
                return ka.access(this, function(a, c, d) {
                    var e, f, g = {},
                        h = 0;
                    if (ka.isArray(c)) {
                        for (f = kb(a), e = c.length; h < e; h++) g[c[h]] = ka.css(a, c[h], !1, f);
                        return g
                    }
                    return d !== b ? ka.style(a, c, d) : ka.css(a, c)
                }, a, c, arguments.length > 1)
            },
            show: function() {
                return y(this, !0)
            },
            hide: function() {
                return y(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    x(this) ? ka(this).show() : ka(this).hide()
                })
            }
        }), ka.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = lb(a, "opacity");
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
            cssProps: {
                "float": ka.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, c, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f, g, h, i = ka.camelCase(c),
                        j = a.style;
                    if (c = ka.cssProps[i] || (ka.cssProps[i] = w(j, i)), h = ka.cssHooks[c] || ka.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                    if (g = typeof d, "string" === g && (f = tb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(ka.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || ka.cssNumber[i] || (d += "px"), ka.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                        j[c] = d
                    } catch (k) {}
                }
            },
            css: function(a, c, d, e) {
                var f, g, h, i = ka.camelCase(c);
                return c = ka.cssProps[i] || (ka.cssProps[i] = w(a.style, i)), h = ka.cssHooks[c] || ka.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lb(a, c, e)), "normal" === g && c in wb && (g = wb[c]), "" === d || d ? (f = parseFloat(g), d === !0 || ka.isNumeric(f) ? f || 0 : g) : g
            }
        }), a.getComputedStyle ? (kb = function(b) {
            return a.getComputedStyle(b, null)
        }, lb = function(a, c, d) {
            var e, f, g, h = d || kb(a),
                i = h ? h.getPropertyValue(c) || h[c] : b,
                j = a.style;
            return h && ("" !== i || ka.contains(a.ownerDocument, a) || (i = ka.style(a, c)), sb.test(i) && qb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
        }) : Y.documentElement.currentStyle && (kb = function(a) {
            return a.currentStyle
        }, lb = function(a, c, d) {
            var e, f, g, h = d || kb(a),
                i = h ? h[c] : b,
                j = a.style;
            return null == i && j && j[c] && (i = j[c]), sb.test(i) && !ob.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
        }), ka.each(["height", "width"], function(a, b) {
            ka.cssHooks[b] = {
                get: function(a, c, d) {
                    if (c) return 0 === a.offsetWidth && pb.test(ka.css(a, "display")) ? ka.swap(a, vb, function() {
                        return B(a, b, d)
                    }) : B(a, b, d)
                },
                set: function(a, c, d) {
                    var e = d && kb(a);
                    return z(a, c, d ? A(a, b, d, ka.support.boxSizing && "border-box" === ka.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), ka.support.opacity || (ka.cssHooks.opacity = {
            get: function(a, b) {
                return nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = ka.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === ka.trim(f.replace(mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mb.test(f) ? f.replace(mb, e) : f + " " + e)
            }
        }), ka(function() {
            ka.support.reliableMarginRight || (ka.cssHooks.marginRight = {
                get: function(a, b) {
                    if (b) return ka.swap(a, {
                        display: "inline-block"
                    }, lb, [a, "marginRight"])
                }
            }), !ka.support.pixelPosition && ka.fn.position && ka.each(["top", "left"], function(a, b) {
                ka.cssHooks[b] = {
                    get: function(a, c) {
                        if (c) return c = lb(a, b), sb.test(c) ? ka(a).position()[b] + "px" : c
                    }
                }
            })
        }), ka.expr && ka.expr.filters && (ka.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ka.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || ka.css(a, "display"))
        }, ka.expr.filters.visible = function(a) {
            return !ka.expr.filters.hidden(a)
        }), ka.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            ka.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + xb[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, qb.test(a) || (ka.cssHooks[a + b].set = z)
        });
        var zb = /%20/g,
            Ab = /\[\]$/,
            Bb = /\r?\n/g,
            Cb = /^(?:submit|button|image|reset|file)$/i,
            Db = /^(?:input|select|textarea|keygen)/i;
        ka.fn.extend({
            serialize: function() {
                return ka.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = ka.prop(this, "elements");
                    return a ? ka.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !ka(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !bb.test(a))
                }).map(function(a, b) {
                    var c = ka(this).val();
                    return null == c ? null : ka.isArray(c) ? ka.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Bb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Bb, "\r\n")
                    }
                }).get()
            }
        }), ka.param = function(a, c) {
            var d, e = [],
                f = function(a, b) {
                    b = ka.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (c === b && (c = ka.ajaxSettings && ka.ajaxSettings.traditional), ka.isArray(a) || a.jquery && !ka.isPlainObject(a)) ka.each(a, function() {
                f(this.name, this.value)
            });
            else
                for (d in a) E(d, a[d], c, f);
            return e.join("&").replace(zb, "+")
        }, ka.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            ka.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), ka.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var Eb, Fb, Gb = ka.now(),
            Hb = /\?/,
            Ib = /#.*$/,
            Jb = /([?&])_=[^&]*/,
            Kb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Lb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Mb = /^(?:GET|HEAD)$/,
            Nb = /^\/\//,
            Ob = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Pb = ka.fn.load,
            Qb = {},
            Rb = {},
            Sb = "*/".concat("*");
        try {
            Fb = X.href
        } catch (Tb) {
            Fb = Y.createElement("a"), Fb.href = "", Fb = Fb.href
        }
        Eb = Ob.exec(Fb.toLowerCase()) || [], ka.fn.load = function(a, c, d) {
            if ("string" != typeof a && Pb) return Pb.apply(this, arguments);
            var e, f, g, h = this,
                i = a.indexOf(" ");
            return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), ka.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && ka.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: c
            }).done(function(a) {
                f = arguments, h.html(e ? ka("<div>").append(ka.parseHTML(a)).find(e) : a)
            }).complete(d && function(a, b) {
                h.each(d, f || [a.responseText, b, a])
            }), this
        }, ka.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            ka.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), ka.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Fb,
                type: "GET",
                isLocal: Lb.test(Eb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Sb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ka.parseJSON,
                    "text xml": ka.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? H(H(a, ka.ajaxSettings), b) : H(ka.ajaxSettings, a)
            },
            ajaxPrefilter: F(Qb),
            ajaxTransport: F(Rb),
            ajax: function(a, c) {
                function d(a, c, d, e) {
                    var f, l, s, t, v, x = c;
                    2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, f = a >= 200 && a < 300 || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ka.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (ka.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, !a && x || (x = "error", a < 0 && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --ka.active || ka.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (c = a, a = b), c = c || {};
                var e, f, g, h, i, j, k, l, m = ka.ajaxSetup({}, c),
                    n = m.context || m,
                    o = m.context && (n.nodeType || n.jquery) ? ka(n) : ka.event,
                    p = ka.Deferred(),
                    q = ka.Callbacks("once memory"),
                    r = m.statusCode || {},
                    s = {},
                    t = {},
                    u = 0,
                    v = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === u) {
                                if (!l)
                                    for (l = {}; b = Kb.exec(h);) l[b[1].toLowerCase()] = b[2];
                                b = l[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === u ? h : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return u || (a = t[c] = t[c] || a, s[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return u || (m.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (u < 2)
                                    for (b in a) r[b] = [r[b], a[b]];
                                else w.always(a[w.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || v;
                            return k && k.abort(b), d(0, b), this
                        }
                    };
                if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fb) + "").replace(Ib, "").replace(Nb, Eb[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = ka.trim(m.dataType || "*").toLowerCase().match(ma) || [""], null == m.crossDomain && (e = Ob.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Eb[1] && e[2] === Eb[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Eb[3] || ("http:" === Eb[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = ka.param(m.data, m.traditional)), G(Qb, m, c, w), 2 === u) return w;
                j = m.global, j && 0 === ka.active++ && ka.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mb.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hb.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jb.test(g) ? g.replace(Jb, "$1_=" + Gb++) : g + (Hb.test(g) ? "&" : "?") + "_=" + Gb++)),
                    m.ifModified && (ka.lastModified[g] && w.setRequestHeader("If-Modified-Since", ka.lastModified[g]), ka.etag[g] && w.setRequestHeader("If-None-Match", ka.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : m.accepts["*"]);
                for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
                if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
                v = "abort";
                for (f in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[f](m[f]);
                if (k = G(Rb, m, c, w)) {
                    w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                        w.abort("timeout")
                    }, m.timeout));
                    try {
                        u = 1, k.send(s, d)
                    } catch (x) {
                        if (!(u < 2)) throw x;
                        d(-1, x)
                    }
                } else d(-1, "No Transport");
                return w
            },
            getJSON: function(a, b, c) {
                return ka.get(a, b, c, "json")
            },
            getScript: function(a, c) {
                return ka.get(a, b, c, "script")
            }
        }), ka.each(["get", "post"], function(a, c) {
            ka[c] = function(a, d, e, f) {
                return ka.isFunction(d) && (f = f || e, e = d, d = b), ka.ajax({
                    url: a,
                    type: c,
                    dataType: f,
                    data: d,
                    success: e
                })
            }
        }), ka.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return ka.globalEval(a), a
                }
            }
        }), ka.ajaxPrefilter("script", function(a) {
            a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), ka.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var c, d = Y.head || ka("head")[0] || Y.documentElement;
                return {
                    send: function(b, e) {
                        c = Y.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                            (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                        }, d.insertBefore(c, d.firstChild)
                    },
                    abort: function() {
                        c && c.onload(b, !0)
                    }
                }
            }
        });
        var Ub = [],
            Vb = /(=)\?(?=&|$)|\?\?/;
        ka.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Ub.pop() || ka.expando + "_" + Gb++;
                return this[a] = !0, a
            }
        }), ka.ajaxPrefilter("json jsonp", function(c, d, e) {
            var f, g, h, i = c.jsonp !== !1 && (Vb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vb.test(c.data) && "data");
            if (i || "jsonp" === c.dataTypes[0]) return f = c.jsonpCallback = ka.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vb, "$1" + f) : c.jsonp !== !1 && (c.url += (Hb.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
                return h || ka.error(f + " was not called"), h[0]
            }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
                h = arguments
            }, e.always(function() {
                a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Ub.push(f)), h && ka.isFunction(g) && g(h[0]), h = g = b
            }), "script"
        });
        var Wb, Xb, Yb = 0,
            Zb = a.ActiveXObject && function() {
                var a;
                for (a in Wb) Wb[a](b, !0)
            };
        ka.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && K() || L()
        } : K, Xb = ka.ajaxSettings.xhr(), ka.support.cors = !!Xb && "withCredentials" in Xb, Xb = ka.support.ajax = !!Xb, Xb && ka.ajaxTransport(function(c) {
            if (!c.crossDomain || ka.support.cors) {
                var d;
                return {
                    send: function(e, f) {
                        var g, h, i = c.xhr();
                        if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                            for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h])
                        } catch (j) {}
                        i.send(c.hasContent && c.data || null), d = function(a, e) {
                            var h, j, k, l;
                            try {
                                if (d && (e || 4 === i.readyState))
                                    if (d = b, g && (i.onreadystatechange = ka.noop, Zb && delete Wb[g]), e) 4 !== i.readyState && i.abort();
                                    else {
                                        l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                        try {
                                            k = i.statusText
                                        } catch (m) {
                                            k = ""
                                        }
                                        h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                    }
                            } catch (n) {
                                e || f(-1, n)
                            }
                            l && f(h, k, l, j)
                        }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yb, Zb && (Wb || (Wb = {}, ka(a).unload(Zb)), Wb[g] = d), i.onreadystatechange = d) : d()
                    },
                    abort: function() {
                        d && d(b, !0)
                    }
                }
            }
        });
        var $b, _b, ac = /^(?:toggle|show|hide)$/,
            bc = new RegExp("^(?:([+-])=|)(" + la + ")([a-z%]*)$", "i"),
            cc = /queueHooks$/,
            dc = [Q],
            ec = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = bc.exec(b),
                        f = e && e[3] || (ka.cssNumber[a] ? "" : "px"),
                        g = (ka.cssNumber[a] || "px" !== f && +d) && bc.exec(ka.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, ka.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        ka.Animation = ka.extend(O, {
            tweener: function(a, b) {
                ka.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), ka.Tween = R, R.prototype = {
            constructor: R,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ka.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = R.propHooks[this.prop];
                return a && a.get ? a.get(this) : R.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = R.propHooks[this.prop];
                return this.options.duration ? this.pos = b = ka.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ka.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    ka.fx.step[a.prop] ? ka.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ka.cssProps[a.prop]] || ka.cssHooks[a.prop]) ? ka.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, ka.each(["toggle", "show", "hide"], function(a, b) {
            var c = ka.fn[b];
            ka.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e)
            }
        }), ka.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(x).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = ka.isEmptyObject(a),
                    f = ka.speed(b, c, d),
                    g = function() {
                        var b = O(this, ka.extend({}, a), f);
                        (e || ka._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, c, d) {
                var e = function(a) {
                    var b = a.stop;
                    delete a.stop, b(d)
                };
                return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        c = null != a && a + "queueHooks",
                        f = ka.timers,
                        g = ka._data(this);
                    if (c) g[c] && g[c].stop && e(g[c]);
                    else
                        for (c in g) g[c] && g[c].stop && cc.test(c) && e(g[c]);
                    for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                    !b && d || ka.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = ka._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = ka.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, ka.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), ka.each({
            slideDown: S("show"),
            slideUp: S("hide"),
            slideToggle: S("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            ka.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), ka.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? ka.extend({}, a) : {
                complete: c || !c && b || ka.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !ka.isFunction(b) && b
            };
            return d.duration = ka.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ka.fx.speeds ? ka.fx.speeds[d.duration] : ka.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                ka.isFunction(d.old) && d.old.call(this), d.queue && ka.dequeue(this, d.queue)
            }, d
        }, ka.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, ka.timers = [], ka.fx = R.prototype.init, ka.fx.tick = function() {
            var a, c = ka.timers,
                d = 0;
            for ($b = ka.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
            c.length || ka.fx.stop(), $b = b
        }, ka.fx.timer = function(a) {
            a() && ka.timers.push(a) && ka.fx.start()
        }, ka.fx.interval = 13, ka.fx.start = function() {
            _b || (_b = setInterval(ka.fx.tick, ka.fx.interval))
        }, ka.fx.stop = function() {
            clearInterval(_b), _b = null
        }, ka.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ka.fx.step = {}, ka.expr && ka.expr.filters && (ka.expr.filters.animated = function(a) {
            return ka.grep(ka.timers, function(b) {
                return a === b.elem
            }).length
        }), ka.fn.offset = function(a) {
            if (arguments.length) return a === b ? this : this.each(function(b) {
                ka.offset.setOffset(this, a, b)
            });
            var c, d, e = {
                    top: 0,
                    left: 0
                },
                f = this[0],
                g = f && f.ownerDocument;
            if (g) return c = g.documentElement, ka.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), d = T(g), {
                top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
                left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
            }) : e
        }, ka.offset = {
            setOffset: function(a, b, c) {
                var d = ka.css(a, "position");
                "static" === d && (a.style.position = "relative");
                var e, f, g = ka(a),
                    h = g.offset(),
                    i = ka.css(a, "top"),
                    j = ka.css(a, "left"),
                    k = ("absolute" === d || "fixed" === d) && ka.inArray("auto", [i, j]) > -1,
                    l = {},
                    m = {};
                k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), ka.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
            }
        }, ka.fn.extend({
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === ka.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ka.nodeName(a[0], "html") || (c = a.offset()), c.top += ka.css(a[0], "borderTopWidth", !0), c.left += ka.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - ka.css(d, "marginTop", !0),
                        left: b.left - c.left - ka.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || Z; a && !ka.nodeName(a, "html") && "static" === ka.css(a, "position");) a = a.offsetParent;
                    return a || Z
                })
            }
        }), ka.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, c) {
            var d = /Y/.test(c);
            ka.fn[a] = function(e) {
                return ka.access(this, function(a, e, f) {
                    var g = T(a);
                    return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? ka(g).scrollLeft() : f, d ? f : ka(g).scrollTop()) : a[e] = f)
                }, a, e, arguments.length, null)
            }
        }), ka.each({
            Height: "height",
            Width: "width"
        }, function(a, c) {
            ka.each({
                padding: "inner" + a,
                content: c,
                "": "outer" + a
            }, function(d, e) {
                ka.fn[e] = function(e, f) {
                    var g = arguments.length && (d || "boolean" != typeof e),
                        h = d || (e === !0 || f === !0 ? "margin" : "border");
                    return ka.access(this, function(c, d, e) {
                        var f;
                        return ka.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? ka.css(c, d, h) : ka.style(c, d, e, h)
                    }, c, g ? e : b, g, null)
                }
            })
        }), "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ka : (a.jQuery = a.$ = ka, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ka
        }))
    }(window),
    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    }(function(a) {
        function b(a) {
            return h.raw ? a : encodeURIComponent(a)
        }

        function c(a) {
            return h.raw ? a : decodeURIComponent(a)
        }

        function d(a) {
            return b(h.json ? JSON.stringify(a) : String(a))
        }

        function e(a) {
            0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
            } catch (b) {}
        }

        function f(b, c) {
            var d = h.raw ? b : e(b);
            return a.isFunction(c) ? c(d) : d
        }
        var g = /\+/g,
            h = a.cookie = function(e, g, i) {
                if (void 0 !== g && !a.isFunction(g)) {
                    if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                        var j = i.expires,
                            k = i.expires = new Date;
                        k.setTime(+k + 864e5 * j)
                    }
                    return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                }
                for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; n < o; n++) {
                    var p = m[n].split("="),
                        q = c(p.shift()),
                        r = p.join("=");
                    if (e && e === q) {
                        l = f(r, g);
                        break
                    }
                    e || void 0 === (r = f(r)) || (l[q] = r)
                }
                return l
            };
        h.defaults = {}, a.removeCookie = function(b, c) {
            return void 0 !== a.cookie(b) && (a.cookie(b, "", a.extend({}, c, {
                expires: -1
            })), !a.cookie(b))
        }
    }),
    function(a) {
        mutate_event_stack = [{
            name: "width",
            handler: function(b) {
                return n = {
                    el: b
                }, a(n.el).data("mutate-width") || a(n.el).data("mutate-width", a(n.el).width()), !(!a(n.el).data("mutate-width") || a(n.el).width() == a(n.el).data("mutate-width")) && (a(n.el).data("mutate-width", a(n.el).width()), !0)
            }
        }, {
            name: "height",
            handler: function(b) {
                if (element = b, a(element).data("mutate-height") || a(element).data("mutate-height", a(element).height()), a(element).data("mutate-height") && a(element).height() != a(element).data("mutate-height")) return a(element).data("mutate-height", a(element).height()), !0
            }
        }]
    }(jQuery),
    function(a) {
        function b() {
            var c = mutate;
            "undefined" != c.event_stack && c.event_stack.length && a.each(c.event_stack, function(a, b) {
                mutate.add_event(b)
            }), c.event_stack = [], a.each(c.stack, function(b, d) {
                a(d.selector).each(function(a, b) {
                    c.events[d.event_name](b) === !0 ? d.callback && d.callback(b, d) : d.false_callback && d.false_callback(b, d)
                })
            }), setTimeout(b, mutate.speed)
        }
        mutate = {
            speed: 1,
            event_stack: mutate_event_stack,
            stack: [],
            events: {},
            add_event: function(a) {
                mutate.events[a.name] = a.handler
            },
            add: function(a, b, c, d) {
                mutate.stack[mutate.stack.length] = {
                    event_name: a,
                    selector: b,
                    callback: c,
                    false_callback: d
                }
            }
        }, b(), a.fn.extend({
            mutate: function() {
                var b = !1,
                    c = arguments[1],
                    d = this,
                    e = arguments[2] ? arguments[2] : function() {};
                return "extend" == arguments[0].toLowerCase() ? (mutate.add_event(c), this) : (a.each(a.trim(arguments[0]).split(" "), function(a, f) {
                    b = f, mutate.add(b, d, c, e)
                }), this)
            }
        })
    }(jQuery),
    function(a) {
        function b(a, b, c, d, e, f) {
            a = String(a);
            for (var g = 0, h = 0, i = a.length, j = "", k = 0; h < i;) {
                var l = a.charCodeAt(h);
                for (l = l < 256 ? c[l] : -1, g = (g << e) + l, k += e; k >= f;) {
                    k -= f;
                    var m = g >> k;
                    j += d.charAt(m), g ^= m << k
                }++h
            }
            return !b && k > 0 && (j += d.charAt(g << f - k)), j
        }
        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = "", e = [256], f = [256], g = 0, h = {
                encode: function(a) {
                    var b = a.replace(/[\u0080-\u07ff]/g, function(a) {
                        var b = a.charCodeAt(0);
                        return String.fromCharCode(192 | b >> 6, 128 | 63 & b)
                    }).replace(/[\u0800-\uffff]/g, function(a) {
                        var b = a.charCodeAt(0);
                        return String.fromCharCode(224 | b >> 12, 128 | b >> 6 & 63, 128 | 63 & b)
                    });
                    return b
                },
                decode: function(a) {
                    var b = a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(a) {
                        var b = (15 & a.charCodeAt(0)) << 12 | (63 & a.charCodeAt(1)) << 6 | 63 & a.charCodeAt(2);
                        return String.fromCharCode(b)
                    }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(a) {
                        var b = (31 & a.charCodeAt(0)) << 6 | 63 & a.charCodeAt(1);
                        return String.fromCharCode(b)
                    });
                    return b
                }
            }; g < 256;) {
            var i = String.fromCharCode(g);
            d += i, f[g] = g, e[g] = c.indexOf(i), ++g
        }
        var j = a.base64 = function(a, b, c) {
            return b ? j[a](b, c) : a ? null : this
        };
        j.btoa = j.encode = function(a, d) {
            return a = j.raw === !1 || j.utf8encode || d ? h.encode(a) : a, a = b(a, !1, f, c, 8, 6), a + "====".slice(a.length % 4 || 4)
        }, j.atob = j.decode = function(a, c) {
            a = String(a).split("=");
            var f = a.length;
            do --f, a[f] = b(a[f], !0, e, d, 6, 8); while (f > 0);
            return a = a.join(""), j.raw === !1 || j.utf8decode || c ? h.decode(a) : a
        }
    }(jQuery),
    function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define("Legalize", a) : window.Legalize = a()
    }(function(a) {
        "use strict";

        function b(a) {
            return "function" == typeof a
        }
        Array.isArray || (Array.isArray = function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        });
        var c = {
            freeze: b(Object.freeze) ? Object.freeze : function(a) {
                return a
            },
            keys: b(Object.keys) ? Object.keys : function() {
                var a = Object.prototype.hasOwnProperty,
                    b = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    d = c.length;
                return function(e) {
                    var f, g, h = [];
                    for (f in e) a.call(e, f) && h.push(f);
                    if (b)
                        for (g = 0; g < d; g += 1) a.call(e, c[g]) && h.push(c[g]);
                    return h
                }
            }(),
            create: b(Object.create) ? Object.create : function(a) {
                function b() {}
                return b.prototype = a, new b
            }
        };
        return function(b) {
            function c(a) {
                return function(b) {
                    return !a(b)
                }
            }

            function d(a) {
                return Array.isArray(a) ? "array" : null === a ? "null" : typeof a
            }

            function e(b, c) {
                if (d(b) === c) return b;
                switch (c) {
                    case "string":
                        return String(b);
                    case "number":
                        return Number(b);
                    case "boolean":
                        return "true" === b || "false" !== b && Boolean(Number(b));
                    default:
                        return a
                }
            }

            function f(a) {
                return "function" === d(a)
            }

            function g(a) {
                return "object" === d(a)
            }

            function h(a) {
                return "number" === d(a)
            }

            function i(a) {
                return "string" === d(a)
            }

            function j(a) {
                return "array" === d(a)
            }

            function k(b) {
                return null === b || b === a
            }

            function l(a) {
                var b = Number(a);
                return b === b
            }

            function m(a) {
                return parseInt(a) === Number(a)
            }

            function n(c) {
                return j(c) || i(c) ? c.length : g(c) ? b.keys(c).length : a
            }

            function o(a) {
                return k(a) || 0 === n(a)
            }

            function p(a, b) {
                return a instanceof b
            }

            function q(a, c) {
                var d;
                if (j(a))
                    for (d = 0; d < a.length; d += 1) a[d] = c(a[d], d);
                else {
                    var e = b.keys(a);
                    for (d = 0; d < e.length; d += 1) {
                        var f = e[d];
                        a[f] = c(a[f], f)
                    }
                }
            }

            function r(a, b) {
                q(a, function(a, c) {
                    return b(a, c), a
                })
            }

            function s() {
                for (var a = {}, b = 0; b < arguments.length; b += 1) {
                    var c = arguments[b];
                    r(c, function(b, c) {
                        if (j(a[c])) {
                            var d = function(b) {
                                a[c].push(b)
                            };
                            j(b) ? b.forEach(d) : d(b)
                        } else g(a[c]) && g(b) ? a[c] = s(a[c], b) : a[c] = b
                    })
                }
                return a
            }

            function t(a, b) {
                return g(b) && r(b, function(c, d) {
                    a[d] = b[d]
                }), a
            }

            function u(a, c) {
                if (!j(a) && !g(a)) return a === c || a !== a && c !== c;
                if (n(a) !== n(c)) return !1;
                for (var d = s({
                        x: b.keys(a)
                    }, {
                        x: b.keys(c)
                    }).x, e = 0; e < d.length; e += 1) {
                    var f = d[e];
                    if (!u(a[f], c[f])) return !1
                }
                return !0
            }

            function v(a) {
                if (a._isSchema) return a;
                if (a._isSchemaBuilder && f(a.compile)) return a.compile();
                if (p(a, RegExp)) return H.string().match(a).compile();
                if (j(a)) {
                    var b = H.alternatives;
                    return b.apply(H, a).compile()
                }
                return g(a) ? H.object().keys(a).compile() : H.any().valid(a).compile()
            }

            function w(a, c) {
                return function() {
                    var d = Array.prototype.slice.call(arguments),
                        e = b.create(this),
                        g = this;
                    return t(e, c), e.compile = function(b) {
                        var c = s(g.compile(!0), f(a) ? a(d) : a);
                        if (!b) {
                            var e = function(a) {
                                return v(a)
                            };
                            q(c.includes, e), q(c.excludes, e), q(c.keys, e), q(c.alternatives, e)
                        }
                        return c._isSchema = !0, c
                    }, e
                }
            }

            function x(a) {
                return w(function(b) {
                    var c = {};
                    return c[a] = b[0], c
                })
            }

            function y(a) {
                return w(function(b) {
                    var c = {};
                    return c[a] = b, c
                })
            }

            function z(a) {
                return w(function(b) {
                    return {
                        checks: function(c) {
                            return a(c, b[0])
                        }
                    }
                })
            }

            function A(a) {
                return z(function(b) {
                    return a.test(b)
                })
            }

            function B(a, b) {
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    return b.apply(a, c)
                }
            }

            function C(a) {
                return s(a, {
                    minLength: z(function(a, b) {
                        return n(a) >= b
                    }),
                    maxLength: z(function(a, b) {
                        return n(a) <= b
                    }),
                    length: z(function(a, b) {
                        return n(a) === b
                    })
                })
            }

            function D() {
                return {
                    allowed: [],
                    valid: [],
                    invalid: [],
                    checks: [],
                    checksAfter: [],
                    alias: {},
                    keys: {},
                    includes: [],
                    excludes: [],
                    alternatives: [],
                    sanitizeBefore: [],
                    sanitize: [],
                    pattern: null,
                    _isSchema: !0
                }
            }

            function E(b, c, h, k) {
                function l(b, c, f) {
                    function k(a, c, d) {
                        return {
                            type: a,
                            expected: c,
                            actual: d,
                            sourcePath: f,
                            sourceValue: b
                        }
                    }

                    function m(a, b, c) {
                        q.push(g(a) ? a : k(a, b, c))
                    }

                    function n(a, b, c, d) {
                        var e = k(b, c, d);
                        return L(y) && x === J && h.warnOnInvalidOptionals ? (m(e), s(a)) : {
                            error: e,
                            value: a
                        }
                    }

                    function s(a) {
                        return {
                            value: a
                        }
                    }

                    function v(a) {
                        j(a) ? r(a, function(a) {
                            v(a)
                        }) : i(a) ? v(k(a)) : g(a) && m(t(k(), a))
                    }
                    var w = d(b),
                        x = c.presence || h.presence,
                        y = c.defaultValue,
                        z = c.type,
                        A = 0,
                        B = 0;
                    if ("undefined" === w) return x === J ? s(y) : x === I ? n(a, "required_missing") : s();
                    if (x === K) return n(a, "forbidden_encountered");
                    var C = c.alternatives;
                    if (!o(C)) {
                        for (A = 0; A < C.length; A += 1) {
                            var D = C[A],
                                E = l(b, D, f);
                            if (!E.error) return E
                        }
                        return n(y, "no_alternative_matched")
                    }
                    r(c.sanitizeBefore, function(a) {
                        b = a(b)
                    });
                    var F = c.alias;
                    if (L(F[b]) && (b = F[b]), L(z) && w !== z) {
                        if (h.strict) return n(y, "mismatching_types", z, w);
                        m("mismatching_types", z, w), b = e(b, z)
                    }
                    var G = c.allowed;
                    for (A = 0; A < G.length; A += 1)
                        if (u(G[A], b)) return s(b);
                    var H = c.invalid;
                    for (A = 0; A < H.length; A += 1)
                        if (u(H[A], b)) return n(y, "invalid_value");
                    var M = c.valid;
                    if (!o(M)) {
                        for (A = 0; A < M.length; A += 1)
                            if (u(M[A], b)) return s(b);
                        return n(y, "not_a_valid_value")
                    }
                    var N = [];
                    if (r(c.checks, function(a) {
                            var c;
                            try {
                                c = a(b)
                            } catch (d) {
                                return console.log("Error while executing user-defined function"), console.log(d), !1
                            }
                            c !== !0 && (g(c) || (c = k("check_failed")), N.push(c))
                        }), !o(N)) return n(y, "checks_failed");
                    if ("object" === z) {
                        var O = {},
                            P = [];
                        r(c.keys, function(a, c) {
                            var d = l(b[c], a, f + "/" + c);
                            if (d.error) {
                                var e = a.presence || h.presence;
                                e === J && h.warnOnInvalidOptionals ? m(d.error) : P.push(d.error)
                            }
                            O[c] = d.value
                        });
                        var Q = p(c.pattern, RegExp) ? c.pattern : null;
                        if (r(b, function(d, e) {
                                if (!c.keys[e]) {
                                    var f = k("unknown_key", a, e),
                                        g = !h.stripUnknown;
                                    Q && Q.test(e) ? g = !0 : h.allowUnknown ? h.warnUnknown && m(f) : P.push(f), g && (b[e] = d)
                                }
                            }), !o(P)) return n(O, P);
                        b = O
                    } else if ("array" === z) {
                        var R = [],
                            S = [],
                            T = c.includes,
                            U = c.excludes;
                        if (o(T) ? o(U) ? R = b : r(b, function(a) {
                                var b, c = !0;
                                for (B = 0; B < U.length; B += 1)
                                    if (b = l(a, U[B], f + "/" + A), !b.error) {
                                        c = !1;
                                        break
                                    }
                                c ? R.push(b.value) : S.push(k("matched_excluded_type"))
                            }) : r(b, function(a) {
                                var b, c = !1;
                                for (B = 0; B < T.length; B += 1)
                                    if (b = l(a, T[B], f + "/" + A), !b.error) {
                                        c = !0;
                                        break
                                    }
                                c ? R.push(b.value) : S.push(b.error)
                            }), !o(S)) return n(R, S);
                        b = R
                    }
                    return r(c.checksAfter, function(a) {
                        var c;
                        try {
                            c = a(b)
                        } catch (d) {
                            return console.log("Error while executing user-defined function"), console.log(d), !1
                        }
                        c !== !0 && v(c)
                    }), r(c.sanitize, function(a) {
                        b = a(b)
                    }), s(b)
                }

                function m(a, b) {
                    return j(a.type) ? r(a.type, function(a) {
                        m(a, b)
                    }) : b.push(a), b
                }
                if (k = f(k) ? k : f(h) ? h : null, h = g(h) ? h : {}, o(h)) h = G;
                else {
                    var n = E(h, F);
                    if (n.error) throw new Error(n.error);
                    h = n.value
                }
                c = v(c);
                var q = [],
                    s = l(b, c, ""),
                    w = s.error ? m(s.error, []) : null,
                    x = s.value;
                return q = o(q) ? null : q, f(k) ? void setTimeout(function() {
                    k(w, x, q)
                }, 0) : {
                    error: w,
                    value: x,
                    warnings: q
                }
            }
            var F, G, H = {},
                I = "required",
                J = "optional",
                K = "forbidden",
                L = c(k),
                M = {
                    _isSchemaBuilder: !0,
                    compile: D,
                    notEmpty: z(c(o)),
                    allow: y("allowed"),
                    valid: y("valid"),
                    invalid: y("invalid"),
                    alias: x("alias"),
                    check: y("checksAfter"),
                    satisfy: y("checks"),
                    sanitize: y("sanitize"),
                    sanitizeBefore: y("sanitizeBefore"),
                    required: w({
                        presence: I
                    }),
                    optional: w({
                        presence: J
                    }),
                    forbidden: w({
                        presence: K
                    }),
                    "default": x("defaultValue")
                },
                N = w({}),
                O = w({
                    type: "boolean"
                }),
                P = w({
                    type: "function"
                }),
                Q = w({
                    type: "number"
                }, {
                    min: z(function(a, b) {
                        return a >= b
                    }),
                    max: z(function(a, b) {
                        return a <= b
                    }),
                    greater: z(function(a, b) {
                        return a > b
                    }),
                    lesser: z(function(a, b) {
                        return a < b
                    }),
                    integer: z(m)
                }),
                R = w({
                    type: "string"
                }, C({
                    match: z(function(a, b) {
                        return new RegExp(b).test(a)
                    }),
                    insensitive: w({
                        insensitive: !0
                    }),
                    lowercase: z(function(a) {
                        return a = String(a), a.toLowerCase() === a
                    }),
                    uppercase: z(function(a) {
                        return a = String(a), a.toUpperCase() === a
                    }),
                    alphanum: A(/^[0-9a-zA-Z]*$/),
                    url: A(/^https?:\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/),
                    element: z(function(a) {
                        return !!window.document.getElementById(a)
                    }),
                    digits: z(/^[0-9]*$/),
                    numeric: z(l)
                })),
                S = w({
                    type: "array"
                }, C({
                    unique: z(function(a) {
                        for (var b = {}, c = 0; c < a.length; c += 1) {
                            var d = a[c];
                            if (h(d) || i(d)) {
                                if (b[d]) return !1;
                                b[d] = !0
                            }
                        }
                        return !0
                    }),
                    includes: y("includes"),
                    excludes: y("excludes")
                })),
                T = w({
                    type: "object"
                }, C({
                    keys: x("keys"),
                    type: z(p),
                    pattern: x("pattern")
                })),
                U = y("alternatives");
            return H = b.freeze({
                any: B(M, N),
                bool: B(M, O),
                "boolean": B(M, O),
                number: B(M, Q),
                string: B(M, R),
                object: B(M, T),
                array: B(M, S),
                func: B(M, P),
                alternatives: B(M, U),
                compile: v,
                validate: E,
                typeOf: d
            }), F = v({
                allowUnknown: H.bool()["default"](!1),
                stripUnknown: H.bool()["default"](!0),
                warnUnknown: H.bool()["default"](!0),
                strict: H.bool()["default"](!0),
                warnOnInvalidOptionals: H.bool()["default"](!0),
                presence: H.any().valid(J).valid(I).valid(K)["default"](J)
            }), G = {
                allowUnknown: !1,
                stripUnknown: !0,
                warnUnknown: !0,
                strict: !0,
                warnOnInvalidOptionals: !0,
                presence: J
            }, H
        }(c)
    })
}();
var PAYPAL = PAYPAL || {};
PAYPAL.apps = PAYPAL.apps || {}, PAYPAL.apps.PPP = function(a, b, c, d) {
    "use strict";

    function e(a, b) {
        var c = null,
            d = a.exec(b);
        return null !== d && (c = "em" === d[7] ? {
            number: parseFloat(d[5]),
            unit: d[7]
        } : {
            number: parseFloat(d[2]),
            unit: d[3]
        }), c
    }

    function f(a, b) {
        var c = {
            msgKey: a,
            attrs: b || []
        };
        return console.log("createFontSizeError: " + JSON.stringify(c)), c
    }

    function g(a, b) {
        return function(c) {
            if (console.log("check fontsize: " + c), null === c || c === d) return !0;
            var g = e(b, c),
                h = a[g.unit];
            return null === h ? f("fontSize.unsupportedFontUnit.error", [g.unit]) : !(g.number < h.min || g.number > h.max) || f("fontSize.range.error", [g.unit, h.min, h.max])
        }
    }

    function h(a, b) {
        return function(c) {
            var d = e(b, c);
            if (null !== d) {
                var f = a[d.unit],
                    g = d.number;
                return d.number < f.min ? g = f.min : d.number > f.max && (g = f.max), g !== d.number && console.log("fontsize for '" + d.unit + "' out of range -> changing it from " + d.number + " to " + g), "" + g + d.unit
            }
            return c
        }
    }

    function i(a) {
        for (var b = {}, c = 0; c !== a.length; ++c) b[a[c].toLowerCase()] = "";
        return b
    }

    function j(a) {
        for (var b = a.split(","), c = 0; c !== b.length; ++c) b[c] = b[c].replace(/['\"]/g, "").trim();
        return b
    }

    function k(a, b) {
        var c = i(a);
        console.log("allowedFontFamiliesLookUp: " + JSON.stringify(c));
        var d = j(b);
        console.log("parsed fontFamilies: " + JSON.stringify(d));
        for (var e = 0; e !== d.length; ++e)
            if (c.hasOwnProperty(d[e].toLowerCase())) return d[e];
        return null
    }

    function l(a, b) {
        return function(c) {
            if (console.log("check font family: " + c), null === c || c === d) return !0;
            var e = k(a, c);
            return null !== e || f("fontFamily.unsupported.error", [c, a, b])
        }
    }

    function m(a, b) {
        return function(c) {
            var d = c,
                e = k(a, c);
            return d = null !== e ? e : b, d !== c && console.log("changed font family from '" + c + "' to '" + d + "'"), d
        }
    }

    function n(a) {
        return ba.indexOf(a) !== -1
    }

    function o(a) {
        return "string" === c.typeOf(a) && (a = a.toUpperCase()), a
    }

    function p(a) {
        return "string" === c.typeOf(a) && 5 === a.length && 2 === a.indexOf("_")
    }

    function q(b) {
        return a.document.getElementById(b)
    }

    function r(a) {
        return function(b) {
            return "string" === c.typeOf(b) ? b.substring(0, a) : ""
        }
    }

    function s(a) {
        a = a.replace(/[^\d]/g, "");
        var b = a.length;
        if (11 !== b) return !1;
        var c = a.match(/\b(\d)\1+\b/);
        if (c) return !1;
        var d, e, f, g, h = 0,
            i = 0;
        for (f = 0, g = 10; g > 1; f++, g--) h += g * +a[f];
        for (h %= 11, d = 11 - h < 10 ? 11 - h : 0, f = 0, g = 11; g > 2; f++, g--) i += g * +a[f];
        return i += 2 * d, i %= 11, e = 11 - i < 10 ? 11 - i : 0, d === parseInt(a[9]) && e === parseInt(a[10])
    }

    function t(a) {
        var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        a = a.replace(/[^\d]/g, "");
        var c = a.length;
        if (14 !== c) return !1;
        for (var d = 0, e = 0; d < 12; e += a[d] * b[++d]);
        if (parseInt(a[12], 10) !== ((e %= 11) < 2 ? 0 : 11 - e)) return !1;
        for (d = 0, e = 0; d <= 12; e += a[d] * b[d++]);
        return parseInt(a[13], 10) === ((e %= 11) < 2 ? 0 : 11 - e)
    }

    function u(b, c) {
        var d = a.console || {
                log: S.noop
            },
            e = Function.prototype.call;
        d[c] ? e.call(d[c], d, b) : e.call(d.log, d, c.toUpperCase() + ": " + b)
    }

    function v(a) {
        var b = a.sourcePath.replace(/^\/+/, "");
        return "Invalid '" + b + "'."
    }

    function w(a) {
        var b = {
            "fontSize.unsupportedFontUnit.error": "Invalid font unit: {0}.",
            "fontSize.range.error": "Invalid font size for unit '{0}'. Must be between [{1},{2}].",
            "fontFamily.unsupported.error": "Given font-family '{0}' is not supported. Allowed font families: {1}. Using default-font-family '{2}'."
        };
        return b[a]
    }

    function x(a, b) {
        for (var c = a, d = 0; d !== b.length; ++d) {
            var e = b[d];
            e instanceof Array && (e = JSON.stringify(e)), c = c.replace("{" + d + "}", e)
        }
        return c
    }

    function y(a, b) {
        "undefined" == typeof b && (b = "warn"), u("INTERNAL-LOG: renderMessage(), warning: " + JSON.stringify(a), "log");
        var c = null,
            e = a.msgKey;
        if (e !== d) {
            var f = w(e);
            if (f !== d) {
                var g = a.attrs;
                g !== d && (c = x(f, g))
            } else u("INTERNAL-LOG: no message-template defined for msgKey: '" + e + "' -> rendering default-message", "warn")
        }
        null === c && (c = v(a)), u(c, b)
    }

    function z(a, b) {
        u("INTERNAL-LOG: validateConfigAndReportErrors: " + JSON.stringify(a), "log");
        var d = c.validate(a, b, {
            warnUnknown: !0,
            strict: !1
        });
        u("INTERNAL-LOG: validationResult: " + JSON.stringify(d), "log"), u("INTERNAL-LOG: mode: " + d.value.mode, "log");
        var e = "sandbox" === d.value.mode || "live" === d.value.mode;
        if (e = e || "testing" === d.value.mode, d.warnings && e && d.warnings.forEach(function(a) {
                y(a)
            }), !d.error)
            if ("" !== d.value.payerTaxId)
                if (s(d.value.payerTaxId)) d.value.payerTaxIdType = "BR_CPF";
                else {
                    if (!t(d.value.payerTaxId)) throw new Error("New tax type?");
                    d.value.payerTaxIdType = "BR_CNPJ"
                }
        else d.value.payerTaxIdType = "";
        var f = {
            error: !1,
            errorMessage: [],
            validationResult: d.value
        };
        return d.error && (u("PP+ Configuration Validation Error. Please review configuration.: " + (d.error ? d.error[0].type : " error type not found."), "error"), d.error.forEach(function(a) {
            switch (e && (f.errorMessage.push(v(a)), y(a, "error")), a.sourcePath) {
                case "/placeholder":
                    throw new Error("No placeholder given!")
            }
        }), f.error = !0), f
    }

    function A(a) {
        return a === d || null === a || "" === a
    }

    function B(a) {
        return !A(a)
    }

    function C(a) {
        return null !== a && "object" == typeof a
    }

    function D(a) {
        return "function" == typeof a
    }

    function E(a) {
        return S.isArray(a)
    }

    function F() {
        if (!A(PAYPAL.apps.PPP)) throw "PAYPAL.apps.PPP already defined!"
    }

    function G(a, b, c) {
        function d() {
            f.width(a.width())
        }
        var e = "iframe_" + 1e4 * Math.random() % 1,
            f = S("<iframe/>").attr("id", e).attr("allowtransparency", "true").css("height", "550px").css("width", a.width()).css("border", "none");
        if (B(b) && f.attr("src", b), f.appendTo(a.empty()), a.mutate("width", d), d(), B(c)) {
            var g = f[0],
                h = g.contentDocument || g.contentWindow.document;
            h.write(c)
        }
        return f
    }

    function H(b, c, d) {
        var e = a.screenLeft ? a.screenLeft : a.screenX,
            f = a.screenTop ? a.screenTop : a.screenY,
            g = e + a.innerWidth / 2 - c / 2,
            h = f + a.innerHeight / 2 - d / 2,
            i = "titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + c + ", height=" + d + ", top=" + h + ", left=" + g,
            j = a.open("", "Checkout", i);
        return j.document.write(b), j
    }

    function I(a) {
        var b = S.cookie(R) || {};
        S.cookie(R, S.extend(b, a))
    }

    function J(a) {
        var b = S.cookie(R) || {};
        return b[a]
    }

    function K(a) {
        I({
            paymentMethod: a
        })
    }

    function L() {
        return J("paymentMethod")
    }

    function M() {
        return J("thirdPartyMethods")
    }

    function N() {
        PAYPAL.apps.PPPSampleShop && PAYPAL.apps.PPPSampleShop.baseUrls && PAYPAL.apps.PPPSampleShop.baseUrls.testing && (T.testing = PAYPAL.apps.PPPSampleShop.baseUrls.testing)
    }

    function O() {
        var b = J("mode");
        N();
        var c = T[b];
        if (A(c)) throw "could not get URLs";
        var d = "",
            e = L();
        if ("pp-" !== e.substr(0, 3)) {
            var f = M();
            d = f[e].redirectUrl
        } else {
            var g = ["ecToken", "paymentMethod", "country", "language", "useraction"],
                h = S.map(g, function(a) {
                    return a + "=" + encodeURIComponent(J(a))
                });
            d = c.psp + "/payment-approval?" + h.join("&")
        }
        return a.top.location = d, d
    }

    function P(a) {
        if ("string" == typeof a) {
            var b = a.split("?")[1];
            if (b) {
                for (var c, d = b.split("&"), e = 0; e < d.length; e++) {
                    var f = d[e].split("=");
                    "token" === f[0] && (c = f[1])
                }
                return c
            }
        }
    }

    function Q(b) {
        function c() {
            var a = z(b, ha);
            if (v = a.validationResult, N(), w = T[v.mode], a.error) return r = S("#" + v.placeholder), x.onError(a.errorMessage), h(), !1;
            r = S("#" + v.placeholder), p = P(v.approvalUrl);
            var c = /^[0-9]+$/;
            return v.iframeHeight && c.test(v.iframeHeight.trim()) ? (v.iframeHeight = parseInt(v.iframeHeight.trim()) > 300 ? parseInt(v.iframeHeight.trim()) : 300, v.iframeHeight = v.iframeHeight < 1e3 ? v.iframeHeight : 1e3) : v.iframeHeight && (v.iframeHeight = d), !0
        }

        function e() {
            return v.styles
        }

        function f(a) {
            try {
                if (w.psp.indexOf(a.origin) !== -1) {
                    var b = JSON.parse(a.data),
                        c = x[b.action];
                    if (D(c)) return c(b)
                }
            } catch (d) {}
        }

        function g() {
            if (a.addEventListener) a.addEventListener("message", f, !1);
            else {
                if (!a.attachEvent) return void h();
                a.attachEvent("onmessage", f)
            }
        }

        function h() {
            if (r) {
                var a = v.language;
                "pt_BR" !== a && "es_MX" !== a && (a = "en_US");
                var b = w.psp + "/clientlib/public/pages/" + a + "/notavailableerror.html";
                s = G(r, b), r.height("300px"), s.height("300px")
            }
        }

        function i() {
            function a() {
                t.focus()
            }

            function b() {
                t.close(), d.remove()
            }
            var c;
            switch (v.language) {
                case "pt_BR":
                    c = "NÃ£o estÃ¡ vendo o navegador seguro do PayPal? Ajudaremos vocÃª a reabrir a janela para concluir a compra.  <a class='ppbutton'>Continuar</a>";
                    break;
                case "es_MX":
                    c = "Â¿No ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra. <a class='ppbutton'>Continuar</a>";
                    break;
                default:
                    c = "Donâ€™t see the secure PayPal browser? Weâ€™ll help you re-launch the window to complete your purchase. <a class='ppbutton'>Continue</a>"
            }
            var d = S("<div id='PPFrame'></div>"),
                e = S("<div class='ppmodal'></div>"),
                f = S("<div class='mask' id='mask'></div>");
            f.height(S(document).height()), f.width(S(document).width()), f.click(a);
            var g = S("<div class='pplogo'></div>"),
                h = S("<div class='ppmessage' id='ppmsg'>" + c + "</div>"),
                i = S("<a class='closeButton'>Close Window</a></div>");
            i.click(b), e.append(g).append(h).append(i), d.append(f).append(e), S("body").append(d), S(".ppbutton").click(a);
            var j = "<style>body.PPFrame {    overflow: hidden;}#PPFrame {    z-index: 20002;    top: 0;    left: 0;}#PPFrame .mask {    z-index: 20001;    position: absolute;    top: 0;    left: 0;    background-color: black;    background-image: radial-gradient(circle farthest-corner, #000000, #4A4A4A);    opacity: 0.80;    filter: alpha(opacity=80);}#PPFrame .ppmodal {    font-family: 'HelveticaNeue', 'HelveticaNeue-Light', 'Helvetica Neue Light', helvetica, arial, sans-serif;    font-size: 14px;    text-align: center;    color: #fff;    z-index: 20003;    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    -ms-box-sizing: border-box;    box-sizing: border-box;    width: 350px;    top: 50%;    left: 50%;    position: fixed;    margin-left: -165px;    margin-top: -80px;}#PPFrame .ppmodal .pplogo {    background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/mb_sprite.png) no-repeat 0 0;    width: 94px;    height: 25px;    margin: 0 0 26px 130px}#PPFrame .ppmodal .closeButton {    position: fixed;    top: 10px;    right: 10px;    display: inline-block;    background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/mb_sprite.png) no-repeat 0 -67px;    width: 14px;    height: 14px;    text-indent: -999em;    cursor: pointer;}#PPFrame .ppmodal .closeButton:hover {    background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/mb_sprite.png) no-repeat -50px -67px;    width: 14px;    height: 14px;}#PPFrame .ppmodal .text {    font-size: 14px;}#PPFrame .ppmodal a.button {    display: block;    cursor: pointer;    margin-top: 20px;    color: #0088cc;}#PPFrame .ppmodal a.ppbutton {    display: block;    cursor: pointer;    margin-top: 20px;    color: #0088cc;}@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: ~ '2/1'), only screen and (min-device-pixel-ratio: 2) {    #PPFrame .ppmodal .pplogo {        background: url(https://www.paypalobjects.com/webstatic/checkout/hermes/mb_sprite_2x.png) no-repeat 0 0;        background-size: 100px 75px;    }}</style>";
            S("body").append(j)
        }

        function j() {
            S.base64.utf8encode = !0;
            var b = v.thirdPartyPaymentMethods;
            if (S.isEmptyObject(b)) b = "";
            else {
                for (var c = [], d = 0; d < b.length; d++) {
                    var e = b[d];
                    c.push({
                        methodName: e.methodName,
                        imageUrl: e.imageUrl,
                        description: e.description
                    })
                }
                b = S.base64.btoa(JSON.stringify(c))
            }
            var f = "";
            S.isEmptyObject(v.styles) || (f = S.base64.btoa(JSON.stringify(v.styles))), v.buttonLocation = "outside";
            var g = {
                    ecToken: p,
                    continueButton: v.buttonLocation,
                    preselection: v.preselection,
                    surcharging: v.surcharging,
                    country: v.country,
                    language: v.language,
                    payerEmail: v.payerEmail,
                    payerPhone: v.payerPhone,
                    payerFirstName: v.payerFirstName,
                    payerLastName: v.payerLastName,
                    payerTaxId: v.payerTaxId,
                    payerTaxIdType: v.payerTaxIdType,
                    disallowRememberedCards: v.disallowRememberedCards,
                    rememberedCards: v.rememberedCards,
                    thirdPartyMethods: b,
                    iframeHeight: v.iframeHeight,
                    hideMxDebitCards: v.hideMxDebitCards,
                    styles: f,
                    merchantInstallmentSelection: v.merchantInstallmentSelection,
                    merchantInstallmentSelectionOptional: v.merchantInstallmentSelectionOptional,
                    hideAmount: v.hideAmount,
                    miniBrowser: v.miniBrowser
                },
                h = S.map(g, function(a, b) {
                    return "<input type='hidden' name='" + b + "' value='" + encodeURIComponent(a) + "'>"
                }).join("");
            q = w.psp + "/payment-selection";
            var j = "<html><body><form method='post' action='" + q + "'>" + h + "</form></body><script>window.document.forms[0].submit();</script></html>";
            v.miniBrowser ? (i(), t = H(j, 500, 550), a.onbeforeunload = function() {
                t.close()
            }) : (s = G(r, null, j), v.iframeHeight && (r.height(v.iframeHeight + "px"), s.height(v.iframeHeight + "px")))
        }

        function k(a, b) {
            var c = S.extend({
                action: a
            }, b || {});
            s[0].contentWindow.parent.console && s[0].contentWindow.parent.console.log("postMessage(): message=" + JSON.stringify(c)), s[0].contentWindow.parent.postMessage(JSON.stringify(c), s[0].contentWindow.parent.location.origin)
        }

        function l(a) {
            s[0].contentWindow.postMessage(JSON.stringify({
                action: a
            }), q)
        }

        function m() {
            l("continue")
        }

        function n() {
            l("deselectPaymentMethod")
        }
        var o, p, q, r, s, t, v = {},
            w = {},
            x = {
                enableContinueButton: function(a) {
                    B(a.paymentMethod) && K(a.paymentMethod), v.enableContinue()
                },
                disableContinueButton: function() {
                    v.disableContinue()
                },
                resizeHeightOfTheIframe: function(a) {
                    v.iframeHeight || (r.height(a.height), s.height(a.height))
                },
                loaded: function() {
                    v.onLoad()
                },
                nothingSelected: function() {},
                onError: function(a) {
                    v.onError && v.onError(a)
                },
                closeMiniBrowser: function() {
                    S("#PPFrame").remove(), a.removeEventListener("message", f, !1)
                },
                onMiniBrowserClose: function() {
                    v.onMiniBrowserClose && v.onMiniBrowserClose()
                },
                checkout: function(a) {
                    if (u("INTERNAL-LOG: checkout action sent due to successful creation of checkout session through redirected or inline checkout: ", "log"), B(a.paymentMethod) && (K(a.paymentMethod), v.onContinue()), B(a.result)) {
                        var b, c, d;
                        B(a.result.rememberedCards) && (b = a.result.rememberedCards), B(a.result.payer) && B(a.result.payer.payer_info) && B(a.result.payer.payer_info.payer_id) && (c = a.result.payer.payer_info.payer_id), B(a.result.id) && (d = a.result.id), B(a.result.term) && (o = a.result.term), u("INTERNAL-LOG: rememberedCards token: " + JSON.stringify(b, null, 2), "log"), u("INTERNAL-LOG: payerId: " + JSON.stringify(c, null, 2), "log"), u("INTERNAL-LOG: token: " + JSON.stringify(d, null, 2), "log"), v.onContinue(b, c, d, o)
                    } else u("INTERNAL-LOG: rememberedCards not given: " + JSON.stringify(a.result, null, 2), "log")
                },
                selectThirdPartyPaymentMethod: function(a) {
                    v.onThirdPartyPaymentMethodSelected(a)
                },
                deselectThirdPartyPaymentMethod: function(a) {
                    v.onThirdPartyPaymentMethodDeselected(a)
                },
                logMerchantInfo: function(a) {
                    B(a.msg) && u(JSON.stringify(a.msg), "log")
                },
                displayErrorPage: function(a) {
                    u("INTERNAL-LOG: action displayErrorPage received", "log"), "error" === a.checkoutSession && B(a.result) && (u("INTERNAL-LOG: creation of checkout session failed: " + JSON.stringify(a.result, null, 2), "log"), h())
                }
            };
        if (!C(b)) throw new Error("No Configuration Given");
        var y = b._dontWaitForDocumentReady ? function(a) {
                a()
            } : S,
            A = {};
        return y(function() {
            if (!c()) return u("PP+ Library Config Validation Error", "log"), void(this.onError && this.onError(new Error("PP+ Library Config Validation Error")));
            var a = {};
            if (E(v.thirdPartyPaymentMethods))
                for (var b = 0; b < v.thirdPartyPaymentMethods.length; b++) a[v.thirdPartyPaymentMethods[b].methodName] = v.thirdPartyPaymentMethods[b];
            I({
                mode: v.mode,
                useraction: v.useraction,
                language: v.language,
                country: v.country,
                disallowRememberedCards: v.disallowRememberedCards,
                rememberedCards: v.rememberedCards,
                payerEmail: v.payerEmail,
                payerPhone: v.payerPhone,
                payerFirstName: v.payerFirstName,
                payerLastName: v.payerLastName,
                payerTaxId: v.payerTaxId,
                payerTaxIdType: v.payerTaxIdType,
                ecToken: p,
                thirdPartyMethods: a
            }), A.token = p, "outside" === v.buttonLocation && v.disableContinue(), g(), j(), A.setIframeHeight = function(a) {
                isNaN(parseInt(a)) ? k("iframeHeightResizing", {
                    error: "invalid height"
                }) : (a = a < 300 ? 300 : a, a = a > 1e3 ? 1e3 : a, r.height(a + "px"), s.height(a + "px"), k("iframeHeightResizing", {
                    height: a
                }))
            }
        }), S.map({
            approvalUrl: b.approvalUrl,
            placeholder: b.placeholder,
            doContinue: m,
            doCheckout: O,
            deselectPaymentMethod: n,
            getPaymentMethod: L,
            setPaymentMethod: K,
            getThirdPartyPaymentMethods: M,
            getStyles: e
        }, function(a, b) {
            A[b] = a
        }), A
    }
    var R = "paypalplus_session",
        S = b.noConflict(!0),
        T = {
            live: {
                psp: "https://www.paypal.com/inlinepaymentwall",
                error: "https://www.paypalobjects.com/webstatic/ppplus/public/pages"
            },
            sandbox: {
                psp: "https://www.sandbox.paypal.com/inlinepaymentwall",
                error: "https://www.paypalobjects.com/webstatic/ppplus/public/pages"
            }
        };
    if ("object" == typeof module) var c = require("legalize");
    var U = [/^#([a-f0-9A-F]{3}){1,2}$/, /^rgb\(([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]) *, *([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]) *, *([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\)$/, /^[a-zA-Z]+$/],
        V = ["none", "underline"],
        W = {
            color: U,
            "text-decoration": V
        },
        X = /^(([1-9][0-9]*)(px))|(([0-9]+(\.[0-9]+)?)(em))$/,
        Y = {
            em: {
                min: .75,
                max: 1
            },
            px: {
                min: 12,
                max: 16
            }
        },
        Z = ["Arial", "Helvetica", "Times New Roman", "Times", "Courier New", "Courier", "Sans Serif"],
        $ = "Arial",
        _ = {
            "font-family": c.string().match(/^[-a-zA-Z ,0-9"']+$/).check(l(Z, $)).sanitize(m(Z, $)),
            "font-size": c.string().match(X).check(g(Y, X)).sanitize(h(Y, X)),
            "font-style": ["normal", "italic"],
            color: U
        },
        aa = {
            psp: _,
            link: W,
            visited: W,
            hover: W,
            active: W
        };
    if ("object" == typeof module && (module.exports = aa), "object" == typeof module) var c = require("legalize");
    var ba = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"],
        ca = "US",
        da = c.string().sanitizeBefore(o).satisfy(n).optional()["default"](ca);
    if ("object" == typeof module && (module.exports = da), "object" == typeof module) var c = require("legalize");
    var ea = "en_US",
        fa = {};
    fa.EN_us = "en_US", fa.US_en = "en_US", fa.EN = "en_US", fa.en = "en_US", fa.DE_de = "de_DE", fa.DE = "de_DE", fa.de = "de_DE";
    var ga = c.any().satisfy(p).optional().alias(fa)["default"](ea);
    "object" == typeof module && (module.exports = ga);
    var ha = c.object().keys({
        placeholder: c.string().element().required(),
        approvalUrl: c.string().url().required().sanitizeBefore(function(a) {
            return "string" === c.typeOf(a) && (a.indexOf("token=null") >= 0 || a.indexOf("token=false") >= 0) ? null : a
        }).satisfy(function(a) {
            var b = P(a);
            return !(!b || b.length < 4)
        }),
        mode: c.any().valid("testing", "live", "sandbox")["default"]("live"),
        buttonLocation: c.any().valid("inside", "outside")["default"]("inside"),
        preselection: c.any().valid("paypal", "none")["default"]("paypal"),
        language: ga,
        country: da,
        disallowRememberedCards: c["boolean"]()["default"](!1),
        rememberedCards: c.string().maxLength(1024)["default"](""),
        payerEmail: c.string().sanitizeBefore(function(a) {
            return a.trim()
        }).match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
        payerPhone: c.string()["default"](""),
        payerFirstName: c.string().sanitizeBefore(function(a) {
            return a.trim()
        }).minLength(1).required(),
        payerLastName: c.string().sanitizeBefore(function(a) {
            return a.trim()
        }).minLength(1).required(),
        payerTaxId: c.string().required().satisfy(function(a) {
            return "" === a || (s(a) || t(a))
        }),
        payerTaxIdType: c.string()["default"](""),
        iframeHeight: c.string()["default"](""),
        useraction: c.any().valid("continue", "commit")["default"]("continue"),
        onContinue: c.func()["default"](function() {
            O()
        }),
        onError: c.func()["default"](function() {}),
        onLoad: c.func()["default"](S.noop),
        enableContinue: c.alternatives(c.string().element().sanitize(function(a) {
            return function() {
                q(a).disabled = !1
            }
        }), c.func())["default"](S.noop),
        disableContinue: c.alternatives(c.string().element().sanitize(function(a) {
            return function() {
                q(a).disabled = !0
            }
        }), c.func())["default"](S.noop),
        onThirdPartyPaymentMethodSelected: c.func()["default"](S.noop),
        onThirdPartyPaymentMethodDeselected: c.func()["default"](S.noop),
        surcharging: c["boolean"]()["default"](!1),
        thirdPartyPaymentMethods: c.array().maxLength(5).includes({
            redirectUrl: c.string().url().required(),
            methodName: c.string().sanitizeBefore(r(25)).required(),
            imageUrl: c.string().url().match(/^https/)["default"](""),
            description: c.string().sanitizeBefore(r(120))["default"]("")
        })["default"]([]).sanitizeBefore(function(a) {
            return "array" === c.typeOf(a) ? a.slice(0, 5) : a
        }),
        styles: aa,
        hideAmount: c["boolean"]()["default"](!1),
        miniBrowser: c["boolean"]()["default"](!1),
        onMiniBrowserClose: c.func()["default"](S.noop),
        merchantInstallmentSelection: c.number().integer()["default"](0),
        hideMxDebitCards: c["boolean"]()["default"](!1),
        merchantInstallmentSelectionOptional: c["boolean"]()["default"](!1)
    }).pattern(/^_/);
    return Q._preFlightChecks = F, F(), S.cookie.json = !0, Q.getPaymentMethod = L, Q.setPaymentMethod = K, Q.doCheckout = O, Q
}(window, jQuery, Legalize);