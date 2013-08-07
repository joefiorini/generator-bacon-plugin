module.exports =
  dist:
    files: [
      expand: true
      cwd: "tmp/finalized"
      src: "**/*.js"
      dest: "dist/"
    ]

  finalize:
    files: [
      expand: true
      cwd: "tmp/transpiled"
      src: "**/*.js"
      dest: "tmp/finalized"
    ]

  testRun:
    files: [
      expand: true
      cwd: "tmp/test/transpiled"
      src: "**/*.js"
      dest: "tmp/test/run"
    ]
