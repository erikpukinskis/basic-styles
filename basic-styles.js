var library = require("module-library")(require)

module.exports = library.export(
  "basic-styles",
  ["web-element"],
  function(element) {
    var p = element.style(
      "body, input, button, p", {
        "font-family": "Helvetica",
        "font-size": "18px",
        "color": "#555",
        "-webkit-font-smoothing": "antialiased",
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


    var button = element.style(
      "button, .multiple-choice, input[type=submit]", 
      {
        "background": "rgb(10, 209, 136)",
        "color": "white",
        "display": "inline-block",
        "margin-right": "15px",
        "margin-bottom": "15px",
      }
    )

    var input = element.style(
      "input, input[type=text], button, .container, li, .multiple-choice, .row", {
        "border": "0px",
        "padding": "9px 15px",
        "display": "block",
        "margin-bottom": "15px",
      }
    )

    var buttonHover = element.style(
      "button:hover, .multiple-choice:hover, input[type=submit]:hover", {
        "background-color": "rgb(0, 226, 143)",
      }
    )

    var placeholder = element.style(
      "input::-webkit-input-placeholder",
      {
        "color": "#aaa",
      }
    )

    var textInput = element.style(
      "input[type=text]",
      {
        "border-bottom": "2px solid #bbb",
        "width": "20em",
      }
    )

    var container = element.style(".container",
      {
        "padding-bottom": "0px",
        "box-shadow": "0px 2px 7px rgba(0,0,0,0.2)",
      }
    )

    var stylesheet = element.stylesheet(p, h1, button, input, buttonHover, placeholder, textInput, container)

    return stylesheet
  }
)