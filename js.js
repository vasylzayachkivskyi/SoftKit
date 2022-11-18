(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
            389: function (e, t, o) {
                    var content = o(417);
                    content.__esModule && (content = content.
            default),
                    "string" == typeof content && (content = [
                            [e.i, content, ""]
                    ]),
                    content.locals && (e.exports = content.locals);
                    (0, o(87).
            default)("cc05fb5a", content, !0, {
                            sourceMap: !1
                    })
            },
            414: function (e, t, o) {
                    o(37),
                    o(26),
                    o(24),
                    o(8),
                    o(55),
                    o(19),
                    o(56);
                    var n = o(242),
                            r = o(243),
                            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

                    function c(object, e) {
                            var t = Object.keys(object);
                            if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(object);
                                    e && (o = o.filter((function (e) {
                                            return Object.getOwnPropertyDescriptor(object, e).enumerable
                                    }))),
                                    t.push.apply(t, o)
                            }
                            return t
                    }
                    o(57),
                    e.exports = {
                            functional: !0,
                            render: function (e, t) {
                                    var o = t._c,
                                            data = (t._v, t.data),
                                            d = t.children,
                                            m = void 0 === d ? [] : d,
                                            h = data.class,
                                            f = data.staticClass,
                                            style = data.style,
                                            _ = data.staticStyle,
                                            v = data.attrs,
                                            y = void 0 === v ? {} : v,
                                            w = r(data, l);
                                    return o("svg", function (e) {
                                            for (var i = 1; i < arguments.length; i++) {
                                                    var source = null != arguments[i] ? arguments[i] : {};
                                                    i % 2 ? c(Object(source), !0).forEach((function (t) {
                                                            n(e, t, source[t])
                                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function (t) {
                                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                                    }))
                                            }
                                            return e
                                    }({
                                            class: [h, f],
                                            style: [style, _],
                                            attrs: Object.assign({
                                                    viewBox: "0 0 624 238",
                                                    fill: "currentColor",
                                                    xmlns: "http://www.w3.org/2000/svg"
                                            }, y)
                                    }, w), m.concat([o("path", {
                                            attrs: {
                                                    d: "M404.48 231h24.36V11.76h-24.36V231Z"
                                            }
                                    }), o("path", {
                                            attrs: {
                                                    d: "M593.076 231h28.84l-73.92-107.52 75.32-111.72h-28.84l-59.36 92.96-63.84-92.96h-28.84l76.16 110.88L445.516 231h28.56l57.68-89.32 61.32 89.32Z"
                                            }
                                    }), o("path", {
                                            attrs: {
                                                    d: "M105.707 238c-18.422 0-35.772-3.935-52.048-11.806-16.098-7.871-29.066-19.23-38.903-34.077C4.92 177.27 0 160.098 0 140.6c0-19.856 4.74-37.297 14.22-52.323 9.48-15.026 22.268-26.563 38.365-34.613 16.277-8.229 34.163-12.343 53.659-12.343 16.276 0 30.943 3.13 44 9.392 13.057 6.26 23.252 15.204 30.585 26.831 7.334 11.628 11 25.044 11 40.249 0 15.92-3.756 30.409-11.268 43.467-7.333 12.88-17.528 23.165-30.585 30.857-13.057 7.513-27.545 11.27-43.464 11.27-12.52 0-23.878-2.505-34.073-7.513-10.016-5.188-17.976-12.254-23.878-21.198-5.724-9.122-8.675-19.408-8.854-30.856-.178-10.554 2.147-20.393 6.976-29.516 4.83-9.301 11.09-16.725 18.78-22.27 7.692-5.546 15.472-8.318 23.342-8.318 8.227 0 12.341 2.951 12.341 8.855 0 3.22-1.162 5.903-3.487 8.049-2.147 1.968-4.92 2.952-8.318 2.952-12.878 0-23.61 3.935-32.195 11.806-8.406 7.87-12.699 18.156-12.878 30.856 0 9.839 2.594 19.051 7.78 27.637 5.188 8.408 12.521 15.116 22 20.124 9.48 5.009 20.302 7.513 32.464 7.513 15.203 0 29.065-3.756 41.586-11.269 12.52-7.513 22.357-17.62 29.512-30.32 7.333-12.88 11-26.922 11-42.126 0-14.669-3.488-27.637-10.464-38.907-6.975-11.27-16.813-20.034-29.512-26.295-12.52-6.261-26.829-9.392-42.927-9.392-19.317 0-36.756 4.115-52.317 12.343-15.56 8.229-27.813 19.766-36.756 34.614C7.691 105.003 3.22 121.907 3.22 140.868c0 18.782 4.56 35.418 13.682 49.908 9.301 14.31 21.285 25.222 35.952 32.735 14.845 7.692 30.317 11.18 46.414 10.464 18.602-.179 35.504-5.813 50.708-16.904 15.203-10.912 28.439-24.238 39.707-39.98 11.447-15.92 24.862-37.117 40.244-63.592 13.593-22.717 24.862-40.695 33.805-53.932 9.122-13.416 18.87-24.775 29.244-34.077 9.479-8.586 20.211-14.936 32.195-19.05C337.154 2.147 349.585 0 362.463 0c9.838 0 17.887 1.252 24.147 3.756 6.26 2.505 9.39 6.708 9.39 12.611 0 3.578-1.699 6.887-5.098 9.928-3.398 2.862-8.943 5.277-16.634 7.245-7.691 1.789-17.707 2.683-30.048 2.683-18.065 0-34.163-1.252-48.293-3.756-13.951-2.683-29.512-6.35-46.683-11.001-11.626-3.041-20.748-5.188-27.366-6.44-6.439-1.431-12.878-2.147-19.317-2.147-14.13 0-27.545 2.594-40.244 7.782-12.52 5.008-22.715 12.521-30.585 22.538-7.691 10.018-11.537 22.271-11.537 36.76 0 9.839 2.057 18.425 6.171 25.759 4.114 7.155 9.658 12.611 16.634 16.368 6.976 3.756 14.577 5.634 22.805 5.634 9.301 0 17.439-1.967 24.415-5.903 7.154-4.114 12.609-9.57 16.365-16.367 3.756-6.977 5.635-14.579 5.635-22.807 0-5.188-.716-9.213-2.147-12.075-1.252-2.862-3.13-5.635-5.634-8.318-1.61-1.788-2.772-3.22-3.488-4.293-.715-1.073-1.073-2.415-1.073-4.025 0-2.683.984-4.919 2.951-6.708 1.968-1.967 4.472-2.951 7.512-2.951 4.114 0 7.602 1.967 10.464 5.903 3.041 3.756 4.561 9.749 4.561 17.977 0 10.733-2.594 20.84-7.781 30.32-5.187 9.481-12.431 17.084-21.731 22.808-9.122 5.545-19.317 8.318-30.586 8.318-8.943 0-17.081-1.968-24.414-5.903-7.334-3.936-13.147-9.57-17.439-16.905-4.293-7.513-6.439-16.278-6.439-26.295 0-15.563 5.008-29.068 15.024-40.516 10.195-11.627 24.057-20.482 41.585-26.564 17.529-6.26 37.114-9.391 58.756-9.391 16.098 0 30.944 1.52 44.537 4.561 13.772 2.862 28.886 6.977 45.342 12.343 10.374 3.22 18.78 5.635 25.219 7.245 6.439 1.61 12.342 2.415 17.707 2.415 10.195 0 17.35-1.163 21.464-3.489 4.114-2.504 6.171-6.082 6.171-10.733 0-4.83-2.594-8.407-7.781-10.732-5.008-2.505-12.431-3.757-22.268-3.757-13.236 0-25.756 2.147-37.561 6.44-11.626 4.293-21.821 10.464-30.586 18.514-11.089 10.375-20.748 23.254-28.975 38.638-8.049 15.384-17.26 35.687-27.634 60.909-8.765 21.287-16.277 38.012-22.537 50.176-6.26 12.164-13.236 22.091-20.927 29.783-10.91 10.733-24.236 18.693-39.975 23.881-15.561 5.187-31.838 7.781-48.83 7.781Zm175.732-81.569c-5.902 0-10.374-3.31-13.415-9.928-2.861-6.619-4.292-13.774-4.292-21.466 0-8.765 1.788-16.278 5.366-22.539 3.756-6.26 8.495-11 14.219-14.22 5.903-3.22 11.894-4.83 17.976-4.83 4.65 0 8.406.894 11.268 2.683 2.862 1.789 4.293 4.472 4.293 8.05 0 4.293-2.147 8.049-6.439 11.269-4.293 3.22-10.911 4.83-19.854 4.83-6.618 0-12.789-.984-18.512-2.952-5.545-2.146-12.968-5.456-22.268-9.928-11.805-6.082-22.627-10.643-32.464-13.684-9.658-3.22-21.016-4.83-34.073-4.83-13.951 0-26.65 2.326-38.098 6.976-11.268 4.651-20.122 11.18-26.561 19.588-6.26 8.407-9.39 17.977-9.39 28.71 0 5.366 1.073 9.57 3.22 12.611 2.325 3.041 5.008 5.188 8.048 6.44 3.22 1.252 7.334 2.504 12.342 3.756 5.187 1.074 8.943 2.326 11.268 3.757 2.504 1.252 3.756 3.398 3.756 6.439 0 2.863-.983 5.277-2.951 7.245-1.789 1.968-4.829 2.952-9.122 2.952s-8.675-1.342-13.146-4.025c-4.472-2.683-8.228-6.887-11.269-12.611-3.04-5.724-4.561-12.79-4.561-21.198 0-20.928 7.066-36.58 21.196-46.956 14.13-10.375 32.731-15.562 55.805-15.562 13.056 0 24.504 1.61 34.341 4.83 9.837 3.22 20.748 7.78 32.732 13.684 8.764 4.472 16.008 7.781 21.731 9.928 5.724 1.968 11.716 2.951 17.976 2.951 8.406 0 14.309-1.341 17.707-4.024 3.399-2.863 5.098-6.261 5.098-10.197 0-3.04-.984-5.277-2.951-6.708-1.968-1.61-4.919-2.414-8.854-2.414-5.187 0-10.463 1.52-15.829 4.56-5.366 3.042-9.838 7.156-13.415 12.344-3.577 5.008-5.366 10.464-5.366 16.367 0 4.293 1.073 7.603 3.22 9.928 2.325 2.325 5.723 4.74 10.195 7.245 3.398 1.788 5.992 3.577 7.78 5.366 1.789 1.61 2.683 3.757 2.683 6.44 0 2.683-.894 4.919-2.683 6.708-1.609 1.61-3.845 2.415-6.707 2.415Z"
                                            }
                                    })]))
                            }
                    }
            },
            415: function (e, t, o) {
                    o(37),
                    o(26),
                    o(24),
                    o(8),
                    o(55),
                    o(19),
                    o(56);
                    var n = o(242),
                            r = o(243),
                            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

                    function c(object, e) {
                            var t = Object.keys(object);
                            if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(object);
                                    e && (o = o.filter((function (e) {
                                            return Object.getOwnPropertyDescriptor(object, e).enumerable
                                    }))),
                                    t.push.apply(t, o)
                            }
                            return t
                    }
                    o(57),
                    e.exports = {
                            functional: !0,
                            render: function (e, t) {
                                    var o = t._c,
                                            data = (t._v, t.data),
                                            d = t.children,
                                            m = void 0 === d ? [] : d,
                                            h = data.class,
                                            f = data.staticClass,
                                            style = data.style,
                                            _ = data.staticStyle,
                                            v = data.attrs,
                                            y = void 0 === v ? {} : v,
                                            w = r(data, l);
                                    return o("svg", function (e) {
                                            for (var i = 1; i < arguments.length; i++) {
                                                    var source = null != arguments[i] ? arguments[i] : {};
                                                    i % 2 ? c(Object(source), !0).forEach((function (t) {
                                                            n(e, t, source[t])
                                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function (t) {
                                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                                    }))
                                            }
                                            return e
                                    }({
                                            class: [h, f],
                                            style: [style, _],
                                            attrs: Object.assign({
                                                    viewBox: "0 0 1123 260",
                                                    fill: "currentColor",
                                                    xmlns: "http://www.w3.org/2000/svg"
                                            }, y)
                                    }, w), m.concat([o("path", {
                                            attrs: {
                                                    d: "M385.161 231h24.36V34.72h68.32V11.76h-161.28v22.96h68.6V231Z"
                                            }
                                    }), o("path", {
                                            attrs: {
                                                    d: "M574.968 235.76c55.72 0 83.44-26.32 83.44-77.84V11.76h-24.36v145.88c0 36.68-19.04 54.6-59.08 54.6s-59.08-18.2-59.08-54.6V11.76h-24.36v146.16c0 51.52 27.72 77.84 83.44 77.84Z"
                                            }
                                    }), o("path", {
                                            attrs: {
                                                    d: "M673.182 231h81.2c68.88 0 104.72-38.92 104.72-113.68 0-69.16-35.84-105.56-104.72-105.56h-81.2V231Zm24.36-22.96V34.72h56.84c51.52 0 78.12 28.56 78.12 82.6 0 59.92-26.6 90.72-78.12 90.72h-56.84Z"
                                            }
                                    }), o("path", {
                                            attrs: {
                                                    d: "M871.862 231h24.36V11.76h-24.36V231Z"
                                            }
                                    }), o("path", {
                                            attrs: {
                                                    d: "M1015.1 235.76c63.28 0 106.96-46.48 106.96-114.52C1122.06 53.48 1078.38 7 1015.1 7c-63.283 0-106.683 46.48-106.683 114.24 0 68.04 43.4 114.52 106.683 114.52Zm-80.363-114.52c0-53.76 32.76-90.44 80.363-90.44 47.6 0 80.08 36.68 80.08 90.44s-32.48 91-80.08 91c-47.603 0-80.363-37.24-80.363-91Z"
                                            }
                                    }), o("path", {
                                            attrs: {
                                                    d: "M92.36 185.501c20.701-21.509 41.437-39.354 62.206-53.537 20.769-14.183 45.662-29.934 74.679-47.253 18.431-10.858 32.505-19.505 42.222-25.94a121.213 121.213 0 0 0 23.741-19.906c6.111-6.83 9.166-13.667 9.166-20.51.07-2.105-.28-4.203-1.028-6.171a15.83 15.83 0 0 0-3.33-5.29c-2.905-3.016-7.262-4.525-13.072-4.525-9.416 0-16.729 3.52-21.938 10.557-5.209 7.038-9.066 15.986-11.57 26.844-2.504 10.858-5.175 25.838-8.014 44.94-3.205 24.344-6.811 44.603-10.818 60.776a132.956 132.956 0 0 1-18.933 43.282c-10.418 15.684-24.843 27.85-43.274 36.496-18.432 8.646-39.268 12.969-62.508 12.969-22.84 0-42.523-4.474-59.051-13.422-16.529-8.948-29.134-21.14-37.815-36.576C4.308 172.766-.033 155.473 0 136.357c0-21.501 5.059-40.101 15.176-55.799a99.47 99.47 0 0 1 39.488-35.761 112.46 112.46 0 0 1 51.088-12.216 100.202 100.202 0 0 1 44.477 9.954 79.55 79.55 0 0 1 32.606 28.804c8.114 12.574 12.171 27.203 12.171 43.885 0 16.683-3.673 31.512-11.019 44.489a79.546 79.546 0 0 1-29.601 30.312 79.711 79.711 0 0 1-40.871 10.858 77.345 77.345 0 0 1-33.207-7.088 59.31 59.31 0 0 1-24.492-20.811c-6.21-9.143-9.316-19.951-9.316-32.424a72.67 72.67 0 0 1 8.014-33.63A67.638 67.638 0 0 1 75.4 82.197c8.615-6.12 17.33-9.186 26.145-9.2 9.216 0 13.824 3.319 13.824 9.954a11.54 11.54 0 0 1-3.757 8.898 13.374 13.374 0 0 1-9.466 3.469c-14.425 0-26.395 4.474-35.912 13.421-9.516 8.948-14.375 20.46-14.575 34.536a50.401 50.401 0 0 0 8.415 28.804 56.32 56.32 0 0 0 22.639 19.454 70.74 70.74 0 0 0 31.403 6.937 72.834 72.834 0 0 0 39.518-11.059 76.783 76.783 0 0 0 27.648-30.312 90.516 90.516 0 0 0 10.017-42.528c0-16.087-3.906-30.162-11.72-42.227a77.227 77.227 0 0 0-31.404-27.748 96.074 96.074 0 0 0-42.824-9.652A104.616 104.616 0 0 0 55.666 47.36 98.776 98.776 0 0 0 17.98 82.67C8.378 97.945 3.576 115.633 3.576 135.734a103.183 103.183 0 0 0 12.322 49.918 92.796 92.796 0 0 0 34.86 36.194c15.025 8.961 32.155 13.435 51.388 13.421 25.243 0 45.829-6.836 61.756-20.509a133.383 133.383 0 0 0 36.212-49.164c8.215-19.089 16.729-43.62 25.544-73.594 6.011-21.113 11.353-37.752 16.028-49.918 4.675-12.165 10.585-22.219 17.73-30.161a34.334 34.334 0 0 1 11.999-8.94A34.216 34.216 0 0 1 286.062.007c6.812 0 12.171 1.675 16.078 5.027 3.907 3.351 5.86 7.825 5.86 13.422 0 7.044-3.155 14.132-9.466 21.264-6.311 7.131-14.525 14.018-24.643 20.66-10.117 6.636-24.492 15.483-43.124 26.543-29.063 17.272-53.963 33.09-74.698 47.454-20.736 14.363-41.472 32.159-62.207 53.386A283.84 283.84 0 0 0 42.644 260l-2.104-.905a298.097 298.097 0 0 1 51.82-73.594Z"
                                            }
                                    })]))
                            }
                    }
            },
            416: function (e, t, o) {
                    "use strict";
                    o(389)
            },
            417: function (e, t, o) {
                    var n = o(86)(!1);
                    n.push([e.i, ".logo-marquee{display:flex;white-space:nowrap}.logo-marquee__sequence{width:13.4rem;margin:0 1rem;padding-top:.55em}@media(min-width:1024px){.logo-marquee__sequence{width:12.5vw;margin:0 .78125vw}}.logo-marquee__word{display:flex}.logo-marquee__word--f{height:14.5rem}@media(min-width:1024px){.logo-marquee__word--f{height:13.59375vw}}.logo-marquee__word--s{height:15.9rem}@media(min-width:1024px){.logo-marquee__word--s{height:14.84375vw}}.home-marque__svg{width:auto}", ""]),
                    e.exports = n
            },
            419: function (e, t, o) {
                    "use strict";
                    o.r(t);
                    o(33);
                    var n = o(46),
                            r = o(414),
                            l = o.n(r),
                            c = o(415),
                            d = o.n(c),
                            m = {
                                    name: "LogoMarquee",
                                    components: {
                                            FixSvg: l.a,
                                            StudioSvg: d.a
                                    },
                                    props: {
                                            images: {
                                                    type: Object,
                                                    required: !0
                                            },
                                            showSequence: {
                                                    type: Boolean,
                                                    required: !1,
                                            default:
                                                    !0
                                            },
                                            shouldSequencePlayOnMobile: {
                                                    type: Boolean,
                                                    required: !1,
                                            default:
                                                    !1
                                            }
                                    },
                                    data: function () {
                                            return {
                                                    shouldSequenceAnimate: !1
                                            }
                                    },
                                    computed: {
                                            reversedArray: function () {
                                                    return this.images.images2.slice().reverse()
                                            }
                                    },
                                    mounted: function () {
                                            var e = this;
                                            this.showSequence && (this.shouldSequencePlayOnMobile ? this.shouldSequenceAnimate = !0 : n.a.matchMedia({
                                                    "(min-width: 1024px)": function () {
                                                            e.shouldSequenceAnimate = !0
                                                    }
                                            }))
                                    }
                            },
                            h = (o(416), o(36)),
                            component = Object(h.a)(m, (function () {
                                    var e = this,
                                            t = e.$createElement,
                                            o = e._self._c || t;
                                    return o("div", {
                                            staticClass: "logo-marquee"
                                    }, [e.images ? o("div", {
                                            staticClass: "logo-marquee__sequence"
                                    }, [e.showSequence ? o("ImageSequence", {
                                            attrs: {
                                                    images: e.images.images1,
                                                    "has-delay": !0,
                                                    "should-animate": e.shouldSequenceAnimate
                                            }
                                    }) : o("BaseImage", {
                                            attrs: {
                                                    data: Object.assign({}, e.images.images1[0])
                                            }
                                    })], 1) : e._e(), e._v(" "), o("div", {
                                            staticClass: "logo-marquee__word logo-marquee__word--f"
                                    }, [o("FixSvg", {
                                            staticClass: "home-marque__svg"
                                    })], 1), e._v(" "), e.images ? o("div", {
                                            staticClass: "logo-marquee__sequence"
                                    }, [e.showSequence ? o("ImageSequence", {
                                            attrs: {
                                                    images: e.reversedArray,
                                                    "should-animate": e.shouldSequenceAnimate
                                            }
                                    }) : o("BaseImage", {
                                            attrs: {
                                                    data: Object.assign({}, e.reversedArray[0])
                                            }
                                    })], 1) : e._e(), e._v(" "), o("div", {
                                            staticClass: "logo-marquee__word logo-marquee__word--s"
                                    }, [o("StudioSvg", {
                                            staticClass: "home-marque__svg"
                                    })], 1)])
                            }), [], !1, null, null, null);
                    t.
            default = component.exports;
                    installComponents(component, {
                            ImageSequence: o(385).
                    default,
                            BaseImage:
                            o(371).
                    default
                    })
            },
            434: function (e, t, o) {
                    "use strict";
                    o.r(t);
                    o(37),
                    o(26),
                    o(24),
                    o(8),
                    o(55),
                    o(19),
                    o(56);
                    var n = o(13),
                            r = (o(62), o(68), o(16), o(34), o(38)),
                            l = o(47),
                            c = o(46);

                    function d(object, e) {
                            var t = Object.keys(object);
                            if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(object);
                                    e && (o = o.filter((function (e) {
                                            return Object.getOwnPropertyDescriptor(object, e).enumerable
                                    }))),
                                    t.push.apply(t, o)
                            }
                            return t
                    }
                    function m(e) {
                            for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? d(Object(source), !0).forEach((function (t) {
                                            Object(n.a)(e, t, source[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                    }))
                            }
                            return e
                    }
                    var h = {
                            name: "Footer",
                            props: {
                                    images: {
                                            type: Object,
                                            required: !0
                                    }
                            },
                            data: function () {
                                    return {
                                            mobileLinesAmount: -1,
                                            desktopLinesAmount: -1,
                                            mobileSplit: null,
                                            desktopSplit: null,
                                            nyTime: null,
                                            delayedCall: null,
                                            isTabVisible: !0,
                                            format: "hh:mm A"
                                    }
                            },
                            computed: m(m(m({}, Object(r.c)("app", ["getIsMobile"])), Object(r.c)("footer", ["getFooterData"])), {}, {
                                    textColumns: function () {
                                            var e = this.getFooterData;
                                            return {
                                                    textColumn1: e.textColumn1,
                                                    textColumn2: e.textColumn2,
                                                    textColumn3: e.textColumn3,
                                                    textColumn4: e.textColumn4,
                                                    textColumn5: e.textColumn5
                                            }
                                    },
                                    copyright: function () {
                                            var data = this.getFooterData.textColumn5;
                                            return data.content[0].content[0].value.includes("{year}") && (data.content[0].content[0].value = data.content[0].content[0].value.replace("{year}", (new Date).getFullYear())),
                                            data
                                    }
                            }),
                            mounted: function () {
                                    this.initEvents(),
                                    this.getNow(),
                                    this.$nextTick().then(this.initTl)
                            },
                            beforeDestroy: function () {
                                    this.delayedCall && this.delayedCall.kill(),
                                    this.tl && this.tl.kill(),
                                    this.destroyEvents()
                            },
                            methods: {
                                    initEvents: function () {
                                            this.$nuxt.$on("RESIZE", this.onResize),
                                            document.addEventListener("visibilitychange", this.onChange)
                                    },
                                    destroyEvents: function () {
                                            this.$nuxt.$off("RESIZE", this.onResize),
                                            document.removeEventListener("visibilitychange", this.onChange)
                                    },
                                    onMobileSplitDone: function (e) {
                                            this.mobileSplit = e
                                    },
                                    onDesktopSplitDone: function (e) {
                                            this.desktopSplit = e,
                                            this.onResize()
                                    },
                                    onResize: function () {
                                            var e = this;
                                            this.$nextTick((function () {
                                                    e.getMobileLinesAmount(),
                                                    e.getDesktopLinesAmount()
                                            }))
                                    },
                                    getMobileLinesAmount: function () {
                                            if (this.mobileSplit && this.$refs.mobileLines) {
                                                    var e = this.mobileSplit.lines;
                                                    if (e) {
                                                            var t = this.$refs.mobileLines.getBoundingClientRect(),
                                                                    o = e[0].getBoundingClientRect();
                                                            this.mobileLinesAmount = Math.floor(t.height / o.height) + 1
                                                    }
                                            }
                                    },
                                    getDesktopLinesAmount: function () {
                                            if (this.desktopSplit && this.$refs.desktopLines) {
                                                    var e = this.desktopSplit.lines;
                                                    if (e) {
                                                            var t = this.$refs.desktopLines.getBoundingClientRect(),
                                                                    o = e[0].getBoundingClientRect();
                                                            this.desktopLinesAmount = Math.floor(t.height / o.height)
                                                    }
                                            }
                                    },
                                    onChange: function () {
                                            this.isTabVisible = !this.isTabVisible,
                                            this.isTabVisible && this.getNow()
                                    },
                                    getTime: function () {
                                            this.delayedCall && this.delayedCall.kill(),
                                            this.delayedCall = l.a.delayedCall(60, this.getNow)
                                    },
                                    getNow: function () {
                                            var e = this.$dayjs().tz("America/New_York");
                                            this.nyTime = e.format(this.format),
                                            this.getTime()
                                    },
                                    initTl: function () {
                                            var e = this;
                                            c.a.matchMedia({
                                                    "(min-width: 1025px)": function () {
                                                            return e.tl = l.a.timeline({
                                                                    paused: !0,
                                                                    scrollTrigger: {
                                                                            trigger: e.$refs.container,
                                                                            start: "top bottom",
                                                                            end: "bottom bottom",
                                                                            scrub: !0
                                                                    }
                                                            }),
                                                            e.tl.addLabel("start"),
                                                            e.tl.fromTo(e.$refs.marquee.$el, {
                                                                    scale: 3
                                                            }, {
                                                                    scale: 1,
                                                                    transformOrigin: "top center",
                                                                    duration: .8,
                                                                    ease: "none"
                                                            }, "start"),


                                                            function () {
                                                                    e.tl && e.tl.kill()
                                                            }
                                                    }
                                            })
                                    }
                            }
                    },
                            f = (o(450), o(36)),
                            component = Object(f.a)(h, (function () {
                                    var e = this,
                                            t = e.$createElement,
                                            o = e._self._c || t;
                                    return o("footer", {
                                            ref: "container",
                                            staticClass: "footer p1 is-visible"
                                    }, [o("div", {
                                            staticClass: "footer__intro"
                                    }, [o("div", {
                                            staticClass: "container"
                                    }, [o("div", [o("TextSplitter", {
                                            attrs: {
                                                    content: e.$contentfulRichText(e.textColumns.textColumn1),
                                                    "should-restore": !1,
                                                    "should-set-delay": !1,
                                                    callback: e.onMobileSplitDone
                                            }
                                    })], 1)]), e._v(" "), o("div", {
                                            ref: "mobileLines",
                                            staticClass: "footer__lines"
                                    }, [e.mobileLinesAmount > 0 ? o("Lines", {
                                            attrs: {
                                                    total: e.mobileLinesAmount
                                            }
                                    }) : e._e()], 1)]), e._v(" "), o("Marquee", {
                                            ref: "marquee",
                                            staticClass: "footer__marquee",
                                            scopedSlots: e._u([{
                                                    key: "slot1",
                                                    fn: function () {
                                                            return [o("LogoMarquee", {
                                                                    attrs: {
                                                                            images: e.images,
                                                                            "show-sequence": !1
                                                                    }
                                                            })]
                                                    },
                                                    proxy: !0
                                            },
                                            {
                                                    key: "slot2",
                                                    fn: function () {
                                                            return [o("LogoMarquee", {
                                                                    attrs: {
                                                                            images: e.images,
                                                                            "show-sequence": !1
                                                                    }
                                                            })]
                                                    },
                                                    proxy: !0
                                            },
                                            {
                                                    key: "slot3",
                                                    fn: function () {
                                                            return [o("LogoMarquee", {
                                                                    attrs: {
                                                                            images: e.images,
                                                                            "should-sequence-play-on-mobile": !0
                                                                    }
                                                            })]
                                                    },
                                                    proxy: !0
                                            },
                                            {
                                                    key: "slot4",
                                                    fn: function () {
                                                            return [o("LogoMarquee", {
                                                                    attrs: {
                                                                            images: e.images,
                                                                            "should-sequence-play-on-mobile": !0
                                                                    }
                                                            })]
                                                    },
                                                    proxy: !0
                                            }])
                                    }), e._v(" "), o("div", {
                                            ref: "content",
                                            staticClass: "footer__wrapper"
                                    }, [o("div", {
                                            staticClass: "container"
                                    }, [o("div", {
                                            staticClass: "row footer__row"
                                    }, [o("div", {
                                            staticClass: "col footer__col"
                                    }, [o("div", {
                                            domProps: {
                                                    innerHTML: e._s(e.$contentfulRichText(e.textColumns.textColumn1))
                                            }
                                    })]), e._v(" "), o("div", {
                                            staticClass: "col footer__col"
                                    }, [o("div", [o("TextSplitter", {
                                            attrs: {
                                                    content: e.$contentfulRichText(e.textColumns.textColumn2),
                                                    "should-restore": !1,
                                                    "should-set-delay": !1,
                                                    callback: e.onDesktopSplitDone
                                            }
                                    })], 1)]), e._v(" "), o("div", {
                                            staticClass: "col footer__col"
                                    }, [o("div", {
                                            domProps: {
                                                    innerHTML: e._s(e.$contentfulRichText(e.textColumns.textColumn3))
                                            }
                                    }), e._v(" "), o("div", [e._v(e._s(e.nyTime) + " EST")])]), e._v(" "), o("div", {
                                            staticClass: "col footer__col"
                                    }, [o("div", {
                                            domProps: {
                                                    innerHTML: e._s(e.$contentfulRichText(e.textColumns.textColumn4))
                                            }
                                    })]), e._v(" "), o("div", {
                                            staticClass: "col footer__col"
                                    }, [o("div", {
                                            domProps: {
                                                    innerHTML: e._s(e.$contentfulRichText(e.copyright))
                                            }
                                    })])])]), e._v(" "), o("div", {
                                            ref: "desktopLines",
                                            staticClass: "footer__lines"
                                    }, [e.desktopLinesAmount > 0 ? o("Lines", {
                                            attrs: {
                                                    total: e.desktopLinesAmount
                                            }
                                    }) : e._e()], 1)])], 1)
                            }), [], !1, null, null, null);
                    t.
            default = component.exports;
                    installComponents(component, {
                            TextSplitter: o(422).
                    default,
                            Lines:
                            o(423).
                    default,
                            LogoMarquee:
                            o(419).
                    default,
                            Marquee:
                            o(244).
                    default,
                            Footer:
                            o(434).
                    default
                    })
            },
            437: function (e, t, o) {
                    var content = o(451);
                    content.__esModule && (content = content.
            default),
                    "string" == typeof content && (content = [
                            [e.i, content, ""]
                    ]),
                    content.locals && (e.exports = content.locals);
                    (0, o(87).
            default)("2a5a14fd", content, !0, {
                            sourceMap: !1
                    })
            },
            450: function (e, t, o) {
                    "use strict";
                    o(437)
            },
            451: function (e, t, o) {
                    var n = o(86)(!1);
                    n.push([e.i, ".footer{padding:1.7em 0;overflow:hidden}@media(min-width:1024px){.footer{display:flex;flex-direction:column;height:100vh}}@media(max-width:1023px){.footer__marquee.marquee{margin:4.8rem 0 14.6rem}}@media(min-width:1024px){.footer__marquee.marquee{margin:0 0 auto;padding-top:1.875vw}}.footer__intro{position:relative}@media(min-width:1024px){.footer__intro{display:none}}.footer__intro p:not(:last-child){margin-bottom:1.7em}.footer__wrapper{position:relative}@media(min-width:1024px){.footer__wrapper{margin-top:auto}}@media(max-width:767px){.footer__row{display:grid;grid-template-columns:50% 50%}}.footer__col{flex:0 0 16.6666666667%}@media(min-width:768px){.footer__col{flex:0 0 25%}}@media(min-width:1024px){.footer__col{flex:0 0 16.6666666667%}}@media(max-width:1023px){.footer__col:first-child{display:none}}@media(min-width:768px){.footer__col:first-child{flex:0 0 25%;margin-right:8.3333333333%}}@media(max-width:767px){.footer__col:nth-child(3){order:1;margin-top:-1.78em}.footer__col:nth-child(5){order:4}.footer__col:last-child{margin-top:1.78em}.footer__col:last-child br:first-child{display:none}}.footer__col p:not(:last-child){margin-bottom:1.7em}.footer__lines{position:absolute;left:0;top:-1.78em;bottom:-1.78em;width:100%;pointer-events:none}", ""]),
                    e.exports = n
            }
    }]);