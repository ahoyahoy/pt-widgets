var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h } from "@stencil/core";
import classNames from 'classnames/dedupe';
import axios from 'axios';
import Debounce from 'debounce-decorator';
const sparkline = function (t) { var e = {}; function r(n) { if (e[n])
    return e[n].exports; var o = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports; } return r.m = t, r.c = e, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }); }, r.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e)
    return t; if (4 & e && "object" == typeof t && t && t.__esModule)
    return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
    for (var o in t)
        r.d(n, o, function (e) { return t[e]; }.bind(null, o)); return n; }, r.n = function (t) { var e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return r.d(e, "a", e), e; }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, r.p = "", r(r.s = 1); }([function (t, _, r) { var n = r(2), o = r(3), i = r(4); t.exports = function (t) { return n(t) || o(t) || i(); }; }, function (_, e, r) {
        "use strict";
        r.r(e), r.d(e, "sparkline", function () { return c; });
        var n = r(0), o = r.n(n);
        function i(t, e, r, n) { return parseFloat((e - n * e / t + r).toFixed(2)); }
        function a(t) { return t.value; }
        function u(t, e) { var r = document.createElementNS("http://www.w3.org/2000/svg", t); for (var n in e)
            r.setAttribute(n, e[n]); return r; }
        function c(t, e, r) { var n; if (n = t, o()(n.querySelectorAll("*")).forEach(function (t) { return n.removeChild(t); }), !(e.length <= 1)) {
            r = r || {}, "number" == typeof e[0] && (e = e.map(function (t) { return { value: t }; }));
            var c = r.onmousemove, l = r.onmouseout, s = "interactive" in r ? r.interactive : !!c, f = r.spotRadius || 2, p = 2 * f, d = r.cursorWidth || 2, v = parseFloat(t.attributes["stroke-width"].value), b = r.fetch || a, h = e.map(function (t) { return b(t); }), y = parseFloat(t.attributes.width.value) - 2 * p, x = parseFloat(t.attributes.height.value), m = x - 2 * v - p, g = Math.max.apply(Math, o()(h)), A = -1e3, w = h.length - 1, j = y / w, k = [], O = i(g, m, v + f, h[0]), S = "M".concat(String(p), " ").concat(String(O));
            h.forEach(function (t, r) { var n = r * j + p, o = i(g, m, v + f, t); k.push(Object.assign({}, e[r], { index: r, x: n, y: o })), S += " L ".concat(String(n), " ").concat(String(o)); });
            var M = u("path", { class: "sparkline--line", d: S, fill: "none" }), C = u("path", { class: "sparkline--fill", d: "".concat(S, " V ").concat(String(x), " L ").concat(String(p), " ").concat(String(x), " Z"), stroke: "none" });
            if (t.appendChild(C), t.appendChild(M), s) {
                var E = u("line", { class: "sparkline--cursor", x1: A, x2: A, y1: 0, y2: x, "stroke-width": d }), _ = u("circle", { class: "sparkline--spot", cx: A, cy: A, r: f });
                t.appendChild(E), t.appendChild(_);
                var F = u("rect", { width: t.attributes.width.value, height: t.attributes.height.value, style: "fill: transparent; stroke: transparent", class: "sparkline--interaction-layer" });
                t.appendChild(F), F.addEventListener("mouseout", function (t) { E.setAttribute("x1", A), E.setAttribute("x2", A), _.setAttribute("cx", A), l && l(t); }), F.addEventListener("mousemove", function (t) { var e = t.offsetX, r = k.find(function (t) { return t.x >= e; }); r || (r = k[w]); var n, o = k[k.indexOf(r) - 1], i = (n = o ? o.x + (r.x - o.x) / 2 <= e ? r : o : r).x, a = n.y; _.setAttribute("cx", i), _.setAttribute("cy", a), E.setAttribute("x1", i), E.setAttribute("x2", i), c && c(t, n); });
            }
        } }
        e.default = c;
    }, function (t, _) { t.exports = function (t) { if (Array.isArray(t)) {
        for (var e = 0, r = new Array(t.length); e < t.length; e++)
            r[e] = t[e];
        return r;
    } }; }, function (t, _) { t.exports = function (t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
        return Array.from(t); }; }, function (t, _) { t.exports = function () { throw new TypeError("Invalid attempt to spread non-iterable instance"); }; }]); // tslint:disable-line
