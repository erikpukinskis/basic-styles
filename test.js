var runTest = require("run-test")(require)

runTest("runs", ["./"],
  function(expect, done, styles) {
    expect(styles).not.to.be.null
    done()
  }
)