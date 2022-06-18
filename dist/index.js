function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

function _interopNamespace(e) {
  if (e && e.__esModule) { return e; } else {
    var n = {};
    if (e) {
      Object.keys(e).forEach(function (k) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      });
    }
    n['default'] = e;
    return n;
  }
}

var loadable = _interopDefault(require('@loadable/component'));

var index = (function (props) {
  var type = props.type;
  return loadable(function (_) {
    return new Promise(function (resolve) { resolve(_interopNamespace(require("./" + type))); });
  }, {
    cacheKey: function cacheKey(_) {
      return type;
    }
  });
});

module.exports = index;
//# sourceMappingURL=index.js.map
