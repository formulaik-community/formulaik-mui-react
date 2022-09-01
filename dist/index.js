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

require('react');
var loadable = _interopDefault(require('@loadable/component'));

var index = (function (props) {
  var type = props.type;

  if (!keys.includes(type)) {
    return null;
  }

  try {
    var Component = loadable(function (_) {
      return new Promise(function (resolve) { resolve(_interopNamespace(require("./" + type))); });
    }, {
      cacheKey: function cacheKey(_) {
        return type;
      }
    });
    return Component;
  } catch (e) {
    return null;
  }
});
var keys = ['input', 'submit', 'checkbox', 'select', 'textArea', 'selectCountry', 'inputPhoneNumber', 'datePicker', 'aceEditor', 'cronGenerator', 'jsonEditor', 'cronEditor', 'autocomplete', 'radioGroup', 'html', 'divider', 'button', 'buttonGroup', 'switch', 'rating', 'dateRangePicker', 'h1', 'h2', 'h3', 'h4', 'visualSelect', 'avatar', 'fileUpload', 'inputCurrency', 'numericStepper', 'submitInline', '_containerVertical', '_containerHorizontal', '_buttonAdd'];

module.exports = index;
//# sourceMappingURL=index.js.map
