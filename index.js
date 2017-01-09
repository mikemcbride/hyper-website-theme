'use strict'

const black = '#000'
const white = '#ccc'
const red = '#ff2e88'
const green = '#50e3c2'
const cyan = green
const yellow = '#fff'
const blue = '#fff'
const magenta = '#fff'
const lightWhite = '#fff'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack: black,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite
}

module.exports.decorateConfig = config => {
  const cursorColor = config.cursorColor || 'rgb(248,29,229)'
  const borderColor = config.borderColor || '#444'
  
  const tabText = white
  const tabTextActive = '#fff'
  const dividerBg = 'rgba(255,255,255,.1)'

  return Object.assign({}, config, {
    foregroundColor: white,
    backgroundColor: black,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .tabs_list {
        margin-left: 0;
      }
      .tab_tab.tab_first {
        padding-left: 82px;
      }
      .tab_textInner {
        color: ${tabText};
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .tab_firstActive {
        border-left-width: 0px;
      }
      .tabs_borderShim {
        border-width: 0 !important;
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
    `
  })
}