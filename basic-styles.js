var library = require("module-library")(require)

module.exports = library.export(
  "basic-styles",
  ["web-element"],
  function(element) {

    // # Component Styles

    // This a minimal set of UI (user interface) controls for typing and pushing buttons and stuff.

    // ## Type

    // We start with the typeface. Helvetica with slightly darkened headings.

    var p = element.style(
      "body, input, button, .button, p, textarea", {
        "font-family": "Helvetica",
        "font-size": "13pt",
        "color": "#555",
        "-webkit-font-smoothing": "antialiased",
        "max-width": "600px",
      }
    )

    var h1 = element.style(
      "h1", {
        "-webkit-font-smoothing": "auto",
        "font-weight": "normal",
        "font-size": "1em",
        "padding-top": "25px",
      }
    )

    // ## Buttons

    // A button is just a rectangle with a background color.

    var button = element.style(
      "button, .button, .multiple-choice, input[type=submit]", 
      {
        "background": "rgb(10, 209, 136)",
        "border": "none",
        "color": "white",
        "display": "inline-block",
        "padding": "8px 10px 7px 10px",
        "margin-top": "0.25em",
        "cursor": "pointer",
        "text-decoration": "none",
        "box-sizing": "border-box",
      }
    )

    // ## Entering text

    // Text inputs have a gray label

    var input = element.style(
      "input, input[type=text], .container, li, .multiple-choice, .row", {
        "border": "0px",
        "display": "block",
        "margin-bottom": "15px",
      }
    )
 
    var buttonHover = element.style(
      "button:hover, .button:hover, .multiple-choice:hover, input[type=submit]:hover", {
        "background-color": "rgb(0, 226, 143)",
      }
    )

    var placeholder = element.style(
      "input::-webkit-input-placeholder",
      {
        "color": "#9aa",
      }
    )

    // and an underline.

    var textInput = element.style(
      "input[type=text], textarea",
      {
        "border-bottom": "2px solid #bbb",
        "padding": "11px 15px 7px 15px",
        "width": "85%",
        "color": "#3b8",
        "display": "block",
        "background": "#feffff",
      }
    )

    var textarea = element.style(
      "textarea",
      {
        "margin-bottom": "15px",
        "border-top": "none",
        "border-right": "none",
        "border-left": "none",
        "min-height": "8em",
        "box-shadow": "inset 0px 2px 7px #e8f3f3",
      }
    )

    // Boxes

    var container = element.style(".container",
      {
        "padding-bottom": "0px",
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

    var stylesheet = element.stylesheet(p, h1, button, input, textarea, buttonHover, placeholder, textInput, container, grid12, grid8, grid4)

    return stylesheet
  }
)