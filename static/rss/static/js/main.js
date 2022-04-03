(window["webpackJsonpreact-rss-tutorial-app"] =
  window["webpackJsonpreact-rss-tutorial-app"] || []).push([
  [0],
  {
    221: function (e, t, a) {
      e.exports = a(480);
    },
    226: function (e, t, a) {},
    228: function (e, t, a) {},
    375: function (e, t, a) {},
    397: function (e, t, a) {},
    416: function (e, t) {},
    418: function (e, t) {},
    451: function (e, t) {},
    453: function (e, t) {},
    480: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        s = a(40),
        o = a.n(s),
        l = a(488),
        c = a(26),
        i = a(219),
        m = a.n(i),
        d = (a(226), a(33)),
        u = a(34),
        w = a.n(u),
        p = a(57),
        f = a(52),
        h = (a(228), a(32)),
        g = a(21),
        b = a.n(g),
        k = a(220),
        v = a(28),
        E = a.n(v),
        y = a(78),
        S = a.n(y),
        x = a(41),
        N = a.n(x),
        O = a(80),
        j = [
          { name: "Normas legales de la UNMSM", url: "https://www.gob.pe/busquedas.rss?contenido[]=normas&institucion[]=unmsm&sheet=1&sort_by=recent&term=pregrado"},
          { name: "CONCYTEC", url: "https://www.gob.pe/busquedas.rss?contenido[]=noticias&institucion[]=concytec&sheet=1&sort_by=recent&term=Consejo%20Nacional%20de%20Ciencia%2C%20Tecnolog%C3%ADa%20e%20Innovaci%C3%B3n%20Tecnol%C3%B3gica"},
          { name: "Becas | OGCRI", url: "https://cooperacion-unmsm.blogspot.com/feeds/posts/default?alt=rss"},
          { name: "Becas | PRONABEC", url: "https://www.gob.pe/busquedas.rss?categoria[]=10-educacion&contenido[]=noticias&institucion[]=pronabec&sheet=1&sort_by=recent"},
          { name: "Editorial | Naukas", url: "https://feedpress.me/naukas"},
          { name: "Editorial | Cultura Científica", url: "http://feeds.feedburner.com/feedburner/qarx"},
          { name: "Editorial | Quanta Magazine", url: "http://www.quantamagazine.org/feed/"},
          { name: "Editorial | The Markup", url: "https://themarkup.org/feeds/rss.xml"},
          { name: "Editorial | simmetry magazine", url: "https://www.symmetrymagazine.org/feed"},
          { name: "Editorial | Towards Data Science", url: "https://towardsdatascience.com/feed/tagged/python"},
          { name: "Noticias | Sinc", url: "http://www.agenciasinc.es/layout/set/rss/content/view/rss/227/(categoria)/3"},
          { name: "Noticias | El País", url: "https://feeds.elpais.com/mrss-s/list/ep/site/elpais.com/section/ciencia"},
          { name: "Noticias | Fermilab", url: "https://news.fnal.gov/tag/physics/feed/"},
          { name: "Noticias | Tech Xplore", url: "https://techxplore.com/rss-feed/semiconductors-news/"},
          { name: "Blog | Wolfram", url: "https://blog.wolfram.com/feed/"},
          { name: "Blog | In the Dark", url: "https://telescoper.wordpress.com/feed/"},
          { name: "Blog | Quantum Frontiers", url: "https://quantumfrontiers.com/feed/"},
          { name: "Blog | Not Even Wrong", url: "https://www.math.columbia.edu/~woit/wordpress/?feed=rss2"},
          { name: "Blog | Physics-Based Animation", url: "https://www.physicsbasedanimation.com/feed/"},
          { name: "Blog | Terrence Tao", url: "https://terrytao.wordpress.com/feed/"},
          { name: "Blog | The n-Category café", url: "https://golem.ph.utexas.edu/category/atom10.xml"},
          { name: "Blog | nanoscale views", url: "https://nanoscale.blogspot.com/feeds/posts/default"},
          { name: "Blog | Shtetl-Optimized", url: "https://scottaaronson.blog/?feed=rss2"},
          { name: "Blog | Bad Astronomy", url: "https://www.syfy.com/syfy-wire/topic/bad-astronomy/feed"},
          { name: "Blog | The Roots of Progress", url: "https://rootsofprogress.org/feed.xml"},
          { name: "Blog | The 21st century salon", url: "https://bprice.substack.com/feed"},
        ],
        C = a(169),
        D = O.object({
          name: O.string().required("URL is required"),
          url: O.string()
            .required("URL is required")
            .matches(
              /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
              "Invalid URL"
            ),
        });
      console.log = function () {};

      var T = Object(h.a)(function (e) {
          var t = this,
            a = e.feedsStore,
            s = Object(n.useState)(!1),
            o = Object(f.a)(s, 2),
            l = o[0],
            c = o[1],
            i = Object(n.useState)(!1),
            m = Object(f.a)(i, 2),
            u = m[0],
            h =
              (m[1],
              (function () {
                var e = Object(p.a)(
                  w.a.mark(function e(t, n) {
                    var r, s, o;
                    return w.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = n.setSubmitting),
                                (s = n.setErrors),
                                (o = n.resetForm),
                                (e.prev = 1),
                                (e.next = 4),
                                D.validate(t)
                              );
                            case 4:
                              o({}),
                                a.feeds.push(t),
                                a.setFeeds(a.feeds),
                                localStorage.setItem(
                                  "newsfeeds",
                                  JSON.stringify(a.feeds)
                                ),
                                (e.next = 14);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(1)),
                                r(!1),
                                s({ submit: e.t0.message });
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 10]]
                    );
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })()),
            g = function (e) {
              a.feeds.splice(e, 1),
                a.setFeeds(a.feeds),
                localStorage.setItem("newsfeeds", JSON.stringify(a.feeds));
            };
          return (
            Object(n.useEffect)(
              function () {
                if (!l) {
                  var e = [],
                    t = "";
                  try {
                    (e = JSON.parse(localStorage.getItem("newsfeeds"))),
                      Array.isArray(e) ? a.setFeeds(e) : a.setFeeds(j);
                  } catch (n) {
                    console.log("error" + n);
                  }
                  try {
                    (t = JSON.parse(localStorage.getItem("darkmode"))),
                      a.setDarkMode(t),
                      console.log(t);
                  } catch (n) {
                    console.log("error" + n);
                  }
                  c(!0), console.log("Useeffect ran");
                }
              },
              [l]
            ),
            u
              ? r.a.createElement(d.a, {
                  to: "/feed?".concat(C.encode({ url: a.feed })),
                })
              : r.a.createElement(
                  "div",
                  { className: "home-page" },
                  r.a.createElement("br", null),
                  r.a.createElement(
                    k.a,
                    {
                      validationSchema: D,
                      onSubmit: h,
                      initialValues: { name: "", url: "" },
                    },
                    function (e) {
                      var t = e.handleSubmit,
                        n = e.handleChange,
                        s = (e.handleBlur, e.values),
                        o = e.touched,
                        l = (e.isInvalid, e.errors);
                      return r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          E.a,
                          { noValidate: !0, onSubmit: t },
                          r.a.createElement(
                            E.a.Row,
                            null,
                            r.a.createElement(
                              E.a.Group,
                              { as: S.a, md: "2", controlId: "name" },
                              r.a.createElement(E.a.Control, {
                                className:
                                  1 != a.darkmode
                                    ? "bg-light"
                                    : "bg-dark text-light",
                                type: "text",
                                name: "name",
                                placeholder: "Nombre",
                                value: s.name || "",
                                onChange: n,
                                isInvalid: o.name && l.name,
                              }),
                              r.a.createElement(
                                E.a.Control.Feedback,
                                { type: "invalid" },
                                l.name
                              ),
                            ),
                            r.a.createElement(
                              E.a.Group,
                              { as: S.a, md: "2", controlId: "url" },
                              r.a.createElement(E.a.Control, {
                                className:
                                  1 != a.darkmode
                                    ? "bg-light"
                                    : "bg-dark text-light",
                                type: "text",
                                name: "url",
                                placeholder: "URL",
                                value: s.url || "",
                                onChange: n,
                                isInvalid: o.url && l.url,
                              }),
                              r.a.createElement(
                                E.a.Control.Feedback,
                                { type: "invalid" },
                                l.url
                              )
                            ),
                            r.a.createElement(
                              N.a,
                              {
                                variant: 1 != a.darkmode ? "primary" : "info",
                                type: "submit",
                                className: "form-group col-md-2",
                              },
                              "Añadir"
                            ),
                            r.a.createElement(
                              N.a,
                              {
                                variant: 1 != a.darkmode ? "primary" : "info",
                                className: "form-group ml-auto col-md-4",
                                onClick: function () {
                                  localStorage.removeItem("newsfeeds"), c(!1);
                                },
                              },
                              "Recupera la lista original"
                            ),
                          ),
                        )
                      );
                    }
                  ),
                  r.a.createElement("br", null),
                  a.feeds.map(function (e, n) {
                    return r.a.createElement(
                      b.a,
                      { key: n },
                      r.a.createElement(
                        "div",
                        { className: 1 != a.darkmode ? "bg-white" : "bg-dark" },
                        r.a.createElement(
                          b.a.Title,
                          {
                            className:
                              1 != a.darkmode
                                ? "card-title"
                                : "card-title bg-dark text-light ",
                          },
                          e.name
                        ),
                        r.a.createElement(
                          b.a.Subtitle,
                          { style: { paddingLeft: "20px" } },
                          e.url
                        ),
                        r.a.createElement(
                          b.a.Body,
                          null,
                          r.a.createElement(
                            N.a,
                            {
                              variant: 1 != a.darkmode ? "primary" : "info",
                              onClick: g.bind(t, n),
                            },
                            "Eliminar"
                          )
                        )
                      )
                    );
                  })
                )
          );
        }),
        I = (a(375), a(60)),
        B = a.n(I),
        F = a(127),
        M = a.n(F),
        R = a(4);
      var J = Object(h.a)(function (e) {
          var t = e.feedsStore;
          return r.a.createElement(
            B.a,
            {
              bg: 1 != t.darkmode ? "primary" : "secondary",
              expand: "lg",
              variant: "dark",
            },
            r.a.createElement(
              B.a.Brand,
              null,
              r.a.createElement(
                c.b,
                { style: { color: "white", textDecoration: "none" }, to: "/" },
                ""
              )
            ),
            r.a.createElement(B.a.Toggle, {
              "aria-controls": "basic-navbar-nav",
            }),
            r.a.createElement(
              B.a.Collapse,
              { id: "basic-navbar-nav" },
              r.a.createElement(
                M.a,
                { className: "mx-auto" },
                r.a.createElement(
                  M.a.Link,
                  {
                    href: "/",
                    style: { color: "white", textDecoration: "none" },
                  },
                  "Volver"
                ),
                r.a.createElement(
                  M.a.Link,
                  {
                    href: "/rss",
                    style: { color: "white", textDecoration: "none" },
                  },
                  "Inicio"
                ),
                r.a.createElement(
                  c.b,
                  {
                    style: { color: "white", textDecoration: "none" },
                    className: "nav-item nav-link active",
                    to: "/fuentes",
                  },
                  "Fuentes"
                ),
              )
            )
          );
        }),
        A = a(489),
        L = (a(397), a(398)),
        U = a(444),
        W = a(445),
        q = (new (a(446))(), a(469));
      var P = Object(d.f)(
        Object(h.a)(function (e) {
          var t = this,
            a = e.feedsStore,
            s = Object(n.useState)(!1),
            o = Object(f.a)(s, 2),
            l = o[0],
            c = o[1],
            i = Object(n.useState)([]),
            m = Object(f.a)(i, 2),
            d = m[0],
            u = m[1],
            h = [],
            g = (function () {
              var e = Object(p.a)(
                w.a.mark(function e(t) {
                  return w.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            L.load(
                              "https://cors.cae.workers.dev/?" + t.url,
                              function (e, a) {
                                if (e) console.log("error" + t);
                                else {
                                  a.items.map(function (e) {
                                    return (e.sourceName = a.title);
                                  });
                                  var n = q.uniqBy(a.items, "title");
                                  h.push(q.uniqBy(a.items, "title")),
                                    (n = []),
                                    u(h.flat()),
                                    console.log(n);
                                }
                              }
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function () {
              if (!l) {
                var e = [],
                  t = "";
                try {
                  (e = JSON.parse(localStorage.getItem("newsfeeds"))),
                    Array.isArray(e) ? a.setFeeds(e) : a.setFeeds(j);
                } catch (n) {
                  console.log("error" + n);
                }
                try {
                  (t = JSON.parse(localStorage.getItem("darkmode"))),
                    a.setDarkMode(t),
                    console.log(t);
                } catch (n) {
                  console.log("error" + n);
                }
                a.feeds.map(
                  (function () {
                    var e = Object(p.a)(
                      w.a.mark(function e(t) {
                        return w.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), g(t);
                              case 2:
                                (h = []), console.log("Está actualizando...");
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              }
              c(!0);
            },
            [l]
          );
          var k = function (e) {
            window.open(e);
          };
          return 0 === d.length
            ? r.a.createElement(
                "div",
                { className: "feed-page" },
                r.a.createElement("h2", null, " Cargando"),
                ""
              )
            : r.a.createElement(
                "div",
                { className: "feed-page" },
                " ",
                r.a.createElement(
                  N.a,
                  {
                    variant: 1 != a.darkmode ? "primary" : "info",
                    className: "d-flex mx-auto m-3",
                    onClick: function () {
                      return (
                        (e = !a.darkmode),
                        a.setDarkMode(e),
                        localStorage.setItem("darkmode", JSON.stringify(e)),
                        void console.log("darkmode ran  " + e)
                      );
                      var e;
                    },
                  },
                  1 != a.darkmode ? "Modo oscuro" : "Modo claro"
                ),
                d
                  .sort(function (e, t) {
                    var a = new Date(e.pubDate).getTime();
                    return new Date(t.pubDate).getTime() - a;
                  })
                  .splice(0, 250)
                  .map(function (e, n) {
                    if (void 0 != e.pubDate)
                      return r.a.createElement(
                        b.a,
                        { key: n },
                        r.a.createElement(
                          b.a.Header,
                          {
                            className:
                              1 != a.darkmode
                                ? "card-title"
                                : "card-title bg-dark text-light ",
                          },
                          " ",
                          e.title,
                          " "
                        ),
                        r.a.createElement(
                          b.a.Body,
                          { className: 1 != a.darkmode ? "" : "bg-dark" },
                          r.a.createElement(
                            b.a.Text,
                            null,
                            " ",
                            W.decode(
                              U(e.description).substring(0, 250) + "..."
                            ),
                            " "
                          ),
                          " ",
                          r.a.createElement(
                            b.a.Text,
                            { className: "time-ago" },
                            r.a.createElement(
                              "span",
                              null,
                              r.a.createElement(A.a, {
                                date: new Date(e.pubDate),
                              }),
                              " ",
                              r.a.createElement(
                                "span",
                                null,
                                " ",
                                "  de ".concat(e.sourceName),
                                " "
                              ),
                              " "
                            ),
                            " "
                          ),
                          " ",
                          " ",
                          r.a.createElement(
                            N.a,
                            {
                              variant: 1 != a.darkmode ? "primary" : "info",
                              className: "d-flex mx-auto",
                              onClick: k.bind(t, e.link),
                            },
                            "Leer artículo original",
                            " "
                          ),
                          " "
                        ),
                        " "
                      );
                  }),
                " "
              );
        })
      );
      var z = Object(h.a)(function (e) {
        var t = e.feedsStore;
        return r.a.createElement(
          "div",
          {
            className:
              1 != t.darkmode ? "app bg-white" : "app bg-dark text-light",
          },
          r.a.createElement(J, { feedsStore: t }),
          r.a.createElement(d.b, {
            path: "/",
            exact: !0,
            component: function (e) {
              return r.a.createElement(
                P,
                Object.assign({}, e, { feedsStore: t })
              );
            },
          }),
          r.a.createElement(d.b, {
            path: "/fuentes",
            exact: !0,
            component: function (e) {
              return r.a.createElement(
                T,
                Object.assign({}, e, { feedsStore: t })
              );
            },
          })
        );
      });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var G = a(217),
        H = a(218),
        Z = (function () {
          function e() {
            Object(G.a)(this, e),
              (this.feeds = ["Hello"]),
              (this.feed = ""),
              (this.darkmode = !1);
          }
          return (
            Object(H.a)(e, [
              {
                key: "setFeeds",
                value: function (e) {
                  this.feeds = e;
                },
              },
              {
                key: "setSelectedFeed",
                value: function (e) {
                  this.feed = e;
                },
              },
              {
                key: "setDarkMode",
                value: function (e) {
                  this.darkmode = e;
                },
              },
            ]),
            e
          );
        })(),
        V = new (Z = Object(R.h)(Z, {
          feeds: R.m,
          feed: R.m,
          darkmode: R.m,
          setDarkMode: R.d,
          setFeeds: R.d,
          setSelectedFeed: R.d,
        }))();
      l.a.locale(m.a),
        o.a.render(
          r.a.createElement(
            c.a,
            { basename: "/rss/" },
            r.a.createElement(z, { feedsStore: V })
          ),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[221, 1, 2]],
]);
