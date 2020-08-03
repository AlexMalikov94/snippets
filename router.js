import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _2fb8bdb6 = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages_account_index" */))
const _16ba8fe7 = () => interopDefault(import('..\\pages\\browse\\index.vue' /* webpackChunkName: "pages_browse_index" */))
const _1580f6a2 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages_dashboard_index" */))
const _4dac5bee = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages_search_index" */))
const _7499a08a = () => interopDefault(import('..\\pages\\auth\\signin.vue' /* webpackChunkName: "pages_auth_signin" */))
const _4b6cf39e = () => interopDefault(import('..\\pages\\auth\\signup.vue' /* webpackChunkName: "pages_auth_signup" */))
const _783e4dfc = () => interopDefault(import('..\\pages\\browse\\components\\BrowseSnippetCard.vue' /* webpackChunkName: "pages_browse_components_BrowseSnippetCard" */))
const _91a5c2fc = () => interopDefault(import('..\\pages\\dashboard\\components\\DashboardSnippetCard.vue' /* webpackChunkName: "pages_dashboard_components_DashboardSnippetCard" */))
const _4ce965b0 = () => interopDefault(import('..\\pages\\home\\components\\LatestSnippetCard.vue' /* webpackChunkName: "pages_home_components_LatestSnippetCard" */))
const _fb1c9374 = () => interopDefault(import('..\\pages\\search\\components\\SearchSnippetCard.vue' /* webpackChunkName: "pages_search_components_SearchSnippetCard" */))
const _7e9493a4 = () => interopDefault(import('..\\pages\\author\\_id.vue' /* webpackChunkName: "pages_author__id" */))
const _45a687bf = () => interopDefault(import('..\\pages\\snippets\\_id\\index.vue' /* webpackChunkName: "pages_snippets__id_index" */))
const _6fbda035 = () => interopDefault(import('..\\pages\\snippets\\_id\\edit\\index.vue' /* webpackChunkName: "pages_snippets__id_edit_index" */))
const _450c253a = () => interopDefault(import('..\\pages\\snippets\\_id\\components\\StepList.vue' /* webpackChunkName: "pages_snippets__id_components_StepList" */))
const _7dd008aa = () => interopDefault(import('..\\pages\\snippets\\_id\\components\\StepNavigationButton.vue' /* webpackChunkName: "pages_snippets__id_components_StepNavigationButton" */))
const _46e7338c = () => interopDefault(import('..\\pages\\snippets\\_id\\edit\\components\\AddStepButton.vue' /* webpackChunkName: "pages_snippets__id_edit_components_AddStepButton" */))
const _36146b4c = () => interopDefault(import('..\\pages\\snippets\\_id\\edit\\components\\DeleteStepButton.vue' /* webpackChunkName: "pages_snippets__id_edit_components_DeleteStepButton" */))
const _3b462c88 = () => interopDefault(import('..\\pages\\snippets\\_id\\edit\\components\\StepEditor.vue' /* webpackChunkName: "pages_snippets__id_edit_components_StepEditor" */))
const _1749a331 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/account",
      component: _2fb8bdb6,
      name: "account"
    }, {
      path: "/browse",
      component: _16ba8fe7,
      name: "browse"
    }, {
      path: "/dashboard",
      component: _1580f6a2,
      name: "dashboard"
    }, {
      path: "/search",
      component: _4dac5bee,
      name: "search"
    }, {
      path: "/auth/signin",
      component: _7499a08a,
      name: "auth-signin"
    }, {
      path: "/auth/signup",
      component: _4b6cf39e,
      name: "auth-signup"
    }, {
      path: "/browse/components/BrowseSnippetCard",
      component: _783e4dfc,
      name: "browse-components-BrowseSnippetCard"
    }, {
      path: "/dashboard/components/DashboardSnippetCard",
      component: _91a5c2fc,
      name: "dashboard-components-DashboardSnippetCard"
    }, {
      path: "/home/components/LatestSnippetCard",
      component: _4ce965b0,
      name: "home-components-LatestSnippetCard"
    }, {
      path: "/search/components/SearchSnippetCard",
      component: _fb1c9374,
      name: "search-components-SearchSnippetCard"
    }, {
      path: "/author/:id?",
      component: _7e9493a4,
      name: "author-id"
    }, {
      path: "/snippets/:id?",
      component: _45a687bf,
      name: "snippets-id"
    }, {
      path: "/snippets/:id?/edit",
      component: _6fbda035,
      name: "snippets-id-edit"
    }, {
      path: "/snippets/:id?/components/StepList",
      component: _450c253a,
      name: "snippets-id-components-StepList"
    }, {
      path: "/snippets/:id?/components/StepNavigationButton",
      component: _7dd008aa,
      name: "snippets-id-components-StepNavigationButton"
    }, {
      path: "/snippets/:id?/edit/components/AddStepButton",
      component: _46e7338c,
      name: "snippets-id-edit-components-AddStepButton"
    }, {
      path: "/snippets/:id?/edit/components/DeleteStepButton",
      component: _36146b4c,
      name: "snippets-id-edit-components-DeleteStepButton"
    }, {
      path: "/snippets/:id?/edit/components/StepEditor",
      component: _3b462c88,
      name: "snippets-id-edit-components-StepEditor"
    }, {
      path: "/",
      component: _1749a331,
      name: "index"
    }],

    fallback: false
  })
}
