var C = Object.defineProperty,
    k = Object.defineProperties;
var N = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty,
    w = Object.prototype.propertyIsEnumerable;
var b = (t, r, n) => r in t ? C(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n,
    d = (t, r) => { for (var n in r || (r = {})) y.call(r, n) && b(t, n, r[n]); if (h)
            for (var n of h(r)) w.call(r, n) && b(t, n, r[n]); return t },
    u = (t, r) => k(t, N(r));
var m = (t, r) => { var n = {}; for (var a in t) y.call(t, a) && r.indexOf(a) < 0 && (n[a] = t[a]); if (t != null && h)
        for (var a of h(t)) r.indexOf(a) < 0 && w.call(t, a) && (n[a] = t[a]); return n };
import { j as g, R as p, r as c, a as L } from "./vendor.585108d3.js";
const R = function() { const r = document.createElement("link").relList; if (r && r.supports && r.supports("modulepreload")) return; for (const e of document.querySelectorAll('link[rel="modulepreload"]')) a(e);
    new MutationObserver(e => { for (const o of e)
            if (o.type === "childList")
                for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && a(i) }).observe(document, { childList: !0, subtree: !0 });

    function n(e) { const o = {}; return e.integrity && (o.integrity = e.integrity), e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? o.credentials = "include" : e.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o }

    function a(e) { if (e.ep) return;
        e.ep = !0; const o = n(e);
        fetch(e.href, o) } };
R();
const l = g.exports.jsx,
    s = g.exports.jsxs,
    x = g.exports.Fragment;

function U() { return l("div", { className: "text-5xl font-extrabold", children: l("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 select-none", children: "Shortr" }) }) }
const v = p.forwardRef((a, n) => { var e = a,
            { className: t } = e,
            r = m(e, ["className"]); return l("input", u(d({ ref: n, className: ["rounded-lg shadow-md px-4 py-3 placeholder-gray-400 min-w-0 focus:ring-blue-500 focus:ring-2 border-0 focus:outline-none text-gray-900 dark:shadow-inner", t].filter(Boolean).join(" ") }, r), { children: r.children })) }),
    E = p.forwardRef((e, a) => { var o = e,
            { className: t, disabled: r } = o,
            n = m(o, ["className", "disabled"]); return l("button", u(d({ ref: a, className: ["rounded-lg", "shadow-md", "p-3", "placeholder-gray-400", "focus:ring-green-500", "focus:ring-2", "text-gray-100", "bg-green-600", "hover:bg-green-700", "focus:outline-none", "transition", r && "opacity-50", r && "hover:bg-green-600", r && "cursor-not-allowed", t].join(" "), "aria-disabled": r ? !0 : void 0 }, n), { children: n.children })) });
async function T(t) { const r = await fetch("/create", { method: "POST", body: t }); if (!r.ok) throw new Error(`Bad Response: ${r.status} ${r.statusText}`); return await r.text() }

function $({ url: t, onCreateFulfilled: r, onCreateRejected: n, onUrlChange: a }) { const [e, o] = c.exports.useState(!1), i = c.exports.useMemo(() => { try { return new URL(t), !0 } catch { return !1 } }, [t]); return s(x, { children: [s("form", { className: "flex items-center gap-2", onSubmit: f => { f.preventDefault(), o(!0), !!i && T(t).then(r, n) }, children: [l(v, { className: "flex-grow", type: "text", value: t, onChange: f => { o(!1), a(f.target.value) }, placeholder: "Enter your long url...", autoFocus: !0, "aria-invalid": e && !i ? !0 : void 0 }), l(E, { disabled: !i, children: "Shorten" })] }), e && !i && l("p", { className: "mt-2 text-red-700", role: "alert", children: "Invalid url" })] }) }

function j({ shortUrl: t, onBackClick: r }) { const [n, a] = c.exports.useState(!1); return c.exports.useEffect(() => { if (n) { const e = setTimeout(() => { a(!1) }, 2e3); return () => clearTimeout(e) } }, [n]), s(x, { children: [l("p", { className: "mb-2", children: "Your short url:" }), s("div", { className: "flex items-center gap-2 mb-2", children: [l(v, { className: "flex-grow", "aria-label": "Short url", readOnly: !0, defaultValue: t, onClick: e => { e.target.setSelectionRange(0, t.length) } }), l(E, { onClick: () => { navigator.clipboard.writeText(t).then(() => { a(!0) }) }, "aria-label": "Copy to clipboard", children: n ? l("div", { className: "i-heroicons-outline-clipboard-check" }) : l("div", { className: "i-heroicons-outline-clipboard" }) })] }), s("button", { className: "flex items-center hover:underline text-green-700 dark:text-green-500", onClick: () => { r() }, children: [l("div", { className: "i-heroicons-outline-reply scale-y-[-1] mr-2" }), "Shorten another url"] })] }) }
const S = { state: "initial", url: "", error: null };

function _() { const [t, r] = c.exports.useReducer((e, o) => { switch (o.type) {
            case "SET_URL":
                if (e.state !== "initial") throw new Error(`Cannot handle action ${o.type} while in state '${e.state}'`); return u(d({}, e), { url: o.url, error: null });
            case "URL_SUBMITTED":
                if (e.state !== "initial") throw new Error(`Cannot handle action ${o.type} while in state '${e.state}'`); return u(d({}, e), { error: null, loading: !0 });
            case "GOT_SLUG":
                if (e.state !== "initial") throw new Error(`Cannot handle action ${o.type} while in state '${e.state}'`); return { state: "final", shortUrl: o.shortUrl, copied: !1 };
            case "CREATE_FAILED":
                if (e.state !== "initial") throw new Error(`Cannot handle action ${o.type} while in state '${e.state}'`); return u(d({}, e), { loading: !1, error: o.error });
            case "BACK_CLICKED":
                if (e.state !== "final") throw new Error(`Cannot handle action ${o.type} while in state '${e.state}'`); return S } }, S), [n, a] = c.exports.useState(() => localStorage.theme === "dark" || !("theme" in localStorage) && "matchMedia" in window && window.matchMedia("(prefers-color-scheme: dark)").matches); return c.exports.useEffect(() => { n ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark") }, [n]), s("div", { className: "min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-200", children: [l("button", { className: "i-heroicons-outline-moon dark:i-heroicons-outline-sun absolute top-1 right-1 p-2 hover:text-indigo-600 dark:hover:text-yellow-200", onClick: () => { const e = !n;
                a(e), localStorage.setItem("theme", e ? "dark" : "light") }, "aria-label": "Change theme" }), s("div", { className: "max-w-[800px] mx-auto px-2 flex flex-col justify-center min-h-screen", children: [l("header", { className: "mb-2", children: l(U, {}) }), l("main", { children: t.state === "initial" ? s(x, { children: [l($, { url: t.url, onUrlChange: e => { r({ type: "SET_URL", url: e }) }, onCreateFulfilled: e => { r({ type: "GOT_SLUG", shortUrl: new URL(e, location.origin).toString() }) }, onCreateRejected: e => { r({ type: "CREATE_FAILED", error: e }) } }), t.error && l("p", { className: "mt-2 text-red-700", children: "Sorry, there was an error. Please try again." })] }) : t.state === "final" ? l(j, { shortUrl: t.shortUrl, onBackClick: () => { r({ type: "BACK_CLICKED" }) } }) : null })] })] }) } L.render(l(p.StrictMode, { children: l(_, {}) }), document.getElementById("root"));