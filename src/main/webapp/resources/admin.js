function _possibleConstructorReturn(t, e) {
	if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return !e || "object" != typeof e && "function" != typeof e ? t : e
}
function _inherits(t, e) {
	if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
	t.prototype = Object.create(e && e.prototype, {
		constructor: {
			value: t,
			enumerable: !1,
			writable: !0,
			configurable: !0
		}
	}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function _classCallCheck(t, e) {
	if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function randomNumber(t, e) {
	return Math.random() * (e - t) + t
}
function getRandomBarNoTime(t) {
	var e = randomNumber(.95 * t, 1.05 * t),
		i = randomNumber(.95 * e, 1.05 * e),
		n = randomNumber(Math.max(e, i), 1.1 * Math.max(e, i)),
		s = randomNumber(.9 * Math.min(e, i), Math.min(e, i));
	return {
		o: e,
		h: n,
		l: s,
		c: i
	}
}
function randomBar(t, e) {
	var i = getRandomBarNoTime(e);
	return i.t = t.valueOf(), i
}
function getRandomData(t, e) {
	for (var i = "MMMM DD YYYY", t = moment(t, i), n = [randomBar(t, 30)]; n.length < e;) t = t.clone().add(1, "d"), t.isoWeekday() <= 5 && n.push(randomBar(t, n[n.length - 1].c));
	return n
}
function rgbToRgba(t, e) {
	return t.replace(")", ", " + e + ")").replace("rgb", "rgba")
}
function componentToHex(t) {
	var e = t.toString(16);
	return 1 == e.length ? "0" + e : e
}
function rgbToHex(t) {
	var e = /(.*?)rgb\((\d+),(\d+),(\d+)\)/.exec(t),
		i = parseInt(e[2]),
		n = parseInt(e[3]),
		s = parseInt(e[4]);
	return "#" + componentToHex(i) + componentToHex(n) + componentToHex(s)
}
var _get = function t(e, i, n) {
	null === e && (e = Function.prototype);
	var s = Object.getOwnPropertyDescriptor(e, i);
	if (void 0 === s) {
		var o = Object.getPrototypeOf(e);
		return null === o ? void 0 : t(o, i, n)
	}
	if ("value" in s) return s.value;
	var a = s.get;
	if (void 0 !== a) return a.call(n)
},
	_createClass = function() {
		function t(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}
		return function(e, i, n) {
			return i && t(e.prototype, i), n && t(e, n), e
		}
	}(); /*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
!
function(t) {
	window.cash = t()
}(function() {
	function t(t, e) {
		e = e || x;
		var i = H.test(t) ? e.getElementsByClassName(t.slice(1)) : W.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
		return i
	}
	function e(t) {
		if (!j) {
			j = x.implementation.createHTMLDocument(null);
			var e = j.createElement("base");
			e.href = x.location.href, j.head.appendChild(e)
		}
		return j.body.innerHTML = t, j.body.childNodes
	}
	function i(t) {
		"loading" !== x.readyState ? t() : x.addEventListener("DOMContentLoaded", t)
	}
	function n(n, s) {
		if (!n) return this;
		if (n.cash && n !== O) return n;
		var o = n,
			a = 0,
			r;
		if (A(n)) o = R.test(n) ? x.getElementById(n.slice(1)) : P.test(n) ? e(n) : t(n, s);
		else if (I(n)) return i(n), this;
		if (!o) return this;
		if (o.nodeType || o === O) this[0] = o, this.length = 1;
		else
		for (r = this.length = o.length; r > a; a++) this[a] = o[a];
		return this
	}
	function s(t, e) {
		return new n(t, e)
	}
	function o(t, e) {
		for (var i = t.length, n = 0; i > n && e.call(t[n], t[n], n, t) !== !1; n++);
	}
	function a(t, e) {
		var i = t && (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector);
		return !!i && i.call(t, e)
	}
	function r(t) {
		return A(t) ? a : t.cash ?
		function(e) {
			return t.is(e)
		} : function(t, e) {
			return t === e
		}
	}
	function l(t) {
		return s(L.call(t).filter(function(t, e, i) {
			return i.indexOf(t) === e
		}))
	}
	function h(t) {
		return t[N] = t[N] || {}
	}
	function d(t, e, i) {
		return h(t)[e] = i
	}
	function u(t, e) {
		var i = h(t);
		return void 0 === i[e] && (i[e] = t.dataset ? t.dataset[e] : s(t).attr("data-" + e)), i[e]
	}
	function c(t, e) {
		var i = h(t);
		i ? delete i[e] : t.dataset ? delete t.dataset[e] : s(t).removeAttr("data-" + name)
	}
	function p(t) {
		return A(t) && t.match(q)
	}
	function v(t, e) {
		return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
	}
	function f(t, e, i) {
		t.classList ? t.classList.add(e) : i.indexOf(" " + e + " ") && (t.className += " " + e)
	}
	function m(t, e) {
		t.classList ? t.classList.remove(e) : t.className = t.className.replace(e, "")
	}
	function g(t, e) {
		return parseInt(O.getComputedStyle(t[0], null)[e], 10) || 0
	}
	function y(t, e, i) {
		var n = u(t, "_cashEvents") || d(t, "_cashEvents", {});
		
		n[e] = n[e] || [], n[e].push(i), t.addEventListener(e, i)
	}
	function _(t, e, i) {
		var n = u(t, "_cashEvents"),
			s = n && n[e],
			a;
		s && (i ? (t.removeEventListener(e, i), a = s.indexOf(i), a >= 0 && s.splice(a, 1)) : (o(s, function(i) {
			t.removeEventListener(e, i)
		}), s = []))
	}
	function b(t, e) {
		return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e).replace(/%20/g, "+")
	}
	function k(t) {
		var e = [];
		return o(t.options, function(t) {
			t.selected && e.push(t.value)
		}), e.length ? e : null
	}
	function C(t) {
		var e = t.selectedIndex;
		return e >= 0 ? t.options[e].value : null
	}
	function w(t) {
		var e = t.type;
		if (!e) return null;
		switch (e.toLowerCase()) {
			case "select-one":
				return C(t);
			case "select-multiple":
				return k(t);
			case "radio":
				return t.checked ? t.value : null;
			case "checkbox":
				return t.checked ? t.value : null;
			default:
				return t.value ? t.value : null
		}
	}
	function E(t, e, i) {
		if (i) {
			var n = t.childNodes[0];
			t.insertBefore(e, n)
		} else t.appendChild(e)
	}
	function M(t, e, i) {
		var n = A(e);
		return !n && e.length ? void o(e, function(e) {
			return M(t, e, i)
		}) : void o(t, n ?
		function(t) {
			return t.insertAdjacentHTML(i ? "afterbegin" : "beforeend", e)
		} : function(t, n) {
			return E(t, 0 === n ? e : e.cloneNode(!0), i)
		})
	}
	var x = document,
		O = window,
		T = Array.prototype,
		L = T.slice,
		B = T.filter,
		D = T.push,
		S = function() {},
		I = function(t) {
			return typeof t == typeof S && t.call
		},
		A = function(t) {
			return "string" == typeof t
		},
		R = /^#[\w-]*$/,
		H = /^\.[\w-]*$/,
		P = /<.+>/,
		W = /^\w+$/,
		j, F = s.fn = s.prototype = n.prototype = {
			cash: !0,
			length: 0,
			push: D,
			splice: T.splice,
			map: T.map,
			init: n
		};
	
	Object.defineProperty(F, "constructor", {
		value: s
	}), s.parseHTML = e, s.noop = S, s.isFunction = I, s.isString = A, s.extend = F.extend = function(t) {
		t = t || {};
		
		var e = L.call(arguments),
			i = e.length,
			n = 1;
		for (1 === e.length && (t = this, n = 0); i > n; n++) if (e[n]) for (var s in e[n]) e[n].hasOwnProperty(s) && (t[s] = e[n][s]);
		return t
	}, s.extend({
		merge: function(t, e) {
			for (var i = +e.length, n = t.length, s = 0; i > s; n++, s++) t[n] = e[s];
			return t.length = n, t
		},
		
		each: o,
		matches: a,
		unique: l,
		isArray: Array.isArray,
		isNumeric: function(t) {
			return !isNaN(parseFloat(t)) && isFinite(t)
		}
	});
	
	var N = s.uid = "_cash" + Date.now();
	
	F.extend({
		data: function(t, e) {
			if (A(t)) return void 0 === e ? u(this[0], t) : this.each(function(i) {
				return d(i, t, e)
			});
			
			for (var i in t) this.data(i, t[i]);
			return this
		},
		
		removeData: function(t) {
			return this.each(function(e) {
				return c(e, t)
			})
		}
	});
	
	var q = /\S+/g;
	F.extend({
		addClass: function(t) {
			var e = p(t);
			return e ? this.each(function(t) {
				var i = " " + t.className + " ";
				o(e, function(e) {
					f(t, e, i)
				})
			}) : this
		},
		
		attr: function(t, e) {
			if (t) {
				if (A(t)) return void 0 === e ? this[0] ? this[0].getAttribute ? this[0].getAttribute(t) : this[0][t] : void 0 : this.each(function(i) {
					i.setAttribute ? i.setAttribute(t, e) : i[t] = e
				});
				
				for (var i in t) this.attr(i, t[i]);
				return this
			}
		},
		
		hasClass: function(t) {
			var e = !1,
				i = p(t);
			return i && i.length && this.each(function(t) {
				return e = v(t, i[0]), !e
			}), e
		},
		
		prop: function(t, e) {
			if (A(t)) return void 0 === e ? this[0][t] : this.each(function(i) {
				i[t] = e
			});
			
			for (var i in t) this.prop(i, t[i]);
			return this
		},
		
		removeAttr: function(t) {
			return this.each(function(e) {
				e.removeAttribute ? e.removeAttribute(t) : delete e[t]
			})
		},
		
		removeClass: function(t) {
			if (!arguments.length) return this.attr("class", "");
			var e = p(t);
			return e ? this.each(function(t) {
				o(e, function(e) {
					m(t, e)
				})
			}) : this
		},
		
		removeProp: function(t) {
			return this.each(function(e) {
				delete e[t]
			})
		},
		
		toggleClass: function(t, e) {
			if (void 0 !== e) return this[e ? "addClass" : "removeClass"](t);
			var i = p(t);
			return i ? this.each(function(t) {
				var e = " " + t.className + " ";
				o(i, function(i) {
					v(t, i) ? m(t, i) : f(t, i, e)
				})
			}) : this
		}
	}), F.extend({
		add: function(t, e) {
			return l(s.merge(this, s(t, e)))
		},
		
		each: function(t) {
			return o(this, t), this
		},
		
		eq: function(t) {
			return s(this.get(t))
		},
		
		filter: function(t) {
			if (!t) return this;
			var e = I(t) ? t : r(t);
			return s(B.call(this, function(i) {
				return e(i, t)
			}))
		},
		
		first: function() {
			return this.eq(0)
		},
		
		get: function(t) {
			return void 0 === t ? L.call(this) : 0 > t ? this[t + this.length] : this[t]
		},
		
		index: function(t) {
			var e = t ? s(t)[0] : this[0],
				i = t ? this : s(e).parent().children();
			
			return L.call(i).indexOf(e)
		},
		
		last: function() {
			return this.eq(-1)
		}
	});
	
	var z = function() {
		var t = /(?:^\w|[A-Z]|\b\w)/g,
			e = /[\s-_]+/g;
		return function(i) {
			return i.replace(t, function(t, e) {
				return t[0 === e ? "toLowerCase" : "toUpperCase"]()
			}).replace(e, "")
		}
	}(),
		V = function() {
			var t = {},
				e = document,
				i = e.createElement("div"),
				n = i.style;
			return function(e) {
				if (e = z(e), t[e]) return t[e];
				var i = e.charAt(0).toUpperCase() + e.slice(1),
					s = ["webkit", "moz", "ms", "o"],
					a = (e + " " + s.join(i + " ") + i).split(" ");
				return o(a, function(i) {
					return i in n ? (t[i] = e = t[e] = i, !1) : void 0
				}), t[e]
			}
		}();
	
	s.prefixedProp = V, s.camelCase = z, F.extend({
		css: function(t, e) {
			if (A(t)) return t = V(t), arguments.length > 1 ? this.each(function(i) {
				return i.style[t] = e
			}) : O.getComputedStyle(this[0])[t];
			for (var i in t) this.css(i, t[i]);
			return this
		}
	}), o(["Width", "Height"], function(t) {
		var e = t.toLowerCase();
		
		F[e] = function() {
			return this[0].getBoundingClientRect()[e]
		}, F["inner" + t] = function() {
			return this[0]["client" + t]
		}, F["outer" + t] = function(e) {
			return this[0]["offset" + t] + (e ? g(this, "margin" + ("Width" === t ? "Left" : "Top")) + g(this, "margin" + ("Width" === t ? "Right" : "Bottom")) : 0)
		}
	}), F.extend({
		off: function(t, e) {
			return this.each(function(i) {
				return _(i, t, e)
			})
		},
		
		on: function(t, e, n, s) {
			var o;
			if (!A(t)) {
				for (var r in t) this.on(r, e, t[r]);
				return this
			}
			return I(e) && (n = e, e = null), "ready" === t ? (i(n), this) : (e && (o = n, n = function(t) {
				for (var i = t.target; !a(i, e);) {
					if (i === this || null === i) return i = !1;
					i = i.parentNode
				}
				i && o.call(i, t)
			}), this.each(function(e) {
				var i = n;
				s && (i = function() {
					n.apply(this, arguments), _(e, t, i)
				}), y(e, t, i)
			}))
		},
		
		one: function(t, e, i) {
			return this.on(t, e, i, !0)
		},
		
		ready: i,
		trigger: function(t, e) {
			if (document.createEvent) {
				var i = document.createEvent("HTMLEvents");
				return i.initEvent(t, !0, !1), i = this.extend(i, e), this.each(function(t) {
					return t.dispatchEvent(i)
				})
			}
		}
	}), F.extend({
		serialize: function() {
			var t = "";
			return o(this[0].elements || this, function(e) {
				if (!e.disabled && "FIELDSET" !== e.tagName) {
					var i = e.name;
					switch (e.type.toLowerCase()) {
						case "file":
						case "reset":
						case "submit":
						case "button":
							break;
						case "select-multiple":
							var n = w(e);
							null !== n && o(n, function(e) {
								t += b(i, e)
							});
							
							break;
						default:
							var s = w(e);
							null !== s && (t += b(i, s))
					}
				}
			}), t.substr(1)
		},
		
		val: function(t) {
			return void 0 === t ? w(this[0]) : this.each(function(e) {
				return e.value = t
			})
		}
	}), F.extend({
		after: function(t) {
			return s(t).insertAfter(this), this
		},
		
		append: function(t) {
			return M(this, t), this
		},
		
		appendTo: function(t) {
			return M(s(t), this), this
		},
		
		before: function(t) {
			return s(t).insertBefore(this), this
		},
		
		clone: function() {
			return s(this.map(function(t) {
				return t.cloneNode(!0)
			}))
		},
		
		empty: function() {
			return this.html(""), this
		},
		
		html: function(t) {
			if (void 0 === t) return this[0].innerHTML;
			var e = t.nodeType ? t[0].outerHTML : t;
			return this.each(function(t) {
				return t.innerHTML = e
			})
		},
		
		insertAfter: function(t) {
			var e = this;
			return s(t).each(function(t, i) {
				var n = t.parentNode,
					s = t.nextSibling;
				e.each(function(t) {
					n.insertBefore(0 === i ? t : t.cloneNode(!0), s)
				})
			}), this
		},
		
		insertBefore: function(t) {
			var e = this;
			return s(t).each(function(t, i) {
				var n = t.parentNode;
				e.each(function(e) {
					n.insertBefore(0 === i ? e : e.cloneNode(!0), t)
				})
			}), this
		},
		
		prepend: function(t) {
			return M(this, t, !0), this
		},
		
		prependTo: function(t) {
			return M(s(t), this, !0), this
		},
		
		remove: function() {
			return this.each(function(t) {
				return t.parentNode ? t.parentNode.removeChild(t) : void 0
			})
		},
		
		text: function(t) {
			return void 0 === t ? this[0].textContent : this.each(function(e) {
				return e.textContent = t
			})
		}
	});
	
	var Y = x.documentElement;
	return F.extend({
		position: function() {
			var t = this[0];
			return {
				left: t.offsetLeft,
				top: t.offsetTop
			}
		},
		
		offset: function() {
			var t = this[0].getBoundingClientRect();
			
			return {
				top: t.top + O.pageYOffset - Y.clientTop,
				left: t.left + O.pageXOffset - Y.clientLeft
			}
		},
		
		offsetParent: function() {
			return s(this[0].offsetParent)
		}
	}), F.extend({
		children: function(t) {
			var e = [];
			return this.each(function(t) {
				D.apply(e, t.children)
			}), e = l(e), t ? e.filter(function(e) {
				return a(e, t)
			}) : e
		},
		
		closest: function(t) {
			return !t || this.length < 1 ? s() : this.is(t) ? this.filter(t) : this.parent().closest(t)
		},
		
		is: function(t) {
			if (!t) return !1;
			var e = !1,
				i = r(t);
			return this.each(function(n) {
				return e = i(n, t), !e
			}), e
		},
		
		find: function(e) {
			if (!e || e.nodeType) return s(e && this.has(e).length ? e : null);
			var i = [];
			return this.each(function(n) {
				D.apply(i, t(e, n))
			}), l(i)
		},
		
		has: function(e) {
			var i = A(e) ?
			function(i) {
				return 0 !== t(e, i).length
			} : function(t) {
				return t.contains(e)
			};
			
			return this.filter(i)
		},
		
		next: function() {
			return s(this[0].nextElementSibling)
		},
		
		not: function(t) {
			if (!t) return this;
			var e = r(t);
			return this.filter(function(i) {
				return !e(i, t)
			})
		},
		
		parent: function() {
			var t = [];
			return this.each(function(e) {
				e && e.parentNode && t.push(e.parentNode)
			}), l(t)
		},
		
		parents: function(t) {
			var e, i = [];
			return this.each(function(n) {
				for (e = n; e && e.parentNode && e !== x.body.parentNode;) e = e.parentNode, (!t || t && a(e, t)) && i.push(e)
			}), l(i)
		},
		
		prev: function() {
			return s(this[0].previousElementSibling)
		},
		
		siblings: function(t) {
			var e = this.parent().children(t),
				i = this[0];
			return e.filter(function(t) {
				return t !== i
			})
		}
	}), s
});

var Component = function() {
	function t(e, i, n) {
		_classCallCheck(this, t), i instanceof Element || console.error(Error(i + " is not an HTML Element"));
		var s = e.getInstance(i);
		s && s.destroy(), this.el = i, this.$el = cash(i)
	}
	return _createClass(t, null, [{
		key: "init",
		value: function e(t, i, n) {
			var s = null;
			if (i instanceof Element) s = new t(i, n);
			else if (i && (i.jquery || i.cash || i instanceof NodeList)) {
				for (var o = [], a = 0; a < i.length; a++) o.push(new t(i[a], n));
				s = o
			}
			return s
		}
	}]), t
}();
!
function(t) {
	t.Package ? M = {} : t.M = {}, M.jQueryLoaded = !! t.jQuery
}(window), "function" == typeof define && define.amd ? define("M", [], function() {
	return M
}) : "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = M), exports["default"] = M), M.keys = {
	TAB: 9,
	ENTER: 13,
	ESC: 27,
	ARROW_UP: 38,
	ARROW_DOWN: 40
}, M.tabPressed = !1, M.keyDown = !1;
var docHandleKeydown = function(t) {
	M.keyDown = !0, (t.which === M.keys.TAB || t.which === M.keys.ARROW_DOWN || t.which === M.keys.ARROW_UP) && (M.tabPressed = !0)
},
	docHandleKeyup = function(t) {
		M.keyDown = !1, (t.which === M.keys.TAB || t.which === M.keys.ARROW_DOWN || t.which === M.keys.ARROW_UP) && (M.tabPressed = !1)
	},
	docHandleFocus = function(t) {
		M.keyDown && document.body.classList.add("keyboard-focused")
	},
	docHandleBlur = function(t) {
		document.body.classList.remove("keyboard-focused")
	};

document.addEventListener("keydown", docHandleKeydown, !0), document.addEventListener("keyup", docHandleKeyup, !0), document.addEventListener("focus", docHandleFocus, !0), document.addEventListener("blur", docHandleBlur, !0), M.initializeJqueryWrapper = function(t, e, i) {
	jQuery.fn[e] = function(n) {
		if (t.prototype[n]) {
			var s = Array.prototype.slice.call(arguments, 1);
			if ("get" === n.slice(0, 3)) {
				var o = this.first()[0][i];
				return o[n].apply(o, s)
			}
			return this.each(function() {
				var t = this[i];
				t[n].apply(t, s)
			})
		}
		return "object" != typeof n && n ? void jQuery.error("Method " + n + " does not exist on jQuery." + e) : (t.init(this, arguments[0]), this)
	}
}, M.AutoInit = function(t) {
	var e = t ? t : document.body,
		i = {
			Autocomplete: e.querySelectorAll(".autocomplete:not(.no-autoinit)"),
			Carousel: e.querySelectorAll(".carousel:not(.no-autoinit)"),
			Chips: e.querySelectorAll(".chips:not(.no-autoinit)"),
			Collapsible: e.querySelectorAll(".collapsible:not(.no-autoinit)"),
			Datepicker: e.querySelectorAll(".datepicker:not(.no-autoinit)"),
			Dropdown: e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),
			Materialbox: e.querySelectorAll(".materialboxed:not(.no-autoinit)"),
			Modal: e.querySelectorAll(".modal:not(.no-autoinit)"),
			Parallax: e.querySelectorAll(".parallax:not(.no-autoinit)"),
			Pushpin: e.querySelectorAll(".pushpin:not(.no-autoinit)"),
			ScrollSpy: e.querySelectorAll(".scrollspy:not(.no-autoinit)"),
			FormSelect: e.querySelectorAll("select:not(.no-autoinit)"),
			Sidenav: e.querySelectorAll(".sidenav:not(.no-autoinit)"),
			Tabs: e.querySelectorAll(".tabs:not(.no-autoinit)"),
			TapTarget: e.querySelectorAll(".tap-target:not(.no-autoinit)"),
			Timepicker: e.querySelectorAll(".timepicker:not(.no-autoinit)"),
			Tooltip: e.querySelectorAll(".tooltipped:not(.no-autoinit)"),
			FloatingActionButton: e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")
		};
	
	for (var n in i) {
		var s = M[n];
		s.init(i[n])
	}
}, M.objectSelectorString = function(t) {
	var e = t.prop("tagName") || "",
		i = t.attr("id") || "",
		n = t.attr("class") || "";
	return (e + i + n).replace(/\s/g, "")
}, M.guid = function() {
	function t() {
		return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
	}
	return function() {
		return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
	}
}(), M.escapeHash = function(t) {
	return t.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1")
}, M.elementOrParentIsFixed = function(t) {
	var e = $(t),
		i = e.add(e.parents()),
		n = !1;
	return i.each(function() {
		return "fixed" === $(this).css("position") ? (n = !0, !1) : void 0
	}), n
}, M.checkWithinContainer = function(t, e, i) {
	var n = {
		top: !1,
		right: !1,
		bottom: !1,
		left: !1
	},
		s = t.getBoundingClientRect(),
		o = t === document.body ? Math.max(s.bottom, window.innerHeight) : s.bottom,
		a = t.scrollLeft,
		r = t.scrollTop,
		l = e.left - a,
		h = e.top - r;
	return (l < s.left + i || i > l) && (n.left = !0), (l + e.width > s.right - i || l + e.width > window.innerWidth - i) && (n.right = !0), (h < s.top + i || i > h) && (n.top = !0), (h + e.height > o - i || h + e.height > window.innerHeight - i) && (n.bottom = !0), n
}, M.checkPossibleAlignments = function(t, e, i, n) {
	var s = {
		top: !0,
		right: !0,
		bottom: !0,
		left: !0,
		spaceOnTop: null,
		spaceOnRight: null,
		spaceOnBottom: null,
		spaceOnLeft: null
	},
		o = "visible" === getComputedStyle(e).overflow,
		a = e.getBoundingClientRect(),
		r = Math.min(a.height, window.innerHeight),
		l = Math.min(a.width, window.innerWidth),
		h = t.getBoundingClientRect(),
		d = e.scrollLeft,
		u = e.scrollTop,
		c = i.left - d,
		p = i.top - u,
		v = i.top + h.height - u;
	return s.spaceOnRight = o ? window.innerWidth - (h.left + i.width) : l - (c + i.width), s.spaceOnRight < 0 && (s.left = !1), s.spaceOnLeft = o ? h.right - i.width : c - i.width + h.width, s.spaceOnLeft < 0 && (s.right = !1), s.spaceOnBottom = o ? window.innerHeight - (h.top + i.height + n) : r - (p + i.height + n), s.spaceOnBottom < 0 && (s.top = !1), s.spaceOnTop = o ? h.bottom - (i.height + n) : v - (i.height - n), s.spaceOnTop < 0 && (s.bottom = !1), s
}, M.getOverflowParent = function(t) {
	return null == t ? null : t === document.body || "visible" !== getComputedStyle(t).overflow ? t : M.getOverflowParent(t.parentElement)
}, M.getIdFromTrigger = function(t) {
	var e = t.getAttribute("data-target");
	return e || (e = t.getAttribute("href"), e = e ? e.slice(1) : ""), e
}, M.getDocumentScrollTop = function() {
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}, M.getDocumentScrollLeft = function() {
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
};
/**
  * Get time in ms
  * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
  * @type {function}
  * @return {number}
  */
var getTime = Date.now ||
function() {
	return (new Date).getTime()
};
/**
  * Returns a function, that, when invoked, will only be triggered at most once
  * during a given window of time. Normally, the throttled function will run
  * as much as it can, without ever going more than once per `wait` duration;
  * but if you'd like to disable the execution on the leading edge, pass
  * `{leading: false}`. To disable execution on the trailing edge, ditto.
  * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
  * @param {function} func
  * @param {number} wait
  * @param {Object=} options
  * @returns {Function}
  */
M.throttle = function(t, e, i) {
	var n = void 0,
		s = void 0,
		o = void 0,
		a = null,
		r = 0;
	i || (i = {});
	
	var l = function() {
		r = i.leading === !1 ? 0 : getTime(), a = null, o = t.apply(n, s), n = s = null
	};
	
	return function() {
		var h = getTime();
		
		r || i.leading !== !1 || (r = h);
		var d = e - (h - r);
		return n = this, s = arguments, 0 >= d ? (clearTimeout(a), a = null, r = h, o = t.apply(n, s), n = s = null) : a || i.trailing === !1 || (a = setTimeout(l, d)), o
	}
};

var $jscomp = {
	scope: {}
};

$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, i) {
	if (i.get || i.set) throw new TypeError("ES3 does not support getters and setters.");
	t != Array.prototype && t != Object.prototype && (t[e] = i.value)
}, $jscomp.getGlobal = function(t) {
	return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() {
	$jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function(t) {
	return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++
}, $jscomp.initSymbolIterator = function() {
	$jscomp.initSymbol();
	
	var t = $jscomp.global.Symbol.iterator;
	t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
		configurable: !0,
		writable: !0,
		value: function() {
			return $jscomp.arrayIterator(this)
		}
	}), $jscomp.initSymbolIterator = function() {}
}, $jscomp.arrayIterator = function(t) {
	var e = 0;
	return $jscomp.iteratorPrototype(function() {
		return e < t.length ? {
			done: !1,
			value: t[e++]
		} : {
			done: !0
		}
	})
}, $jscomp.iteratorPrototype = function(t) {
	return $jscomp.initSymbolIterator(), t = {
		next: t
	}, t[$jscomp.global.Symbol.iterator] = function() {
		return this
	}, t
}, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function(t, e) {
	$jscomp.initSymbolIterator(), t instanceof String && (t += "");
	var i = 0,
		n = {
			next: function() {
				if (i < t.length) {
					var s = i++;
					return {
						value: e(s, t[s]),
						done: !1
					}
				}
				return n.next = function() {
					return {
						done: !0,
						value: void 0
					}
				}, n.next()
			}
		};
	
	return n[Symbol.iterator] = function() {
		return n
	}, n
}, $jscomp.polyfill = function(t, e, i, n) {
	if (e) {
		for (i = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
			var s = t[n];
			s in i || (i[s] = {}), i = i[s]
		}
		t = t[t.length - 1], n = i[t], e = e(n), e != n && null != e && $jscomp.defineProperty(i, t, {
			configurable: !0,
			writable: !0,
			value: e
		})
	}
}, $jscomp.polyfill("Array.prototype.keys", function(t) {
	return t ? t : function() {
		return $jscomp.iteratorFromArray(this, function(t) {
			return t
		})
	}
}, "es6-impl", "es3");
var $jscomp$this = this;
!
function(t) {
	M.anime = t()
}(function() {
	function t(t) {
		if (!P.col(t)) try {
			return document.querySelectorAll(t)
		} catch (e) {}
	}
	function e(t, e) {
		for (var i = t.length, n = 2 <= arguments.length ? arguments[1] : void 0, s = [], o = 0; i > o; o++) if (o in t) {
			var a = t[o];
			e.call(n, a, o, t) && s.push(a)
		}
		return s
	}
	function i(t) {
		return t.reduce(function(t, e) {
			return t.concat(P.arr(e) ? i(e) : e)
		}, [])
	}
	function n(e) {
		return P.arr(e) ? e : (P.str(e) && (e = t(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
	}
	function s(t, e) {
		return t.some(function(t) {
			return t === e
		})
	}
	function o(t) {
		var e = {},
			i;
		for (i in t) e[i] = t[i];
		return e
	}
	function a(t, e) {
		var i = o(t),
			n;
		for (n in t) i[n] = e.hasOwnProperty(n) ? e[n] : t[n];
		return i
	}
	function r(t, e) {
		var i = o(t),
			n;
		for (n in e) i[n] = P.und(t[n]) ? e[n] : t[n];
		return i
	}
	function l(t) {
		t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
			return e + e + i + i + n + n
		});
		
		var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
		t = parseInt(e[1], 16);
		var i = parseInt(e[2], 16),
			e = parseInt(e[3], 16);
		return "rgba(" + t + "," + i + "," + e + ",1)"
	}
	function h(t) {
		function e(t, e, i) {
			return 0 > i && (i += 1), i > 1 && --i, 1 / 6 > i ? t + 6 * (e - t) * i : .5 > i ? e : 2 / 3 > i ? t + (e - t) * (2 / 3 - i) * 6 : t
		}
		var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
		t = parseInt(i[1]) / 360;
		var n = parseInt(i[2]) / 100,
			s = parseInt(i[3]) / 100,
			i = i[4] || 1;
		if (0 == n) s = n = t = s;
		else {
			var o = .5 > s ? s * (1 + n) : s + n - s * n,
				a = 2 * s - o,
				s = e(a, o, t + 1 / 3),
				n = e(a, o, t);
			t = e(a, o, t - 1 / 3)
		}
		return "rgba(" + 255 * s + "," + 255 * n + "," + 255 * t + "," + i + ")"
	}
	function d(t) {
		return (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t)) ? t[2] : void 0
	}
	function u(t) {
		return -1 < t.indexOf("translate") || "perspective" === t ? "px" : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew") ? "deg" : void 0
	}
	function c(t, e) {
		return P.fnc(t) ? t(e.target, e.id, e.total) : t
	}
	function p(t, e) {
		return e in t.style ? getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0" : void 0
	}
	function v(t, e) {
		return P.dom(t) && s(R, e) ? "transform" : P.dom(t) && (t.getAttribute(e) || P.svg(t) && t[e]) ? "attribute" : P.dom(t) && "transform" !== e && p(t, e) ? "css" : null != t[e] ? "object" : void 0
	}
	function f(t, i) {
		var n = u(i),
			n = -1 < i.indexOf("scale") ? 1 : 0 + n;
		if (t = t.style.transform, !t) return n;
		for (var s = [], o = [], a = [], r = /(\w+)\((.+?)\)/g; s = r.exec(t);) o.push(s[1]), a.push(s[2]);
		return t = e(a, function(t, e) {
			return o[e] === i
		}), t.length ? t[0] : n
	}
	function m(t, e) {
		switch (v(t, e)) {
			case "transform":
				return f(t, e);
			case "css":
				return p(t, e);
			case "attribute":
				return t.getAttribute(e)
		}
		return t[e] || 0
	}
	function g(t, e) {
		var i = /^(\*=|\+=|-=)/.exec(t);
		if (!i) return t;
		var n = d(t) || 0;
		switch (e = parseFloat(e), t = parseFloat(t.replace(i[0], "")), i[0][0]) {
			case "+":
				return e + t + n;
			case "-":
				return e - t + n;
			case "*":
				return e * t + n
		}
	}
	function y(t, e) {
		return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
	}
	function _(t) {
		t = t.points;
		for (var e = 0, i, n = 0; n < t.numberOfItems; n++) {
			var s = t.getItem(n);
			n > 0 && (e += y(i, s)), i = s
		}
		return e
	}
	function b(t) {
		if (t.getTotalLength) return t.getTotalLength();
		
		switch (t.tagName.toLowerCase()) {
			case "circle":
				return 2 * Math.PI * t.getAttribute("r");
			case "rect":
				return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
			case "line":
				return y({
					x: t.getAttribute("x1"),
					y: t.getAttribute("y1")
				}, {
					x: t.getAttribute("x2"),
					y: t.getAttribute("y2")
				});
			case "polyline":
				return _(t);
			case "polygon":
				var e = t.points;
				return _(t) + y(e.getItem(e.numberOfItems - 1), e.getItem(0))
		}
	}
	function k(t, e) {
		function i(i) {
			return i = void 0 === i ? 0 : i, t.el.getPointAtLength(e + i >= 1 ? e + i : 0)
		}
		var n = i(),
			s = i(-1),
			o = i(1);
		switch (t.property) {
			case "x":
				return n.x;
			case "y":
				return n.y;
			case "angle":
				return 180 * Math.atan2(o.y - s.y, o.x - s.x) / Math.PI
		}
	}
	function C(t, e) {
		var i = /-?\d*\.?\d+/g,
			n;
		if (n = P.pth(t) ? t.totalLength : t, P.col(n)) if (P.rgb(n)) {
			var s = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
			n = s ? "rgba(" + s[1] + ",1)" : n
		} else n = P.hex(n) ? l(n) : P.hsl(n) ? h(n) : void 0;
		else s = (s = d(n)) ? n.substr(0, n.length - s.length) : n, n = e && !/\s/g.test(n) ? s + e : s;
		return n += "", {
			original: n,
			numbers: n.match(i) ? n.match(i).map(Number) : [0],
			strings: P.str(t) || e ? n.split(i) : []
		}
	}
	function w(t) {
		return t = t ? i(P.arr(t) ? t.map(n) : n(t)) : [], e(t, function(t, e, i) {
			return i.indexOf(t) === e
		})
	}
	function E(t) {
		var e = w(t);
		return e.map(function(t, i) {
			return {
				target: t,
				id: i,
				total: e.length
			}
		})
	}
	function M(t, e) {
		var i = o(e);
		if (P.arr(t)) {
			var s = t.length;
			2 !== s || P.obj(t[0]) ? P.fnc(e.duration) || (i.duration = e.duration / s) : t = {
				value: t
			}
		}
		return n(t).map(function(t, i) {
			return i = i ? 0 : e.delay, t = P.obj(t) && !P.pth(t) ? t : {
				value: t
			}, P.und(t.delay) && (t.delay = i), t
		}).map(function(t) {
			return r(t, i)
		})
	}
	function x(t, e) {
		var i = {},
			n;
		for (n in t) {
			var s = c(t[n], e);
			P.arr(s) && (s = s.map(function(t) {
				return c(t, e)
			}), 1 === s.length && (s = s[0])), i[n] = s
		}
		return i.duration = parseFloat(i.duration), i.delay = parseFloat(i.delay), i
	}
	function O(t) {
		return P.arr(t) ? W.apply(this, t) : j[t]
	}
	function T(t, e) {
		var i;
		return t.tweens.map(function(n) {
			n = x(n, e);
			var s = n.value,
				o = m(e.target, t.name),
				a = i ? i.to.original : o,
				a = P.arr(s) ? s[0] : a,
				r = g(P.arr(s) ? s[1] : s, a),
				o = d(r) || d(a) || d(o);
			return n.from = C(a, o), n.to = C(r, o), n.start = i ? i.end : t.offset, n.end = n.start + n.delay + n.duration, n.easing = O(n.easing), n.elasticity = (1e3 - Math.min(Math.max(n.elasticity, 1), 999)) / 1e3, n.isPath = P.pth(s), n.isColor = P.col(n.from.original), n.isColor && (n.round = 1), i = n
		})
	}
	function L(t, n) {
		return e(i(t.map(function(t) {
			return n.map(function(e) {
				var i = v(t.target, e.name);
				if (i) {
					var n = T(e, t);
					e = {
						type: i,
						property: e.name,
						animatable: t,
						tweens: n,
						duration: n[n.length - 1].end,
						delay: n[0].delay
					}
				} else e = void 0;
				return e
			})
		})), function(t) {
			return !P.und(t)
		})
	}
	function B(t, e, i, n) {
		var s = "delay" === t;
		return e.length ? (s ? Math.min : Math.max).apply(Math, e.map(function(e) {
			return e[t]
		})) : s ? n.delay : i.offset + n.delay + n.duration
	}
	function D(t) {
		var e = a(I, t),
			i = a(A, t),
			n = E(t.targets),
			s = [],
			o = r(e, i),
			l;
		for (l in t) o.hasOwnProperty(l) || "targets" === l || s.push({
			name: l,
			offset: o.offset,
			tweens: M(t[l], i)
		});
		
		return t = L(n, s), r(e, {
			children: [],
			animatables: n,
			animations: t,
			duration: B("duration", t, e, i),
			delay: B("delay", t, e, i)
		})
	}
	function S(t) {
		function i() {
			return window.Promise && new Promise(function(t) {
				return u = t
			})
		}
		function n(t) {
			return v.reversed ? v.duration - t : t
		}
		function s(t) {
			for (var i = 0, n = {}, s = v.animations, o = s.length; o > i;) {
				var a = s[i],
					r = a.animatable,
					l = a.tweens,
					h = l.length - 1,
					d = l[h];
				h && (d = e(l, function(e) {
					return t < e.end
				})[0] || d);
				for (var l = Math.min(Math.max(t - d.start - d.delay, 0), d.duration) / d.duration, u = isNaN(l) ? 1 : d.easing(l, d.elasticity), l = d.to.strings, c = d.round, h = [], f = void 0, f = d.to.numbers.length, m = 0; f > m; m++) {
					var g = void 0,
						g = d.to.numbers[m],
						y = d.from.numbers[m],
						g = d.isPath ? k(d.value, u * g) : y + u * (g - y);
					c && (d.isColor && m > 2 || (g = Math.round(g * c) / c)), h.push(g)
				}
				if (d = l.length) for (f = l[0], u = 0; d > u; u++) c = l[u + 1], m = h[u], isNaN(m) || (f = c ? f + (m + c) : f + (m + " "));
				else f = h[0];
				F[a.type](r.target, a.property, f, n, r.id), a.currentValue = f, i++
			}
			if (i = Object.keys(n).length) for (s = 0; i > s; s++) H || (H = p(document.body, "transform") ? "transform" : "-webkit-transform"), v.animatables[s].target.style[H] = n[s].join(" ");
			v.currentTime = t, v.progress = t / v.duration * 100
		}
		function o(t) {
			v[t] && v[t](v)
		}
		function a() {
			v.remaining && !0 !== v.remaining && v.remaining--
		}
		function r(t) {
			var e = v.duration,
				r = v.offset,
				p = r + v.delay,
				f = v.currentTime,
				m = v.reversed,
				g = n(t);
			if (v.children.length) {
				var y = v.children,
					_ = y.length;
				if (g >= v.currentTime) for (var b = 0; _ > b; b++) y[b].seek(g);
				else
				for (; _--;) y[_].seek(g)
			}(g >= p || !e) && (v.began || (v.began = !0, o("begin")), o("run")), g > r && e > g ? s(g) : (r >= g && 0 !== f && (s(0), m && a()), (g >= e && f !== e || !e) && (s(e), m || a())), o("update"), t >= e && (v.remaining ? (h = l, "alternate" === v.direction && (v.reversed = !v.reversed)) : (v.pause(), v.completed || (v.completed = !0, o("complete"), "Promise" in window && (u(), c = i()))), d = 0)
		}
		t = void 0 === t ? {} : t;
		var l, h, d = 0,
			u = null,
			c = i(),
			v = D(t);
		return v.reset = function() {
			var t = v.direction,
				e = v.loop;
			for (v.currentTime = 0, v.progress = 0, v.paused = !0, v.began = !1, v.completed = !1, v.reversed = "reverse" === t, v.remaining = "alternate" === t && 1 === e ? 2 : e, s(0), t = v.children.length; t--;) v.children[t].reset()
		}, v.tick = function(t) {
			l = t, h || (h = l), r((d + l - h) * S.speed)
		}, v.seek = function(t) {
			r(n(t))
		}, v.pause = function() {
			var t = N.indexOf(v);
			t > -1 && N.splice(t, 1), v.paused = !0
		}, v.play = function() {
			v.paused && (v.paused = !1, h = 0, d = n(v.currentTime), N.push(v), q || z())
		}, v.reverse = function() {
			v.reversed = !v.reversed, h = 0, d = n(v.currentTime)
		}, v.restart = function() {
			v.pause(), v.reset(), v.play()
		}, v.finished = c, v.reset(), v.autoplay && v.play(), v
	}
	var I = {
		update: void 0,
		begin: void 0,
		run: void 0,
		complete: void 0,
		loop: 1,
		direction: "normal",
		autoplay: !0,
		offset: 0
	},
		A = {
			duration: 1e3,
			delay: 0,
			easing: "easeOutElastic",
			elasticity: 500,
			round: 0
		},
		R = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
		H, P = {
			arr: function(t) {
				return Array.isArray(t)
			},
			
			obj: function(t) {
				return -1 < Object.prototype.toString.call(t).indexOf("Object")
			},
			
			pth: function(t) {
				return P.obj(t) && t.hasOwnProperty("totalLength")
			},
			
			svg: function(t) {
				return t instanceof SVGElement
			},
			
			dom: function(t) {
				return t.nodeType || P.svg(t)
			},
			
			str: function(t) {
				return "string" == typeof t
			},
			
			fnc: function(t) {
				return "function" == typeof t
			},
			
			und: function(t) {
				return "undefined" == typeof t
			},
			
			hex: function(t) {
				return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
			},
			
			rgb: function(t) {
				return /^rgb/.test(t)
			},
			
			hsl: function(t) {
				return /^hsl/.test(t)
			},
			
			col: function(t) {
				return P.hex(t) || P.rgb(t) || P.hsl(t)
			}
		},
		W = function() {
			function t(t, e, i) {
				return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t
			}
			return function(e, i, n, s) {
				if (e >= 0 && 1 >= e && n >= 0 && 1 >= n) {
					var o = new Float32Array(11);
					if (e !== i || n !== s) for (var a = 0; 11 > a; ++a) o[a] = t(.1 * a, e, n);
					return function(a) {
						if (e === i && n === s) return a;
						if (0 === a) return 0;
						if (1 === a) return 1;
						for (var r = 0, l = 1; 10 !== l && o[l] <= a; ++l) r += .1;
						--l;
						var l = r + (a - o[l]) / (o[l + 1] - o[l]) * .1,
							h = 3 * (1 - 3 * n + 3 * e) * l * l + 2 * (3 * n - 6 * e) * l + 3 * e;
						if (h >= .001) {
							for (r = 0; 4 > r && (h = 3 * (1 - 3 * n + 3 * e) * l * l + 2 * (3 * n - 6 * e) * l + 3 * e, 0 !== h); ++r) var d = t(l, e, n) - a,
								l = l - d / h;
							a = l
						} else if (0 === h) a = l;
						else {
							var l = r,
								r = r + .1,
								u = 0;
							do d = l + (r - l) / 2, h = t(d, e, n) - a, h > 0 ? r = d : l = d;
							while (1e-7 < Math.abs(h) && 10 > ++u);
							a = d
						}
						return t(a, i, s)
					}
				}
			}
		}(),
		j = function() {
			function t(t, e) {
				return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e)
			}
			var e = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
				i = {
					In: [
						[.55, .085, .68, .53],
						[.55, .055, .675, .19],
						[.895, .03, .685, .22],
						[.755, .05, .855, .06],
						[.47, 0, .745, .715],
						[.95, .05, .795, .035],
						[.6, .04, .98, .335],
						[.6, -.28, .735, .045], t],
					Out: [
						[.25, .46, .45, .94],
						[.215, .61, .355, 1],
						[.165, .84, .44, 1],
						[.23, 1, .32, 1],
						[.39, .575, .565, 1],
						[.19, 1, .22, 1],
						[.075, .82, .165, 1],
						[.175, .885, .32, 1.275], function(e, i) {
							return 1 - t(1 - e, i)
						}],
					InOut: [
						[.455, .03, .515, .955],
						[.645, .045, .355, 1],
						[.77, 0, .175, 1],
						[.86, 0, .07, 1],
						[.445, .05, .55, .95],
						[1, 0, 0, 1],
						[.785, .135, .15, .86],
						[.68, -.55, .265, 1.55], function(e, i) {
							return .5 > e ? t(2 * e, i) / 2 : 1 - t(-2 * e + 2, i) / 2
						}]
				},
				n = {
					linear: W(.25, .25, .75, .75)
				},
				s = {},
				o;
			for (o in i) s.type = o, i[s.type].forEach(function(t) {
				return function(i, s) {
					n["ease" + t.type + e[s]] = P.fnc(i) ? i : W.apply($jscomp$this, i)
				}
			}(s)), s = {
				type: s.type
			};
			
			return n
		}(),
		F = {
			css: function(t, e, i) {
				return t.style[e] = i
			},
			
			attribute: function(t, e, i) {
				return t.setAttribute(e, i)
			},
			
			object: function(t, e, i) {
				return t[e] = i
			},
			
			transform: function(t, e, i, n, s) {
				n[s] || (n[s] = []), n[s].push(e + "(" + i + ")")
			}
		},
		N = [],
		q = 0,
		z = function() {
			function t() {
				q = requestAnimationFrame(e)
			}
			function e(e) {
				var i = N.length;
				if (i) {
					for (var n = 0; i > n;) N[n] && N[n].tick(e), n++;
					t()
				} else cancelAnimationFrame(q), q = 0
			}
			return t
		}();
	
	return S.version = "2.2.0", S.speed = 1, S.running = N, S.remove = function(t) {
		t = w(t);
		for (var e = N.length; e--;) for (var i = N[e], n = i.animations, o = n.length; o--;) s(t, n[o].animatable.target) && (n.splice(o, 1), n.length || i.pause())
	}, S.getValue = m, S.path = function(e, i) {
		var n = P.str(e) ? t(e)[0] : e,
			s = i || 100;
		return function(t) {
			return {
				el: n,
				property: t,
				totalLength: b(n) * (s / 100)
			}
		}
	}, S.setDashoffset = function(t) {
		var e = b(t);
		return t.setAttribute("stroke-dasharray", e), e
	}, S.bezier = W, S.easings = j, S.timeline = function(t) {
		var e = S(t);
		return e.pause(), e.duration = 0, e.add = function(i) {
			return e.children.forEach(function(t) {
				t.began = !0, t.completed = !0
			}), n(i).forEach(function(i) {
				var n = r(i, a(A, t || {}));
				n.targets = n.targets || t.targets, i = e.duration;
				var s = n.offset;
				n.autoplay = !1, n.direction = e.direction, n.offset = P.und(s) ? i : g(s, i), e.began = !0, e.completed = !0, e.seek(n.offset), n = S(n), n.began = !0, n.completed = !0, n.duration > i && (e.duration = n.duration), e.children.push(n)
			}), e.seek(0), e.reset(), e.autoplay && e.restart(), e
		}, e
	}, S.random = function(t, e) {
		return Math.floor(Math.random() * (e - t + 1)) + t
	}, S
}), function($, t) {
	"use strict";
	var e = {
		accordion: !0,
		onOpenStart: void 0,
		onOpenEnd: void 0,
		onCloseStart: void 0,
		onCloseEnd: void 0,
		inDuration: 300,
		outDuration: 300
	},
		i = function(i) {
			function n(t, e) {
				_classCallCheck(this, n);
				var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
				i.el.M_Collapsible = i, i.options = $.extend({}, n.defaults, e), i.$headers = i.$el.children("li").children(".collapsible-header"), i.$headers.attr("tabindex", 0), i._setupEventHandlers();
				
				var s = i.$el.children("li.active").children(".collapsible-body");
				return i.options.accordion ? s.first().css("display", "block") : s.css("display", "block"), i
			}
			return _inherits(n, i), _createClass(n, [{
				key: "destroy",
				value: function s() {
					this._removeEventHandlers(), this.el.M_Collapsible = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function o() {
					var t = this;
					this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this), this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this), this.el.addEventListener("click", this._handleCollapsibleClickBound), this.$headers.each(function(e) {
						e.addEventListener("keydown", t._handleCollapsibleKeydownBound)
					})
				}
			},
			{
				key: "_removeEventHandlers",
				value: function a() {
					this.el.removeEventListener("click", this._handleCollapsibleClickBound)
				}
			},
			{
				key: "_handleCollapsibleClick",
				value: function r(t) {
					var e = $(t.target).closest(".collapsible-header");
					if (t.target && e.length) {
						var i = e.closest(".collapsible");
						if (i[0] === this.el) {
							var n = e.closest("li"),
								s = i.children("li"),
								o = n[0].classList.contains("active"),
								a = s.index(n);
							o ? this.close(a) : this.open(a)
						}
					}
				}
			},
			{
				key: "_handleCollapsibleKeydown",
				value: function l(t) {
					13 === t.keyCode && this._handleCollapsibleClickBound(t)
				}
			},
			{
				key: "_animateIn",
				value: function h(e) {
					var i = this,
						n = this.$el.children("li").eq(e);
					if (n.length) {
						var s = n.children(".collapsible-body");
						t.remove(s[0]), s.css({
							display: "block",
							overflow: "hidden",
							height: 0,
							paddingTop: "",
							paddingBottom: ""
						});
						
						var o = s.css("padding-top"),
							a = s.css("padding-bottom"),
							r = s[0].scrollHeight;
						s.css({
							paddingTop: 0,
							paddingBottom: 0
						}), t({
							targets: s[0],
							height: r,
							paddingTop: o,
							paddingBottom: a,
							duration: this.options.inDuration,
							easing: "easeInOutCubic",
							complete: function(t) {
								s.css({
									overflow: "",
									paddingTop: "",
									paddingBottom: "",
									height: ""
								}), "function" == typeof i.options.onOpenEnd && i.options.onOpenEnd.call(i, n[0])
							}
						})
					}
				}
			},
			{
				key: "_animateOut",
				value: function d(e) {
					var i = this,
						n = this.$el.children("li").eq(e);
					if (n.length) {
						var s = n.children(".collapsible-body");
						t.remove(s[0]), s.css("overflow", "hidden"), t({
							targets: s[0],
							height: 0,
							paddingTop: 0,
							paddingBottom: 0,
							duration: this.options.outDuration,
							easing: "easeInOutCubic",
							complete: function() {
								s.css({
									height: "",
									overflow: "",
									padding: "",
									display: ""
								}), "function" == typeof i.options.onCloseEnd && i.options.onCloseEnd.call(i, n[0])
							}
						})
					}
				}
			},
			{
				key: "open",
				value: function u(t) {
					var e = this,
						i = this.$el.children("li").eq(t);
					if (i.length && !i[0].classList.contains("active")) {
						if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, i[0]), this.options.accordion) {
							var n = this.$el.children("li"),
								s = this.$el.children("li.active");
							s.each(function(t) {
								var i = n.index($(t));
								e.close(i)
							})
						}
						i[0].classList.add("active"), this._animateIn(t)
					}
				}
			},
			{
				key: "close",
				value: function c(t) {
					var e = this.$el.children("li").eq(t);
					e.length && e[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, e[0]), e[0].classList.remove("active"), this._animateOut(t))
				}
			}], [{
				key: "init",
				value: function p(t, e) {
					return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function v(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Collapsible
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), n
		}(Component);
	M.Collapsible = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "collapsible", "M_Collapsible")
}(cash, M.anime), function($, t) {
	"use strict";
	var e = {
		alignment: "left",
		autoFocus: !0,
		constrainWidth: !0,
		container: null,
		coverTrigger: !0,
		closeOnClick: !0,
		hover: !1,
		inDuration: 150,
		outDuration: 250,
		onOpenStart: null,
		onOpenEnd: null,
		onCloseStart: null,
		onCloseEnd: null,
		onItemClick: null
	},
		i = function(i) {
			function n(t, e) {
				_classCallCheck(this, n);
				var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
				return i.el.M_Dropdown = i, n._dropdowns.push(i), i.id = M.getIdFromTrigger(t), i.dropdownEl = document.getElementById(i.id), i.$dropdownEl = $(i.dropdownEl), i.options = $.extend({}, n.defaults, e), i.isOpen = !1, i.isScrollable = !1, i.isTouchMoving = !1, i.focusedIndex = -1, i.filterQuery = [], i.options.container ? $(i.options.container).append(i.dropdownEl) : i.$el.after(i.dropdownEl), i._makeDropdownFocusable(), i._resetFilterQueryBound = i._resetFilterQuery.bind(i), i._handleDocumentClickBound = i._handleDocumentClick.bind(i), i._handleDocumentTouchmoveBound = i._handleDocumentTouchmove.bind(i), i._handleDropdownClickBound = i._handleDropdownClick.bind(i), i._handleDropdownKeydownBound = i._handleDropdownKeydown.bind(i), i._handleTriggerKeydownBound = i._handleTriggerKeydown.bind(i), i._setupEventHandlers(), i
			}
			return _inherits(n, i), _createClass(n, [{
				key: "destroy",
				value: function s() {
					this._resetDropdownStyles(), this._removeEventHandlers(), n._dropdowns.splice(n._dropdowns.indexOf(this), 1), this.el.M_Dropdown = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function o() {
					this.el.addEventListener("keydown", this._handleTriggerKeydownBound), this.dropdownEl.addEventListener("click", this._handleDropdownClickBound), this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this), this.el.addEventListener("click", this._handleClickBound))
				}
			},
			{
				key: "_removeEventHandlers",
				value: function a() {
					this.el.removeEventListener("keydown", this._handleTriggerKeydownBound), this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound), this.options.hover ? (this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound)
				}
			},
			{
				key: "_setupTemporaryEventHandlers",
				value: function r() {
					document.body.addEventListener("click", this._handleDocumentClickBound, !0), document.body.addEventListener("touchend", this._handleDocumentClickBound), document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound), this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound)
				}
			},
			{
				key: "_removeTemporaryEventHandlers",
				value: function l() {
					document.body.removeEventListener("click", this._handleDocumentClickBound, !0), document.body.removeEventListener("touchend", this._handleDocumentClickBound), document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound), this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound)
				}
			},
			{
				key: "_handleClick",
				value: function h(t) {
					t.preventDefault(), this.open()
				}
			},
			{
				key: "_handleMouseEnter",
				value: function d() {
					this.open()
				}
			},
			{
				key: "_handleMouseLeave",
				value: function u(t) {
					var e = t.toElement || t.relatedTarget,
						i = !! $(e).closest(".dropdown-content").length,
						n = !1,
						s = $(e).closest(".dropdown-trigger");
					s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (n = !0), n || i || this.close()
				}
			},
			{
				key: "_handleDocumentClick",
				value: function c(t) {
					var e = this,
						i = $(t.target);
					this.options.closeOnClick && i.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function() {
						e.close()
					}, 0) : (i.closest(".dropdown-trigger").length || !i.closest(".dropdown-content").length) && setTimeout(function() {
						e.close()
					}, 0), this.isTouchMoving = !1
				}
			},
			{
				key: "_handleTriggerKeydown",
				value: function p(t) {
					t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ENTER || this.isOpen || (t.preventDefault(), this.open())
				}
			},
			{
				key: "_handleDocumentTouchmove",
				value: function v(t) {
					var e = $(t.target);
					e.closest(".dropdown-content").length && (this.isTouchMoving = !0)
				}
			},
			{
				key: "_handleDropdownClick",
				value: function f(t) {
					if ("function" == typeof this.options.onItemClick) {
						var e = $(t.target).closest("li")[0];
						this.options.onItemClick.call(this, e)
					}
				}
			},
			{
				key: "_handleDropdownKeydown",
				value: function m(t) {
					if (t.which === M.keys.TAB) t.preventDefault(), this.close();
					else if (t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || !this.isOpen) if (t.which === M.keys.ENTER && this.isOpen) {
						var e = this.dropdownEl.children[this.focusedIndex],
							i = $(e).find("a, button").first();
						
						i.length ? i[0].click() : e.click()
					} else t.which === M.keys.ESC && this.isOpen && (t.preventDefault(), this.close());
					else {
						t.preventDefault();
						
						var n = t.which === M.keys.ARROW_DOWN ? 1 : -1,
							s = this.focusedIndex,
							o = !1;
						do
						if (s += n, this.dropdownEl.children[s] && -1 !== this.dropdownEl.children[s].tabIndex) {
							o = !0;
							break
						}
						while (s < this.dropdownEl.children.length && s >= 0);
						o && (this.focusedIndex = s, this._focusFocusedItem())
					}
					var a = String.fromCharCode(t.which).toLowerCase(),
						r = [9, 13, 27, 38, 40];
					if (a && -1 === r.indexOf(t.which)) {
						this.filterQuery.push(a);
						var l = this.filterQuery.join(""),
							h = $(this.dropdownEl).find("li").filter(function(t) {
								return 0 === $(t).text().toLowerCase().indexOf(l)
							})[0];
						h && (this.focusedIndex = $(h).index(), this._focusFocusedItem())
					}
					this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3)
				}
			},
			{
				key: "_resetFilterQuery",
				value: function g() {
					this.filterQuery = []
				}
			},
			{
				key: "_resetDropdownStyles",
				value: function y() {
					this.$dropdownEl.css({
						display: "",
						width: "",
						height: "",
						left: "",
						top: "",
						"transform-origin": "",
						transform: "",
						opacity: ""
					})
				}
			},
			{
				key: "_makeDropdownFocusable",
				value: function _() {
					this.dropdownEl.tabIndex = 0, $(this.dropdownEl).children().each(function(t) {
						t.getAttribute("tabindex") || t.setAttribute("tabindex", 0)
					})
				}
			},
			{
				key: "_focusFocusedItem",
				value: function b() {
					this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus()
				}
			},
			{
				key: "_getDropdownPosition",
				value: function k() {
					var t = this.el.offsetParent.getBoundingClientRect(),
						e = this.el.getBoundingClientRect(),
						i = this.dropdownEl.getBoundingClientRect(),
						n = i.height,
						s = i.width,
						o = e.left - i.left,
						a = e.top - i.top,
						r = {
							left: o,
							top: a,
							height: n,
							width: s
						},
						l = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode,
						h = M.checkPossibleAlignments(this.el, l, r, this.options.coverTrigger ? 0 : e.height),
						d = "top",
						u = this.options.alignment;
					if (a += this.options.coverTrigger ? 0 : e.height, this.isScrollable = !1, h.top || (h.bottom ? d = "bottom" : (this.isScrollable = !0, h.spaceOnTop > h.spaceOnBottom ? (d = "bottom", n += h.spaceOnTop, a -= h.spaceOnTop) : n += h.spaceOnBottom)), !h[u]) {
						var c = "left" === u ? "right" : "left";
						h[c] ? u = c : h.spaceOnLeft > h.spaceOnRight ? (u = "right", s += h.spaceOnLeft, o -= h.spaceOnLeft) : (u = "left", s += h.spaceOnRight)
					}
					return "bottom" === d && (a = a - i.height + (this.options.coverTrigger ? e.height : 0)), "right" === u && (o = o - i.width + e.width), {
						x: o,
						y: a,
						verticalAlignment: d,
						horizontalAlignment: u,
						height: n,
						width: s
					}
				}
			},
			{
				key: "_animateIn",
				value: function C() {
					var e = this;
					t.remove(this.dropdownEl), t({
						targets: this.dropdownEl,
						opacity: {
							value: [0, 1],
							easing: "easeOutQuad"
						},
						
						scaleX: [.3, 1],
						scaleY: [.3, 1],
						duration: this.options.inDuration,
						easing: "easeOutQuint",
						complete: function(t) {
							if (e.options.autoFocus && e.dropdownEl.focus(), "function" == typeof e.options.onOpenEnd) {
								var i = t.animatables[0].target;
								e.options.onOpenEnd.call(i, e.el)
							}
						}
					})
				}
			},
			{
				key: "_animateOut",
				value: function w() {
					var e = this;
					t.remove(this.dropdownEl), t({
						targets: this.dropdownEl,
						opacity: {
							value: 0,
							easing: "easeOutQuint"
						},
						
						scaleX: .3,
						scaleY: .3,
						duration: this.options.outDuration,
						easing: "easeOutQuint",
						complete: function(t) {
							if (e._resetDropdownStyles(), "function" == typeof e.options.onCloseEnd) {
								var i = t.animatables[0].target;
								e.options.onCloseEnd.call(e, e.el)
							}
						}
					})
				}
			},
			{
				key: "_placeDropdown",
				value: function E() {
					var t = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
					this.dropdownEl.style.width = t + "px";
					var e = this._getDropdownPosition();
					
					this.dropdownEl.style.left = e.x + "px", this.dropdownEl.style.top = e.y + "px", this.dropdownEl.style.height = e.height + "px", this.dropdownEl.style.width = e.width + "px", this.dropdownEl.style.transformOrigin = ("left" === e.horizontalAlignment ? "0" : "100%") + " " + ("top" === e.verticalAlignment ? "0" : "100%")
				}
			},
			{
				key: "open",
				value: function x() {
					this.isOpen || (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._resetDropdownStyles(), this.dropdownEl.style.display = "block", this._placeDropdown(), this._animateIn(), this._setupTemporaryEventHandlers())
				}
			},
			{
				key: "close",
				value: function O() {
					this.isOpen && (this.isOpen = !1, this.focusedIndex = -1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._animateOut(), this._removeTemporaryEventHandlers(), this.options.autoFocus && this.el.focus())
				}
			},
			{
				key: "recalculateDimensions",
				value: function T() {
					this.isOpen && (this.$dropdownEl.css({
						width: "",
						height: "",
						left: "",
						top: "",
						"transform-origin": ""
					}), this._placeDropdown())
				}
			}], [{
				key: "init",
				value: function L(t, e) {
					return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function B(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Dropdown
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), n
		}(Component);
	i._dropdowns = [], window.M.Dropdown = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "dropdown", "M_Dropdown")
}(cash, M.anime), function($, t) {
	"use strict";
	var e = {
		opacity: .5,
		inDuration: 250,
		outDuration: 250,
		onOpenStart: null,
		onOpenEnd: null,
		onCloseStart: null,
		onCloseEnd: null,
		preventScrolling: !0,
		dismissible: !0,
		startingTop: "4%",
		endingTop: "10%"
	},
		i = function(i) {
			function n(t, e) {
				_classCallCheck(this, n);
				var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
				return i.el.M_Modal = i, i.options = $.extend({}, n.defaults, e), i.isOpen = !1, i.id = i.$el.attr("id"), i._openingTrigger = void 0, i.$overlay = $('<div class="modal-overlay"></div>'), i.el.tabIndex = 0, i._nthModalOpened = 0, n._count++, i._setupEventHandlers(), i
			}
			return _inherits(n, i), _createClass(n, [{
				key: "destroy",
				value: function s() {
					n._count--, this._removeEventHandlers(), this.el.removeAttribute("style"), this.$overlay.remove(), this.el.M_Modal = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function o() {
					this._handleOverlayClickBound = this._handleOverlayClick.bind(this), this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this), 1 === n._count && document.body.addEventListener("click", this._handleTriggerClick), this.$overlay[0].addEventListener("click", this._handleOverlayClickBound), this.el.addEventListener("click", this._handleModalCloseClickBound)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function a() {
					0 === n._count && document.body.removeEventListener("click", this._handleTriggerClick), this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound), this.el.removeEventListener("click", this._handleModalCloseClickBound)
				}
			},
			{
				key: "_handleTriggerClick",
				value: function r(t) {
					var e = $(t.target).closest(".modal-trigger");
					if (e.length) {
						var i = M.getIdFromTrigger(e[0]),
							n = document.getElementById(i).M_Modal;
						n && n.open(e), t.preventDefault()
					}
				}
			},
			{
				key: "_handleOverlayClick",
				value: function l() {
					this.options.dismissible && this.close()
				}
			},
			{
				key: "_handleModalCloseClick",
				value: function h(t) {
					var e = $(t.target).closest(".modal-close");
					e.length && this.close()
				}
			},
			{
				key: "_handleKeydown",
				value: function d(t) {
					27 === t.keyCode && this.options.dismissible && this.close()
				}
			},
			{
				key: "_handleFocus",
				value: function u(t) {
					this.el.contains(t.target) || this._nthModalOpened !== n._modalsOpen || this.el.focus()
				}
			},
			{
				key: "_animateIn",
				value: function c() {
					var e = this;
					$.extend(this.el.style, {
						display: "block",
						opacity: 0
					}), $.extend(this.$overlay[0].style, {
						display: "block",
						opacity: 0
					}), t({
						targets: this.$overlay[0],
						opacity: this.options.opacity,
						duration: this.options.inDuration,
						easing: "easeOutQuad"
					});
					
					var i = {
						targets: this.el,
						duration: this.options.inDuration,
						easing: "easeOutCubic",
						complete: function() {
							"function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el, e._openingTrigger)
						}
					};
					
					this.el.classList.contains("bottom-sheet") ? ($.extend(i, {
						bottom: 0,
						opacity: 1
					}), t(i)) : ($.extend(i, {
						top: [this.options.startingTop, this.options.endingTop],
						opacity: 1,
						scaleX: [.8, 1],
						scaleY: [.8, 1]
					}), t(i))
				}
			},
			{
				key: "_animateOut",
				value: function p() {
					var e = this;
					t({
						targets: this.$overlay[0],
						opacity: 0,
						duration: this.options.outDuration,
						easing: "easeOutQuart"
					});
					
					var i = {
						targets: this.el,
						duration: this.options.outDuration,
						easing: "easeOutCubic",
						complete: function() {
							e.el.style.display = "none", e.$overlay.remove(), "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el)
						}
					};
					
					this.el.classList.contains("bottom-sheet") ? ($.extend(i, {
						bottom: "-100%",
						opacity: 0
					}), t(i)) : ($.extend(i, {
						top: [this.options.endingTop, this.options.startingTop],
						opacity: 0,
						scaleX: .8,
						scaleY: .8
					}), t(i))
				}
			},
			{
				key: "open",
				value: function v(e) {
					return this.isOpen ? void 0 : (this.isOpen = !0, n._modalsOpen++, this._nthModalOpened = n._modalsOpen, this.$overlay[0].style.zIndex = 1e3 + 2 * n._modalsOpen, this.el.style.zIndex = 1e3 + 2 * n._modalsOpen + 1, this._openingTrigger = e ? e[0] : void 0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger), this.options.preventScrolling && (document.body.style.overflow = "hidden"), this.el.classList.add("open"), this.el.insertAdjacentElement("afterend", this.$overlay[0]), this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this), this._handleFocusBound = this._handleFocus.bind(this), document.addEventListener("keydown", this._handleKeydownBound), document.addEventListener("focus", this._handleFocusBound, !0)), t.remove(this.el), t.remove(this.$overlay[0]), this._animateIn(), this.el.focus(), this)
				}
			},
			{
				key: "close",
				value: function f() {
					return this.isOpen ? (this.isOpen = !1, n._modalsOpen--, this._nthModalOpened = 0, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this.el.classList.remove("open"), 0 === n._modalsOpen && (document.body.style.overflow = ""), this.options.dismissible && (document.removeEventListener("keydown", this._handleKeydownBound), document.removeEventListener("focus", this._handleFocusBound, !0)), t.remove(this.el), t.remove(this.$overlay[0]), this._animateOut(), this) : void 0
				}
			}], [{
				key: "init",
				value: function m(t, e) {
					return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function g(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Modal
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), n
		}(Component);
	i._modalsOpen = 0, i._count = 0, M.Modal = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "modal", "M_Modal")
}(cash, M.anime), function($, t) {
	"use strict";
	var e = {
		inDuration: 275,
		outDuration: 200,
		onOpenStart: null,
		onOpenEnd: null,
		onCloseStart: null,
		onCloseEnd: null
	},
		i = function(i) {
			function n(t, e) {
				_classCallCheck(this, n);
				var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
				return i.el.M_Materialbox = i, i.options = $.extend({}, n.defaults, e), i.overlayActive = !1, i.doneAnimating = !0, i.placeholder = $("<div></div>").addClass("material-placeholder"), i.originalWidth = 0, i.originalHeight = 0, i.originInlineStyles = i.$el.attr("style"), i.caption = i.el.getAttribute("data-caption") || "", i.$el.before(i.placeholder), i.placeholder.append(i.$el), i._setupEventHandlers(), i
			}
			return _inherits(n, i), _createClass(n, [{
				key: "destroy",
				value: function s() {
					this._removeEventHandlers(), this.el.M_Materialbox = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function o() {
					this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this), this.el.addEventListener("click", this._handleMaterialboxClickBound)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function a() {
					this.el.removeEventListener("click", this._handleMaterialboxClickBound)
				}
			},
			{
				key: "_handleMaterialboxClick",
				value: function r(t) {
					this.doneAnimating === !1 || this.overlayActive && this.doneAnimating ? this.close() : this.open()
				}
			},
			{
				key: "_handleWindowScroll",
				value: function l() {
					this.overlayActive && this.close()
				}
			},
			{
				key: "_handleWindowResize",
				value: function h() {
					this.overlayActive && this.close()
				}
			},
			{
				key: "_handleWindowEscape",
				value: function d(t) {
					27 === t.keyCode && this.doneAnimating && this.overlayActive && this.close()
				}
			},
			{
				key: "_makeAncestorsOverflowVisible",
				value: function u() {
					this.ancestorsChanged = $();
					
					for (var t = this.placeholder[0].parentNode; null !== t && !$(t).is(document);) {
						var e = $(t);
						"visible" !== e.css("overflow") && (e.css("overflow", "visible"), void 0 === this.ancestorsChanged ? this.ancestorsChanged = e : this.ancestorsChanged = this.ancestorsChanged.add(e)), t = t.parentNode
					}
				}
			},
			{
				key: "_animateImageIn",
				value: function c() {
					var e = this,
						i = {
							targets: this.el,
							height: [this.originalHeight, this.newHeight],
							width: [this.originalWidth, this.newWidth],
							left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
							top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
							duration: this.options.inDuration,
							easing: "easeOutQuad",
							complete: function() {
								e.doneAnimating = !0, "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el)
							}
						};
					
					this.maxWidth = this.$el.css("max-width"), this.maxHeight = this.$el.css("max-height"), "none" !== this.maxWidth && (i.maxWidth = this.newWidth), "none" !== this.maxHeight && (i.maxHeight = this.newHeight), t(i)
				}
			},
			{
				key: "_animateImageOut",
				value: function p() {
					var e = this,
						i = {
							targets: this.el,
							width: this.originalWidth,
							height: this.originalHeight,
							left: 0,
							top: 0,
							duration: this.options.outDuration,
							easing: "easeOutQuad",
							complete: function() {
								e.placeholder.css({
									height: "",
									width: "",
									position: "",
									top: "",
									left: ""
								}), e.attrWidth && e.$el.attr("width", e.attrWidth), e.attrHeight && e.$el.attr("height", e.attrHeight), e.$el.removeAttr("style"), e.$el.attr("style", e.originInlineStyles), e.$el.removeClass("active"), e.doneAnimating = !0, e.ancestorsChanged.length && e.ancestorsChanged.css("overflow", ""), "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el)
							}
						};
					
					t(i)
				}
			},
			{
				key: "_updateVars",
				value: function v() {
					this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.caption = this.el.getAttribute("data-caption") || ""
				}
			},
			{
				key: "open",
				value: function f() {
					var e = this;
					this._updateVars(), this.originalWidth = this.el.getBoundingClientRect().width, this.originalHeight = this.el.getBoundingClientRect().height, this.doneAnimating = !1, this.$el.addClass("active"), this.overlayActive = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this.placeholder.css({
						width: this.placeholder[0].getBoundingClientRect().width + "px",
						height: this.placeholder[0].getBoundingClientRect().height + "px",
						position: "relative",
						top: 0,
						left: 0
					}), this._makeAncestorsOverflowVisible(), this.$el.css({
						position: "absolute",
						"z-index": 1e3,
						"will-change": "left, top, width, height"
					}), this.attrWidth = this.$el.attr("width"), this.attrHeight = this.$el.attr("height"), this.attrWidth && (this.$el.css("width", this.attrWidth + "px"), this.$el.removeAttr("width")), this.attrHeight && (this.$el.css("width", this.attrHeight + "px"), this.$el.removeAttr("height")), this.$overlay = $('<div id="materialbox-overlay"></div>').css({
						opacity: 0
					}).one("click", function() {
						e.doneAnimating && e.close()
					}), this.$el.before(this.$overlay);
					var i = this.$overlay[0].getBoundingClientRect();
					
					this.$overlay.css({
						width: this.windowWidth + "px",
						height: this.windowHeight + "px",
						left: -1 * i.left + "px",
						top: -1 * i.top + "px"
					}), t.remove(this.el), t.remove(this.$overlay[0]), t({
						targets: this.$overlay[0],
						opacity: 1,
						duration: this.options.inDuration,
						easing: "easeOutQuad"
					}), "" !== this.caption && (this.$photocaption && t.remove(this.$photoCaption[0]), this.$photoCaption = $('<div class="materialbox-caption"></div>'), this.$photoCaption.text(this.caption), $("body").append(this.$photoCaption), this.$photoCaption.css({
						display: "inline"
					}), t({
						targets: this.$photoCaption[0],
						opacity: 1,
						duration: this.options.inDuration,
						easing: "easeOutQuad"
					}));
					var n = 0,
						s = this.originalWidth / this.windowWidth,
						o = this.originalHeight / this.windowHeight;
					this.newWidth = 0, this.newHeight = 0, s > o ? (n = this.originalHeight / this.originalWidth, this.newWidth = .9 * this.windowWidth, this.newHeight = .9 * this.windowWidth * n) : (n = this.originalWidth / this.originalHeight, this.newWidth = .9 * this.windowHeight * n, this.newHeight = .9 * this.windowHeight), this._animateImageIn(), this._handleWindowScrollBound = this._handleWindowScroll.bind(this), this._handleWindowResizeBound = this._handleWindowResize.bind(this), this._handleWindowEscapeBound = this._handleWindowEscape.bind(this), window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleWindowResizeBound), window.addEventListener("keyup", this._handleWindowEscapeBound)
				}
			},
			{
				key: "close",
				value: function m() {
					var e = this;
					this._updateVars(), this.doneAnimating = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), t.remove(this.el), t.remove(this.$overlay[0]), "" !== this.caption && t.remove(this.$photoCaption[0]), window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleWindowResizeBound), window.removeEventListener("keyup", this._handleWindowEscapeBound), t({
						targets: this.$overlay[0],
						opacity: 0,
						duration: this.options.outDuration,
						easing: "easeOutQuad",
						complete: function() {
							e.overlayActive = !1, e.$overlay.remove()
						}
					}), this._animateImageOut(), "" !== this.caption && t({
						targets: this.$photoCaption[0],
						opacity: 0,
						duration: this.options.outDuration,
						easing: "easeOutQuad",
						complete: function() {
							e.$photoCaption.remove()
						}
					})
				}
			}], [{
				key: "init",
				value: function g(t, e) {
					return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function y(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Materialbox
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), n
		}(Component);
	M.Materialbox = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "materialbox", "M_Materialbox")
}(cash, M.anime), function($) {
	"use strict";
	var t = {
		responsiveThreshold: 0
	},
		e = function(e) {
			function i(t, e) {
				_classCallCheck(this, i);
				var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
				return n.el.M_Parallax = n, n.options = $.extend({}, i.defaults, e), n._enabled = window.innerWidth > n.options.responsiveThreshold, n.$img = n.$el.find("img").first(), n.$img.each(function() {
					var t = this;
					t.complete && $(t).trigger("load")
				}), n._updateParallax(), n._setupEventHandlers(), n._setupStyles(), i._parallaxes.push(n), n
			}
			return _inherits(i, e), _createClass(i, [{
				key: "destroy",
				value: function n() {
					i._parallaxes.splice(i._parallaxes.indexOf(this), 1), this.$img[0].style.transform = "", this._removeEventHandlers(), this.$el[0].M_Parallax = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function s() {
					this._handleImageLoadBound = this._handleImageLoad.bind(this), this.$img[0].addEventListener("load", this._handleImageLoadBound), 0 === i._parallaxes.length && (i._handleScrollThrottled = M.throttle(i._handleScroll, 5), window.addEventListener("scroll", i._handleScrollThrottled), i._handleWindowResizeThrottled = M.throttle(i._handleWindowResize, 5), window.addEventListener("resize", i._handleWindowResizeThrottled))
				}
			},
			{
				key: "_removeEventHandlers",
				value: function o() {
					this.$img[0].removeEventListener("load", this._handleImageLoadBound), 0 === i._parallaxes.length && (window.removeEventListener("scroll", i._handleScrollThrottled), window.removeEventListener("resize", i._handleWindowResizeThrottled))
				}
			},
			{
				key: "_setupStyles",
				value: function a() {
					this.$img[0].style.opacity = 1
				}
			},
			{
				key: "_handleImageLoad",
				value: function r() {
					this._updateParallax()
				}
			},
			{
				key: "_updateParallax",
				value: function l() {
					var t = this.$el.height() > 0 ? this.el.parentNode.offsetHeight : 500,
						e = this.$img[0].offsetHeight,
						i = e - t,
						n = this.$el.offset().top + t,
						s = this.$el.offset().top,
						o = M.getDocumentScrollTop(),
						a = window.innerHeight,
						r = o + a,
						l = (r - s) / (t + a),
						h = i * l;
					this._enabled ? n > o && o + a > s && (this.$img[0].style.transform = "translate3D(-50%, " + h + "px, 0)") : this.$img[0].style.transform = ""
				}
			}], [{
				key: "init",
				value: function h(t, e) {
					return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function d(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Parallax
				}
			},
			{
				key: "_handleScroll",
				value: function u() {
					for (var t = 0; t < i._parallaxes.length; t++) {
						var e = i._parallaxes[t];
						e._updateParallax.call(e)
					}
				}
			},
			{
				key: "_handleWindowResize",
				value: function c() {
					for (var t = 0; t < i._parallaxes.length; t++) {
						var e = i._parallaxes[t];
						e._enabled = window.innerWidth > e.options.responsiveThreshold
					}
				}
			},
			{
				key: "defaults",
				get: function() {
					return t
				}
			}]), i
		}(Component);
	e._parallaxes = [], M.Parallax = e, M.jQueryLoaded && M.initializeJqueryWrapper(e, "parallax", "M_Parallax")
}(cash), function($, t) {
	"use strict";
	var e = {
		duration: 300,
		onShow: null,
		swipeable: !1,
		responsiveThreshold: 1 / 0
	},
		i = function(i) {
			function n(t, e) {
				_classCallCheck(this, n);
				var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
				return i.el.M_Tabs = i, i.options = $.extend({}, n.defaults, e), i.$tabLinks = i.$el.children("li.tab").children("a"), i.index = 0, i._setupActiveTabLink(), i.options.swipeable ? i._setupSwipeableTabs() : i._setupNormalTabs(), i._setTabsAndTabWidth(), i._createIndicator(), i._setupEventHandlers(), i
			}
			return _inherits(n, i), _createClass(n, [{
				key: "destroy",
				value: function s() {
					this._removeEventHandlers(), this._indicator.parentNode.removeChild(this._indicator), this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(), this.$el[0].M_Tabs = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function o() {
					this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound), this._handleTabClickBound = this._handleTabClick.bind(this), this.el.addEventListener("click", this._handleTabClickBound)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function a() {
					window.removeEventListener("resize", this._handleWindowResizeBound), this.el.removeEventListener("click", this._handleTabClickBound)
				}
			},
			{
				key: "_handleWindowResize",
				value: function r() {
					this._setTabsAndTabWidth(), 0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px", this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px")
				}
			},
			{
				key: "_handleTabClick",
				value: function l(t) {
					var e = this,
						i = $(t.target).closest("li.tab"),
						n = $(t.target).closest("a");
					if (n.length && n.parent().hasClass("tab")) {
						if (i.hasClass("disabled")) return void t.preventDefault();
						
						if (!n.attr("target")) {
							this.$activeTabLink.removeClass("active");
							var s = this.$content;
							this.$activeTabLink = n, this.$content = $(M.escapeHash(n[0].hash)), this.$tabLinks = this.$el.children("li.tab").children("a"), this.$activeTabLink.addClass("active");
							var o = this.index;
							this.index = Math.max(this.$tabLinks.index(n), 0), this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index, function() {
								"function" == typeof e.options.onShow && e.options.onShow.call(e, e.$content[0])
							}) : this.$content.length && (this.$content[0].style.display = "block", this.$content.addClass("active"), "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]), s.length && !s.is(this.$content) && (s[0].style.display = "none", s.removeClass("active"))), this._setTabsAndTabWidth(), this._animateIndicator(o), t.preventDefault()
						}
					}
				}
			},
			{
				key: "_createIndicator",
				value: function h() {
					var t = this,
						e = document.createElement("li");
					e.classList.add("indicator"), this.el.appendChild(e), this._indicator = e, setTimeout(function() {
						t._indicator.style.left = t._calcLeftPos(t.$activeTabLink) + "px", t._indicator.style.right = t._calcRightPos(t.$activeTabLink) + "px"
					}, 0)
				}
			},
			{
				key: "_setupActiveTabLink",
				value: function d() {
					this.$activeTabLink = $(this.$tabLinks.filter('[href="' + location.hash + '"]')), 0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()), 0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()), this.$tabLinks.removeClass("active"), this.$activeTabLink[0].classList.add("active"), this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0), this.$activeTabLink.length && (this.$content = $(M.escapeHash(this.$activeTabLink[0].hash)), this.$content.addClass("active"))
				}
			},
			{
				key: "_setupSwipeableTabs",
				value: function u() {
					var t = this;
					window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
					var e = $();
					
					this.$tabLinks.each(function(t) {
						var i = $(M.escapeHash(t.hash));
						i.addClass("carousel-item"), e = e.add(i)
					});
					
					var i = $('<div class="tabs-content carousel carousel-slider"></div>');
					e.first().before(i), i.append(e), e[0].style.display = "";
					var n = this.$activeTabLink.closest(".tab").index();
					
					this._tabsCarousel = M.Carousel.init(i[0], {
						fullWidth: !0,
						noWrap: !0,
						onCycleTo: function(e) {
							var i = t.index;
							t.index = $(e).index(), t.$activeTabLink.removeClass("active"), t.$activeTabLink = t.$tabLinks.eq(t.index), t.$activeTabLink.addClass("active"), t._animateIndicator(i), "function" == typeof t.options.onShow && t.options.onShow.call(t, t.$content[0])
						}
					}), this._tabsCarousel.set(n)
				}
			},
			{
				key: "_teardownSwipeableTabs",
				value: function c() {
					var t = this._tabsCarousel.$el;
					this._tabsCarousel.destroy(), t.after(t.children()), t.remove()
				}
			},
			{
				key: "_setupNormalTabs",
				value: function p() {
					this.$tabLinks.not(this.$activeTabLink).each(function(t) {
						if (t.hash) {
							var e = $(M.escapeHash(t.hash));
							e.length && (e[0].style.display = "none")
						}
					})
				}
			},
			{
				key: "_teardownNormalTabs",
				value: function v() {
					this.$tabLinks.each(function(t) {
						if (t.hash) {
							var e = $(M.escapeHash(t.hash));
							e.length && (e[0].style.display = "")
						}
					})
				}
			},
			{
				key: "_setTabsAndTabWidth",
				value: function f() {
					this.tabsWidth = this.$el.width(), this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length
				}
			},
			{
				key: "_calcRightPos",
				value: function m(t) {
					return Math.ceil(this.tabsWidth - t.position().left - t[0].getBoundingClientRect().width)
				}
			},
			{
				key: "_calcLeftPos",
				value: function g(t) {
					return Math.floor(t.position().left)
				}
			},
			{
				key: "updateTabIndicator",
				value: function y() {
					this._setTabsAndTabWidth(), this._animateIndicator(this.index)
				}
			},
			{
				key: "_animateIndicator",
				value: function _(e) {
					var i = 0,
						n = 0;
					this.index - e >= 0 ? i = 90 : n = 90;
					var s = {
						targets: this._indicator,
						left: {
							value: this._calcLeftPos(this.$activeTabLink),
							delay: i
						},
						
						right: {
							value: this._calcRightPos(this.$activeTabLink),
							delay: n
						},
						
						duration: this.options.duration,
						easing: "easeOutQuad"
					};
					
					t.remove(this._indicator), t(s)
				}
			},
			{
				key: "select",
				value: function b(t) {
					var e = this.$tabLinks.filter('[href="#' + t + '"]');
					e.length && e.trigger("click")
				}
			}], [{
				key: "init",
				value: function k(t, e) {
					return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function C(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Tabs
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), n
		}(Component);
	window.M.Tabs = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "tabs", "M_Tabs")
}(cash, M.anime), function($, t) {
	"use strict";
	var e = {
		exitDelay: 200,
		enterDelay: 0,
		html: null,
		margin: 5,
		inDuration: 250,
		outDuration: 200,
		position: "bottom",
		transitionMovement: 10
	},
		i = function(i) {
			function n(t, e) {
				_classCallCheck(this, n);
				var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
				return i.el.M_Tooltip = i, i.options = $.extend({}, n.defaults, e), i.isOpen = !1, i.isHovered = !1, i.isFocused = !1, i._appendTooltipEl(), i._setupEventHandlers(), i
			}
			return _inherits(n, i), _createClass(n, [{
				key: "destroy",
				value: function s() {
					$(this.tooltipEl).remove(), this._removeEventHandlers(), this.el.M_Tooltip = void 0
				}
			},
			{
				key: "_appendTooltipEl",
				value: function o() {
					var t = document.createElement("div");
					t.classList.add("material-tooltip"), this.tooltipEl = t;
					var e = document.createElement("div");
					e.classList.add("tooltip-content"), e.innerHTML = this.options.html, t.appendChild(e), document.body.appendChild(t)
				}
			},
			{
				key: "_updateTooltipContent",
				value: function a() {
					this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html
				}
			},
			{
				key: "_setupEventHandlers",
				value: function r() {
					this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this._handleFocusBound = this._handleFocus.bind(this), this._handleBlurBound = this._handleBlur.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.el.addEventListener("focus", this._handleFocusBound, !0), this.el.addEventListener("blur", this._handleBlurBound, !0)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function l() {
					this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.el.removeEventListener("focus", this._handleFocusBound, !0), this.el.removeEventListener("blur", this._handleBlurBound, !0)
				}
			},
			{
				key: "open",
				value: function h(t) {
					this.isOpen || (t = void 0 === t ? !0 : void 0, this.isOpen = !0, this.options = $.extend({}, this.options, this._getAttributeOptions()), this._updateTooltipContent(), this._setEnterDelayTimeout(t))
				}
			},
			{
				key: "close",
				value: function d() {
					this.isOpen && (this.isHovered = !1, this.isFocused = !1, this.isOpen = !1, this._setExitDelayTimeout())
				}
			},
			{
				key: "_setExitDelayTimeout",
				value: function u() {
					var t = this;
					clearTimeout(this._exitDelayTimeout), this._exitDelayTimeout = setTimeout(function() {
						t.isHovered || t.isFocused || t._animateOut()
					}, this.options.exitDelay)
				}
			},
			{
				key: "_setEnterDelayTimeout",
				value: function c(t) {
					var e = this;
					clearTimeout(this._enterDelayTimeout), this._enterDelayTimeout = setTimeout(function() {
						(e.isHovered || e.isFocused || t) && e._animateIn()
					}, this.options.enterDelay)
				}
			},
			{
				key: "_positionTooltip",
				value: function p() {
					var t = this.el,
						e = this.tooltipEl,
						i = t.offsetHeight,
						n = t.offsetWidth,
						s = e.offsetHeight,
						o = e.offsetWidth,
						a = void 0,
						r = this.options.margin,
						l = void 0,
						h = void 0;
					this.xMovement = 0, this.yMovement = 0, l = t.getBoundingClientRect().top + M.getDocumentScrollTop(), h = t.getBoundingClientRect().left + M.getDocumentScrollLeft(), "top" === this.options.position ? (l += -s - r, h += n / 2 - o / 2, this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (l += i / 2 - s / 2, h += n + r, this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (l += i / 2 - s / 2, h += -o - r, this.xMovement = -this.options.transitionMovement) : (l += i + r, h += n / 2 - o / 2, this.yMovement = this.options.transitionMovement), a = this._repositionWithinScreen(h, l, o, s), $(e).css({
						top: a.y + "px",
						left: a.x + "px"
					})
				}
			},
			{
				key: "_repositionWithinScreen",
				value: function v(t, e, i, n) {
					var s = M.getDocumentScrollLeft(),
						o = M.getDocumentScrollTop(),
						a = t - s,
						r = e - o,
						l = {
							left: a,
							top: r,
							width: i,
							height: n
						},
						h = this.options.margin + this.options.transitionMovement,
						d = M.checkWithinContainer(document.body, l, h);
					return d.left ? a = h : d.right && (a -= a + i - window.innerWidth), d.top ? r = h : d.bottom && (r -= r + n - window.innerHeight), {
						x: a + s,
						y: r + o
					}
				}
			},
			{
				key: "_animateIn",
				value: function f() {
					this._positionTooltip(), this.tooltipEl.style.visibility = "visible", t.remove(this.tooltipEl), t({
						targets: this.tooltipEl,
						opacity: 1,
						translateX: this.xMovement,
						translateY: this.yMovement,
						duration: this.options.inDuration,
						easing: "easeOutCubic"
					})
				}
			},
			{
				key: "_animateOut",
				value: function m() {
					t.remove(this.tooltipEl), t({
						targets: this.tooltipEl,
						opacity: 0,
						translateX: 0,
						translateY: 0,
						duration: this.options.outDuration,
						easing: "easeOutCubic"
					})
				}
			},
			{
				key: "_handleMouseEnter",
				value: function g() {
					this.isHovered = !0, this.isFocused = !1, this.open(!1)
				}
			},
			{
				key: "_handleMouseLeave",
				value: function y() {
					this.isHovered = !1, this.isFocused = !1, this.close()
				}
			},
			{
				key: "_handleFocus",
				value: function _() {
					M.tabPressed && (this.isFocused = !0, this.open(!1))
				}
			},
			{
				key: "_handleBlur",
				value: function b() {
					this.isFocused = !1, this.close()
				}
			},
			{
				key: "_getAttributeOptions",
				value: function k() {
					var t = {},
						e = this.el.getAttribute("data-tooltip"),
						i = this.el.getAttribute("data-position");
					return e && (t.html = e), i && (t.position = i), t
				}
			}], [{
				key: "init",
				value: function C(t, e) {
					return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function w(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Tooltip
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), n
		}(Component);
	M.Tooltip = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "tooltip", "M_Tooltip")
}(cash, M.anime), function(t) {
	"use strict";

	function e(t) {
		return null !== t && t === t.window
	}
	function i(t) {
		return e(t) ? t : 9 === t.nodeType && t.defaultView
	}
	function n(t) {
		var e, n, s = {
			top: 0,
			left: 0
		},
			o = t && t.ownerDocument;
		return e = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (s = t.getBoundingClientRect()), n = i(o), {
			top: s.top + n.pageYOffset - e.clientTop,
			left: s.left + n.pageXOffset - e.clientLeft
		}
	}
	function s(t) {
		var e = "";
		for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
		return e
	}
	function o(t) {
		if (d.allowEvent(t) === !1) return null;
		for (var e = null, i = t.target || t.srcElement; null !== i.parentNode;) {
			if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) {
				e = i;
				break
			}
			i = i.parentNode
		}
		return e
	}
	function a(e) {
		var i = o(e);
		null !== i && (h.show(e, i), "ontouchstart" in t && (i.addEventListener("touchend", h.hide, !1), i.addEventListener("touchcancel", h.hide, !1)), i.addEventListener("mouseup", h.hide, !1), i.addEventListener("mouseleave", h.hide, !1), i.addEventListener("dragend", h.hide, !1))
	}
	var r = r || {},
		l = document.querySelectorAll.bind(document),
		h = {
			duration: 750,
			show: function(t, e) {
				if (2 === t.button) return !1;
				/*var i = e || this,
					o = document.createElement("div");
				o.className = "waves-ripple", i.appendChild(o);
				var a = n(i),
					r = t.pageY - a.top,
					l = t.pageX - a.left,
					d = "scale(" + i.clientWidth / 100 * 10 + ")";
				"touches" in t && (r = t.touches[0].pageY - a.top, l = t.touches[0].pageX - a.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", d), o.setAttribute("data-x", l), o.setAttribute("data-y", r);
				var u = {
					top: r + "px",
					left: l + "px"
				};
				
				o.className = o.className + " waves-notransition", o.setAttribute("style", s(u)), o.className = o.className.replace("waves-notransition", ""), u["-webkit-transform"] = d, u["-moz-transform"] = d, u["-ms-transform"] = d, u["-o-transform"] = d, u.transform = d, u.opacity = "1", u["-webkit-transition-duration"] = h.duration + "ms", u["-moz-transition-duration"] = h.duration + "ms", u["-o-transition-duration"] = h.duration + "ms", u["transition-duration"] = h.duration + "ms", u["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", u["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", u["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", u["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", s(u))*/
			},
			
			hide: function(t) {
				d.touchup(t);
				var e = this,
					i = 1.4 * e.clientWidth,
					n = null,
					o = e.getElementsByClassName("waves-ripple");
				if (!(o.length > 0)) return !1;
				n = o[o.length - 1];
				var a = n.getAttribute("data-x"),
					r = n.getAttribute("data-y"),
					l = n.getAttribute("data-scale"),
					u = Date.now() - Number(n.getAttribute("data-hold")),
					c = 350 - u;
				0 > c && (c = 0), setTimeout(function() {
					var t = {
						top: r + "px",
						left: a + "px",
						opacity: "0",
						"-webkit-transition-duration": h.duration + "ms",
						"-moz-transition-duration": h.duration + "ms",
						"-o-transition-duration": h.duration + "ms",
						"transition-duration": h.duration + "ms",
						"-webkit-transform": l,
						"-moz-transform": l,
						"-ms-transform": l,
						"-o-transform": l,
						transform: l
					};
					
					n.setAttribute("style", s(t)), setTimeout(function() {
						try {
							e.removeChild(n)
						} catch (t) {
							return !1
						}
					}, h.duration)
				}, c)
			},
			
			wrapInput: function(t) {
				for (var e = 0; e < t.length; e++) {
					var i = t[e];
					if ("input" === i.tagName.toLowerCase()) {
						var n = i.parentNode;
						if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect")) continue;
						var s = document.createElement("i");
						s.className = i.className + " waves-input-wrapper";
						var o = i.getAttribute("style");
						o || (o = ""), s.setAttribute("style", o), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(s, i), s.appendChild(i)
					}
				}
			}
		},
		d = {
			touches: 0,
			allowEvent: function(t) {
				var e = !0;
				return "touchstart" === t.type ? d.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
					d.touches > 0 && (d.touches -= 1)
				}, 500) : "mousedown" === t.type && d.touches > 0 && (e = !1), e
			},
			
			touchup: function(t) {
				d.allowEvent(t)
			}
		};
	
	r.displayEffect = function(e) {
		e = e || {}, "duration" in e && (h.duration = e.duration), h.wrapInput(l(".waves-effect")), "ontouchstart" in t && document.body.addEventListener("touchstart", a, !1), document.body.addEventListener("mousedown", a, !1)
	}, r.attach = function(e) {
		"input" === e.tagName.toLowerCase() && (h.wrapInput([e]), e = e.parentNode), "ontouchstart" in t && e.addEventListener("touchstart", a, !1), e.addEventListener("mousedown", a, !1)
	}, t.Waves = r, document.addEventListener("DOMContentLoaded", function() {
		r.displayEffect()
	}, !1)
}(window), function($, t) {
	"use strict";
	var e = {
		html: "",
		displayLength: 4e3,
		inDuration: 300,
		outDuration: 375,
		classes: "",
		completeCallback: null,
		activationPercent: .8
	},
		i = function() {
			function i(t) {
				_classCallCheck(this, i), this.options = $.extend({}, i.defaults, t), this.message = this.options.html, this.panning = !1, this.timeRemaining = this.options.displayLength, 0 === i._toasts.length && i._createContainer(), i._toasts.push(this);
				var e = this._createToast();
				
				e.M_Toast = this, this.el = e, this.$el = $(e), this._animateIn(), this._setTimer()
			}
			return _createClass(i, [{
				key: "_createToast",
				value: function n() {
					var t = document.createElement("div");
					return t.classList.add("toast"), this.options.classes.length && $(t).addClass(this.options.classes), ("object" == typeof HTMLElement ? this.message instanceof HTMLElement : this.message && "object" == typeof this.message && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? t.appendChild(this.message) : this.message.jquery ? $(t).append(this.message[0]) : t.innerHTML = this.message, i._container.appendChild(t), t
				}
			},
			{
				key: "_animateIn",
				value: function s() {
					t({
						targets: this.el,
						top: 0,
						opacity: 1,
						duration: this.options.inDuration,
						easing: "easeOutCubic"
					})
				}
			},
			{
				key: "_setTimer",
				value: function o() {
					var t = this;
					this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function() {
						t.panning || (t.timeRemaining -= 20), t.timeRemaining <= 0 && t.dismiss()
					}, 20))
				}
			},
			{
				key: "dismiss",
				value: function a() {
					var e = this;
					window.clearInterval(this.counterInterval);
					var n = this.el.offsetWidth * this.options.activationPercent;
					this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s", this.el.style.transform = "translateX(" + n + "px)", this.el.style.opacity = 0), t({
						targets: this.el,
						opacity: 0,
						marginTop: -40,
						duration: this.options.outDuration,
						easing: "easeOutExpo",
						complete: function() {
							"function" == typeof e.options.completeCallback && e.options.completeCallback(), e.$el.remove(), i._toasts.splice(i._toasts.indexOf(e), 1), 0 === i._toasts.length && i._removeContainer()
						}
					})
				}
			}], [{
				key: "getInstance",
				value: function r(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Toast
				}
			},
			{
				key: "_createContainer",
				value: function l() {
					var t = document.createElement("div");
					t.setAttribute("id", "toast-container"), t.addEventListener("touchstart", i._onDragStart), t.addEventListener("touchmove", i._onDragMove), t.addEventListener("touchend", i._onDragEnd), t.addEventListener("mousedown", i._onDragStart), document.addEventListener("mousemove", i._onDragMove), document.addEventListener("mouseup", i._onDragEnd), document.body.appendChild(t), i._container = t
				}
			},
			{
				key: "_removeContainer",
				value: function h() {
					document.removeEventListener("mousemove", i._onDragMove), document.removeEventListener("mouseup", i._onDragEnd), $(i._container).remove(), i._container = null
				}
			},
			{
				key: "_onDragStart",
				value: function d(t) {
					if (t.target && $(t.target).closest(".toast").length) {
						var e = $(t.target).closest(".toast"),
							n = e[0].M_Toast;
						n.panning = !0, i._draggedToast = n, n.el.classList.add("panning"), n.el.style.transition = "", n.startingXPos = i._xPos(t), n.time = Date.now(), n.xPos = i._xPos(t)
					}
				}
			},
			{
				key: "_onDragMove",
				value: function u(t) {
					if (i._draggedToast) {
						t.preventDefault();
						
						var e = i._draggedToast;
						e.deltaX = Math.abs(e.xPos - i._xPos(t)), e.xPos = i._xPos(t), e.velocityX = e.deltaX / (Date.now() - e.time), e.time = Date.now();
						
						var n = e.xPos - e.startingXPos,
							s = e.el.offsetWidth * e.options.activationPercent;
						e.el.style.transform = "translateX(" + n + "px)", e.el.style.opacity = 1 - Math.abs(n / s)
					}
				}
			},
			{
				key: "_onDragEnd",
				value: function c() {
					if (i._draggedToast) {
						var t = i._draggedToast;
						t.panning = !1, t.el.classList.remove("panning");
						var e = t.xPos - t.startingXPos,
							n = t.el.offsetWidth * t.options.activationPercent,
							s = Math.abs(e) > n || t.velocityX > 1;
						s ? (t.wasSwiped = !0, t.dismiss()) : (t.el.style.transition = "transform .2s, opacity .2s", t.el.style.transform = "", t.el.style.opacity = ""), i._draggedToast = null
					}
				}
			},
			{
				key: "_xPos",
				value: function p(t) {
					return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
				}
			},
			{
				key: "dismissAll",
				value: function v() {
					for (var t in i._toasts) i._toasts[t].dismiss()
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), i
		}();
	
	i._toasts = [], i._container = null, i._draggedToast = null, M.Toast = i, M.toast = function(t) {
		return new i(t)
	}
}(cash, M.anime), function($, t) {
	"use strict";
	var e = {
		edge: "left",
		draggable: !0,
		inDuration: 250,
		outDuration: 200,
		onOpenStart: null,
		onOpenEnd: null,
		onCloseStart: null,
		onCloseEnd: null,
		preventScrolling: !0
	},
		i = function(i) {
			function n(t, e) {
				_classCallCheck(this, n);
				var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
				return i.el.M_Sidenav = i, i.id = i.$el.attr("id"), i.options = $.extend({}, n.defaults, e), i.isOpen = !1, i.isFixed = i.el.classList.contains("sidenav-fixed"), i.isDragged = !1, i.lastWindowWidth = window.innerWidth, i.lastWindowHeight = window.innerHeight, i._createOverlay(), i._createDragTarget(), i._setupEventHandlers(), i._setupClasses(), i._setupFixed(), n._sidenavs.push(i), i
			}
			return _inherits(n, i), _createClass(n, [{
				key: "destroy",
				value: function s() {
					this._removeEventHandlers(), this._enableBodyScrolling(), this._overlay.parentNode.removeChild(this._overlay), this.dragTarget.parentNode.removeChild(this.dragTarget), this.el.M_Sidenav = void 0, this.el.style.transform = "";
					var t = n._sidenavs.indexOf(this);
					t >= 0 && n._sidenavs.splice(t, 1)
				}
			},
			{
				key: "_createOverlay",
				value: function o() {
					var t = document.createElement("div");
					this._closeBound = this.close.bind(this), t.classList.add("sidenav-overlay"), t.addEventListener("click", this._closeBound), document.body.appendChild(t), this._overlay = t
				}
			},
			{
				key: "_setupEventHandlers",
				value: function a() {
					0 === n._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick), this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this), this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this), this._handleCloseDragBound = this._handleCloseDrag.bind(this), this._handleCloseReleaseBound = this._handleCloseRelease.bind(this), this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this), this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.addEventListener("touchmove", this._handleCloseDragBound), this._overlay.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("touchmove", this._handleCloseDragBound), this.el.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound))
				}
			},
			{
				key: "_removeEventHandlers",
				value: function r() {
					1 === n._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick), this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.removeEventListener("touchmove", this._handleCloseDragBound), this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("touchmove", this._handleCloseDragBound), this.el.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound)
				}
			},
			{
				key: "_handleTriggerClick",
				value: function l(t) {
					var e = $(t.target).closest(".sidenav-trigger");
					if (t.target && e.length) {
						var i = M.getIdFromTrigger(e[0]),
							n = document.getElementById(i).M_Sidenav;
						n && n.open(e), t.preventDefault()
					}
				}
			},
			{
				key: "_startDrag",
				value: function h(e) {
					var i = e.targetTouches[0].clientX;
					this.isDragged = !0, this._startingXpos = i, this._xPos = this._startingXpos, this._time = Date.now(), this._width = this.el.getBoundingClientRect().width, this._overlay.style.display = "block", this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(), this._verticallyScrolling = !1, t.remove(this.el), t.remove(this._overlay)
				}
			},
			{
				key: "_dragMoveUpdate",
				value: function d(t) {
					var e = t.targetTouches[0].clientX,
						i = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
					
					this.deltaX = Math.abs(this._xPos - e), this._xPos = e, this.velocityX = this.deltaX / (Date.now() - this._time), this._time = Date.now(), this._initialScrollTop !== i && (this._verticallyScrolling = !0)
				}
			},
			{
				key: "_handleDragTargetDrag",
				value: function u(t) {
					if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
						this.isDragged || this._startDrag(t), this._dragMoveUpdate(t);
						var e = this._xPos - this._startingXpos,
							i = e > 0 ? "right" : "left";
						e = Math.min(this._width, Math.abs(e)), this.options.edge === i && (e = 0);
						var n = e,
							s = "translateX(-100%)";
						"right" === this.options.edge && (s = "translateX(100%)", n = -n), this.percentOpen = Math.min(1, e / this._width), this.el.style.transform = s + " translateX(" + n + "px)", this._overlay.style.opacity = this.percentOpen
					}
				}
			},
			{
				key: "_handleDragTargetRelease",
				value: function c() {
					this.isDragged && (this.percentOpen > .2 ? this.open() : this._animateOut(), this.isDragged = !1, this._verticallyScrolling = !1)
				}
			},
			{
				key: "_handleCloseDrag",
				value: function p(t) {
					if (this.isOpen) {
						if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) return;
						this.isDragged || this._startDrag(t), this._dragMoveUpdate(t);
						var e = this._xPos - this._startingXpos,
							i = e > 0 ? "right" : "left";
						e = Math.min(this._width, Math.abs(e)), this.options.edge !== i && (e = 0);
						var n = -e;
						"right" === this.options.edge && (n = -n), this.percentOpen = Math.min(1, 1 - e / this._width), this.el.style.transform = "translateX(" + n + "px)", this._overlay.style.opacity = this.percentOpen
					}
				}
			},
			{
				key: "_handleCloseRelease",
				value: function v() {
					this.isOpen && this.isDragged && (this.percentOpen > .8 ? this._animateIn() : this.close(), this.isDragged = !1, this._verticallyScrolling = !1)
				}
			},
			{
				key: "_handleCloseTriggerClick",
				value: function f(t) {
					var e = $(t.target).closest(".sidenav-close");
					e.length && !this._isCurrentlyFixed() && this.close()
				}
			},
			{
				key: "_handleWindowResize",
				value: function m() {
					this.lastWindowWidth !== window.innerWidth && (window.innerWidth > 992 ? this.open() : this.close()), this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight
				}
			},
			{
				key: "_setupClasses",
				value: function g() {
					"right" === this.options.edge && (this.el.classList.add("right-aligned"), this.dragTarget.classList.add("right-aligned"))
				}
			},
			{
				key: "_removeClasses",
				value: function y() {
					this.el.classList.remove("right-aligned"), this.dragTarget.classList.remove("right-aligned")
				}
			},
			{
				key: "_setupFixed",
				value: function _() {
					this._isCurrentlyFixed() && this.open()
				}
			},
			{
				key: "_isCurrentlyFixed",
				value: function b() {
					return this.isFixed && window.innerWidth > 992
				}
			},
			{
				key: "_createDragTarget",
				value: function k() {
					var t = document.createElement("div");
					t.classList.add("drag-target"), document.body.appendChild(t), this.dragTarget = t
				}
			},
			{
				key: "_preventBodyScrolling",
				value: function C() {
					var t = document.body;
					t.style.overflow = "hidden"
				}
			},
			{
				key: "_enableBodyScrolling",
				value: function w() {
					var t = document.body;
					t.style.overflow = ""
				}
			},
			{
				key: "open",
				value: function E() {
					this.isOpen !== !0 && (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._isCurrentlyFixed() ? (t.remove(this.el), t({
						targets: this.el,
						translateX: 0,
						duration: 0,
						easing: "easeOutQuad"
					}), this._enableBodyScrolling(), this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(), this.isDragged && 1 == this.percentOpen || this._animateIn()))
				}
			},
			{
				key: "close",
				value: function x() {
					if (this.isOpen !== !1) if (this.isOpen = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._isCurrentlyFixed()) {
						var t = "left" === this.options.edge ? "-105%" : "105%";
						this.el.style.transform = "translateX(" + t + ")"
					} else this._enableBodyScrolling(), this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut()
				}
			},
			{
				key: "_animateIn",
				value: function O() {
					this._animateSidenavIn(), this._animateOverlayIn()
				}
			},
			{
				key: "_animateSidenavIn",
				value: function T() {
					var e = this,
						i = "left" === this.options.edge ? -1 : 1;
					this.isDragged && (i = "left" === this.options.edge ? i + this.percentOpen : i - this.percentOpen), t.remove(this.el), t({
						targets: this.el,
						translateX: [100 * i + "%", 0],
						duration: this.options.inDuration,
						easing: "easeOutQuad",
						complete: function() {
							"function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el)
						}
					})
				}
			},
			{
				key: "_animateOverlayIn",
				value: function L() {
					var e = 0;
					this.isDragged ? e = this.percentOpen : $(this._overlay).css({
						display: "block"
					}), t.remove(this._overlay), t({
						targets: this._overlay,
						opacity: [e, 1],
						duration: this.options.inDuration,
						easing: "easeOutQuad"
					})
				}
			},
			{
				key: "_animateOut",
				value: function B() {
					this._animateSidenavOut(), this._animateOverlayOut()
				}
			},
			{
				key: "_animateSidenavOut",
				value: function D() {
					var e = this,
						i = "left" === this.options.edge ? -1 : 1,
						n = 0;
					this.isDragged && (n = "left" === this.options.edge ? i + this.percentOpen : i - this.percentOpen), t.remove(this.el), t({
						targets: this.el,
						translateX: [100 * n + "%", 105 * i + "%"],
						duration: this.options.outDuration,
						easing: "easeOutQuad",
						complete: function() {
							"function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el)
						}
					})
				}
			},
			{
				key: "_animateOverlayOut",
				value: function S() {
					var e = this;
					t.remove(this._overlay), t({
						targets: this._overlay,
						opacity: 0,
						duration: this.options.outDuration,
						easing: "easeOutQuad",
						complete: function() {
							$(e._overlay).css("display", "none")
						}
					})
				}
			}], [{
				key: "init",
				value: function I(t, e) {
					return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function A(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Sidenav
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), n
		}(Component);
	i._sidenavs = [], window.M.Sidenav = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "sidenav", "M_Sidenav")
}(cash, M.anime), function($, t) {
	"use strict";
	var e = {
		throttle: 100,
		scrollOffset: 200,
		activeClass: "active",
		getActiveElement: function(t) {
			return 'a[href="#' + t + '"]'
		}
	},
		i = function(i) {
			function n(t, e) {
				_classCallCheck(this, n);
				var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
				return i.el.M_ScrollSpy = i, i.options = $.extend({}, n.defaults, e), n._elements.push(i), n._count++, n._increment++, i.tickId = -1, i.id = n._increment, i._setupEventHandlers(), i._handleWindowScroll(), i
			}
			return _inherits(n, i), _createClass(n, [{
				key: "destroy",
				value: function s() {
					n._elements.splice(n._elements.indexOf(this), 1), n._elementsInView.splice(n._elementsInView.indexOf(this), 1), n._visibleElements.splice(n._visibleElements.indexOf(this.$el), 1), n._count--, this._removeEventHandlers(), $(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass), this.el.M_ScrollSpy = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function o() {
					var t = M.throttle(this._handleWindowScroll, 200);
					this._handleThrottledResizeBound = t.bind(this), this._handleWindowScrollBound = this._handleWindowScroll.bind(this), 1 === n._count && (window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleThrottledResizeBound), document.body.addEventListener("click", this._handleTriggerClick))
				}
			},
			{
				key: "_removeEventHandlers",
				value: function a() {
					0 === n._count && (window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleThrottledResizeBound), document.body.removeEventListener("click", this._handleTriggerClick))
				}
			},
			{
				key: "_handleTriggerClick",
				value: function r(e) {
					for (var i = $(e.target), s = n._elements.length - 1; s >= 0; s--) {
						var o = n._elements[s];
						if (i.is('a[href="#' + o.$el.attr("id") + '"]')) {
							e.preventDefault();
							
							var a = o.$el.offset().top + 1;
							t({
								targets: [document.documentElement, document.body],
								scrollTop: a - o.options.scrollOffset,
								duration: 400,
								easing: "easeOutCubic"
							});
							
							break
						}
					}
				}
			},
			{
				key: "_handleWindowScroll",
				value: function l() {
					n._ticks++;
					for (var t = M.getDocumentScrollTop(), e = M.getDocumentScrollLeft(), i = e + window.innerWidth, s = t + window.innerHeight, o = n._findElements(t, i, s, e), a = 0; a < o.length; a++) {
						var r = o[a],
							l = r.tickId;
						0 > l && r._enter(), r.tickId = n._ticks
					}
					for (var h = 0; h < n._elementsInView.length; h++) {
						var d = n._elementsInView[h],
							u = d.tickId;
						u >= 0 && u !== n._ticks && (d._exit(), d.tickId = -1)
					}
					n._elementsInView = o
				}
			},
			{
				key: "_enter",
				value: function h() {
					n._visibleElements = n._visibleElements.filter(function(t) {
						return 0 != t.height()
					}), n._visibleElements[0] ? ($(this.options.getActiveElement(n._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), n._visibleElements[0][0].M_ScrollSpy && this.id < n._visibleElements[0][0].M_ScrollSpy.id ? n._visibleElements.unshift(this.$el) : n._visibleElements.push(this.$el)) : n._visibleElements.push(this.$el), $(this.options.getActiveElement(n._visibleElements[0].attr("id"))).addClass(this.options.activeClass)
				}
			},
			{
				key: "_exit",
				value: function d() {
					var t = this;
					n._visibleElements = n._visibleElements.filter(function(t) {
						return 0 != t.height()
					}), n._visibleElements[0] && ($(this.options.getActiveElement(n._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), n._visibleElements = n._visibleElements.filter(function(e) {
						return e.attr("id") != t.$el.attr("id")
					}), n._visibleElements[0] && $(this.options.getActiveElement(n._visibleElements[0].attr("id"))).addClass(this.options.activeClass))
				}
			}], [{
				key: "init",
				value: function u(t, e) {
					return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function c(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_ScrollSpy
				}
			},
			{
				key: "_findElements",
				value: function p(t, e, i, s) {
					for (var o = [], a = 0; a < n._elements.length; a++) {
						var r = n._elements[a],
							l = t + r.options.scrollOffset || 200;
						if (r.$el.height() > 0) {
							var h = r.$el.offset().top,
								d = r.$el.offset().left,
								u = d + r.$el.width(),
								c = h + r.$el.height(),
								p = !(d > e || s > u || h > i || l > c);
							p && o.push(r)
						}
					}
					return o
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), n
		}(Component);
	i._elements = [], i._elementsInView = [], i._visibleElements = [], i._count = 0, i._increment = 0, i._ticks = 0, M.ScrollSpy = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "scrollSpy", "M_ScrollSpy")
}(cash, M.anime), function($) {
	"use strict";
	var t = {
		data: {},
		
		limit: 1 / 0,
		onAutocomplete: null,
		minLength: 1,
		sortFunction: function(t, e, i) {
			return t.indexOf(i) - e.indexOf(i)
		}
	},
		e = function(e) {
			function i(t, e) {
				_classCallCheck(this, i);
				var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
				return n.el.M_Autocomplete = n, n.options = $.extend({}, i.defaults, e), n.isOpen = !1, n.count = 0, n.activeIndex = -1, n.oldVal, n.$inputField = n.$el.closest(".input-field"), n.$active = $(), n._mousedown = !1, n._setupDropdown(), n._setupEventHandlers(), n
			}
			return _inherits(i, e), _createClass(i, [{
				key: "destroy",
				value: function n() {
					this._removeEventHandlers(), this._removeDropdown(), this.el.M_Autocomplete = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function s() {
					this._handleInputBlurBound = this._handleInputBlur.bind(this), this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this), this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this), this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this), this.el.addEventListener("blur", this._handleInputBlurBound), this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound), this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.el.addEventListener("click", this._handleInputClickBound), this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound), "undefined" != typeof window.ontouchstart && (this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
				}
			},
			{
				key: "_removeEventHandlers",
				value: function o() {
					this.el.removeEventListener("blur", this._handleInputBlurBound), this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound), this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound), this.el.removeEventListener("click", this._handleInputClickBound), this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound), "undefined" != typeof window.ontouchstart && (this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
				}
			},
			{
				key: "_setupDropdown",
				value: function a() {
					var t = this;
					this.container = document.createElement("ul"), this.container.id = "autocomplete-options-" + M.guid(), $(this.container).addClass("autocomplete-content dropdown-content"), this.$inputField.append(this.container), this.el.setAttribute("data-target", this.container.id), this.dropdown = M.Dropdown.init(this.el, {
						autoFocus: !1,
						closeOnClick: !1,
						coverTrigger: !1,
						onItemClick: function(e) {
							t.selectOption($(e))
						}
					}), this.el.removeEventListener("click", this.dropdown._handleClickBound)
				}
			},
			{
				key: "_removeDropdown",
				value: function r() {
					this.container.parentNode.removeChild(this.container)
				}
			},
			{
				key: "_handleInputBlur",
				value: function l() {
					this._mousedown || (this.close(), this._resetAutocomplete())
				}
			},
			{
				key: "_handleInputKeyupAndFocus",
				value: function h(t) {
					"keyup" === t.type && (i._keydown = !1), this.count = 0;
					var e = this.el.value.toLowerCase();
					
					13 !== t.keyCode && 38 !== t.keyCode && 40 !== t.keyCode && (this.oldVal === e || !M.tabPressed && "focus" === t.type || this.open(), this.oldVal = e)
				}
			},
			{
				key: "_handleInputKeydown",
				value: function d(t) {
					i._keydown = !0;
					var e = t.keyCode,
						n = void 0,
						s = $(this.container).children("li").length;
					return e === M.keys.ENTER && this.activeIndex >= 0 ? (n = $(this.container).children("li").eq(this.activeIndex), void(n.length && (this.selectOption(n), t.preventDefault()))) : void((e === M.keys.ARROW_UP || e === M.keys.ARROW_DOWN) && (t.preventDefault(), e === M.keys.ARROW_UP && this.activeIndex > 0 && this.activeIndex--, e === M.keys.ARROW_DOWN && this.activeIndex < s - 1 && this.activeIndex++, this.$active.removeClass("active"), this.activeIndex >= 0 && (this.$active = $(this.container).children("li").eq(this.activeIndex), this.$active.addClass("active"))))
				}
			},
			{
				key: "_handleInputClick",
				value: function u(t) {
					this.open()
				}
			},
			{
				key: "_handleContainerMousedownAndTouchstart",
				value: function c(t) {
					this._mousedown = !0
				}
			},
			{
				key: "_handleContainerMouseupAndTouchend",
				value: function p(t) {
					this._mousedown = !1
				}
			},
			{
				key: "_highlight",
				value: function v(t, e) {
					var i = e.find("img"),
						n = e.text().toLowerCase().indexOf("" + t.toLowerCase()),
						s = n + t.length - 1,
						o = e.text().slice(0, n),
						a = e.text().slice(n, s + 1),
						r = e.text().slice(s + 1);
					e.html("<span>" + o + "<span class='highlight'>" + a + "</span>" + r + "</span>"), i.length && e.prepend(i)
				}
			},
			{
				key: "_resetCurrentElement",
				value: function f() {
					this.activeIndex = -1, this.$active.removeClass("active")
				}
			},
			{
				key: "_resetAutocomplete",
				value: function m() {
					$(this.container).empty(), this._resetCurrentElement(), this.oldVal = null, this.isOpen = !1, this._mousedown = !1
				}
			},
			{
				key: "selectOption",
				value: function g(t) {
					var e = t.text().trim();
					
					this.el.value = e, this.$el.trigger("change"), this._resetAutocomplete(), this.close(), "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, e)
				}
			},
			{
				key: "_renderDropdown",
				value: function y(t, e) {
					var i = this;
					this._resetAutocomplete();
					
					var n = [];
					for (var s in t) if (t.hasOwnProperty(s) && -1 !== s.toLowerCase().indexOf(e)) {
						if (this.count >= this.options.limit) break;
						var o = {
							data: t[s],
							key: s
						};
						
						n.push(o), this.count++
					}
					if (this.options.sortFunction) {
						var a = function(t, n) {
							return i.options.sortFunction(t.key.toLowerCase(), n.key.toLowerCase(), e.toLowerCase())
						};
						
						n.sort(a)
					}
					for (var r = 0; r < n.length; r++) {
						var l = n[r],
							h = $("<li></li>");
						l.data ? h.append('<img src="' + l.data + '" class="right circle"><span>' + l.key + "</span>") : h.append("<span>" + l.key + "</span>"), $(this.container).append(h), this._highlight(e, h)
					}
				}
			},
			{
				key: "open",
				value: function _() {
					var t = this.el.value.toLowerCase();
					
					this._resetAutocomplete(), t.length >= this.options.minLength && (this.isOpen = !0, this._renderDropdown(this.options.data, t)), this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open()
				}
			},
			{
				key: "close",
				value: function b() {
					this.dropdown.close()
				}
			},
			{
				key: "updateData",
				value: function k(t) {
					var e = this.el.value.toLowerCase();
					
					this.options.data = t, this.isOpen && this._renderDropdown(t, e)
				}
			}], [{
				key: "init",
				value: function C(t, e) {
					return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function w(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Autocomplete
				}
			},
			{
				key: "defaults",
				get: function() {
					return t
				}
			}]), i
		}(Component);
	e._keydown = !1, M.Autocomplete = e, M.jQueryLoaded && M.initializeJqueryWrapper(e, "autocomplete", "M_Autocomplete")
}(cash), function($) {
	M.updateTextFields = function() {
		var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
		$(t).each(function(t, e) {
			var i = $(this);
			t.value.length > 0 || $(t).is(":focus") || t.autofocus || null !== i.attr("placeholder") ? i.siblings("label").addClass("active") : t.validity ? i.siblings("label").toggleClass("active", t.validity.badInput === !0) : i.siblings("label").removeClass("active")
		})
	}, M.validate_field = function(t) {
		var e = null !== t.attr("data-length"),
			i = parseInt(t.attr("data-length")),
			n = t[0].value.length;
		0 !== n || t[0].validity.badInput !== !1 || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && i >= n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid"))
	}, M.textareaAutoResize = function(t) {
		if (t instanceof Element && (t = $(t)), !t.length) return void console.error("No textarea element found");
		var e = $(".hiddendiv").first();
		
		e.length || (e = $('<div class="hiddendiv common"></div>'), $("body").append(e));
		var i = t.css("font-family"),
			n = t.css("font-size"),
			s = t.css("line-height"),
			o = t.css("padding-top"),
			a = t.css("padding-right"),
			r = t.css("padding-bottom"),
			l = t.css("padding-left");
		n && e.css("font-size", n), i && e.css("font-family", i), s && e.css("line-height", s), o && e.css("padding-top", o), a && e.css("padding-right", a), r && e.css("padding-bottom", r), l && e.css("padding-left", l), t.data("original-height") || t.data("original-height", t.height()), "off" === t.attr("wrap") && e.css("overflow-wrap", "normal").css("white-space", "pre"), e.text(t[0].value + "\n");
		var h = e.html().replace(/\n/g, "<br>");
		e.html(h), t[0].offsetWidth > 0 && t[0].offsetHeight > 0 ? e.css("width", t.width() + "px") : e.css("width", window.innerWidth / 2 + "px"), t.data("original-height") <= e.innerHeight() ? t.css("height", e.innerHeight() + "px") : t[0].value.length < t.data("previous-length") && t.css("height", t.data("original-height") + "px"), t.data("previous-length", t[0].value.length)
	}, $(document).ready(function() {
		var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
		$(document).on("change", t, function() {
			(0 !== this.value.length || null !== $(this).attr("placeholder")) && $(this).siblings("label").addClass("active"), M.validate_field($(this))
		}), $(document).ready(function() {
			M.updateTextFields()
		}), $(document).on("reset", function(e) {
			var i = $(e.target);
			i.is("form") && (i.find(t).removeClass("valid").removeClass("invalid"), i.find(t).each(function(t) {
				this.value.length && $(this).siblings("label").removeClass("active")
			}), setTimeout(function() {
				i.find("select").each(function() {
					this.M_FormSelect && $(this).trigger("change")
				})
			}, 0))
		}), document.addEventListener("focus", function(e) {
			$(e.target).is(t) && $(e.target).siblings("label, .prefix").addClass("active")
		}, !0), document.addEventListener("blur", function(e) {
			var i = $(e.target);
			if (i.is(t)) {
				var n = ".prefix";
				0 === i[0].value.length && i[0].validity.badInput !== !0 && null === i.attr("placeholder") && (n += ", label"), i.siblings(n).removeClass("active"), M.validate_field(i)
			}
		}, !0);
		var e = "input[type=radio], input[type=checkbox]";
		$(document).on("keyup", e, function(t) {
			if (t.which === M.keys.TAB) {
				$(this).addClass("tabbed");
				var e = $(this);
				return void e.one("blur", function(t) {
					$(this).removeClass("tabbed")
				})
			}
		});
		
		var i = ".materialize-textarea";
		$(i).each(function() {
			var t = $(this);
			t.data("original-height", t.height()), t.data("previous-length", this.value.length), M.textareaAutoResize(t)
		}), $(document).on("keyup", i, function() {
			M.textareaAutoResize($(this))
		}), $(document).on("keydown", i, function() {
			M.textareaAutoResize($(this))
		}), $(document).on("change", '.file-field input[type="file"]', function() {
			for (var t = $(this).closest(".file-field"), e = t.find("input.file-path"), i = $(this)[0].files, n = [], s = 0; s < i.length; s++) n.push(i[s].name);
			e[0].value = n.join(", "), e.trigger("change")
		})
	})
}(cash), function($, t) {
	"use strict";
	var e = {
		indicators: !0,
		height: 400,
		duration: 500,
		interval: 6e3
	},
		i = function(i) {
			function n(e, i) {
				_classCallCheck(this, n);
				var s = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
				return s.el.M_Slider = s, s.options = $.extend({}, n.defaults, i), s.$slider = s.$el.find(".slides"), s.$slides = s.$slider.children("li"), s.activeIndex = s.$slides.filter(function(t) {
					return $(t).hasClass("active")
				}).first().index(), -1 != s.activeIndex && (s.$active = s.$slides.eq(s.activeIndex)), s._setSliderHeight(), s.$slides.find(".caption").each(function(t) {
					s._animateCaptionIn(t, 0)
				}), s.$slides.find("img").each(function(t) {
					var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
					$(t).attr("src") !== e && ($(t).css("background-image", 'url("' + $(t).attr("src") + '")'), $(t).attr("src", e))
				}), s._setupIndicators(), s.$active ? s.$active.css("display", "block") : (s.$slides.first().addClass("active"), t({
					targets: s.$slides.first()[0],
					opacity: 1,
					duration: s.options.duration,
					easing: "easeOutQuad"
				}), s.activeIndex = 0, s.$active = s.$slides.eq(s.activeIndex), s.options.indicators && s.$indicators.eq(s.activeIndex).addClass("active")), s.$active.find("img").each(function(e) {
					t({
						targets: s.$active.find(".caption")[0],
						opacity: 1,
						translateX: 0,
						translateY: 0,
						duration: s.options.duration,
						easing: "easeOutQuad"
					})
				}), s._setupEventHandlers(), s.start(), s
			}
			return _inherits(n, i), _createClass(n, [{
				key: "destroy",
				value: function s() {
					this.pause(), this._removeIndicators(), this._removeEventHandlers(), this.el.M_Slider = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function o() {
					var t = this;
					this._handleIntervalBound = this._handleInterval.bind(this), this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.options.indicators && this.$indicators.each(function(e) {
						e.addEventListener("click", t._handleIndicatorClickBound)
					})
				}
			},
			{
				key: "_removeEventHandlers",
				value: function a() {
					var t = this;
					this.options.indicators && this.$indicators.each(function(e) {
						e.removeEventListener("click", t._handleIndicatorClickBound)
					})
				}
			},
			{
				key: "_handleIndicatorClick",
				value: function r(t) {
					var e = $(t.target).index();
					
					this.set(e)
				}
			},
			{
				key: "_handleInterval",
				value: function l() {
					var t = this.$slider.find(".active").index();
					
					this.$slides.length === t + 1 ? t = 0 : t += 1, this.set(t)
				}
			},
			{
				key: "_animateCaptionIn",
				value: function h(e, i) {
					var n = {
						targets: e,
						opacity: 0,
						duration: i,
						easing: "easeOutQuad"
					};
					
					$(e).hasClass("center-align") ? n.translateY = -100 : $(e).hasClass("right-align") ? n.translateX = 100 : $(e).hasClass("left-align") && (n.translateX = -100), t(n)
				}
			},
			{
				key: "_setSliderHeight",
				value: function d() {
					this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"), this.$slider.css("height", this.options.height + "px"))
				}
			},
			{
				key: "_setupIndicators",
				value: function u() {
					var t = this;
					this.options.indicators && (this.$indicators = $('<ul class="indicators"></ul>'), this.$slides.each(function(e, i) {
						var n = $('<li class="indicator-item"></li>');
						t.$indicators.append(n[0])
					}), this.$el.append(this.$indicators[0]), this.$indicators = this.$indicators.children("li.indicator-item"))
				}
			},
			{
				key: "_removeIndicators",
				value: function c() {
					this.$el.find("ul.indicators").remove()
				}
			},
			{
				key: "set",
				value: function p(e) {
					var i = this;
					if (e >= this.$slides.length ? e = 0 : 0 > e && (e = this.$slides.length - 1), this.activeIndex != e) {
						this.$active = this.$slides.eq(this.activeIndex);
						var n = this.$active.find(".caption");
						this.$active.removeClass("active"), t({
							targets: this.$active[0],
							opacity: 0,
							duration: this.options.duration,
							easing: "easeOutQuad",
							complete: function() {
								i.$slides.not(".active").each(function(e) {
									t({
										targets: e,
										opacity: 0,
										translateX: 0,
										translateY: 0,
										duration: 0,
										easing: "easeOutQuad"
									})
								})
							}
						}), this._animateCaptionIn(n[0], this.options.duration), this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"), this.$indicators.eq(e).addClass("active")), t({
							targets: this.$slides.eq(e)[0],
							opacity: 1,
							duration: this.options.duration,
							easing: "easeOutQuad"
						}), t({
							targets: this.$slides.eq(e).find(".caption")[0],
							opacity: 1,
							translateX: 0,
							translateY: 0,
							duration: this.options.duration,
							delay: this.options.duration,
							easing: "easeOutQuad"
						}), this.$slides.eq(e).addClass("active"), this.activeIndex = e, this.start()
					}
				}
			},
			{
				key: "pause",
				value: function v() {
					clearInterval(this.interval)
				}
			},
			{
				key: "start",
				value: function f() {
					clearInterval(this.interval), this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval)
				}
			},
			{
				key: "next",
				value: function m() {
					var t = this.activeIndex + 1;
					t >= this.$slides.length ? t = 0 : 0 > t && (t = this.$slides.length - 1), this.set(t)
				}
			},
			{
				key: "prev",
				value: function g() {
					var t = this.activeIndex - 1;
					t >= this.$slides.length ? t = 0 : 0 > t && (t = this.$slides.length - 1), this.set(t)
				}
			}], [{
				key: "init",
				value: function y(t, e) {
					return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function _(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Slider
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), n
		}(Component);
	M.Slider = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "slider", "M_Slider")
}(cash, M.anime), function($, t) {
	$(document).on("click", ".card", function(e) {
		if ($(this).children(".card-reveal").length) {
			var i = $(e.target).closest(".card");
			void 0 === i.data("initialOverflow") && i.data("initialOverflow", void 0 === i.css("overflow") ? "" : i.css("overflow"));
			var n = $(this).find(".card-reveal");
			$(e.target).is($(".card-reveal .card-title")) || $(e.target).is($(".card-reveal .card-title i")) ? t({
				targets: n[0],
				translateY: 0,
				duration: 225,
				easing: "easeInOutQuad",
				complete: function(t) {
					var e = t.animatables[0].target;
					$(e).css({
						display: "none"
					}), i.css("overflow", i.data("initialOverflow"))
				}
			}) : ($(e.target).is($(".card .activator")) || $(e.target).is($(".card .activator i"))) && (i.css("overflow", "hidden"), n.css({
				display: "block"
			}), t({
				targets: n[0],
				translateY: "-100%",
				duration: 300,
				easing: "easeInOutQuad"
			}))
		}
	})
}(cash, M.anime), function($) {
	"use strict";
	var t = {
		data: [],
		placeholder: "",
		secondaryPlaceholder: "",
		autocompleteOptions: {},
		
		limit: 1 / 0,
		onChipAdd: null,
		onChipSelect: null,
		onChipDelete: null
	},
		e = function(e) {
			function i(t, e) {
				_classCallCheck(this, i);
				var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
				return n.el.M_Chips = n, n.options = $.extend({}, i.defaults, e), n.$el.addClass("chips input-field"), n.chipsData = [], n.$chips = $(), n._setupInput(), n.hasAutocomplete = Object.keys(n.options.autocompleteOptions).length > 0, n.$input.attr("id") || n.$input.attr("id", M.guid()), n.options.data.length && (n.chipsData = n.options.data, n._renderChips(n.chipsData)), n.hasAutocomplete && n._setupAutocomplete(), n._setPlaceholder(), n._setupLabel(), n._setupEventHandlers(), n
			}
			return _inherits(i, e), _createClass(i, [{
				key: "getData",
				value: function n() {
					return this.chipsData
				}
			},
			{
				key: "destroy",
				value: function s() {
					this._removeEventHandlers(), this.$chips.remove(), this.el.M_Chips = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function o() {
					this._handleChipClickBound = this._handleChipClick.bind(this), this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputFocusBound = this._handleInputFocus.bind(this), this._handleInputBlurBound = this._handleInputBlur.bind(this), this.el.addEventListener("click", this._handleChipClickBound), document.addEventListener("keydown", i._handleChipsKeydown), document.addEventListener("keyup", i._handleChipsKeyup), this.el.addEventListener("blur", i._handleChipsBlur, !0), this.$input[0].addEventListener("focus", this._handleInputFocusBound), this.$input[0].addEventListener("blur", this._handleInputBlurBound), this.$input[0].addEventListener("keydown", this._handleInputKeydownBound)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function a() {
					this.el.removeEventListener("click", this._handleChipClickBound), document.removeEventListener("keydown", i._handleChipsKeydown), document.removeEventListener("keyup", i._handleChipsKeyup), this.el.removeEventListener("blur", i._handleChipsBlur, !0), this.$input[0].removeEventListener("focus", this._handleInputFocusBound), this.$input[0].removeEventListener("blur", this._handleInputBlurBound), this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound)
				}
			},
			{
				key: "_handleChipClick",
				value: function r(t) {
					var e = $(t.target).closest(".chip"),
						i = $(t.target).is(".close");
					if (e.length) {
						var n = e.index();
						
						i ? (this.deleteChip(n), this.$input[0].focus()) : this.selectChip(n)
					} else this.$input[0].focus()
				}
			},
			{
				key: "_handleInputFocus",
				value: function l() {
					this.$el.addClass("focus")
				}
			},
			{
				key: "_handleInputBlur",
				value: function h() {
					this.$el.removeClass("focus")
				}
			},
			{
				key: "_handleInputKeydown",
				value: function d(t) {
					if (i._keydown = !0, 13 === t.keyCode) {
						if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen) return;
						t.preventDefault(), this.addChip({
							tag: this.$input[0].value
						}), this.$input[0].value = ""
					} else 8 !== t.keyCode && 37 !== t.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (t.preventDefault(), this.selectChip(this.chipsData.length - 1))
				}
			},
			{
				key: "_renderChip",
				value: function u(t) {
					if (t.tag) {
						var e = document.createElement("div"),
							i = document.createElement("i");
						if (e.classList.add("chip"), e.textContent = t.tag, e.setAttribute("tabindex", 0), $(i).addClass("material-icons close"), i.textContent = "close", t.image) {
							var n = document.createElement("img");
							n.setAttribute("src", t.image), e.insertBefore(n, e.firstChild)
						}
						return e.appendChild(i), e
					}
				}
			},
			{
				key: "_renderChips",
				value: function c() {
					this.$chips.remove();
					
					for (var t = 0; t < this.chipsData.length; t++) {
						var e = this._renderChip(this.chipsData[t]);
						this.$el.append(e), this.$chips.add(e)
					}
					this.$el.append(this.$input[0])
				}
			},
			{
				key: "_setupAutocomplete",
				value: function p() {
					var t = this;
					this.options.autocompleteOptions.onAutocomplete = function(e) {
						t.addChip({
							tag: e
						}), t.$input[0].value = "", t.$input[0].focus()
					}, this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions)
				}
			},
			{
				key: "_setupInput",
				value: function v() {
					this.$input = this.$el.find("input"), this.$input.length || (this.$input = $("<input></input>"), this.$el.append(this.$input)), this.$input.addClass("input")
				}
			},
			{
				key: "_setupLabel",
				value: function f() {
					this.$label = this.$el.find("label"), this.$label.length && this.$label.setAttribute("for", this.$input.attr("id"))
				}
			},
			{
				key: "_setPlaceholder",
				value: function m() {
					void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? $(this.$input).prop("placeholder", this.options.placeholder) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && $(this.$input).prop("placeholder", this.options.secondaryPlaceholder)
				}
			},
			{
				key: "_isValid",
				value: function g(t) {
					if (t.hasOwnProperty("tag") && "" !== t.tag) {
						for (var e = !1, i = 0; i < this.chipsData.length; i++) if (this.chipsData[i].tag === t.tag) {
							e = !0;
							break
						}
						return !e
					}
					return !1
				}
			},
			{
				key: "addChip",
				value: function y(t) {
					if (this._isValid(t) && !(this.chipsData.length >= this.options.limit)) {
						var e = this._renderChip(t);
						this.$chips.add(e), this.chipsData.push(t), $(this.$input).before(e), this._setPlaceholder(), "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, e)
					}
				}
			},
			{
				key: "deleteChip",
				value: function _(t) {
					var e = this.$chips.eq(t);
					this.$chips.eq(t).remove(), this.$chips = this.$chips.filter(function(t) {
						return $(t).index() >= 0
					}), this.chipsData.splice(t, 1), this._setPlaceholder(), "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, e[0])
				}
			},
			{
				key: "selectChip",
				value: function b(t) {
					var e = this.$chips.eq(t);
					this._selectedChip = e, e[0].focus(), "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, e[0])
				}
			}], [{
				key: "init",
				value: function k(t, e) {
					return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function C(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Chips
				}
			},
			{
				key: "_handleChipsKeydown",
				value: function w(t) {
					i._keydown = !0;
					var e = $(t.target).closest(".chips"),
						n = t.target && e.length;
					if (!$(t.target).is("input, textarea") && n) {
						var s = e[0].M_Chips;
						if (8 === t.keyCode || 46 === t.keyCode) {
							t.preventDefault();
							
							var o = s.chipsData.length;
							if (s._selectedChip) {
								var a = s._selectedChip.index();
								
								s.deleteChip(a), s._selectedChip = null, o = Math.max(a - 1, 0)
							}
							s.chipsData.length && s.selectChip(o)
						} else if (37 === t.keyCode) {
							if (s._selectedChip) {
								var r = s._selectedChip.index() - 1;
								if (0 > r) return;
								s.selectChip(r)
							}
						} else if (39 === t.keyCode && s._selectedChip) {
							var l = s._selectedChip.index() + 1;
							l >= s.chipsData.length ? s.$input[0].focus() : s.selectChip(l)
						}
					}
				}
			},
			{
				key: "_handleChipsKeyup",
				value: function E(t) {
					i._keydown = !1
				}
			},
			{
				key: "_handleChipsBlur",
				value: function x(t) {
					if (!i._keydown) {
						var e = $(t.target).closest(".chips"),
							n = e[0].M_Chips;
						n._selectedChip = null
					}
				}
			},
			{
				key: "defaults",
				get: function() {
					return t
				}
			}]), i
		}(Component);
	e._keydown = !1, M.Chips = e, M.jQueryLoaded && M.initializeJqueryWrapper(e, "chips", "M_Chips"), $(document).ready(function() {
		$(document.body).on("click", ".chip .close", function() {
			var t = $(this).closest(".chips");
			t.length && t[0].M_Chips || $(this).closest(".chip").remove()
		})
	})
}(cash), function($) {
	"use strict";
	var t = {
		top: 0,
		bottom: 1 / 0,
		offset: 0,
		onPositionChange: null
	},
		e = function(e) {
			function i(t, e) {
				_classCallCheck(this, i);
				var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
				return n.el.M_Pushpin = n, n.options = $.extend({}, i.defaults, e), n.originalOffset = n.el.offsetTop, i._pushpins.push(n), n._setupEventHandlers(), n._updatePosition(), n
			}
			return _inherits(i, e), _createClass(i, [{
				key: "destroy",
				value: function n() {
					this.el.style.top = null, this._removePinClasses(), this._removeEventHandlers();
					
					var t = i._pushpins.indexOf(this);
					i._pushpins.splice(t, 1)
				}
			},
			{
				key: "_setupEventHandlers",
				value: function s() {
					document.addEventListener("scroll", i._updateElements)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function o() {
					document.removeEventListener("scroll", i._updateElements)
				}
			},
			{
				key: "_updatePosition",
				value: function a() {
					var t = M.getDocumentScrollTop() + this.options.offset;
					this.options.top <= t && this.options.bottom >= t && !this.el.classList.contains("pinned") && (this._removePinClasses(), this.el.style.top = this.options.offset + "px", this.el.classList.add("pinned"), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")), t < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(), this.el.style.top = 0, this.el.classList.add("pin-top"), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")), t > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(), this.el.classList.add("pin-bottom"), this.el.style.top = this.options.bottom - this.originalOffset + "px", "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-bottom"))
				}
			},
			{
				key: "_removePinClasses",
				value: function r() {
					this.el.classList.remove("pin-top", "pinned", "pin-bottom")
				}
			}], [{
				key: "init",
				value: function l(t, e) {
					return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function h(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Pushpin
				}
			},
			{
				key: "_updateElements",
				value: function d() {
					for (var t in i._pushpins) {
						var e = i._pushpins[t];
						e._updatePosition()
					}
				}
			},
			{
				key: "defaults",
				get: function() {
					return t
				}
			}]), i
		}(Component);
	e._pushpins = [], M.Pushpin = e, M.jQueryLoaded && M.initializeJqueryWrapper(e, "pushpin", "M_Pushpin")
}(cash), function($, t) {
	"use strict";
	var e = {
		direction: "top",
		hoverEnabled: !0,
		toolbarEnabled: !1
	};
	
	$.fn.reverse = [].reverse;
	var i = function(i) {
		function n(t, e) {
			_classCallCheck(this, n);
			var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
			return i.el.M_FloatingActionButton = i, i.options = $.extend({}, n.defaults, e), i.isOpen = !1, i.$anchor = i.$el.children("a").first(), i.$menu = i.$el.children("ul").first(), i.$floatingBtns = i.$el.find("ul .btn-floating"), i.$floatingBtnsReverse = i.$el.find("ul .btn-floating").reverse(), i.offsetY = 0, i.offsetX = 0, i.$el.addClass("direction-" + i.options.direction), "top" === i.options.direction ? i.offsetY = 40 : "right" === i.options.direction ? i.offsetX = -40 : "bottom" === i.options.direction ? i.offsetY = -40 : i.offsetX = 40, i._setupEventHandlers(), i
		}
		return _inherits(n, i), _createClass(n, [{
			key: "destroy",
			value: function s() {
				this._removeEventHandlers(), this.el.M_FloatingActionButton = void 0
			}
		},
		{
			key: "_setupEventHandlers",
			value: function o() {
				this._handleFABClickBound = this._handleFABClick.bind(this), this._handleOpenBound = this.open.bind(this), this._handleCloseBound = this.close.bind(this), this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound), this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound)
			}
		},
		{
			key: "_removeEventHandlers",
			value: function a() {
				this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound), this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound)
			}
		},
		{
			key: "_handleFABClick",
			value: function r() {
				this.isOpen ? this.close() : this.open()
			}
		},
		{
			key: "_handleDocumentClick",
			value: function l(t) {
				$(t.target).closest(this.$menu).length || this.close()
			}
		},
		{
			key: "open",
			value: function h() {
				this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(), this.isOpen = !0)
			}
		},
		{
			key: "close",
			value: function d() {
				this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, !0), document.body.removeEventListener("click", this._handleDocumentClickBound, !0), this._animateOutToolbar()) : this._animateOutFAB(), this.isOpen = !1)
			}
		},
		{
			key: "_animateInFAB",
			value: function u() {
				var e = this;
				this.$el.addClass("active");
				var i = 0;
				this.$floatingBtnsReverse.each(function(n) {
					t({
						targets: n,
						opacity: 1,
						scale: [.4, 1],
						translateY: [e.offsetY, 0],
						translateX: [e.offsetX, 0],
						duration: 275,
						delay: i,
						easing: "easeInOutQuad"
					}), i += 40
				})
			}
		},
		{
			key: "_animateOutFAB",
			value: function c() {
				var e = this;
				this.$floatingBtnsReverse.each(function(i) {
					t.remove(i), t({
						targets: i,
						opacity: 0,
						scale: .4,
						translateY: e.offsetY,
						translateX: e.offsetX,
						duration: 175,
						easing: "easeOutQuad",
						complete: function() {
							e.$el.removeClass("active")
						}
					})
				})
			}
		},
		{
			key: "_animateInToolbar",
			value: function p() {
				var t = this,
					e = void 0,
					i = window.innerWidth,
					n = window.innerHeight,
					s = this.el.getBoundingClientRect(),
					o = $('<div class="fab-backdrop"></div>'),
					a = this.$anchor.css("background-color");
				this.$anchor.append(o), this.offsetX = s.left - i / 2 + s.width / 2, this.offsetY = n - s.bottom, e = i / o[0].clientWidth, this.btnBottom = s.bottom, this.btnLeft = s.left, this.btnWidth = s.width, this.$el.addClass("active"), this.$el.css({
					"text-align": "center",
					width: "100%",
					bottom: 0,
					left: 0,
					transform: "translateX(" + this.offsetX + "px)",
					transition: "none"
				}), this.$anchor.css({
					transform: "translateY(" + -this.offsetY + "px)",
					transition: "none"
				}), o.css({
					"background-color": a
				}), setTimeout(function() {
					t.$el.css({
						transform: "",
						transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
					}), t.$anchor.css({
						overflow: "visible",
						transform: "",
						transition: "transform .2s"
					}), setTimeout(function() {
						t.$el.css({
							overflow: "hidden",
							"background-color": a
						}), o.css({
							transform: "scale(" + e + ")",
							transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
						}), t.$menu.children("li").children("a").css({
							opacity: 1
						}), t._handleDocumentClickBound = t._handleDocumentClick.bind(t), window.addEventListener("scroll", t._handleCloseBound, !0), document.body.addEventListener("click", t._handleDocumentClickBound, !0)
					}, 100)
				}, 0)
			}
		},
		{
			key: "_animateOutToolbar",
			value: function v() {
				var t = this,
					e = window.innerWidth,
					i = window.innerHeight,
					n = this.$el.find(".fab-backdrop"),
					s = this.$anchor.css("background-color");
				this.offsetX = this.btnLeft - e / 2 + this.btnWidth / 2, this.offsetY = i - this.btnBottom, this.$el.removeClass("active"), this.$el.css({
					"background-color": "transparent",
					transition: "none"
				}), this.$anchor.css({
					transition: "none"
				}), n.css({
					transform: "scale(0)",
					"background-color": s
				}), this.$menu.children("li").children("a").css({
					opacity: ""
				}), setTimeout(function() {
					n.remove(), t.$el.css({
						"text-align": "",
						width: "",
						bottom: "",
						left: "",
						overflow: "",
						"background-color": "",
						transform: "translate3d(" + -t.offsetX + "px,0,0)"
					}), t.$anchor.css({
						overflow: "",
						transform: "translate3d(0," + t.offsetY + "px,0)"
					}), setTimeout(function() {
						t.$el.css({
							transform: "translate3d(0,0,0)",
							transition: "transform .2s"
						}), t.$anchor.css({
							transform: "translate3d(0,0,0)",
							transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
						})
					}, 20)
				}, 200)
			}
		}], [{
			key: "init",
			value: function f(t, e) {
				return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
			}
		},
		{
			key: "getInstance",
			value: function m(t) {
				var e = t.jquery ? t[0] : t;
				return e.M_FloatingActionButton
			}
		},
		{
			key: "defaults",
			get: function() {
				return e
			}
		}]), n
	}(Component);
	M.FloatingActionButton = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "floatingActionButton", "M_FloatingActionButton")
}(cash, M.anime), function($) {
	"use strict";
	var t = {
		autoClose: !1,
		format: "mmm dd, yyyy",
		parse: null,
		defaultDate: null,
		setDefaultDate: !1,
		disableWeekends: !1,
		disableDayFn: null,
		firstDay: 0,
		minDate: null,
		maxDate: null,
		yearRange: 10,
		minYear: 0,
		maxYear: 9999,
		minMonth: void 0,
		maxMonth: void 0,
		startRange: null,
		endRange: null,
		isRTL: !1,
		showMonthAfterYear: !1,
		showDaysInNextAndPreviousMonths: !1,
		container: null,
		showClearBtn: !1,
		i18n: {
			cancel: "Cancel",
			clear: "Clear",
			done: "Ok",
			previousMonth: "â€¹",
			nextMonth: "â€º",
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]
		},
		
		events: [],
		onSelect: null,
		onOpen: null,
		onClose: null,
		onDraw: null
	},
		e = function(e) {
			function i(t, e) {
				_classCallCheck(this, i);
				var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
				n.el.M_Datepicker = n, n.options = $.extend({}, i.defaults, e), e && e.hasOwnProperty("i18n") && "object" == typeof e.i18n && (n.options.i18n = $.extend({}, i.defaults.i18n, e.i18n)), n.options.minDate && n.options.minDate.setHours(0, 0, 0, 0), n.options.maxDate && n.options.maxDate.setHours(0, 0, 0, 0), n.id = M.guid(), n._setupVariables(), n._insertHTMLIntoDOM(), n._setupModal(), n._setupEventHandlers(), n.options.defaultDate || (n.options.defaultDate = new Date(Date.parse(n.el.value)));
				var s = n.options.defaultDate;
				return i._isDate(s) ? n.options.setDefaultDate ? (n.setDate(s, !0), n.setInputValue()) : n.gotoDate(s) : n.gotoDate(new Date), n.isOpen = !1, n
			}
			return _inherits(i, e), _createClass(i, [{
				key: "destroy",
				value: function n() {
					this._removeEventHandlers(), this.modal.destroy(), $(this.modalEl).remove(), this.destroySelects(), this.el.M_Datepicker = void 0
				}
			},
			{
				key: "destroySelects",
				value: function s() {
					var t = this.calendarEl.querySelector(".orig-select-year");
					t && M.FormSelect.getInstance(t).destroy();
					
					var e = this.calendarEl.querySelector(".orig-select-month");
					e && M.FormSelect.getInstance(e).destroy()
				}
			},
			{
				key: "_insertHTMLIntoDOM",
				value: function o() {
					this.options.showClearBtn && ($(this.clearBtn).css({
						visibility: ""
					}), this.clearBtn.innerHTML = this.options.i18n.clear), this.doneBtn.innerHTML = this.options.i18n.done, this.cancelBtn.innerHTML = this.options.i18n.cancel, this.options.container ? this.$modalEl.appendTo(this.options.container) : this.$modalEl.insertBefore(this.el)
				}
			},
			{
				key: "_setupModal",
				value: function a() {
					var t = this;
					this.modalEl.id = "modal-" + this.id, this.modal = M.Modal.init(this.modalEl, {
						onCloseEnd: function() {
							t.isOpen = !1
						}
					})
				}
			},
			{
				key: "toString",
				value: function r(t) {
					var e = this;
					if (t = t || this.options.format, !i._isDate(this.date)) return "";
					var n = t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g),
						s = n.map(function(t) {
							return e.formats[t] ? e.formats[t]() : t
						}).join("");
					return s
				}
			},
			{
				key: "setDate",
				value: function l(t, e) {
					if (!t) return this.date = null, this._renderDateDisplay(), this.draw();
					
					if ("string" == typeof t && (t = new Date(Date.parse(t))), i._isDate(t)) {
						var n = this.options.minDate,
							s = this.options.maxDate;
						i._isDate(n) && n > t ? t = n : i._isDate(s) && t > s && (t = s), this.date = new Date(t.getTime()), this._renderDateDisplay(), i._setToStartOfDay(this.date), this.gotoDate(this.date), e || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date)
					}
				}
			},
			{
				key: "setInputValue",
				value: function h() {
					this.el.value = this.toString(), this.$el.trigger("change", {
						firedBy: this
					})
				}
			},
			{
				key: "_renderDateDisplay",
				value: function d() {
					var t = i._isDate(this.date) ? this.date : new Date,
						e = this.options.i18n,
						n = e.weekdaysShort[t.getDay()],
						s = e.monthsShort[t.getMonth()],
						o = t.getDate();
					
					this.yearTextEl.innerHTML = t.getFullYear(), this.dateTextEl.innerHTML = n + ", " + s + " " + o
				}
			},
			{
				key: "gotoDate",
				value: function u(t) {
					var e = !0;
					if (i._isDate(t)) {
						if (this.calendars) {
							var n = new Date(this.calendars[0].year, this.calendars[0].month, 1),
								s = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
								o = t.getTime();
							
							s.setMonth(s.getMonth() + 1), s.setDate(s.getDate() - 1), e = o < n.getTime() || s.getTime() < o
						}
						e && (this.calendars = [{
							month: t.getMonth(),
							year: t.getFullYear()
						}]), this.adjustCalendars()
					}
				}
			},
			{
				key: "adjustCalendars",
				value: function c() {
					this.calendars[0] = this.adjustCalendar(this.calendars[0]), this.draw()
				}
			},
			{
				key: "adjustCalendar",
				value: function p(t) {
					return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12), t.month += 12), t.month > 11 && (t.year += Math.floor(Math.abs(t.month) / 12), t.month -= 12), t
				}
			},
			{
				key: "nextMonth",
				value: function v() {
					this.calendars[0].month++, this.adjustCalendars()
				}
			},
			{
				key: "prevMonth",
				value: function f() {
					this.calendars[0].month--, this.adjustCalendars()
				}
			},
			{
				key: "render",
				value: function m(t, e, n) {
					var s = this.options,
						o = new Date,
						a = i._getDaysInMonth(t, e),
						r = new Date(t, e, 1).getDay(),
						l = [],
						h = [];
					i._setToStartOfDay(o), s.firstDay > 0 && (r -= s.firstDay, 0 > r && (r += 7));
					for (var d = 0 === e ? 11 : e - 1, u = 11 === e ? 0 : e + 1, c = 0 === e ? t - 1 : t, p = 11 === e ? t + 1 : t, v = i._getDaysInMonth(c, d), f = a + r, m = f; m > 7;) m -= 7;
					f += 7 - m;
					for (var g = !1, y = 0, _ = 0; f > y; y++) {
						var b = new Date(t, e, 1 + (y - r)),
							k = i._isDate(this.date) ? i._compareDates(b, this.date) : !1,
							C = i._compareDates(b, o),
							w = -1 !== s.events.indexOf(b.toDateString()) ? !0 : !1,
							E = r > y || y >= a + r,
							M = 1 + (y - r),
							x = e,
							O = t,
							T = s.startRange && i._compareDates(s.startRange, b),
							L = s.endRange && i._compareDates(s.endRange, b),
							B = s.startRange && s.endRange && s.startRange < b && b < s.endRange,
							D = s.minDate && b < s.minDate || s.maxDate && b > s.maxDate || s.disableWeekends && i._isWeekend(b) || s.disableDayFn && s.disableDayFn(b);
						E && (r > y ? (M = v + M, x = d, O = c) : (M -= a, x = u, O = p));
						var S = {
							day: M,
							month: x,
							year: O,
							hasEvent: w,
							isSelected: k,
							isToday: C,
							isDisabled: D,
							isEmpty: E,
							isStartRange: T,
							isEndRange: L,
							isInRange: B,
							showDaysInNextAndPreviousMonths: s.showDaysInNextAndPreviousMonths
						};
						
						h.push(this.renderDay(S)), 7 === ++_ && (l.push(this.renderRow(h, s.isRTL, g)), h = [], _ = 0, g = !1)
					}
					return this.renderTable(s, l, n)
				}
			},
			{
				key: "renderDay",
				value: function g(t) {
					var e = [],
						i = "false";
					if (t.isEmpty) {
						if (!t.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
						e.push("is-outside-current-month"), e.push("is-selection-disabled")
					}
					return t.isDisabled && e.push("is-disabled"), t.isToday && e.push("is-today"), t.isSelected && (e.push("is-selected"), i = "true"), t.hasEvent && e.push("has-event"), t.isInRange && e.push("is-inrange"), t.isStartRange && e.push("is-startrange"), t.isEndRange && e.push("is-endrange"), '<td data-day="' + t.day + '" class="' + e.join(" ") + '" aria-selected="' + i + '">' + ('<button class="datepicker-day-button" type="button" data-year="' + t.year + '" data-month="' + t.month + '" data-day="' + t.day + '">' + t.day + "</button>") + "</td>"
				}
			},
			{
				key: "renderRow",
				value: function y(t, e, i) {
					return '<tr class="datepicker-row' + (i ? " is-selected" : "") + '">' + (e ? t.reverse() : t).join("") + "</tr>"
				}
			},
			{
				key: "renderTable",
				value: function _(t, e, i) {
					return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + i + '">' + this.renderHead(t) + this.renderBody(e) + "</table></div>"
				}
			},
			{
				key: "renderHead",
				value: function b(t) {
					var e = void 0,
						i = [];
					for (e = 0; 7 > e; e++) i.push('<th scope="col"><abbr title="' + this.renderDayName(t, e) + '">' + this.renderDayName(t, e, !0) + "</abbr></th>");
					return "<thead><tr>" + (t.isRTL ? i.reverse() : i).join("") + "</tr></thead>"
				}
			},
			{
				key: "renderBody",
				value: function k(t) {
					return "<tbody>" + t.join("") + "</tbody>"
				}
			},
			{
				key: "renderTitle",
				value: function C(t, e, i, n, s, o) {
					var a = void 0,
						r = void 0,
						l = void 0,
						h = this.options,
						d = i === h.minYear,
						u = i === h.maxYear,
						c = '<div id="' + o + '" class="datepicker-controls" role="heading" aria-live="assertive">',
						p = void 0,
						v = void 0,
						f = !0,
						m = !0;
					for (l = [], a = 0; 12 > a; a++) l.push('<option value="' + (i === s ? a - e : 12 + a - e) + '"' + (a === n ? ' selected="selected"' : "") + (d && a < h.minMonth || u && a > h.maxMonth ? 'disabled="disabled"' : "") + ">" + h.i18n.months[a] + "</option>");
					for (p = '<select class="datepicker-select orig-select-month" tabindex="-1">' + l.join("") + "</select>", $.isArray(h.yearRange) ? (a = h.yearRange[0], r = h.yearRange[1] + 1) : (a = i - h.yearRange, r = 1 + i + h.yearRange), l = []; r > a && a <= h.maxYear; a++) a >= h.minYear && l.push('<option value="' + a + '" ' + (a === i ? 'selected="selected"' : "") + ">" + a + "</option>");
					v = '<select class="datepicker-select orig-select-year" tabindex="-1">' + l.join("") + "</select>";
					var g = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>';
					c += '<button class="month-prev' + (f ? "" : " is-disabled") + '" type="button">' + g + "</button>", c += '<div class="selects-container">', c += h.showMonthAfterYear ? v + p : p + v, c += "</div>", d && (0 === n || h.minMonth >= n) && (f = !1), u && (11 === n || h.maxMonth <= n) && (m = !1);
					var y = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>';
					return c += '<button class="month-next' + (m ? "" : " is-disabled") + '" type="button">' + y + "</button>", c += "</div>"
				}
			},
			{
				key: "draw",
				value: function w(t) {
					if (this.isOpen || t) {
						var e = this.options,
							i = e.minYear,
							n = e.maxYear,
							s = e.minMonth,
							o = e.maxMonth,
							a = "",
							r = void 0;
						this._y <= i && (this._y = i, !isNaN(s) && this._m < s && (this._m = s)), this._y >= n && (this._y = n, !isNaN(o) && this._m > o && (this._m = o)), r = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
						for (var l = 0; 1 > l; l++) this._renderDateDisplay(), a += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, r) + this.render(this.calendars[l].year, this.calendars[l].month, r);
						this.destroySelects(), this.calendarEl.innerHTML = a;
						var h = this.calendarEl.querySelector(".orig-select-year"),
							d = this.calendarEl.querySelector(".orig-select-month");
						M.FormSelect.init(h, {
							classes: "select-year",
							dropdownOptions: {
								container: document.body,
								constrainWidth: !1
							}
						}), M.FormSelect.init(d, {
							classes: "select-month",
							dropdownOptions: {
								container: document.body,
								constrainWidth: !1
							}
						}), h.addEventListener("change", this._handleYearChange.bind(this)), d.addEventListener("change", this._handleMonthChange.bind(this)), "function" == typeof this.options.onDraw && this.options.onDraw(this)
					}
				}
			},
			{
				key: "_setupEventHandlers",
				value: function E() {
					this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleInputChangeBound = this._handleInputChange.bind(this), this._handleCalendarClickBound = this._handleCalendarClick.bind(this), this._finishSelectionBound = this._finishSelection.bind(this), this._handleMonthChange = this._handleMonthChange.bind(this), this._closeBound = this.close.bind(this), this.el.addEventListener("click", this._handleInputClickBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.el.addEventListener("change", this._handleInputChangeBound), this.calendarEl.addEventListener("click", this._handleCalendarClickBound), this.doneBtn.addEventListener("click", this._finishSelectionBound), this.cancelBtn.addEventListener("click", this._closeBound), this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind(this), this.clearBtn.addEventListener("click", this._handleClearClickBound))
				}
			},
			{
				key: "_setupVariables",
				value: function x() {
					var t = this;
					this.$modalEl = $(i._template), this.modalEl = this.$modalEl[0], this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"), this.yearTextEl = this.modalEl.querySelector(".year-text"), this.dateTextEl = this.modalEl.querySelector(".date-text"), this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")), this.doneBtn = this.modalEl.querySelector(".datepicker-done"), this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"), this.formats = {
						d: function() {
							return t.date.getDate()
						},
						
						dd: function() {
							var e = t.date.getDate();
							
							return (10 > e ? "0" : "") + e
						},
						
						ddd: function() {
							return t.options.i18n.weekdaysShort[t.date.getDay()]
						},
						
						dddd: function() {
							return t.options.i18n.weekdays[t.date.getDay()]
						},
						
						m: function() {
							return t.date.getMonth() + 1
						},
						
						mm: function() {
							var e = t.date.getMonth() + 1;
							return (10 > e ? "0" : "") + e
						},
						
						mmm: function() {
							return t.options.i18n.monthsShort[t.date.getMonth()]
						},
						
						mmmm: function() {
							return t.options.i18n.months[t.date.getMonth()]
						},
						
						yy: function() {
							return ("" + t.date.getFullYear()).slice(2)
						},
						
						yyyy: function() {
							return t.date.getFullYear()
						}
					}
				}
			},
			{
				key: "_removeEventHandlers",
				value: function O() {
					this.el.removeEventListener("click", this._handleInputClickBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound), this.el.removeEventListener("change", this._handleInputChangeBound), this.calendarEl.removeEventListener("click", this._handleCalendarClickBound)
				}
			},
			{
				key: "_handleInputClick",
				value: function T() {
					this.open()
				}
			},
			{
				key: "_handleInputKeydown",
				value: function L(t) {
					t.which === M.keys.ENTER && (t.preventDefault(), this.open())
				}
			},
			{
				key: "_handleCalendarClick",
				value: function B(t) {
					if (this.isOpen) {
						var e = $(t.target);
						e.hasClass("is-disabled") || (!e.hasClass("datepicker-day-button") || e.hasClass("is-empty") || e.parent().hasClass("is-disabled") ? e.closest(".month-prev").length ? this.prevMonth() : e.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(t.target.getAttribute("data-year"), t.target.getAttribute("data-month"), t.target.getAttribute("data-day"))), this.options.autoClose && this._finishSelection()))
					}
				}
			},
			{
				key: "_handleClearClick",
				value: function D() {
					this.date = null, this.setInputValue(), this.close()
				}
			},
			{
				key: "_handleMonthChange",
				value: function S(t) {
					this.gotoMonth(t.target.value)
				}
			},
			{
				key: "_handleYearChange",
				value: function I(t) {
					this.gotoYear(t.target.value)
				}
			},
			{
				key: "gotoMonth",
				value: function A(t) {
					isNaN(t) || (this.calendars[0].month = parseInt(t, 10), this.adjustCalendars())
				}
			},
			{
				key: "gotoYear",
				value: function R(t) {
					isNaN(t) || (this.calendars[0].year = parseInt(t, 10), this.adjustCalendars())
				}
			},
			{
				key: "_handleInputChange",
				value: function H(t) {
					var e = void 0;
					t.firedBy !== this && (e = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)), i._isDate(e) && this.setDate(e))
				}
			},
			{
				key: "renderDayName",
				value: function P(t, e, i) {
					for (e += t.firstDay; e >= 7;) e -= 7;
					return i ? t.i18n.weekdaysAbbrev[e] : t.i18n.weekdays[e]
				}
			},
			{
				key: "_finishSelection",
				value: function W() {
					this.setInputValue(), this.close()
				}
			},
			{
				key: "open",
				value: function j() {
					return this.isOpen ? void 0 : (this.isOpen = !0, "function" == typeof this.options.onOpen && this.options.onOpen.call(this), this.draw(), this.modal.open(), this)
				}
			},
			{
				key: "close",
				value: function F() {
					return this.isOpen ? (this.isOpen = !1, "function" == typeof this.options.onClose && this.options.onClose.call(this), this.modal.close(), this) : void 0
				}
			}], [{
				key: "init",
				value: function N(t, e) {
					return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "_isDate",
				value: function q(t) {
					return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime())
				}
			},
			{
				key: "_isWeekend",
				value: function z(t) {
					var e = t.getDay();
					
					return 0 === e || 6 === e
				}
			},
			{
				key: "_setToStartOfDay",
				value: function V(t) {
					i._isDate(t) && t.setHours(0, 0, 0, 0)
				}
			},
			{
				key: "_getDaysInMonth",
				value: function Y(t, e) {
					return [31, i._isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
				}
			},
			{
				key: "_isLeapYear",
				value: function X(t) {
					return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
				}
			},
			{
				key: "_compareDates",
				value: function Q(t, e) {
					return t.getTime() === e.getTime()
				}
			},
			{
				key: "_setToStartOfDay",
				value: function K(t) {
					i._isDate(t) && t.setHours(0, 0, 0, 0)
				}
			},
			{
				key: "getInstance",
				value: function G(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Datepicker
				}
			},
			{
				key: "defaults",
				get: function() {
					return t
				}
			}]), i
		}(Component);
	e._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""), M.Datepicker = e, M.jQueryLoaded && M.initializeJqueryWrapper(e, "datepicker", "M_Datepicker")
}(cash), function($) {
	"use strict";
	var t = {
		dialRadius: 135,
		outerRadius: 105,
		innerRadius: 70,
		tickRadius: 20,
		duration: 350,
		container: null,
		defaultTime: "now",
		fromNow: 0,
		showClearBtn: !1,
		i18n: {
			cancel: "Cancel",
			clear: "Clear",
			done: "Ok"
		},
		
		autoClose: !1,
		twelveHour: !0,
		vibrate: !0,
		onOpenStart: null,
		onOpenEnd: null,
		onCloseStart: null,
		onCloseEnd: null,
		onSelect: null
	},
		e = function(e) {
			function i(t, e) {
				_classCallCheck(this, i);
				var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
				return n.el.M_Timepicker = n, n.options = $.extend({}, i.defaults, e), n.id = M.guid(), n._insertHTMLIntoDOM(), n._setupModal(), n._setupVariables(), n._setupEventHandlers(), n._clockSetup(), n._pickerSetup(), n
			}
			return _inherits(i, e), _createClass(i, [{
				key: "destroy",
				value: function n() {
					this._removeEventHandlers(), this.modal.destroy(), $(this.modalEl).remove(), this.el.M_Timepicker = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function s() {
					this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleClockClickStartBound = this._handleClockClickStart.bind(this), this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this), this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this), this.el.addEventListener("click", this._handleInputClickBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.plate.addEventListener("mousedown", this._handleClockClickStartBound), this.plate.addEventListener("touchstart", this._handleClockClickStartBound), $(this.spanHours).on("click", this.showView.bind(this, "hours")), $(this.spanMinutes).on("click", this.showView.bind(this, "minutes"))
				}
			},
			{
				key: "_removeEventHandlers",
				value: function o() {
					this.el.removeEventListener("click", this._handleInputClickBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound)
				}
			},
			{
				key: "_handleInputClick",
				value: function a() {
					this.open()
				}
			},
			{
				key: "_handleInputKeydown",
				value: function r(t) {
					t.which === M.keys.ENTER && (t.preventDefault(), this.open())
				}
			},
			{
				key: "_handleClockClickStart",
				value: function l(t) {
					t.preventDefault();
					
					var e = this.plate.getBoundingClientRect(),
						n = {
							x: e.left,
							y: e.top
						};
					
					this.x0 = n.x + this.options.dialRadius, this.y0 = n.y + this.options.dialRadius, this.moved = !1;
					var s = i._Pos(t);
					this.dx = s.x - this.x0, this.dy = s.y - this.y0, this.setHand(this.dx, this.dy, !1), document.addEventListener("mousemove", this._handleDocumentClickMoveBound), document.addEventListener("touchmove", this._handleDocumentClickMoveBound), document.addEventListener("mouseup", this._handleDocumentClickEndBound), document.addEventListener("touchend", this._handleDocumentClickEndBound)
				}
			},
			{
				key: "_handleDocumentClickMove",
				value: function h(t) {
					t.preventDefault();
					
					var e = i._Pos(t),
						n = e.x - this.x0,
						s = e.y - this.y0;
					this.moved = !0, this.setHand(n, s, !1, !0)
				}
			},
			{
				key: "_handleDocumentClickEnd",
				value: function d(t) {
					var e = this;
					t.preventDefault(), document.removeEventListener("mouseup", this._handleDocumentClickEndBound), document.removeEventListener("touchend", this._handleDocumentClickEndBound);
					var n = i._Pos(t),
						s = n.x - this.x0,
						o = n.y - this.y0;
					this.moved && s === this.dx && o === this.dy && this.setHand(s, o), "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && ($(this.minutesView).addClass("timepicker-dial-out"), setTimeout(function() {
						e.done()
					}, this.options.duration / 2)), "function" == typeof this.options.onSelect && this.options.onSelect.call(this, this.hours, this.minutes), document.removeEventListener("mousemove", this._handleDocumentClickMoveBound), document.removeEventListener("touchmove", this._handleDocumentClickMoveBound)
				}
			},
			{
				key: "_insertHTMLIntoDOM",
				value: function u() {
					this.$modalEl = $(i._template), this.modalEl = this.$modalEl[0], this.modalEl.id = "modal-" + this.id;
					var t = document.querySelector(this.options.container);
					this.options.container && t ? this.$modalEl.appendTo(t) : this.$modalEl.insertBefore(this.el)
				}
			},
			{
				key: "_setupModal",
				value: function c() {
					var t = this;
					this.modal = M.Modal.init(this.modalEl, {
						onOpenStart: this.options.onOpenStart,
						onOpenEnd: this.options.onOpenEnd,
						onCloseStart: this.options.onCloseStart,
						onCloseEnd: function() {
							"function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t), t.isOpen = !1
						}
					})
				}
			},
			{
				key: "_setupVariables",
				value: function p() {
					this.currentView = "hours", this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null, this._canvas = this.modalEl.querySelector(".timepicker-canvas"), this.plate = this.modalEl.querySelector(".timepicker-plate"), this.hoursView = this.modalEl.querySelector(".timepicker-hours"), this.minutesView = this.modalEl.querySelector(".timepicker-minutes"), this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"), this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"), this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"), this.footer = this.modalEl.querySelector(".timepicker-footer"), this.amOrPm = "PM"
				}
			},
			{
				key: "_pickerSetup",
				value: function v() {
					var t = $('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
					this.options.showClearBtn && t.css({
						visibility: ""
					});
					
					var e = $('<div class="confirmation-btns"></div>');
					$('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(e).on("click", this.close.bind(this)), $('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(e).on("click", this.done.bind(this)), e.appendTo(this.footer)
				}
			},
			{
				key: "_clockSetup",
				value: function f() {
					this.options.twelveHour && (this.$amBtn = $('<div class="am-btn">AM</div>'), this.$pmBtn = $('<div class="pm-btn">PM</div>'), this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm), this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)), this._buildHoursView(), this._buildMinutesView(), this._buildSVGClock()
				}
			},
			{
				key: "_buildSVGClock",
				value: function m() {
					var t = this.options.dialRadius,
						e = this.options.tickRadius,
						n = 2 * t,
						s = i._createSVGEl("svg");
					s.setAttribute("class", "timepicker-svg"), s.setAttribute("width", n), s.setAttribute("height", n);
					var o = i._createSVGEl("g");
					o.setAttribute("transform", "translate(" + t + "," + t + ")");
					var a = i._createSVGEl("circle");
					a.setAttribute("class", "timepicker-canvas-bearing"), a.setAttribute("cx", 0), a.setAttribute("cy", 0), a.setAttribute("r", 4);
					var r = i._createSVGEl("line");
					r.setAttribute("x1", 0), r.setAttribute("y1", 0);
					var l = i._createSVGEl("circle");
					l.setAttribute("class", "timepicker-canvas-bg"), l.setAttribute("r", e), o.appendChild(r), o.appendChild(l), o.appendChild(a), s.appendChild(o), this._canvas.appendChild(s), this.hand = r, this.bg = l, this.bearing = a, this.g = o
				}
			},
			{
				key: "_buildHoursView",
				value: function g() {
					var t = $('<div class="timepicker-tick"></div>');
					if (this.options.twelveHour) for (var e = 1; 13 > e; e += 1) {
						var i = t.clone(),
							n = e / 6 * Math.PI,
							s = this.options.outerRadius;
						i.css({
							left: this.options.dialRadius + Math.sin(n) * s - this.options.tickRadius + "px",
							top: this.options.dialRadius - Math.cos(n) * s - this.options.tickRadius + "px"
						}), i.html(0 === e ? "00" : e), this.hoursView.appendChild(i[0])
					} else
					for (var o = 0; 24 > o; o += 1) {
						var a = t.clone(),
							r = o / 6 * Math.PI,
							l = o > 0 && 13 > o,
							h = l ? this.options.innerRadius : this.options.outerRadius;
						a.css({
							left: this.options.dialRadius + Math.sin(r) * h - this.options.tickRadius + "px",
							top: this.options.dialRadius - Math.cos(r) * h - this.options.tickRadius + "px"
						}), a.html(0 === o ? "00" : o), this.hoursView.appendChild(a[0])
					}
				}
			},
			{
				key: "_buildMinutesView",
				value: function y() {
					for (var t = $('<div class="timepicker-tick"></div>'), e = 0; 60 > e; e += 5) {
						var n = t.clone(),
							s = e / 30 * Math.PI;
						n.css({
							left: this.options.dialRadius + Math.sin(s) * this.options.outerRadius - this.options.tickRadius + "px",
							top: this.options.dialRadius - Math.cos(s) * this.options.outerRadius - this.options.tickRadius + "px"
						}), n.html(i._addLeadingZero(e)), this.minutesView.appendChild(n[0])
					}
				}
			},
			{
				key: "_handleAmPmClick",
				value: function _(t) {
					var e = $(t.target);
					this.amOrPm = e.hasClass("am-btn") ? "AM" : "PM", this._updateAmPmView()
				}
			},
			{
				key: "_updateAmPmView",
				value: function b() {
					this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", "AM" === this.amOrPm), this.$pmBtn.toggleClass("text-primary", "PM" === this.amOrPm))
				}
			},
			{
				key: "_updateTimeFromInput",
				value: function k() {
					var t = ((this.el.value || this.options.defaultTime || "") + "").split(":");
					if (this.options.twelveHour && "undefined" != typeof t[1] && (t[1].toUpperCase().indexOf("AM") > 0 ? this.amOrPm = "AM" : this.amOrPm = "PM", t[1] = t[1].replace("AM", "").replace("PM", "")), "now" === t[0]) {
						var e = new Date(+new Date + this.options.fromNow);
						t = [e.getHours(), e.getMinutes()], this.options.twelveHour && (this.amOrPm = t[0] >= 12 && t[0] < 24 ? "PM" : "AM")
					}
					this.hours = +t[0] || 0, this.minutes = +t[1] || 0, this.spanHours.innerHTML = this.hours, this.spanMinutes.innerHTML = i._addLeadingZero(this.minutes), this._updateAmPmView()
				}
			},
			{
				key: "showView",
				value: function C(t, e) {
					"minutes" === t && "visible" === $(this.hoursView).css("visibility");
					var i = "hours" === t,
						n = i ? this.hoursView : this.minutesView,
						s = i ? this.minutesView : this.hoursView;
					this.currentView = t, $(this.spanHours).toggleClass("text-primary", i), $(this.spanMinutes).toggleClass("text-primary", !i), s.classList.add("timepicker-dial-out"), $(n).css("visibility", "visible").removeClass("timepicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function() {
						$(s).css("visibility", "hidden")
					}, this.options.duration)
				}
			},
			{
				key: "resetClock",
				value: function w(t) {
					var e = this.currentView,
						i = this[e],
						n = "hours" === e,
						s = Math.PI / (n ? 6 : 30),
						o = i * s,
						a = n && i > 0 && 13 > i ? this.options.innerRadius : this.options.outerRadius,
						r = Math.sin(o) * a,
						l = -Math.cos(o) * a,
						h = this;
					t ? ($(this.canvas).addClass("timepicker-canvas-out"), setTimeout(function() {
						$(h.canvas).removeClass("timepicker-canvas-out"), h.setHand(r, l)
					}, t)) : this.setHand(r, l)
				}
			},
			{
				key: "setHand",
				value: function E(t, e, n) {
					var s = this,
						o = Math.atan2(t, -e),
						a = "hours" === this.currentView,
						r = Math.PI / (a || n ? 6 : 30),
						l = Math.sqrt(t * t + e * e),
						h = a && l < (this.options.outerRadius + this.options.innerRadius) / 2,
						d = h ? this.options.innerRadius : this.options.outerRadius;
					this.options.twelveHour && (d = this.options.outerRadius), 0 > o && (o = 2 * Math.PI + o);
					var u = Math.round(o / r);
					o = u * r, this.options.twelveHour ? a ? 0 === u && (u = 12) : (n && (u *= 5), 60 === u && (u = 0)) : a ? (12 === u && (u = 0), u = h ? 0 === u ? 12 : u : 0 === u ? 0 : u + 12) : (n && (u *= 5), 60 === u && (u = 0)), this[this.currentView] !== u && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10), this.vibrateTimer = setTimeout(function() {
						s.vibrateTimer = null
					}, 100))), this[this.currentView] = u, a ? this.spanHours.innerHTML = u : this.spanMinutes.innerHTML = i._addLeadingZero(u);
					var c = Math.sin(o) * (d - this.options.tickRadius),
						p = -Math.cos(o) * (d - this.options.tickRadius),
						v = Math.sin(o) * d,
						f = -Math.cos(o) * d;
					this.hand.setAttribute("x2", c), this.hand.setAttribute("y2", p), this.bg.setAttribute("cx", v), this.bg.setAttribute("cy", f)
				}
			},
			{
				key: "open",
				value: function x() {
					this.isOpen || (this.isOpen = !0, this._updateTimeFromInput(), this.showView("hours"), this.modal.open())
				}
			},
			{
				key: "close",
				value: function O() {
					this.isOpen && (this.isOpen = !1, this.modal.close())
				}
			},
			{
				key: "done",
				value: function T(t, e) {
					var n = this.el.value,
						s = e ? "" : i._addLeadingZero(this.hours) + ":" + i._addLeadingZero(this.minutes);
					this.time = s, !e && this.options.twelveHour && (s = s + " " + this.amOrPm), this.el.value = s, s !== n && this.$el.trigger("change"), this.close(), this.el.focus()
				}
			},
			{
				key: "clear",
				value: function L() {
					this.done(null, !0)
				}
			}], [{
				key: "init",
				value: function B(t, e) {
					return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "_addLeadingZero",
				value: function D(t) {
					return (10 > t ? "0" : "") + t
				}
			},
			{
				key: "_createSVGEl",
				value: function S(t) {
					var e = "http://www.w3.org/2000/svg";
					return document.createElementNS(e, t)
				}
			},
			{
				key: "_Pos",
				value: function I(t) {
					return t.targetTouches && t.targetTouches.length >= 1 ? {
						x: t.targetTouches[0].clientX,
						y: t.targetTouches[0].clientY
					} : {
						x: t.clientX,
						y: t.clientY
					}
				}
			},
			{
				key: "getInstance",
				value: function A(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Timepicker
				}
			},
			{
				key: "defaults",
				get: function() {
					return t
				}
			}]), i
		}(Component);
	e._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""), M.Timepicker = e, M.jQueryLoaded && M.initializeJqueryWrapper(e, "timepicker", "M_Timepicker")
}(cash), function($) {
	"use strict";
	var t = {},
		e = function(e) {
			function i(t, e) {
				_classCallCheck(this, i);
				var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
				return n.el.M_CharacterCounter = n, n.options = $.extend({}, i.defaults, e), n.isInvalid = !1, n.isValidLength = !1, n._setupCounter(), n._setupEventHandlers(), n
			}
			return _inherits(i, e), _createClass(i, [{
				key: "destroy",
				value: function n() {
					this._removeEventHandlers(), this.el.CharacterCounter = void 0, this._removeCounter()
				}
			},
			{
				key: "_setupEventHandlers",
				value: function s() {
					this._handleUpdateCounterBound = this.updateCounter.bind(this), this.el.addEventListener("focus", this._handleUpdateCounterBound, !0), this.el.addEventListener("input", this._handleUpdateCounterBound, !0)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function o() {
					this.el.removeEventListener("focus", this._handleUpdateCounterBound, !0), this.el.removeEventListener("input", this._handleUpdateCounterBound, !0)
				}
			},
			{
				key: "_setupCounter",
				value: function a() {
					this.counterEl = document.createElement("span"), $(this.counterEl).addClass("character-counter").css({
						"float": "right",
						"font-size": "12px",
						height: 1
					}), this.$el.parent().append(this.counterEl)
				}
			},
			{
				key: "_removeCounter",
				value: function r() {
					$(this.counterEl).remove()
				}
			},
			{
				key: "updateCounter",
				value: function l() {
					var t = +this.$el.attr("data-length"),
						e = this.el.value.length;
					this.isValidLength = t >= e;
					var i = e;
					t && (i += "/" + t, this._validateInput()), $(this.counterEl).html(i)
				}
			},
			{
				key: "_validateInput",
				value: function h() {
					this.isValidLength && this.isInvalid ? (this.isInvalid = !1, this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = !0, this.$el.removeClass("valid"), this.$el.addClass("invalid"))
				}
			}], [{
				key: "init",
				value: function d(t, e) {
					return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function u(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_CharacterCounter
				}
			},
			{
				key: "defaults",
				get: function() {
					return t
				}
			}]), i
		}(Component);
	M.CharacterCounter = e, M.jQueryLoaded && M.initializeJqueryWrapper(e, "characterCounter", "M_CharacterCounter")
}(cash), function($) {
	"use strict";
	var t = {
		duration: 200,
		dist: -100,
		shift: 0,
		padding: 0,
		numVisible: 5,
		fullWidth: !1,
		indicators: !1,
		noWrap: !1,
		onCycleTo: null
	},
		e = function(e) {
			function i(t, e) {
				_classCallCheck(this, i);
				var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
				return n.el.M_Carousel = n, n.options = $.extend({}, i.defaults, e), n.hasMultipleSlides = n.$el.find(".carousel-item").length > 1, n.showIndicators = n.options.indicators && n.hasMultipleSlides, n.noWrap = n.options.noWrap || !n.hasMultipleSlides, n.pressed = !1, n.dragged = !1, n.offset = n.target = 0, n.images = [], n.itemWidth = n.$el.find(".carousel-item").first().innerWidth(), n.itemHeight = n.$el.find(".carousel-item").first().innerHeight(), n.dim = 2 * n.itemWidth + n.options.padding || 1, n._autoScrollBound = n._autoScroll.bind(n), n._trackBound = n._track.bind(n), n.options.fullWidth && (n.options.dist = 0, n._setCarouselHeight(), n.showIndicators && n.$el.find(".carousel-fixed-item").addClass("with-indicators")), n.$indicators = $('<ul class="indicators"></ul>'), n.$el.find(".carousel-item").each(function(t, e) {
					if (n.images.push(t), n.showIndicators) {
						var i = $('<li class="indicator-item"></li>');
						0 === e && i[0].classList.add("active"), n.$indicators.append(i)
					}
				}), n.showIndicators && n.$el.append(n.$indicators), n.count = n.images.length, n.options.numVisible = Math.min(n.count, n.options.numVisible), n.xform = "transform", ["webkit", "Moz", "O", "ms"].every(function(t) {
					var e = t + "Transform";
					return "undefined" != typeof document.body.style[e] ? (n.xform = e, !1) : !0
				}), n._setupEventHandlers(), n._scroll(n.offset), n
			}
			return _inherits(i, e), _createClass(i, [{
				key: "destroy",
				value: function n() {
					this._removeEventHandlers(), this.el.M_Carousel = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function s() {
					var t = this;
					this._handleCarouselTapBound = this._handleCarouselTap.bind(this), this._handleCarouselDragBound = this._handleCarouselDrag.bind(this), this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this), this._handleCarouselClickBound = this._handleCarouselClick.bind(this), "undefined" != typeof window.ontouchstart && (this.el.addEventListener("touchstart", this._handleCarouselTapBound), this.el.addEventListener("touchmove", this._handleCarouselDragBound), this.el.addEventListener("touchend", this._handleCarouselReleaseBound)), this.el.addEventListener("mousedown", this._handleCarouselTapBound), this.el.addEventListener("mousemove", this._handleCarouselDragBound), this.el.addEventListener("mouseup", this._handleCarouselReleaseBound), this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound), this.el.addEventListener("click", this._handleCarouselClickBound), this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.$indicators.find(".indicator-item").each(function(e, i) {
						e.addEventListener("click", t._handleIndicatorClickBound)
					}));
					var e = M.throttle(this._handleResize, 200);
					this._handleThrottledResizeBound = e.bind(this), window.addEventListener("resize", this._handleThrottledResizeBound)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function o() {
					var t = this;
					"undefined" != typeof window.ontouchstart && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound), this.el.removeEventListener("touchmove", this._handleCarouselDragBound), this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)), this.el.removeEventListener("mousedown", this._handleCarouselTapBound), this.el.removeEventListener("mousemove", this._handleCarouselDragBound), this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound), this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound), this.el.removeEventListener("click", this._handleCarouselClickBound), this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function(e, i) {
						e.removeEventListener("click", t._handleIndicatorClickBound)
					}), window.removeEventListener("resize", this._handleThrottledResizeBound)
				}
			},
			{
				key: "_handleCarouselTap",
				value: function a(t) {
					"mousedown" === t.type && $(t.target).is("img") && t.preventDefault(), this.pressed = !0, this.dragged = !1, this.verticalDragged = !1, this.reference = this._xpos(t), this.referenceY = this._ypos(t), this.velocity = this.amplitude = 0, this.frame = this.offset, this.timestamp = Date.now(), clearInterval(this.ticker), this.ticker = setInterval(this._trackBound, 100)
				}
			},
			{
				key: "_handleCarouselDrag",
				value: function r(t) {
					var e = void 0,
						i = void 0,
						n = void 0,
						s = void 0;
					if (this.pressed) if (e = this._xpos(t), i = this._ypos(t), n = this.reference - e, s = Math.abs(this.referenceY - i), 30 > s && !this.verticalDragged)(n > 2 || -2 > n) && (this.dragged = !0, this.reference = e, this._scroll(this.offset + n));
					else {
						if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1;
						this.verticalDragged = !0
					}
					return this.dragged ? (t.preventDefault(), t.stopPropagation(), !1) : void 0
				}
			},
			{
				key: "_handleCarouselRelease",
				value: function l(t) {
					return this.pressed ? (this.pressed = !1, clearInterval(this.ticker), this.target = this.offset, (this.velocity > 10 || this.velocity < -10) && (this.amplitude = .9 * this.velocity, this.target = this.offset + this.amplitude), this.target = Math.round(this.target / this.dim) * this.dim, this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)), this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound), this.dragged && (t.preventDefault(), t.stopPropagation()), !1) : void 0
				}
			},
			{
				key: "_handleCarouselClick",
				value: function h(t) {
					if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1;
					if (!this.options.fullWidth) {
						var e = $(t.target).closest(".carousel-item").index(),
							i = this._wrap(this.center) - e;
						0 !== i && (t.preventDefault(), t.stopPropagation()), this._cycleTo(e)
					}
				}
			},
			{
				key: "_handleIndicatorClick",
				value: function d(t) {
					t.stopPropagation();
					
					var e = $(t.target).closest(".indicator-item");
					e.length && this._cycleTo(e.index())
				}
			},
			{
				key: "_handleResize",
				value: function u(t) {
					this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(), this.imageHeight = this.$el.find(".carousel-item.active").height(), this.dim = 2 * this.itemWidth + this.options.padding, this.offset = 2 * this.center * this.itemWidth, this.target = this.offset, this._setCarouselHeight(!0)) : this._scroll()
				}
			},
			{
				key: "_setCarouselHeight",
				value: function c(t) {
					var e = this,
						i = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first(),
						n = i.find("img").first();
					
					if (n.length) if (n[0].complete) {
						var s = n.height();
						
						if (s > 0) this.$el.css("height", s + "px");
						else {
							var o = n[0].naturalWidth,
								a = n[0].naturalHeight,
								r = this.$el.width() / o * a;
							this.$el.css("height", r + "px")
						}
					} else n.one("load", function(t, i) {
						e.$el.css("height", t.offsetHeight + "px")
					});
					else if (!t) {
						var l = i.height();
						
						this.$el.css("height", l + "px")
					}
				}
			},
			{
				key: "_xpos",
				value: function p(t) {
					return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
				}
			},
			{
				key: "_ypos",
				value: function v(t) {
					return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY
				}
			},
			{
				key: "_wrap",
				value: function f(t) {
					return t >= this.count ? t % this.count : 0 > t ? this._wrap(this.count + t % this.count) : t
				}
			},
			{
				key: "_track",
				value: function m() {
					var t = void 0,
						e = void 0,
						i = void 0,
						n = void 0;
					t = Date.now(), e = t - this.timestamp, this.timestamp = t, i = this.offset - this.frame, this.frame = this.offset, n = 1e3 * i / (1 + e), this.velocity = .8 * n + .2 * this.velocity
				}
			},
			{
				key: "_autoScroll",
				value: function g() {
					var t = void 0,
						e = void 0;
					this.amplitude && (t = Date.now() - this.timestamp, e = this.amplitude * Math.exp(-t / this.options.duration), e > 2 || -2 > e ? (this._scroll(this.target - e), requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target))
				}
			},
			{
				key: "_scroll",
				value: function y(t) {
					var e = this;
					this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"), null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout), this.scrollingTimeout = window.setTimeout(function() {
						e.$el.removeClass("scrolling")
					}, this.options.duration);
					var i = void 0,
						n = void 0,
						s = void 0,
						o = void 0,
						a = void 0,
						r = void 0,
						l = void 0,
						h = void 0,
						d = void 0,
						u = void 0,
						c = this.center,
						p = 1 / this.options.numVisible;
					if (this.offset = "number" == typeof t ? t : this.offset, this.center = Math.floor((this.offset + this.dim / 2) / this.dim), s = this.offset - this.center * this.dim, o = 0 > s ? 1 : -1, a = -o * s * 2 / this.dim, n = this.count >> 1, this.options.fullWidth ? (l = "translateX(0)", u = 1) : (l = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ", l += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)", u = 1 - p * a), this.showIndicators) {
						var v = this.center % this.count,
							f = this.$indicators.find(".indicator-item.active");
						f.index() !== v && (f.removeClass("active"), this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"))
					}
					if (!this.noWrap || this.center >= 0 && this.center < this.count) {
						r = this.images[this._wrap(this.center)], $(r).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"), r.classList.add("active"));
						var m = l + " translateX(" + -s / 2 + "px) translateX(" + o * this.options.shift * a * i + "px) translateZ(" + this.options.dist * a + "px)";
						this._updateItemStyle(r, u, 0, m)
					}
					for (i = 1; n >= i; ++i) {
						if (this.options.fullWidth ? (h = this.options.dist, d = i === n && 0 > s ? 1 - a : 1) : (h = this.options.dist * (2 * i + a * o), d = 1 - p * (2 * i + a * o)), !this.noWrap || this.center + i < this.count) {
							r = this.images[this._wrap(this.center + i)];
							var g = l + " translateX(" + (this.options.shift + (this.dim * i - s) / 2) + "px) translateZ(" + h + "px)";
							this._updateItemStyle(r, d, -i, g)
						}
						if (this.options.fullWidth ? (h = this.options.dist, d = i === n && s > 0 ? 1 - a : 1) : (h = this.options.dist * (2 * i - a * o), d = 1 - p * (2 * i - a * o)), !this.noWrap || this.center - i >= 0) {
							r = this.images[this._wrap(this.center - i)];
							var y = l + " translateX(" + (-this.options.shift + (-this.dim * i - s) / 2) + "px) translateZ(" + h + "px)";
							this._updateItemStyle(r, d, -i, y)
						}
					}
					if (!this.noWrap || this.center >= 0 && this.center < this.count) {
						r = this.images[this._wrap(this.center)];
						var _ = l + " translateX(" + -s / 2 + "px) translateX(" + o * this.options.shift * a + "px) translateZ(" + this.options.dist * a + "px)";
						this._updateItemStyle(r, u, 0, _)
					}
					var b = this.$el.find(".carousel-item").eq(this._wrap(this.center));
					c !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, b[0], this.dragged), "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, b[0], this.dragged), this.oneTimeCallback = null)
				}
			},
			{
				key: "_updateItemStyle",
				value: function _(t, e, i, n) {
					t.style[this.xform] = n, t.style.zIndex = i, t.style.opacity = e, t.style.visibility = "visible"
				}
			},
			{
				key: "_cycleTo",
				value: function b(t, e) {
					var i = this.center % this.count - t;
					this.noWrap || (0 > i ? Math.abs(i + this.count) < Math.abs(i) && (i += this.count) : i > 0 && Math.abs(i - this.count) < i && (i -= this.count)), this.target = this.dim * Math.round(this.offset / this.dim), 0 > i ? this.target += this.dim * Math.abs(i) : i > 0 && (this.target -= this.dim * i), "function" == typeof e && (this.oneTimeCallback = e), this.offset !== this.target && (this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound))
				}
			},
			{
				key: "next",
				value: function k(t) {
					(void 0 === t || isNaN(t)) && (t = 1);
					var e = this.center + t;
					if (e > this.count || 0 > e) {
						if (this.noWrap) return;
						e = this._wrap(e)
					}
					this._cycleTo(e)
				}
			},
			{
				key: "prev",
				value: function C(t) {
					(void 0 === t || isNaN(t)) && (t = 1);
					var e = this.center - t;
					if (e > this.count || 0 > e) {
						if (this.noWrap) return;
						e = this._wrap(e)
					}
					this._cycleTo(e)
				}
			},
			{
				key: "set",
				value: function w(t, e) {
					if ((void 0 === t || isNaN(t)) && (t = 0), t > this.count || 0 > t) {
						if (this.noWrap) return;
						t = this._wrap(t)
					}
					this._cycleTo(t, e)
				}
			}], [{
				key: "init",
				value: function E(t, e) {
					return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function x(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Carousel
				}
			},
			{
				key: "defaults",
				get: function() {
					return t
				}
			}]), i
		}(Component);
	M.Carousel = e, M.jQueryLoaded && M.initializeJqueryWrapper(e, "carousel", "M_Carousel")
}(cash), function($) {
	"use strict";
	var t = {
		onOpen: void 0,
		onClose: void 0
	},
		e = function(e) {
			function i(t, e) {
				_classCallCheck(this, i);
				var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
				return n.el.M_TapTarget = n, n.options = $.extend({}, i.defaults, e), n.isOpen = !1, n.$origin = $("#" + n.$el.attr("data-target")), n._setup(), n._calculatePositioning(), n._setupEventHandlers(), n
			}
			return _inherits(i, e), _createClass(i, [{
				key: "destroy",
				value: function n() {
					this._removeEventHandlers(), this.el.TapTarget = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function s() {
					this._handleDocumentClickBound = this._handleDocumentClick.bind(this), this._handleTargetClickBound = this._handleTargetClick.bind(this), this._handleOriginClickBound = this._handleOriginClick.bind(this), this.el.addEventListener("click", this._handleTargetClickBound), this.originEl.addEventListener("click", this._handleOriginClickBound);
					var t = M.throttle(this._handleResize, 200);
					this._handleThrottledResizeBound = t.bind(this), window.addEventListener("resize", this._handleThrottledResizeBound)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function o() {
					this.el.removeEventListener("click", this._handleTargetClickBound), this.originEl.removeEventListener("click", this._handleOriginClickBound), window.removeEventListener("resize", this._handleThrottledResizeBound)
				}
			},
			{
				key: "_handleTargetClick",
				value: function a(t) {
					this.open()
				}
			},
			{
				key: "_handleOriginClick",
				value: function r(t) {
					this.close()
				}
			},
			{
				key: "_handleResize",
				value: function l(t) {
					this._calculatePositioning()
				}
			},
			{
				key: "_handleDocumentClick",
				value: function h(t) {
					$(t.target).closest(".tap-target-wrapper").length || (this.close(), t.preventDefault(), t.stopPropagation())
				}
			},
			{
				key: "_setup",
				value: function d() {
					this.wrapper = this.$el.parent()[0], this.waveEl = $(this.wrapper).find(".tap-target-wave")[0], this.originEl = $(this.wrapper).find(".tap-target-origin")[0], this.contentEl = this.$el.find(".tap-target-content")[0], $(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"), this.wrapper.classList.add("tap-target-wrapper"), this.$el.before($(this.wrapper)), this.wrapper.append(this.el)), this.contentEl || (this.contentEl = document.createElement("div"), this.contentEl.classList.add("tap-target-content"), this.$el.append(this.contentEl)), this.waveEl || (this.waveEl = document.createElement("div"), this.waveEl.classList.add("tap-target-wave"), this.originEl || (this.originEl = this.$origin.clone(!0, !0), this.originEl.addClass("tap-target-origin"), this.originEl.removeAttr("id"), this.originEl.removeAttr("style"), this.originEl = this.originEl[0], this.waveEl.append(this.originEl)), this.wrapper.append(this.waveEl))
				}
			},
			{
				key: "_calculatePositioning",
				value: function u() {
					var t = "fixed" === this.$origin.css("position");
					if (!t) for (var e = this.$origin.parents(), i = 0; i < e.length && !(t = "fixed" == $(e[i]).css("position")); i++);
					var n = this.$origin.outerWidth(),
						s = this.$origin.outerHeight(),
						o = t ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top,
						a = t ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left,
						r = window.innerWidth,
						l = window.innerHeight,
						h = r / 2,
						d = l / 2,
						u = h >= a,
						c = a > h,
						p = d >= o,
						v = o > d,
						f = a >= .25 * r && .75 * r >= a,
						m = this.$el.outerWidth(),
						g = this.$el.outerHeight(),
						y = o + s / 2 - g / 2,
						_ = a + n / 2 - m / 2,
						b = t ? "fixed" : "absolute",
						k = f ? m : m / 2 + n,
						C = g / 2,
						w = p ? g / 2 : 0,
						E = 0,
						x = u && !f ? m / 2 - n : 0,
						O = 0,
						T = n,
						L = v ? "bottom" : "top",
						B = n > s ? 2 * n : 2 * n,
						D = B,
						S = g / 2 - D / 2,
						I = m / 2 - B / 2,
						A = {};
					
					A.top = p ? y + "px" : "", A.right = c ? r - _ - m + "px" : "", A.bottom = v ? l - y - g + "px" : "", A.left = u ? _ + "px" : "", A.position = b, $(this.wrapper).css(A), $(this.contentEl).css({
						width: k + "px",
						height: C + "px",
						top: w + "px",
						right: O + "px",
						bottom: E + "px",
						left: x + "px",
						padding: T + "px",
						verticalAlign: L
					}), $(this.waveEl).css({
						top: S + "px",
						left: I + "px",
						width: B + "px",
						height: D + "px"
					})
				}
			},
			{
				key: "open",
				value: function c() {
					this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call(this, this.$origin[0]), this.isOpen = !0, this.wrapper.classList.add("open"), document.body.addEventListener("click", this._handleDocumentClickBound, !0), document.body.addEventListener("touchend", this._handleDocumentClickBound))
				}
			},
			{
				key: "close",
				value: function p() {
					this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call(this, this.$origin[0]), this.isOpen = !1, this.wrapper.classList.remove("open"), document.body.removeEventListener("click", this._handleDocumentClickBound, !0), document.body.removeEventListener("touchend", this._handleDocumentClickBound))
				}
			}], [{
				key: "init",
				value: function v(t, e) {
					return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function f(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_TapTarget
				}
			},
			{
				key: "defaults",
				get: function() {
					return t
				}
			}]), i
		}(Component);
	M.TapTarget = e, M.jQueryLoaded && M.initializeJqueryWrapper(e, "tapTarget", "M_TapTarget")
}(cash), function($) {
	"use strict";
	var t = {
		classes: "",
		dropdownOptions: {}
	},
		e = function(e) {
			function i(t, e) {
				_classCallCheck(this, i);
				var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
				return n.$el.hasClass("browser-default") ? _possibleConstructorReturn(n) : (n.el.M_FormSelect = n, n.options = $.extend({}, i.defaults, e), n.isMultiple = n.$el.prop("multiple"), n.el.tabIndex = -1, n._keysSelected = {}, n._valueDict = {}, n._setupDropdown(), n._setupEventHandlers(), n)
			}
			return _inherits(i, e), _createClass(i, [{
				key: "destroy",
				value: function n() {
					this._removeEventHandlers(), this._removeDropdown(), this.el.M_FormSelect = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function s() {
					var t = this;
					this._handleSelectChangeBound = this._handleSelectChange.bind(this), this._handleOptionClickBound = this._handleOptionClick.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), $(this.dropdownOptions).find("li:not(.optgroup)").each(function(e) {
						e.addEventListener("click", t._handleOptionClickBound)
					}), this.el.addEventListener("change", this._handleSelectChangeBound), this.input.addEventListener("click", this._handleInputClickBound)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function o() {
					var t = this;
					$(this.dropdownOptions).find("li:not(.optgroup)").each(function(e) {
						e.removeEventListener("click", t._handleOptionClickBound)
					}), this.el.removeEventListener("change", this._handleSelectChangeBound), this.input.removeEventListener("click", this._handleInputClickBound)
				}
			},
			{
				key: "_handleSelectChange",
				value: function a(t) {
					this._setValueToInput()
				}
			},
			{
				key: "_handleOptionClick",
				value: function r(t) {
					t.preventDefault();
					
					var e = $(t.target).closest("li")[0],
						i = e.id;
					if (!$(e).hasClass("disabled") && !$(e).hasClass("optgroup") && i.length) {
						var n = !0;
						if (this.isMultiple) {
							var s = $(this.dropdownOptions).find("li.disabled.selected");
							s.length && (s.removeClass("selected"), s.find('input[type="checkbox"]').prop("checked", !1), this._toggleEntryFromArray(s[0].id)), n = this._toggleEntryFromArray(i)
						} else $(this.dropdownOptions).find("li").removeClass("selected"), $(e).toggleClass("selected", n);
						$(this._valueDict[i].el).prop("selected", n), this.$el.trigger("change")
					}
					t.stopPropagation()
				}
			},
			{
				key: "_handleInputClick",
				value: function l() {
					this.dropdown && this.dropdown.isOpen && (this._setValueToInput(), this._setSelectedStates())
				}
			},
			{
				key: "_setupDropdown",
				value: function h() {
					var t = this;
					this.wrapper = document.createElement("div"), $(this.wrapper).addClass("select-wrapper " + this.options.classes), this.$el.before($(this.wrapper)), this.wrapper.appendChild(this.el), this.el.disabled && this.wrapper.classList.add("disabled"), this.$selectOptions = this.$el.children("option, optgroup"), this.dropdownOptions = document.createElement("ul"), this.dropdownOptions.id = "select-options-" + M.guid(), $(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")), this.$selectOptions.length && this.$selectOptions.each(function(e) {
						if ($(e).is("option")) {
							var i = void 0;
							i = t.isMultiple ? t._appendOptionWithIcon(t.$el, e, "multiple") : t._appendOptionWithIcon(t.$el, e), t._addOptionToValueDict(e, i)
						} else if ($(e).is("optgroup")) {
							var n = $(e).children("option");
							$(t.dropdownOptions).append($('<li class="optgroup"><span>' + e.getAttribute("label") + "</span></li>")[0]), n.each(function(e) {
								var i = t._appendOptionWithIcon(t.$el, e, "optgroup-option");
								t._addOptionToValueDict(e, i)
							})
						}
					}), this.$el.after(this.dropdownOptions), this.input = document.createElement("input"), $(this.input).addClass("select-dropdown dropdown-trigger"), this.input.setAttribute("type", "text"), this.input.setAttribute("readonly", "true"), this.input.setAttribute("data-target", this.dropdownOptions.id), this.el.disabled && $(this.input).prop("disabled", "true"), this.$el.before(this.input), this._setValueToInput();
					
					var e = $('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
					if (this.$el.before(e[0]), !this.el.disabled) {
						var i = $.extend({}, this.options.dropdownOptions);
						i.onOpenEnd = function(e) {
							var i = $(t.dropdownOptions).find(".selected").first();
							
							if (t.dropdown.isScrollable && i.length) {
								var n = i[0].getBoundingClientRect().top - t.dropdownOptions.getBoundingClientRect().top;
								n -= t.dropdownOptions.clientHeight / 2, t.dropdownOptions.scrollTop = n
							}
						}, this.isMultiple && (i.closeOnClick = !1), this.dropdown = M.Dropdown.init(this.input, i)
					}
					this._setSelectedStates()
				}
			},
			{
				key: "_addOptionToValueDict",
				value: function d(t, e) {
					var i = Object.keys(this._valueDict).length,
						n = this.dropdownOptions.id + i,
						s = {};
					
					e.id = n, s.el = t, s.optionEl = e, this._valueDict[n] = s
				}
			},
			{
				key: "_removeDropdown",
				value: function u() {
					$(this.wrapper).find(".caret").remove(), $(this.input).remove(), $(this.dropdownOptions).remove(), $(this.wrapper).before(this.$el), $(this.wrapper).remove()
				}
			},
			{
				key: "_appendOptionWithIcon",
				value: function c(t, e, i) {
					var n = e.disabled ? "disabled " : "",
						s = "optgroup-option" === i ? "optgroup-option " : "",
						o = this.isMultiple ? '<label><input type="checkbox"' + n + '"/><span>' + e.innerHTML + "</span></label>" : e.innerHTML,
						a = $("<li></li>"),
						r = $("<span></span>");
					r.html(o), a.addClass(n + " " + s), a.append(r);
					var l = e.getAttribute("data-icon");
					if (l) {
						var h = $('<img alt="" src="' + l + '">');
						a.prepend(h)
					}
					return $(this.dropdownOptions).append(a[0]), a[0]
				}
			},
			{
				key: "_toggleEntryFromArray",
				value: function p(t) {
					var e = !this._keysSelected.hasOwnProperty(t),
						i = $(this._valueDict[t].optionEl);
					return e ? this._keysSelected[t] = !0 : delete this._keysSelected[t], i.toggleClass("selected", e), i.find('input[type="checkbox"]').prop("checked", e), i.prop("selected", e), e
				}
			},
			{
				key: "_setValueToInput",
				value: function v() {
					var t = [],
						e = this.$el.find("option");
					if (e.each(function(e) {
						if ($(e).prop("selected")) {
							var i = $(e).text();
							
							t.push(i)
						}
					}), !t.length) {
						var i = this.$el.find("option:disabled").eq(0);
						i.length && "" === i[0].value && t.push(i.text())
					}
					this.input.value = t.join(", ")
				}
			},
			{
				key: "_setSelectedStates",
				value: function f() {
					this._keysSelected = {};
					
					for (var t in this._valueDict) {
						var e = this._valueDict[t],
							i = $(e.el).prop("selected");
						$(e.optionEl).find('input[type="checkbox"]').prop("checked", i), i ? (this._activateOption($(this.dropdownOptions), $(e.optionEl)), this._keysSelected[t] = !0) : $(e.optionEl).removeClass("selected")
					}
				}
			},
			{
				key: "_activateOption",
				value: function m(t, e) {
					if (e) {
						this.isMultiple || t.find("li.selected").removeClass("selected");
						var i = $(e);
						i.addClass("selected")
					}
				}
			},
			{
				key: "getSelectedValues",
				value: function g() {
					var t = [];
					for (var e in this._keysSelected) t.push(this._valueDict[e].el.value);
					return t
				}
			}], [{
				key: "init",
				value: function y(t, e) {
					return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function _(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_FormSelect
				}
			},
			{
				key: "defaults",
				get: function() {
					return t
				}
			}]), i
		}(Component);
	M.FormSelect = e, M.jQueryLoaded && M.initializeJqueryWrapper(e, "formSelect", "M_FormSelect")
}(cash), function($, t) {
	"use strict";
	var e = {},
		i = function(i) {
			function n(t, e) {
				_classCallCheck(this, n);
				var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
				return i.el.M_Range = i, i.options = $.extend({}, n.defaults, e), i._mousedown = !1, i._setupThumb(), i._setupEventHandlers(), i
			}
			return _inherits(n, i), _createClass(n, [{
				key: "destroy",
				value: function s() {
					this._removeEventHandlers(), this._removeThumb(), this.el.M_Range = void 0
				}
			},
			{
				key: "_setupEventHandlers",
				value: function o() {
					this._handleRangeChangeBound = this._handleRangeChange.bind(this), this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this), this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this), this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this), this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this), this.el.addEventListener("change", this._handleRangeChangeBound), this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound), this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound), this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound), this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound), this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound), this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound), this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
				}
			},
			{
				key: "_removeEventHandlers",
				value: function a() {
					this.el.removeEventListener("change", this._handleRangeChangeBound), this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound), this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound), this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound), this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound), this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound), this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound), this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
				}
			},
			{
				key: "_handleRangeChange",
				value: function r() {
					$(this.value).html(this.$el.val()), $(this.thumb).hasClass("active") || this._showRangeBubble();
					
					var t = this._calcRangeOffset();
					
					$(this.thumb).addClass("active").css("left", t + "px")
				}
			},
			{
				key: "_handleRangeMousedownTouchstart",
				value: function l(t) {
					if ($(this.value).html(this.$el.val()), this._mousedown = !0, this.$el.addClass("active"), $(this.thumb).hasClass("active") || this._showRangeBubble(), "input" !== t.type) {
						var e = this._calcRangeOffset();
						
						$(this.thumb).addClass("active").css("left", e + "px")
					}
				}
			},
			{
				key: "_handleRangeInputMousemoveTouchmove",
				value: function h() {
					if (this._mousedown) {
						$(this.thumb).hasClass("active") || this._showRangeBubble();
						
						var t = this._calcRangeOffset();
						
						$(this.thumb).addClass("active").css("left", t + "px"), $(this.value).html(this.$el.val())
					}
				}
			},
			{
				key: "_handleRangeMouseupTouchend",
				value: function d() {
					this._mousedown = !1, this.$el.removeClass("active")
				}
			},
			{
				key: "_handleRangeBlurMouseoutTouchleave",
				value: function u() {
					if (!this._mousedown) {
						var e = parseInt(this.$el.css("padding-left")),
							i = 7 + e + "px";
						$(this.thumb).hasClass("active") && (t.remove(this.thumb), t({
							targets: this.thumb,
							height: 0,
							width: 0,
							top: 10,
							easing: "easeOutQuad",
							marginLeft: i,
							duration: 100
						})), $(this.thumb).removeClass("active")
					}
				}
			},
			{
				key: "_setupThumb",
				value: function c() {
					this.thumb = document.createElement("span"), this.value = document.createElement("span"), $(this.thumb).addClass("thumb"), $(this.value).addClass("value"), $(this.thumb).append(this.value), this.$el.after(this.thumb)
				}
			},
			{
				key: "_removeThumb",
				value: function p() {
					$(this.thumb).remove()
				}
			},
			{
				key: "_showRangeBubble",
				value: function v() {
					var e = parseInt($(this.thumb).parent().css("padding-left")),
						i = -7 + e + "px";
					t.remove(this.thumb), t({
						targets: this.thumb,
						height: 30,
						width: 30,
						top: -30,
						marginLeft: i,
						duration: 300,
						easing: "easeOutQuint"
					})
				}
			},
			{
				key: "_calcRangeOffset",
				value: function f() {
					var t = this.$el.width() - 15,
						e = parseFloat(this.$el.attr("max")) || 100,
						i = parseFloat(this.$el.attr("min")) || 0,
						n = (parseFloat(this.$el.val()) - i) / (e - i);
					return n * t
				}
			}], [{
				key: "init",
				value: function m(t, e) {
					return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
				}
			},
			{
				key: "getInstance",
				value: function g(t) {
					var e = t.jquery ? t[0] : t;
					return e.M_Range
				}
			},
			{
				key: "defaults",
				get: function() {
					return e
				}
			}]), n
		}(Component);
	M.Range = i, M.jQueryLoaded && M.initializeJqueryWrapper(i, "range", "M_Range"), i.init($("input[type=range]"))
}(cash, M.anime);
var debounce = function(t, e) {
	var i;
	return function() {
		var n = Array.prototype.slice.call(arguments),
			s = this;
		clearTimeout(i), i = setTimeout(function() {
			t.apply(s, n)
		}, e)
	}
},
	chartExists = function(t) {
		var e = !1;
		for (var i in Chart.instances) if (chart = Chart.instances[i], t.is(chart.canvas)) {
			e = !0;
			break
		}
		return e ? chart : !1
	},
	chartColorYellow = "rgb(255,196,0)",
	chartColorBlue = "rgb(0,176,255)",
	chartColorPink = "rgb(255,64,129)",
	chartColorGreen = "rgb(112,190,116)",
	tooltipsOpts = {
		enabled: !1,
		mode: "index",
		intersect: !1,
		backgroundColor: "#fff",
		cornerRadius: 2,
		caretSize: 0,
		xPadding: 12,
		yPadding: 12,
		custom: function(t) {
			function e(t) {
				return t.lines
			}
			var i = document.getElementById("chartjs-tooltip");
			if (i || (i = document.createElement("div"), i.id = "chartjs-tooltip", i.innerHTML = "<table></table>", document.body.appendChild(i)), 0 === t.opacity) return void(i.style.opacity = 0);
			if (i.classList.remove("above", "below", "no-transform"), t.yAlign ? i.classList.add(t.yAlign) : i.classList.add("no-transform"), t.body) {
				var n = t.title || [],
					s = t.body.map(e),
					o = t.footer,
					a = "<thead>";
				n.forEach(function(t) {
					a += "<tr><th>" + t + "</th></tr>"
				}), a += "</thead><tbody>", s.forEach(function(e, i) {
					var n = t.labelColors[i],
						o = "";
					if (s.length > 1) var r = o = '<span class="chartjs-tooltip-key" style="background:' + n.backgroundColor + ';"></span>';
					a += "<tr><td>" + o + e + "</td></tr>"
				}), o.length && (a += "<tfoot>", o.forEach(function(t, e) {
					a += "<tr><td>" + t + "</td></tr>"
				}), a += "</tfoot>"), a += "</tbody>";
				var r = i.querySelector("table");
				r.innerHTML = a
			}
			var l = this._chart.canvas.getBoundingClientRect();
			
			i.style.opacity = 1, i.style.left = $(window).scrollLeft() + l.left + t.caretX + 20 + "px", i.style.top = $(window).scrollTop() + l.top + t.caretY + "px", i.style.fontSize = t.fontSize, i.style.fontStyle = t._fontStyle, i.style.padding = t.yPadding + "px " + t.xPadding + "px"
		}
	},
	areaOptions = {
		maintainAspectRatio: !1,
		spanGaps: !1,
		elements: {
			line: {
				tension: .4
			}
		},
		
		scales: {
			yAxes: [{
				stacked: !0
			}]
		},
		
		plugins: {
			filler: {
				propagate: !1
			}
		}
	},
	flushChartOptions = Object.assign({}, areaOptions);
