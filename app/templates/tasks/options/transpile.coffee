module.exports =
  src:
    type: "umd"
    imports:
      baconjs: "Bacon"

    files: [
      expand: true
      cwd: "tmp/compiled"
      src: ["**/*.js"]
      dest: "tmp/transpiled"
    ]

  test:
    type: "cjs"
    files: [
      expand: true
      cwd: "tmp/test/compiled"
      src: ["**/*.js"]
      dest: "tmp/test/transpiled"
    ,
      expand: true
      cwd: "tmp/compiled"
      src: ["**/*.js"]
      dest: "tmp/test/transpiled"
    ]

  browserTest:
    type: "umd"
    imports:
      bacon: "Bacon"
      chai: "chai"

    files: [
      expand: true
      cwd: "tmp/compiled"
      src: ["**/*.js"]
      dest: "tmp/test/transpiled"
    ,
      expand: true
      cwd: "test"
      src: ["**/*.js"]
      dest: "tmp/test/transpiled"
    ]
