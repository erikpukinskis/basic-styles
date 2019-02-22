var library = require("module-library")(require)

library.using(
  ["./", "web-element", "express"],
  function(basicStyles, element, express) {

    var sample = [
        element("h1", "Some things you can do with basic-styles"),
        element("input", {type: "text", placeholder: "You might type here"}),
        element("p", "This is a paragraph. Proceeded by a textarea:"),
        element("textarea"),
        element("p", element("button", "Click me")),
      ]

    var page = element(
      element("head", basicStyles.html()),
      element("body", sample)).html()

    var app = express()

    app.get("/", function(request, response) {
      response.send(page)})
  }
)