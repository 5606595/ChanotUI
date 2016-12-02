;(function (win, lib) {

  // Get file basename, borrowed from `browserify`
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  function splitPath(filename) {
    return splitPathRe.exec(filename).slice(1);
  }
  function basename(path, ext) {
    var f = splitPath(path)[2];
    if (ext && f.substr(-1 * ext.length) === ext) {
      f = f.substr(0, f.length - ext.length);
    }
    return f;
  }

  lib.cdnurl = function (path, pathMap) {
    var fileName = basename(path);
    pathMap = pathMap || win.CDN_URL;
    if (pathMap && pathMap[fileName]) {
      return pathMap[fileName];
    } else {
      return path;
    }
  }
}) (window, window['lib'] || (window['lib'] = {}));

module.exports = lib.cdnurl;
