var library = require("module-library")(require)

module.exports = library.export(
  "basic-styles",
  ["web-element"],
  function(element) {

    // # Component Styles

    // This a minimal set of UI (user interface) controls for typing and pushing buttons and stuff.

    // ## Type

    // We start with the typeface. Helvetica with slightly darkened headings.

    var base = element.style(
      "body, input, button, .button, p, textarea, select", {
        "font-family": "Helvetica",
        "font-size": "14pt",
        "color": "#555",
        "-webkit-font-smoothing": "antialiased",
      }
    )

    var lilPage = element.style(
      ".lil-page",{
      "display": "block",
      "max-width": "420px",
      "min-height": "5em",
      "margin": "2em 1em",
      "padding": "1.5em 1em",
      "box-sizing": "border-box",
      "border-radius": "3px",
      "border": "1px solid #ebe9ff",
      "background": "#f5f6f7", // darker: "#ecf0f1",

      " h1:first-child": {
        "margin-top": "0"
      },
    })

    var p = element.style("p", {
      "margin-top": "1em", // 1em / 1.3em
      "margin-bottom": "0",
    })

    var h1 = element.style(
      "h1, h2", {
        "-webkit-font-smoothing": "auto",
        "font-weight": "normal",
        "font-size": "1.3em",
        "margin-top": "1em",
        "margin-bottom": "0",
        "color": "#222",
      }
    )

    var h2 = element.style(
      "h2",{
      "font-weight": "lighter",
      "color": "#804",
      "font-size": "1.4em"})

    // ## Buttons

    // A button is just a rectangle with a background color.

    var BASIC_GREEN = "#0ad188"
    
    var button = element.style(
      "button, .button, .multiple-choice, input[type=submit], select",
      {
        "background": BASIC_GREEN,
        "-webkit-appearance": "none",
        "-webkit-border-radius": "0",
        "border-radius": "3px",
        "box-sizing": "border-box",
        "border": "1px solid #1d8",
        "color": "white",
        "display": "inline-block",
        "padding": "8px 10px",
        "cursor": "pointer",
        "text-decoration": "none",
        "box-sizing": "border-box",
      }
    )

    // ## Entering text

    // Text inputs have a gray label

    var input = element.style(
      "input, input[type=text], .container, .multiple-choice", {
        "border": "0px",
        "display": "block",
        "max-width": "20em",
      }
    )
 
    var buttonHover = element.style(
      "button:hover, .button:hover, .multiple-choice:hover, input[type=submit]:hover", {
        "background-color": "rgb(0, 226, 143)",
      }
    )

    var placeholder = element.style(
      "input::placeholder, textarea::placeholder",
      {
        "color": "#9aa",
      }
    )

    // and an underline.

    var textInput = element.style(
      "input[type=text], textarea, .text-input",
      {
        "border-bottom": "2px solid #bbb",

        // Looks about right when we have <p>Text></p><p><input></p>
        "padding-top": "9px",
        "margin-top": "10px",

        "padding-right": "15px",
        "padding-left": "15px",
        "padding-bottom": "7px", 
        "display": "block",
        "background": "#feffff",
      }
    )

    var inputWidth = element.style(
      "input[type=text]:not([size]), textarea, .text-input", {
        "width": "85%",
      })

    var textarea = element.style(
      "textarea",
      {
        "border-top": "none",
        "border-right": "none",
        "border-left": "none",
        "box-shadow": "inset 0px 2px 7px #e8f3f3",
      }
    )

    // Boxes

    var container = element.style(".container",
      {
        "padding": "15px 10px 0px 10px",
        "box-shadow": "0px 2px 7px rgba(0,0,0,0.2)",
      }
    )

    var grid12 = element.style(
      ".grid-12",
      {
        "display": "inline-block",
        "width": "12em",
      }
    )

    var grid8 = element.style(
      ".grid-8",
      {
        "display": "inline-block",
        "width": "8em",
      }
    )

    var grid4 = element.style(
      ".grid-4",
      {
        "display": "inline-block",
        "width": "4em",
      }
    )

    var stylesheet = element.stylesheet(base, p, h1, h2, button, input, textarea, inputWidth, buttonHover, placeholder, textInput, container, grid12, grid8, grid4, lilPage)

    stylesheet.addTo = function(bridge) {
      if (!bridge.__isNrtvBrowserBridge) {
        throw new Error("Trying to add styles to "+bridge+" but it's not a browser bridge.")
      }
      
      if (bridge.__hasNrtvBasicStyles) { return }

      bridge.addToHead(stylesheet)
      bridge.__hasNrtvBasicStyles = true
    }

    stylesheet.green = BASIC_GREEN

    return stylesheet
  }
)