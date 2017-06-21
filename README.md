**basic-styles** lets you lay out text and forms for interacting with a person.

## Demo

```javascript
var library = require("module-library")(require)

library.using(
  ["./", "web-element", "web-host"],
  function(basicStyles, element, host) {

    var sample = [
        element("h1", "Some things you can do with basic-styles"),
        element("input", {type: "text", placeholder: "You might type here"}),
        element("p", "This is a paragraph. Proceeded by a textarea:"),
        element("textarea"),
        element("p", element("button", "Click me")),
      ]

    host.onRequest(function(getBridge) {
      var bridge = getBridge()
      basicStyles.addTo(bridge)
      bridge.send(sample)
    })

  }
)
```

![screenshot of a h1, input, p, button, and textarea using the styles](/demo.gif)