flushChartOptions.hover = {
	hover: {
		mode: "index",
		intersect: !1
	}
}, flushChartOptions.legend = {
	display: !1
}, flushChartOptions.scales = {
	xAxes: [{
		display: !1
	}],
	yAxes: [{
		display: !1,
		stacked: !0
	}]
};

var percentageFooterCallback = function(t, e) {
	var i = "",
		n = 0,
		s = 0;
	t.forEach(function(t) {
		s = e.datasets[t.datasetIndex].data[t.index], e.datasets[t.datasetIndex].data.forEach(function(t) {
			n += t
		})
	});
	
	var o = (s / n * 100).toFixed(1);
	return o + "%"
},
	percentageStackedFooterCallback = function(t, e) {
		var i = "",
			n = 0,
			s = 0;
		t.forEach(function(t) {
			s = e.datasets[t.datasetIndex].data[t.index], e.datasets.forEach(function(e) {
				n += e.data[t.index]
			})
		});
		
		var o = (s / n * 100).toFixed(1);
		return o + "%"
	},
	doughnutLegendCallback = function(t) {
		var e = $('<div class="chart-legend"></div>'),
			i = $("<ul></ul>"),
			n = t.data.labels;
		if (t.data.datasets.length) for (var s = 0; s < t.data.datasets[0].data.length; s++) {
			var o = t.data.datasets[0].data[s],
				a = t.data.datasets[0].backgroundColor[s],
				r = $('<li><span style="background-color: ' + a + '" class="dot"></span><span class="label">' + n[s] + '</span><span class="value">' + o + "</span></li>");
			i.append(r)
		}
		return e.append(i), e
	},
	percDoughnutLegendCallback = function(t) {
		if ($legend = $('<div class="perc-doughnut-legend"></div>'), t.data.datasets.length) {
			for (var e = 0, i = 0, n = "#000000", s = 0; s < t.data.datasets[0].data.length; s++) {
				var o = t.data.datasets[0].data[s],
					a = t.data.datasets[0].backgroundColor[s];
				o > i && (i = o, n = a), e += o
			}
			$legend.text((i / e * 100).toFixed(1) + "%"), $legend.css("color", n)
		}
		return $legend
	},
	cardLegendCallback = function(t) {
		for (var e = $('<div class="card-metrics"></div>'), i = 0; i < t.data.datasets.length; i++) {
			var n = t.data.datasets[i],
				s = $('<div class="card-metric colored waves-effect waves-light active"></div>');
			n.borderColor && s.css({
				backgroundColor: n.borderColor
			});
			
			var o = $('<div class="card-metric-title">' + n.label + "</div>"),
				a = n.data.reduce(function(t, e) {
					return t + e
				}),
				r = $('<div class="card-metric-value">' + a + "</div>");
			s.append(o), s.append(r), e.append(s)
		}
		return e
	},
	tabLegendCallback = function(t) {
		for (var e = $('<div class="card-tabs"></div>'), i = $('<ul class="tabs tabs-fixed-width tabs-transparent"></ul>'), n = 0; n < t.data.datasets.length; n++) {
			var s = t.data.datasets[n],
				o = $('<li class="tab"></li>'),
				a = $('<a href="#">' + s.label + "</a>");
			o.append(a), i.append(o)
		}
		return e.append(i), e
	};
