export const END_TYPE = 'container_demo_close'

export const CLASS_WRAPPER = 'vitepress-plugin-demo-block__wrapper'
export const CLASS_DISPLAY = 'vitepress-plugin-demo-block__display'
export const CLASS_CODE = 'vitepress-plugin-demo-block__code'
export const CLASS_FOOTER = 'vitepress-plugin-demo-block__footer'
export const CLASS_HORIZONTAL = 'vitepress-plugin-demo-block__horizontal'
export const CLASS_H_CODE = 'vitepress-plugin-demo-block__h_code'

export const CLASS_APP = 'vitepress-plugin-demo-block__app'
export const CLASS_SHOW_LINK = 'vitepress-plugin-demo-block__show-link'
export const CLASS_EXPAND = 'vitepress-plugin-demo-block__expand'
export const CLASS_OUTLINK = 'vitepress-plugin-demo-block__out-link'
export const CLASS_CODEPEN = 'vitepress-plugin-demo-block__codepen'
export const CLASS_JSFIDDLE = 'vitepress-plugin-demo-block__jsfiddle'
export const CLASS_BUTTON = 'vitepress-plugin-demo-block__button'

export const DEFAULT_SETTINGS = {
  jsLib: [],
  cssLib: [],
  jsfiddle: true,
  codepen: true,
  codepenLayout: 'left',
  codepenJsProcessor: 'babel',
  codepenEditors: '101',
  horizontal: false,
  vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js',
  react: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js',
  reactDOM: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js',
}

export const SETTINGS_KEY = '$VUEPRESS_DEMO_BLOCK'
