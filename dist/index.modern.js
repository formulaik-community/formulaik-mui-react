import loadable from '@loadable/component';

var index = (function (props) {
  var type = props.type;
  return loadable(function (_) {
    return import("./" + type);
  }, {
    cacheKey: function cacheKey(_) {
      return type;
    }
  });
});

export default index;
//# sourceMappingURL=index.modern.js.map
