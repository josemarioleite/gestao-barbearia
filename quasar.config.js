const { configure } = require('quasar/wrappers')
const path = require('path')

module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      // fix: true,
      // include: [],
      // exclude: [],
      // rawOptions: {},
      warnings: true,
      errors: true
    },
    boot: [
      'i18n',
      'axios',
      'componentes-globais'
    ],
    css: ['app.scss'],
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16'
      },
      vueRouterMode: 'history', // available values: 'hash', 'history'
      // vueRouterBase,
      // vueDevtools,
      // vueOptionsAPI: false,
      // rebuildCache: true, // rebuilds Vite/linter/etc cache on startup
      // publicPath: '/',
      // analyze: true,
      // env: {},
      // rawDefine: {}
      // ignorePublicFolder: true,
      // minify: false,
      // polyfillModulePreload: true,
      // distDir
      // viteVuePluginOptions: {},
      vitePlugins: [
        ['@intlify/vite-plugin-vue-i18n', {
          include: path.resolve(__dirname, './src/i18n/**')
        }]
      ]
      // extendViteConf (cfg) {
      //   cfg.module.rule('pug')
      //     .test(/\.pug$/)
      //     .use('pug-plain-loader')
      //     .loader('pug-plain-loader')
      // }
    },
    devServer: {
      open: true
    },
    framework: {
      lang: 'pt-BR',
      config: {},
      // iconSet: 'material-icons', // Quasar icon set
      // components: [],
      // directives: [],
      plugins: ['Dialog', 'Notify']
    },
    animations: 'all',
    // sourceFiles: {
    //   rootComponent: 'src/App.vue',
    //   router: 'src/router/index',
    //   store: 'src/store/index',
    //   registerServiceWorker: 'src-pwa/register-service-worker',
    //   serviceWorker: 'src-pwa/custom-service-worker',
    //   pwaManifestFile: 'src-pwa/manifest.json',
    //   electronMain: 'src-electron/electron-main',
    //   electronPreload: 'src-electron/electron-preload'
    // },
    ssr: {
      // ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
      // will mess up SSR
      // extendSSRWebserverConf (esbuildConf) {},
      // extendPackageJson (json) {},
      pwa: false,
      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,
      prodPort: 3000,
      middlewares: ['render']
    },
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
      // useFilenameHashes: true,
      // extendGenerateSWOptions (cfg) {}
      // extendInjectManifestOptions (cfg) {},
      // extendManifestJson (json) {}
      // extendPWACustomSWConf (esbuildConf) {}
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true
    },
    electron: {},
    bex: {
      contentScripts: ['my-content-script']
    }
  }
})