!
function($) {
	$(document).ready(function() {
		$(".card-toolbar-actions .dropdown-trigger").dropdown({
			constrainWidth: !1
		});
		
		var t = $(".masonry");
		t.masonry({
			itemSelector: ".masonry > .col",
			columnWidth: ".m6"
		}), Chart.scaleService.updateScaleDefaults("linear", {
			position: "right"
		}), Chart.scaleService.updateScaleDefaults("category", {
			gridLines: {
				display: !1
			}
		}), Chart.defaults.scale.gridLines.color = "rgba(0,0,0,.08)", Chart.defaults.scale.gridLines.zeroLineColor = "rgba(0,0,0,.08)", Chart.defaults.bar.scales.xAxes[0].barPercentage = .85, Chart.defaults.bar.scales.xAxes[0].categoryPercentage = 1, Chart.defaults.global.legend.display = !1, Chart.defaults.candlestick.scales.xAxes[0].gridLines = {
			display: !1
		}, Chart.defaults.global.elements.point.radius = 0, Chart.defaults.global.elements.point.borderWidth = 20, Chart.defaults.global.elements.point.hoverRadius = 5, Chart.defaults.global.elements.point.backgroundColor = "rgb(0,0,0)", Chart.defaults.global.elements.point.borderColor = "rgba(0,0,0,.1)", Chart.defaults.global.elements.line.borderColor = "rgb(0,0,0)", Chart.defaults.radar.elements.point = {
			hitRadius: 10,
			radius: 0,
			borderWidth: 1e-4,
			hoverRadius: 4,
			hoverBorderWidth: 1e-4
		}, Chart.defaults.radar.elements.line.tension = .15, Chart.defaults.radar.elements.line.borderWidth = 1e-4, Chart.defaults.radar.scale.ticks = {
			fontSize: 11
		}, Chart.defaults.radar.scale.pointLabels = {
			fontSize: 12
		}, Chart.scaleService.updateScaleDefaults("radialLinear", {
			gridLines: {
				color: "rgba(0,0,0,.04)"
			}
		}), Chart.defaults.global.tooltips = Object.assign(Chart.defaults.global.tooltips, tooltipsOpts), Chart.defaults.global.animation = Object.assign(Chart.defaults.global.animation, {
			duration: 700,
			easing: "easeInOutQuint",
			onComplete: function() {
				t.masonry("layout")
			}
		});
		
		var e = $("#line-chart"),
			i = new Chart(e, {
				type: "line",
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [{
						label: "# of Votes",
						data: [12, 19, 3, 5, 2, 3],
						lineTension: 0,
						fill: 0
					}]
				},
				
				options: {
					hover: {
						mode: "index",
						intersect: !1
					},
					
					maintainAspectRatio: !1
				}
			}),
			n = {
				revenue: {
					label: "Revenue",
					data: [1200, 940, 1340, 1440, 420, 1100, 670]
				},
				
				users: {
					label: "Users",
					data: [1252, 872, 543, 1902, 1334, 998, 1640]
				},
				
				ctr: {
					label: "CTR",
					data: [.18, .24, .33, .12, .23, .2, .23]
				}
			},
			e = $("#main-toggle-line-chart"),
			i = new Chart(e, {
				type: "line",
				data: {
					labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
					datasets: [{
						label: n.revenue.label,
						data: n.revenue.data,
						lineTension: 0,
						fill: 0
					}]
				},
				
				options: {
					hover: {
						mode: "index",
						intersect: !1
					},
					
					maintainAspectRatio: !1
				}
			});
		
		$("#main-toggle-line-chart").closest(".card").find(".card-metrics").on("click", ".card-metric", function(t) {
			t.stopPropagation();
			
			var e = $(this).closest(".card"),
				i = e.find($(".card-chart"));
			if (i.length) {
				var s = chartExists(i),
					o = $(this).attr("data-metric");
				if (s && n.hasOwnProperty(o)) {
					$(this).siblings().removeClass("active"), $(this).addClass("active");
					var a = $(this).index(),
						r = $(this).hasClass("active");
					s.data.datasets[0].data = n[o].data, s.data.datasets[0].label = n[o].label, s.update()
				}
			}
		});
		
		var s = $("#compare-line-chart"),
			o = new Chart(s, {
				type: "line",
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [{
						label: "# of Votes",
						data: [12, 19, 3, 5, 2, 3],
						borderColor: "rgb(244,67,54)",
						pointBackgroundColor: "rgb(244,67,54)",
						pointBorderColor: "rgba(244,67,54,.1)",
						lineTension: 0,
						fill: !1
					},
					{
						label: "# of Votes",
						data: [5, 12, 18, 9, 11, 14],
						borderColor: "rgb(33,150,243)",
						pointBackgroundColor: "rgb(33,150,243)",
						pointBorderColor: "rgba(33,150,243,.1)",
						lineTension: 0,
						fill: !1,
						hidden: !0
					}]
				},
				
				options: {
					hover: {
						mode: "index",
						intersect: !1
					}
				}
			});
		
		$(document).on("click", ".card-metric", function() {
			var t = $(this).closest(".card"),
				e = t.find($(".card-chart"));
			if (e.length) {
				var i = chartExists(e);
				if (i) {
					$(this).toggleClass("active");
					var n = $(this).index(),
						s = $(this).hasClass("active");
					i.data.datasets[n].hidden = !s, i.update()
				}
			}
		}), $(document).on("click", ".tab", function() {
			var t = $(this).closest(".card"),
				e = t.find($(".card-chart"));
			if (e.length) {
				var i = chartExists(e);
				if (i) {
					for (var n = $(this).index(), s = 0; s < i.data.datasets.length; s++) {
						var o = !0;
						s === n && (o = !1), i.data.datasets[s].hidden = o
					}
					i.update()
				}
			}
		});
		
		var a = $("#tab-legend-line-chart"),
			r = new Chart(a, {
				type: "line",
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [{
						label: "Day",
						data: [12, 19, 3, 5, 2, 3],
						borderColor: "#ffffff",
						pointBackgroundColor: "#ffffff",
						pointBorderColor: "rgba(255,255,255,.2)",
						lineTension: 0,
						pointStyle: "circle",
						fill: !1
					},
					{
						label: "Month",
						data: [5, 12, 18, 9, 11, 14],
						borderColor: "#ffffff",
						pointBackgroundColor: "#ffffff",
						pointBorderColor: "rgba(255,255,255,.2)",
						lineTension: 0,
						pointStyle: "circle",
						fill: !1,
						hidden: !0
					},
					{
						label: "Year",
						data: [40, 36, 24, 19, 30, 23],
						borderColor: "#ffffff",
						pointBackgroundColor: "#ffffff",
						pointBorderColor: "rgba(255,255,255,.2)",
						lineTension: 0,
						pointStyle: "circle",
						fill: !1,
						hidden: !0
					}]
				},
				
				options: {
					hover: {
						mode: "index",
						intersect: !1
					},
					
					scales: {
						xAxes: [{
							gridLines: {
								color: "rgba(255,255,255,.1)"
							},
							
							ticks: {
								fontColor: "#ffffff"
							}
						}],
						yAxes: [{
							gridLines: {
								color: "rgba(255,255,255,.1)"
							},
							
							ticks: {
								fontColor: "#ffffff"
							}
						}]
					},
					
					legendCallback: tabLegendCallback
				}
			});
		
		a.closest(".card-content").before($(r.generateLegend()));
		var l = $("#mini-line-chart"),
			h = new Chart(l, {
				type: "line",
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [{
						label: "",
						data: [12, 19, 3, 5, 2, 3],
						borderColor: chartColorGreen,
						borderWidth: 2,
						pointBackgroundColor: "inherit",
						lineTension: 0,
						pointRadius: 0,
						pointHoverRadius: 3,
						fill: 0
					}]
				},
				
				options: flushChartOptions
			}),
			l = $("#mini-flush-line-chart"),
			d = new Chart(l, {
				type: "line",
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [{
						label: "",
						data: [12, 19, 3, 5, 2, 3],
						borderColor: chartColorYellow,
						pointBackgroundColor: chartColorYellow,
						pointBorderColor: rgbToRgba(chartColorYellow, ".2"),
						lineTension: 0,
						fill: 0
					}]
				},
				
				options: {
					hover: {
						mode: "index",
						intersect: !1
					},
					
					legend: {
						display: !1
					},
					
					scales: {
						xAxes: [{
							display: !1
						}],
						yAxes: [{
							display: !1
						}]
					},
					
					maintainAspectRatio: !1
				}
			}),
			u = $("#stacked-bar-chart");
		if (u.length) var c = new Chart(u, {
			type: "bar",
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [{
					label: "dataset 1",
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: chartColorBlue,
					borderColor: chartColorBlue
				},
				{
					label: "dataset 2",
					data: [4, 2, 1, 2, 4, 6],
					backgroundColor: chartColorYellow,
					borderColor: chartColorYellow
				},
				{
					label: "dataset 3",
					data: [5, 10, 8, 7, 4, 9],
					backgroundColor: chartColorPink,
					borderColor: chartColorPink
				}]
			},
			
			options: {
				hover: {
					mode: "index",
					intersect: !1
				},
				
				scales: {
					xAxes: [{
						stacked: !0,
						gridLines: {
							display: !1
						}
					}],
					yAxes: [{
						position: "right",
						stacked: !0,
						gridLines: {
							color: "rgba(0,0,0,0.08)"
						}
					}]
				}
			}
		});
		
		var p = Object.assign({}, flushChartOptions);
		p.scales.xAxes = [{
			display: !1,
			stacked: !0
		}];
		var v = $("#mini-stacked-bar-chart"),
			f = new Chart(v, {
				type: "bar",
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [{
						label: "Blue",
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: chartColorBlue,
						borderColor: chartColorBlue
					},
					{
						label: "Yellow",
						data: [4, 2, 1, 2, 4, 6],
						backgroundColor: chartColorYellow,
						borderColor: chartColorYellow
					},
					{
						label: "Pink",
						data: [5, 10, 8, 7, 4, 9],
						backgroundColor: chartColorPink,
						borderColor: chartColorPink
					}]
				},
				
				options: p
			}),
			v = $("#mini-bar-chart"),
			m = new Chart(v, {
				type: "bar",
				data: {
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets: [{
						data: [12, 19, 4, 5, 9, 3, 7, 2, 3, 2, 4, 14],
						backgroundColor: chartColorBlue
					}]
				},
				
				options: flushChartOptions
			}),
			g = {
				labels: ["one", "two", "three", "four", "five"],
				datasets: [{
					backgroundColor: rgbToRgba(chartColorPink, ".25"),
					borderColor: chartColorPink,
					pointBackgroundColor: chartColorPink,
					pointBorderColor: rgbToRgba(chartColorPink, ".25"),
					data: [2, 4, 7, 3, 8],
					label: "D0"
				},
				{
					backgroundColor: rgbToRgba(chartColorBlue, ".25"),
					borderColor: chartColorBlue,
					pointBackgroundColor: chartColorBlue,
					pointBorderColor: rgbToRgba(chartColorBlue, ".25"),
					data: [9, 4, 5, 1, 3],
					label: "D1"
				}]
			},
			y = $("#area-chart"),
			_ = new Chart(y, {
				type: "line",
				data: g,
				options: areaOptions
			}),
			g = {
				labels: ["one", "two", "three", "four", "five"],
				datasets: [{
					backgroundColor: chartColorPink,
					borderColor: chartColorPink,
					data: [2, 4, 7, 3, 8],
					label: "D0",
					pointHoverRadius: 3,
					pointHoverBorderWidth: 1
				},
				{
					backgroundColor: chartColorYellow,
					borderColor: chartColorYellow,
					data: [2, 5, 5, 7, 3],
					label: "D1",
					pointHoverRadius: 3,
					pointHoverBorderWidth: 1
				},
				{
					backgroundColor: chartColorBlue,
					borderColor: chartColorBlue,
					data: [9, 4, 5, 1, 3],
					label: "D1",
					pointHoverRadius: 3,
					pointHoverBorderWidth: 1
				}]
			},
			b = $("#flush-area-chart"),
			k = new Chart(b, {
				type: "line",
				data: g,
				options: flushChartOptions
			}),
			C = $("#mini-line-area-chart"),
			w = new Chart(C, {
				type: "line",
				data: g,
				options: flushChartOptions
			}),
			E = Object.assign({}, tooltipsOpts);
		E.intersect = !0, delete E.mode;
		var M = $("#doughnut-chart"),
			E = Object.assign({}, tooltipsOpts);
		E.intersect = !0, E.callbacks = {
			footer: percentageFooterCallback
		}, delete E.mode;
		var x = $("#mini-doughnut-chart"),
			O = new Chart(x, {
				type: "doughnut",
				data: {
					labels: ["Red", "Blue", "Yellow", "Green"],
					datasets: [{
						label: "dataset 1",
						data: [12, 19, 3, 5],
						backgroundColor: [chartColorPink, chartColorBlue, chartColorYellow, chartColorGreen],
						borderWidth: 0
					}]
				},
				
				options: {
					tooltips: E,
					cutoutPercentage: 80
				}
			}),
			T = $("#default-table-example").DataTable({
				ajax: "https://api.myjson.com/bins/1us28",
				language: {
					search: "",
					searchPlaceholder: "Enter search term"
				},
				
				order: [0, "asc"],
				dom: 'ft<"footer-wrapper"l<"paging-info"ip>>',
				scrollY: "400px",
				scrollCollapse: !0,
				pagingType: "full",
				drawCallback: function(t) {
					var e = this.api();
					
					$(e.table().container()).find(".paginate_button").addClass("waves-effect"), e.table().columns.adjust()
				}
			}),
			L = new Date,
			B = L.toISOString().substr(0, 10);
		L.setDate(L.getDate() + 1);
		var D = L.toISOString().substr(0, 10);
		L.setDate(L.getDate() - 3);
		var S = L.toISOString().substr(0, 10),
			I = [{
				title: "All Day Event",
				start: B
			},
			{
				title: "Long Event",
				start: S,
				end: B
			},
			{
				id: 999,
				title: "Repeating Event",
				start: B + "T16:00:00"
			},
			{
				id: 999,
				title: "Repeating Event",
				start: B + "T16:00:00"
			},
			{
				title: "Meeting",
				start: B + "T10:30:00",
				end: B + "T12:30:00"
			},
			{
				title: "Lunch",
				start: B + "T12:00:00"
			},
			{
				title: "Meeting",
				start: B + "T14:30:00"
			},
			{
				title: "Happy Hour",
				start: B + "T17:30:00"
			},
			{
				title: "Dinner",
				start: B + "T20:00:00"
			},
			{
				title: "Birthday Party",
				start: D + "T07:00:00"
			},
			{
				title: "Click for Google",
				url: "http://google.com/",
				start: B
			}];
		$("#calendar").fullCalendar({
			header: {
				left: "prev,next,title",
				right: "month,agendaWeek,agendaDay"
			},
			
			editable: !0,
			eventLimit: !0,
			events: I,
			views: {
				agendaWeek: {
					columnFormat: "DD"
				}
			}
		}), $("#calendar-week").fullCalendar({
			header: {
				right: "month,agendaWeek,agendaDay"
			},
			
			editable: !0,
			eventLimit: !0,
			events: I,
			defaultView: "agendaWeek",
			views: {
				agendaWeek: {
					columnFormat: "DD"
				}
			}
		}), $("#calendar-list").fullCalendar({
			header: {
				left: "today,prev,next,title",
				right: ""
			},
			
			editable: !0,
			eventLimit: !0,
			events: I,
			defaultView: "listMonth",
			views: {
				list: {
					listDayFormat: "ddd",
					listDayAltFormat: "MMM D"
				}
			}
		})
	})
}(jQuery), function($) {
	$(document).ready(function() {
		var t = {
			labels: ["one", "two", "three", "four", "five"],
			datasets: [{
				backgroundColor: chartColorBlue,
				borderColor: chartColorBlue,
				data: [2, 4, 7, 3, 8],
				label: "Number"
			}]
		},
			e = $("#flush-area-chart-blue"),
			i = new Chart(e, {
				type: "line",
				data: t,
				options: flushChartOptions
			}),
			n = {
				labels: ["one", "two", "three", "four", "five"],
				datasets: [{
					backgroundColor: chartColorYellow,
					borderColor: chartColorYellow,
					data: [5, 6, 3, 3, 9],
					label: "Number"
				}]
			},
			s = $("#flush-area-chart-yellow"),
			o = new Chart(s, {
				type: "line",
				data: n,
				options: flushChartOptions
			}),
			a = {
				labels: ["one", "two", "three", "four", "five"],
				datasets: [{
					backgroundColor: chartColorPink,
					borderColor: chartColorPink,
					data: [7, 5, 3, 6, 6],
					label: "Number"
				}]
			},
			r = $("#flush-area-chart-pink"),
			l = new Chart(r, {
				type: "line",
				data: a,
				options: flushChartOptions
			}),
			h = {
				labels: ["one", "two", "three", "four", "five"],
				datasets: [{
					backgroundColor: chartColorGreen,
					borderColor: chartColorGreen,
					data: [9, 3, 7, 5, 4],
					label: "Number"
				}]
			},
			d = $("#flush-area-chart-green"),
			u = new Chart(d, {
				type: "line",
				data: h,
				options: flushChartOptions
			}),
			c = Object.assign({}, tooltipsOpts);
		c.intersect = !0, c.callbacks = {
			footer: percentageFooterCallback
		}, delete c.mode;
		var p = $("#doughnut-chart"),
			v = new Chart(p, {
				type: "doughnut",
				data: {
					labels: ["Phone", "Tablet", "Laptop", "Desktop"],
					datasets: [{
						label: "dataset 1",
						data: [12, 19, 3, 5],
						backgroundColor: [chartColorPink, chartColorBlue, chartColorYellow, chartColorGreen],
						borderWidth: 0
					}]
				},
				
				options: {
					tooltips: c,
					legendCallback: doughnutLegendCallback,
					cutoutPercentage: 80
				}
			});
		
		p.closest(".card-content").find(".chart-legend-wrapper").append($(v.generateLegend())), $("#vmap").vectorMap({
			map: "world_en",
			backgroundColor: "transparent",
			color: "#ffffff",
			enableZoom: !1,
			hoverOpacity: .7,
			selectedColor: "#666666",
			showTooltip: !0,
			scaleColors: ["#FFFFFF", rgbToHex(chartColorGreen)],
			values: sample_data,
			normalizeFunction: "polynomial",
			onLabelShow: function(t, e, i) {
				if (sample_data[i] > 0) {
					var n = $('<span class="flag-icon flag-icon-' + i + '"></span>');
					console.log(e), e.prepend(n), e.append(": " + sample_data[i] + " Views")
				}
			}
		})
	})
}(jQuery), function($) {
	$(function() {
		$(".collapsible").collapsible({
			accordion: !0
		}), $(".carousel.carousel-slider").carousel({
			fullWidth: !0
		}), $(".carousel").carousel(), $(".dropdown-trigger").dropdown({
			alignment: "right",
			constrainWidth: !1,
			coverTrigger: !1,
			closeOnClick: !1,
			onOpenEnd: function(t) {
				console.log(t.M_Dropdown);
				var e = $(this).find(".tabs"),
					i = t.M_Dropdown;
				if (e.length) {
					var n = M.Tabs.getInstance(e);
					n.updateTabIndicator(), n.options.onShow = function() {
						setTimeout(function() {
							i.recalculateDimensions(), n.updateTabIndicator()
						}, 0)
					}
				}
			}
		}), $(".slider").slider(), $(".parallax").parallax(), $(".modal").modal(), $(".scrollspy").scrollSpy(), $(".sidenav").sidenav({
			edge: "left"
		}), $("#sidenav-right").sidenav({
			edge: "right"
		}), $(".datepicker").datepicker({
			selectYears: 20
		}), $("select").not(".disabled").formSelect(), $("input.autocomplete").autocomplete({
			data: {
				Apple: null,
				Microsoft: null,
				Google: "http://placehold.it/250x250"
			}
		}), $(".tabs").tabs(), $(".chips").chips(), $(".chips-initial").chips({
			readOnly: !0,
			data: [{
				tag: "Apple"
			},
			{
				tag: "Microsoft"
			},
			{
				tag: "Google"
			}]
		}), $(".chips-placeholder").chips({
			placeholder: "Enter a tag",
			secondaryPlaceholder: "+Tag"
		}), $(".chips-autocomplete").chips({
			autocompleteOptions: {
				data: {
					Apple: null,
					Microsoft: null,
					Google: null
				}
			}
		})
	})
}(jQuery);