'use strict'

const black = '#000'
const white = '#fff'
const red = '#ff2e88'
const green = '#50e3c2'
const cyan = green
const yellow = '#ccc'
const blue = '#ccc'
const magenta = '#ccc'
const lightWhite = '#ccc'
const lightBlack = '#777'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
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
  const borderColor = config.borderColor || '#404040'
  
  const tabText = '#999' 
  const tabTextActive = white
  const dividerBg = 'rgba(255,255,255,.2)'

  return Object.assign({}, config, {
    foregroundColor: lightWhite,
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
      .tab_textInner {
        color: ${tabText};
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
    `
  })
}