const findClosest = (target, tagName) => {
    if (target.tagName === tagName) {
        return target;
    }
    while ((target = target.parentNode)) {
        if (target.tagName === tagName) {
            break;
        }
    }
    return target;
};
export class Widget {
    constructor() {
        // @State() height: number
        this.data = [];
        this.currency = [];
    }
    validateName(newValue) {
        if (typeof newValue === null) {
            throw new Error('`strategy` is required');
        }
    }
    handleWindowResize() {
        this.calculateSize();
    }
    componentDidLoad() {
        console.info('did load');
        this.calculateSize();
        this.getData();
    }
    componentDidRender() {
        console.info('did render');
        this.generateChart();
    }
    calculateSize() {
        const w = this.el.querySelector('.sparkline--container');
        console.log(w.offsetWidth, w.offsetHeight);
        this.width = w.offsetWidth;
        // this.height = w.offsetHeight
    }
    getData() {
        axios({
            method: 'get',
            url: `https://api.purple-trading.com/strategies/${this.strategy}`
        })
            .then((response) => {
            this.name = response.data.name;
            this.currency = response.data.currency;
            this.gain = response.data.gainsSum;
            this.data = response.data.dailyGains;
            this.generateChart();
        });
    }
    generateChart() {
        const comp = this;
        const options = {
            width: this.width,
            //height: this.height,
            fetch(entry) {
                return entry.gain;
            },
            onmousemove(event, datapoint) {
                const svg = findClosest(event.target, 'svg');
                const tooltip = svg.nextElementSibling;
                const pos = comp.data.map(i => { return i.date; }).indexOf(datapoint.date);
                const firstHalf = pos < comp.data.length / 2;
                // const date = (new Date(datapoint.date)).toUTCString().replace(/^.*?, (.*?) \d{2}:\d{2}:\d{2}.*?$/, "$1")
                tooltip.style.visibility = 'visible';
                tooltip.textContent = `${(datapoint.gain * 100).toFixed(2)} %`;
                tooltip.style.top = `${event.offsetY}px`;
                if (firstHalf) {
                    tooltip.style.left = `${event.offsetX + 20}px`;
                    tooltip.style.right = 'unset';
                }
                else {
                    tooltip.style.left = 'unset';
                    tooltip.style.right = `${comp.width - event.offsetX + 20}px`;
                }
            },
            onmouseout() {
                const svg = findClosest(event.target, 'svg');
                const tooltip = svg.nextElementSibling;
                tooltip.style.visibility = 'hidden';
            }
        };
        const svgEl = this.el.querySelector('.sparkline');
        svgEl.innerHTML = '';
        console.log(svgEl);
        sparkline.sparkline(svgEl, this.data, options);
    }
    render() {
        console.info('render');
        const className = classNames('pt-widget', {
            'my-class': true,
        });
        return h("div", { class: className },
            h("h3", { class: "widget--header" }, this.name),
            h("div", { class: "widget--gain" },
                this.gain,
                " %"),
            h("div", { class: "widget--currency" }, this.currency.map(c => h("div", null, c))),
            h("div", { class: "sparkline--container" },
                h("svg", { class: "sparkline", width: this.width, height: this.height, "stroke-width": "2", stroke: "blue", fill: "transparent" }),
                h("span", { class: "sparkline--tooltip" })));
    }
    static get is() { return "pt-widget"; }
    static get originalStyleUrls() { return {
        "$": ["widget.styl"]
    }; }
    static get styleUrls() { return {
        "$": ["widget.css"]
    }; }
    static get properties() { return {
        "class": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "class",
            "reflect": false
        },
        "strategy": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "strategy",
            "reflect": false
        },
        "height": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "height",
            "reflect": false
        }
    }; }
    static get states() { return {
        "width": {},
        "data": {},
        "name": {},
        "currency": {},
        "gain": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "strategy",
            "methodName": "validateName"
        }]; }
    static get listeners() { return [{
            "name": "resize",
            "method": "handleWindowResize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
__decorate([
    Debounce(1000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Widget.prototype, "handleWindowResize", null);
