
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Task-list-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Task-list-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 774, hash: 'fbe2252fdee95a094c3ceeaffa5bdcd0e434d50d5b1a6bfcaa73fa5df10b9588', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '993ceaa997a7a00c0c618266b67fe3a40b182904ee6695982715de3fadd9b344', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3481, hash: 'e110c1e3f1152497fe6784206bfcd0980405a2d8b644f652cd97408affd1fbf1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3ZN7X34B.css': {size: 139, hash: 'SmD8LT/B1/8', text: () => import('./assets-chunks/styles-3ZN7X34B_css.mjs').then(m => m.default)}
  },
};
