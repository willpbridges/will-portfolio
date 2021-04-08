/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onInitialClientRender = () => {
    // dirty fix for missing popstate listener
    const GATSBY_NAVIGATE = window.___navigate || {}
  
    window.addEventListener('popstate', () =>
      GATSBY_NAVIGATE(window.location.pathname, { replace: true })
    )
  }