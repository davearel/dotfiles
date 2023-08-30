// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: "stable",

    // font family with optional fallbacks
    fontFamily:
      '"Cascadia Code PL", "FiraCode-Retina", Menlo, "Inconsolata for Powerline", "DejaVu Sans Mono", "Consolas", "Lucida Console", "monospace"',
    // alternative1: '"Operator Mono", "Inconsolata for Powerline", "IBMPlexMono-Italic",monospace',
    // alternative2: "Fira, Menlo, Monaco, 'Courier New', monospace",

    // default font weight: 'normal' or 'bold'
    fontWeight: "normal",

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: "bold",

    // Default font size in pixels for all tabs.
    fontSize: 16,

    // Terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk).
    cursorColor: "rgba(248,28,229,0.8)",

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █.
    cursorShape: "BEAM",

    // Set to true for blinking cursor.
    cursorBlink: false,

    // Custom css to embed in the main window.
    css: `
      .term_fit:not(.term_term) {
        opacity: 1 !important
      }
      .terminal: not(.focus) {
        opacity: 1;
        }
      .terminal.focus {
        opacity: 1;
      }
    `,

    // custom css to embed in the terminal window
    termCSS: "",

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    // showHamburgerMenu: "",

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: "",

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: "12px 14px",

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object

    // colors: {
    //   black: "#000000",
    //   red: "#C51E14",
    //   green: "#1DC121",
    //   yellow: "#C7C329",
    //   blue: "#0A2FC4",
    //   magenta: "#C839C5",
    //   cyan: "#20C5C6",
    //   white: "#C7C7C7",
    //   lightBlack: "#686868",
    //   lightRed: "#FD6F6B",
    //   lightGreen: "#67F86F",
    //   lightYellow: "#FFFA72",
    //   lightBlue: "#6A76FB",
    //   lightMagenta: "#FD7CFC",
    //   lightCyan: "#68FDFE",
    //   lightWhite: "#FFFFFF"
    // },

    // the shell to run when spawning a new session (i.e. bash, zsh, /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default.
    // shell: "/usr/local/bin/zsh",

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    // shellArgs: ["--login"],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: "SOUND",

    // if true, selected text will be auto copied to the clipboard
    copyOnSelect: false,

    // if true, hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    // quickEdit: true,

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // https://github.com/webmatze/hyperborder
    hyperBorder: {
      // animate: {
      //   duration: "16s", // default is 16s
      // },
      borderColors: ["#FF2C70", "#5D3DE1", "#fad000", "#6937FF"],
      // borderColors: ["#FF2C70", "#6937FF"],
      // borderWidth: "10px",
    },
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  plugins: [
    "hyper-search",
    "hyper-pane",
    "hyper-snazzy",
    "hyperlinks",
    "hyperborder",
    "hyper-match",
    "shades-of-purple-hyper",
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    "window:devtools": "cmd+shift+i",
  },
};
