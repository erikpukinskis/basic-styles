var runTest = require("run-test")(require)

runTest.failAfter(1000000000)

runTest("runs", ["./"],
  function(expect, done, styles) {
    expect(styles).not.to.be.null
    done()
  }
)


runTest(
  "loads a spinner",
  ["./spinner", "browser-bridge", "web-site"],
  function(expect, done, loading, BrowserBridge, site) {
    var bridge = new BrowserBridge()
    loading.defineOn(bridge)
    site.addRoute("get", "/", bridge)
    site.start(9000)
  }
)