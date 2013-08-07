module.exports = dist:
  src: "dist/<%= _.slugify(appname) %>.js"
  dest: "dist/<%= _.slugify(appname) %>.min.js"
